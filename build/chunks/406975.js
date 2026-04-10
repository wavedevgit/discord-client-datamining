/** chunk id: 406975 params = (module,exports,require) **/
n.d(t, {
    Ay: () => c,
    O$: () => d,
    Ur: () => s,
    hU: () => a
});
var i = n(955572),
    r = n(775602),
    l = n(652215);

function o(e) {
    return l.hH7.ZOOM_SCALES[Math.max(0, Math.min(l.hH7.ZOOM_SCALES.indexOf(r.A.zoom) + e, l.hH7.ZOOM_SCALES.length - 1))]
}
let s = {
        binds: ["mod+plus"],
        comboKeysBindGlobal: !0,
        action: () => ((0, i.Qp)(o(1)), !1)
    },
    a = {
        binds: ["mod+minus"],
        comboKeysBindGlobal: !0,
        action: () => ((0, i.Qp)(o(-1)), !1)
    },
    d = {
        binds: ["mod+0"],
        comboKeysBindGlobal: !0,
        action: () => ((0, i.Qp)(l.hH7.ZOOM_DEFAULT), !1)
    },
    c = 21552 == n.j ? {
        ZOOM_IN: s,
        ZOOM_OUT: a,
        ZOOM_RESET: d
    } : null