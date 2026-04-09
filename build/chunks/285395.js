/** chunk id: 285395 params = (module,exports,require) **/
n.d(t, {
    j: () => s,
    t: () => l
});
var i = n(403362),
    a = n(488995),
    r = n(985018);

function l(e) {
    switch (e) {
        case a.GlobalDiscoveryTab.SERVERS:
            return r.intl.string(r.t["+Anbp9"]);
        case a.GlobalDiscoveryTab.APPS:
            return r.intl.string(r.t.bGwCoR);
        case a.GlobalDiscoveryTab.QUESTS:
            return r.intl.string(r.t.EcaD4e);
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