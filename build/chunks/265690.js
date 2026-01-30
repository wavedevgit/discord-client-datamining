/** chunk id: 265690, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    h: () => u,
    n: () => l
});
var r = n(64700),
    i = n(179637),
    a = n(870844);
let {
    useSyncExternalStoreWithSelector: o
} = i, s = e => e;

function l(e, t = s, n) {
    let i = o(e.subscribe, e.getState, e.getInitialState, t, n);
    return r.useDebugValue(i), i
}
let c = (e, t) => {
        let n = (0, a.y)(e),
            r = (e, r = t) => l(n, e, r);
        return Object.assign(r, n), r
    },
    u = (e, t) => e ? c(e, t) : c