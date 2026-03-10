/** chunk id: 682829 params = (module,exports,require) **/
n.d(t, {
    A: () => Q
});
var i = n(627968),
    s = n(64700),
    l = n(503698),
    a = n.n(l),
    r = n(311907),
    o = n(397927),
    d = n(73153),
    c = n(384904),
    u = n(923408),
    _ = n(339048),
    g = n(73825),
    m = n(252452),
    A = n(974544),
    h = n(531260),
    p = n(262077),
    x = n(160946),
    E = n(235986),
    T = n(769015),
    S = n(723588),
    C = n(608699),
    f = n(714308),
    I = n(478407),
    b = n(195043),
    N = n(780964),
    v = n(840065),
    j = n(351906),
    O = n(628965),
    R = n(287809),
    y = n(615405),
    P = n(295405),
    D = n(166403),
    L = n(469778),
    G = n(954571),
    M = n(975571),
    U = n(927578),
    k = n(637073),
    V = n(887997),
    w = n(177653),
    H = n(159906),
    B = n(758400),
    F = n(788868),
    Y = n(652215),
    z = n(355097),
    X = n(531525),
    W = n(985018),
    K = n(547605);

function Z() {
    return (0, i.jsx)(o.ZpM, {
        className: K.wb,
        type: o.ZpM.Types.CUSTOM,
        children: (0, i.jsxs)(E.A, {
            align: E.A.Align.CENTER,
            children: [(0, i.jsx)(T.A, {
                game: null,
                size: T.M.SMALL,
                className: K.pV
            }), (0, i.jsx)("span", {
                className: K.O,
                children: W.intl.string(W.t["jy/hyj"])
            })]
        })
    })
}

function q() {
    let e = (0, r.bG)([L.A], () => L.A.getForApplication(F.tv));
    return s.useEffect(() => {
        (0, _.LM)(F.tv)
    }, []), (0, i.jsx)(o.nVY, {
        label: W.intl.string(W.t["2GKrvn"]),
        description: W.intl.string(W.t.kNEjGm),
        children: null != e && U.Ay.hasAccountCredit(e) ? (0, i.jsx)(w.A, {
            className: K.fX,
            entitlements: e
        }) : (0, i.jsx)(Z, {})
    })
}

function J() {
    return (0, i.jsx)("hr", {
        className: K.hr
    })
}
let Q = function() {
    var e;
    let t = (0, r.bG)([D.A], () => D.A.getPremiumTypeSubscription()),
        n = (0, p.A)({
            subscriptionFilter: e => B.Hy.has(e.status)
        }),
        l = (0, r.bG)([R.default], () => R.default.getCurrentUser()),
        _ = n.length > 1,
        E = (0, r.bG)([P.A], () => null != t && null != t.paymentSourceId ? P.A.getPaymentSource(t.paymentSourceId) : null, [t]),
        T = (0, r.bG)([D.A], () => D.A.hasFetchedSubscriptions()),
        L = (0, r.bG)([y.A], () => y.A.isBusy),
        U = (0, x.Y)(),
        w = (0, r.bG)([O.A], () => O.A.getSubsection()),
        Z = (0, r.bG)([D.A], () => D.A.getActiveApplicationSubscriptions()?.length ?? 0),
        Q = (0, r.bG)([D.A], () => Object.values(D.A.getSubscriptions() ?? {}).filter(e => e.type === Y.rzx.GUILD).filter(e => e.status !== Y.Dmq.ENDED).length),
        $ = (0, h.A)({
            forceFetch: !0
        }),
        ee = (0, k.d)(),
        et = null !== t ? t.currentPeriodEnd : void 0,
        en = !(ee && !($.unactivatedUnits.length > 0)) && ($.fractionalState !== F.xc.NONE || $.unactivatedUnits.length > 0);
    return (s.useEffect(() => (d.h.wait(() => {
        (0, g.zS)(), c.hP(), (0, u.CD)(), c.$o()
    }), function() {
        m.A.clearSubsection()
    }), []), j.A.enabled) ? (0, i.jsx)(A.A, {}) : T && U ? w === z.nR ? (0, i.jsx)(C.A, {
        onGoBack: () => m.A.clearSubsection()
    }) : w === z.PZ ? (0, i.jsx)(I.A, {
        onGoBack: () => m.A.clearSubsection()
    }) : (0, i.jsx)("div", {
        className: K.kL,
        children: (0, i.jsxs)("div", {
            className: K.Qs,
            children: [_ ? (0, i.jsx)(B.Sb, {}) : null, null != t ? (0, i.jsx)(B.Ay, {
                subscription: t,
                paymentSource: E,
                busy: L,
                subscriptions: n
            }) : (0, i.jsx)(B.TC, {}), en && (e = !!l?.isPremiumWithPremiumGroup(), (0, i.jsxs)("section", {
                children: [(0, i.jsx)(o.Heading, {
                    variant: "heading-md/bold",
                    className: K.HL,
                    children: W.intl.string(W.t.Obre8v)
                }), (0, i.jsx)(o.Text, {
                    variant: "text-md/normal",
                    className: K.JU,
                    children: W.intl.format(W.t["7Zi06b"], {
                        helpCenterLink: M.A.getArticleURL(Y.MVz.FRACTIONAL_PREMIUM_ABOUT)
                    })
                }), (0, i.jsx)(V.A, {
                    className: K.fX,
                    fractionalPremiumInfo: $,
                    activationDate: et,
                    hasPremiumGroup: e
                })]
            })), (0, i.jsx)(b.x, {
                setting: X.H.SUBSCRIPTIONS_CREDITS,
                children: (0, i.jsx)(q, {})
            }), Q > 0 && (0, i.jsxs)(i.Fragment, {
                children: [(0, i.jsx)(J, {}), (0, i.jsx)(S.A, {
                    count: Q,
                    onClickManageSubscription: () => (0, v.openUserSettings)(N.X.SUBSCRIPTIONS_PANEL, {
                        section: Y.nc_.SUBSCRIPTIONS,
                        subsection: z.nR
                    })
                })]
            }), Z > 0 && (0, i.jsxs)(i.Fragment, {
                children: [(0, i.jsx)(J, {}), (0, i.jsx)(f.A, {
                    count: Z,
                    onClickManageSubscription: () => {
                        (0, v.openUserSettings)(N.X.SUBSCRIPTIONS_PANEL, {
                            section: Y.nc_.SUBSCRIPTIONS,
                            subsection: z.PZ
                        }), G.default.track(Y.HAw.PREMIUM_APPLICATION_SUBSCRIPTION_MANAGE_CTA_CLICKED)
                    }
                })]
            }), (0, i.jsx)(J, {}), null != t ? (0, i.jsx)(H.A, {
                subscription: t,
                withOverheadSeparator: !1
            }) : null]
        })
    }) : (0, i.jsx)("div", {
        className: a()(K.kL, K.Lq),
        children: (0, i.jsx)(o.y$y, {})
    })
}