/** chunk id: 722868 params = (module,exports,require) **/
i.d(l, {
    A: () => u
});
var n = i(627968),
    t = i(397927),
    s = i(688810),
    a = i(562153),
    r = i(183555),
    o = i(657331),
    d = i(950191),
    c = i(985018);

function u(e) {
    let {
        user: l,
        guildId: i,
        channelId: u,
        displayProfile: A,
        onClose: m
    } = e, {
        analyticsLocations: p,
        sourceAnalyticsLocations: x
    } = (0, s.Ay)(), {
        context: g,
        trackUserProfileAction: h
    } = (0, r.NJ)(), f = (0, d.Ay)(l.id, i);
    return f?.guildId == null ? null : A?.guildId == null || A?.private ? A?.guildId != null ? null : (0, n.jsx)(t.Drp, {
        id: "view-server-profile",
        label: c.intl.string(c.t.DisZzB),
        subtext: c.intl.formatToPlainString(c.t["mn/nW2"], {
            displayName: a.Ay.getName(i, u, l)
        }),
        action: () => {
            m?.(), (0, o.openUserProfileModal)({
                userId: l.id,
                guildId: i,
                ...g,
                showGuildProfile: !0,
                sourceAnalyticsLocations: x
            }), h({
                action: "PRESS_VIEW_SERVER_PROFILE",
                analyticsLocations: p,
                ...g
            })
        }
    }) : (0, n.jsx)(t.Drp, {
        id: "view-main-profile",
        label: c.intl.string(c.t.GISTta),
        subtext: c.intl.formatToPlainString(c.t["mn/nW2"], {
            displayName: a.Ay.getName(void 0, void 0, l)
        }),
        action: () => {
            m?.(), (0, o.openUserProfileModal)({
                userId: l.id,
                guildId: i,
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