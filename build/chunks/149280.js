/** chunk id: 149280, original params: e,n,t (module,exports,require) **/
t.d(n, {
    A: () => c
});
var l = t(311907),
    i = t(554146),
    r = t(367727),
    s = t(317525),
    u = t(576705),
    o = t(937161),
    a = t(652215);

function c(e) {
    var n, t, c;
    let E = (0, l.bG)([u.A], () => u.A.can(a.xBc.ADMINISTRATOR, e)),
        d = (0, l.bG)([s.A], () => null != e && s.A.getNumRoles(e.id) > 1),
        {
            enabled: _
        } = o.A.useExperiment({
            guildId: null == e ? void 0 : e.id,
            location: "useIsPermissionMigrationNotificationAvailable"
        }),
        A = null != (n = null == e ? void 0 : e.features.has(a.GuildFeatures.PIN_PERMISSION_MIGRATION_COMPLETE)) && n,
        I = null != (t = null == e ? void 0 : e.features.has(a.GuildFeatures.BYPASS_SLOWMODE_PERMISSION_MIGRATION_COMPLETE)) && t,
        S = (0, r.cN)(i.M.GUILD_JOINT_PERMISSION_MIGRATION_NOTIFICATION, null != (c = null == e ? void 0 : e.id) ? c : a.dJq);
    return d && E && (!A || !I) && !S && !_
}