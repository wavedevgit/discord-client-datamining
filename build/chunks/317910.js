/** chunk id: 317910 params = (module,exports,require) **/
t.d(e, {
    A: () => u
});
var i = t(627968);
t(64700);
var r = t(311907),
    l = t(397927),
    a = t(435183),
    c = t(526132),
    d = t(576705),
    o = t(652215),
    s = t(985018);

function u(n) {
    let {
        canManageChannels: e,
        canManageRoles: t,
        canManageWebhooks: u,
        canAccessChannel: A,
        canUnlinkChannel: h
    } = (0, r.cf)([d.A], () => ({
        canManageChannels: d.A.can(o.xBc.MANAGE_CHANNELS, n),
        canManageRoles: d.A.can(o.xBc.MANAGE_ROLES, n),
        canManageWebhooks: d.A.can(o.xBc.MANAGE_WEBHOOKS, n),
        canAccessChannel: d.A.can(n.accessPermissions, n),
        canUnlinkChannel: (0, c.n)(n, d.A)
    }), [n]);
    return !__OVERLAY__ && A && (e || t || u || h) ? (0, i.jsx)(l.Drp, {
        id: "edit-channel",
        label: n.type === o.rbe.GUILD_CATEGORY ? s.intl.string(s.t.zdPFs9) : s.intl.string(s.t["3gUsJb"]),
        action: () => a.Ay.open(n.id)
    }) : null
}