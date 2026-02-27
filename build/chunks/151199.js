/** chunk id: 151199, original params: e,t,n (module,exports,require) **/
n.d(t, {
    y: () => o
});
var i = n(914430),
    r = n(924985),
    a = n(808728),
    l = n(967198),
    s = n(652215);
let o = {
    binds: ["mod+shift+a"],
    comboKeysBindGlobal: !0,
    action() {
        let e = l.A.getGuildId();
        return null != e && (a.Ay.getChannels(e)[s.rbe.GUILD_CATEGORY].some(e => {
            let {
                channel: t
            } = e;
            return "null" !== t.id && !r.A.isCollapsed(t.id)
        }) ? (0, i.rZ)(e) : (0, i.Al)(e), !1)
    }
}