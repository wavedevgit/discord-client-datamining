/** chunk id: 535527 params = (module,exports,require) **/
n.d(t, {
    K: () => o
});
var i = n(966597),
    r = n(203982),
    l = n(652215);
let o = {
    binds: ["mod+l"],
    comboKeysBindGlobal: !0,
    action() {
        let {
            enabled: e,
            inInbox: t
        } = i.A.getConfig({
            location: "keybinds"
        });
        if (e && !t) return r._.dispatch(l.jej.TOGGLE_FOR_LATER), !1
    }
}