/** Chunk was on 5606 **/
/** chunk id: 416092, original params: e,t,n (module,exports,require) **/
n.d(t, {
    U: () => m
});
var r = n(478437),
    i = n(367513),
    l = n(604681),
    s = n(313961),
    a = n(672385),
    o = n(950191),
    c = n(761640),
    d = n(734057),
    u = n(309010),
    p = n(967198),
    _ = n(652215);
let m = {
    binds: ["mod+u"],
    comboKeysBindGlobal: !0,
    action() {
        let e = p.A.getGuildId(),
            t = u.A.getChannelId(e),
            n = d.A.getChannel(t);
        if (null != t && null != n && n.type === r.r.GUILD_VOICE) return i.A.updateChatOpen(t, !s.A.getChatOpen(t), "toggle users keybind"), !1;
        if (null != t && null != n && n.type === r.r.DM) {
            let e = c.Ay.getSection(t, null == n ? void 0 : n.isDM()),
                r = (0, o.AP)(n.getRecipientId()),
                i = e === _.YvQ.PROFILE;
            return (0, a.am)({
                displayProfile: r,
                isProfileOpen: !i
            }), l.A.toggleUserProfileSidebarSection(), !1
        }
        return l.A.toggleMembersSection(), !1
    }
}