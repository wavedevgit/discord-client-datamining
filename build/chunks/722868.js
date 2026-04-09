/** chunk id: 722868 params = (module,exports,require) **/
t.d(l, {
    A: () => p
});
var n = t(627968),
    i = t(311907),
    s = t(397927),
    a = t(688810),
    r = t(287809),
    o = t(562153),
    d = t(183555),
    c = t(591179),
    u = t(657331),
    m = t(950191),
    x = t(985018);

function p(e) {
    let {
        user: l,
        guildId: t,
        channelId: p,
        displayProfile: A,
        onClose: g
    } = e, {
        analyticsLocations: f,
        sourceAnalyticsLocations: h
    } = (0, a.Ay)(), {
        context: j,
        trackUserProfileAction: v
    } = (0, d.NJ)(), I = (0, m.Ay)(l.id, t), N = (0, i.bG)([r.default], () => r.default.getCurrentUser()?.id === l.id), y = (0, c.X)("useViewUserProfileModalItem");
    return N && y || I?.guildId == null ? null : A?.guildId == null || A?.private ? A?.guildId != null ? null : (0, n.jsx)(s.Drp, {
        id: "view-server-profile",
        label: x.intl.string(x.t.DisZzB),
        subtext: x.intl.formatToPlainString(x.t["mn/nW2"], {
            displayName: o.Ay.getName(t, p, l)
        }),
        action: () => {
            g?.(), (0, u.openUserProfileModal)({
                userId: l.id,
                ...j,
                guildId: t,
                sourceAnalyticsLocations: h
            }), v({
                action: "PRESS_VIEW_SERVER_PROFILE",
                analyticsLocations: f,
                ...j
            })
        }
    }) : (0, n.jsx)(s.Drp, {
        id: "view-main-profile",
        label: x.intl.string(x.t.GISTta),
        subtext: x.intl.formatToPlainString(x.t["mn/nW2"], {
            displayName: o.Ay.getName(void 0, void 0, l)
        }),
        action: () => {
            g?.(), (0, u.openUserProfileModal)({
                userId: l.id,
                ...j,
                guildId: void 0,
                originGuildId: t,
                sourceAnalyticsLocations: h
            }), v({
                action: "PRESS_VIEW_MAIN_PROFILE",
                analyticsLocations: f,
                ...j
            })
        }
    })
}