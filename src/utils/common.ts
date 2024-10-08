export const ROUTE_PATH = {
  Home: '/',
};

export const getAvatar = () => {
  const randomNumber = Math.floor(Math.random() * 1_000_000);
  return `https://api.dicebear.com/7.x/fun-emoji/svg?seed=${randomNumber}`;
};
