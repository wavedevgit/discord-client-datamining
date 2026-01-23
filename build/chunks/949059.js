/** Chunk was on 28979 **/
/** chunk id: 949059, original params: t,e,i (module,exports,require) **/
i.d(e, {
    p: () => g
});
var n = i(311907),
    l = i(506774),
    s = i(832712),
    r = i(419954),
    u = i(71393),
    a = i(543465),
    o = i(287809),
    T = i(954571),
    A = i(780964),
    d = i(652215),
    S = i(406535),
    E = i(790782),
    _ = i(985018);
let g = (0, r.zD)(A.X.EXPERIMENTAL_UNREADS, {
    useTitle: () => _.intl.string(_.t["k6m/si"]),
    useSubtitle: () => _.intl.string(_.t.LGynPs),
    useValue: () => (0, n.bG)([a.Ay], () => a.Ay.useNewNotifications),
    setValue: function(t) {
        s.A.setAccountFlag(S.i.USE_NEW_NOTIFICATIONS, t), t || (l.w.set("turnedOffNewNotifications", !0), T.default.track(d.HAw.NOTIFICATION_MIGRATION_OPTOUT, {
            num_guilds_with_new_setting: u.A.getGuildsArray().filter(t => a.Ay.resolveGuildUnreadSetting(t) === E.e.ONLY_MENTIONS).length
        }))
    },
    usePredicate: () => (0, n.bG)([o.default, a.Ay], () => {
        var t;
        return (null == (t = o.default.getCurrentUser()) ? void 0 : t.isStaff()) || a.Ay.useNewNotifications
    })
})