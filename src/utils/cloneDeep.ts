export const isPlainObject = <T>(val: T) => {
  return toString.call(val) === '[object Object]';
};

export const cloneDeep = <T>(src: T) => {
  const res: T = Object.create(null);

  if (src) {
    Object.keys(src).forEach((key) => {
      const val = src[key as keyof T];
      if (isPlainObject(val)) {
        res[key as keyof T] = cloneDeep(val);
      } else {
        res[key as keyof T] = val;
      }
    });
  }

  return res;
};
