/** chunk id: 60628, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    lr: () => S
});
var r = n(650682),
    i = n(968172),
    a = n(825913),
    o = n(450902),
    s = n(248062),
    l = n(162376),
    c = n(461212),
    u = n(521767),
    d = n(360970),
    f = n(129844),
    p = n(134009),
    _ = n(193523),
    h = n(668167),
    m = n(498430),
    g = n(308722),
    E = n(752579),
    y = n(290424),
    b = n(803082),
    O = n(64700);
let v = (0, O.createContext)(null),
    A = (0, O.createContext)(null),
    I = [u.t, r.k, f.I, _.h],
    S = (0, O.forwardRef)(function(e, t) {
        var n, S;
        [e, t] = (0, a.JT)(e, t, v);
        let {
            validationBehavior: T
        } = (0, a.CC)(c.c) || {}, C = null != (S = null != (n = e.validationBehavior) ? n : T) ? S : "native", N = (0, g.j)({
            ...e,
            validationBehavior: C
        }), w = (0, O.useRef)(null), [R, P] = (0, a._E)(!e["aria-label"] && !e["aria-labelledby"]), {
            groupProps: D,
            labelProps: L,
            fieldProps: x,
            buttonProps: M,
            dialogProps: j,
            calendarProps: k,
            descriptionProps: U,
            errorMessageProps: G,
            ...V
        } = (0, h.Q)({
            ...(0, a.SK)(e),
            label: P,
            validationBehavior: C
        }, N, w), [F, B] = (0, O.useState)(null), H = (0, O.useCallback)(() => {
            w.current && B(w.current.offsetWidth + "px")
        }, []);
        (0, E.w)({
            ref: w,
            onResize: H
        });
        let {
            focusProps: Y,
            isFocused: W,
            isFocusVisible: K
        } = (0, m.o)({
            within: !0
        }), z = (0, a.Sl)({
            ...e,
            values: {
                state: N,
                isFocusWithin: W,
                isFocusVisible: K,
                isDisabled: e.isDisabled || !1,
                isInvalid: N.isInvalid,
                isOpen: N.isOpen,
                isReadOnly: e.isReadOnly || !1
            },
            defaultClassName: "react-aria-DatePicker"
        }), q = (0, y.$)(e, {
            global: !0
        });
        return delete q.id, O.createElement(a.Kq, {
            values: [
                [A, N],
                [u.t, {
                    ...D,
                    ref: w,
                    isInvalid: N.isInvalid
                }],
                [o.cQ, x],
                [r.k, {
                    ...M,
                    isPressed: N.isOpen
                }],
                [f.I, {
                    ...L,
                    ref: R,
                    elementType: "span"
                }],
                [i.Yi, k],
                [s.RG, N],
                [p.n, {
                    trigger: "DatePicker",
                    triggerRef: w,
                    placement: "bottom start",
                    style: {
                        "--trigger-width": F
                    },
                    clearContexts: I
                }],
                [s.MV, j],
                [_.h, {
                    slots: {
                        description: U,
                        errorMessage: G
                    }
                }],
                [l.C, V]
            ]
        }, O.createElement("div", {
            ...(0, b.v)(q, z, Y),
            ref: t,
            slot: e.slot || void 0,
            "data-focus-within": W || void 0,
            "data-invalid": N.isInvalid || void 0,
            "data-focus-visible": K || void 0,
            "data-disabled": e.isDisabled || void 0,
            "data-readonly": e.isReadOnly || void 0,
            "data-open": N.isOpen || void 0
        }), O.createElement(d.N, {
            autoComplete: e.autoComplete,
            name: e.name,
            isDisabled: e.isDisabled,
            state: N
        }))
    })