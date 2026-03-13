/** chunk id: 722868 params = (module,exports,require) **/
n.d(l, {
    A: () => u
});
var i = n(627968),
    t = n(397927),
    s = n(688810),
    a = n(562153),
    r = n(183555),
    o = n(657331),
    d = n(950191),
    c = n(985018);

function u(e) {
    let {
        user: l,
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
    } = (0, r.NJ)(), f = (0, d.Ay)(l.id, n);
    return f?.guildId == null ? null : A?.guildId == null || A?.private ? A?.guildId != null ? null : (0, i.jsx)(t.Drp, {
        id: "view-server-profile",
        label: c.intl.string(c.t.DisZzB),
        subtext: c.intl.formatToPlainString(c.t["mn/nW2"], {
            displayName: a.Ay.getName(n, u, l)
        }),
        action: () => {
            m?.(), (0, o.openUserProfileModal)({
                userId: l.id,
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
    }) : (0, i.jsx)(t.Drp, {
        id: "view-main-profile",
        label: c.intl.string(c.t.GISTta),
        subtext: c.intl.formatToPlainString(c.t["mn/nW2"], {
            displayName: a.Ay.getName(void 0, void 0, l)
        }),
        action: () => {
            m?.(), (0, o.openUserProfileModal)({
                userId: l.id,
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