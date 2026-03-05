/** chunk id: 34247, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => g
});
var i = n(627968),
    s = n(64700),
    l = n(696292),
    r = n(397927),
    a = n(533129),
    o = n(726845),
    c = n(837057),
    d = n(310419),
    u = n(606256),
    h = n(488995),
    A = n(324580),
    m = n(654487),
    p = n(985018);
let g = s.forwardRef(function(e, t) {
    let {
        selected: n,
        onClick: g,
        questId: _,
        className: f
    } = e, x = s.useCallback(() => {
        (0, a.WL)({
            source: h.GlobalDiscoveryAnalyticsLocations.GUILDS_BAR_ICON
        });
        let e = void 0 !== _ ? h.GlobalDiscoveryTab.QUESTS : o.A.getField("selectedTab");
        switch (e) {
            case h.GlobalDiscoveryTab.QUESTS:
                return (0, c.transitionToGlobalDiscovery)({
                    tab: h.GlobalDiscoveryTab.QUESTS,
                    location: m.rE.DISCOVERY_COMPASS,
                    questContent: l.u.DISCOVERY_COMPASS,
                    questId: _
                });
            case h.GlobalDiscoveryTab.SERVERS:
                return (0, c.transitionToGlobalDiscovery)({
                    tab: h.GlobalDiscoveryTab.SERVERS,
                    entrypoint: A.J8.GUILDS_BAR
                });
            case h.GlobalDiscoveryTab.APPS:
                return (0, c.transitionToGlobalDiscovery)({
                    tab: h.GlobalDiscoveryTab.APPS,
                    newSessionState: {
                        entrypoint: {
                            name: d.sW.GLOBAL_DISCOVERY_BUTTON
                        },
                        restorePreviousView: !0
                    }
                });
            default:
                return (0, c.transitionToGlobalDiscovery)({
                    tab: e
                })
        }
    }, [_]);
    return (0, i.jsx)(u.A, {
        id: "guild-discover-button",
        ref: t,
        className: f,
        onClick: () => {
            x(), void 0 !== g && g()
        },
        selected: n,
        tooltip: p.intl.string(p.t["4nEZLk"]),
        icon: r.QGJ
    })
})