/** Chunk was on 1113 **/
/** chunk id: 606256, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => p
}), n(896048);
var r = n(627968),
    l = n(64700),
    i = n(503698),
    s = n.n(i),
    a = n(837381),
    o = n(397927),
    c = n(941971),
    u = n(900848),
    d = n(550591),
    h = n(878442);
let p = l.forwardRef(function(e, t) {
    var n, i;
    let {
        id: p,
        onClick: g,
        onContextMenu: f,
        icon: m,
        selected: b,
        tooltip: A,
        upperBadge: y,
        lowerBadge: O,
        lowerBadgeSize: _,
        showPill: j = !0,
        className: x,
        "aria-label": v,
        children: E,
        onMouseEnter: C,
        onMouseLeave: S,
        onMouseDown: I
    } = e, N = (0, a.Vd)(p), [T, P] = l.useState(!1);
    return (0, r.jsxs)(u.c, {
        children: [j ? (0, r.jsx)("div", {
            className: h.Io,
            children: (0, r.jsx)(c.A, {
                hovered: T,
                selected: b
            })
        }) : null, (0, r.jsx)(d.A, {
            text: A,
            selected: b,
            children: (0, r.jsx)(o.Qk9, {
                selected: !0,
                upperBadge: y,
                lowerBadge: O,
                lowerBadgeSize: _,
                children: (0, r.jsx)(o.DUT, (n = function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = null != arguments[t] ? arguments[t] : {},
                            r = Object.keys(n);
                        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                            return Object.getOwnPropertyDescriptor(n, e).enumerable
                        }))), r.forEach(function(t) {
                            var r;
                            r = n[t], t in e ? Object.defineProperty(e, t, {
                                value: r,
                                enumerable: !0,
                                configurable: !0,
                                writable: !0
                            }) : e[t] = r
                        })
                    }
                    return e
                }({
                    innerRef: t,
                    onMouseEnter: () => {
                        null == C || C(), P(!0)
                    },
                    onMouseLeave: () => {
                        null == S || S(), P(!1)
                    },
                    onMouseDown: I,
                    className: s()(h.oZ, x, {
                        [h.wH]: b || T
                    }),
                    onClick: g,
                    "aria-label": "string" == typeof A && null == v ? A : v,
                    "aria-selected": b,
                    onContextMenu: f,
                    focusProps: {
                        enabled: !1
                    }
                }, N), i = i = {
                    children: null != m && (0, r.jsx)(m, {
                        className: h.sF,
                        color: "currentColor"
                    })
                }, Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(i)) : (function(e, t) {
                    var n = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var r = Object.getOwnPropertySymbols(e);
                        n.push.apply(n, r)
                    }
                    return n
                })(Object(i)).forEach(function(e) {
                    Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(i, e))
                }), n))
            })
        }), E]
    })
})