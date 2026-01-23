/** Chunk was on 59275 **/
/** chunk id: 737630, original params: e,t,n (module,exports,require) **/
"use strict";
n.r(t), n.d(t, {
    default: () => U
}), n(896048);
var r = n(627968),
    l = n(64700),
    s = n(503698),
    a = n.n(s),
    i = n(835245),
    o = n(417597),
    c = n(192308),
    u = n(397927),
    d = n(944791),
    g = n(444927),
    f = n(688810),
    m = n(697454),
    p = n(611924),
    _ = n(594832),
    b = n(287809),
    h = n(440938),
    E = n(590180),
    v = n(161918),
    C = n(790297),
    A = n(338769),
    x = n(841702),
    S = n(716633),
    O = n(621653),
    y = n(983545),
    j = n(365491),
    T = n(530971),
    L = n(177366),
    I = n(155486),
    k = n(278576),
    N = n(120286),
    R = n(870308),
    P = n(938191),
    B = n(758836),
    w = n(652215),
    D = n(650583),
    M = n(157884),
    H = n(816917);
let G = e => {
        let {
            children: t,
            shouldAddEventListener: n,
            onClose: r
        } = e, s = (0, c.useHasAnyModalOpen)();
        return l.useEffect(() => {
            if (!n || s) return;
            let e = e => {
                e.key === D.N$.Escape && r()
            };
            return window.addEventListener("keydown", e), () => window.removeEventListener("keydown", e)
        }, [n, s, r]), t
    },
    U = function(e) {
        let {
            tab: t = B.G2.HOME
        } = e;
        (0, p.P)(m.a), (0, O.g)();
        let n = (0, g.A)((0, i.A)()),
            s = (0, o.bG)([b.default], () => b.default.getCurrentUser());
        (0, _.pE)();
        let c = (0, P.y)("CollectiblesShop"),
            {
                onClose: D
            } = (0, k.tR)(),
            {
                currentTab: U,
                hasFilters: F
            } = (0, j.v)(),
            z = l.useMemo(() => t === B.G2.HOME && U && F() ? U : t, [t, U, F]),
            {
                categories: V,
                refreshCategories: K
            } = (0, x.Ay)({
                logPerf: !0
            }, {
                sessionId: n,
                tab: z
            }),
            W = (0, S.x)(V),
            [Y, q] = l.useState(),
            Z = (0, o.bG)([E.A], () => {
                var e;
                return null == (e = E.A.getCategory(Y)) ? void 0 : e.name
            }),
            [X, J] = l.useState();
        (0, L.XU)();
        let Q = l.useCallback((e, t) => {
                J(e), q(t)
            }, []),
            {
                selectedTab: $,
                transitionState: ee,
                transitionToTab: et
            } = (0, y.o)(z);
        (0, C.uS)(n, $, Z, ee, X), (0, C.N0)($, s);
        let {
            dismissShopButtonDC: en
        } = (0, R.A)();
        l.useEffect(() => {
            en()
        }, [en]), l.useEffect(() => {
            (0, d.I)(w.BVt.COLLECTIBLES_SHOP)
        }, []);
        let er = l.useRef(null),
            el = l.useRef(null);
        (0, u.tjt)(er), l.useEffect(() => {
            var e;
            null == (e = el.current) || e.focus()
        }, []);
        let {
            analyticsLocations: es
        } = (0, C.lC)($), ea = (0, A.V)($, "collectibles_shop");
        return (0, r.jsx)(f.f5, {
            value: es,
            children: (0, r.jsx)(h.R9, {
                newValue: {
                    sessionId: n,
                    pageCategory: Z,
                    pageSize: B.l5
                },
                children: (0, r.jsx)(v.iM, {
                    tab: $,
                    children: (0, r.jsx)(G, {
                        onClose: D,
                        shouldAddEventListener: !1,
                        children: (0, r.jsxs)("div", {
                            className: a()(M.bx, {
                                [H.T3]: c
                            }),
                            ref: el,
                            tabIndex: -1,
                            children: [(0, r.jsx)(I.G, {
                                handleTransition: et,
                                selectedTab: $
                            }), null != ea && ea.type === A.Z.COUNTDOWN && (0, r.jsx)(N.k, {
                                message: ea.message,
                                onClick: () => et(B.G2.HOME),
                                variant: "pink",
                                countdownEndDate: ea.countdownEndDate
                            }), (0, r.jsx)("div", {
                                className: a()(M.td, {
                                    [M.RK]: ee === B.Pf.VISIBLE,
                                    [M.in]: ee === B.Pf.IN,
                                    [M.FD]: ee === B.Pf.OUT
                                }),
                                children: (0, r.jsx)(T.A, {
                                    tab: $,
                                    refreshCategories: K,
                                    transitionToTab: et,
                                    transitionState: ee,
                                    sortedCategories: W,
                                    updateAnalyticsState: Q
                                })
                            })]
                        })
                    })
                })
            })
        })
    }