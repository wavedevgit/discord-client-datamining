/** chunk id: 973925 params = (module,exports,require) **/
t.d(n, {
    Z: () => r
});
var i = t(20015),
    s = t(647006);

function r(e) {
    let n = (0, s.a)((0, i.K)(e)),
        t = null != n && (n?.messageContent || n?.messageContentLimited),
        r = null != n && (n?.guildPresences || n?.guildPresencesLimited),
        a = null != n && (n?.guildMembers || n?.guildMembersLimited);
    return {
        hasMessageContent: t,
        hasGuildPresences: r,
        hasGuildMembers: a,
        hasIntents: t || r || a
    }
}