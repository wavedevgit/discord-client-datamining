/** chunk id: 973925 params = (module,exports,require) **/
t.d(n, {
    Z: () => l
});
var i = t(20015),
    s = t(647006);

function l(e) {
    let n = (0, s.a)((0, i.K)(e)),
        t = null != n && (n?.messageContent || n?.messageContentLimited),
        l = null != n && (n?.guildPresences || n?.guildPresencesLimited),
        a = null != n && (n?.guildMembers || n?.guildMembersLimited);
    return {
        hasMessageContent: t,
        hasGuildPresences: l,
        hasGuildMembers: a,
        hasIntents: t || l || a
    }
}