/** chunk id: 213530, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    K: () => d
});
var r = n(627968),
    i = n(503698),
    a = n.n(i),
    o = n(311907),
    s = n(582754),
    l = n(607470),
    c = n(544028),
    u = n(515648);
let d = e => {
    let {
        className: t,
        options: n
    } = e, i = (0, o.bG)([c.A], () => (0, s.Mw)(c.A.theme));
    return null == n ? null : null != n ? n.animated ? (0, r.jsx)(l.A, {
        src: n.getSrc(i),
        className: a()(u.O, t),
        style: n.style,
        loop: !1,
        muted: !0,
        autoPlay: !0
    }) : (0, r.jsx)("img", {
        src: n.getSrc(i),
        className: a()(u.O, t),
        style: n.style,
        alt: "",
        "aria-hidden": "true"
    }) : null
}