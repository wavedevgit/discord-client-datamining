/** Chunk was on web.js **/
/** chunk id: 659974, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    O: () => g,
    v: () => E
});
var r = n(64700),
    i = n(311907),
    a = n(775602),
    s = n(531685);
let o = 0,
    l = 2,
    c = 3,
    u = .03,
    d = -45,
    f = 3,
    p = 1,
    _ = .5,
    h = "inset 0 0 0 2px var(--yellow-360), inset 0 0 0 3px var(--background-base-lower)";

function m(e, t) {
    return _ + (t - _) / (1 + Math.exp(-u * (e - d)))
}
var g = function(e) {
    return e.BOTH = "BOTH", e.INSET_ONLY = "INSET_ONLY", e.OUTSET_ONLY = "OUTSET_ONLY", e
}({});

function E(e) {
    let {
        isSpeaking: t,
        isLatched: u,
        voiceDb: d,
        spreadDirection: _ = "BOTH",
        maxOuterSpreadRadius: g = f,
        maxInnerSpreadRadius: E = p,
        hideIfVolumeMissing: y = !1
    } = e, b = n(242286).default, {
        shouldReduceMotion: O,
        useForcedColors: v,
        isAppFocusedOrOverlayVisible: A
    } = (0, i.cf)([a.A, s.A, b], () => ({
        shouldReduceMotion: a.A.useReducedMotion,
        useForcedColors: a.A.useForcedColors,
        isAppFocusedOrOverlayVisible: s.A.isAppFocused() || null != b.getFocusedPID()
    }));
    return r.useMemo(() => {
        let e = {};
        if (d === -1 / 0 && y) return e;
        if (t) {
            let t = o,
                n = l,
                r = c;
            d !== -1 / 0 && !O && A && (t = "INSET_ONLY" === _ ? 0 : m(d, g), n = "OUTSET_ONLY" === _ ? 0 : m(d, E), r = "OUTSET_ONLY" === _ ? 0 : n + 1);
            let i = v ? "Highlight" : "var(--status-speaking)";
            e.boxShadow = ["0 0 0 ".concat(t, "px ").concat(i), "inset 0 0 0 ".concat(n, "px ").concat(i), "inset 0 0 0 ".concat(r, "px var(--background-base-lower)")].join(", ")
        } else u && (e.boxShadow = h);
        return A && (e.transition = "box-shadow 50ms ease-out"), e
    }, [t, u, A, O, v, d, _, g, E, y])
}