/** Chunk was on web.js **/
/** chunk id: 650682, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    $: () => h,
    k: () => _
});
var r = n(825913),
    i = n(646066),
    a = n(217512),
    o = n(284054),
    s = n(498430),
    l = n(967158),
    c = n(723906),
    u = n(803082),
    d = n(564004),
    f = n(290424),
    p = n(64700);
let _ = (0, p.createContext)({}),
    h = (0, d.U7)(function(e, t) {
        [e, t] = (0, r.JT)(e, t, _);
        let n = e,
            {
                isPending: d
            } = n,
            {
                buttonProps: h,
                isPressed: g
            } = (0, o.s)(e, t);
        h = m(h, d);
        let {
            focusProps: E,
            isFocused: y,
            isFocusVisible: b
        } = (0, s.o)(e), {
            hoverProps: O,
            isHovered: v
        } = (0, l.M)({
            ...e,
            isDisabled: e.isDisabled || d
        }), A = {
            isHovered: v,
            isPressed: (n.isPressed || g) && !d,
            isFocused: y,
            isFocusVisible: b,
            isDisabled: e.isDisabled || !1,
            isPending: null != d && d
        }, I = (0, r.Sl)({
            ...e,
            values: A,
            defaultClassName: "react-aria-Button"
        }), S = (0, c.Bi)(h.id), T = (0, c.Bi)(), C = h["aria-labelledby"];
        d && (C ? C = `${C} ${T}` : h["aria-label"] && (C = `${S} ${T}`));
        let N = (0, p.useRef)(d);
        (0, p.useEffect)(() => {
            let e = {
                "aria-labelledby": C || S
            };
            !N.current && y && d ? (0, a.iP)(e, "assertive") : N.current && y && !d && (0, a.iP)(e, "assertive"), N.current = d
        }, [d, y, C, S]);
        let w = (0, f.$)(e, {
            global: !0
        });
        return delete w.onClick, p.createElement("button", {
            ...(0, u.v)(w, I, h, E, O),
            type: "submit" === h.type && d ? "button" : h.type,
            id: S,
            ref: t,
            "aria-labelledby": C,
            slot: e.slot || void 0,
            "aria-disabled": d ? "true" : h["aria-disabled"],
            "data-disabled": e.isDisabled || void 0,
            "data-pressed": A.isPressed || void 0,
            "data-hovered": v || void 0,
            "data-focused": y || void 0,
            "data-pending": d || void 0,
            "data-focus-visible": b || void 0
        }, p.createElement(i.K.Provider, {
            value: {
                id: T
            }
        }, I.children))
    });

function m(e, t) {
    if (t) {
        for (let t in e) t.startsWith("on") && !(t.includes("Focus") || t.includes("Blur")) && (e[t] = void 0);
        e.href = void 0, e.target = void 0
    }
    return e
}