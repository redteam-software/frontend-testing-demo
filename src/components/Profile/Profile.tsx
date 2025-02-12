import { FC, useEffect, useState } from "react";

interface User {
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
  };
  website: string;
}

interface ProfileProps {
  userId?: number;
}

export const Profile: FC<ProfileProps> = ({ userId = 1 }) => {
  const [user, setUser] = useState<User>();

  useEffect(() => {
    (async () => {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/users/${userId}`,
      );
      console.log(await response.json());
      setUser(await response.json());
    })();
  }, [userId]);


  return user ? (
    <div className="border rounded-xl p-4">
      <h3 className="text-2xl/12 border-b">{user.name}</h3>
      <table className="text-left">
        <tbody>
          <tr>
            <td className="font-semibold p-4">Username</td>
            <td className="p-4">{user.username}</td>
          </tr>
          <tr>
            <td className="font-semibold p-4">Email</td>
            <td className="p-4">{user.email}</td>
          </tr>
          <tr>
            <td className="font-semibold p-4">Address</td>
            <td className="p-4">
              <div>
                {user.address.street}, {user.address.suite}
              </div>
              <div>
                {user.address.city}, {user.address.zipcode}
              </div>
            </td>
          </tr>
          <tr>
            <td className="font-semibold p-4">Website</td>
            <td className="p-4">
              <a href={user.website}>{user.website}</a>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  ) : (
    <h3>Loading...</h3>
  );
};
