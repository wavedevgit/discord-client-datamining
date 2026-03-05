/** chunk id: 414506 params = (module,exports,require) **/
n.d(l, {
    default: () => g
});
var t = n(627968);
n(64700);
var r = n(397927),
    o = n(442433),
    i = n(847767),
    c = n(358367),
    d = n(793574),
    s = n(688810),
    a = n(180798),
    u = n(652215),
    A = n(985018);
let g = (0, c.A)((0, i.A)(function(e) {
    let {
        user: l,
        guildId: n,
        onSelect: i,
        analyticsLocations: c,
        onCloseContextMenu: u,
        isViewOnly: g
    } = e, {
        analyticsLocations: p
    } = (0, s.Ay)(d.A.CONTEXT_MENU), b = c?.[0] ?? p[0], h = (0, a.A)(l.id, n, !0, b, g);
    return (0, t.jsx)(r.W1t, {
        "data-menu-migrated": !0,
        navId: "guild-moderation-roles",
        onClose: () => {
            (0, o.Z_)(), u?.()
        },
        "aria-label": A.intl.string(A.t.liqwPJ),
        onSelect: i,
        children: (0, t.jsx)(r.rXV, {
            children: h
        })
    })
}, {
    object: u.ZSU.CONTEXT_MENU
}), [d.A.CONTEXT_MENU, d.A.GUILD_MODERATION_USER_MENU])