import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <>
      <main className="bg-slate-200 h-screen w-screen justify-center flex text-center">
        <Component {...pageProps} />
      </main>
    </>
  );
}
