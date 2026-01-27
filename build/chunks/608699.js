/** Chunk was on 60667 **/
/** chunk id: 608699, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => p
});
var r = n(627968),
    i = n(607399),
    l = n(732955),
    s = n(397927),
    a = n(9113),
    o = n(599941),
    c = n(590632),
    d = n(146528),
    u = n(985018),
    _ = n(405564);
let p = e => {
    let {
        onGoBack: t
    } = e, n = (0, c.A)(), {
        loading: p
    } = (0, o.eb)(n);
    return ((0, a.A)(i.Fr ? "role-subscriptions-user-setting" : void 0), p) ? (0, r.jsx)(s.y$y, {}) : 0 === n.length ? null : (0, r.jsxs)("div", {
        children: [(0, r.jsx)(l.$nd, {
            text: u.intl.string(u.t.hqyhKQ),
            icon: s.z$m,
            variant: "secondary",
            onClick: t
        }), (0, r.jsx)(s.hKd, {
            size: 10
        }), (0, r.jsx)(s.nVY, {
            label: u.intl.string(u.t["KzCF/6"]),
            description: u.intl.string(u.t["Y+ucR7"]),
            children: (0, r.jsx)("div", {
                className: _.A,
                children: n.map(e => (0, r.jsx)(d.A, {
                    subscription: e
                }, e.id))
            })
        })]
    })
}