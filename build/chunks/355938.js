/** chunk id: 355938 params = (module,exports,require) **/
t.d(a, {
    A: () => l
});
var n = t(627968);
t(64700);
var r = t(435371),
    o = t(397927),
    s = t(769015),
    _ = t(985018),
    c = t(999584);

function i(e) {
    let {
        application: a,
        children: t
    } = e;
    return (0, n.jsx)(r.un, {
        asset: (0, n.jsx)(s.A, {
            size: s.M.MEDIUM_LARGE,
            game: a
        }),
        body: _.intl.format(_.t.J3s8JP, {
            applicationName: a.name
        }),
        position: "top",
        asContainer: !0,
        "aria-label": _.intl.string(_.t["5nMcv1"]),
        children: (0, n.jsx)(o.DUT, {
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
        children: [t ? null : (0, n.jsx)(o._xR, {
            className: c.Gt,
            size: "custom",
            width: 14,
            height: 14
        }), r]
    })
}