/** chunk id: 552836 params = (module,exports,require) **/
i.d(t, {
    A: () => o
});
var r = i(311907),
    s = i(73153);
let n = {};
class a extends r.Ay.PersistedStore {
    static displayName = "GuildBoostingProgressBarPersistedStore";
    static persistKey = "PremiumGuildProgressBarPersistedStore";
    initialize(e) {
        null != e && (n = e)
    }
    getState() {
        return n
    }
    getCountForGuild(e) {
        return n[e]
    }
}
let o = new a(s.h, {
    APPLIED_GUILD_BOOST_COUNT_UPDATE: e => {
        let {
            guildId: t,
            premiumCount: i
        } = e;
        n = {
            ...n,
            [t]: i
        }
    },
    APPLIED_GUILD_BOOST_COUNT_RESET: function() {
        n = {}
    }
})