/** chunk id: 317910, original params: e,n,t (module,exports,require) **/
t.d(n, {
    A: () => d
});
var r = t(627968);
t(64700);
var i = t(311907),
    a = t(397927),
    c = t(435183),
    l = t(526132),
    o = t(576705),
    s = t(652215),
    u = t(985018);

function d(e) {
    let {
        canManageChannels: n,
        canManageRoles: t,
        canManageWebhooks: d,
        canAccessChannel: b,
        canUnlinkChannel: f
    } = (0, i.cf)([o.A], () => ({
        canManageChannels: o.A.can(s.xBc.MANAGE_CHANNELS, e),
        canManageRoles: o.A.can(s.xBc.MANAGE_ROLES, e),
        canManageWebhooks: o.A.can(s.xBc.MANAGE_WEBHOOKS, e),
        canAccessChannel: o.A.can(e.accessPermissions, e),
        canUnlinkChannel: (0, l.n)(e, o.A)
    }), [e]);
    return !__OVERLAY__ && b && (n || t || d || f) ? (0, r.jsx)(a.Drp, {
        id: "edit-channel",
        label: e.type === s.rbe.GUILD_CATEGORY ? u.intl.string(u.t.zdPFs9) : u.intl.string(u.t["3gUsJb"]),
        action: () => c.Ay.open(e.id)
    }) : null
}