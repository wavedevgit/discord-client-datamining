/** chunk id: 973925, original params: e,t,n (module,exports,require) **/
n.d(t, {
    Z: () => i
}), n(938796);
var l = n(647006);

function i(e) {
    let {
        flags: t
    } = e, n = (0, l.a)(t), i = null != n && ((null == n ? void 0 : n.messageContent) || (null == n ? void 0 : n.messageContentLimited)), r = null != n && ((null == n ? void 0 : n.guildPresences) || (null == n ? void 0 : n.guildPresencesLimited)), s = null != n && ((null == n ? void 0 : n.guildMembers) || (null == n ? void 0 : n.guildMembersLimited));
    return {
        hasMessageContent: i,
        hasGuildPresences: r,
        hasGuildMembers: s,
        hasIntents: i || r || s
    }
}