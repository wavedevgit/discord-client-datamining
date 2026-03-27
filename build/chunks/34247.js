/** chunk id: 34247 params = (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => g
});
var i = n(627968),
    s = n(64700),
    l = n(696292),
    a = n(397927),
    r = n(533129),
    o = n(726845),
    c = n(837057),
    d = n(310419),
    u = n(606256),
    h = n(488995),
    A = n(324580),
    m = n(654487),
    _ = n(985018);
let g = s.forwardRef(function(e, t) {
    let {
        selected: n,
        onClick: g,
        questId: p,
        className: f
    } = e, x = s.useCallback(() => {
        (0, r.WL)({
            source: h.GlobalDiscoveryAnalyticsLocations.GUILDS_BAR_ICON
        });
        let e = void 0 !== p ? h.GlobalDiscoveryTab.QUESTS : o.A.getField("selectedTab");
        switch (e) {
            case h.GlobalDiscoveryTab.QUESTS:
                return (0, c.transitionToGlobalDiscovery)({
                    tab: h.GlobalDiscoveryTab.QUESTS,
                    location: m.rE.DISCOVERY_COMPASS,
                    questContent: l.u.DISCOVERY_COMPASS,
                    questId: p
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
    }, [p]);
    return (0, i.jsx)(u.A, {
        id: "guild-discover-button",
        ref: t,
        className: f,
        onClick: () => {
            x(), void 0 !== g && g()
        },
        selected: n,
        tooltip: _.intl.string(_.t["4nEZLk"]),
        icon: a.QGJ
    })
})