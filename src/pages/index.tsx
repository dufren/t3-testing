import { type NextPage } from "next";
import Head from "next/head";

import { api } from "~/utils/api";

import { SignIn, SignInButton, SignOutButton, useUser } from "@clerk/nextjs";

const Home: NextPage = () => {
  const { isSignedIn, user } = useUser();

  const { data } = api.posts.getAll.useQuery();

  return (
    <>
      <Head>
        <title>Create T3 App</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c] text-slate-100">
        {!isSignedIn ? (
          <SignInButton mode="modal">
            <button className="btn">Sign in</button>
          </SignInButton>
        ) : (
          <div>
            <h1> Welcome! {user?.username}</h1>
            {data?.map((post) => (
              <div key={post.id}>{post.content}</div>
            ))}
            <SignOutButton>
              <button className="btn ">Sign out</button>
            </SignOutButton>
          </div>
        )}
        <SignIn path="/sign-in" routing="path" signUpUrl="/sign-up" />
      </main>
    </>
  );
};

export default Home;
