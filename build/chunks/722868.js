/** chunk id: 722868 params = (module,exports,require) **/
t.d(l, {
    A: () => u
});
var i = t(627968),
    n = t(397927),
    s = t(688810),
    a = t(562153),
    r = t(183555),
    o = t(657331),
    d = t(950191),
    c = t(985018);

function u(e) {
    let {
        user: l,
        guildId: t,
        channelId: u,
        displayProfile: m,
        onClose: A,
        onChangeGuildId: p
    } = e, {
        analyticsLocations: x,
        sourceAnalyticsLocations: g
    } = (0, s.Ay)(), {
        context: h,
        trackUserProfileAction: f
    } = (0, r.NJ)(), j = (0, d.Ay)(l.id, t);
    return j?.guildId == null ? null : m?.guildId == null || m?.private ? m?.guildId != null ? null : (0, i.jsx)(n.Drp, {
        id: "view-server-profile",
        label: c.intl.string(c.t.DisZzB),
        subtext: c.intl.formatToPlainString(c.t["mn/nW2"], {
            displayName: a.Ay.getName(t, u, l)
        }),
        action: () => {
            null != p ? p(t ?? null) : (A?.(), (0, o.openUserProfileModal)({
                userId: l.id,
                ...h,
                guildId: t,
                sourceAnalyticsLocations: g
            })), f({
                action: "PRESS_VIEW_SERVER_PROFILE",
                analyticsLocations: x,
                ...h
            })
        }
    }) : (0, i.jsx)(n.Drp, {
        id: "view-main-profile",
        label: c.intl.string(c.t.GISTta),
        subtext: c.intl.formatToPlainString(c.t["mn/nW2"], {
            displayName: a.Ay.getName(void 0, void 0, l)
        }),
        action: () => {
            null != p ? p(null) : (A?.(), (0, o.openUserProfileModal)({
                userId: l.id,
                ...h,
                guildId: void 0,
                originGuildId: t,
                sourceAnalyticsLocations: g
            })), f({
                action: "PRESS_VIEW_MAIN_PROFILE",
                analyticsLocations: x,
                ...h
            })
        }
    })
}