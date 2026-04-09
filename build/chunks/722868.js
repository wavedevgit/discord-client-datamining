/** chunk id: 722868 params = (module,exports,require) **/
n.d(l, {
    A: () => p
});
var t = n(627968),
    i = n(311907),
    s = n(397927),
    a = n(688810),
    r = n(287809),
    o = n(562153),
    d = n(183555),
    c = n(591179),
    u = n(657331),
    m = n(950191),
    x = n(985018);

function p(e) {
    let {
        user: l,
        guildId: n,
        channelId: p,
        displayProfile: A,
        onClose: g
    } = e, {
        analyticsLocations: f,
        sourceAnalyticsLocations: h
    } = (0, a.Ay)(), {
        context: j,
        trackUserProfileAction: v
    } = (0, d.NJ)(), I = (0, m.Ay)(l.id, n), N = (0, i.bG)([r.default], () => r.default.getCurrentUser()?.id === l.id), y = (0, c.X)("useViewUserProfileModalItem");
    return N && y || I?.guildId == null ? null : A?.guildId == null || A?.private ? A?.guildId != null ? null : (0, t.jsx)(s.Drp, {
        id: "view-server-profile",
        label: x.intl.string(x.t.DisZzB),
        subtext: x.intl.formatToPlainString(x.t["mn/nW2"], {
            displayName: o.Ay.getName(n, p, l)
        }),
        action: () => {
            g?.(), (0, u.openUserProfileModal)({
                userId: l.id,
                ...j,
                guildId: n,
                sourceAnalyticsLocations: h
            }), v({
                action: "PRESS_VIEW_SERVER_PROFILE",
                analyticsLocations: f,
                ...j
            })
        }
    }) : (0, t.jsx)(s.Drp, {
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
                originGuildId: n,
                sourceAnalyticsLocations: h
            }), v({
                action: "PRESS_VIEW_MAIN_PROFILE",
                analyticsLocations: f,
                ...j
            })
        }
    })
}