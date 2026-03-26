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
    c = l(938396),
    u = l(649032),
    d = l(26508),
    p = l(318346),
    m = l(309954),
    h = l(305003),
    b = l(162097),
    x = l(219980),
    y = l(652215),
    f = l(985018),
    g = l(810079);
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
            className: S
        } = e, {
            balance: j
        } = (0, m.W)(), T = (0, d.DK)(u.W.NITRO, "BalanceWidgetMenu"), [A, P] = n.useState(h.k.DEFAULT), [k, R] = n.useState(!1), [I, N] = n.useState(!1), M = n.useRef(null);
        (0, s.j)(!k);
        let D = n.useCallback(() => {
                let e = !k;
                e && null != _ && (0, p.Y)({
                    pageType: _,
                    sectionType: y.JJy.ORBS_BALANCE_MENU,
                    ctaObject: y.ZSU.OPEN_ORB_BALANCE_MENU_FROM_PILL
                }), P(e ? h.k.SELECTED : h.k.DEFAULT), R(e)
            }, [k, _]),
            O = n.useCallback(() => {
                k && D()
            }, [k, D]),
            L = (0, o.A)(null, O),
            B = n.useMemo(() => (0, a.jsx)(b.b, {
                analyticsPage: _,
                ctaText: l,
                ctaOnClick: () => {
                    D(), r()
                },
                linkText: E
            }), [_, l, E, D, r]),
            w = n.useMemo(() => (0, a.jsx)(c.A, {
                targetElementRef: M,
                shouldShow: k,
                onRequestClose: D,
                ctaText: l,
                ctaOnClick: () => {
                    D(), r()
                }
            }), [k, D, l, r]);
        return (0, a.jsxs)("div", {
            className: i()(g.kL, S, {
                [g.R]: I,
                [g.RK]: !I
            }),
            children: [(0, a.jsx)(x.J, {
                pillRef: M,
                balance: j,
                balanceWidgetMode: A,
                onMouseDown: e => {
                    e.stopPropagation()
                },
                onClick: D,
                showNotificationBadge: t
            }), T ? w : k && (0, a.jsx)("div", {
                className: i()(g.Ui, C, {
                    [g.R]: I,
                    [g.RK]: !I
                }),
                ref: L,
                children: B
            })]
        })
    };
_.CardAlignment = v