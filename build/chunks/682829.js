/** chunk id: 682829, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => Q
});
var r = n(627968),
    l = n(64700),
    i = n(503698),
    s = n.n(i),
    a = n(311907),
    o = n(397927),
    c = n(73153),
    u = n(384904),
    d = n(923408),
    p = n(339048),
    h = n(73825),
    g = n(252452),
    f = n(974544),
    m = n(531260),
    b = n(262077),
    A = n(160946),
    y = n(235986),
    O = n(769015),
    j = n(723588),
    x = n(608699),
    _ = n(714308),
    v = n(478407),
    E = n(195043),
    C = n(780964),
    S = n(840065),
    I = n(351906),
    N = n(628965),
    T = n(615405),
    P = n(295405),
    w = n(166403),
    R = n(469778),
    D = n(954571),
    L = n(975571),
    M = n(927578),
    G = n(637073),
    k = n(887997),
    U = n(177653),
    V = n(159906),
    B = n(758400),
    H = n(788868),
    F = n(652215),
    Y = n(355097),
    K = n(531525),
    W = n(985018),
    z = n(547605);

function X() {
    return (0, r.jsx)(o.ZpM, {
        className: z.wb,
        type: o.ZpM.Types.CUSTOM,
        children: (0, r.jsxs)(y.A, {
            align: y.A.Align.CENTER,
            children: [(0, r.jsx)(O.A, {
                game: null,
                size: O.M.SMALL,
                className: z.pV
            }), (0, r.jsx)("span", {
                className: z.O,
                children: W.intl.string(W.t["jy/hyj"])
            })]
        })
    })
}

function q() {
    let e = (0, a.bG)([R.A], () => R.A.getForApplication(H.tv));
    return l.useEffect(() => {
        (0, p.LM)(H.tv)
    }, []), (0, r.jsx)(o.nVY, {
        label: W.intl.string(W.t["2GKrvn"]),
        description: W.intl.string(W.t.kNEjGm),
        children: null != e && M.Ay.hasAccountCredit(e) ? (0, r.jsx)(U.A, {
            className: z.fX,
            entitlements: e
        }) : (0, r.jsx)(X, {})
    })
}

function J() {
    return (0, r.jsx)("hr", {
        className: z.hr
    })
}
let Q = function() {
    let e = (0, a.bG)([w.A], () => w.A.getPremiumTypeSubscription()),
        t = (0, b.A)({
            subscriptionFilter: e => B.Hy.has(e.status)
        }),
        n = t.length > 1,
        i = (0, a.bG)([P.A], () => null != e && null != e.paymentSourceId ? P.A.getPaymentSource(e.paymentSourceId) : null, [e]),
        p = (0, a.bG)([w.A], () => w.A.hasFetchedSubscriptions()),
        y = (0, a.bG)([T.A], () => T.A.isBusy),
        O = (0, A.Y)(),
        R = (0, a.bG)([N.A], () => N.A.getSubsection()),
        M = (0, a.bG)([w.A], () => {
            var e, t;
            return null != (e = null == (t = w.A.getActiveApplicationSubscriptions()) ? void 0 : t.length) ? e : 0
        }),
        U = (0, a.bG)([w.A], () => {
            var e;
            return Object.values(null != (e = w.A.getSubscriptions()) ? e : {}).filter(e => e.type === F.rzx.GUILD).filter(e => e.status !== F.Dmq.ENDED).length
        }),
        X = (0, m.A)({
            forceFetch: !0
        }),
        Q = (0, G.d)(),
        Z = null !== e ? e.currentPeriodEnd : void 0,
        $ = !(Q && !(X.unactivatedUnits.length > 0)) && (X.fractionalState !== H.xc.NONE || X.unactivatedUnits.length > 0);
    return (l.useEffect(() => (c.h.wait(() => {
        (0, h.zS)(), u.hP(), (0, d.CD)(), u.$o()
    }), function() {
        g.A.clearSubsection()
    }), []), I.A.enabled) ? (0, r.jsx)(f.A, {}) : p && O ? R === Y.nR ? (0, r.jsx)(x.A, {
        onGoBack: () => g.A.clearSubsection()
    }) : R === Y.PZ ? (0, r.jsx)(v.A, {
        onGoBack: () => g.A.clearSubsection()
    }) : (0, r.jsx)("div", {
        className: z.kL,
        children: (0, r.jsxs)("div", {
            className: z.Qs,
            children: [n ? (0, r.jsx)(B.Sb, {}) : null, null != e ? (0, r.jsx)(B.Ay, {
                subscription: e,
                paymentSource: i,
                busy: y,
                subscriptions: t
            }) : (0, r.jsx)(B.TC, {}), $ && (0, r.jsxs)("section", {
                children: [(0, r.jsx)(o.Heading, {
                    variant: "heading-md/bold",
                    className: z.HL,
                    children: W.intl.string(W.t.Obre8v)
                }), (0, r.jsx)(o.Text, {
                    variant: "text-md/normal",
                    className: z.JU,
                    children: W.intl.format(W.t["7Zi06b"], {
                        helpCenterLink: L.A.getArticleURL(F.MVz.FRACTIONAL_PREMIUM_ABOUT)
                    })
                }), (0, r.jsx)(k.A, {
                    className: z.fX,
                    fractionalPremiumInfo: X,
                    activationDate: Z
                })]
            }), (0, r.jsx)(E.x, {
                setting: K.H.SUBSCRIPTIONS_CREDITS,
                children: (0, r.jsx)(q, {})
            }), U > 0 && (0, r.jsxs)(r.Fragment, {
                children: [(0, r.jsx)(J, {}), (0, r.jsx)(j.A, {
                    count: U,
                    onClickManageSubscription: () => (0, S.openUserSettings)(C.X.SUBSCRIPTIONS_PANEL, {
                        section: F.nc_.SUBSCRIPTIONS,
                        subsection: Y.nR
                    })
                })]
            }), M > 0 && (0, r.jsxs)(r.Fragment, {
                children: [(0, r.jsx)(J, {}), (0, r.jsx)(_.A, {
                    count: M,
                    onClickManageSubscription: () => {
                        (0, S.openUserSettings)(C.X.SUBSCRIPTIONS_PANEL, {
                            section: F.nc_.SUBSCRIPTIONS,
                            subsection: Y.PZ
                        }), D.default.track(F.HAw.PREMIUM_APPLICATION_SUBSCRIPTION_MANAGE_CTA_CLICKED)
                    }
                })]
            }), (0, r.jsx)(J, {}), null != e ? (0, r.jsx)(V.A, {
                subscription: e,
                withOverheadSeparator: !1
            }) : null]
        })
    }) : (0, r.jsx)("div", {
        className: s()(z.kL, z.Lq),
        children: (0, r.jsx)(o.y$y, {})
    })
}