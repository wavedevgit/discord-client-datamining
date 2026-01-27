/** Chunk was on web.js **/
/** chunk id: 471107, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    G: () => c
}), n(896048);
var r = n(64700),
    i = n(311907),
    a = n(451988),
    o = n(775602),
    s = n(927813);

function l(e) {
    return Math.floor(e / s.A.Millis.SECOND) * s.A.Millis.SECOND
}

function c() {
    let {
        hovered: e,
        isAppFocused: t = !0
    } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, [n, c] = r.useState(() => l(Date.now())), u = (0, i.bG)([o.A], () => o.A.useReducedMotion), d = !t || u && !e, f = d ? 15 * s.A.Millis.SECOND : s.A.Millis.SECOND;
    return r.useEffect(() => {
        let e = new a.IX;
        return e.start(f, () => {
            c(l(Date.now()))
        }), () => e.stop()
    }, [f]), {
        now: n,
        slowTickMode: d
    }
}