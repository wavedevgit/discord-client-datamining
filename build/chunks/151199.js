/** Chunk was on 60667 **/
/** chunk id: 151199, original params: e,t,n (module,exports,require) **/
n.d(t, {
    y: () => o
});
var r = n(914430),
    i = n(924985),
    l = n(808728),
    s = n(967198),
    a = n(652215);
let o = {
    binds: ["mod+shift+a"],
    comboKeysBindGlobal: !0,
    action() {
        let e = s.A.getGuildId();
        return null != e && (l.Ay.getChannels(e)[a.rbe.GUILD_CATEGORY].some(e => {
            let {
                channel: t
            } = e;
            return "null" !== t.id && !i.A.isCollapsed(t.id)
        }) ? (0, r.rZ)(e) : (0, r.Al)(e), !1)
    }
}