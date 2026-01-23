/** Chunk was on 47841 **/
/** chunk id: 665346, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => a
}), n(896048);
var r = n(64700),
    i = n(311907),
    l = n(775602),
    s = n(555337);

function a(e, t) {
    let [n, a] = r.useState(!1), o = (0, i.bG)([s.A], () => s.A.getProps().subsection), c = (0, i.bG)([l.A], () => l.A.useReducedMotion);
    r.useEffect(() => {
        n || null !== e.current && o === t && (a(!0), e.current.scrollIntoView({
            behavior: c ? "auto" : "smooth"
        }))
    }, [n, o, t, c, e])
}