/** Chunk was on web.js **/
/** chunk id: 135564, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    F: () => p
}), n(65821);
var r = n(627968),
    i = n(64700),
    a = n(503698),
    o = n.n(a),
    s = n(964892),
    l = n(6e5),
    c = n(795127),
    u = n(887266);
let d = 12,
    f = function(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 240,
            n = t / 2 - d;
        return Math.max(-n, Math.min(n, e))
    };

function p(e) {
    let {
        className: t
    } = e, n = i.useContext(s.e);
    if (null == n) throw Error("PopoverCaret must be used within a BasePopover");
    let {
        position: a,
        caretConfig: d
    } = n, p = (0, c.g)(a), {
        align: _,
        customOffset: h
    } = d, m = "custom" === _ && void 0 !== h ? {
        "--custom-caret-offset-x": ["top", "bottom"].includes(p) ? "".concat(f(h), "px") : "0px",
        "--custom-caret-offset-y": ["left", "right"].includes(p) ? "".concat(f(h), "px") : "0px"
    } : void 0, g = o()(u.caret, u["caret--".concat(p)], u["caret--".concat(_)], t);
    return (0, r.jsx)("div", {
        className: g,
        style: m,
        children: (0, r.jsx)(l.S, {})
    })
}