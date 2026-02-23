/** chunk id: 559248, original params: e,t,n (module,exports,require) **/
n.d(t, {
    M: () => A
});
var i = n(627968),
    s = n(989349),
    a = n.n(s),
    l = n(311907),
    r = n(397927),
    o = n(10094),
    c = n(683760),
    d = n(195043),
    u = n(287809),
    _ = n(531525),
    m = n(788868);
let A = () => {
    let e = (0, l.bG)([u.default], () => u.default.getCurrentUser()),
        t = (0, l.bG)([c.A], () => {
            let e = c.A.getCreatedAtOverride();
            return null != e ? e.toISOString().substring(0, 10) : ""
        }),
        n = (0, l.bG)([c.A], () => c.A.getPremiumTypeOverride());
    return (0, i.jsxs)(r.BJc, {
        gap: 16,
        children: [(0, i.jsxs)(d.x, {
            setting: _.H.DEVELOPER_OPTIONS_OVERRIDE_CLIENT_SIDE_PREMIUM_TYPE,
            children: [(0, i.jsx)(r.l6P, {
                label: "Override Client-Side Premium Type",
                options: m.Jm,
                value: n,
                onSelectionChange: t => {
                    (0, o.O)(t, e)
                },
                selectionMode: "single",
                fullWidth: !0
            }), (0, i.jsx)(r.QWc, {
                onClick: () => {
                    (0, o.O)(m.$I, e)
                },
                text: "Reset premium type override"
            })]
        }), (0, i.jsxs)(d.x, {
            setting: _.H.DEVELOPER_OPTIONS_OVERRIDE_CLIENT_SIDE_ACCOUNT_CREATED_DATA,
            children: [(0, i.jsx)(r.J3s, {
                label: "Override Client-Side Account Created At Date",
                value: a()(t),
                onSelect: e => {
                    var t;
                    return t = e.toISOString(), void(0, o.Y)(new Date(t))
                }
            }), (0, i.jsx)(r.QWc, {
                onClick: () => (0, o.Y)(void 0),
                text: "Reset account created at override"
            })]
        })]
    })
}