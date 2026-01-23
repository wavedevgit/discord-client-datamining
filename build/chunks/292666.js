/** Chunk was on web.js **/
/** chunk id: 292666, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    k: () => I,
    p: () => S
});
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(158954),
    l = n(827734),
    c = n(504345),
    u = n(435371),
    d = n(823607),
    f = n(511274),
    p = n(985018),
    _ = n(100624);

function h(e, t, n) {
    return t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = n, e
}

function m(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
            return Object.getOwnPropertyDescriptor(n, e).enumerable
        }))), r.forEach(function(t) {
            h(e, t, n[t])
        })
    }
    return e
}

function g(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t && (r = r.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
        })), n.push.apply(n, r)
    }
    return n
}

function E(e, t) {
    return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : g(Object(t)).forEach(function(n) {
        Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
    }), e
}

function y(e, t) {
    if (null == e) return {};
    var n, r, i, a = {};
    if ("u" > typeof Reflect && Reflect.ownKeys) {
        for (i = 0, n = Reflect.ownKeys(e); i < n.length; i++) r = n[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
        return a
    }
    if (a = b(e, t), Object.getOwnPropertySymbols)
        for (i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++) r = n[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
    return a
}

function b(e, t) {
    if (null == e) return {};
    var n, r, i = {},
        a = Object.getOwnPropertyNames(e);
    for (r = 0; r < a.length; r++) n = a[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    return i
}

function O(e, t) {
    let n = i.useContext(c.cK);
    return i.useEffect(() => {
        var r, i;
        null == (r = n.setHasValue) || r.call(n, null != t && "" !== t || null != e && "" !== e), null == (i = n.setIsFocused) || i.call(n, !1)
    }, []), i.useEffect(() => {
        if (null != e && "" !== e) {
            var t;
            null == (t = n.setHasValue) || t.call(n, !0)
        }
    }, [n, e]), n
}

function v(e) {
    let {
        accessory: t,
        inputSize: n,
        disabled: i
    } = e;
    if ("string" == typeof t) return (0, r.jsx)(o.EYj, {
        variant: "text-md/normal",
        color: "input-placeholder-text-default",
        className: _.leadingText,
        children: t
    });
    if ("icon" in t) {
        let {
            tooltip: e
        } = t, a = y(t, ["tooltip"]), s = "md" === n ? "sm" : "xs", l = (0, r.jsx)(o.TVs, E(m({}, a), {
            size: s,
            variant: "input-accessory"
        }));
        return null != e ? (0, r.jsx)(u.m_, {
            asContainer: !0,
            text: e,
            shouldShow: !i,
            children: l
        }) : l
    }
    if ("button" in t) return (0, r.jsx)("div", {
        className: _.icon,
        children: t.button
    });
    if ("type" in t && "tags" === t.type) {
        let {
            type: e
        } = t, n = y(t, ["type"]);
        return (0, r.jsx)(o.CR_, E(m({}, n), {
            layout: "inline"
        }))
    }
    if ("type" in t && "image" === t.type) return (0, r.jsx)("img", {
        "aria-hidden": !0,
        alt: "",
        src: t.src,
        className: _.image
    });
    let a = t,
        s = "md" === n ? "xs" : "xxs";
    return (0, r.jsx)("div", {
        className: _.icon,
        children: (0, r.jsx)(a, {
            size: s,
            color: l.A.colors.ICON_STRONG
        })
    })
}

function A(e) {
    let {
        inputSize: t,
        onClick: n
    } = e, i = "md" === t ? "xs" : "xxs";
    return (0, r.jsx)(o.DUT, {
        className: _.clearButton,
        onClick: n,
        "aria-label": p.intl.string(p.t.VkKicb),
        children: (0, r.jsx)(o.aXh, {
            size: i,
            color: "currentColor"
        })
    })
}

function I(e) {
    var t;
    let {
        disabled: n = !1,
        editable: a,
        inputRef: l,
        focusProps: c,
        name: u = "",
        type: p = "text",
        placeholder: h = "",
        maxLength: g,
        value: b,
        defaultValue: I,
        minLength: T,
        error: C,
        defaultDirty: N = !1,
        leading: w,
        trailing: R,
        validateOn: P = "change",
        size: D = "md",
        fullWidth: x = !1,
        clearable: L = !1,
        showCharacterCount: j = !1
    } = e, M = y(e, ["disabled", "editable", "inputRef", "focusProps", "name", "type", "placeholder", "maxLength", "value", "defaultValue", "minLength", "error", "defaultDirty", "leading", "trailing", "validateOn", "size", "fullWidth", "clearable", "showCharacterCount"]), {
        fieldProps: k
    } = (0, o.ndh)(M), U = (0, f.Y)({
        validateOn: P,
        error: C,
        value: b,
        minLength: T,
        maxLength: g,
        defaultDirty: N
    }), {
        setShouldValidate: G
    } = U, V = O(b, I), F = "object" == typeof w && "type" in w && "tags" === w.type, B = e => {
        var t, n;
        let r = e.currentTarget.value;
        null == (t = M.onChange) || t.call(M, r, u), G(!0), null == (n = V.setHasValue) || n.call(V, "" !== r)
    }, H = e => {
        var t, n;
        null == (t = M.onFocus) || t.call(M, e), null == (n = V.setIsFocused) || n.call(V, !0)
    }, Y = e => {
        var t, n;
        null == (t = M.onBlur) || t.call(M, e), null == (n = V.setIsFocused) || n.call(V, !1)
    }, W = e => {
        if (null != M.onClear) M.onClear(e);
        else {
            var t;
            null == (t = M.onChange) || t.call(M, "", u)
        }
    }, K = i.useRef(null), z = M.readOnly;
    null == z && !1 === a && (z = !0);
    let q = null;
    ("boolean" == typeof L ? L && null != b && "" !== b && !z : L.show) ? q = (0, r.jsx)(A, {
        inputSize: D,
        onClick: W
    }): null != R && (q = (0, r.jsx)(v, {
        accessory: R,
        inputSize: D
    }));
    let Z = null;
    null != w && (Z = (0, r.jsx)(v, {
        accessory: w,
        inputSize: D
    }));
    let X = j ? (0, r.jsx)(d.n, {
        value: b,
        maxLength: g
    }) : null;
    return (0, r.jsx)(o.D0$, E(m({}, k), {
        errorMessage: U.hasError && null != (t = U.errorMessage) ? t : void 0,
        trailingAuxiliaryContent: X,
        children: (0, r.jsxs)(o.FON, {
            ref: K,
            disabled: n,
            validation: U,
            fullWidth: x,
            readOnly: z,
            className: s()(_.container, _[D], {
                [_.hasLeading]: null != Z,
                [_.hasTrailing]: null != q,
                [_.hasTags]: F
            }),
            children: [Z, (0, r.jsx)(o.vN3, E(m({
                ringTarget: K
            }, c), {
                children: (0, r.jsx)(S, E(m({
                    name: u,
                    className: _.input,
                    disabled: n,
                    readOnly: z,
                    "aria-required": k.required,
                    type: p,
                    placeholder: h,
                    maxLength: g,
                    minLength: T,
                    value: b,
                    defaultValue: I,
                    "data-mana-component": "text-input"
                }, M), {
                    onChange: B,
                    onBlur: Y,
                    onFocus: H,
                    ref: l
                }))
            })), q]
        })
    }))
}

function S(e) {
    let {
        value: t,
        defaultValue: n,
        "aria-labelledby": a
    } = e, s = y(e, ["value", "defaultValue", "aria-labelledby"]), l = O(t, n), c = i.useContext(o._zY);
    return (0, r.jsx)("input", E(m({}, s), {
        value: t,
        defaultValue: n,
        id: null == c ? void 0 : c.controlId,
        "aria-labelledby": null != a ? a : l.titleId,
        "aria-describedby": null == c ? void 0 : c.describedById,
        "aria-errormessage": null == c ? void 0 : c.errorMessageId,
        "aria-invalid": (null == c ? void 0 : c.errorMessageId) != null
    }))
}