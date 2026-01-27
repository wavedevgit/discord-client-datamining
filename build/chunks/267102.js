/** Chunk was on web.js **/
/** chunk id: 267102, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    Ay: () => v,
    Iy: () => g,
    Us: () => b,
    Uw: () => u,
    Wr: () => y,
    aL: () => O,
    mU: () => _,
    rH: () => m,
    wp: () => h,
    zd: () => E
}), n(896048);
var r = n(627968),
    i = n(64700),
    a = n(621466),
    o = n(203982),
    s = n(365971),
    l = n(158368),
    c = n(652215);
let u = new o.H,
    d = i.createContext({
        appContext: c.BRT.APP,
        renderWindow: window,
        windowDispatch: u,
        windowId: (0, s.Xg)()
    }),
    f = new Map;

function p(e, t) {
    let [n, r] = i.useState((0, s.Q2)(t)), a = i.useMemo(() => new o.H, []), l = i.useMemo(() => ({
        appContext: e,
        renderWindow: t,
        windowDispatch: a,
        windowId: n
    }), [e, t, a, n]);
    return i.useEffect(() => {
        if (null != n) return;
        let e = setInterval(() => {
            let n = (0, s.Q2)(t);
            null != n && (r(n), clearInterval(e))
        }, 10);
        return () => clearInterval(e)
    }, [t, n]), i.useEffect(() => {
        f.set(n, l);
        let e = () => {
            f.delete(n)
        };
        return t.addEventListener("unload", e), () => t.removeEventListener("unload", e)
    }, [l, t, n]), l
}

function _(e) {
    var t;
    let n = e.ownerDocument.defaultView;
    if (null == n) return;
    let r = (0, s.Q2)(n);
    return null == (t = f.get(r)) ? void 0 : t.windowDispatch
}

function h(e) {
    var t;
    return (0, a.vq)(null == e ? void 0 : e.target) && null != (t = _(e.target)) ? t : null
}

function m() {
    var e;
    let t = (0, l.Sf)();
    return null == t ? null : null != (e = f.get(t)) ? e : null
}

function g(e) {
    return f.get(e)
}

function E() {
    let e = m();
    return null != e ? e.appContext : null
}

function y(e) {
    let {
        appContext: t,
        renderWindow: n,
        children: i
    } = e, a = p(t, n);
    return (0, r.jsx)(d.Provider, {
        value: a,
        children: i
    })
}

function b() {
    return i.useContext(d).appContext
}

function O() {
    return i.useContext(d).windowDispatch
}
let v = d