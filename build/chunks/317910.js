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
    o = t(576705),
    d = t(652215),
    s = t(985018);

function u(n) {
    let {
        canManageChannels: e,
        canManageRoles: t,
        canManageWebhooks: u,
        canAccessChannel: A,
        canUnlinkChannel: h
    } = (0, r.cf)([o.A], () => ({
        canManageChannels: o.A.can(d.xBc.MANAGE_CHANNELS, n),
        canManageRoles: o.A.can(d.xBc.MANAGE_ROLES, n),
        canManageWebhooks: o.A.can(d.xBc.MANAGE_WEBHOOKS, n),
        canAccessChannel: o.A.can(n.accessPermissions, n),
        canUnlinkChannel: (0, c.n)(n, o.A)
    }), [n]);
    return !__OVERLAY__ && A && (e || t || u || h) ? (0, i.jsx)(l.Drp, {
        id: "edit-channel",
        label: n.type === d.rbe.GUILD_CATEGORY ? s.intl.string(s.t.zdPFs9) : s.intl.string(s.t["3gUsJb"]),
        action: () => a.Ay.open(n.id)
    }) : null
}