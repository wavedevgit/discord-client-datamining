/** chunk id: 662427 params = (module,exports,require) **/
n.d(t, {
    A: () => r
});
var i = n(311907),
    l = n(73153);
let s = [];
class a extends i.Ay.Store {
    static displayName = "CreatorMonetizationMarketingStore";
    getEligibleGuildsForNagActivate() {
        return s
    }
}
let r = new a(l.h, {
    CREATOR_MONETIZATION_NAG_ACTIVATE_ELIGIBLITY_FETCH_SUCCESS: function(e) {
        let {
            eligibleGuilds: t
        } = e;
        s = t
    }
})