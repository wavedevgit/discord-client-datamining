/** chunk id: 334165, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => o
});
var a = n(311907),
    i = n(73153);
let s = {
        lastSeenInfos: {}
    },
    l = s;
class r extends a.Ay.PersistedStore {
    static displayName = "GuildTagChangedCoachmarkStore";
    static persistKey = "GuildTagChangedCoachmarkStore";
    initialize(e) {
        l = e ?? s
    }
    getState() {
        return l
    }
    getGuildLastSeenInfo(e) {
        return l.lastSeenInfos[e] ?? null
    }
}
let o = new r(i.h, {
    GUILD_TAG_CHANGED_COACHMARK_SEEN: function(e) {
        let {
            guildId: t,
            lastSeenInfo: n
        } = e;
        l.lastSeenInfos[t] = n
    },
    LOGOUT: function() {
        l = s
    }
})