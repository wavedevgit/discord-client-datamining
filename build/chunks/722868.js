/** chunk id: 722868 params = (module,exports,require) **/
t.d(l, {
    A: () => A
});
var i = t(627968),
    n = t(311907),
    s = t(397927),
    a = t(688810),
    r = t(287809),
    o = t(562153),
    d = t(183555),
    c = t(591179),
    u = t(657331),
    m = t(950191),
    x = t(985018);

function A(e) {
    let {
        user: l,
        guildId: t,
        channelId: A,
        displayProfile: p,
        onClose: g
    } = e, {
        analyticsLocations: f,
        sourceAnalyticsLocations: h
    } = (0, a.Ay)(), {
        context: j,
        trackUserProfileAction: I
    } = (0, d.NJ)(), v = (0, m.Ay)(l.id, t), N = (0, n.bG)([r.default], () => r.default.getCurrentUser()?.id === l.id), y = (0, c.X)("useViewUserProfileModalItem");
    return N && y || v?.guildId == null ? null : p?.guildId == null || p?.private ? p?.guildId != null ? null : (0, i.jsx)(s.Drp, {
        id: "view-server-profile",
        label: x.intl.string(x.t.DisZzB),
        subtext: x.intl.formatToPlainString(x.t["mn/nW2"], {
            displayName: o.Ay.getName(t, A, l)
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
    }) : (0, i.jsx)(s.Drp, {
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
            }), I({
                action: "PRESS_VIEW_MAIN_PROFILE",
                analyticsLocations: f,
                ...j
            })
        }
    })
}