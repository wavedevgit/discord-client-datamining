/** chunk id: 297147, original params: t,e,i (module,exports,require) **/
i.d(e, {
    Q: () => d
});
var n = i(311907),
    l = i(419954),
    s = i(100406),
    r = i(878460),
    u = i(780964),
    a = i(431144),
    o = i(985018);
let d = (0, l.Tf)(u.X.UNSUBSCRIBE_FROM_ALL_MARKETING_EMAILS, {
    useTitle: () => o.intl.string(o.t.Ra9Pwk),
    useSubtitle: () => o.intl.string(o.t.iYjQ8X),
    useLabel: () => o.intl.string(o.t.KT1pBA),
    useDisabled: () => {
        let {
            categories: t
        } = (0, n.cf)([r.A], () => r.A.getEmailSettings());
        return a.Zk.every(e => !t[e])
    },
    onClick: () => (0, s.NI)(),
    useVariant: () => "critical-secondary"
})