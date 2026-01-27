/** Chunk was on 77641 **/
/** chunk id: 384048, original params: e,t,n (module,exports,require) **/
n.d(t, {
    default: () => O
});
var r = n(627968);
n(64700);
var a = n(503698),
    i = n.n(a),
    l = n(158954),
    s = n(421380),
    o = n(397927),
    c = n(793574),
    d = n(688810),
    u = n(915089),
    m = n(976860),
    _ = n(287809),
    E = n(474090),
    p = n(396375),
    x = n(764231),
    N = n(112848),
    T = n(149757),
    g = n(788868),
    b = n(652215),
    v = n(985018),
    j = n(830786);
let O = e => {
    var t, n;
    let {
        transitionState: a,
        onClose: O,
        displayProfile: f
    } = e, {
        analyticsLocations: h
    } = (0, d.Ay)(c.A.TIERED_TENURE_BADGES_MODAL), y = (0, u.GV)(), A = Object.values(g.VD), R = (0, N.p3)(null == f ? void 0 : f.userId), M = (0, N.$F)(), I = _.default.getCurrentUser(), P = null != (t = (0, N.rG)(null != (n = null == f ? void 0 : f.userId) ? n : null == I ? void 0 : I.id)) ? t : new Date, S = (0, E.CC)(null == I ? void 0 : I.premiumType, g.PremiumTypes.TIER_2), U = A.map(e => {
        let {
            id: t,
            nameUnformatted: n,
            tenureReqNumMonths: a
        } = e, s = v.intl.string(n), o = (0, T.I)(t), c = (0, x.T)(t, a), d = null == f, u = d && (null == M ? void 0 : M.id) === t, m = !d && (null == R ? void 0 : R.id) === t, _ = u && (null == M ? void 0 : M.status) === N.Wo.EARNED, E = u && (null == M ? void 0 : M.status) === N.Wo.UPCOMING, p = m || _;
        return (0, r.jsxs)("div", {
            className: i()(j.qS, {
                [j.Ny]: p || E
            }),
            children: [(0, r.jsx)("img", {
                src: o,
                alt: s,
                className: j.pq
            }), (0, r.jsxs)("div", {
                className: j.Vv,
                children: [(0, r.jsx)(l.EYj, {
                    variant: "text-md/semibold",
                    className: j.Vd,
                    children: s
                }), (0, r.jsx)(l.EYj, {
                    variant: "text-xs/normal",
                    children: c
                }), p && (0, r.jsx)(l.EYj, {
                    variant: "text-xs/normal",
                    color: "text-muted",
                    className: j.h8,
                    children: v.intl.formatToPlainString(v.t.Hu4jfi, {
                        date: P
                    })
                }), E && (0, r.jsx)(l.EYj, {
                    variant: "text-xs/normal",
                    color: "text-muted",
                    className: j.h8,
                    children: v.intl.formatToPlainString(v.t.PPL1Il, {
                        days: null == M ? void 0 : M.daysLeft
                    })
                })]
            })]
        }, t)
    }), w = () => {
        (0, m.pX)(b.BVt.APPLICATION_STORE, {
            source: c.A.TIERED_TENURE_BADGES_MODAL,
            sourceLocationStack: h
        }), null == O || O()
    };
    return (0, r.jsxs)(o.EOs, {
        "data-migration-pending": !0,
        transitionState: a,
        "aria-labelledby": y,
        className: i()(j.kL, "theme-dark"),
        parentComponent: "EvolvingTenureBadgeModal",
        children: [(0, r.jsx)(o.s_y, {
            "data-migration-pending": !0,
            onClick: O,
            className: j.b
        }), (0, r.jsx)(o.$mQ, {
            "data-migration-pending": !0,
            className: j.Qs,
            children: S ? (0, r.jsxs)(r.Fragment, {
                children: [(0, r.jsx)(l.EYj, {
                    variant: "display-md",
                    className: j.wx,
                    children: v.intl.string(v.t.Og62j7)
                }), (0, r.jsx)(l.EYj, {
                    variant: "text-md/medium",
                    className: j.uI,
                    children: v.intl.string(v.t.IdAP91)
                }), (0, r.jsx)("div", {
                    className: j.C_,
                    children: U
                }), null != f && f.userId !== (null == I ? void 0 : I.id) && (0, r.jsx)(o.wLn, {
                    "data-migration-pending": !0,
                    className: j.AJ,
                    onClick: w,
                    children: v.intl.string(v.t.hvVgAZ)
                })]
            }) : (0, r.jsxs)(r.Fragment, {
                children: [(0, r.jsx)(l.EYj, {
                    variant: "display-md",
                    className: j.wx,
                    children: v.intl.string(v.t.RtGeFS)
                }), (0, r.jsx)(l.EYj, {
                    variant: "text-md/medium",
                    className: j.uI,
                    children: v.intl.format(v.t.ffatnT, {
                        onClick: w
                    })
                }), (0, r.jsx)("div", {
                    className: j.C_,
                    children: U
                }), (0, r.jsx)(p.A, {
                    className: j.xF,
                    premiumModalAnalyticsLocation: {
                        page: b.liQ.TIERED_TENURE_BADGES_MODAL
                    },
                    textOptions: {
                        subscribeText: v.intl.string(v.t.JST6jl)
                    },
                    subscriptionTier: g.pe.TIER_2,
                    showGradient: !0,
                    color: s.XD.BRAND
                })]
            })
        })]
    })
}