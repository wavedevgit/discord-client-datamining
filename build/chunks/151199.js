/** chunk id: 151199 params = (module,exports,require) **/
n.d(t, {
    y: () => a
});
var i = n(914430),
    r = n(924985),
    l = n(808728),
    o = n(967198),
    s = n(652215);
let a = {
    binds: ["mod+shift+a"],
    comboKeysBindGlobal: !0,
    action() {
        let e = o.A.getGuildId();
        return null != e && (l.Ay.getChannels(e)[s.rbe.GUILD_CATEGORY].some(e => {
            let {
                channel: t
            } = e;
            return "null" !== t.id && !r.A.isCollapsed(t.id)
        }) ? (0, i.rZ)(e) : (0, i.Al)(e), !1)
    }
}