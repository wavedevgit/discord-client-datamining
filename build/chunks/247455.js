/** chunk id: 247455 params = (module,exports,require) **/
n.d(t, {
    A: () => d
});
var i = n(627968);
n(64700);
var l = n(503698),
    a = n.n(l),
    r = n(303136),
    s = n(265234),
    o = n(181713);
let d = e => {
    let {
        className: t,
        isAnimated: n = !1,
        questName: l
    } = e, d = n ? o.A : o.A + "?format=webp";
    return (0, i.jsx)("div", {
        className: a()(s.k, t),
        children: n ? (0, i.jsx)(r.A, {
            preload: "auto",
            className: s.L,
            children: (0, i.jsx)("source", {
                src: d,
                type: "video/webm"
            })
        }) : (0, i.jsx)("img", {
            className: s.L,
            src: d,
            alt: l
        })
    })
}