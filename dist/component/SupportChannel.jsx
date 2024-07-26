import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {
  Container, Typography, Card, CardContent, CardActions,
  Button, TextField, Grid, Dialog, DialogActions,
  DialogContent, DialogContentText, DialogTitle,
  List, ListItem, ListItemText, ListItemAvatar, Avatar
} from '@mui/material';
import Cookies from 'js-cookie';
const SupportChannel = () => {
  const [tickets, setTickets] = useState([]);
  const [reply, setReply] = useState('');
  const [selectedTicket, setSelectedTicket] = useState(null);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [chatDialogOpen, setChatDialogOpen] = useState(false);
  const [chatMessages, setChatMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');

  useEffect(() => {
    fetchSupportTickets();
  }, []);

  const fetchSupportTickets = async () => {
    try {
      const token = localStorage.getItem('token1');
      console.log(process.env.API_PORT);
      console.log('Token retrieved:', token);
      if (!token) {
        console.error('No token found');
        return;
      }
      const response = await axios.get('http://localhost:2000/api/admin/support',
        {
          headers: { token: token },
        });
      setTickets(response.data.tickets);
    } catch (error) {
      console.error('Failed to fetch support tickets:', error);
    }
  };

  const fetchChatMessages = async (supportId) => {
    try {
      const response = await axios.post('http://localhost:2000/api/admin/support/supportChat', { supportId });
      setChatMessages(response.data);
    } catch (error) {
      console.error('Failed to fetch chat messages:', error);
    }
  };

  const handleReply = async (ticketId) => {
    try {
      await axios.post('http://localhost:2000/api/admin/support/reply', { ticketId, reply });
      setReply('');
      setSelectedTicket(null);
      setDialogOpen(false);
      fetchSupportTickets();
      fetchChatMessages(ticketId);
    } catch (error) {
      console.error('Failed to reply to support ticket:', error);
    }
  };

  const handleSendMessage = async (ticketId) => {
    try {
      await axios.post('http://localhost:2000/api/admin/support/reply', { ticketId, reply: newMessage });
      setNewMessage('');
      fetchChatMessages(ticketId);
    } catch (error) {
      console.error('Failed to send message:', error);
    }
  };

  const handleEscalate = async (ticketId) => {
    try {
      await axios.post('http://localhost:2000/api/admin/support/escalate', { supportId: ticketId });
      fetchSupportTickets();
    } catch (error) {
      console.error('Failed to escalate support ticket:', error);
    }
  };

  const handleResolve = async (ticketId) => {
    try {
      await axios.post('http://localhost:2000/api/admin/support/resolve', { supportId: ticketId });
      fetchSupportTickets();
    } catch (error) {
      console.error('Failed to resolve support ticket:', error);
    }
  };

  const openDialog = (ticketId) => {
    setSelectedTicket(ticketId);
    setDialogOpen(true);
  };

  const closeDialog = () => {
    setDialogOpen(false);
    setSelectedTicket(null);
    setReply('');
  };

  const openChatDialog = async (ticketId) => {
    setSelectedTicket(ticketId);
    await fetchChatMessages(ticketId);
    setChatDialogOpen(true);
  };

  const closeChatDialog = () => {
    setChatDialogOpen(false);
    setChatMessages([]);
    setSelectedTicket(null);
  };

  return (
    <Container style={styles.container}>
      <Typography variant="h4" style={styles.title}>Support Channel</Typography>
      <Grid container spacing={3}>
        {tickets.map(ticket => (
          <Grid item xs={12} md={6} key={ticket.id}>
            <Card style={styles.ticketCard}>
              <CardContent>
                <Typography variant="h6"><strong>ID:</strong> {ticket.id}</Typography>
                <Typography variant="body1"><strong>Status:</strong> {ticket.status}</Typography>
                <Typography variant="body1"><strong>User ID:</strong> {ticket.userId}</Typography>
                <Typography variant="body2"><strong>Subject:</strong> {ticket.subject}</Typography>
              </CardContent>
              <CardActions>
                <Button size="small" color="secondary" onClick={() => handleEscalate(ticket.id)}>Escalate</Button>
                <Button size="small" color="primary" onClick={() => handleResolve(ticket.id)}>Resolve</Button>
                <Button size="small" onClick={() => openDialog(ticket.id)}>Reply</Button>
                <Button size="small" onClick={() => openChatDialog(ticket.id)}>Open Chat</Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
      <Dialog open={dialogOpen} onClose={closeDialog}>
        <DialogTitle>Reply to Ticket</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Write your reply to the selected ticket.
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="reply"
            label="Reply"
            type="text"
            fullWidth
            multiline
            rows={4}
            value={reply}
            onChange={(e) => setReply(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={closeDialog} color="primary">
            Cancel
          </Button>
          <Button onClick={() => handleReply(selectedTicket)} color="primary">
            Send Reply
          </Button>
        </DialogActions>
      </Dialog>
      <Dialog open={chatDialogOpen} onClose={closeChatDialog} fullWidth maxWidth="md">
        <DialogTitle>Chat Messages</DialogTitle>
        <DialogContent>
          <List>
            {chatMessages.map((message, index) => (
              <ListItem key={index} alignItems="flex-start">
                <ListItemAvatar>
                  <Avatar>{message.senderId ? message.senderId[0] : '?'}</Avatar>
                </ListItemAvatar>
                <ListItemText
                  primary={message.message || 'No message content'}
                  secondary={new Date(message.createdAt).toLocaleString()}
                />
              </ListItem>
            ))}
          </List>
          <TextField
            autoFocus
            margin="dense"
            id="newMessage"
            label="New Message"
            type="text"
            fullWidth
            multiline
            rows={2}
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={closeChatDialog} color="primary">
            Close
          </Button>
          <Button onClick={() => handleSendMessage(selectedTicket)} color="primary">
            Send
          </Button>
        </DialogActions>
      </Dialog>
    </Container>
  );
};

const styles = {
  container: {
    padding: '20px',
    backgroundColor: '#f9f9f9',
    minHeight: '100vh',
  },
  title: {
    textAlign: 'center',
    marginBottom: '30px',
    color: '#333',
    fontWeight: '500',
  },
  ticketCard: {
    padding: '20px',
    backgroundColor: '#fff',
    borderRadius: '8px',
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
    marginBottom: '20px',
  },
};

export default SupportChannel;
