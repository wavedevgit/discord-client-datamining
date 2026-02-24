/** chunk id: 737630, original params: e,t,n (module,exports,require) **/
"use strict";
n.r(t), n.d(t, {
    default: () => w
});
var s = n(627968),
    l = n(64700),
    r = n(503698),
    a = n.n(r),
    i = n(835245),
    o = n(417597),
    c = n(192308),
    d = n(397927),
    u = n(944791),
    g = n(444927),
    _ = n(688810),
    m = n(697454),
    h = n(611924),
    p = n(594832),
    f = n(287809),
    x = n(440938),
    E = n(590180),
    C = n(161918),
    A = n(790297),
    b = n(338769),
    S = n(841702),
    v = n(621653),
    L = n(983545),
    I = n(365491),
    j = n(530971),
    k = n(177366),
    T = n(155486),
    O = n(278576),
    N = n(120286),
    y = n(870308),
    R = n(938191),
    B = n(758836),
    M = n(652215),
    P = n(650583),
    D = n(892766);
let H = e => {
        let {
            children: t,
            shouldAddEventListener: n,
            onClose: s
        } = e, r = (0, c.useHasAnyModalOpen)();
        return l.useEffect(() => {
            if (!n || r) return;
            let e = e => {
                e.key === P.N$.Escape && s()
            };
            return window.addEventListener("keydown", e), () => window.removeEventListener("keydown", e)
        }, [n, r, s]), t
    },
    w = function(e) {
        let {
            tab: t = B.G2.HOME
        } = e;
        (0, h.P)(m.a), (0, v.g)();
        let n = (0, g.A)((0, i.A)()),
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
                sessionId: n,
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
        (0, A.uS)(n, X, Y, J, $), (0, A.N0)(X, r);
        let {
            dismissShopButtonDC: ee
        } = (0, y.A)();
        l.useEffect(() => {
            ee()
        }, [ee]), l.useEffect(() => {
            (0, u.I)(M.BVt.COLLECTIBLES_SHOP)
        }, []);
        let et = l.useRef(null),
            en = l.useRef(null);
        (0, d.tjt)(et), l.useEffect(() => {
            en.current?.focus()
        }, []), (0, R.gB)();
        let {
            analyticsLocations: es
        } = (0, A.lC)(X), el = (0, b.V)(X, "collectibles_shop");
        return (0, s.jsx)(_.f5, {
            value: es,
            children: (0, s.jsx)(x.R9, {
                newValue: {
                    sessionId: n,
                    pageCategory: Y,
                    pageSize: B.l5
                },
                children: (0, s.jsx)(C.iM, {
                    tab: X,
                    children: (0, s.jsx)(H, {
                        onClose: P,
                        shouldAddEventListener: !1,
                        children: (0, s.jsxs)("div", {
                            className: a()(D.bx, {
                                [R.jP]: c
                            }),
                            ref: en,
                            tabIndex: -1,
                            children: [(0, s.jsx)(T.G, {
                                handleTransition: Q,
                                selectedTab: X
                            }), null != el && el.type === b.Z.COUNTDOWN && (0, s.jsx)(N.k, {
                                message: el.message,
                                onClick: () => Q(B.G2.HOME),
                                variant: "pink",
                                countdownEndDate: el.countdownEndDate
                            }), (0, s.jsx)("div", {
                                className: a()(D.td, {
                                    [D.RK]: J === B.Pf.VISIBLE,
                                    [D.in]: J === B.Pf.IN,
                                    [D.FD]: J === B.Pf.OUT
                                }),
                                children: (0, s.jsx)(j.A, {
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