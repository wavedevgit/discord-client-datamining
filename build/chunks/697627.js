/** chunk id: 697627 params = (module,exports,require) **/
n.d(t, {
    A: () => c,
    e: () => o
});
var i, l = n(311907),
    s = n(73153);
let a = new Map,
    r = new Map;
var o = ((i = {})[i.NOT_FETCHED = 0] = "NOT_FETCHED", i[i.FETCHING = 1] = "FETCHING", i[i.FETCHED = 2] = "FETCHED", i);
class d extends l.Ay.Store {
    static displayName = "CreatorMonetizationStore";
    getPriceTiersFetchStateForGuildAndType(e, t) {
        return r.get(e)?.get(t) ?? 0
    }
    getPriceTiersForGuildAndType(e, t) {
        return a.get(e)?.get(t)
    }
}
let c = new d(s.h, {
    CONNECTION_OPEN: function() {
        a.clear(), r.clear()
    },
    CREATOR_MONETIZATION_PRICE_TIERS_FETCH: function(e) {
        let {
            guildId: t,
            priceTierType: n
        } = e;
        r.has(t) || r.set(t, new Map), r.get(t).set(n, 1)
    },
    CREATOR_MONETIZATION_PRICE_TIERS_FETCH_SUCCESS: function(e) {
        let {
            guildId: t,
            priceTierType: n,
            priceTiers: i
        } = e;
        r.has(t) || r.set(t, new Map), r.get(t).set(n, 2), a.has(t) || a.set(t, new Map), a.get(t).set(n, i)
    },
    CREATOR_MONETIZATION_PRICE_TIERS_FETCH_FAILURE: function(e) {
        let {
            guildId: t,
            priceTierType: n
        } = e;
        r.has(t) || r.set(t, new Map), r.get(t).set(n, 2)
    }
})