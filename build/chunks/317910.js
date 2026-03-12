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
    s = t(652215),
    o = t(985018);

function u(n) {
    let {
        canManageChannels: e,
        canManageRoles: t,
        canManageWebhooks: u,
        canAccessChannel: A,
        canUnlinkChannel: h
    } = (0, r.cf)([d.A], () => ({
        canManageChannels: d.A.can(s.xBc.MANAGE_CHANNELS, n),
        canManageRoles: d.A.can(s.xBc.MANAGE_ROLES, n),
        canManageWebhooks: d.A.can(s.xBc.MANAGE_WEBHOOKS, n),
        canAccessChannel: d.A.can(n.accessPermissions, n),
        canUnlinkChannel: (0, c.n)(n, d.A)
    }), [n]);
    return !__OVERLAY__ && A && (e || t || u || h) ? (0, i.jsx)(l.Drp, {
        id: "edit-channel",
        label: n.type === s.rbe.GUILD_CATEGORY ? o.intl.string(o.t.zdPFs9) : o.intl.string(o.t["3gUsJb"]),
        action: () => a.Ay.open(n.id)
    }) : null
}