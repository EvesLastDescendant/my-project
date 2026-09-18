import { Card, CardContent, CardMedia, Button, Typography } from '@mui/material';

export default function BlogCard({ image, title, excerpt, slug }: { image: string; title: string; excerpt: string; slug: string }) {
  return <Card elevation={0} sx={{ height: '100%', border: '1px solid #e1e8f1', overflow: 'hidden' }}><CardMedia component="img" image={image} alt="" sx={{ height: 210, objectFit: 'cover' }} /><CardContent sx={{ p: 3 }}><Typography variant="h6" className="display-font">{title}</Typography><Typography color="text.secondary" sx={{ mt: 1, lineHeight: 1.7 }}>{excerpt}</Typography><Button href={`/blog/${slug}`} sx={{ mt: 2, px: 0, textTransform: 'none' }}>Read article</Button></CardContent></Card>;
}