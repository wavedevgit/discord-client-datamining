/** chunk id: 806964 params = (module,exports,require) **/
n.d(t, {
    u: () => o
});
var i = n(951001),
    r = n(265422),
    s = n(383501),
    a = n(309010),
    l = n(652215);
let o = {
    binds: ["mod+alt+left"],
    comboKeysBindGlobal: !0,
    action() {
        if (!s.A.isConnected()) return !1;
        let e = s.A.getGuildId() ?? l.ME,
            t = a.A.getChannelId(e);
        return (0, r.i)(e, t), i.A.channelListScrollTo(e, s.A.getChannelId()), !1
    }
}