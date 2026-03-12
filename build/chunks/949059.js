/** chunk id: 949059 params = (module,exports,require) **/
n.d(t, {
    p: () => h
});
var i = n(311907),
    s = n(506774),
    l = n(832712),
    r = n(419954),
    a = n(71393),
    o = n(543465),
    d = n(287809),
    c = n(954571),
    u = n(780964),
    _ = n(652215),
    m = n(406535),
    g = n(790782),
    A = n(985018);
let h = (0, r.zD)(u.X.EXPERIMENTAL_UNREADS, {
    useTitle: () => A.intl.string(A.t["k6m/si"]),
    useSubtitle: () => A.intl.string(A.t.LGynPs),
    useValue: () => (0, i.bG)([o.Ay], () => o.Ay.useNewNotifications),
    setValue: function(e) {
        l.A.setAccountFlag(m.i.USE_NEW_NOTIFICATIONS, e), e || (s.w.set("turnedOffNewNotifications", !0), c.default.track(_.HAw.NOTIFICATION_MIGRATION_OPTOUT, {
            num_guilds_with_new_setting: a.A.getGuildsArray().filter(e => o.Ay.resolveGuildUnreadSetting(e) === g.e.ONLY_MENTIONS).length
        }))
    },
    usePredicate: () => (0, i.bG)([d.default, o.Ay], () => d.default.getCurrentUser()?.isStaff() || o.Ay.useNewNotifications)
})