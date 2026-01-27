/** Chunk was on 60667 **/
/** chunk id: 535527, original params: e,t,n (module,exports,require) **/
n.d(t, {
    K: () => s
});
var r = n(966597),
    i = n(203982),
    l = n(652215);
let s = {
    binds: ["mod+l"],
    comboKeysBindGlobal: !0,
    action() {
        let {
            enabled: e,
            inInbox: t
        } = r.A.getCurrentConfig({
            location: "keybinds"
        }, {
            autoTrackExposure: !1
        });
        if (e && !t) return i._.dispatch(l.jej.TOGGLE_FOR_LATER), !1
    }
}