/** Chunk was on 77870 **/
/** chunk id: 34247, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => m
});
var r = n(627968),
    l = n(64700),
    i = n(696292),
    s = n(397927),
    a = n(533129),
    o = n(726845),
    c = n(837057),
    u = n(310419),
    d = n(606256),
    p = n(488995),
    h = n(324580),
    f = n(654487),
    g = n(985018);
let m = l.forwardRef(function(e, t) {
    let {
        selected: n,
        onClick: m,
        questId: b,
        className: A
    } = e, y = l.useCallback(() => {
        (0, a.WL)({
            source: p.GlobalDiscoveryAnalyticsLocations.GUILDS_BAR_ICON
        });
        let e = void 0 !== b ? p.GlobalDiscoveryTab.QUESTS : o.A.getField("selectedTab");
        switch (e) {
            case p.GlobalDiscoveryTab.QUESTS:
                return (0, c.transitionToGlobalDiscovery)({
                    tab: p.GlobalDiscoveryTab.QUESTS,
                    location: f.rE.DISCOVERY_COMPASS,
                    questContent: i.u.DISCOVERY_COMPASS,
                    questId: b
                });
            case p.GlobalDiscoveryTab.SERVERS:
                return (0, c.transitionToGlobalDiscovery)({
                    tab: p.GlobalDiscoveryTab.SERVERS,
                    entrypoint: h.J8.GUILDS_BAR
                });
            case p.GlobalDiscoveryTab.APPS:
                return (0, c.transitionToGlobalDiscovery)({
                    tab: p.GlobalDiscoveryTab.APPS,
                    newSessionState: {
                        entrypoint: {
                            name: u.sW.GLOBAL_DISCOVERY_BUTTON
                        },
                        restorePreviousView: !0
                    }
                });
            default:
                return (0, c.transitionToGlobalDiscovery)({
                    tab: e
                })
        }
    }, [b]);
    return (0, r.jsx)(d.A, {
        id: "guild-discover-button",
        ref: t,
        className: A,
        onClick: () => {
            y(), void 0 !== m && m()
        },
        selected: n,
        tooltip: g.intl.string(g.t["4nEZLk"]),
        icon: s.QGJ
    })
})