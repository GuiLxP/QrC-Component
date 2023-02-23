import Head from "next/head";
import Qrcode from "../components/Qrcode";

export default function Home() {
  return (
    <>
      <Head>
        <title>QR Code</title>
        <meta name="description" content="QR CODE" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section className="my-20">
        <div className="my-20">
          <h1 className="text-4xl font-bold text-center">QR Code Generator</h1>
        </div>
        <div>
          <Qrcode />
        </div>
      </section>
    </>
  );
}
