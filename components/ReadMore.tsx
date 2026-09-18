'use client';

import { Button, Collapse, Typography } from '@mui/material';
import { useState } from 'react';

export default function ReadMore({ children }: { children: React.ReactNode }) {
  const [expanded, setExpanded] = useState(false);
  return <><Collapse in={expanded} collapsedSize={0}><Typography component="span">{children}</Typography></Collapse><Button onClick={() => setExpanded(value => !value)} size="small" sx={{ textTransform: 'none', px: 0 }}>{expanded ? 'Read less' : 'Read more'}</Button></>;
}