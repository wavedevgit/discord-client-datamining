/** chunk id: 75811, original params: e,t,r (module,exports,require) **/
r.d(t, {
    j: () => i
});
var n = r(627968),
    o = r(64700),
    c = r(503698),
    l = r.n(c),
    s = r(397927),
    a = r(200063);

function i(e) {
    let {
        chunks: t,
        columns: r,
        className: c
    } = e, i = o.useMemo(() => ({
        "--secure-frames-columns": r
    }), [r]);
    return null == t ? (0, n.jsx)("div", {
        className: a.Lq,
        children: (0, n.jsx)(s.y$y, {})
    }) : (0, n.jsx)("div", {
        style: i,
        className: l()(a.aY, c),
        children: t.map((e, t) => (0, n.jsx)("div", {
            className: l()(a.iv, {
                [a.yF]: t > r - 1
            }),
            children: (0, n.jsx)(s.Text, {
                className: a.ph,
                variant: "code",
                color: "text-default",
                children: e
            })
        }, "".concat(e, "-").concat(t)))
    })
}