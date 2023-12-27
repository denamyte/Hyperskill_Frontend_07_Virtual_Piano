const getRnd = (btm, top) => Math.floor(Math.random() * (top - btm + 1) + btm);
const [btm, top] = [1, 3];
const getRandom = () => getRnd(btm, top);
