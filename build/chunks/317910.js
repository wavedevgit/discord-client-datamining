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
    o = t(576705),
    s = t(652215),
    d = t(985018);

function A(n) {
    let {
        canManageChannels: e,
        canManageRoles: t,
        canManageWebhooks: A,
        canAccessChannel: u,
        canUnlinkChannel: h
    } = (0, r.cf)([o.A], () => ({
        canManageChannels: o.A.can(s.xBc.MANAGE_CHANNELS, n),
        canManageRoles: o.A.can(s.xBc.MANAGE_ROLES, n),
        canManageWebhooks: o.A.can(s.xBc.MANAGE_WEBHOOKS, n),
        canAccessChannel: o.A.can(n.accessPermissions, n),
        canUnlinkChannel: (0, c.n)(n, o.A)
    }), [n]);
    return !__OVERLAY__ && u && (e || t || A || h) ? (0, i.jsx)(a.Drp, {
        id: "edit-channel",
        label: n.type === s.rbe.GUILD_CATEGORY ? d.intl.string(d.t.zdPFs9) : d.intl.string(d.t["3gUsJb"]),
        action: () => l.Ay.open(n.id)
    }) : null
}