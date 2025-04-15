import React, { useEffect, useState, useRef } from 'react';
import QRCode from 'qrcode.react';

const ifconfigLines = [
  "eth0: flags=4163<UP,BROADCAST,RUNNING,MULTICAST>  mtu 1500",
  "        inet 192.168.1.42  netmask 255.255.255.0  broadcast 192.168.1.255",
  "        inet6 fe80::a00:27ff:fe4e:66a1  prefixlen 64  scopeid 0x20<link>",
  "        ether 08:00:27:4e:66:a1  txqueuelen 1000  (Ethernet)",
  "        RX packets 12345  bytes 1.3 GB",
  "        TX packets 67890  bytes 2.6 GB",
  "",
  "lo: flags=73<UP,LOOPBACK,RUNNING>  mtu 65536",
  "        inet 127.0.0.1  netmask 255.0.0.0",
  "        loop  txqueuelen 1000  (Local Loopback)",
  "        RX packets 9999  bytes 1.1 GB",
  "        TX packets 9999  bytes 1.1 GB",
  "",
  "wlan0: flags=4099<UP,BROADCAST,MULTICAST>  mtu 1500",
  "        inet 10.0.0.101  netmask 255.255.255.0  broadcast 10.0.0.255",
  "        ether 48:4d:7e:01:23:ab  txqueuelen 1000  (Wi-Fi)",
  "        RX packets 8888  bytes 2.1 GB",
  "        TX packets 7777  bytes 3.2 GB",
  "",
  "# Scan this to connect:"
];

const FakeIfconfig = () => {
  const [visibleLines, setVisibleLines] = useState([]);
  const containerRef = useRef(null);
  const [showQR, setShowQR] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      if (visibleLines.length < ifconfigLines.length) {
        setVisibleLines((prev) => [...prev, ifconfigLines[prev.length]]);
      } else {
        clearInterval(interval);
        setTimeout(() => setShowQR(true), 1000); // show QR after delay
      }
    }, 120);

    return () => clearInterval(interval);
  }, [visibleLines]);

  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollTop = containerRef.current.scrollHeight;
    }
  }, [visibleLines]);

  return (
    <div className="fixed inset-0 bg-black text-green-400 font-mono text-sm z-[9999] overflow-hidden">
      <div
        ref={containerRef}
        className="w-full h-full p-6 overflow-y-auto"
      >
        {visibleLines.map((line, idx) => (
          <p key={idx} className="leading-snug">{line}</p>
        ))}

        {showQR && (
          <div className="mt-6 flex justify-center">
            <QRCode value="https://www.youtube.com/watch?v=w0drLyhnByk" size={128} fgColor="#22c55e" bgColor="#000000" />
          </div>
        )}
      </div>
    </div>
  );
};

export default FakeIfconfig;
