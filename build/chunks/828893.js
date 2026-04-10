/** chunk id: 828893 params = (module,exports,require) **/
n.d(t, {
    F: () => c
});
var i = n(419954),
    s = n(100406),
    l = n(878460),
    r = n(780964),
    a = n(136594),
    o = n(127707),
    d = n(985018);
let c = (0, i.zZ)(r.X.NOTIFICATIONS_EMAIL_CATEGORY, {
    useTitle: () => d.intl.string(d.t["w/qqKK"]),
    initialize: function() {
        let {
            initialized: e
        } = l.A.getEmailSettings();
        e || (0, s.cR)()
    },
    buildLayout: () => [...a.P, o.Q]
})