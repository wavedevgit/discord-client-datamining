/** chunk id: 761218, original params: e,t,s (module,exports,require) **/
"use strict";
s.d(t, {
    A: () => v
});
var n = s(627968),
    l = s(64700),
    r = s(989349),
    a = s.n(r),
    i = s(158954),
    o = s(311907),
    c = s(230109),
    d = s(688810),
    u = s(733391),
    _ = s(439303),
    g = s(44724),
    m = s(317560),
    h = s(183802),
    p = s(67480),
    f = s(954571),
    x = s(440938),
    E = s(652215),
    C = s(188275),
    b = s(985018),
    A = s(27112);
let S = {
        pageSection: "marvel-rivals-promotional-banner"
    },
    v = e => {
        let {
            onDismiss: t,
            skuIds: s,
            endTime: r,
            tab: v
        } = e, I = (0, o.bG)([p.A], () => s.every(e => null != p.A.get(e)), [s]), L = (0, x.uM)(), {
            analyticsLocations: j
        } = (0, d.Ay)(), k = l.useRef(null), O = l.useRef(!1), T = l.useRef(null);
        l.useEffect(() => {
            for (let e of s)(0, u.qf)(C.Kf, e)
        }, [s]);
        let y = l.useMemo(() => {
                let e = a()(),
                    t = Math.max(a()(r).diff(e, "days"), 1);
                return b.intl.formatToPlainString(b.t.BXpdIg, {
                    days: t
                })
            }, [r]),
            N = l.useCallback((e, t) => {
                f.default.track(E.HAw.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                    collectibles_shop_session_id: L?.sessionId,
                    page_type: v,
                    page_category: L?.pageCategory,
                    page_section: L?.pageSection,
                    tile_type: "MARVEL_RIVALS_PROMOTIONAL_BANNER",
                    cta_name: e,
                    ...null != t ? {
                        sku_id: t
                    } : void 0
                })
            }, [L?.sessionId, L?.pageCategory, L?.pageSection, v]),
            R = l.useCallback(() => {
                (0, g.X)({
                    guildId: C.Kf
                })
            }, []),
            B = l.useCallback(() => {
                N("go_to_game_shop"), (0, g.default)({
                    guildId: C.Kf
                })
            }, [N]),
            M = l.useCallback(e => {
                N("card_click", e), (0, m.R)({
                    skuId: e,
                    applicationId: C.XR,
                    guildId: C.Kf,
                    isStorefront: !1,
                    analyticsLocations: j
                })
            }, [N, j]),
            P = l.useCallback(() => {
                N("dismiss"), t()
            }, [N, t]),
            D = l.useCallback(e => {
                O.current || (e ? null === T.current && (T.current = setTimeout(() => {
                    O.current = !0, T.current = null, f.default.track(E.HAw.COLLECTIBLES_TILE_IMPRESSION, {
                        collectibles_shop_session_id: L?.sessionId,
                        page_type: v,
                        page_category: L?.pageCategory,
                        page_section: L?.pageSection,
                        type: "marvel_rivals_promotional_banner"
                    })
                }, 1e3)) : null !== T.current && (clearTimeout(T.current), T.current = null))
            }, [L?.sessionId, L?.pageCategory, L?.pageSection, v]);
        return (l.useEffect(() => () => {
            null !== T.current && (clearTimeout(T.current), T.current = null)
        }, []), I) ? (0, n.jsx)(c.L, {
            innerRef: k,
            onChange: D,
            threshold: 0,
            children: (0, n.jsx)("div", {
                ref: k,
                className: A.YB,
                children: (0, n.jsxs)("div", {
                    className: A.kL,
                    children: [(0, n.jsx)("div", {
                        className: A.b,
                        children: (0, n.jsx)(i.JnF, {
                            size: "sm",
                            variant: "icon-only",
                            onClick: P
                        })
                    }), (0, n.jsxs)("div", {
                        className: A.xf,
                        children: [null != y && (0, n.jsx)("div", {
                            className: A.qw,
                            children: (0, n.jsx)(i.Exy, {
                                type: {
                                    text: `${b.intl.string(b.t.yYEZGi)} (${y})`
                                },
                                variant: "brand"
                            })
                        }), (0, n.jsxs)("div", {
                            className: A.B5,
                            children: [(0, n.jsx)(i.DZT, {
                                variant: "heading-xl/semibold",
                                color: "always-white",
                                children: b.intl.string(b.t["z/QEIP"])
                            }), (0, n.jsx)(i.$nd, {
                                variant: "overlay-primary",
                                icon: i.I9m,
                                iconPosition: "end",
                                text: b.intl.string(b.t["kq/75v"]),
                                onMouseDown: R,
                                onClick: B
                            })]
                        })]
                    }), (0, n.jsx)(_.E9, {
                        newValue: S,
                        children: (0, n.jsx)("div", {
                            className: A.$2,
                            children: s.map((e, t) => (0, n.jsx)(h.A, {
                                skuId: e,
                                applicationId: C.XR,
                                guildId: C.Kf,
                                positionInSection: t,
                                onClick: () => M(e)
                            }, e))
                        })
                    })]
                })
            })
        }) : null
    }