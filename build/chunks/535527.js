/** chunk id: 535527 params = (module,exports,require) **/
n.d(t, {
    K: () => a
});
var i = n(966597),
    r = n(203982),
    s = n(652215);
let a = {
    binds: ["mod+l"],
    comboKeysBindGlobal: !0,
    action() {
        let {
            enabled: e,
            inInbox: t
        } = i.A.getConfig({
            location: "keybinds"
        });
        if (e && !t) return r._.dispatch(s.jej.TOGGLE_FOR_LATER), !1
    }
}