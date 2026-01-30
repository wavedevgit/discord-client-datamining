/** chunk id: 149280, original params: e,n,t (module,exports,require) **/
t.d(n, {
    A: () => E
});
var l = t(311907),
    i = t(554146),
    r = t(386849),
    s = t(367727),
    o = t(317525),
    u = t(576705),
    a = t(937161),
    c = t(652215);

function E(e) {
    var n, t, E;
    let d = (0, l.bG)([u.A], () => u.A.can(c.xBc.ADMINISTRATOR, e)),
        I = (0, l.bG)([o.A], () => null != e && o.A.getNumRoles(e.id) > 1),
        {
            enabled: _
        } = a.A.useExperiment({
            guildId: null == e ? void 0 : e.id,
            location: "useIsPermissionMigrationNotificationAvailable"
        }),
        {
            enabled: A
        } = r.A.useExperiment({
            guildId: null == e ? void 0 : e.id,
            location: "useIsPermissionMigrationNotificationAvailable"
        }),
        S = null != (n = null == e ? void 0 : e.features.has(c.GuildFeatures.PIN_PERMISSION_MIGRATION_COMPLETE)) && n,
        O = null != (t = null == e ? void 0 : e.features.has(c.GuildFeatures.BYPASS_SLOWMODE_PERMISSION_MIGRATION_COMPLETE)) && t,
        N = A ? i.M.GUILD_JOINT_PERMISSION_MIGRATION_NOTIFICATION : i.M.GUILD_PIN_PERMISSION_MIGRATION_NOTIFICATION,
        g = (0, s.cN)(N, null != (E = null == e ? void 0 : e.id) ? E : c.dJq);
    return I && d && (!S || !O && A) && !g && !_
}