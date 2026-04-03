/** chunk id: 434728 params = (module,exports,require) **/
n.d(t, {
    O: () => s
});
var i = n(397927),
    r = n(186111),
    a = n(203982),
    l = n(652215);
let s = {
    binds: ["mod+f", "mod+shift+f"],
    comboKeysBindGlobal: !0,
    action(e, t) {
        if (r.A.hasLayers() || (0, i.ueM)()) return;
        let n = !t.includes("shift");
        return a._.dispatch(l.jej.FOCUS_SEARCH, {
            prefillCurrentChannel: n
        }), !1
    }
}