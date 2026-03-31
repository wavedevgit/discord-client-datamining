/** chunk id: 308494 params = (module,exports,require) **/
n.d(t, {
    s: () => a
});
var i = n(265422),
    r = n(383501),
    s = n(652215);
let a = {
    binds: ["mod+shift+alt+v"],
    comboKeysBindGlobal: !0,
    action(e) {
        e.preventDefault(), e.stopPropagation();
        let t = r.A.getGuildId(),
            n = r.A.getChannelId();
        return null != n && (0, i.i)(t ?? s.ME, n), !1
    }
}