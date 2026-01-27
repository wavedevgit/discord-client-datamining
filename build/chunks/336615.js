/** Chunk was on web.js **/
/** chunk id: 336615, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => l
});
var r = n(627968),
    i = n(64700),
    a = n(503698),
    o = n.n(a),
    s = n(742947);
let l = e => {
    let {
        src: t,
        alt: n,
        size: a,
        "aria-label": l,
        className: c
    } = e, u = i.useRef(null), d = i.useRef(!1), f = d.current ? s.S : s.Y;
    return (0, r.jsx)("img", {
        className: o()(f, c),
        alt: n,
        src: t,
        ref: u,
        "aria-label": l,
        style: {
            backgroundSize: a,
            height: a,
            width: a
        },
        onLoad: d.current ? void 0 : e => {
            var t, n, r;
            (null != (t = null == (r = e.currentTarget) || null == (n = r.ownerDocument) ? void 0 : n.defaultView) ? t : window).requestAnimationFrame(() => {
                null != u.current && (d.current = !0, u.current.classList.remove(s.Y), u.current.classList.add(s.S))
            })
        }
    })
}