/** Chunk was on web.js **/
/** chunk id: 301679, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => h,
    L: () => _
}), n(896048);
var r = n(627968),
    i = n(64700),
    a = n(844222),
    s = n(350535),
    o = n(642481),
    l = n(525576);

function c(e, t, n) {
    return t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = n, e
}

function u(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
            return Object.getOwnPropertyDescriptor(n, e).enumerable
        }))), r.forEach(function(t) {
            c(e, t, n[t])
        })
    }
    return e
}

function d(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t && (r = r.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
        })), n.push.apply(n, r)
    }
    return n
}

function f(e, t) {
    return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : d(Object(t)).forEach(function(n) {
        Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
    }), e
}
let p = 200;

function _(e) {
    let {
        children: t,
        targetElementRef: n,
        estimatedTooltipHeight: c,
        delay: d = 300,
        onShow: _,
        title: h,
        body: m,
        graphic: g,
        size: E = "md",
        actions: y,
        gradientColor: b
    } = e, O = i.useContext(a.C), [v, A] = i.useState("closed"), I = i.useRef(null), S = i.useRef(!1), T = "opening-mouse" === v || "open-mouse" === v, C = "opening-keyboard" === v || "open-keyboard" === v, N = "open-mouse" === v || "open-keyboard" === v, w = (O.keyboardModeEnabled || C) && null != y, R = w, [P, D] = i.useState(0), x = (0, l._)(n, c, v), L = i.useCallback(() => {
        null != I.current && (clearTimeout(I.current), I.current = null)
    }, []), j = i.useCallback(e => {
        e && (S.current = !0), L(), A("closing")
    }, [L]);
    i.useEffect(() => L, [L]);
    let M = i.useCallback(() => {
            ("closed" === v || "closing" === v) && (L(), A("opening-mouse"))
        }, [L, v]),
        k = i.useCallback(() => {
            T && j(!1)
        }, [j, T]),
        U = i.useCallback(() => {
            if (S.current || "closed" !== v && "closing" !== v) {
                S.current = !1;
                return
            }
            L(), A("opening-keyboard")
        }, [L, v]),
        G = i.useCallback(() => {
            w && "opening-keyboard" !== v || j(!1)
        }, [j, v, w]);
    i.useEffect(() => {
        if ("opening-mouse" === v) return I.current = window.setTimeout(() => {
            I.current = null, A("open-mouse"), null == _ || _()
        }, d), L
    }, [v, d, _, L]), i.useEffect(() => {
        if ("opening-keyboard" === v) return I.current = window.setTimeout(() => {
            I.current = null, A("open-keyboard"), null == _ || _()
        }, d), L
    }, [v, d, _, L]), i.useEffect(() => {
        if ("closing" === v) return I.current = window.setTimeout(() => {
            I.current = null, A("closed")
        }, p), L
    }, [v, L]), i.useEffect(() => {
        if (!N) return;
        let e = e => {
            ("Escape" === e.key || "Esc" === e.key) && (e.preventDefault(), e.stopPropagation(), j(!0))
        };
        return document.addEventListener("keydown", e, !0), () => {
            document.removeEventListener("keydown", e, !0)
        }
    }, [N, j]);
    let V = i.useMemo(() => null == y ? y : y.map(e => f(u({}, e), {
            onClick: t => {
                var n;
                null == (n = e.onClick) || n.call(e, t), j(!1)
            }
        })), [y, j]),
        F = i.useCallback(e => {
            D(e)
        }, []);
    return (0, r.jsxs)("div", {
        onMouseEnter: M,
        onMouseLeave: k,
        onFocus: U,
        onBlur: G,
        children: [t, (0, r.jsx)(o.j, {
            targetElementRef: n,
            shouldShow: N,
            position: x,
            align: "center",
            title: h,
            body: m,
            graphic: g,
            size: E,
            actions: V,
            gradientColor: b,
            showCloseButton: R,
            shouldTrapFocus: w,
            returnRef: w ? n : void 0,
            isCaretHoverable: !0,
            caretConfig: {
                align: "custom",
                customOffset: P
            },
            onNudgeChange: F,
            onRequestClose: e => {
                j(null != e && (0, s.sg)(e))
            }
        })]
    })
}
let h = _