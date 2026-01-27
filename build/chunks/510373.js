/** Chunk was on web.js **/
/** chunk id: 510373, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => o
}), n(228524);
var r = n(64700),
    i = n(71526);
let a = Symbol();

function o(e, t, n) {
    let o = (0, i.A)(e),
        s = (0, r.useRef)(a);
    return s.current === a ? s.current = t : n(s.current, t) || (o.current = e(), s.current = t), o.current
}