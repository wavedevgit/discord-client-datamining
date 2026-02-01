/** chunk id: 559248, original params: e,t,n (module,exports,require) **/
n.d(t, {
    M: () => g
});
var r = n(627968),
    l = n(989349),
    i = n.n(l),
    s = n(311907),
    a = n(397927),
    o = n(10094),
    c = n(683760),
    u = n(195043),
    d = n(287809),
    p = n(531525),
    h = n(788868);
let g = () => {
    let e = (0, s.bG)([d.default], () => d.default.getCurrentUser()),
        t = (0, s.bG)([c.A], () => {
            let e = c.A.getCreatedAtOverride();
            return null != e ? e.toISOString().substring(0, 10) : ""
        }),
        n = (0, s.bG)([c.A], () => c.A.getPremiumTypeOverride());
    return (0, r.jsxs)(a.BJc, {
        gap: 16,
        children: [(0, r.jsxs)(u.x, {
            setting: p.H.DEVELOPER_OPTIONS_OVERRIDE_CLIENT_SIDE_PREMIUM_TYPE,
            children: [(0, r.jsx)(a.l6P, {
                label: "Override Client-Side Premium Type",
                options: h.Jm,
                value: n,
                onSelectionChange: t => {
                    (0, o.O)(t, e)
                },
                selectionMode: "single",
                fullWidth: !0
            }), (0, r.jsx)(a.QWc, {
                onClick: () => {
                    (0, o.O)(h.$I, e)
                },
                text: "Reset premium type override"
            })]
        }), (0, r.jsxs)(u.x, {
            setting: p.H.DEVELOPER_OPTIONS_OVERRIDE_CLIENT_SIDE_ACCOUNT_CREATED_DATA,
            children: [(0, r.jsx)(a.J3s, {
                label: "Override Client-Side Account Created At Date",
                value: i()(t),
                onSelect: e => {
                    var t;
                    return t = e.toISOString(), void(0, o.Y)(new Date(t))
                }
            }), (0, r.jsx)(a.QWc, {
                onClick: () => (0, o.Y)(void 0),
                text: "Reset account created at override"
            })]
        })]
    })
}