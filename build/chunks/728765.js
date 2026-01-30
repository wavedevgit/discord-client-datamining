/** chunk id: 728765, original params: e,t,i (module,exports,require) **/
i.d(t, {
    F: () => d
}), i(896048);
var n = i(419954),
    l = i(100406),
    s = i(878460),
    r = i(780964),
    a = i(342002),
    u = i(297147),
    o = i(985018);
let d = (0, n.zZ)(r.X.NOTIFICATIONS_EMAIL_CATEGORY, {
    useTitle: () => o.intl.string(o.t["w/qqKK"]),
    initialize: function() {
        let {
            initialized: e
        } = s.A.getEmailSettings();
        e || (0, l.cR)()
    },
    buildLayout: () => [...a.P, u.Q]
})