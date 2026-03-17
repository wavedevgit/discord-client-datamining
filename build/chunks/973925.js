/** chunk id: 973925 params = (module,exports,require) **/
a.d(t, {
    Z: () => l
});
var n = a(20015),
    i = a(647006);

function l(e) {
    let t = (0, i.a)((0, n.K)(e)),
        a = null != t && (t?.messageContent || t?.messageContentLimited),
        l = null != t && (t?.guildPresences || t?.guildPresencesLimited),
        s = null != t && (t?.guildMembers || t?.guildMembersLimited);
    return {
        hasMessageContent: a,
        hasGuildPresences: l,
        hasGuildMembers: s,
        hasIntents: a || l || s
    }
}