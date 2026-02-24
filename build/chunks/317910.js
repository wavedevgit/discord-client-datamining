/** chunk id: 317910, original params: n,e,t (module,exports,require) **/
t.d(e, {
    A: () => A
});
var i = t(627968);
t(64700);
var r = t(311907),
    a = t(397927),
    l = t(435183),
    c = t(526132),
    s = t(576705),
    o = t(652215),
    d = t(985018);

function A(n) {
    let {
        canManageChannels: e,
        canManageRoles: t,
        canManageWebhooks: A,
        canAccessChannel: u,
        canUnlinkChannel: h
    } = (0, r.cf)([s.A], () => ({
        canManageChannels: s.A.can(o.xBc.MANAGE_CHANNELS, n),
        canManageRoles: s.A.can(o.xBc.MANAGE_ROLES, n),
        canManageWebhooks: s.A.can(o.xBc.MANAGE_WEBHOOKS, n),
        canAccessChannel: s.A.can(n.accessPermissions, n),
        canUnlinkChannel: (0, c.n)(n, s.A)
    }), [n]);
    return !__OVERLAY__ && u && (e || t || A || h) ? (0, i.jsx)(a.Drp, {
        id: "edit-channel",
        label: n.type === o.rbe.GUILD_CATEGORY ? d.intl.string(d.t.zdPFs9) : d.intl.string(d.t["3gUsJb"]),
        action: () => l.Ay.open(n.id)
    }) : null
}