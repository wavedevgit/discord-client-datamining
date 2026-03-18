/** chunk id: 247455 params = (module,exports,require) **/
n.d(t, {
    A: () => d
});
var i = n(627968);
n(64700);
var a = n(503698),
    l = n.n(a),
    r = n(303136),
    s = n(778827),
    o = n(181713);
let d = e => {
    let {
        className: t,
        isAnimated: n = !1,
        questName: a
    } = e, d = n ? o.A : o.A + "?format=webp";
    return (0, i.jsx)("div", {
        className: l()(s.k, t),
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
            alt: a
        })
    })
}