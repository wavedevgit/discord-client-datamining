/** Chunk was on 60449 **/
/** chunk id: 682829, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => q
});
var i = n(627968),
    s = n(64700),
    l = n(503698),
    r = n.n(l),
    a = n(311907),
    o = n(397927),
    c = n(73153),
    d = n(384904),
    u = n(923408),
    g = n(339048),
    h = n(73825),
    x = n(252452),
    A = n(974544),
    p = n(531260),
    m = n(262077),
    j = n(160946),
    O = n(235986),
    E = n(769015),
    b = n(723588),
    S = n(608699),
    v = n(714308),
    C = n(478407),
    f = n(195043),
    T = n(780964),
    N = n(840065),
    _ = n(351906),
    I = n(628965),
    y = n(615405),
    D = n(295405),
    G = n(166403),
    P = n(469778),
    R = n(954571),
    V = n(975571),
    L = n(927578),
    k = n(637073),
    M = n(887997),
    w = n(177653),
    U = n(159906),
    H = n(758400),
    B = n(788868),
    Y = n(652215),
    F = n(355097),
    z = n(531525),
    W = n(985018),
    K = n(547605);

function J() {
    return (0, i.jsx)(o.ZpM, {
        className: K.wb,
        type: o.ZpM.Types.CUSTOM,
        children: (0, i.jsxs)(O.A, {
            align: O.A.Align.CENTER,
            children: [(0, i.jsx)(E.A, {
                game: null,
                size: E.M.SMALL,
                className: K.pV
            }), (0, i.jsx)("span", {
                className: K.O,
                children: W.intl.string(W.t["jy/hyj"])
            })]
        })
    })
}

function Q() {
    let e = (0, a.bG)([P.A], () => P.A.getForApplication(B.tv));
    return s.useEffect(() => {
        (0, g.LM)(B.tv)
    }, []), (0, i.jsx)(o.nVY, {
        label: W.intl.string(W.t["2GKrvn"]),
        description: W.intl.string(W.t.kNEjGm),
        children: null != e && L.Ay.hasAccountCredit(e) ? (0, i.jsx)(w.A, {
            className: K.fX,
            entitlements: e
        }) : (0, i.jsx)(J, {})
    })
}

function X() {
    return (0, i.jsx)("hr", {
        className: K.hr
    })
}
let q = function() {
    let e = (0, a.bG)([G.A], () => G.A.getPremiumTypeSubscription()),
        t = (0, m.A)({
            subscriptionFilter: e => H.Hy.has(e.status)
        }),
        n = t.length > 1,
        l = (0, a.bG)([D.A], () => null != e && null != e.paymentSourceId ? D.A.getPaymentSource(e.paymentSourceId) : null, [e]),
        g = (0, a.bG)([G.A], () => G.A.hasFetchedSubscriptions()),
        O = (0, a.bG)([y.A], () => y.A.isBusy),
        E = (0, j.Y)(),
        P = (0, a.bG)([I.A], () => I.A.getSubsection()),
        L = (0, a.bG)([G.A], () => {
            var e, t;
            return null != (e = null == (t = G.A.getActiveApplicationSubscriptions()) ? void 0 : t.length) ? e : 0
        }),
        w = (0, a.bG)([G.A], () => {
            var e;
            return Object.values(null != (e = G.A.getSubscriptions()) ? e : {}).filter(e => e.type === Y.rzx.GUILD).filter(e => e.status !== Y.Dmq.ENDED).length
        }),
        J = (0, p.A)({
            forceFetch: !0
        }),
        q = (0, k.d)(),
        Z = null !== e ? e.currentPeriodEnd : void 0,
        $ = !(q && !(J.unactivatedUnits.length > 0)) && (J.fractionalState !== B.xc.NONE || J.unactivatedUnits.length > 0);
    return (s.useEffect(() => (c.h.wait(() => {
        (0, h.zS)(), d.hP(), (0, u.CD)(), d.$o()
    }), function() {
        x.A.clearSubsection()
    }), []), _.A.enabled) ? (0, i.jsx)(A.A, {}) : g && E ? P === F.nR ? (0, i.jsx)(S.A, {
        onGoBack: () => x.A.clearSubsection()
    }) : P === F.PZ ? (0, i.jsx)(C.A, {
        onGoBack: () => x.A.clearSubsection()
    }) : (0, i.jsx)("div", {
        className: K.kL,
        children: (0, i.jsxs)("div", {
            className: K.Qs,
            children: [n ? (0, i.jsx)(H.Sb, {}) : null, null != e ? (0, i.jsx)(H.Ay, {
                subscription: e,
                paymentSource: l,
                busy: O,
                subscriptions: t
            }) : (0, i.jsx)(H.TC, {}), $ && (0, i.jsxs)("section", {
                children: [(0, i.jsx)(o.Heading, {
                    variant: "heading-md/bold",
                    className: K.HL,
                    children: W.intl.string(W.t.Obre8v)
                }), (0, i.jsx)(o.Text, {
                    variant: "text-md/normal",
                    className: K.JU,
                    children: W.intl.format(W.t["7Zi06b"], {
                        helpCenterLink: V.A.getArticleURL(Y.MVz.FRACTIONAL_PREMIUM_ABOUT)
                    })
                }), (0, i.jsx)(M.A, {
                    className: K.fX,
                    fractionalPremiumInfo: J,
                    activationDate: Z
                })]
            }), (0, i.jsx)(f.x, {
                setting: z.H.SUBSCRIPTIONS_CREDITS,
                children: (0, i.jsx)(Q, {})
            }), w > 0 && (0, i.jsxs)(i.Fragment, {
                children: [(0, i.jsx)(X, {}), (0, i.jsx)(b.A, {
                    count: w,
                    onClickManageSubscription: () => (0, N.openUserSettings)(T.X.SUBSCRIPTIONS_PANEL, {
                        section: Y.nc_.SUBSCRIPTIONS,
                        subsection: F.nR
                    })
                })]
            }), L > 0 && (0, i.jsxs)(i.Fragment, {
                children: [(0, i.jsx)(X, {}), (0, i.jsx)(v.A, {
                    count: L,
                    onClickManageSubscription: () => {
                        (0, N.openUserSettings)(T.X.SUBSCRIPTIONS_PANEL, {
                            section: Y.nc_.SUBSCRIPTIONS,
                            subsection: F.PZ
                        }), R.default.track(Y.HAw.PREMIUM_APPLICATION_SUBSCRIPTION_MANAGE_CTA_CLICKED)
                    }
                })]
            }), (0, i.jsx)(X, {}), null != e ? (0, i.jsx)(U.A, {
                subscription: e,
                withOverheadSeparator: !1
            }) : null]
        })
    }) : (0, i.jsx)("div", {
        className: r()(K.kL, K.Lq),
        children: (0, i.jsx)(o.y$y, {})
    })
}