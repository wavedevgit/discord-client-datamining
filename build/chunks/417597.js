/** chunk id: 417597, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    My: () => s,
    bG: () => l,
    cf: () => c,
    yK: () => u
}), n(65821), n(896048);
var r = n(64700),
    i = n(52133),
    a = n(968441);

function o(e, t) {
    return e === t
}

function s(e, t) {
    return !1
}

function l(e, t, n) {
    let s = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : o,
        l = (0, r.useRef)(null);
    null == l.current && (l.current = {
        stores: e,
        areStatesEqual: s,
        getStateFromStores: t,
        prevDeps: void 0,
        state: void 0
    });
    let c = l.current,
        u = c.state;
    if (null == n || !(0, i.v)(n, c.prevDeps)) {
        let e;
        e = t(), null != u && s(u, e) || (u = e)
    }(0, r.useInsertionEffect)(() => {
        c.getStateFromStores = t, c.prevDeps = n, c.state = u
    });
    let [, d] = (0, r.useState)(null);
    return (0, r.useInsertionEffect)(() => {
        let t = () => {
                let e;
                e = c.getStateFromStores(), s(c.state, e) || (c.state = e, d({}))
            },
            n = new a.r(e, t);
        return n.attach("useStateFromStores"), () => n.detach()
    }, []), u
}

function c(e, t, n) {
    return l(e, t, n, i.A)
}

function u(e, t, n) {
    return l(e, t, n, i.v)
}
n(461275)