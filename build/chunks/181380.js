/** Chunk was on web.js **/
/** chunk id: 181380, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    V: () => s
});
var r = n(64700),
    i = n(311907),
    a = n(719718);

function s(e) {
    let t = (0, r.useRef)(new Audio(e)),
        n = (0, i.bG)([a.A], () => a.A.volume),
        s = (0, i.bG)([a.A], () => a.A.isMuted);
    return () => {
        t.current.currentTime = 0, t.current.volume = s ? 0 : n, t.current.play()
    }
}