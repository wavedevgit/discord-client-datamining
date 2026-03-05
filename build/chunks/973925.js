/** chunk id: 973925, original params: e,t,n (module,exports,require) **/
n.d(t, {
    Z: () => r
});
var i = n(20015),
    s = n(647006);

function r(e) {
    let t = (0, s.a)((0, i.K)(e)),
        n = null != t && (t?.messageContent || t?.messageContentLimited),
        r = null != t && (t?.guildPresences || t?.guildPresencesLimited),
        l = null != t && (t?.guildMembers || t?.guildMembersLimited);
    return {
        hasMessageContent: n,
        hasGuildPresences: r,
        hasGuildMembers: l,
        hasIntents: n || r || l
    }
}