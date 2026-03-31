/** chunk id: 306897 params = (module,exports,require) **/
n.d(t, {
    A: () => s
});
var a = n(505779),
    i = n(397927),
    l = n(409626),
    r = n(985018);
let s = function(e) {
    switch (e.category) {
        case a.V.STEAM:
            return {
                icon: i.NXQ, text: r.intl.string(r.t.FsANs4), ariaLabel: r.intl.string(r.t["P+ePTG"]), action: l.Ws.SteamStoreLink, url: e.url
            };
        case a.V.EPICGAMES:
            return {
                icon: i.r_I, text: r.intl.string(r.t.ZbBMHa), ariaLabel: r.intl.string(r.t.BwX0UW), action: l.Ws.EpicStoreLink, url: e.url
            };
        case a.V.ROBLOX:
            return {
                icon: i.H0M, text: r.intl.string(r.t["pJ+P+h"]), ariaLabel: r.intl.string(r.t.tYxpdf), action: l.Ws.RobloxStoreLink, url: e.url
            };
        case a.V.BATTLENET:
            return {
                icon: i.aG0, text: r.intl.string(r.t["A7grp+"]), ariaLabel: r.intl.string(r.t.x9at20), action: l.Ws.BattlenetStoreLink, url: e.url
            };
        case a.V.RIOT:
            return {
                icon: i.ALT, text: r.intl.string(r.t.h6MapL), ariaLabel: r.intl.string(r.t["528nvc"]), action: l.Ws.RiotStoreLink, url: e.url
            };
        case a.V.MINECRAFT:
            return {
                icon: i.mP8, text: r.intl.string(r.t["HZbmO+"]), ariaLabel: r.intl.string(r.t.WWTqYn), action: l.Ws.MinecraftStoreLink, url: e.url
            }
    }
    return null
}