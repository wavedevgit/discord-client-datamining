/** chunk id: 806964, original params: e,t,n (module,exports,require) **/
n.d(t, {
    u: () => o
});
var i = n(951001),
    r = n(265422),
    a = n(383501),
    l = n(309010),
    s = n(652215);
let o = {
    binds: ["mod+alt+left"],
    comboKeysBindGlobal: !0,
    action() {
        if (!a.A.isConnected()) return !1;
        let e = a.A.getGuildId() ?? s.ME,
            t = l.A.getChannelId(e);
        return (0, r.i)(e, t), i.A.channelListScrollTo(e, a.A.getChannelId()), !1
    }
}