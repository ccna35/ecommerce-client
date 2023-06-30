import Image from "next/image";
import Toggle from "./Toggle";

async function getAllUsers() {
  const res = await fetch("https://fakestoreapi.com/users");

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export default async function SellerList() {
  const users = await getAllUsers();

  return (
    <ul role="list" className="divide-y divide-gray-100">
      {users.map((user) => (
        <li
          key={user.id}
          className="flex justify-between items-center gap-6 py-5 flex-wrap"
        >
          <div className="flex gap-x-4">
            <div className="relative h-12 w-12">
              <Image
                className="flex-none rounded-full bg-gray-50"
                src="/userPhoto.svg"
                alt={user.name.firstname}
                priority
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
                fill
              />
            </div>
            <div className="min-w-0 flex-auto">
              <p className="max-w-sm truncate text-sm font-semibold leading-6 text-gray-900">
                {user.name.firstname + " " + user.name.lastname}
              </p>
              <p className="max-w-sm truncate text-sm font-extralight leading-6 text-gray-900">
                {user.email}
              </p>
            </div>
          </div>
          <div className="flex gap-4 flex-wrap">
            <Toggle />
          </div>
        </li>
      ))}
    </ul>
  );
}
