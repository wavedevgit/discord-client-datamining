/** chunk id: 206845, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => A
}), n(896048);
var r = n(627968),
    i = n(64700),
    a = n(735438),
    o = n(451988),
    s = n(397927),
    l = n(954571),
    c = n(957565),
    u = n(927813),
    d = n(652215),
    f = n(985018);

function p(e, t, n) {
    return t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = n, e
}

function _(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
            return Object.getOwnPropertyDescriptor(n, e).enumerable
        }))), r.forEach(function(t) {
            p(e, t, n[t])
        })
    }
    return e
}

function h(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t && (r = r.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
        })), n.push.apply(n, r)
    }
    return n
}

function m(e, t) {
    return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : h(Object(t)).forEach(function(n) {
        Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
    }), e
}

function g(e, t) {
    if (null == e) return {};
    var n, r, i, a = {};
    if ("u" > typeof Reflect && Reflect.ownKeys) {
        for (i = 0, n = Reflect.ownKeys(e); i < n.length; i++) r = n[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
        return a
    }
    if (a = E(e, t), Object.getOwnPropertySymbols)
        for (i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++) r = n[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
    return a
}

function E(e, t) {
    if (null == e) return {};
    var n, r, i = {},
        a = Object.getOwnPropertyNames(e);
    for (r = 0; r < a.length; r++) n = a[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    return i
}
let y = u.A.Millis.SECOND,
    b = 2 * y,
    O = u.A.Millis.HALF_SECOND,
    v = [() => f.intl.string(f.t.MSaeTe), () => f.intl.string(f.t.UmrCw7), () => f.intl.string(f.t.gKE0Jq), () => f.intl.string(f.t["4DSKbi"]), () => f.intl.string(f.t["+8ENdT"]), () => f.intl.string(f.t.GlWHv8), () => f.intl.string(f.t.hIzxU9), () => f.intl.string(f.t["26uMPL"]), () => f.intl.string(f.t.uFs7R2), () => f.intl.string(f.t.bLXdcY), () => f.intl.string(f.t.gPg9fS)];

function A(e) {
    let {
        text: t,
        copyValue: n,
        children: u,
        onCopy: f,
        "aria-label": p,
        delay: h = O,
        dataMeticulousIgnore: E
    } = e, [A, I] = i.useState(0), [S, T] = i.useState(!1), [C, N] = i.useState(!1), [w] = i.useState(() => new o.Ep), [R] = i.useState(() => new o.Ep);
    if (i.useEffect(() => () => {
            w.stop(), R.stop()
        }, [w, R]), !c.p5) return (0, r.jsx)(r.Fragment, {
        children: u({})
    });
    let P = A >= v.length - 1,
        D = P ? s.oMw.RED : s.oMw.GREEN,
        L = S ? D : s.oMw.PRIMARY,
        x = () => {
            var e;
            if (!S) return t;
            let n = (0, a.clamp)(A - 1, 0, v.length - 1),
                i = null != (e = v[n]) ? e : v[0];
            return (0, r.jsx)(s.bfh, {
                isShaking: P,
                children: i()
            })
        },
        M = (e, t) => {
            !C && S && t.phase === d.lLE.LEAVE && T(!1)
        },
        j = () => {
            null == f || f(), (0, c.C)(n), l.default.track(d.HAw.TEXT_COPIED), C || I(A + 1), N(!0), T(!0), w.start(y, () => N(!1)), R.start(b, () => I(0))
        };
    return (0, r.jsx)(s.STz, {
        text: x(),
        delay: h,
        "aria-label": p,
        dataMeticulousIgnore: E,
        color: L,
        forceOpen: C,
        onAnimationRest: M,
        children: e => {
            let {
                onClick: t,
                onMouseEnter: n
            } = e;
            return u(m(_({}, g(e, ["onClick", "onMouseEnter"])), {
                onClick: () => {
                    null == t || t(), j()
                },
                onMouseEnter: () => {
                    if (!S) {
                        null == n || n();
                        return
                    }
                    w.stop(), N(!1)
                }
            }))
        }
    })
}