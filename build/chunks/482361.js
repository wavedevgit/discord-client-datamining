/** Chunk was on web.js **/
/** chunk id: 482361, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => N
}), n(896048);
var r, i = n(607399),
    a = n(311907),
    o = n(73153),
    s = n(142120),
    l = n(253595);

function c(e, t, n) {
    return t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = n, e
}

function u(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
            return Object.getOwnPropertyDescriptor(n, e).enumerable
        }))), r.forEach(function(t) {
            c(e, t, n[t])
        })
    }
    return e
}

function d(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t && (r = r.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
        })), n.push.apply(n, r)
    }
    return n
}

function f(e, t) {
    return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : d(Object(t)).forEach(function(n) {
        Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
    }), e
}
n(436317);
let p = {},
    _ = {},
    h = !0,
    m = {},
    g = !1;

function E() {
    return l.A
}

function y() {
    if (m = {}, !h)
        for (let [e, t] of Object.entries(E())) {
            let n = !1 !== p[e];
            if (m[e] = n, n && null != t.prerequisites)
                for (let n of t.prerequisites) !1 !== p[n] && (m[e] = !1)
        }
}

function b(e) {
    p = f(u({}, p), {
        [e.tutorialId]: !1
    }), _ = u({}, _), delete _[e.tutorialId], y()
}

function O(e) {
    _ = f(u({}, _), {
        [e.tutorialId]: e.renderData
    })
}

function v(e) {
    _ = u({}, _), delete _[e.tutorialId]
}

function A() {
    h = !0
}

function I(e) {
    let {
        tutorial: t
    } = e;
    g = !0, h = !0, p = {}, null != t && (h = t.indicators_suppressed, t.indicators_confirmed.forEach(e => p[e] = !1)), y()
}

function S() {
    g = !1
}

function T(e) {
    return i.Fr && ["writing-messages", "organize-by-topic"].includes(e)
}
class C extends(r = a.Ay.Store) {
    initialize() {
        y(), this.mustEmitChanges(e => "CONNECTION_OPEN" !== e.type), this.waitFor(s.A)
    }
    shouldShow(e) {
        return !(!g || h || T(e)) && (m[e] || !1)
    }
    shouldShowAnyIndicators() {
        return !h
    }
    getIndicators() {
        return _
    }
    getData() {
        return E()
    }
    getDefinition(e) {
        let t = this.getData();
        return null != t ? t[e] : null
    }
}
c(C, "displayName", "TutorialIndicatorStore");
let N = new C(o.h, {
    CONNECTION_OPEN: I,
    CONNECTION_CLOSED: S,
    TUTORIAL_INDICATOR_DISMISS: b,
    TUTORIAL_INDICATOR_SHOW: O,
    TUTORIAL_INDICATOR_HIDE: v,
    TUTORIAL_INDICATOR_SUPPRESS_ALL: A
})