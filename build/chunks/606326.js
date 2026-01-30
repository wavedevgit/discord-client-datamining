/** chunk id: 606326, original params: e,t,l (module,exports,require) **/
l.d(t, {
    A: () => j
});
var n = l(627968),
    r = l(64700),
    i = l(311907),
    s = l(793574),
    a = l(688810),
    o = l(547015),
    c = l(138298),
    d = l(761640),
    u = l(71393),
    x = l(652215),
    m = l(947256);

function j(e) {
    let {
        guildId: t
    } = e, l = (0, i.bG)([u.A], () => u.A.getGuild(t)), {
        analyticsLocations: j
    } = (0, a.Ay)(s.A.MEMBER_SAFETY_PAGE), b = (0, i.bG)([d.Ay], () => d.Ay.getGuildSidebarState(t), [t]), h = r.useCallback(() => {
        c.A.closeGuildSidebar(t)
    }, [t]), f = null != b;
    return null != l && f && null != b ? (0, n.jsx)(a.f5, {
        value: j,
        children: (0, n.jsx)("div", {
            className: m.__invalid_sidebarContainer,
            style: {
                width: x.da6
            },
            children: (0, n.jsx)(o.A, {
                userId: b.details.userId,
                guildId: b.details.guildId,
                onClose: h
            })
        })
    }) : null
}