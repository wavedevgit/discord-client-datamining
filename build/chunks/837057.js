/** chunk id: 837057 params = (module,exports,require) **/
l.d(t, {
    transitionToGlobalDiscovery: () => function e(t) {
        let l = t.tab;
        switch (u.A.setState({
                selectedTab: l
            }), l) {
            case T.GlobalDiscoveryTab.SERVERS:
                let _ = t.selectedServersTab;
                return null != _ ? s.A.setState({
                    selectedTab: _,
                    entrypoint: t.entrypoint ?? p.J8.UNKNOWN
                }) : s.A.setState({
                    entrypoint: t.entrypoint ?? p.J8.UNKNOWN
                }), (0, i.pX)(d.BVt.GLOBAL_DISCOVERY_SERVERS, t.extra);
            case T.GlobalDiscoveryTab.APPS:
                if (null != t.newSessionState) {
                    let l = (0, n.YP)(),
                        {
                            guildId: s,
                            entrypoint: r
                        } = t.newSessionState;
                    if (a.h.setState({
                            sessionId: l,
                            guildId: s ?? null,
                            entrypoint: r,
                            trackedOpenedFromExternalEntrypoint: !1
                        }), o.default.track(d.HAw.APP_DIRECTORY_OPENED, {
                            source: r?.name,
                            session_id: l,
                            guild_id: s,
                            user_id: c.default.getCurrentUser()?.id
                        }), t.newSessionState.restorePreviousView) return e(function() {
                        let {
                            lastItem: e
                        } = a.tS.getState();
                        if (null != e) switch (e.type) {
                            case a.ev.APPLICATION:
                                return {
                                    tab: T.GlobalDiscoveryTab.APPS, applicationId: e.applicationId, section: e.section
                                };
                            case a.ev.CATEGORY:
                                return {
                                    tab: T.GlobalDiscoveryTab.APPS, categoryId: Number(e.categoryId)
                                };
                            case a.ev.SEARCH:
                                return {
                                    tab: T.GlobalDiscoveryTab.APPS, query: e.query ?? "", page: e.page, categoryId: null != e.categoryId ? Number(e.categoryId) : void 0
                                }
                        }
                        return {
                            tab: T.GlobalDiscoveryTab.APPS
                        }
                    }())
                }
                if (null != t.applicationId) {
                    if (t.section === E.GlobalDiscoveryAppsSections.STORE)
                        if (null != t.skuId) return (0, i.pX)(d.BVt.GLOBAL_DISCOVERY_APPS_PROFILE_STORE_SKU(t.applicationId, t.skuId));
                        else return (0, i.pX)(d.BVt.GLOBAL_DISCOVERY_APPS_PROFILE_SECTION(t.applicationId, E.GlobalDiscoveryAppsSections.STORE));
                    return (0, i.pX)(d.BVt.GLOBAL_DISCOVERY_APPS_PROFILE(t.applicationId))
                }
                if (null != t.query) {
                    let e = new URLSearchParams;
                    return "" !== t.query && e.set("q", t.query), null != t.categoryId && e.set("category_id", t.categoryId.toString()), null != t.page && e.set("page", t.page.toString()), (0, i.pX)(d.BVt.GLOBAL_DISCOVERY_APPS_SEARCH, {
                        search: e.toString()
                    })
                }
                if (null != t.categoryId) return (0, i.pX)(d.BVt.GLOBAL_DISCOVERY_APPS_CATEGORY(t.categoryId.toString()));
                else return (0, i.pX)(d.BVt.GLOBAL_DISCOVERY_APPS);
            case T.GlobalDiscoveryTab.QUESTS:
                return (0, r.navigateToQuestHome)({
                    fromContent: t.questContent,
                    questId: t.questId,
                    forceDiscoveryQuestHomeRoute: !0
                });
            default:
                throw Error(`[transitionToGlobalDiscovery] Unhandled tab type: ${l}`)
        }
    }
}), l(323874), l(14289), l(35956);
var a = l(310419),
    n = l(965660),
    s = l(601193),
    r = l(545986),
    i = l(976860),
    c = l(287809),
    o = l(954571),
    u = l(726845),
    T = l(488995),
    d = l(652215),
    E = l(435220),
    p = l(324580)