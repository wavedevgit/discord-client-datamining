/** chunk id: 830004, original params: e,t,n (module,exports,require) **/
n.d(t, {
    i: () => r
});
var i = n(723702);
let r = {
    binds: ["mod+alt+i"],
    comboKeysBindGlobal: !0,
    action(e) {
        if ((0, i.isWeb)() && "discord.com" === location.host) return e.preventDefault(), e.stopPropagation(), !1
    }
}