/** chunk id: 317910 params = (module,exports,require) **/
i.d(e, {
    A: () => u
});
var t = i(627968);
i(64700);
var r = i(311907),
    a = i(397927),
    l = i(435183),
    c = i(526132),
    d = i(576705),
    o = i(652215),
    s = i(985018);

function u(n) {
    let {
        canManageChannels: e,
        canManageRoles: i,
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
    return !__OVERLAY__ && A && (e || i || u || h) ? (0, t.jsx)(a.Drp, {
        id: "edit-channel",
        label: n.type === o.rbe.GUILD_CATEGORY ? s.intl.string(s.t.zdPFs9) : s.intl.string(s.t["3gUsJb"]),
        action: () => l.Ay.open(n.id)
    }) : null
}