/** chunk id: 334165 params = (module,exports,require) **/
n.d(t, {
    A: () => o
});
var a = n(311907),
    i = n(73153);
let l = {
        lastSeenInfos: {}
    },
    s = l;
class r extends a.Ay.PersistedStore {
    static displayName = "GuildTagChangedCoachmarkStore";
    static persistKey = "GuildTagChangedCoachmarkStore";
    initialize(e) {
        s = e ?? l
    }
    getState() {
        return s
    }
    getGuildLastSeenInfo(e) {
        return s.lastSeenInfos[e] ?? null
    }
}
let o = new r(i.h, {
    GUILD_TAG_CHANGED_COACHMARK_SEEN: function(e) {
        let {
            guildId: t,
            lastSeenInfo: n
        } = e;
        s.lastSeenInfos[t] = n
    },
    LOGOUT: function() {
        s = l
    }
})