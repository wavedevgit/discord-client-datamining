/** chunk id: 647006 params = (module,exports,require) **/
t.d(n, {
    a: () => r
});
var i = t(20015),
    s = t(652215);

function r(e) {
    if (null == e) return;
    let n = {
        flags: e
    };
    return {
        guildPresences: (0, i.n)(n, s.gfo.GATEWAY_PRESENCE),
        guildMembers: (0, i.n)(n, s.gfo.GATEWAY_GUILD_MEMBERS),
        messageContent: (0, i.n)(n, s.gfo.GATEWAY_MESSAGE_CONTENT),
        guildPresencesLimited: (0, i.n)(n, s.gfo.GATEWAY_PRESENCE_LIMITED),
        guildMembersLimited: (0, i.n)(n, s.gfo.GATEWAY_GUILD_MEMBERS_LIMITED),
        messageContentLimited: (0, i.n)(n, s.gfo.GATEWAY_MESSAGE_CONTENT_LIMITED)
    }
}