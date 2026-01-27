/** Chunk was on web.js **/
/** chunk id: 129837, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    z: () => p
});
var r = n(627968);
n(64700);
var i = n(503698),
    a = n.n(i),
    o = n(56370),
    s = n(112317),
    l = n(630521);
let c = 8,
    u = 200,
    d = 272,
    f = (e, t) => {
        let n = (t ? d : u) / 2 - c;
        return Math.max(-n, Math.min(n, e))
    };

function p(e) {
    let {
        caretConfig: t
    } = e, {
        position: n,
        align: i,
        customOffset: c
    } = t, {
        isRichTooltip: u
    } = (0, s.w6)();
    if (null == n) return null;
    let d = "custom" === i && null != c ? {
            "--custom-caret-offset-x": ["top", "bottom"].includes(n) ? "".concat(f(c, u), "px") : "0px",
            "--custom-caret-offset-y": ["left", "right"].includes(n) ? "".concat(f(c, u), "px") : "0px"
        } : void 0,
        p = a()(l.caret, l["caret--".concat(n)], l["caret--".concat(i)]);
    return (0, r.jsx)("div", {
        className: p,
        style: d,
        children: (0, r.jsx)(o.a, {})
    })
}