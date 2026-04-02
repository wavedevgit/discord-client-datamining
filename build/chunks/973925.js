/** chunk id: 973925 params = (module,exports,require) **/
t.d(n, {
    Z: () => s
});
var i = t(20015),
    a = t(647006);

function s(e) {
    let n = (0, a.a)((0, i.K)(e)),
        t = null != n && (n?.messageContent || n?.messageContentLimited),
        s = null != n && (n?.guildPresences || n?.guildPresencesLimited),
        l = null != n && (n?.guildMembers || n?.guildMembersLimited);
    return {
        hasMessageContent: t,
        hasGuildPresences: s,
        hasGuildMembers: l,
        hasIntents: t || s || l
    }
}