import React, { useState, useRef } from "react";
import QRCode from "react-qr-code";

export default function Qrcode() {
  const [valorqrCode, setValorqrCode] = useState("https://github.com/guilxp");
  const canvasRef = useRef(null);

  function downloadQRCode() {
    const canvas = canvasRef.current;
    if (!canvas) {
      return;
    }
    const pngUrl = canvas
      .toDataURL("image/png")
      .replace("image/png", "image/octet-stream");
    window.open(pngUrl, "_blank");
  }

  return (
    <>
      <div className="bg-white rounded-lg shadow-2xl w-9/12 p-3 m-auto">
        <div className="flex flex-col items-center">
          {valorqrCode != "" && (
            <QRCode
              value={valorqrCode}
              className="bg-blue-500 rounded-2xl shadow py-10"
              size={200}
              bgColor={"#3482F6"}
              fgColor={"#FFFFFF"}
              level={"H"}
              includeMargin={true}
              renderAs={"svg"}
            />
          )}
          <input
            type="text"
            onChange={(e) => {
              setValorqrCode(e.target.value);
            }}
            className="input border-slate-600 border rounded-lg m-2 p-1"
          />
          <div className="mb-4">
            <div className="text-lg font-bold leading-relaxed">
              <h1>Improving my front-end </h1>
              <h1>skills by building projects</h1>
            </div>

            <div className="text-sm text-slate-500 leading-relaxed">
              <p>Scan the default QR code to visit my Portfolio</p>
              <p>and take shot on my coding skills.</p>
              <p>You can also type something to modify the QR Code.</p>
            </div>
          </div>
          {/* <button
            onClick={downloadQRCode}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Download
          </button> */}
        </div>
      </div>
    </>
  );
}
