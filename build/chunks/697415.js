/** Chunk was on 41727 **/
/** chunk id: 697415, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => o
});
var r = n(627968);
n(64700);
var l = n(503698),
    i = n.n(l),
    s = n(397927),
    a = n(335419);

function o(e) {
    let {
        total: t,
        users: n,
        videoLimit: l
    } = e;
    return (0, r.jsxs)("div", {
        className: a.iE,
        children: [(0, r.jsxs)("span", {
            className: i()(a.VV, {
                [a.Ki]: l,
                [a.$G]: n >= 100
            }),
            children: [l ? (0, r.jsx)(s.npA, {
                size: "md",
                color: "currentColor",
                className: a.LB
            }) : null, n.toString().padStart(2, "0")]
        }), (0, r.jsx)("span", {
            className: i()(a.X5, {
                [a.$G]: t >= 100
            }),
            children: t.toString().padStart(2, "0")
        })]
    })
}