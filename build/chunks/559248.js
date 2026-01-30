/** chunk id: 559248, original params: e,t,n (module,exports,require) **/
n.d(t, {
    M: () => x
});
var i = n(627968),
    l = n(989349),
    s = n.n(l),
    r = n(311907),
    a = n(397927),
    o = n(10094),
    c = n(683760),
    d = n(195043),
    u = n(287809),
    h = n(531525),
    g = n(788868);
let x = () => {
    let e = (0, r.bG)([u.default], () => u.default.getCurrentUser()),
        t = (0, r.bG)([c.A], () => {
            let e = c.A.getCreatedAtOverride();
            return null != e ? e.toISOString().substring(0, 10) : ""
        }),
        n = (0, r.bG)([c.A], () => c.A.getPremiumTypeOverride());
    return (0, i.jsxs)(a.BJc, {
        gap: 16,
        children: [(0, i.jsxs)(d.x, {
            setting: h.H.DEVELOPER_OPTIONS_OVERRIDE_CLIENT_SIDE_PREMIUM_TYPE,
            children: [(0, i.jsx)(a.l6P, {
                label: "Override Client-Side Premium Type",
                options: g.Jm,
                value: n,
                onSelectionChange: t => {
                    (0, o.O)(t, e)
                },
                selectionMode: "single",
                fullWidth: !0
            }), (0, i.jsx)(a.QWc, {
                onClick: () => {
                    (0, o.O)(g.$I, e)
                },
                text: "Reset premium type override"
            })]
        }), (0, i.jsxs)(d.x, {
            setting: h.H.DEVELOPER_OPTIONS_OVERRIDE_CLIENT_SIDE_ACCOUNT_CREATED_DATA,
            children: [(0, i.jsx)(a.J3s, {
                label: "Override Client-Side Account Created At Date",
                value: s()(t),
                onSelect: e => {
                    var t;
                    return t = e.toISOString(), void(0, o.Y)(new Date(t))
                }
            }), (0, i.jsx)(a.QWc, {
                onClick: () => (0, o.Y)(void 0),
                text: "Reset account created at override"
            })]
        })]
    })
}