/** chunk id: 552836, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => r
});
var i = n(311907),
    s = n(73153);
let l = {};
class a extends i.Ay.PersistedStore {
    static displayName = "GuildBoostingProgressBarPersistedStore";
    static persistKey = "PremiumGuildProgressBarPersistedStore";
    initialize(e) {
        null != e && (l = e)
    }
    getState() {
        return l
    }
    getCountForGuild(e) {
        return l[e]
    }
}
let r = new a(s.h, {
    APPLIED_GUILD_BOOST_COUNT_UPDATE: e => {
        let {
            guildId: t,
            premiumCount: n
        } = e;
        l = {
            ...l,
            [t]: n
        }
    },
    APPLIED_GUILD_BOOST_COUNT_RESET: function() {
        l = {}
    }
})