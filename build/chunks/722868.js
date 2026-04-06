/** chunk id: 722868 params = (module,exports,require) **/
t.d(l, {
    A: () => x
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
    p = t(985018);

function x(e) {
    let {
        user: l,
        guildId: t,
        channelId: x,
        displayProfile: A,
        onClose: g
    } = e, {
        analyticsLocations: f,
        sourceAnalyticsLocations: h
    } = (0, a.Ay)(), {
        context: j,
        trackUserProfileAction: I
    } = (0, d.NJ)(), v = (0, m.Ay)(l.id, t), N = (0, i.bG)([r.default], () => r.default.getCurrentUser()?.id === l.id), y = (0, c.X)("useViewUserProfileModalItem");
    return N && y || v?.guildId == null ? null : A?.guildId == null || A?.private ? A?.guildId != null ? null : (0, n.jsx)(s.Drp, {
        id: "view-server-profile",
        label: p.intl.string(p.t.DisZzB),
        subtext: p.intl.formatToPlainString(p.t["mn/nW2"], {
            displayName: o.Ay.getName(t, x, l)
        }),
        action: () => {
            g?.(), (0, u.openUserProfileModal)({
                userId: l.id,
                ...j,
                guildId: t,
                sourceAnalyticsLocations: h
            }), I({
                action: "PRESS_VIEW_SERVER_PROFILE",
                analyticsLocations: f,
                ...j
            })
        }
    }) : (0, n.jsx)(s.Drp, {
        id: "view-main-profile",
        label: p.intl.string(p.t.GISTta),
        subtext: p.intl.formatToPlainString(p.t["mn/nW2"], {
            displayName: o.Ay.getName(void 0, void 0, l)
        }),
        action: () => {
            g?.(), (0, u.openUserProfileModal)({
                userId: l.id,
                ...j,
                guildId: void 0,
                originGuildId: t,
                sourceAnalyticsLocations: h
            }), I({
                action: "PRESS_VIEW_MAIN_PROFILE",
                analyticsLocations: f,
                ...j
            })
        }
    })
}