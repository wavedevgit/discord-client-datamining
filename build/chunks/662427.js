/** Chunk was on 73734 **/
/** chunk id: 662427, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => c
});
var r, i, l = n(311907),
    a = n(73153);
let o = [];
class s extends(i = l.Ay.Store) {
    getEligibleGuildsForNagActivate() {
        return o
    }
}(r = "displayName") in s ? Object.defineProperty(s, r, {
    value: "CreatorMonetizationMarketingStore",
    enumerable: !0,
    configurable: !0,
    writable: !0
}) : s[r] = "CreatorMonetizationMarketingStore";
let c = new s(a.h, {
    CREATOR_MONETIZATION_NAG_ACTIVATE_ELIGIBLITY_FETCH_SUCCESS: function(e) {
        let {
            eligibleGuilds: t
        } = e;
        o = t
    }
})