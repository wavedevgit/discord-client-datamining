/** chunk id: 285395 params = (module,exports,require) **/
n.d(t, {
    j: () => s,
    t: () => r
});
var i = n(403362),
    l = n(488995),
    a = n(985018);

function r(e) {
    switch (e) {
        case l.GlobalDiscoveryTab.SERVERS:
            return a.intl.string(a.t["+Anbp9"]);
        case l.GlobalDiscoveryTab.APPS:
            return a.intl.string(a.t.bGwCoR);
        case l.GlobalDiscoveryTab.QUESTS:
            return a.intl.string(a.t.EcaD4e);
        default:
            (0, i.xb)(e)
    }
}

function s(e) {
    if (e.startsWith("/discovery/applications")) return l.GlobalDiscoveryTab.APPS;
    switch (e) {
        case "/discovery/quests":
            return l.GlobalDiscoveryTab.QUESTS;
        case "/discovery/servers":
            return l.GlobalDiscoveryTab.SERVERS;
        default:
            return l.GLOBAL_DISCOVERY_DEFAULT_TAB
    }
}