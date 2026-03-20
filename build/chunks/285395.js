/** chunk id: 285395 params = (module,exports,require) **/
n.d(t, {
    j: () => s,
    t: () => r
});
var i = n(403362),
    a = n(488995),
    l = n(985018);

function r(e) {
    switch (e) {
        case a.GlobalDiscoveryTab.SERVERS:
            return l.intl.string(l.t["+Anbp9"]);
        case a.GlobalDiscoveryTab.APPS:
            return l.intl.string(l.t.bGwCoR);
        case a.GlobalDiscoveryTab.QUESTS:
            return l.intl.string(l.t.EcaD4e);
        default:
            (0, i.xb)(e)
    }
}

function s(e) {
    if (e.startsWith("/discovery/applications")) return a.GlobalDiscoveryTab.APPS;
    switch (e) {
        case "/discovery/quests":
            return a.GlobalDiscoveryTab.QUESTS;
        case "/discovery/servers":
            return a.GlobalDiscoveryTab.SERVERS;
        default:
            return a.GLOBAL_DISCOVERY_DEFAULT_TAB
    }
}