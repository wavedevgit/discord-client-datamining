/** chunk id: 973925, original params: e,t,n (module,exports,require) **/
n.d(t, {
    Z: () => l
});
var i = n(20015),
    s = n(647006);

function l(e) {
    let t = (0, s.a)((0, i.K)(e)),
        n = null != t && (t?.messageContent || t?.messageContentLimited),
        l = null != t && (t?.guildPresences || t?.guildPresencesLimited),
        r = null != t && (t?.guildMembers || t?.guildMembersLimited);
    return {
        hasMessageContent: n,
        hasGuildPresences: l,
        hasGuildMembers: r,
        hasIntents: n || l || r
    }
}