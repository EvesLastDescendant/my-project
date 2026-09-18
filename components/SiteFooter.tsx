import Link from 'next/link';
import { Box, Container, Grid, Stack, Typography } from '@mui/material';

export default function SiteFooter() {
  return <Box component="footer" sx={{ bgcolor: '#10233f', color: 'white', mt: 10, py: 7 }}>
    <Container maxWidth="lg"><Grid container spacing={5}>
      <Grid size={{ xs: 12, md: 5 }}><Typography variant="h5" className="display-font" sx={{ mb: 2 }}>ITCentral</Typography><Typography sx={{ color: 'rgba(255,255,255,.72)', maxWidth: 360 }}>Building the next generation of northern tech startup founders through training, products, and community.</Typography><Typography sx={{ mt: 3, color: 'rgba(255,255,255,.72)' }}>No. 44A Isa Kaita Road, Unguwan Sarki, Kaduna<br />itcentralng@gmail.com<br />08088885123</Typography></Grid>
      <Grid size={{ xs: 6, md: 3 }}><Typography sx={{ fontWeight: 700, mb: 2 }}>Explore</Typography><Stack spacing={1}><Link href="/">Home</Link><Link href="/#trainings">Trainings</Link><Link href="/events">Events</Link><Link href="/blog">Blog</Link></Stack></Grid>
      <Grid size={{ xs: 6, md: 4 }}><Typography sx={{ fontWeight: 700, mb: 2 }}>What we do</Typography><Typography sx={{ color: 'rgba(255,255,255,.72)', lineHeight: 2 }}>Startup acceleration<br />Software solutions<br />SaaS products<br />Emerging technology<br />Graphics design</Typography></Grid>
    </Grid><Typography sx={{ mt: 7, color: 'rgba(255,255,255,.5)', fontSize: '.85rem' }}>© 2026 Mr Teey Investment. All rights reserved.</Typography></Container>
  </Box>;
}