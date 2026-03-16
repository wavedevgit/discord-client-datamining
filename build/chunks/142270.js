/** chunk id: 142270 params = (module,exports,require) **/
l.d(t, {
    SS: () => E,
    cP: () => v
});
var a = l(627968),
    n = l(64700),
    r = l(503698),
    i = l.n(r),
    o = l(82495),
    s = l(482589),
    u = l(938396),
    c = l(649032),
    d = l(26508),
    p = l(318346),
    m = l(309954),
    h = l(305003),
    x = l(162097),
    b = l(219980),
    y = l(652215),
    g = l(985018),
    f = l(847688);
let v = {
        START: f.Vl,
        END: f.Wk
    },
    E = e => {
        let {
            showNotificationBadge: t,
            ctaText: l,
            ctaOnClick: r,
            analyticsPage: E,
            linkText: S = g.intl.string(g.t.XRdyjz),
            cardAlignment: j = v.START,
            className: T
        } = e, {
            balance: C
        } = (0, m.W)(), A = (0, d.DK)(c.W.NITRO, "BalanceWidgetMenu"), [P, R] = n.useState(h.k.DEFAULT), [_, k] = n.useState(!1), [I, N] = n.useState(!1), M = n.useRef(null);
        (0, s.j)(!_);
        let D = n.useCallback(() => {
                let e = !_;
                e && null != E && (0, p.Y)({
                    pageType: E,
                    sectionType: y.JJy.ORBS_BALANCE_MENU,
                    ctaObject: y.ZSU.OPEN_ORB_BALANCE_MENU_FROM_PILL
                }), R(e ? h.k.SELECTED : h.k.DEFAULT), k(e)
            }, [_, E]),
            O = n.useCallback(() => {
                _ && D()
            }, [_, D]),
            L = (0, o.A)(null, O),
            B = n.useMemo(() => (0, a.jsx)(x.b, {
                analyticsPage: E,
                ctaText: l,
                ctaOnClick: () => {
                    D(), r()
                },
                linkText: S
            }), [E, l, S, D, r]),
            w = n.useMemo(() => (0, a.jsx)(u.A, {
                targetElementRef: M,
                shouldShow: _,
                onRequestClose: D,
                ctaText: l,
                ctaOnClick: () => {
                    D(), r()
                }
            }), [_, D, l, r]);
        return (0, a.jsxs)("div", {
            className: i()(f.kL, T, {
                [f.R]: I,
                [f.RK]: !I
            }),
            children: [(0, a.jsx)(b.J, {
                pillRef: M,
                balance: C,
                balanceWidgetMode: P,
                onMouseDown: e => {
                    e.stopPropagation()
                },
                onClick: D,
                showNotificationBadge: t
            }), A ? w : _ && (0, a.jsx)("div", {
                className: i()(f.Ui, j, {
                    [f.R]: I,
                    [f.RK]: !I
                }),
                ref: L,
                children: B
            })]
        })
    };
E.CardAlignment = v