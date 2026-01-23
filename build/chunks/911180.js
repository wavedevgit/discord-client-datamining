/** Chunk was on web.js **/
/** chunk id: 911180, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => v
}), n(896048);
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(835245),
    l = n(317097),
    c = n(827734),
    u = n(397927),
    d = n(919796),
    f = n(385612),
    p = n(652215),
    _ = n(985018),
    h = n(567458);

function m(e, t, n) {
    return t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = n, e
}

function g(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
            return Object.getOwnPropertyDescriptor(n, e).enumerable
        }))), r.forEach(function(t) {
            m(e, t, n[t])
        })
    }
    return e
}

function E(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t && (r = r.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
        })), n.push.apply(n, r)
    }
    return n
}

function y(e, t) {
    return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : E(Object(t)).forEach(function(n) {
        Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
    }), e
}

function b(e, t) {
    if (null == e) return {};
    var n, r, i, a = {};
    if ("u" > typeof Reflect && Reflect.ownKeys) {
        for (i = 0, n = Reflect.ownKeys(e); i < n.length; i++) r = n[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
        return a
    }
    if (a = O(e, t), Object.getOwnPropertySymbols)
        for (i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++) r = n[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
    return a
}

function O(e, t) {
    if (null == e) return {};
    var n, r, i = {},
        a = Object.getOwnPropertyNames(e);
    for (r = 0; r < a.length; r++) n = a[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    return i
}

function v(e) {
    let {
        onChange: t,
        onClose: n,
        color: a,
        suggestedColors: m,
        disabled: E,
        label: O,
        colorPickerMiddle: v,
        colorPickerFooter: A,
        showEyeDropper: I
    } = e, S = i.useRef(null), T = (0, u.rdh)(c.A.colors.BACKGROUND_BASE_LOW).hex(), C = c.A.colors.BACKGROUND_MOD_MUTED.css, N = (0, f.sN)(a), w = (0, l.Hl)(a), R = w === T ? C : w, P = N ? c.A.unsafe_rawColors.WHITE.css : c.A.unsafe_rawColors.PRIMARY_530.css, D = (0, d.A)(v), x = (0, d.A)(A), [L, j] = i.useState((0, o.A)());
    return i.useEffect(() => {
        (D !== v || x !== A) && j((0, o.A)())
    }, [A, v, x, D]), (0, r.jsx)(u.YNO, {
        targetElementRef: S,
        positionKey: L,
        renderPopout: e => (0, r.jsx)(u.VNw, y(g({}, e), {
            value: a,
            onChange: t,
            suggestedColors: m,
            middle: v,
            footer: A,
            showEyeDropper: I
        })),
        onRequestClose: n,
        children: e => {
            let {
                onClick: t
            } = e, n = b(e, ["onClick"]);
            return (0, r.jsxs)("div", {
                ref: S,
                className: s()(h.oP, {
                    [h.r9]: E
                }),
                children: [(0, r.jsx)(u.DUT, y(g({}, n), {
                    tabIndex: E ? -1 : 0,
                    onClick: E ? p.tEg : t,
                    style: {
                        backgroundColor: w,
                        borderColor: R
                    },
                    className: h.nf,
                    "aria-label": _.intl.string(_.t.Qp04hK),
                    focusProps: {
                        ringTarget: S
                    },
                    children: (0, r.jsx)(u.R2l, {
                        size: "custom",
                        className: h.BW,
                        width: 14,
                        height: 14,
                        color: P
                    })
                })), O]
            })
        }
    })
}