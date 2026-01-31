/** chunk id: 73861, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => p
});
var r = n(627968);
n(64700);
var i = n(311907),
    l = n(189081),
    a = n(67480),
    s = n(674378),
    o = n(598429),
    c = n(979604);

function u(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
            return Object.getOwnPropertyDescriptor(n, e).enumerable
        }))), r.forEach(function(t) {
            var r;
            r = n[t], t in e ? Object.defineProperty(e, t, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = r
        })
    }
    return e
}

function d(e, t) {
    return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            n.push.apply(n, r)
        }
        return n
    })(Object(t)).forEach(function(n) {
        Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
    }), e
}

function p(e) {
    let {
        application: t,
        fullWidth: n = !1,
        size: p = "md",
        playButtonVariant: m,
        disabledVariant: f,
        hideNotLaunchable: g,
        tooltipPosition: _,
        onClick: h,
        className: b,
        source: y,
        hover: A,
        innerClassName: v
    } = e, O = {
        fullWidth: n,
        size: p,
        disabledVariant: f,
        tooltipPosition: _,
        onClick: h,
        className: b,
        hover: A,
        innerClassName: v
    }, x = (0, i.bG)([l.A], () => l.A.getActiveLibraryApplication(t.id)), E = null != x ? x.sku.id : null, j = null != E ? E : t.primarySkuId, C = (0, i.bG)([a.A], () => null != j && !a.A.didFetchingSkuFail(j));
    return null != x && (0, s.XZ)(x) ? (0, r.jsx)(c.A, d(u({}, O), {
        playButtonVariant: m,
        libraryApplication: x,
        source: y
    })) : C ? (0, r.jsx)("div", {
        children: "deprecated!"
    }) : (0, r.jsx)(o.A, d(u({}, O), {
        variant: m,
        hideNotLaunchable: g,
        applicationId: t.id
    }))
}