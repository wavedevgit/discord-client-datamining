/** Chunk was on 5606 **/
/** chunk id: 308494, original params: e,t,n (module,exports,require) **/
n.d(t, {
    s: () => s
});
var r = n(265422),
    i = n(383501),
    l = n(652215);
let s = {
    binds: ["mod+shift+alt+v"],
    comboKeysBindGlobal: !0,
    action(e) {
        e.preventDefault(), e.stopPropagation();
        let t = i.A.getGuildId(),
            n = i.A.getChannelId();
        return null != n && (0, r.i)(null != t ? t : l.ME, n), !1
    }
}