type User = {userName: string; password: string};
type VerifyUserFn = (user: User, sentValue: User) => boolean;

const verifyUser: VerifyUserFn = (user, sentValue) => (
  user.userName === sentValue.userName && user.password === sentValue.password
);

const bdUser = { userName: 'joao', password: '123456' };
const sentUser = { userName: 'joao', password: '12346' };
const loggedIn = verifyUser(bdUser, sentUser);
console.log(loggedIn);

export default null;
