/** chunk id: 285395, original params: e,t,n (module,exports,require) **/
n.d(t, {
    j: () => s,
    t: () => a
});
var i = n(403362),
    r = n(488995),
    l = n(985018);

function a(e) {
    switch (e) {
        case r.GlobalDiscoveryTab.SERVERS:
            return l.intl.string(l.t["+Anbp9"]);
        case r.GlobalDiscoveryTab.APPS:
            return l.intl.string(l.t.bGwCoR);
        case r.GlobalDiscoveryTab.QUESTS:
            return l.intl.string(l.t.EcaD4e);
        default:
            (0, i.xb)(e)
    }
}

function s(e) {
    if (e.startsWith("/discovery/applications")) return r.GlobalDiscoveryTab.APPS;
    switch (e) {
        case "/discovery/quests":
            return r.GlobalDiscoveryTab.QUESTS;
        case "/discovery/servers":
            return r.GlobalDiscoveryTab.SERVERS;
        default:
            return r.GLOBAL_DISCOVERY_DEFAULT_TAB
    }
}