/** chunk id: 273875, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => f
}), n(896048), n(733351);
var r = n(627968),
    i = n(64700),
    l = n(503698),
    s = n.n(l),
    a = n(311907),
    o = n(990078),
    c = n(397927),
    d = n(765671),
    u = n(775602),
    g = n(530552),
    m = n(318023);
let p = i.forwardRef(function(e, t) {
    var n, l;
    let {
        value: a,
        isSelected: c,
        isEditing: d,
        forceShowErrorTooltip: u = !1,
        error: g
    } = e, [p, f, h] = i.useMemo(() => {
        if (null == g) return [];
        let {
            erroringCharacterOffset: e = 0,
            erroringCharacterLength: t = a.length
        } = null != g ? g : {};
        return [a.slice(0, e), a.slice(e, e + t), a.slice(e + t)]
    }, [a, g]);
    return null == g ? (0, r.jsx)("div", {
        className: s()(m.n5, {
            [m.JN]: d,
            [m.sp]: c
        }),
        ref: t,
        children: a
    }) : (null != (n = null == p ? void 0 : p.length) ? n : 0) + (null != (l = null == f ? void 0 : f.length) ? l : 0) > 70 ? (0, r.jsx)(o.m, {
        "aria-label": g.message,
        __unsupportedReactNodeAsText: (0, r.jsxs)("div", {
            "aria-label": g.message,
            children: [g.message, " ", (0, r.jsx)("span", {
                className: m.io,
                children: f
            })]
        }),
        position: "left",
        forceOpen: u || void 0,
        children: (0, r.jsxs)("div", {
            ref: t,
            className: s()(m.n5, {
                [m.JN]: d,
                [m.bJ]: null != g && !d,
                [m.fR]: null != g && !d
            }),
            children: [(0, r.jsx)("span", {
                children: p
            }), (0, r.jsx)("span", {
                className: m.SD,
                children: f
            }), (0, r.jsx)("span", {
                children: h
            })]
        })
    }) : (0, r.jsxs)("div", {
        ref: t,
        className: s()(m.n5, {
            [m.JN]: d,
            [m.bJ]: null != g && !d
        }),
        children: [(0, r.jsx)("span", {
            children: p
        }), (0, r.jsx)(o.m, {
            text: g.message,
            position: "top",
            forceOpen: u || void 0,
            children: (0, r.jsx)("span", {
                className: m.SD,
                children: f
            })
        }), (0, r.jsx)("span", {
            children: h
        })]
    })
});

function f(e) {
    let {
        value: t,
        onChange: n,
        onBlur: l,
        onFocus: o,
        onRemove: f,
        isSelected: h,
        isSelecting: b,
        error: x,
        forceShowErrorTooltip: j
    } = e, _ = i.useRef(null), O = i.useRef(null), [v, y] = i.useState(!1), {
        ref: A,
        width: E = 0
    } = (0, d.Ay)(v), {
        ref: N,
        width: S = 0
    } = (0, d.Ay)(v), I = (0, a.bG)([u.A], () => u.A.useReducedMotion), [C, T] = i.useState(j), P = i.useRef(null), w = E > S ? E : S;
    i.useEffect(() => {
        j ? (T(!0), P.current = setTimeout(() => {
            T(!1), P.current = null
        }, g.Mw)) : T(!1)
    }, [j]), i.useEffect(() => () => {
        clearTimeout(P.current)
    }, []);
    let R = i.useCallback(e => {
            n(e.target.value)
        }, [n]),
        D = i.useCallback(function() {
            let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
            if (t.trim().length <= 0 && f(), null != _.current && null != A.current && null != O.current) {
                var n;
                _.current.scrollTo(0, 0), _.current.setSelectionRange(0, 0), _.current.scrollLeft = 0, A.current.scrollLeft = 0, (null == (n = O.current) ? void 0 : n.ref) != null && (O.current.ref.scrollLeft = 0)
            }
            y(!1), l(e)
        }, [t, A, l, f]),
        G = i.useCallback(e => {
            let n = t.trim().length <= 0;
            g.Wu.has(e.key) ? (e.preventDefault(), e.stopPropagation(), D(!0)) : "Backspace" === e.key && n && (e.preventDefault(), e.stopPropagation(), D(!0))
        }, [D, t]),
        L = i.useCallback(e => {
            let t = e.metaKey || e.ctrlKey;
            o(t), t ? e.preventDefault() : y(!0), e.stopPropagation()
        }, [o]),
        k = i.useCallback(e => {
            f()
        }, [f]);
    return (0, r.jsx)("div", {
        className: m.G1,
        children: (0, r.jsxs)("div", {
            ref: N,
            className: s()(m.Tm, {
                [m.JN]: v,
                [m.mV]: !v && !I,
                [m.sp]: h,
                [m.Pq]: b,
                [m.bJ]: null != x && !v
            }),
            children: [(0, r.jsxs)(c.DUT, {
                tag: "div",
                onBlur: () => D(!1),
                onClick: L,
                ignoreKeyPress: !0,
                onMouseEnter: () => T(!0),
                onMouseLeave: () => T(!1),
                className: s()(m.nz, {
                    [m.Pq]: b,
                    [m.JN]: v
                }),
                ref: O,
                children: [(0, r.jsx)("input", {
                    className: s()(m.uS, {
                        [m.JN]: v,
                        [m.Pq]: b
                    }),
                    ref: _,
                    onChange: R,
                    onKeyDownCapture: G,
                    value: t,
                    style: {
                        width: w > 0 ? w : "calc(".concat(t.length, "ch + 10px)")
                    }
                }), (0, r.jsx)(p, {
                    ref: A,
                    value: t,
                    isEditing: v,
                    isSelected: h,
                    error: x,
                    forceShowErrorTooltip: C || v
                })]
            }), !v && (0, r.jsx)(c.DUT, {
                className: m.Nk,
                onClick: k,
                children: (0, r.jsx)(c.PGe, {
                    size: "xxs",
                    color: "currentColor",
                    className: m.ut
                })
            })]
        })
    })
}