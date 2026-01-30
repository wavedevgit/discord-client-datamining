/** chunk id: 200041, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => _
}), n(896048);
var r = n(627968),
    i = n(64700),
    a = n(503698),
    o = n.n(a),
    s = n(459192),
    l = n(397927);
n(851883);
var c = n(123511);

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
    var t;
    let {
        text: n,
        tooltipText: a,
        textVariant: u = "text-xs/medium",
        textClassName: f,
        "aria-label": _,
        icon: h,
        canTruncate: m = !0,
        hideTooltip: g = !1,
        hideText: E = !1
    } = e, y = i.useRef(null), [b, O] = i.useState(!1), v = {
        variant: u,
        color: "none",
        className: o()(m && c.ps, f)
    }, A = null != n && null == a && m, I = !g && (null != a || A || E), S = null != (t = null != a ? a : n) ? t : "", T = (null == u ? void 0 : u.startsWith("text-sm")) ? c.WV : c.Dk, C = i.useCallback(() => {
        if (A) {
            let {
                current: e
            } = y;
            O(null != e && e.offsetWidth < e.scrollWidth || null != a || E)
        } else O(!0)
    }, [A, a, E]), N = i.useCallback(() => {
        O(!1)
    }, []);
    return null == h && E ? null : I ? (0, r.jsx)(s.u, {
        body: S,
        asset: h,
        assetSize: 16,
        delay: 150,
        shouldShow: b,
        asContainer: !0,
        children: (0, r.jsxs)("div", {
            className: o()(c.kL, c.O1, T),
            "aria-label": _,
            onMouseEnter: C,
            onMouseLeave: N,
            children: [h, !E && (0, r.jsx)(l.Text, p(d({
                ref: y
            }, v), {
                children: n
            }))]
        })
    }) : (0, r.jsxs)("div", {
        className: o()(c.kL, c.O1, T),
        children: [h, !E && (0, r.jsx)(l.Text, p(d({}, v), {
            children: n
        }))]
    })
}