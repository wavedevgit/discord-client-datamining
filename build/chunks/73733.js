/** chunk id: 73733, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    y: () => u
});
var r = n(956817),
    i = n(217512),
    a = n(64700),
    o = n(959462),
    s = n(114099),
    l = n(47276);

function c(e) {
    return e && e.__esModule ? e.default : e
}

function u(e) {
    let t = (0, a.useRef)(void 0),
        {
            value: n,
            textValue: u,
            minValue: d,
            maxValue: f,
            isDisabled: p,
            isReadOnly: _,
            isRequired: h,
            onIncrement: m,
            onIncrementPage: g,
            onDecrement: E,
            onDecrementPage: y,
            onDecrementToMin: b,
            onIncrementToMax: O
        } = e,
        v = (0, l.o)(c(r.A), "@react-aria/spinbutton"),
        A = () => clearTimeout(t.current);
    (0, a.useEffect)(() => () => A(), []);
    let I = e => {
            if (!e.ctrlKey && !e.metaKey && !e.shiftKey && !e.altKey && !_ && !e.nativeEvent.isComposing) switch (e.key) {
                case "PageUp":
                    if (g) {
                        e.preventDefault(), null == g || g();
                        break
                    }
                case "ArrowUp":
                case "Up":
                    m && (e.preventDefault(), null == m || m());
                    break;
                case "PageDown":
                    if (y) {
                        e.preventDefault(), null == y || y();
                        break
                    }
                case "ArrowDown":
                case "Down":
                    E && (e.preventDefault(), null == E || E());
                    break;
                case "Home":
                    b && (e.preventDefault(), null == b || b());
                    break;
                case "End":
                    O && (e.preventDefault(), null == O || O())
            }
        },
        S = (0, a.useRef)(!1),
        T = () => {
            S.current = !0
        },
        C = () => {
            S.current = !1
        },
        N = "" === u ? v.format("Empty") : (u || `${n}`).replace("-", "−");
    (0, a.useEffect)(() => {
        S.current && ((0, i.pA)("assertive"), (0, i.iP)(N, "assertive"))
    }, [N]);
    let w = (0, o.J)(e => {
            A(), null == m || m(), t.current = window.setTimeout(() => {
                (void 0 === f || isNaN(f) || void 0 === n || isNaN(n) || n < f) && w(60)
            }, e)
        }),
        R = (0, o.J)(e => {
            A(), null == E || E(), t.current = window.setTimeout(() => {
                (void 0 === d || isNaN(d) || void 0 === n || isNaN(n) || n > d) && R(60)
            }, e)
        }),
        P = e => {
            e.preventDefault()
        },
        {
            addGlobalListener: D,
            removeAllGlobalListeners: L
        } = (0, s.A)();
    return {
        spinButtonProps: {
            role: "spinbutton",
            "aria-valuenow": void 0 === n || isNaN(n) ? void 0 : n,
            "aria-valuetext": N,
            "aria-valuemin": d,
            "aria-valuemax": f,
            "aria-disabled": p || void 0,
            "aria-readonly": _ || void 0,
            "aria-required": h || void 0,
            onKeyDown: I,
            onFocus: T,
            onBlur: C
        },
        incrementButtonProps: {
            onPressStart: () => {
                w(400), D(window, "contextmenu", P)
            },
            onPressEnd: () => {
                A(), L()
            },
            onFocus: T,
            onBlur: C
        },
        decrementButtonProps: {
            onPressStart: () => {
                R(400), D(window, "contextmenu", P)
            },
            onPressEnd: () => {
                A(), L()
            },
            onFocus: T,
            onBlur: C
        }
    }
}