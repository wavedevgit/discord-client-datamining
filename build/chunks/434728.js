/** chunk id: 434728 params = (module,exports,require) **/
n.d(t, {
    O: () => o
});
var i = n(397927),
    r = n(186111),
    l = n(203982),
    s = n(652215);
let o = {
    binds: ["mod+f", "mod+shift+f"],
    comboKeysBindGlobal: !0,
    action(e, t) {
        if (r.A.hasLayers() || (0, i.ueM)()) return;
        let n = !t.includes("shift");
        return l._.dispatch(s.jej.FOCUS_SEARCH, {
            prefillCurrentChannel: n
        }), !1
    }
}