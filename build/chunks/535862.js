/** Chunk was on web.js **/
/** chunk id: 535862, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    f: () => h
});
var r = n(825913),
    i = n(123375),
    a = n(912687),
    o = n(587771),
    s = n(331250),
    l = n(498430),
    c = n(967158),
    u = n(803082),
    d = n(290424),
    f = n(64700),
    p = n(823807);
let _ = (0, f.createContext)({}),
    h = (0, f.forwardRef)(function(e, t) {
        [e, t] = (0, r.JT)(e, t, _);
        let n = (0, f.useContext)(a.G0),
            h = (0, p.H)(n && null != e.id ? {
                isSelected: n.selectedKeys.has(e.id),
                onChange(t) {
                    n.setSelected(e.id, t)
                }
            } : e),
            {
                buttonProps: m,
                isPressed: g,
                isSelected: E,
                isDisabled: y
            } = n && null != e.id ? (0, o.O)({
                ...e,
                id: e.id
            }, n, t) : (0, s.q)({
                ...e,
                id: null != e.id ? String(e.id) : void 0
            }, h, t),
            {
                focusProps: b,
                isFocused: O,
                isFocusVisible: v
            } = (0, l.o)(e),
            {
                hoverProps: A,
                isHovered: I
            } = (0, c.M)(e),
            S = (0, r.Sl)({
                ...e,
                id: void 0,
                values: {
                    isHovered: I,
                    isPressed: g,
                    isFocused: O,
                    isSelected: h.isSelected,
                    isFocusVisible: v,
                    isDisabled: y,
                    state: h
                },
                defaultClassName: "react-aria-ToggleButton"
            }),
            T = (0, d.$)(e, {
                global: !0
            });
        return delete T.id, delete T.onClick, f.createElement("button", {
            ...(0, u.v)(T, S, m, b, A),
            ref: t,
            slot: e.slot || void 0,
            "data-focused": O || void 0,
            "data-disabled": y || void 0,
            "data-pressed": g || void 0,
            "data-selected": E || void 0,
            "data-hovered": I || void 0,
            "data-focus-visible": v || void 0
        }, f.createElement(i.r.Provider, {
            value: {
                isSelected: E
            }
        }, S.children))
    })