/** Chunk was on 4670 **/
/** chunk id: 949059, original params: e,t,i (module,exports,require) **/
i.d(t, {
    p: () => E
});
var n = i(311907),
    l = i(506774),
    s = i(832712),
    r = i(419954),
    a = i(71393),
    u = i(543465),
    o = i(287809),
    d = i(954571),
    T = i(780964),
    c = i(652215),
    A = i(406535),
    S = i(790782),
    _ = i(985018);
let E = (0, r.zD)(T.X.EXPERIMENTAL_UNREADS, {
    useTitle: () => _.intl.string(_.t["k6m/si"]),
    useSubtitle: () => _.intl.string(_.t.LGynPs),
    useValue: () => (0, n.bG)([u.Ay], () => u.Ay.useNewNotifications),
    setValue: function(e) {
        s.A.setAccountFlag(A.i.USE_NEW_NOTIFICATIONS, e), e || (l.w.set("turnedOffNewNotifications", !0), d.default.track(c.HAw.NOTIFICATION_MIGRATION_OPTOUT, {
            num_guilds_with_new_setting: a.A.getGuildsArray().filter(e => u.Ay.resolveGuildUnreadSetting(e) === S.e.ONLY_MENTIONS).length
        }))
    },
    usePredicate: () => (0, n.bG)([o.default, u.Ay], () => {
        var e;
        return (null == (e = o.default.getCurrentUser()) ? void 0 : e.isStaff()) || u.Ay.useNewNotifications
    })
})