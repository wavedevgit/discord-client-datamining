/** Chunk was on 48654 **/
/** chunk id: 803842, original params: e,t,n (module,exports,require) **/
n.d(t, {
    $0: () => u,
    $4: () => d,
    B0: () => c,
    FK: () => s,
    cu: () => p
});
var r = n(397927),
    i = n(186111),
    l = n(203982),
    o = n(652215);
let a = () => i.A.hasLayers() || (0, r.ueM)(),
    s = 21552 == n.j ? {
        binds: ["right"],
        comboKeysBindGlobal: !0,
        action() {
            if (!a()) return l._.dispatch(o.jej.CAROUSEL_NEXT), !1
        }
    } : null,
    c = 21552 == n.j ? {
        binds: ["left"],
        comboKeysBindGlobal: !0,
        action() {
            if (!a()) return l._.dispatch(o.jej.CAROUSEL_PREV), !1
        }
    } : null,
    u = {
        binds: ["right", "down", "space"],
        comboKeysBindGlobal: !0,
        action: () => (l._.dispatch(o.jej.MODAL_CAROUSEL_NEXT), !1)
    },
    d = {
        binds: ["left", "up"],
        comboKeysBindGlobal: !0,
        action: () => (l._.dispatch(o.jej.MODAL_CAROUSEL_PREV), !1)
    },
    p = {
        binds: ["esc"],
        comboKeysBindGlobal: !0,
        action() {
            if (l._.hasSubscribers(o.jej.MODAL_CLOSE)) return l._.dispatch(o.jej.MODAL_CLOSE), !1
        }
    }