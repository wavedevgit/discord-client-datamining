/** chunk id: 931239, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    v: () => l
});
var r = n(64700),
    i = n(93023);
let a = e => e;

function o(e, t = a) {
    let n = r.useSyncExternalStore(e.subscribe, () => t(e.getState()), () => t(e.getInitialState()));
    return r.useDebugValue(n), n
}
let s = e => {
        let t = (0, i.y)(e),
            n = e => o(t, e);
        return Object.assign(n, t), n
    },
    l = e => e ? s(e) : s