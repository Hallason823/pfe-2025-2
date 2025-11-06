'use client';
import { useState } from 'react';
import { AppBar, Toolbar, Typography, Button, Box, IconButton, Drawer, List, ListItem, ListItemButton, ListItemText } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

const pages = [
  { name: 'Home', path: '/home' },
  { name: 'Experiences', path: '/experiences' },
  { name: 'Projects', path: '/projects' },
  { name: 'About', path: '/about' },
];

export default function Navigation() {
  const [mobileOpen, setMobileOpen] = useState(false);
  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>Hallason Matias</Typography>
          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
            {pages.map((page) => <Button key={page.name} href={page.path} sx={{ color: 'white' }}>{page.name}</Button>)}
          </Box>
          <IconButton color="inherit" edge="start" onClick={() => setMobileOpen(!mobileOpen)} sx={{ display: { sm: 'none' } }}><MenuIcon /></IconButton>
        </Toolbar>
      </AppBar>
      <Drawer anchor="right" open={mobileOpen} onClose={() => setMobileOpen(false)} sx={{ display: { xs: 'block', sm: 'none' } }}>
        <List sx={{ width: 250 }}>
          {pages.map((page) => (
            <ListItem key={page.name} disablePadding>
              <ListItemButton href={page.path} onClick={() => setMobileOpen(false)}><ListItemText primary={page.name} /></ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
    </>
  );
}
