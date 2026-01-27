/** Chunk was on web.js **/
/** chunk id: 505679, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    j: () => s
});
var r = n(64700),
    i = n(158954),
    a = n(953992),
    o = n(397927);

function s(e) {
    let {
        shouldShow: t,
        onExitComplete: n,
        onAnimationRest: s
    } = e, {
        reducedMotion: l
    } = r.useContext(i.CZY), c = {
        scale: .95,
        opacity: 0
    }, u = {
        scale: 1,
        opacity: 0
    }, d = {
        scale: 1,
        opacity: 1
    };
    return (0, o.pnh)(t, {
        keys: e => e ? "tooltip" : "empty",
        config: a.p,
        from: l.enabled ? u : c,
        enter: d,
        leave: l.enabled ? u : c,
        onRest: (e, r) => {
            t || null == n || n(), null == s || s(e, r)
        }
    }, "animate-always")
}