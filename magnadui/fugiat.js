function pickLine(a, p) {
  if (typeof p === 'number') {
    return a[p];
  } else if (typeof p === 'string') {
    return a.find(item => item.name === p);
  }
}
