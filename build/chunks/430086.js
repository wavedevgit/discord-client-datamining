/** Chunk was on 5606 **/
/** chunk id: 430086, original params: e,t,n (module,exports,require) **/
n.d(t, {
    Fv: () => _,
    GY: () => m,
    M$: () => g,
    Oc: () => p,
    kF: () => u
});
var r = n(949645),
    i = n(265422),
    l = n(963169),
    s = n(345942),
    a = n(309010),
    o = n(967198),
    c = n(723702),
    d = n(652215);
let u = {
        binds: ["alt+down"],
        comboKeysBindGlobal: !0,
        action: () => ((0, r.A)(), !1)
    },
    p = {
        binds: ["alt+up"],
        comboKeysBindGlobal: !0,
        action: () => ((0, r.A)(-1), !1)
    },
    _ = {
        binds: ["mod+alt+right"],
        comboKeysBindGlobal: !0,
        action() {
            let e;
            if (null != o.A.getGuildId()) e = d.ME;
            else {
                let t = o.A.getLastSelectedGuildId();
                null != t && (e = t, (0, i.i)(t, a.A.getChannelId(t)))
            }
            return null != e && (0, s.u)(e), !1
        }
    },
    m = {
        binds: (0, c.isMac)() ? ["mod+["] : ["alt+left"],
        comboKeysBindGlobal: !0,
        action: () => ((0, l.OE)("keybind"), !1)
    },
    g = {
        binds: (0, c.isMac)() ? ["mod+]"] : ["alt+right"],
        comboKeysBindGlobal: !0,
        action: () => ((0, l.Qb)("keybind"), !1)
    }