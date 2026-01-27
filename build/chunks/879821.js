/** Chunk was on web.js **/
/** chunk id: 879821, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    BN: () => _,
    ER: () => h,
    Ej: () => g,
    RK: () => E,
    UU: () => m,
    cY: () => p,
    jD: () => y,
    we: () => f
});
var r = n(193439),
    i = n(64700),
    a = n(340287),
    o = function() {},
    s = "u" > typeof document ? i.useLayoutEffect : o;

function l(e, t) {
    let n, r, i;
    if (e === t) return !0;
    if (typeof e != typeof t) return !1;
    if ("function" == typeof e && e.toString() === t.toString()) return !0;
    if (e && t && "object" == typeof e) {
        if (Array.isArray(e)) {
            if ((n = e.length) !== t.length) return !1;
            for (r = n; 0 != r--;)
                if (!l(e[r], t[r])) return !1;
            return !0
        }
        if ((n = (i = Object.keys(e)).length) !== Object.keys(t).length) return !1;
        for (r = n; 0 != r--;)
            if (!({}).hasOwnProperty.call(t, i[r])) return !1;
        for (r = n; 0 != r--;) {
            let n = i[r];
            if (("_owner" !== n || !e.$$typeof) && !l(e[n], t[n])) return !1
        }
        return !0
    }
    return e != e && t != t
}

function c(e) {
    return "u" < typeof window ? 1 : (e.ownerDocument.defaultView || window).devicePixelRatio || 1
}

function u(e, t) {
    let n = c(e);
    return Math.round(t * n) / n
}

function d(e) {
    let t = i.useRef(e);
    return s(() => {
        t.current = e
    }), t
}

function f(e) {
    void 0 === e && (e = {});
    let {
        placement: t = "bottom",
        strategy: n = "absolute",
        middleware: o = [],
        platform: f,
        elements: {
            reference: p,
            floating: _
        } = {},
        transform: h = !0,
        whileElementsMounted: m,
        open: g
    } = e, [E, y] = i.useState({
        x: 0,
        y: 0,
        strategy: n,
        placement: t,
        middlewareData: {},
        isPositioned: !1
    }), [b, O] = i.useState(o);
    l(b, o) || O(o);
    let [v, A] = i.useState(null), [I, S] = i.useState(null), T = i.useCallback(e => {
        e !== R.current && (R.current = e, A(e))
    }, []), C = i.useCallback(e => {
        e !== P.current && (P.current = e, S(e))
    }, []), N = p || v, w = _ || I, R = i.useRef(null), P = i.useRef(null), D = i.useRef(E), L = null != m, x = d(m), M = d(f), j = d(g), k = i.useCallback(() => {
        if (!R.current || !P.current) return;
        let e = {
            placement: t,
            strategy: n,
            middleware: b
        };
        M.current && (e.platform = M.current), (0, r.rD)(R.current, P.current, e).then(e => {
            let t = {
                ...e,
                isPositioned: !1 !== j.current
            };
            U.current && !l(D.current, t) && (D.current = t, a.flushSync(() => {
                y(t)
            }))
        })
    }, [b, t, n, M, j]);
    s(() => {
        !1 === g && D.current.isPositioned && (D.current.isPositioned = !1, y(e => ({
            ...e,
            isPositioned: !1
        })))
    }, [g]);
    let U = i.useRef(!1);
    s(() => (U.current = !0, () => {
        U.current = !1
    }), []), s(() => {
        if (N && (R.current = N), w && (P.current = w), N && w) {
            if (x.current) return x.current(N, w, k);
            k()
        }
    }, [N, w, k, x, L]);
    let G = i.useMemo(() => ({
            reference: R,
            floating: P,
            setReference: T,
            setFloating: C
        }), [T, C]),
        F = i.useMemo(() => ({
            reference: N,
            floating: w
        }), [N, w]),
        V = i.useMemo(() => {
            let e = {
                position: n,
                left: 0,
                top: 0
            };
            if (!F.floating) return e;
            let t = u(F.floating, E.x),
                r = u(F.floating, E.y);
            return h ? {
                ...e,
                transform: "translate(" + t + "px, " + r + "px)",
                ...c(F.floating) >= 1.5 && {
                    willChange: "transform"
                }
            } : {
                position: n,
                left: t,
                top: r
            }
        }, [n, h, F.floating, E.x, E.y]);
    return i.useMemo(() => ({
        ...E,
        update: k,
        refs: G,
        elements: F,
        floatingStyles: V
    }), [E, k, G, F, V])
}
let p = (e, t) => ({
        ...(0, r.cY)(e),
        options: [e, t]
    }),
    _ = (e, t) => ({
        ...(0, r.BN)(e),
        options: [e, t]
    }),
    h = (e, t) => ({
        ...(0, r.ER)(e),
        options: [e, t]
    }),
    m = (e, t) => ({
        ...(0, r.UU)(e),
        options: [e, t]
    }),
    g = (e, t) => ({
        ...(0, r.Ej)(e),
        options: [e, t]
    }),
    E = (e, t) => ({
        ...(0, r.RK)(e),
        options: [e, t]
    }),
    y = (e, t) => ({
        ...(0, r.jD)(e),
        options: [e, t]
    })