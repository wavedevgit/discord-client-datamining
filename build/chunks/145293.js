/** chunk id: 145293, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => _
});
var r = n(627968);
n(64700);
var i = n(960488),
    l = n(311907),
    a = n(397927),
    s = n(707606),
    o = n(490415),
    c = n(793574),
    u = n(688810),
    d = n(235986),
    p = n(498400),
    h = n(287809),
    f = n(107834),
    g = n(652215),
    m = n(788868),
    A = n(187585);
let _ = l.Ay.connectStores([h.default], () => ({
    user: h.default.getCurrentUser()
}))((0, o.A)((0, s.A)(e => {
    let {
        isAuthenticated: t,
        user: n
    } = e, {
        analyticsLocations: l
    } = (0, u.Ay)(c.A.HOME_PAGE_PREMIUM_TAB);
    return t ? (0, r.jsxs)("div", {
        className: A.ql,
        children: [null == n && (0, r.jsx)(f.A, {}), (0, r.jsx)(u.f5, {
            value: l,
            children: null == n ? (0, r.jsx)(d.A, {
                align: d.A.Align.CENTER,
                justify: d.A.Justify.CENTER,
                children: (0, r.jsx)(a.y$y, {
                    className: A.u1
                })
            }) : (0, r.jsx)(p.A, {
                entrypoint: m.Mf.ApplicationStoreHome
            })
        })]
    }) : (0, r.jsx)(i.rd, {
        to: g.BVt.LOGIN
    })
})))