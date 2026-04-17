/** chunk id: 306897 params = (module,exports,require) **/
n.d(t, {
    A: () => s
});
var l = n(505779),
    a = n(397927),
    i = n(409626),
    r = n(985018);
let s = function(e) {
    switch (e.category) {
        case l.V.STEAM:
            return {
                icon: a.NXQ, text: r.intl.string(r.t.FsANs4), ariaLabel: r.intl.string(r.t["P+ePTG"]), action: i.Ws.SteamStoreLink, url: e.url
            };
        case l.V.EPICGAMES:
            return {
                icon: a.r_I, text: r.intl.string(r.t.ZbBMHa), ariaLabel: r.intl.string(r.t.BwX0UW), action: i.Ws.EpicStoreLink, url: e.url
            };
        case l.V.ROBLOX:
            return {
                icon: a.H0M, text: r.intl.string(r.t["pJ+P+h"]), ariaLabel: r.intl.string(r.t.tYxpdf), action: i.Ws.RobloxStoreLink, url: e.url
            };
        case l.V.BATTLENET:
            return {
                icon: a.aG0, text: r.intl.string(r.t["A7grp+"]), ariaLabel: r.intl.string(r.t.x9at20), action: i.Ws.BattlenetStoreLink, url: e.url
            };
        case l.V.RIOT:
            return {
                icon: a.ALT, text: r.intl.string(r.t.h6MapL), ariaLabel: r.intl.string(r.t["528nvc"]), action: i.Ws.RiotStoreLink, url: e.url
            };
        case l.V.MINECRAFT:
            return {
                icon: a.mP8, text: r.intl.string(r.t["HZbmO+"]), ariaLabel: r.intl.string(r.t.WWTqYn), action: i.Ws.MinecraftStoreLink, url: e.url
            }
    }
    return null
}