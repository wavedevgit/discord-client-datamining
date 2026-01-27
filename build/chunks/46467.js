/** Chunk was on web.js **/
/** chunk id: 46467, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    p: () => u
}), n(747238), n(64700), n(417597);
var r = n(71393),
    i = n(723702),
    a = n(540763),
    o = n(652215);
let s = "13.2",
    l = [o.GuildFeatures.ROLE_SUBSCRIPTIONS_AVAILABLE_FOR_PURCHASE];

function c(e, t) {
    let n = e.split(".").map(Number),
        r = t.split(".").map(Number),
        i = Math.max(n.length, r.length);
    for (let e = 0; e < i; e++) {
        var a, o;
        let t = null != (a = n[e]) ? a : 0,
            i = null != (o = r[e]) ? o : 0;
        if (t < i) return -1;
        if (t > i) return 1
    }
    return 0
}

function u(e) {
    if (!(0, i.isIOS)()) return !1;
    let t = (0, a.O)();
    if (null == t || -1 === c(t, s)) return !1;
    let n = r.A.getGuild(e);
    return null != n && !!l.every(e => n.features.has(e))
}