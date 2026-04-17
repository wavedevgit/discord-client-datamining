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
    d = l(626031),
    c = l(339763),
    u = l(743383);
let p = () => (0, a.jsx)("img", {
        className: u.V8,
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
            disabled: y,
            isInModalOverlay: f,
            className: g
        } = e, [v, _] = (0, n.useState)(!1), E = (0, n.useMemo)(() => m === s.k.SELECTED ? u.wH : v ? u.mr : u.Ay, [m, v]), [C, j] = (0, n.useState)(!1), [S, T] = (0, n.useState)(!1), [A, k] = (0, n.useState)(2700), P = null === r;
        (0, n.useEffect)(() => {
            P && !C && (j(!0), setTimeout(() => {
                T(!0)
            }, 500))
        }, [P, j, C]), (0, n.useEffect)(() => {
            S && !P && j(!1)
        }, [P, S]);
        let I = P || C,
            R = C ? null : r,
            [N, M] = (0, n.useState)(null),
            D = (0, n.useRef)(null),
            O = (0, n.useCallback)(() => {
                D.current = null, M(null)
            }, []),
            B = (0, n.useCallback)(e => {
                let t = N === D.current;
                e > 0 && ("earn" !== N || !t) && M("earn")
            }, [M, N]);
        return (0, a.jsx)(o.DUT, {
            onClick: I ? void 0 : x,
            className: i()(u.vk, {
                [u.r9]: y
            }),
            id: l ?? "balance-widget-pill",
            children: (0, a.jsxs)("span", {
                onMouseDown: b,
                onMouseEnter: y ? void 0 : () => _(!0),
                onMouseLeave: y ? void 0 : () => _(!1),
                ref: t,
                className: i()(u.kL, E, g, {
                    [u.En]: I,
                    [u.dA]: f,
                    [u.r9]: y
                }),
                children: [(0, a.jsx)("div", {
                    className: i()(u.hr, I ? u.nr : void 0),
                    children: (0, a.jsx)(c.Ay, {
                        currentAnimationType: N,
                        animationTypeRef: D,
                        onSetAnimationDurationMS: k
                    })
                }), (0, a.jsx)(d.A, {
                    value: R,
                    onValueChange: B,
                    onValueReached: O,
                    targetTotalCounterTime: A,
                    className: I ? u.F : void 0
                }), h && (0, a.jsx)(p, {})]
            })
        })
    })