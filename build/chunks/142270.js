/** chunk id: 142270 params = (module,exports,require) **/
l.d(t, {
    SS: () => v,
    cP: () => E
});
var a = l(627968),
    n = l(64700),
    r = l(503698),
    i = l.n(r),
    s = l(82495),
    o = l(482589),
    u = l(938396),
    c = l(649032),
    d = l(26508),
    p = l(318346),
    m = l(309954),
    h = l(305003),
    x = l(162097),
    b = l(219980),
    y = l(652215),
    f = l(985018),
    g = l(150542);
let E = {
        START: g.Vl,
        END: g.Wk
    },
    v = e => {
        let {
            showNotificationBadge: t,
            ctaText: l,
            ctaOnClick: r,
            analyticsPage: v,
            linkText: S = f.intl.string(f.t.XRdyjz),
            cardAlignment: j = E.START,
            className: T
        } = e, {
            balance: C
        } = (0, m.W)(), P = (0, d.DK)(c.W.NITRO, "BalanceWidgetMenu"), [A, R] = n.useState(h.k.DEFAULT), [_, k] = n.useState(!1), [I, N] = n.useState(!1), D = n.useRef(null);
        (0, o.j)(!_);
        let M = n.useCallback(() => {
                let e = !_;
                e && null != v && (0, p.Y)({
                    pageType: v,
                    sectionType: y.JJy.ORBS_BALANCE_MENU,
                    ctaObject: y.ZSU.OPEN_ORB_BALANCE_MENU_FROM_PILL
                }), R(e ? h.k.SELECTED : h.k.DEFAULT), k(e)
            }, [_, v]),
            O = n.useCallback(() => {
                _ && M()
            }, [_, M]),
            L = (0, s.A)(null, O),
            B = n.useMemo(() => (0, a.jsx)(x.b, {
                analyticsPage: v,
                ctaText: l,
                ctaOnClick: () => {
                    M(), r()
                },
                linkText: S
            }), [v, l, S, M, r]),
            U = n.useMemo(() => (0, a.jsx)(u.A, {
                targetElementRef: D,
                shouldShow: _,
                onRequestClose: M,
                ctaText: l,
                ctaOnClick: () => {
                    M(), r()
                }
            }), [_, M, l, r]);
        return (0, a.jsxs)("div", {
            className: i()(g.kL, T, {
                [g.R]: I,
                [g.RK]: !I
            }),
            children: [(0, a.jsx)(b.J, {
                pillRef: D,
                balance: C,
                balanceWidgetMode: A,
                onMouseDown: e => {
                    e.stopPropagation()
                },
                onClick: M,
                showNotificationBadge: t
            }), P ? U : _ && (0, a.jsx)("div", {
                className: i()(g.Ui, j, {
                    [g.R]: I,
                    [g.RK]: !I
                }),
                ref: L,
                children: B
            })]
        })
    };
v.CardAlignment = E