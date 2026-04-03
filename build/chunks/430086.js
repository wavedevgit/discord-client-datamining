/** chunk id: 430086 params = (module,exports,require) **/
n.d(t, {
    Fv: () => A,
    GY: () => E,
    M$: () => I,
    Oc: () => u,
    kF: () => _
});
var i = n(949645),
    r = n(265422),
    a = n(963169),
    l = n(345942),
    s = n(309010),
    o = n(967198),
    d = n(723702),
    c = n(652215);
let _ = {
        binds: ["alt+down"],
        comboKeysBindGlobal: !0,
        action: () => ((0, i.A)(), !1)
    },
    u = {
        binds: ["alt+up"],
        comboKeysBindGlobal: !0,
        action: () => ((0, i.A)(-1), !1)
    },
    A = {
        binds: ["mod+alt+right"],
        comboKeysBindGlobal: !0,
        action() {
            let e;
            if (null != o.A.getGuildId()) e = c.ME;
            else {
                let t = o.A.getLastSelectedGuildId();
                null != t && (e = t, (0, r.i)(t, s.A.getChannelId(t)))
            }
            return null != e && (0, l.u)(e), !1
        }
    },
    E = {
        binds: (0, d.isMac)() || (0, d.isMacWeb)() ? ["mod+["] : ["alt+left"],
        comboKeysBindGlobal: !0,
        action: () => ((0, a.OE)("keybind"), !1)
    },
    I = {
        binds: (0, d.isMac)() || (0, d.isMacWeb)() ? ["mod+]"] : ["alt+right"],
        comboKeysBindGlobal: !0,
        action: () => ((0, a.Qb)("keybind"), !1)
    }