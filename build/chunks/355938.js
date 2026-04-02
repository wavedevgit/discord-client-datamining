/** chunk id: 355938 params = (module,exports,require) **/
n.d(t, {
    A: () => d
});
var a = n(627968);
n(64700);
var i = n(435371),
    r = n(397927),
    s = n(769015),
    o = n(985018),
    l = n(578090);

function c(e) {
    let {
        application: t,
        children: n
    } = e;
    return (0, a.jsx)(i.un, {
        asset: (0, a.jsx)(s.A, {
            size: s.M.MEDIUM_LARGE,
            game: t
        }),
        body: o.intl.format(o.t.J3s8JP, {
            applicationName: t.name
        }),
        position: "top",
        asContainer: !0,
        "aria-label": o.intl.string(o.t["5nMcv1"]),
        children: (0, a.jsx)(r.DUT, {
            tag: "span",
            children: n
        })
    })
}

function d(e) {
    let {
        application: t,
        compact: n,
        children: i
    } = e;
    return (0, a.jsxs)(c, {
        application: t,
        children: [n ? null : (0, a.jsx)(r._xR, {
            className: l.Gt,
            size: "custom",
            width: 14,
            height: 14
        }), i]
    })
}