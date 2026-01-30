/** chunk id: 682829, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => X
});
var i = n(627968),
    l = n(64700),
    s = n(503698),
    r = n.n(s),
    a = n(311907),
    o = n(397927),
    c = n(73153),
    d = n(384904),
    u = n(923408),
    h = n(339048),
    g = n(73825),
    x = n(252452),
    p = n(974544),
    m = n(531260),
    A = n(262077),
    b = n(160946),
    j = n(235986),
    O = n(769015),
    E = n(723588),
    S = n(608699),
    f = n(714308),
    C = n(478407),
    v = n(195043),
    y = n(780964),
    T = n(840065),
    _ = n(351906),
    N = n(628965),
    I = n(615405),
    P = n(295405),
    R = n(166403),
    L = n(469778),
    G = n(954571),
    D = n(975571),
    k = n(927578),
    w = n(637073),
    V = n(887997),
    M = n(177653),
    U = n(159906),
    H = n(758400),
    B = n(788868),
    Y = n(652215),
    F = n(355097),
    z = n(531525),
    K = n(985018),
    W = n(547605);

function J() {
    return (0, i.jsx)(o.ZpM, {
        className: W.wb,
        type: o.ZpM.Types.CUSTOM,
        children: (0, i.jsxs)(j.A, {
            align: j.A.Align.CENTER,
            children: [(0, i.jsx)(O.A, {
                game: null,
                size: O.M.SMALL,
                className: W.pV
            }), (0, i.jsx)("span", {
                className: W.O,
                children: K.intl.string(K.t["jy/hyj"])
            })]
        })
    })
}

function Q() {
    let e = (0, a.bG)([L.A], () => L.A.getForApplication(B.tv));
    return l.useEffect(() => {
        (0, h.LM)(B.tv)
    }, []), (0, i.jsx)(o.nVY, {
        label: K.intl.string(K.t["2GKrvn"]),
        description: K.intl.string(K.t.kNEjGm),
        children: null != e && k.Ay.hasAccountCredit(e) ? (0, i.jsx)(M.A, {
            className: W.fX,
            entitlements: e
        }) : (0, i.jsx)(J, {})
    })
}

function Z() {
    return (0, i.jsx)("hr", {
        className: W.hr
    })
}
let X = function() {
    let e = (0, a.bG)([R.A], () => R.A.getPremiumTypeSubscription()),
        t = (0, A.A)({
            subscriptionFilter: e => H.Hy.has(e.status)
        }),
        n = t.length > 1,
        s = (0, a.bG)([P.A], () => null != e && null != e.paymentSourceId ? P.A.getPaymentSource(e.paymentSourceId) : null, [e]),
        h = (0, a.bG)([R.A], () => R.A.hasFetchedSubscriptions()),
        j = (0, a.bG)([I.A], () => I.A.isBusy),
        O = (0, b.Y)(),
        L = (0, a.bG)([N.A], () => N.A.getSubsection()),
        k = (0, a.bG)([R.A], () => {
            var e, t;
            return null != (e = null == (t = R.A.getActiveApplicationSubscriptions()) ? void 0 : t.length) ? e : 0
        }),
        M = (0, a.bG)([R.A], () => {
            var e;
            return Object.values(null != (e = R.A.getSubscriptions()) ? e : {}).filter(e => e.type === Y.rzx.GUILD).filter(e => e.status !== Y.Dmq.ENDED).length
        }),
        J = (0, m.A)({
            forceFetch: !0
        }),
        X = (0, w.d)(),
        q = null !== e ? e.currentPeriodEnd : void 0,
        $ = !(X && !(J.unactivatedUnits.length > 0)) && (J.fractionalState !== B.xc.NONE || J.unactivatedUnits.length > 0);
    return (l.useEffect(() => (c.h.wait(() => {
        (0, g.zS)(), d.hP(), (0, u.CD)(), d.$o()
    }), function() {
        x.A.clearSubsection()
    }), []), _.A.enabled) ? (0, i.jsx)(p.A, {}) : h && O ? L === F.nR ? (0, i.jsx)(S.A, {
        onGoBack: () => x.A.clearSubsection()
    }) : L === F.PZ ? (0, i.jsx)(C.A, {
        onGoBack: () => x.A.clearSubsection()
    }) : (0, i.jsx)("div", {
        className: W.kL,
        children: (0, i.jsxs)("div", {
            className: W.Qs,
            children: [n ? (0, i.jsx)(H.Sb, {}) : null, null != e ? (0, i.jsx)(H.Ay, {
                subscription: e,
                paymentSource: s,
                busy: j,
                subscriptions: t
            }) : (0, i.jsx)(H.TC, {}), $ && (0, i.jsxs)("section", {
                children: [(0, i.jsx)(o.Heading, {
                    variant: "heading-md/bold",
                    className: W.HL,
                    children: K.intl.string(K.t.Obre8v)
                }), (0, i.jsx)(o.Text, {
                    variant: "text-md/normal",
                    className: W.JU,
                    children: K.intl.format(K.t["7Zi06b"], {
                        helpCenterLink: D.A.getArticleURL(Y.MVz.FRACTIONAL_PREMIUM_ABOUT)
                    })
                }), (0, i.jsx)(V.A, {
                    className: W.fX,
                    fractionalPremiumInfo: J,
                    activationDate: q
                })]
            }), (0, i.jsx)(v.x, {
                setting: z.H.SUBSCRIPTIONS_CREDITS,
                children: (0, i.jsx)(Q, {})
            }), M > 0 && (0, i.jsxs)(i.Fragment, {
                children: [(0, i.jsx)(Z, {}), (0, i.jsx)(E.A, {
                    count: M,
                    onClickManageSubscription: () => (0, T.openUserSettings)(y.X.SUBSCRIPTIONS_PANEL, {
                        section: Y.nc_.SUBSCRIPTIONS,
                        subsection: F.nR
                    })
                })]
            }), k > 0 && (0, i.jsxs)(i.Fragment, {
                children: [(0, i.jsx)(Z, {}), (0, i.jsx)(f.A, {
                    count: k,
                    onClickManageSubscription: () => {
                        (0, T.openUserSettings)(y.X.SUBSCRIPTIONS_PANEL, {
                            section: Y.nc_.SUBSCRIPTIONS,
                            subsection: F.PZ
                        }), G.default.track(Y.HAw.PREMIUM_APPLICATION_SUBSCRIPTION_MANAGE_CTA_CLICKED)
                    }
                })]
            }), (0, i.jsx)(Z, {}), null != e ? (0, i.jsx)(U.A, {
                subscription: e,
                withOverheadSeparator: !1
            }) : null]
        })
    }) : (0, i.jsx)("div", {
        className: r()(W.kL, W.Lq),
        children: (0, i.jsx)(o.y$y, {})
    })
}