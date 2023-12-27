const getRnd = (btm, top) => Math.floor(Math.random() * (top - btm) + btm);
const [btm, top] = [0, 5];
const getRandom = () => getRnd(btm, top);