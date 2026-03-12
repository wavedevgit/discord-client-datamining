/** chunk id: 559248 params = (module,exports,require) **/
n.d(t, {
    M: () => m
});
var i = n(627968),
    s = n(989349),
    l = n.n(s),
    a = n(311907),
    r = n(397927),
    o = n(10094),
    d = n(683760),
    c = n(195043),
    u = n(287809),
    _ = n(531525),
    g = n(788868);
let m = () => {
    let e = (0, a.bG)([u.default], () => u.default.getCurrentUser()),
        t = (0, a.bG)([d.A], () => {
            let e = d.A.getCreatedAtOverride();
            return null != e ? e.toISOString().substring(0, 10) : ""
        }),
        n = (0, a.bG)([d.A], () => d.A.getPremiumTypeOverride());
    return (0, i.jsxs)(r.BJc, {
        gap: 16,
        children: [(0, i.jsxs)(c.x, {
            setting: _.H.DEVELOPER_OPTIONS_OVERRIDE_CLIENT_SIDE_PREMIUM_TYPE,
            children: [(0, i.jsx)(r.l6P, {
                label: "Override Client-Side Premium Type",
                options: g.Jm,
                value: n,
                onSelectionChange: t => {
                    (0, o.O)(t, e)
                },
                selectionMode: "single",
                fullWidth: !0
            }), (0, i.jsx)(r.QWc, {
                onClick: () => {
                    (0, o.O)(g.$I, e)
                },
                text: "Reset premium type override"
            })]
        }), (0, i.jsxs)(c.x, {
            setting: _.H.DEVELOPER_OPTIONS_OVERRIDE_CLIENT_SIDE_ACCOUNT_CREATED_DATA,
            children: [(0, i.jsx)(r.J3s, {
                label: "Override Client-Side Account Created At Date",
                value: l()(t),
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