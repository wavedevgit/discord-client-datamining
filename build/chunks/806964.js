/** chunk id: 806964 params = (module,exports,require) **/
n.d(t, {
    u: () => a
});
var i = n(951001),
    r = n(265422),
    l = n(383501),
    s = n(309010),
    o = n(652215);
let a = {
    binds: ["mod+alt+left"],
    comboKeysBindGlobal: !0,
    action() {
        if (!l.A.isConnected()) return !1;
        let e = l.A.getGuildId() ?? o.ME,
            t = s.A.getChannelId(e);
        return (0, r.i)(e, t), i.A.channelListScrollTo(e, l.A.getChannelId()), !1
    }
}