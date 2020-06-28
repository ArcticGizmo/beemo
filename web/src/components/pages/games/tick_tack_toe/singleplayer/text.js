const SIZES = {
  largest: 48,
  larger: 36,
  large: 24,
};

export default function text(ctx, x, y, text, style, origin) {
  const sty = initStyle(style);
  const org = initOrigin(origin);

  return ctx.add.text(x, y, text, sty).setOrigin(...org);
}

function initStyle(size, opts) {
  return {
    fontFamily: 'Helvetica',
    fontSize: SIZES[size] || size || 16,
    color: '0xFFFFFF',
    align: 'center',
    ...(opts || {}),
  };
}

function initOrigin(origin) {
  if (origin == null || isNaN(origin)) {
    const org = { x: 0.5, y: 0.5, ...(origin || {}) };
    return [org.x, org.y]
  }

  return [origin, origin];
}
