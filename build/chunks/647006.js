/** chunk id: 647006 params = (module,exports,require) **/
a.d(t, {
    a: () => l
});
var n = a(20015),
    i = a(652215);

function l(e) {
    if (null == e) return;
    let t = {
        flags: e
    };
    return {
        guildPresences: (0, n.n)(t, i.gfo.GATEWAY_PRESENCE),
        guildMembers: (0, n.n)(t, i.gfo.GATEWAY_GUILD_MEMBERS),
        messageContent: (0, n.n)(t, i.gfo.GATEWAY_MESSAGE_CONTENT),
        guildPresencesLimited: (0, n.n)(t, i.gfo.GATEWAY_PRESENCE_LIMITED),
        guildMembersLimited: (0, n.n)(t, i.gfo.GATEWAY_GUILD_MEMBERS_LIMITED),
        messageContentLimited: (0, n.n)(t, i.gfo.GATEWAY_MESSAGE_CONTENT_LIMITED)
    }
}