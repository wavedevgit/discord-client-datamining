/** Chunk was on web.js **/
/** chunk id: 338932, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    T: () => l
}), n(896048);
var r = n(64700),
    i = n(311907),
    a = n(775602),
    o = n(531685);
let s = 1e3,
    l = (e, t) => {
        let n = (0, i.bG)([a.A], () => a.A.useReducedMotion),
            l = (0, i.bG)([o.A], () => o.A.isFocused()),
            [c, u] = r.useState(!1),
            d = r.useRef(null);
        return r.useEffect(() => {
            clearTimeout(d.current), d.current = null;
            let r = !n && !t,
                i = l && (e || r);
            i && n ? d.current = window.setTimeout(() => {
                u(!0)
            }, s) : u(i)
        }, [l, e, n, t]), r.useEffect(() => () => clearTimeout(d.current), []), {
            canAnimate: c
        }
    }