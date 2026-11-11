import { ImageResponse } from 'next/og';
export const size = { width: 64, height: 64 };
export const contentType = 'image/png';
export const dynamic = 'force-static';
export default function Icon() { return new ImageResponse(<div style={{ background: '#fff', color: '#35464d', width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 29, fontFamily: 'serif' }}>gd</div>, size); }
