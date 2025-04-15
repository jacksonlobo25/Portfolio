import React, { useEffect, useRef, useState } from 'react';

const panicLines = [
  "[   0.000000] Kernel panic - not syncing: Attempted to kill init!",
  "[   0.000001] CPU: 0 PID: 1 Comm: init Not tainted",
  "[   0.000002] Call Trace:",
  "[   0.000003] dump_stack+0x7d/0xa5",
  "[   0.000004] panic+0xe6/0x1f5",
  "[   0.000005] init+0x1a3/0x1b0",
  "[   0.000006] ret_from_fork+0x35/0x40",
  "[   0.000007] Kernel Offset: 0x0 from 0xffffffff81000000",
  "[   0.000008] Rebooting in 5 seconds... 🧨",
  "[   0.000009] ----------- cut here -----------",
  "[   0.000010] Please include the following dump...",
  "[   0.000011] Stack: 0000ffff81deadbeef 00000000c0ffee00",
  "[   0.000012] RIP: 0010:[<ffffffff8109c4c1>]  [<ffffffff8109c4c1>] crash_handler+0x21/0x30",
  "[   0.000013] Code: Bad EIP value.",
  "[   0.000014] CR2: 0000000000000000",
  "[   0.000015] ---[ end Kernel panic - not syncing: Fatal exception ]---"
];

const FakeKernelPanic = () => {
  const [visibleLines, setVisibleLines] = useState([]);
  const containerRef = useRef(null);
  const lineIndex = useRef(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (lineIndex.current < panicLines.length) {
        setVisibleLines(prev => [...prev, panicLines[lineIndex.current]]);
        lineIndex.current += 1;
      }
    }, 100); // fast terminal output speed

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    // Auto-scroll to bottom as new lines are added
    if (containerRef.current) {
      containerRef.current.scrollTop = containerRef.current.scrollHeight;
    }
  }, [visibleLines]);

  return (
    <div className="fixed inset-0 bg-black text-red-600 font-mono text-sm z-[9999] overflow-hidden">
      <div
        ref={containerRef}
        className="w-full h-full p-6 overflow-y-auto"
      >
        {visibleLines.map((line, idx) => (
          <p key={idx} className="leading-snug">{line}</p>
        ))}
      </div>
    </div>
  );
};

export default FakeKernelPanic;
