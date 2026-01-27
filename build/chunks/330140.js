/** Chunk was on web.js **/
/** chunk id: 330140, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => o
});
var r = n(64700),
    i = n(161591);
let a = [];

function o(e, t) {
    let n = (0, r.useRef)(),
        o = (0, r.useRef)(a);
    return o.current === a ? (n.current = e(), o.current = t) : (0, i.A)(t, o.current) || (n.current = e(), o.current = t), n.current
}