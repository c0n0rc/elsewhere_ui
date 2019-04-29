// Ref: https://alligator.io/react/simple-authorization/
export const hasRole = (user, roles) => roles.some(role => user.roles.includes(role));
