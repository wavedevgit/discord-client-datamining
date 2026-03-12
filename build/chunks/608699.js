/** chunk id: 608699 params = (module,exports,require) **/
n.d(t, {
    A: () => g
});
var i = n(627968),
    s = n(607399),
    l = n(732955),
    a = n(397927),
    r = n(9113),
    o = n(599941),
    d = n(590632),
    c = n(146528),
    u = n(985018),
    _ = n(846853);
let g = e => {
    let {
        onGoBack: t
    } = e, n = (0, d.A)(), {
        loading: g
    } = (0, o.eb)(n);
    return ((0, r.A)(s.Fr ? "role-subscriptions-user-setting" : void 0), g) ? (0, i.jsx)(a.y$y, {}) : 0 === n.length ? null : (0, i.jsxs)("div", {
        children: [(0, i.jsx)(l.$nd, {
            text: u.intl.string(u.t.hqyhKQ),
            icon: a.z$m,
            variant: "secondary",
            onClick: t
        }), (0, i.jsx)(a.hKd, {
            size: 10
        }), (0, i.jsx)(a.nVY, {
            label: u.intl.string(u.t["KzCF/6"]),
            description: u.intl.string(u.t["Y+ucR7"]),
            children: (0, i.jsx)("div", {
                className: _.A,
                children: n.map(e => (0, i.jsx)(c.A, {
                    subscription: e
                }, e.id))
            })
        })]
    })
}