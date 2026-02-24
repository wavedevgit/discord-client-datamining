/** chunk id: 75811, original params: e,t,s (module,exports,require) **/
s.d(t, {
    j: () => o
});
var r = s(627968),
    l = s(64700),
    n = s(503698),
    a = s.n(n),
    c = s(397927),
    i = s(200063);

function o(e) {
    let {
        chunks: t,
        columns: s,
        className: n
    } = e, o = l.useMemo(() => ({
        "--secure-frames-columns": s
    }), [s]);
    return null == t ? (0, r.jsx)("div", {
        className: i.Lq,
        children: (0, r.jsx)(c.y$y, {})
    }) : (0, r.jsx)("div", {
        style: o,
        className: a()(i.aY, n),
        children: t.map((e, t) => (0, r.jsx)("div", {
            className: a()(i.iv, {
                [i.yF]: t > s - 1
            }),
            children: (0, r.jsx)(c.Text, {
                className: i.ph,
                variant: "code",
                color: "text-default",
                children: e
            })
        }, `${e}-${t}`))
    })
}