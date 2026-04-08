/** chunk id: 34247 params = (module,exports,require) **/
n.d(t, {
    A: () => p
});
var i = n(627968),
    l = n(64700),
    s = n(696292),
    a = n(397927),
    r = n(533129),
    o = n(726845),
    d = n(837057),
    c = n(310419),
    u = n(606256),
    h = n(488995),
    A = n(324580),
    _ = n(654487),
    m = n(985018);
let p = l.forwardRef(function(e, t) {
    let {
        selected: n,
        onClick: p,
        questId: g,
        className: f
    } = e, x = l.useCallback(() => {
        (0, r.WL)({
            source: h.GlobalDiscoveryAnalyticsLocations.GUILDS_BAR_ICON
        });
        let e = void 0 !== g ? h.GlobalDiscoveryTab.QUESTS : o.A.getField("selectedTab");
        switch (e) {
            case h.GlobalDiscoveryTab.QUESTS:
                return (0, d.transitionToGlobalDiscovery)({
                    tab: h.GlobalDiscoveryTab.QUESTS,
                    location: _.rE.DISCOVERY_COMPASS,
                    questContent: s.u.DISCOVERY_COMPASS,
                    questId: g
                });
            case h.GlobalDiscoveryTab.SERVERS:
                return (0, d.transitionToGlobalDiscovery)({
                    tab: h.GlobalDiscoveryTab.SERVERS,
                    entrypoint: A.J8.GUILDS_BAR
                });
            case h.GlobalDiscoveryTab.APPS:
                return (0, d.transitionToGlobalDiscovery)({
                    tab: h.GlobalDiscoveryTab.APPS,
                    newSessionState: {
                        entrypoint: {
                            name: c.sW.GLOBAL_DISCOVERY_BUTTON
                        },
                        restorePreviousView: !0
                    }
                });
            default:
                return (0, d.transitionToGlobalDiscovery)({
                    tab: e
                })
        }
    }, [g]);
    return (0, i.jsx)(u.A, {
        id: "guild-discover-button",
        ref: t,
        className: f,
        onClick: () => {
            x(), void 0 !== p && p()
        },
        selected: n,
        tooltip: m.intl.string(m.t["4nEZLk"]),
        icon: a.QGJ
    })
})