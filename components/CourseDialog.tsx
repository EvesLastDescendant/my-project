'use client';

import { Button, Dialog, DialogContent, DialogTitle, Stack, Typography } from '@mui/material';
import { useState } from 'react';

export default function CourseDialog({ title, icon }: { title: string; icon: string }) {
  const [open, setOpen] = useState(false);
  return <><Button onClick={() => setOpen(true)} variant="contained" sx={{ borderRadius: 3, px: 3, py: 2, textTransform: 'none', fontWeight: 700 }}>{icon} {title}</Button><Dialog open={open} onClose={() => setOpen(false)} fullWidth maxWidth="sm"><DialogTitle>{title}</DialogTitle><DialogContent><Typography sx={{ mb: 2 }}>Three months of hands-on training with expert guidance, internship experience, certification, and job readiness support.</Typography><Stack component="ul" spacing={1} sx={{ pl: 2 }}><li>Expert-led instruction</li><li>Hands-on projects</li><li>Conducive learning environment</li><li>Certification and career connection</li></Stack><Typography color="primary" sx={{ mt: 2, fontWeight: 700 }}>N100k per seat. Limited seats available.</Typography><Button href="mailto:itcentralng@gmail.com" variant="contained" sx={{ mt: 3 }}>Enquire now</Button></DialogContent></Dialog></>;
}