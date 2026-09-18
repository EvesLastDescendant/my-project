'use client';

import Link from 'next/link';
import { AppBar, Box, Button, Drawer, IconButton, Stack, Toolbar } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { useState } from 'react';

const links = [['Home', '/'], ['Trainings', '/#trainings'], ['Events', '/events'], ['Blog', '/blog'], ['About', '/#about']];

export default function SiteHeader() {
  const [open, setOpen] = useState(false);
  return <AppBar position="sticky" elevation={0} color="inherit" sx={{ borderBottom: '1px solid #e6ebf2' }}>
    <Toolbar sx={{ maxWidth: 1180, width: '100%', mx: 'auto', py: 1, justifyContent: 'space-between' }}>
      <Link href="/"><Box component="img" src="/pix/logo.png" alt="ITCentral" sx={{ width: { xs: 145, sm: 190 }, display: 'block' }} /></Link>
      <Stack direction="row" spacing={1} sx={{ display: { xs: 'none', md: 'flex' } }}>
        {links.map(([label, href]) => <Button key={label} component={Link} href={href} color="inherit" sx={{ textTransform: 'none', fontWeight: 600 }}>{label}</Button>)}
      </Stack>
      <IconButton aria-label="Open navigation" onClick={() => setOpen(true)} sx={{ display: { md: 'none' } }}><MenuIcon /></IconButton>
      <Drawer anchor="right" open={open} onClose={() => setOpen(false)}>
        <Box sx={{ width: 270, p: 2 }} role="presentation">
          <IconButton aria-label="Close navigation" onClick={() => setOpen(false)} sx={{ float: 'right' }}><CloseIcon /></IconButton>
          <Stack spacing={1} sx={{ mt: 7 }}>
            {links.map(([label, href]) => <Button key={label} component={Link} href={href} onClick={() => setOpen(false)} sx={{ justifyContent: 'flex-start', textTransform: 'none', fontSize: '1rem' }}>{label}</Button>)}
          </Stack>
        </Box>
      </Drawer>
    </Toolbar>
  </AppBar>;
}