/** Chunk was on web.js **/
/** chunk id: 974213, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    $Q: () => I,
    Sc: () => S
});
var r = n(257537),
    i = n(825913),
    a = n(162376),
    o = n(461212),
    s = n(129844),
    l = n(193523),
    c = n(376546),
    u = n(803082),
    d = n(476311),
    f = n(360881),
    p = n(498430),
    _ = n(967158),
    h = n(126031),
    m = n(559077),
    g = n(823807),
    E = n(290424),
    y = n(533715),
    b = n(561514),
    O = n(64700);
let v = (0, O.createContext)(null),
    A = (0, O.createContext)(null),
    I = (0, O.forwardRef)(function(e, t) {
        var n, r;
        [e, t] = (0, i.JT)(e, t, v);
        let {
            validationBehavior: d
        } = (0, i.CC)(o.c) || {}, f = null != (r = null != (n = e.validationBehavior) ? n : d) ? r : "native", p = (0, m.h)({
            ...e,
            validationBehavior: f
        }), [_, h] = (0, i._E)(!e["aria-label"] && !e["aria-labelledby"]), {
            groupProps: g,
            labelProps: y,
            descriptionProps: b,
            errorMessageProps: I,
            ...S
        } = (0, c.M)({
            ...e,
            label: h,
            validationBehavior: f
        }, p), T = (0, i.Sl)({
            ...e,
            values: {
                isDisabled: p.isDisabled,
                isReadOnly: p.isReadOnly,
                isRequired: e.isRequired || !1,
                isInvalid: p.isInvalid,
                state: p
            },
            defaultClassName: "react-aria-CheckboxGroup"
        }), C = (0, E.$)(e, {
            global: !0
        });
        return O.createElement("div", {
            ...(0, u.v)(C, T, g),
            ref: t,
            slot: e.slot || void 0,
            "data-readonly": p.isReadOnly || void 0,
            "data-required": e.isRequired || void 0,
            "data-invalid": p.isInvalid || void 0,
            "data-disabled": e.isDisabled || void 0
        }, O.createElement(i.Kq, {
            values: [
                [A, p],
                [s.I, {
                    ...y,
                    ref: _,
                    elementType: "span"
                }],
                [l.h, {
                    slots: {
                        description: b,
                        errorMessage: I
                    }
                }],
                [a.C, S]
            ]
        }, T.children))
    }),
    S = (0, O.forwardRef)(function(e, t) {
        var n, a;
        let {
            inputRef: s = null,
            ...l
        } = e;
        [e, t] = (0, i.JT)(l, t, r.BP);
        let {
            validationBehavior: c
        } = (0, i.CC)(o.c) || {}, m = null != (a = null != (n = e.validationBehavior) ? n : c) ? a : "native", v = (0, O.useContext)(A), I = (0, y.U)((0, O.useMemo)(() => (0, b.P)(s, void 0 !== e.inputRef ? e.inputRef : null), [s, e.inputRef])), {
            labelProps: S,
            inputProps: T,
            isSelected: C,
            isDisabled: N,
            isReadOnly: w,
            isPressed: R,
            isInvalid: P
        } = v ? (0, d.B)({
            ...(0, i.SK)(e),
            value: e.value,
            children: "function" == typeof e.children || e.children
        }, v, I) : (0, f.v)({
            ...(0, i.SK)(e),
            children: "function" == typeof e.children || e.children,
            validationBehavior: m
        }, (0, g.H)(e), I), {
            isFocused: D,
            isFocusVisible: L,
            focusProps: x
        } = (0, p.o)(), M = N || w, {
            hoverProps: j,
            isHovered: k
        } = (0, _.M)({
            ...e,
            isDisabled: M
        }), U = (0, i.Sl)({
            ...e,
            defaultClassName: "react-aria-Checkbox",
            values: {
                isSelected: C,
                isIndeterminate: e.isIndeterminate || !1,
                isPressed: R,
                isHovered: k,
                isFocused: D,
                isFocusVisible: L,
                isDisabled: N,
                isReadOnly: w,
                isInvalid: P,
                isRequired: e.isRequired || !1
            }
        }), G = (0, E.$)(e, {
            global: !0
        });
        return delete G.id, delete G.onClick, O.createElement("label", {
            ...(0, u.v)(G, S, j, U),
            ref: t,
            slot: e.slot || void 0,
            "data-selected": C || void 0,
            "data-indeterminate": e.isIndeterminate || void 0,
            "data-pressed": R || void 0,
            "data-hovered": k || void 0,
            "data-focused": D || void 0,
            "data-focus-visible": L || void 0,
            "data-disabled": N || void 0,
            "data-readonly": w || void 0,
            "data-invalid": P || void 0,
            "data-required": e.isRequired || void 0
        }, O.createElement(h.s, {
            elementType: "span"
        }, O.createElement("input", {
            ...(0, u.v)(T, x),
            ref: I
        })), U.children)
    })