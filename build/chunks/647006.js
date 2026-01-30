/** chunk id: 647006, original params: e,t,n (module,exports,require) **/
n.d(t, {
    a: () => r
});
var l = n(665260),
    i = n(652215);

function r(e) {
    if (null != e) return {
        guildPresences: (0, l.Lt)(e, i.gfo.GATEWAY_PRESENCE),
        guildMembers: (0, l.Lt)(e, i.gfo.GATEWAY_GUILD_MEMBERS),
        messageContent: (0, l.Lt)(e, i.gfo.GATEWAY_MESSAGE_CONTENT),
        guildPresencesLimited: (0, l.Lt)(e, i.gfo.GATEWAY_PRESENCE_LIMITED),
        guildMembersLimited: (0, l.Lt)(e, i.gfo.GATEWAY_GUILD_MEMBERS_LIMITED),
        messageContentLimited: (0, l.Lt)(e, i.gfo.GATEWAY_MESSAGE_CONTENT_LIMITED)
    }
}