/** chunk id: 75811 params = (module,exports,require) **/
n.d(t, {
    j: () => c
});
var i = n(627968),
    l = n(64700),
    a = n(503698),
    s = n.n(a),
    r = n(397927),
    o = n(686052);

function c(e) {
    let {
        chunks: t,
        columns: n,
        className: a
    } = e, c = l.useMemo(() => ({
        "--secure-frames-columns": n
    }), [n]);
    return null == t ? (0, i.jsx)("div", {
        className: o.Lq,
        children: (0, i.jsx)(r.y$y, {})
    }) : (0, i.jsx)("div", {
        style: c,
        className: s()(o.aY, a),
        children: t.map((e, t) => (0, i.jsxs)(l.Fragment, {
            children: [t > 0 && t % n == 0 && (0, i.jsx)("hr", {
                className: o.yF
            }), (0, i.jsx)("div", {
                className: o.iv,
                children: (0, i.jsx)(r.Text, {
                    className: o.ph,
                    variant: "code",
                    color: "text-default",
                    children: e
                })
            })]
        }, `${e}-${t}`))
    })
}