/** chunk id: 434728 params = (module,exports,require) **/
n.d(t, {
    O: () => l
});
var i = n(397927),
    r = n(186111),
    s = n(203982),
    a = n(652215);
let l = {
    binds: ["mod+f", "mod+shift+f"],
    comboKeysBindGlobal: !0,
    action(e, t) {
        if (r.A.hasLayers() || (0, i.ueM)()) return;
        let n = !t.includes("shift");
        return s._.dispatch(a.jej.FOCUS_SEARCH, {
            prefillCurrentChannel: n
        }), !1
    }
}