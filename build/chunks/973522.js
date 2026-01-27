/** Chunk was on web.js **/
/** chunk id: 973522, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    Ic: () => s,
    PQ: () => c,
    wH: () => l
}), n(747238);
var r = n(847521),
    i = n(760751),
    a = n(723702);

function o(e) {
    return (e = e.toLowerCase()).endsWith("/") && (e = e.slice(0, -1)), e
}

function s(e) {
    return o(e).split("/").slice(-2).join("/")
}

function l(e) {
    var t, n, a, o, l;
    if (null == e) return {
        gameName: void 0,
        gameId: void 0,
        exe: void 0,
        distributor: void 0,
        sku: void 0,
        gameMetadata: void 0,
        rawExePath: void 0
    };
    let c = i.A.getGameByName(e.name),
        u = "exePath" in e ? e.exePath : e.exe;
    return {
        gameName: null != (t = e.name) ? t : void 0,
        gameId: null != (n = null != (a = e.id) ? a : null == c ? void 0 : c.id) ? n : void 0,
        exe: null != u ? s(u) : void 0,
        distributor: null != (o = e.distributor) ? o : void 0,
        sku: null != (l = e.sku) ? l : void 0,
        gameMetadata: null != e ? (0, r.MT)(e) : void 0,
        rawExePath: u
    }
}

function c(e, t) {
    if (null == e || null == t) return !1;
    let n = o(e),
        r = (0, a.getPlatformName)();
    return t.some(e => e.os === r && (null == n ? void 0 : n.endsWith(e.name)))
}