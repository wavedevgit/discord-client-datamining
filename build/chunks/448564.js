/** chunk id: 448564 params = (module,exports,require) **/
i.d(t, {
    A: () => r
});
var n = i(311907),
    l = i(73153);
let a = {
    canSeeEnableMonetizationForGuilds: new Set
};
class s extends n.Ay.PersistedStore {
    static displayName = "CreatorMonetizationPersistedStore";
    static persistKey = "CreatorMonetizationPersistedStore";
    static migrations = [];
    initialize(e) {
        null != e && (a.canSeeEnableMonetizationForGuilds = new Set(e.canSeeEnableMonetizationForGuilds))
    }
    getState() {
        return a
    }
    hasSeenCreatorOnboardingForGuild(e) {
        return a.canSeeEnableMonetizationForGuilds.has(e)
    }
}
let r = new s(l.h, {
    CREATOR_MONETIZATION_SET_HAS_SEEN_ONBOARDING_FOR_GUILD: function(e) {
        a.canSeeEnableMonetizationForGuilds.has(e.guildId) || (a.canSeeEnableMonetizationForGuilds = new Set(a.canSeeEnableMonetizationForGuilds).add(e.guildId))
    }
})