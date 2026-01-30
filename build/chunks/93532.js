/** chunk id: 93532, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => a
}), n(896048), n(927092), n(212978), n(201528), n(393431), n(752391), n(532706), n(42231), n(232424), n(757074), n(949626), n(767709), n(65162);
var r = n(284009),
    i = n.n(r);
async function a(e) {
    let t, {
            default: r
        } = await n.e("25777").then(n.t.bind(n, 293384, 19)),
        a = r.createFile(!1),
        o = new Promise(e => {
            a.onReady = e
        }),
        s = await e.arrayBuffer();
    for (let e of (s.fileStart = 0, a.appendBuffer(s), a.flush(), await o, i()(null != a.boxes, "mp4boxInputFile.boxes should not be null after parsing"), a.boxes)) "uuid" === e.type && (t = e.start);
    let l = e.slice(0, t, e.type),
        c = e.slice(t + 4, t + 8 + 16, e.type);
    return new Blob([l, new Uint8Array([0, 0, 0, 24]), c], {
        type: e.type
    })
}