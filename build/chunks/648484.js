/** Chunk was on web.js **/
/** chunk id: 648484, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => d
});
var r, i = n(311907),
    a = n(73153),
    o = n(652215);

function s(e, t, n) {
    return t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = n, e
}
let l = 0;

function c(e) {
    let {
        port: t
    } = e;
    l = o.xEi - t
}
class u extends(r = i.Ay.Store) {
    getId() {
        return l
    }
}
s(u, "displayName", "InstanceIdStore");
let d = new u(a.h, {
    RPC_SERVER_READY: c
})