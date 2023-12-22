import { faker } from "@faker-js/faker";

interface User {
  userId: string;
  username: string;
  avatar: string;
}

export function createRandomUser(): User {
  return {
    userId: faker.string.uuid(),
    username: faker.internet.userName(),
    avatar: faker.image.avatar(),
  };
}

export const USERS: User[] = faker.helpers.multiple(createRandomUser, {
  count: 30,
});
