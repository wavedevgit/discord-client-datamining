/** chunk id: 682829 params = (module,exports,require) **/
n.d(t, {
    A: () => K
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
    m = n(73825),
    g = n(974544),
    A = n(531260),
    h = n(262077),
    x = n(160946),
    p = n(235986),
    T = n(769015),
    E = n(723588),
    S = n(608699),
    C = n(714308),
    f = n(478407),
    b = n(351906),
    N = n(287809),
    I = n(615405),
    v = n(295405),
    j = n(166403),
    y = n(469778),
    R = n(954571),
    O = n(975571),
    P = n(927578),
    D = n(115063),
    L = n(637073),
    G = n(887997),
    M = n(177653),
    U = n(159906),
    k = n(758400),
    V = n(790284),
    w = n(788868),
    B = n(652215),
    H = n(355097),
    F = n(985018),
    Y = n(547605);

function z() {
    return (0, i.jsx)(o.ZpM, {
        className: Y.wb,
        type: o.ZpM.Types.CUSTOM,
        children: (0, i.jsxs)(p.A, {
            align: p.A.Align.CENTER,
            children: [(0, i.jsx)(T.A, {
                game: null,
                size: T.M.SMALL,
                className: Y.pV
            }), (0, i.jsx)("span", {
                className: Y.O,
                children: F.intl.string(F.t["jy/hyj"])
            })]
        })
    })
}

function X() {
    let e = (0, r.bG)([y.A], () => y.A.getForApplication(w.tv));
    return s.useEffect(() => {
        (0, _.LM)(w.tv)
    }, []), (0, i.jsx)(o.nVY, {
        label: F.intl.string(F.t["2GKrvn"]),
        description: F.intl.string(F.t.kNEjGm),
        children: null != e && P.Ay.hasAccountCredit(e) ? (0, i.jsx)(M.A, {
            className: Y.fX,
            entitlements: e
        }) : (0, i.jsx)(z, {})
    })
}

function W() {
    return (0, i.jsx)("hr", {
        className: Y.hr
    })
}
let K = function() {
    var e;
    let t = (0, r.bG)([j.A], () => j.A.getPremiumTypeSubscription()),
        n = (0, h.A)({
            subscriptionFilter: e => k.Hy.has(e.status)
        }),
        l = (0, r.bG)([N.default], () => N.default.getCurrentUser()),
        _ = n.length > 1,
        p = (0, r.bG)([v.A], () => null != t && null != t.paymentSourceId ? v.A.getPaymentSource(t.paymentSourceId) : null, [t]),
        T = (0, r.bG)([j.A], () => j.A.hasFetchedSubscriptions()),
        y = (0, r.bG)([I.A], () => I.A.isBusy),
        P = (0, x.Y)(),
        M = V.A.useField("subsection"),
        z = s.useRef(M);
    s.useEffect(() => {
        M !== z.current && ((0, D.iY)({
            originPane: B.nc_.SUBSCRIPTIONS,
            destinationPane: B.nc_.SUBSCRIPTIONS,
            subsection: M
        }), z.current = M)
    }, [M]);
    let K = (0, r.bG)([j.A], () => j.A.getActiveApplicationSubscriptions()?.length ?? 0),
        Z = (0, r.bG)([j.A], () => Object.values(j.A.getSubscriptions() ?? {}).filter(e => e.type === B.rzx.GUILD).filter(e => e.status !== B.Dmq.ENDED).length),
        q = (0, A.A)({
            forceFetch: !0
        }),
        J = (0, L.d)(),
        Q = null !== t ? t.currentPeriodEnd : void 0,
        $ = !(J && !(q.unactivatedUnits.length > 0)) && (q.fractionalState !== w.xc.NONE || q.unactivatedUnits.length > 0);
    return (s.useEffect(() => (d.h.wait(() => {
        (0, m.zS)(), c.hP(), (0, u.CD)(), c.$o()
    }), function() {
        V.A.resetState()
    }), []), b.A.enabled) ? (0, i.jsx)(g.A, {}) : T && P ? M === H.nR ? (0, i.jsx)(S.A, {
        onGoBack: () => V.A.setState({
            subsection: null
        })
    }) : M === H.PZ ? (0, i.jsx)(f.A, {
        onGoBack: () => V.A.setState({
            subsection: null
        })
    }) : (0, i.jsx)("div", {
        className: Y.kL,
        children: (0, i.jsxs)("div", {
            className: Y.Qs,
            children: [_ ? (0, i.jsx)(k.Sb, {}) : null, null != t ? (0, i.jsx)(k.Ay, {
                subscription: t,
                paymentSource: p,
                busy: y,
                subscriptions: n
            }) : (0, i.jsx)(k.TC, {}), $ && (e = !!l?.isPremiumWithPremiumGroup(), (0, i.jsxs)("section", {
                children: [(0, i.jsx)(o.Heading, {
                    variant: "heading-md/bold",
                    className: Y.HL,
                    children: F.intl.string(F.t.Obre8v)
                }), (0, i.jsx)(o.Text, {
                    variant: "text-md/normal",
                    className: Y.JU,
                    children: F.intl.format(F.t["7Zi06b"], {
                        helpCenterLink: O.A.getArticleURL(B.MVz.FRACTIONAL_PREMIUM_ABOUT)
                    })
                }), (0, i.jsx)(G.A, {
                    className: Y.fX,
                    fractionalPremiumInfo: q,
                    activationDate: Q,
                    hasPremiumGroup: e
                })]
            })), (0, i.jsx)(X, {}), Z > 0 && (0, i.jsxs)(i.Fragment, {
                children: [(0, i.jsx)(W, {}), (0, i.jsx)(E.A, {
                    count: Z,
                    onClickManageSubscription: () => V.A.setState({
                        subsection: H.nR
                    })
                })]
            }), K > 0 && (0, i.jsxs)(i.Fragment, {
                children: [(0, i.jsx)(W, {}), (0, i.jsx)(C.A, {
                    count: K,
                    onClickManageSubscription: () => {
                        V.A.setState({
                            subsection: H.PZ
                        }), R.default.track(B.HAw.PREMIUM_APPLICATION_SUBSCRIPTION_MANAGE_CTA_CLICKED)
                    }
                })]
            }), (0, i.jsx)(W, {}), null != t ? (0, i.jsx)(U.A, {
                subscription: t,
                withOverheadSeparator: !1
            }) : null]
        })
    }) : (0, i.jsx)("div", {
        className: a()(Y.kL, Y.Lq),
        children: (0, i.jsx)(o.y$y, {})
    })
}