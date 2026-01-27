/** Chunk was on web.js **/
/** chunk id: 990078, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    m: () => g
}), n(896048), n(65821);
var r = n(627968),
    i = n(64700),
    a = n(140735),
    o = n(158954),
    s = n(397927),
    l = n(717995),
    c = n(348275),
    u = n(505679),
    d = n(747781),
    f = n(894524);

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
    if (null == e) return {};
    var n, r, i, a = {};
    if ("u" > typeof Reflect && Reflect.ownKeys) {
        for (i = 0, n = Reflect.ownKeys(e); i < n.length; i++) r = n[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
        return a
    }
    if (a = m(e, t), Object.getOwnPropertySymbols)
        for (i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++) r = n[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
    return a
}

function m(e, t) {
    if (null == e) return {};
    var n, r, i = {},
        a = Object.getOwnPropertyNames(e);
    for (r = 0; r < a.length; r++) n = a[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    return i
}

function g(e) {
    let {
        children: t,
        text: n,
        keyboardShortcut: p,
        __unsupportedReactNodeAsText: m,
        asContainer: g = !1,
        tag: E = "span",
        position: y = "top",
        align: b = "center",
        spacing: O,
        layerContext: v,
        targetElementRef: A,
        anchorRef: I,
        caretConfig: S,
        positionKey: T,
        ariaHidden: C = !1
    } = e, N = h(e, ["children", "text", "keyboardShortcut", "__unsupportedReactNodeAsText", "asContainer", "tag", "position", "align", "spacing", "layerContext", "targetElementRef", "anchorRef", "caretConfig", "positionKey", "ariaHidden"]), [w, R] = i.useState(null);
    i.useLayoutEffect(() => {
        null != I && R(I.current)
    }, [I]);
    let P = i.useCallback(e => {
            null == I && R(e), (0, c.cZ)(A, e)
        }, [A, I]),
        {
            tooltipId: D,
            isVisible: L,
            targetElementRef: x,
            trigger: M
        } = (0, d.D)(_({
            children: t,
            targetElementRef: P,
            asContainer: g,
            containerTag: E,
            ariaHidden: C
        }, N)),
        [j, k] = i.useState(!1),
        {
            defaultLayerContext: U
        } = (0, o.G98)(),
        G = i.useMemo(() => null != m ? m : null == n || "" === n ? null : null != p && "" !== p ? (0, r.jsxs)("div", {
            className: f.Cl,
            children: [(0, r.jsx)(s.Text, {
                variant: "text-sm/medium",
                children: n
            }), (0, r.jsx)(s.e7I, {
                shortcut: p
            })]
        }) : n, [n, p, m]),
        F = null != G && ("string" != typeof G || "" !== G),
        V = L || j;
    i.useEffect(() => {
        L && F ? k(!0) : F || k(!1)
    }, [L, F]);
    let B = i.useCallback(() => {
            k(!1)
        }, []),
        H = (0, u.j)({
            shouldShow: L,
            onExitComplete: B
        });
    if (!F && (L || !j)) return t;
    if (null == t || !g && !i.isValidElement(t)) return null;
    let Y = null != T ? T : (0, c.Xj)(n),
        W = H((e, t) => t ? (0, r.jsx)(l.R, {
            isVisible: L,
            isRendered: V,
            targetElementRef: x,
            targetElement: w,
            anchorRef: I,
            id: D,
            content: G,
            position: y,
            align: b,
            spacing: O,
            caretConfig: S,
            layerContext: null != v ? v : U,
            animationStyle: e,
            positionKey: Y
        }) : null);
    return (0, r.jsxs)(r.Fragment, {
        children: [M, C || null == G || "" === G ? null : (0, r.jsx)(a.A, {
            id: D,
            children: G
        }), W]
    })
}