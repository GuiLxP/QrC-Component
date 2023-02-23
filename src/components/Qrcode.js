import React, { useState, useRef } from "react";
import QRCode from "react-qr-code";

export default function Qrcode() {
  const [valorqrCode, setValorqrCode] = useState("http://github.com/guilxp");
  const canvasRef = useRef(null);

  function downloadQRCode() {
    const canvas = canvasRef.current;
    const pngUrl = canvas
      .toDataURL("image/png")
      .replace("image/png", "image/octet-stream");
    let downloadLink = document.createElement("a");
    downloadLink.href = pngUrl;
    downloadLink.download = "qrcode.png";
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
  }

  return (
    <>
      <div className="bg-white rounded-lg shadow-lg p-4">
        <div className="flex flex-col items-center">
          {valorqrCode != "" && (
            <canvas
              id="qrcode"
              ref={canvasRef}
              defaultValue={valorqrCode}
              className="bg-slate-200 rounded-lg shadow-sm py-10 m-2"
            >
              <QRCode value={valorqrCode} />
            </canvas>
          )}
          <input
            type="text"
            onChange={(e) => {
              setValorqrCode(e.target.value);
            }}
            className="input border-slate-600 border rounded-lg m-2 p-2"
          />
          <button
            onClick={() => {
              downloadQRCode();
            }}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Download
          </button>
        </div>
      </div>
    </>
  );
}
