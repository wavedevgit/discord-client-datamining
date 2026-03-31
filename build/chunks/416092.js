/** chunk id: 416092 params = (module,exports,require) **/
n.d(t, {
    U: () => _
});
var i = n(478437),
    l = n(367513),
    r = n(604681),
    s = n(313961),
    o = n(672385),
    a = n(950191),
    d = n(761640),
    c = n(734057),
    u = n(309010),
    A = n(967198),
    E = n(652215);
let _ = {
    binds: ["mod+u"],
    comboKeysBindGlobal: !0,
    action() {
        let e = A.A.getGuildId(),
            t = u.A.getChannelId(e),
            n = c.A.getChannel(t);
        if (null != t && null != n && n.type === i.r.GUILD_VOICE) return l.A.updateChatOpen(t, !s.A.getChatOpen(t), "toggle users keybind"), !1;
        if (null != t && null != n && n.type === i.r.DM) {
            let e = d.Ay.getSection(t, n?.isDM()),
                i = (0, a.AP)(n.getRecipientId()),
                l = e === E.YvQ.PROFILE;
            return (0, o.am)({
                displayProfile: i,
                isProfileOpen: !l
            }), r.A.toggleUserProfileSidebarSection(), !1
        }
        return r.A.toggleMembersSection(), !1
    }
}