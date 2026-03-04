/** chunk id: 728765, original params: t,e,i (module,exports,require) **/
i.d(e, {
    F: () => d
});
var n = i(419954),
    l = i(100406),
    s = i(878460),
    a = i(780964),
    r = i(342002),
    u = i(297147),
    o = i(985018);
let d = (0, n.zZ)(a.X.NOTIFICATIONS_EMAIL_CATEGORY, {
    useTitle: () => o.intl.string(o.t["w/qqKK"]),
    initialize: function() {
        let {
            initialized: t
        } = s.A.getEmailSettings();
        t || (0, l.cR)()
    },
    buildLayout: () => [...r.P, u.Q]
})