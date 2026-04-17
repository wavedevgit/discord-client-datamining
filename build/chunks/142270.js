/** chunk id: 142270 params = (module,exports,require) **/
l.d(t, {
    SS: () => _,
    cP: () => v
});
var a = l(627968),
    n = l(64700),
    r = l(503698),
    i = l.n(r),
    o = l(82495),
    s = l(482589),
    d = l(938396),
    c = l(649032),
    u = l(26508),
    p = l(318346),
    m = l(309954),
    h = l(305003),
    x = l(162097),
    b = l(219980),
    y = l(652215),
    f = l(985018),
    g = l(253167);
let v = {
        START: g.Vl,
        END: g.Wk
    },
    _ = e => {
        let {
            showNotificationBadge: t,
            ctaText: l,
            ctaOnClick: r,
            analyticsPage: _,
            linkText: E = f.intl.string(f.t.XRdyjz),
            cardAlignment: C = v.START,
            className: j
        } = e, {
            balance: S
        } = (0, m.W)(), T = (0, u.DK)(c.W.NITRO, "BalanceWidgetMenu"), [A, k] = n.useState(h.k.DEFAULT), [P, I] = n.useState(!1), [R, N] = n.useState(!1), M = n.useRef(null);
        (0, s.j)(!P);
        let D = n.useCallback(() => {
                let e = !P;
                e && null != _ && (0, p.Y)({
                    pageType: _,
                    sectionType: y.JJy.ORBS_BALANCE_MENU,
                    ctaObject: y.ZSU.OPEN_ORB_BALANCE_MENU_FROM_PILL
                }), k(e ? h.k.SELECTED : h.k.DEFAULT), I(e)
            }, [P, _]),
            O = n.useCallback(() => {
                P && D()
            }, [P, D]),
            B = (0, o.A)(null, O),
            L = n.useMemo(() => (0, a.jsx)(x.b, {
                analyticsPage: _,
                ctaText: l,
                ctaOnClick: () => {
                    D(), r()
                },
                linkText: E
            }), [_, l, E, D, r]),
            w = n.useMemo(() => (0, a.jsx)(d.A, {
                targetElementRef: M,
                shouldShow: P,
                onRequestClose: D,
                ctaText: l,
                ctaOnClick: () => {
                    D(), r()
                }
            }), [P, D, l, r]);
        return (0, a.jsxs)("div", {
            className: i()(g.kL, j, {
                [g.R]: R,
                [g.RK]: !R
            }),
            children: [(0, a.jsx)(b.J, {
                pillRef: M,
                balance: S,
                balanceWidgetMode: A,
                onMouseDown: e => {
                    e.stopPropagation()
                },
                onClick: D,
                showNotificationBadge: t
            }), T ? w : P && (0, a.jsx)("div", {
                className: i()(g.Ui, C, {
                    [g.R]: R,
                    [g.RK]: !R
                }),
                ref: B,
                children: L
            })]
        })
    };
_.CardAlignment = v