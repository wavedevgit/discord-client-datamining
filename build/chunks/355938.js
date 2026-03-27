/** chunk id: 355938 params = (module,exports,require) **/
t.d(a, {
    A: () => l
});
var n = t(627968);
t(64700);
var r = t(435371),
    s = t(397927),
    o = t(769015),
    c = t(985018),
    _ = t(115997);

function i(e) {
    let {
        application: a,
        children: t
    } = e;
    return (0, n.jsx)(r.un, {
        asset: (0, n.jsx)(o.A, {
            size: o.M.MEDIUM_LARGE,
            game: a
        }),
        body: c.intl.format(c.t.J3s8JP, {
            applicationName: a.name
        }),
        position: "top",
        asContainer: !0,
        "aria-label": c.intl.string(c.t["5nMcv1"]),
        children: (0, n.jsx)(s.DUT, {
            tag: "span",
            children: t
        })
    })
}

function l(e) {
    let {
        application: a,
        compact: t,
        children: r
    } = e;
    return (0, n.jsxs)(i, {
        application: a,
        children: [t ? null : (0, n.jsx)(s._xR, {
            className: _.Gt,
            size: "custom",
            width: 14,
            height: 14
        }), r]
    })
}