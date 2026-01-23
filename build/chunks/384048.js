/** Chunk was on 77641 **/
/** chunk id: 384048, original params: a,e,t (module,exports,require) **/
t.d(e, {
    default: () => b
});
var n = t(627968);
t(64700);
var s = t(503698),
    i = t.n(s),
    l = t(158954),
    d = t(421380),
    r = t(397927),
    c = t(793574),
    o = t(688810),
    m = t(915089),
    u = t(976860),
    x = t(287809),
    g = t(474090),
    j = t(396375),
    _ = t(764231),
    v = t(112848),
    E = t(149757),
    h = t(788868),
    p = t(652215),
    N = t(985018),
    T = t(830786);
let b = a => {
    var e, t;
    let {
        transitionState: s,
        onClose: b,
        displayProfile: A
    } = a, {
        analyticsLocations: I
    } = (0, o.Ay)(c.A.TIERED_TENURE_BADGES_MODAL), C = (0, m.GV)(), D = Object.values(h.VD), S = (0, v.p3)(null == A ? void 0 : A.userId), y = (0, v.$F)(), L = x.default.getCurrentUser(), R = null != (e = (0, v.rG)(null != (t = null == A ? void 0 : A.userId) ? t : null == L ? void 0 : L.id)) ? e : new Date, k = (0, g.CC)(null == L ? void 0 : L.premiumType, h.PremiumTypes.TIER_2), B = D.map(a => {
        let {
            id: e,
            nameUnformatted: t,
            tenureReqNumMonths: s
        } = a, d = N.intl.string(t), r = (0, E.I)(e), c = (0, _.T)(e, s), o = null == A, m = o && (null == y ? void 0 : y.id) === e, u = !o && (null == S ? void 0 : S.id) === e, x = m && (null == y ? void 0 : y.status) === v.Wo.EARNED, g = m && (null == y ? void 0 : y.status) === v.Wo.UPCOMING, j = u || x;
        return (0, n.jsxs)("div", {
            className: i()(T.qS, {
                [T.Ny]: j || g
            }),
            children: [(0, n.jsx)("img", {
                src: r,
                alt: d,
                className: T.pq
            }), (0, n.jsxs)("div", {
                className: T.Vv,
                children: [(0, n.jsx)(l.EYj, {
                    variant: "text-md/semibold",
                    className: T.Vd,
                    children: d
                }), (0, n.jsx)(l.EYj, {
                    variant: "text-xs/normal",
                    children: c
                }), j && (0, n.jsx)(l.EYj, {
                    variant: "text-xs/normal",
                    color: "text-muted",
                    className: T.h8,
                    children: N.intl.formatToPlainString(N.t.Hu4jfi, {
                        date: R
                    })
                }), g && (0, n.jsx)(l.EYj, {
                    variant: "text-xs/normal",
                    color: "text-muted",
                    className: T.h8,
                    children: N.intl.formatToPlainString(N.t.PPL1Il, {
                        days: null == y ? void 0 : y.daysLeft
                    })
                })]
            })]
        }, e)
    }), O = () => {
        (0, u.pX)(p.BVt.APPLICATION_STORE, {
            source: c.A.TIERED_TENURE_BADGES_MODAL,
            sourceLocationStack: I
        }), null == b || b()
    };
    return (0, n.jsxs)(r.EOs, {
        "data-migration-pending": !0,
        transitionState: s,
        "aria-labelledby": C,
        className: i()(T.kL, "theme-dark"),
        parentComponent: "EvolvingTenureBadgeModal",
        children: [(0, n.jsx)(r.s_y, {
            "data-migration-pending": !0,
            onClick: b,
            className: T.b
        }), (0, n.jsx)(r.$mQ, {
            "data-migration-pending": !0,
            className: T.Qs,
            children: k ? (0, n.jsxs)(n.Fragment, {
                children: [(0, n.jsx)(l.EYj, {
                    variant: "display-md",
                    className: T.wx,
                    children: N.intl.string(N.t.Og62j7)
                }), (0, n.jsx)(l.EYj, {
                    variant: "text-md/medium",
                    className: T.uI,
                    children: N.intl.string(N.t.IdAP91)
                }), (0, n.jsx)("div", {
                    className: T.C_,
                    children: B
                }), null != A && A.userId !== (null == L ? void 0 : L.id) && (0, n.jsx)(r.wLn, {
                    "data-migration-pending": !0,
                    className: T.AJ,
                    onClick: O,
                    children: N.intl.string(N.t.hvVgAZ)
                })]
            }) : (0, n.jsxs)(n.Fragment, {
                children: [(0, n.jsx)(l.EYj, {
                    variant: "display-md",
                    className: T.wx,
                    children: N.intl.string(N.t.RtGeFS)
                }), (0, n.jsx)(l.EYj, {
                    variant: "text-md/medium",
                    className: T.uI,
                    children: N.intl.format(N.t.ffatnT, {
                        onClick: O
                    })
                }), (0, n.jsx)("div", {
                    className: T.C_,
                    children: B
                }), (0, n.jsx)(j.A, {
                    className: T.xF,
                    premiumModalAnalyticsLocation: {
                        page: p.liQ.TIERED_TENURE_BADGES_MODAL
                    },
                    textOptions: {
                        subscribeText: N.intl.string(N.t.JST6jl)
                    },
                    subscriptionTier: h.pe.TIER_2,
                    showGradient: !0,
                    color: d.XD.BRAND
                })]
            })
        })]
    })
}