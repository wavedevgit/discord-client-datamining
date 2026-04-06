/** chunk id: 722868 params = (module,exports,require) **/
i.d(l, {
    A: () => A
});
var t = i(627968),
    n = i(311907),
    s = i(397927),
    a = i(688810),
    r = i(287809),
    o = i(562153),
    d = i(183555),
    c = i(591179),
    u = i(657331),
    m = i(950191),
    x = i(985018);

function A(e) {
    let {
        user: l,
        guildId: i,
        channelId: A,
        displayProfile: p,
        onClose: g
    } = e, {
        analyticsLocations: f,
        sourceAnalyticsLocations: h
    } = (0, a.Ay)(), {
        context: j,
        trackUserProfileAction: I
    } = (0, d.NJ)(), v = (0, m.Ay)(l.id, i), N = (0, n.bG)([r.default], () => r.default.getCurrentUser()?.id === l.id), y = (0, c.X)("useViewUserProfileModalItem");
    return N && y || v?.guildId == null ? null : p?.guildId == null || p?.private ? p?.guildId != null ? null : (0, t.jsx)(s.Drp, {
        id: "view-server-profile",
        label: x.intl.string(x.t.DisZzB),
        subtext: x.intl.formatToPlainString(x.t["mn/nW2"], {
            displayName: o.Ay.getName(i, A, l)
        }),
        action: () => {
            g?.(), (0, u.openUserProfileModal)({
                userId: l.id,
                ...j,
                guildId: i,
                sourceAnalyticsLocations: h
            }), I({
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
                originGuildId: i,
                sourceAnalyticsLocations: h
            }), I({
                action: "PRESS_VIEW_MAIN_PROFILE",
                analyticsLocations: f,
                ...j
            })
        }
    })
}