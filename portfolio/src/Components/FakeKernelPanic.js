import React from 'react';

const FakeKernelPanic = () => {
  return (
    <div className="fixed inset-0 bg-black text-red-600 font-mono text-sm p-6 z-[9999]">
      <div className="animate-pulse">
        <p>[   0.000000] Kernel panic - not syncing: Attempted to kill init!</p>
        <p>[   0.000001] CPU: 0 PID: 1 Comm: init Not tainted</p>
        <p>[   0.000002] Call Trace:</p>
        <p>[   0.000003] dump_stack+0x7d/0xa5</p>
        <p>[   0.000004] panic+0xe6/0x1f5</p>
        <p>[   0.000005] init+0x1a3/0x1b0</p>
        <p>[   0.000006] ret_from_fork+0x35/0x40</p>
        <p>[   0.000007] Kernel Offset: 0x0 from 0xffffffff81000000</p>
        <p>[   0.000008] Rebooting in 5 seconds... 🧨</p>
      </div>
    </div>
  );
};

export default FakeKernelPanic;
