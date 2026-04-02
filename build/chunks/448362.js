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
    u = l(626031),
    d = l(339763),
    c = l(213538);
let p = () => (0, a.jsx)("img", {
        className: c.V8,
        src: l(324292),
        alt: ""
    }),
    m = (0, n.forwardRef)(function(e, t) {
        let {
            id: l,
            balance: r,
            balanceWidgetMode: m = s.k.DEFAULT,
            showNotificationBadge: h,
            onClick: x,
            onMouseDown: b,
            disabled: f,
            isInModalOverlay: y,
            className: g
        } = e, [v, E] = (0, n.useState)(!1), _ = (0, n.useMemo)(() => m === s.k.SELECTED ? c.wH : v ? c.mr : c.Ay, [m, v]), [C, j] = (0, n.useState)(!1), [S, T] = (0, n.useState)(!1), [A, P] = (0, n.useState)(2700), k = null === r;
        (0, n.useEffect)(() => {
            k && !C && (j(!0), setTimeout(() => {
                T(!0)
            }, 500))
        }, [k, j, C]), (0, n.useEffect)(() => {
            S && !k && j(!1)
        }, [k, S]);
        let I = k || C,
            R = C ? null : r,
            [N, D] = (0, n.useState)(null),
            M = (0, n.useRef)(null),
            O = (0, n.useCallback)(() => {
                M.current = null, D(null)
            }, []),
            L = (0, n.useCallback)(e => {
                let t = N === M.current;
                e > 0 && ("earn" !== N || !t) && D("earn")
            }, [D, N]);
        return (0, a.jsx)(o.DUT, {
            onClick: I ? void 0 : x,
            className: i()(c.vk, {
                [c.r9]: f
            }),
            id: l ?? "balance-widget-pill",
            children: (0, a.jsxs)("span", {
                onMouseDown: b,
                onMouseEnter: f ? void 0 : () => E(!0),
                onMouseLeave: f ? void 0 : () => E(!1),
                ref: t,
                className: i()(c.kL, _, g, {
                    [c.En]: I,
                    [c.dA]: y,
                    [c.r9]: f
                }),
                children: [(0, a.jsx)("div", {
                    className: i()(c.hr, I ? c.nr : void 0),
                    children: (0, a.jsx)(d.Ay, {
                        currentAnimationType: N,
                        animationTypeRef: M,
                        onSetAnimationDurationMS: P
                    })
                }), (0, a.jsx)(u.A, {
                    value: R,
                    onValueChange: L,
                    onValueReached: O,
                    targetTotalCounterTime: A,
                    className: I ? c.F : void 0
                }), h && (0, a.jsx)(p, {})]
            })
        })
    })