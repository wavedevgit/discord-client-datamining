/** chunk id: 430086 params = (module,exports,require) **/
n.d(t, {
    Fv: () => A,
    GY: () => E,
    M$: () => g,
    Oc: () => u,
    kF: () => c
});
var i = n(949645),
    r = n(265422),
    s = n(963169),
    a = n(345942),
    l = n(309010),
    o = n(967198),
    d = n(723702),
    _ = n(652215);
let c = {
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
            if (null != o.A.getGuildId()) e = _.ME;
            else {
                let t = o.A.getLastSelectedGuildId();
                null != t && (e = t, (0, r.i)(t, l.A.getChannelId(t)))
            }
            return null != e && (0, a.u)(e), !1
        }
    },
    E = {
        binds: (0, d.isMac)() || (0, d.isMacWeb)() ? ["mod+["] : ["alt+left"],
        comboKeysBindGlobal: !0,
        action: () => ((0, s.OE)("keybind"), !1)
    },
    g = {
        binds: (0, d.isMac)() || (0, d.isMacWeb)() ? ["mod+]"] : ["alt+right"],
        comboKeysBindGlobal: !0,
        action: () => ((0, s.Qb)("keybind"), !1)
    }