/** chunk id: 662427 params = (module,exports,require) **/
"use strict";
n.d(e, {
    A: () => a
});
var i = n(311907),
    r = n(73153);
let s = [];
class l extends i.Ay.Store {
    static displayName = "CreatorMonetizationMarketingStore";
    getEligibleGuildsForNagActivate() {
        return s
    }
}
let a = new l(r.h, {
    CREATOR_MONETIZATION_NAG_ACTIVATE_ELIGIBLITY_FETCH_SUCCESS: function(t) {
        let {
            eligibleGuilds: e
        } = t;
        s = e
    }
})