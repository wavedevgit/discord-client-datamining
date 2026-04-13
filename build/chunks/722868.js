/** chunk id: 722868 params = (module,exports,require) **/
l.d(t, {
    A: () => x
});
var n = l(627968),
    i = l(311907),
    s = l(397927),
    a = l(688810),
    r = l(287809),
    o = l(562153),
    d = l(183555),
    c = l(591179),
    u = l(657331),
    m = l(950191),
    p = l(985018);

function x(e) {
    let {
        user: t,
        guildId: l,
        channelId: x,
        displayProfile: A,
        onClose: g
    } = e, {
        analyticsLocations: f,
        sourceAnalyticsLocations: h
    } = (0, a.Ay)(), {
        context: j,
        trackUserProfileAction: v
    } = (0, d.NJ)(), I = (0, m.Ay)(t.id, l), N = (0, i.bG)([r.default], () => r.default.getCurrentUser()?.id === t.id), y = (0, c.X)("useViewUserProfileModalItem");
    return N && y || I?.guildId == null ? null : A?.guildId == null || A?.private ? A?.guildId != null ? null : (0, n.jsx)(s.Drp, {
        id: "view-server-profile",
        label: p.intl.string(p.t.DisZzB),
        subtext: p.intl.formatToPlainString(p.t["mn/nW2"], {
            displayName: o.Ay.getName(l, x, t)
        }),
        action: () => {
            g?.(), (0, u.openUserProfileModal)({
                userId: t.id,
                ...j,
                guildId: l,
                sourceAnalyticsLocations: h
            }), v({
                action: "PRESS_VIEW_SERVER_PROFILE",
                analyticsLocations: f,
                ...j
            })
        }
    }) : (0, n.jsx)(s.Drp, {
        id: "view-main-profile",
        label: p.intl.string(p.t.GISTta),
        subtext: p.intl.formatToPlainString(p.t["mn/nW2"], {
            displayName: o.Ay.getName(void 0, void 0, t)
        }),
        action: () => {
            g?.(), (0, u.openUserProfileModal)({
                userId: t.id,
                ...j,
                guildId: void 0,
                originGuildId: l,
                sourceAnalyticsLocations: h
            }), v({
                action: "PRESS_VIEW_MAIN_PROFILE",
                analyticsLocations: f,
                ...j
            })
        }
    })
}