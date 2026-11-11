import { ImageResponse } from 'next/og';
export const size = { width: 64, height: 64 };
export const contentType = 'image/png';
export const dynamic = 'force-static';
export default function Icon() { return new ImageResponse(<div style={{background:'#243e31',color:'#d3f366',width:'100%',height:'100%',display:'flex',alignItems:'center',justifyContent:'center',fontSize:30,fontWeight:700,letterSpacing:-2}}>gdl</div>,size); }
