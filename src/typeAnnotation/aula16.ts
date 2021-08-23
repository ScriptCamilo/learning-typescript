// STRUCTURAL TYPE SYSTEM

type User = { username: string; password: string };
type VerifyUserFn = (user: User, sentUser: User) => boolean;

const verifyUser: VerifyUserFn = (user, sentUser) => {
  return (
    user.username === sentUser.username && user.password === sentUser.password
  );
};

const dbUser = { username: 'Script', password: '123456' };
const sentUser = { username: 'Script', password: '123456' };
const loggedIn = verifyUser(dbUser, sentUser);
console.log(loggedIn); // true OR false
