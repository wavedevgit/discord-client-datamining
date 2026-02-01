/** chunk id: 837057, original params: e,t,l (module,exports,require) **/
l.d(t, {
    transitionToGlobalDiscovery: () => function e(t) {
        var l, m, _;
        let O = t.tab;
        switch (u.A.setState({
                selectedTab: O
            }), O) {
            case p.GlobalDiscoveryTab.SERVERS:
                let N = t.selectedServersTab;
                return null != N ? r.A.setState({
                    selectedTab: N,
                    entrypoint: null != (l = t.entrypoint) ? l : E.J8.UNKNOWN
                }) : r.A.setState({
                    entrypoint: null != (m = t.entrypoint) ? m : E.J8.UNKNOWN
                }), (0, c.pX)(d.BVt.GLOBAL_DISCOVERY_SERVERS, t.extra);
            case p.GlobalDiscoveryTab.APPS:
                if (null != t.newSessionState) {
                    let l = (0, a.YP)(),
                        {
                            guildId: r,
                            entrypoint: s
                        } = t.newSessionState;
                    if (n.h.setState({
                            sessionId: l,
                            guildId: null != r ? r : null,
                            entrypoint: s,
                            trackedOpenedFromExternalEntrypoint: !1
                        }), o.default.track(d.HAw.APP_DIRECTORY_OPENED, {
                            source: null == s ? void 0 : s.name,
                            session_id: l,
                            guild_id: r,
                            user_id: null == (_ = i.default.getCurrentUser()) ? void 0 : _.id
                        }), t.newSessionState.restorePreviousView) return e(function() {
                        let {
                            lastItem: e
                        } = n.tS.getState();
                        if (null != e) switch (e.type) {
                            case n.ev.APPLICATION:
                                return {
                                    tab: p.GlobalDiscoveryTab.APPS, applicationId: e.applicationId, section: e.section
                                };
                            case n.ev.CATEGORY:
                                return {
                                    tab: p.GlobalDiscoveryTab.APPS, categoryId: Number(e.categoryId)
                                };
                            case n.ev.SEARCH:
                                var t;
                                return {
                                    tab: p.GlobalDiscoveryTab.APPS, query: null != (t = e.query) ? t : "", page: e.page, categoryId: null != e.categoryId ? Number(e.categoryId) : void 0
                                }
                        }
                        return {
                            tab: p.GlobalDiscoveryTab.APPS
                        }
                    }())
                }
                if (null != t.applicationId) {
                    if (t.section === T.GlobalDiscoveryAppsSections.STORE)
                        if (null != t.skuId) return (0, c.pX)(d.BVt.GLOBAL_DISCOVERY_APPS_PROFILE_STORE_SKU(t.applicationId, t.skuId));
                        else return (0, c.pX)(d.BVt.GLOBAL_DISCOVERY_APPS_PROFILE_SECTION(t.applicationId, T.GlobalDiscoveryAppsSections.STORE));
                    return (0, c.pX)(d.BVt.GLOBAL_DISCOVERY_APPS_PROFILE(t.applicationId))
                }
                if (null != t.query) {
                    let e = new URLSearchParams;
                    return "" !== t.query && e.set("q", t.query), null != t.categoryId && e.set("category_id", t.categoryId.toString()), null != t.page && e.set("page", t.page.toString()), (0, c.pX)(d.BVt.GLOBAL_DISCOVERY_APPS_SEARCH, {
                        search: e.toString()
                    })
                }
                if (null != t.categoryId) return (0, c.pX)(d.BVt.GLOBAL_DISCOVERY_APPS_CATEGORY(t.categoryId.toString()));
                else return (0, c.pX)(d.BVt.GLOBAL_DISCOVERY_APPS);
            case p.GlobalDiscoveryTab.QUESTS:
                return (0, s.navigateToQuestHome)({
                    fromContent: t.questContent,
                    questId: t.questId,
                    forceDiscoveryQuestHomeRoute: !0
                });
            default:
                throw Error("[transitionToGlobalDiscovery] Unhandled tab type: ".concat(O))
        }
    }
}), l(896048), l(680155), l(323874), l(14289), l(35956), l(65821);
var n = l(310419),
    a = l(965660),
    r = l(601193),
    s = l(545986),
    c = l(976860),
    i = l(287809),
    o = l(954571),
    u = l(726845),
    p = l(488995),
    d = l(652215),
    T = l(435220),
    E = l(324580)