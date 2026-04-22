/** chunk id: 722868 params = (module,exports,require) **/
l.d(n, {
    A: () => p
});
var t = l(627968),
    i = l(311907),
    s = l(397927),
    a = l(688810),
    r = l(287809),
    o = l(562153),
    d = l(183555),
    c = l(591179),
    u = l(657331),
    m = l(950191),
    A = l(985018);

function p(e) {
    let {
        user: n,
        guildId: l,
        channelId: p,
        displayProfile: x,
        onClose: g
    } = e, {
        analyticsLocations: f,
        sourceAnalyticsLocations: h
    } = (0, a.Ay)(), {
        context: v,
        trackUserProfileAction: j
    } = (0, d.NJ)(), I = (0, m.Ay)(n.id, l), N = (0, i.bG)([r.default], () => r.default.getCurrentUser()?.id === n.id), y = (0, c.X)("useViewUserProfileModalItem");
    return N && y || I?.guildId == null ? null : x?.guildId == null || x?.private ? x?.guildId != null ? null : (0, t.jsx)(s.Drp, {
        id: "view-server-profile",
        label: A.intl.string(A.t.DisZzB),
        subtext: A.intl.formatToPlainString(A.t["mn/nW2"], {
            displayName: o.Ay.getName(l, p, n)
        }),
        action: () => {
            g?.(), (0, u.openUserProfileModal)({
                userId: n.id,
                ...v,
                guildId: l,
                sourceAnalyticsLocations: h
            }), j({
                action: "PRESS_VIEW_SERVER_PROFILE",
                analyticsLocations: f,
                ...v
            })
        }
    }) : (0, t.jsx)(s.Drp, {
        id: "view-main-profile",
        label: A.intl.string(A.t.GISTta),
        subtext: A.intl.formatToPlainString(A.t["mn/nW2"], {
            displayName: o.Ay.getName(void 0, void 0, n)
        }),
        action: () => {
            g?.(), (0, u.openUserProfileModal)({
                userId: n.id,
                ...v,
                guildId: void 0,
                originGuildId: l,
                sourceAnalyticsLocations: h
            }), j({
                action: "PRESS_VIEW_MAIN_PROFILE",
                analyticsLocations: f,
                ...v
            })
        }
    })
}