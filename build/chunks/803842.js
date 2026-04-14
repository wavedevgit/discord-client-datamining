/** chunk id: 803842 params = (module,exports,require) **/
n.d(t, {
    $0: () => d,
    $4: () => u,
    B0: () => c,
    FK: () => s,
    cu: () => _
});
var a = n(397927),
    i = n(186111),
    r = n(203982),
    o = n(652215);
let l = () => i.A.hasLayers() || (0, a.ueM)(),
    s = 21552 == n.j ? {
        binds: ["right"],
        comboKeysBindGlobal: !0,
        action() {
            if (!l()) return r._.dispatch(o.jej.CAROUSEL_NEXT), !1
        }
    } : null,
    c = 21552 == n.j ? {
        binds: ["left"],
        comboKeysBindGlobal: !0,
        action() {
            if (!l()) return r._.dispatch(o.jej.CAROUSEL_PREV), !1
        }
    } : null,
    d = {
        binds: ["right", "down", "space"],
        comboKeysBindGlobal: !0,
        action: () => (r._.dispatch(o.jej.MODAL_CAROUSEL_NEXT), !1)
    },
    u = {
        binds: ["left", "up"],
        comboKeysBindGlobal: !0,
        action: () => (r._.dispatch(o.jej.MODAL_CAROUSEL_PREV), !1)
    },
    _ = {
        binds: ["esc"],
        comboKeysBindGlobal: !0,
        action() {
            if (r._.hasSubscribers(o.jej.MODAL_CLOSE)) return r._.dispatch(o.jej.MODAL_CLOSE), !1
        }
    }