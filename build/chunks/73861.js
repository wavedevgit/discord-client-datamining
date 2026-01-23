/** Chunk was on web.js **/
/** chunk id: 73861, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => _
});
var r = n(627968);
n(64700);
var i = n(311907),
    a = n(189081),
    s = n(67480),
    o = n(674378),
    l = n(598429),
    c = n(979604);

function u(e, t, n) {
    return t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = n, e
}

function d(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
            return Object.getOwnPropertyDescriptor(n, e).enumerable
        }))), r.forEach(function(t) {
            u(e, t, n[t])
        })
    }
    return e
}

function f(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t && (r = r.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
        })), n.push.apply(n, r)
    }
    return n
}

function p(e, t) {
    return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : f(Object(t)).forEach(function(n) {
        Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
    }), e
}

function _(e) {
    let {
        application: t,
        fullWidth: n = !1,
        size: u = "md",
        playButtonVariant: f,
        disabledVariant: _,
        hideNotLaunchable: h,
        tooltipPosition: m,
        onClick: g,
        className: E,
        source: y,
        hover: b,
        innerClassName: O
    } = e, v = {
        fullWidth: n,
        size: u,
        disabledVariant: _,
        tooltipPosition: m,
        onClick: g,
        className: E,
        hover: b,
        innerClassName: O
    }, A = (0, i.bG)([a.A], () => a.A.getActiveLibraryApplication(t.id)), I = null != A ? A.sku.id : null, S = null != I ? I : t.primarySkuId, T = (0, i.bG)([s.A], () => null != S && !s.A.didFetchingSkuFail(S));
    return null != A && (0, o.XZ)(A) ? (0, r.jsx)(c.A, p(d({}, v), {
        playButtonVariant: f,
        libraryApplication: A,
        source: y
    })) : T ? (0, r.jsx)("div", {
        children: "deprecated!"
    }) : (0, r.jsx)(l.A, p(d({}, v), {
        variant: f,
        hideNotLaunchable: h,
        applicationId: t.id
    }))
}