/** chunk id: 946531 params = (module,exports,require) **/
n.d(t, {
    _: () => g
});
var i = n(627968),
    s = n(64700),
    l = n(158954),
    r = n(311907),
    a = n(700062),
    o = n(419954),
    d = n(287809),
    c = n(780964),
    u = n(652215),
    m = n(985018);
let g = (0, o.Tf)(c.X.SMS_AUTH_DISABLE_BUTTON, {
    useTitle: () => m.intl.string(m.t.lQsY7B),
    useSubtitle: function() {
        let [e, t] = s.useState(!1), n = (0, r.bG)([d.default], () => d.default.getCurrentUser()?.phone);
        return null == n ? null : m.intl.format(e ? m.t["xDBk/I"] : m.t.bnKdnl, {
            phone: e ? n : n.slice(-4),
            toggleButton: () => (0, i.jsx)(l.QWc, {
                text: e ? m.intl.string(m.t.fgq1gs) : m.intl.string(m.t.dcztdU),
                onClick: () => t(!e)
            })
        })
    },
    useLabel: () => m.intl.string(m.t.N86XcP),
    useVariant: () => "critical-secondary",
    usePredicate: () => (0, r.bG)([d.default], () => d.default.getCurrentUser()?.hasFlag(u.nhx.MFA_SMS) ?? !1),
    onClick: () => (0, a.Zm)()
})