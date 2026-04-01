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
    u = l(938396),
    d = l(649032),
    c = l(26508),
    p = l(318346),
    m = l(309954),
    h = l(305003),
    x = l(162097),
    b = l(219980),
    y = l(652215),
    g = l(985018),
    f = l(810079);
let v = {
        START: f.Vl,
        END: f.Wk
    },
    _ = e => {
        let {
            showNotificationBadge: t,
            ctaText: l,
            ctaOnClick: r,
            analyticsPage: _,
            linkText: E = g.intl.string(g.t.XRdyjz),
            cardAlignment: C = v.START,
            className: j
        } = e, {
            balance: S
        } = (0, m.W)(), T = (0, c.DK)(d.W.NITRO, "BalanceWidgetMenu"), [A, P] = n.useState(h.k.DEFAULT), [k, I] = n.useState(!1), [R, N] = n.useState(!1), D = n.useRef(null);
        (0, s.j)(!k);
        let M = n.useCallback(() => {
                let e = !k;
                e && null != _ && (0, p.Y)({
                    pageType: _,
                    sectionType: y.JJy.ORBS_BALANCE_MENU,
                    ctaObject: y.ZSU.OPEN_ORB_BALANCE_MENU_FROM_PILL
                }), P(e ? h.k.SELECTED : h.k.DEFAULT), I(e)
            }, [k, _]),
            O = n.useCallback(() => {
                k && M()
            }, [k, M]),
            L = (0, o.A)(null, O),
            B = n.useMemo(() => (0, a.jsx)(x.b, {
                analyticsPage: _,
                ctaText: l,
                ctaOnClick: () => {
                    M(), r()
                },
                linkText: E
            }), [_, l, E, M, r]),
            w = n.useMemo(() => (0, a.jsx)(u.A, {
                targetElementRef: D,
                shouldShow: k,
                onRequestClose: M,
                ctaText: l,
                ctaOnClick: () => {
                    M(), r()
                }
            }), [k, M, l, r]);
        return (0, a.jsxs)("div", {
            className: i()(f.kL, j, {
                [f.R]: R,
                [f.RK]: !R
            }),
            children: [(0, a.jsx)(b.J, {
                pillRef: D,
                balance: S,
                balanceWidgetMode: A,
                onMouseDown: e => {
                    e.stopPropagation()
                },
                onClick: M,
                showNotificationBadge: t
            }), T ? w : k && (0, a.jsx)("div", {
                className: i()(f.Ui, C, {
                    [f.R]: R,
                    [f.RK]: !R
                }),
                ref: L,
                children: B
            })]
        })
    };
_.CardAlignment = v