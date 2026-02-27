/** chunk id: 737630, original params: e,t,s (module,exports,require) **/
"use strict";
s.r(t), s.d(t, {
    default: () => w
});
var n = s(627968),
    l = s(64700),
    r = s(503698),
    a = s.n(r),
    i = s(835245),
    o = s(417597),
    c = s(192308),
    d = s(397927),
    u = s(944791),
    g = s(444927),
    _ = s(688810),
    m = s(697454),
    h = s(611924),
    p = s(594832),
    f = s(287809),
    x = s(440938),
    E = s(590180),
    C = s(161918),
    A = s(790297),
    b = s(338769),
    S = s(841702),
    v = s(621653),
    L = s(983545),
    I = s(365491),
    j = s(530971),
    k = s(177366),
    T = s(155486),
    O = s(278576),
    N = s(120286),
    y = s(870308),
    R = s(938191),
    B = s(758836),
    M = s(652215),
    P = s(650583),
    D = s(157884);
let H = e => {
        let {
            children: t,
            shouldAddEventListener: s,
            onClose: n
        } = e, r = (0, c.useHasAnyModalOpen)();
        return l.useEffect(() => {
            if (!s || r) return;
            let e = e => {
                e.key === P.N$.Escape && n()
            };
            return window.addEventListener("keydown", e), () => window.removeEventListener("keydown", e)
        }, [s, r, n]), t
    },
    w = function(e) {
        let {
            tab: t = B.G2.HOME
        } = e;
        (0, h.P)(m.a), (0, v.g)();
        let s = (0, g.A)((0, i.A)()),
            r = (0, o.bG)([f.default], () => f.default.getCurrentUser());
        (0, p.pE)();
        let c = (0, R.yB)("CollectiblesShop"),
            {
                onClose: P
            } = (0, O.tR)(),
            {
                currentTab: w,
                hasFilters: U
            } = (0, I.v)(),
            G = l.useMemo(() => t === B.G2.HOME && w && U() ? w : t, [t, w, U]),
            {
                categories: F,
                refreshCategories: V
            } = (0, S.Ay)({
                logPerf: !0
            }, {
                sessionId: s,
                tab: G
            }),
            K = l.useMemo(() => [...F.values()], [F]),
            [W, z] = l.useState(),
            Y = (0, o.bG)([E.A], () => E.A.getCategory(W)?.name),
            [$, Z] = l.useState();
        (0, k.XU)();
        let q = l.useCallback((e, t) => {
                Z(e), z(t)
            }, []),
            {
                selectedTab: X,
                transitionState: J,
                transitionToTab: Q
            } = (0, L.o)(G);
        (0, A.uS)(s, X, Y, J, $), (0, A.N0)(X, r);
        let {
            dismissShopButtonDC: ee
        } = (0, y.A)();
        l.useEffect(() => {
            ee()
        }, [ee]), l.useEffect(() => {
            (0, u.I)(M.BVt.COLLECTIBLES_SHOP)
        }, []);
        let et = l.useRef(null),
            es = l.useRef(null);
        (0, d.tjt)(et), l.useEffect(() => {
            es.current?.focus()
        }, []), (0, R.gB)();
        let {
            analyticsLocations: en
        } = (0, A.lC)(X), el = (0, b.V)(X, "collectibles_shop");
        return (0, n.jsx)(_.f5, {
            value: en,
            children: (0, n.jsx)(x.R9, {
                newValue: {
                    sessionId: s,
                    pageCategory: Y,
                    pageSize: B.l5
                },
                children: (0, n.jsx)(C.iM, {
                    tab: X,
                    children: (0, n.jsx)(H, {
                        onClose: P,
                        shouldAddEventListener: !1,
                        children: (0, n.jsxs)("div", {
                            className: a()(D.bx, {
                                [R.jP]: c
                            }),
                            ref: es,
                            tabIndex: -1,
                            children: [(0, n.jsx)(T.G, {
                                handleTransition: Q,
                                selectedTab: X
                            }), null != el && el.type === b.Z.COUNTDOWN && (0, n.jsx)(N.k, {
                                message: el.message,
                                onClick: () => Q(B.G2.HOME),
                                variant: "pink",
                                countdownEndDate: el.countdownEndDate
                            }), (0, n.jsx)("div", {
                                className: a()(D.td, {
                                    [D.RK]: J === B.Pf.VISIBLE,
                                    [D.in]: J === B.Pf.IN,
                                    [D.FD]: J === B.Pf.OUT
                                }),
                                children: (0, n.jsx)(j.A, {
                                    tab: X,
                                    refreshCategories: V,
                                    transitionToTab: Q,
                                    transitionState: J,
                                    categories: K,
                                    updateAnalyticsState: q
                                })
                            })]
                        })
                    })
                })
            })
        })
    }