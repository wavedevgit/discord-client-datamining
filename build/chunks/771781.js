/** chunk id: 771781, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    Ay: () => F,
    Tc: () => G,
    dD: () => M,
    mB: () => j,
    oF: () => k,
    oo: () => L,
    pd: () => x
}), n(896048), n(667532);
var r, i = n(265690),
    a = n(121894),
    o = n(311907),
    s = n(73153),
    l = n(715314),
    c = n(45143),
    u = n(870570),
    d = n(787925);

function f(e, t, n) {
    return t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = n, e
}

function p(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
            return Object.getOwnPropertyDescriptor(n, e).enumerable
        }))), r.forEach(function(t) {
            f(e, t, n[t])
        })
    }
    return e
}

function _(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t && (r = r.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
        })), n.push.apply(n, r)
    }
    return n
}

function h(e, t) {
    return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : _(Object(t)).forEach(function(n) {
        Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
    }), e
}
let m = new(n(863620)).u,
    g = 3e5,
    E = 36e5,
    y = () => ({
        candidates: new Map,
        shownFatigableCandidate: null,
        prevFatigableCandidate: null,
        recentlyShown: [],
        currentlyShown: new Set,
        currentlyShownGroup: new Set,
        lastWinnerTime: 0,
        postConnectionOpen: !1
    }),
    b = (0, i.h)(y),
    O = !1,
    v = e => h(p({}, e), {
        candidates: new Map(e.candidates),
        currentlyShown: new Set(e.currentlyShown),
        currentlyShownGroup: new Set(e.currentlyShownGroup)
    }),
    A = (e, t) => {
        var n;
        return null == t || (null != t.content && e.currentlyShown.delete(t.content), null != t.groupName && e.currentlyShownGroup.delete(t.groupName), (null == (n = e.shownFatigableCandidate) ? void 0 : n.content) === t.content && (e.shownFatigableCandidate = null)), e
    },
    I = (e, t) => {
        var n, r;
        if (null == t) return e;
        e.currentlyShown.add(t.content);
        let i = e.recentlyShown.filter(e => e !== t.content);
        return i.unshift(t.content), i.splice(5), e.recentlyShown = i, null != t.groupName && e.currentlyShownGroup.add(t.groupName), d.C.has(t.content) || (e.shownFatigableCandidate = t, (null == (r = e.prevFatigableCandidate) ? void 0 : r.content) !== t.content && (e.prevFatigableCandidate = t, e.lastWinnerTime = new Date().getTime())), null == (n = t.onAdded) || n.call(t), e
    },
    S = (e, t) => (e.candidates.set(t.content, t), e),
    T = (e, t) => (e.candidates.delete(t.content), e),
    C = (e, t) => I(A(e, e.shownFatigableCandidate), t),
    N = e => null != e.prevFatigableCandidate ? e.candidates.get(e.prevFatigableCandidate.content) : void 0,
    w = e => {
        let t = [...e.candidates.keys()];
        return null !== e.prevFatigableCandidate && e.candidates.has(e.prevFatigableCandidate.content) && e.candidates.size > 1 && (t = t.filter(t => {
            var n;
            return t !== (null == (n = e.prevFatigableCandidate) ? void 0 : n.content)
        })), e.candidates.get(t[Math.floor(Math.random() * t.length)])
    },
    R = e => null != e.prevFatigableCandidate && e.candidates.has(e.prevFatigableCandidate.content) && null == e.shownFatigableCandidate,
    P = e => {
        if (0 === e.candidates.size) return e;
        let t = new Date().getTime() - e.lastWinnerTime > g;
        return R(e) && !t ? (m.unschedule(), C(e, N(e))) : (null != e.shownFatigableCandidate && !t || m.scheduled() || D(e) || m.schedule(() => {
            (0, a.r)(() => {
                b.setState(e => {
                    let t = v(e);
                    return C(t, w(t))
                })
            })
        }, 250), e)
    },
    D = e => {
        let t = new Date().getTime();
        return null == e.shownFatigableCandidate && t - e.lastWinnerTime < E
    },
    L = e => {
        let t = d.C.has(e.content);
        (0, a.r)(() => {
            b.setState(n => {
                let r = v(n);
                return O ? r : t ? I(r, e) : P(S(r, e))
            })
        })
    },
    x = (e, t) => {
        (0, a.r)(() => {
            b.setState(n => {
                let r = v(n);
                return t ? P(A(T(r, e), e)) : A(T(r, e), e)
            })
        })
    },
    M = e => b.getState().currentlyShown.has(e),
    j = e => b(t => t.currentlyShown.has(e)),
    k = () => {
        let e = [...b.getState().currentlyShown].filter(e => !d.C.has(e)).length;
        return [b.getState().currentlyShown.size, e]
    },
    U = () => {
        (0, a.r)(() => {
            b.setState(() => {
                let e = y();
                return e.postConnectionOpen = !0, e
            })
        }), m.unschedule()
    },
    G = () => b.getState().postConnectionOpen;
class V extends(r = o.Ay.Store) {
    initialize() {
        this.waitFor(l.A, u.A), this.syncWith([l.A, u.A], () => this.setHasRequiredAction())
    }
    setHasRequiredAction() {
        O = (0, c.A)(l.A, u.A)
    }
}

function F(e, t) {
    return b(e, t)
}
f(V, "displayName", "DismissibleContentShownStateStore"), new V(s.h, {
    CONNECTION_OPEN: () => U(),
    LOGOUT: () => U()
})