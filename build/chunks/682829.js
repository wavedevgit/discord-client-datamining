/** Chunk was on web.js **/
/** chunk id: 682829, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => J
});
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(311907),
    l = n(397927),
    c = n(73153),
    u = n(384904),
    d = n(923408),
    f = n(339048),
    p = n(73825),
    _ = n(252452),
    h = n(974544),
    m = n(531260),
    g = n(262077),
    E = n(160946),
    y = n(235986),
    b = n(769015),
    O = n(723588),
    v = n(608699),
    A = n(714308),
    I = n(478407),
    S = n(195043),
    T = n(780964),
    C = n(840065),
    N = n(351906),
    w = n(628965),
    R = n(615405),
    P = n(295405),
    D = n(166403),
    x = n(469778),
    L = n(954571),
    j = n(975571),
    M = n(927578),
    k = n(637073),
    U = n(887997),
    G = n(177653),
    V = n(159906),
    F = n(758400),
    B = n(788868),
    H = n(652215),
    Y = n(355097),
    W = n(531525),
    K = n(985018),
    z = n(547605);

function q() {
    return (0, r.jsx)(l.ZpM, {
        className: z.wb,
        type: l.ZpM.Types.CUSTOM,
        children: (0, r.jsxs)(y.A, {
            align: y.A.Align.CENTER,
            children: [(0, r.jsx)(b.A, {
                game: null,
                size: b.M.SMALL,
                className: z.pV
            }), (0, r.jsx)("span", {
                className: z.O,
                children: K.intl.string(K.t["jy/hyj"])
            })]
        })
    })
}

function Z() {
    let e = (0, o.bG)([x.A], () => x.A.getForApplication(B.tv));
    return i.useEffect(() => {
        (0, f.LM)(B.tv)
    }, []), (0, r.jsx)(l.nVY, {
        label: K.intl.string(K.t["2GKrvn"]),
        description: K.intl.string(K.t.kNEjGm),
        children: null != e && M.Ay.hasAccountCredit(e) ? (0, r.jsx)(G.A, {
            className: z.fX,
            entitlements: e
        }) : (0, r.jsx)(q, {})
    })
}

function X(e, t) {
    return (0, r.jsxs)("section", {
        children: [(0, r.jsx)(l.Heading, {
            variant: "heading-md/bold",
            className: z.HL,
            children: K.intl.string(K.t.Obre8v)
        }), (0, r.jsx)(l.Text, {
            variant: "text-md/normal",
            className: z.JU,
            children: K.intl.format(K.t["7Zi06b"], {
                helpCenterLink: j.A.getArticleURL(H.MVz.FRACTIONAL_PREMIUM_ABOUT)
            })
        }), (0, r.jsx)(U.A, {
            className: z.fX,
            fractionalPremiumInfo: e,
            activationDate: t
        })]
    })
}

function Q() {
    return (0, r.jsx)("hr", {
        className: z.hr
    })
}
let J = function() {
    let e = (0, o.bG)([D.A], () => D.A.getPremiumTypeSubscription()),
        t = (0, g.A)({
            subscriptionFilter: e => F.Hy.has(e.status)
        }),
        n = t.length > 1,
        a = (0, o.bG)([P.A], () => null != e && null != e.paymentSourceId ? P.A.getPaymentSource(e.paymentSourceId) : null, [e]),
        f = (0, o.bG)([D.A], () => D.A.hasFetchedSubscriptions()),
        y = (0, o.bG)([R.A], () => R.A.isBusy),
        b = (0, E.Y)(),
        x = (0, o.bG)([w.A], () => w.A.getSubsection()),
        j = (0, o.bG)([D.A], () => {
            var e, t;
            return null != (e = null == (t = D.A.getActiveApplicationSubscriptions()) ? void 0 : t.length) ? e : 0
        }),
        M = (0, o.bG)([D.A], () => {
            var e;
            return Object.values(null != (e = D.A.getSubscriptions()) ? e : {}).filter(e => e.type === H.rzx.GUILD).filter(e => e.status !== H.Dmq.ENDED).length
        }),
        U = (0, m.A)({
            forceFetch: !0
        }),
        G = (0, k.d)(),
        K = null !== e ? e.currentPeriodEnd : void 0,
        q = !(G && !(U.unactivatedUnits.length > 0)) && (U.fractionalState !== B.xc.NONE || U.unactivatedUnits.length > 0);
    return (i.useEffect(() => (c.h.wait(() => {
        (0, p.zS)(), u.hP(), (0, d.CD)(), u.$o()
    }), function() {
        _.A.clearSubsection()
    }), []), N.A.enabled) ? (0, r.jsx)(h.A, {}) : f && b ? x === Y.nR ? (0, r.jsx)(v.A, {
        onGoBack: () => _.A.clearSubsection()
    }) : x === Y.PZ ? (0, r.jsx)(I.A, {
        onGoBack: () => _.A.clearSubsection()
    }) : (0, r.jsx)("div", {
        className: z.kL,
        children: (0, r.jsxs)("div", {
            className: z.Qs,
            children: [n ? (0, r.jsx)(F.Sb, {}) : null, null != e ? (0, r.jsx)(F.Ay, {
                subscription: e,
                paymentSource: a,
                busy: y,
                subscriptions: t
            }) : (0, r.jsx)(F.TC, {}), q && X(U, K), (0, r.jsx)(S.x, {
                setting: W.H.SUBSCRIPTIONS_CREDITS,
                children: (0, r.jsx)(Z, {})
            }), M > 0 && (0, r.jsxs)(r.Fragment, {
                children: [(0, r.jsx)(Q, {}), (0, r.jsx)(O.A, {
                    count: M,
                    onClickManageSubscription: () => (0, C.openUserSettings)(T.X.SUBSCRIPTIONS_PANEL, {
                        section: H.nc_.SUBSCRIPTIONS,
                        subsection: Y.nR
                    })
                })]
            }), j > 0 && (0, r.jsxs)(r.Fragment, {
                children: [(0, r.jsx)(Q, {}), (0, r.jsx)(A.A, {
                    count: j,
                    onClickManageSubscription: () => {
                        (0, C.openUserSettings)(T.X.SUBSCRIPTIONS_PANEL, {
                            section: H.nc_.SUBSCRIPTIONS,
                            subsection: Y.PZ
                        }), L.default.track(H.HAw.PREMIUM_APPLICATION_SUBSCRIPTION_MANAGE_CTA_CLICKED)
                    }
                })]
            }), (0, r.jsx)(Q, {}), null != e ? (0, r.jsx)(V.A, {
                subscription: e,
                withOverheadSeparator: !1
            }) : null]
        })
    }) : (0, r.jsx)("div", {
        className: s()(z.kL, z.Lq),
        children: (0, r.jsx)(l.y$y, {})
    })
}