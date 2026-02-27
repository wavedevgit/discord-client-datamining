/** chunk id: 774603, original params: e,t,n (module,exports,require) **/
n.d(t, {
    OX: () => l,
    Yo: () => a
});
var i = n(203982),
    r = n(652215);
let a = {
        binds: ["mod+return"],
        comboKeysBindGlobal: !0,
        action() {
            if (i._.hasSubscribers(r.jej.CALL_ACCEPT)) return i._.dispatch(r.jej.CALL_ACCEPT), !1
        }
    },
    l = {
        binds: ["ctrl+'", "ctrl+shift+'"],
        comboKeysBindGlobal: !0,
        action(e) {
            if (i._.hasSubscribers(r.jej.CALL_START)) return i._.dispatch(r.jej.CALL_START, e), !1
        }
    }