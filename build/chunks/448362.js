/** chunk id: 448362 params = (module,exports,require) **/
l.d(t, {
    Gy: () => m,
    k7: () => s.k
});
var a = l(627968),
    n = l(64700),
    r = l(503698),
    i = l.n(r),
    o = l(397927);
l(14115);
var s = l(305003),
    c = l(626031),
    u = l(339763),
    d = l(210951);
let p = () => (0, a.jsx)("img", {
        className: d.V8,
        src: l(324292),
        alt: ""
    }),
    m = (0, n.forwardRef)(function(e, t) {
        let {
            id: l,
            balance: r,
            balanceWidgetMode: m = s.k.DEFAULT,
            showNotificationBadge: h,
            onClick: b,
            onMouseDown: x,
            disabled: y,
            isInModalOverlay: f,
            className: g
        } = e, [v, _] = (0, n.useState)(!1), E = (0, n.useMemo)(() => m === s.k.SELECTED ? d.wH : v ? d.mr : d.Ay, [m, v]), [C, S] = (0, n.useState)(!1), [j, T] = (0, n.useState)(!1), [A, P] = (0, n.useState)(2700), k = null === r;
        (0, n.useEffect)(() => {
            k && !C && (S(!0), setTimeout(() => {
                T(!0)
            }, 500))
        }, [k, S, C]), (0, n.useEffect)(() => {
            j && !k && S(!1)
        }, [k, j]);
        let R = k || C,
            I = C ? null : r,
            [N, M] = (0, n.useState)(null),
            D = (0, n.useRef)(null),
            O = (0, n.useCallback)(() => {
                D.current = null, M(null)
            }, []),
            L = (0, n.useCallback)(e => {
                let t = N === D.current;
                e > 0 && ("earn" !== N || !t) && M("earn")
            }, [M, N]);
        return (0, a.jsx)(o.DUT, {
            onClick: R ? void 0 : b,
            className: i()(d.vk, {
                [d.r9]: y
            }),
            id: l ?? "balance-widget-pill",
            children: (0, a.jsxs)("span", {
                onMouseDown: x,
                onMouseEnter: y ? void 0 : () => _(!0),
                onMouseLeave: y ? void 0 : () => _(!1),
                ref: t,
                className: i()(d.kL, E, g, {
                    [d.En]: R,
                    [d.dA]: f,
                    [d.r9]: y
                }),
                children: [(0, a.jsx)("div", {
                    className: i()(d.hr, R ? d.nr : void 0),
                    children: (0, a.jsx)(u.Ay, {
                        currentAnimationType: N,
                        animationTypeRef: D,
                        onSetAnimationDurationMS: P
                    })
                }), (0, a.jsx)(c.A, {
                    value: I,
                    onValueChange: L,
                    onValueReached: O,
                    targetTotalCounterTime: A,
                    className: R ? d.F : void 0
                }), h && (0, a.jsx)(p, {})]
            })
        })
    })