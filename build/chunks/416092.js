/** chunk id: 416092, original params: e,t,n (module,exports,require) **/
n.d(t, {
    U: () => g
});
var i = n(478437),
    r = n(367513),
    a = n(604681),
    s = n(313961),
    l = n(672385),
    o = n(950191),
    d = n(761640),
    _ = n(734057),
    c = n(309010),
    u = n(967198),
    A = n(652215);
let g = {
    binds: ["mod+u"],
    comboKeysBindGlobal: !0,
    action() {
        let e = u.A.getGuildId(),
            t = c.A.getChannelId(e),
            n = _.A.getChannel(t);
        if (null != t && null != n && n.type === i.r.GUILD_VOICE) return r.A.updateChatOpen(t, !s.A.getChatOpen(t), "toggle users keybind"), !1;
        if (null != t && null != n && n.type === i.r.DM) {
            let e = d.Ay.getSection(t, n?.isDM()),
                i = (0, o.AP)(n.getRecipientId()),
                r = e === A.YvQ.PROFILE;
            return (0, l.am)({
                displayProfile: i,
                isProfileOpen: !r
            }), a.A.toggleUserProfileSidebarSection(), !1
        }
        return a.A.toggleMembersSection(), !1
    }
}