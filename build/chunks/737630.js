/** chunk id: 737630 params = (module,exports,require) **/
"use strict";
s.r(t), s.d(t, {
    default: () => G
});
var n = s(627968),
    r = s(64700),
    l = s(503698),
    a = s.n(l),
    i = s(835245),
    o = s(417597),
    c = s(192308),
    d = s(397927),
    u = s(944791),
    _ = s(444927),
    g = s(688810),
    m = s(726249),
    h = s(475073),
    p = s(611924),
    f = s(594832),
    x = s(287809),
    E = s(440938),
    b = s(590180),
    C = s(161918),
    A = s(790297),
    S = s(338769),
    v = s(841702),
    I = s(621653),
    L = s(983545),
    j = s(365491),
    k = s(530971),
    T = s(177366),
    O = s(155486),
    N = s(278576),
    y = s(120286),
    R = s(870308),
    B = s(938191),
    P = s(758836),
    M = s(652215),
    D = s(650583),
    w = s(985018),
    H = s(229781);
let F = e => {
        let {
            children: t,
            shouldAddEventListener: s,
            onClose: n
        } = e, l = (0, c.useHasAnyModalOpen)();
        return r.useEffect(() => {
            if (!s || l) return;
            let e = e => {
                e.key === D.N$.Escape && n()
            };
            return window.addEventListener("keydown", e), () => window.removeEventListener("keydown", e)
        }, [s, l, n]), t
    },
    G = function(e) {
        let {
            tab: t = P.G2.HOME
        } = e;
        (0, p.P)(h.a), (0, I.g)();
        let s = (0, _.A)((0, i.A)()),
            l = (0, o.bG)([x.default], () => x.default.getCurrentUser());
        (0, f.pE)();
        let c = (0, B.yB)("CollectiblesShop"),
            {
                onClose: D
            } = (0, N.tR)(),
            {
                currentTab: G,
                hasFilters: U
            } = (0, j.v)(),
            V = r.useMemo(() => t === P.G2.HOME && null != G && U() ? G : t, [t, G, U]),
            {
                categories: K,
                refreshCategories: W
            } = (0, v.Ay)({
                logPerf: !0
            }, {
                sessionId: s,
                tab: V
            }),
            z = r.useMemo(() => [...K.values()], [K]),
            [Y, $] = r.useState(),
            Z = (0, o.bG)([b.A], () => b.A.getCategory(Y)?.name),
            [q, X] = r.useState();
        (0, T.XU)(s);
        let J = r.useCallback((e, t) => {
                X(e), $(t)
            }, []),
            {
                selectedTab: Q,
                transitionState: ee,
                transitionToTab: et
            } = (0, L.o)(V);
        (0, m.HU)({
            location: w.intl.string(w.t.pWG4ze)
        }), (0, A.uS)(s, Q, Z, ee, q), (0, A.N0)(Q, l);
        let {
            dismissShopButtonDC: es
        } = (0, R.A)();
        r.useEffect(() => {
            es()
        }, [es]), r.useEffect(() => {
            (0, u.I)(M.BVt.COLLECTIBLES_SHOP)
        }, []);
        let en = r.useRef(null),
            er = r.useRef(null);
        (0, d.tjt)(en), r.useEffect(() => {
            er.current?.focus()
        }, []), (0, B.gB)();
        let {
            analyticsLocations: el
        } = (0, A.lC)(Q), ea = (0, S.V)(Q, "collectibles_shop");
        return (0, n.jsx)(g.f5, {
            value: el,
            children: (0, n.jsx)(E.R9, {
                newValue: {
                    sessionId: s,
                    pageCategory: Z,
                    pageSize: P.l5
                },
                children: (0, n.jsx)(C.iM, {
                    tab: Q,
                    children: (0, n.jsx)(F, {
                        onClose: D,
                        shouldAddEventListener: !1,
                        children: (0, n.jsxs)("div", {
                            className: a()(H.bx, {
                                [B.jP]: c
                            }),
                            ref: er,
                            tabIndex: -1,
                            children: [(0, n.jsx)(O.G, {
                                handleTransition: et,
                                selectedTab: Q
                            }), null != ea && ea.type === S.Z.COUNTDOWN && (0, n.jsx)(y.k, {
                                message: ea.message,
                                onClick: () => et(P.G2.HOME),
                                variant: "pink",
                                countdownEndDate: ea.countdownEndDate
                            }), (0, n.jsx)("div", {
                                className: a()(H.td, {
                                    [H.RK]: ee === P.Pf.VISIBLE,
                                    [H.in]: ee === P.Pf.IN,
                                    [H.FD]: ee === P.Pf.OUT
                                }),
                                children: (0, n.jsx)(k.A, {
                                    tab: Q,
                                    refreshCategories: W,
                                    transitionToTab: et,
                                    transitionState: ee,
                                    categories: z,
                                    updateAnalyticsState: J
                                })
                            })]
                        })
                    })
                })
            })
        })
    }