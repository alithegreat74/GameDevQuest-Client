const sanitizeSchema = {
  tagNames: [
    'a','p','strong','em','ul','ol','li','blockquote','code','pre',
    'img','iframe','h1','h2','h3','h4','h5','h6','warning','note','error'
  ],
  attributes: {
    a: ['href','title','target','rel'],
    img: ['src','alt','title','width','height','loading','decoding'],
    iframe: [
      'src','title','allow','allowfullscreen','referrerpolicy','loading',
      'width','height','frameborder'
    ],
    warning: [], note: [], error: []
  },
  protocols: {
    a: { href: ['http','https','mailto','tel'] },
    img: { src: ['http','https','data'] },
    iframe: { src: ['https'] }
  }
} as const;

export default sanitizeSchema;