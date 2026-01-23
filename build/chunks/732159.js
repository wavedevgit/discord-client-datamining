/** Chunk was on web.js **/
/** chunk id: 732159, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    ConfirmModal: () => f
}), n(896048);
var r = n(627968),
    i = n(64700),
    a = n(460890),
    s = n(189213),
    o = n(696208);

function l(e, t, n) {
    return t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = n, e
}

function c(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
            return Object.getOwnPropertyDescriptor(n, e).enumerable
        }))), r.forEach(function(t) {
            l(e, t, n[t])
        })
    }
    return e
}

function u(e, t) {
    if (null == e) return {};
    var n, r, i, a = {};
    if ("u" > typeof Reflect && Reflect.ownKeys) {
        for (i = 0, n = Reflect.ownKeys(e); i < n.length; i++) r = n[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
        return a
    }
    if (a = d(e, t), Object.getOwnPropertySymbols)
        for (i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++) r = n[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
    return a
}

function d(e, t) {
    if (null == e) return {};
    var n, r, i = {},
        a = Object.getOwnPropertyNames(e);
    for (r = 0; r < a.length; r++) n = a[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    return i
}

function f(e) {
    let {
        confirmText: t,
        cancelText: n,
        checkboxProps: l,
        onConfirm: d,
        onCancel: f,
        onCloseCallback: p,
        variant: _ = "critical"
    } = e, h = u(e, ["confirmText", "cancelText", "checkboxProps", "onConfirm", "onCancel", "onCloseCallback", "variant"]), {
        i18n: m
    } = (0, a.G9)(), g = m.CANCEL, E = m.INLINE_NOTICE_GENERIC_ERROR, [y, b] = i.useState(!1), O = i.useRef(p);
    i.useLayoutEffect(() => {
        O.current = p
    }), i.useLayoutEffect(() => () => {
        var e;
        null == (e = O.current) || e.call(O)
    }, []);
    let [v, A] = i.useState(void 0), I = e => {
        A(e)
    };
    return (0, r.jsx)(s.Modal, c({
        actions: [{
            text: null != n ? n : g,
            variant: "secondary",
            onClick: () => {
                null == f || f(), h.onClose()
            }
        }, {
            text: t,
            variant: "critical" === _ ? "critical-primary" : _,
            onClick: async () => {
                A(void 0), b(!0);
                try {
                    await (null == d ? void 0 : d(I)), h.onClose()
                } catch (e) {
                    throw b(!1), A(e => null != e ? e : E), e
                }
            },
            disabled: y,
            loading: y
        }],
        actionBarInput: null != l ? (0, r.jsx)(o.e, c({}, l)) : void 0,
        role: "alertdialog",
        notice: null != v ? {
            message: v,
            type: "critical"
        } : void 0
    }, h))
}