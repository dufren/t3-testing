import { type NextPage } from "next";
import Head from "next/head";

const ProfilePage: NextPage = () => {
  return (
    <>
      <Head>
        <title>T3-testing</title>
        <meta name="description" content="Created by zgr" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex h-screen justify-center">
        <div className="h-full w-full border-x border-slate-400 md:max-w-2xl">
          <div>Profile View</div>
        </div>
      </main>
    </>
  );
};

export default ProfilePage;
