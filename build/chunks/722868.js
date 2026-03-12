/** chunk id: 722868 params = (module,exports,require) **/
n.d(t, {
    A: () => u
});
var l = n(627968),
    i = n(397927),
    s = n(688810),
    a = n(562153),
    r = n(183555),
    o = n(657331),
    d = n(950191),
    c = n(985018);

function u(e) {
    let {
        user: t,
        guildId: n,
        channelId: u,
        displayProfile: A,
        onClose: m
    } = e, {
        analyticsLocations: p,
        sourceAnalyticsLocations: x
    } = (0, s.Ay)(), {
        context: g,
        trackUserProfileAction: h
    } = (0, r.NJ)(), f = (0, d.Ay)(t.id, n);
    return f?.guildId == null ? null : A?.guildId == null || A?.private ? A?.guildId != null ? null : (0, l.jsx)(i.Drp, {
        id: "view-server-profile",
        label: c.intl.string(c.t.DisZzB),
        subtext: c.intl.formatToPlainString(c.t["mn/nW2"], {
            displayName: a.Ay.getName(n, u, t)
        }),
        action: () => {
            m?.(), (0, o.openUserProfileModal)({
                userId: t.id,
                guildId: n,
                ...g,
                showGuildProfile: !0,
                sourceAnalyticsLocations: x
            }), h({
                action: "PRESS_VIEW_SERVER_PROFILE",
                analyticsLocations: p,
                ...g
            })
        }
    }) : (0, l.jsx)(i.Drp, {
        id: "view-main-profile",
        label: c.intl.string(c.t.GISTta),
        subtext: c.intl.formatToPlainString(c.t["mn/nW2"], {
            displayName: a.Ay.getName(void 0, void 0, t)
        }),
        action: () => {
            m?.(), (0, o.openUserProfileModal)({
                userId: t.id,
                guildId: n,
                ...g,
                showGuildProfile: !1,
                sourceAnalyticsLocations: x
            }), h({
                action: "PRESS_VIEW_MAIN_PROFILE",
                analyticsLocations: p,
                ...g
            })
        }
    })
}