/** Chunk was on 2827 **/
/** chunk id: 806964, original params: e,t,n (module,exports,require) **/
n.d(t, {
    u: () => o
});
var r = n(951001),
    i = n(265422),
    l = n(383501),
    s = n(309010),
    a = n(652215);
let o = {
    binds: ["mod+alt+left"],
    comboKeysBindGlobal: !0,
    action() {
        var e;
        if (!l.A.isConnected()) return !1;
        let t = null != (e = l.A.getGuildId()) ? e : a.ME,
            n = s.A.getChannelId(t);
        return (0, i.i)(t, n), r.A.channelListScrollTo(t, l.A.getChannelId()), !1
    }
}