const getrandomNum = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const randomNumber = (context, events, done) => {
  const randomNum = getrandomNum(0, 9999999);
  context.vars['randomNum'] = randomNum;
  return done();
};

module.exports = {
  randomNumber,
};
