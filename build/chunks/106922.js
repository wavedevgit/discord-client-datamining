/** chunk id: 106922 params = (module,exports,require) **/
n.d(t, {
    A: () => ex,
    c: () => eg
});
var i = n(627968),
    s = n(64700),
    l = n(503698),
    a = n.n(l),
    r = n(989349),
    o = n.n(r),
    d = n(607399),
    c = n(877624),
    u = n(311907),
    m = n(230109),
    _ = n(732955),
    g = n(582754),
    A = n(421380),
    x = n(397927),
    p = n(73153),
    h = n(384904),
    f = n(73825),
    T = n(974544),
    E = n(736653),
    S = n(793574),
    b = n(688810),
    C = n(86379),
    N = n(531260),
    v = n(160946),
    I = n(459793),
    j = n(721668),
    y = n(976860),
    O = n(780964),
    R = n(12901),
    L = n(840065),
    P = n(351906),
    D = n(287809),
    G = n(166403),
    M = n(224016),
    k = n(954571),
    U = n(975571),
    w = n(927578),
    V = n(526292),
    B = n(637073),
    F = n(810498),
    H = n(807098),
    z = n(412260),
    Y = n(103411),
    X = n(190187),
    W = n(194509),
    K = n(65470),
    Z = n(857586),
    q = n(795269),
    J = n(501007),
    Q = n(156601),
    $ = n(244778),
    ee = n(659533),
    et = n(788868),
    en = n(88001),
    ei = n(652215),
    es = n(985018),
    el = n(95252),
    ea = n(396785),
    er = n(956537);
let eo = "to_premium_home_button",
    ed = "premium home page",
    ec = "gifting_button",
    eu = "payment modal";

function em(e) {
    let {
        premiumSubscription: t,
        isDiscountApplied: n,
        activeDiscountInfo: s,
        theme: l
    } = e, a = t.hasActiveTrial, r = t.planIdFromItems === et.gD.PREMIUM_YEAR_TIER_2, d = n || a, c = null != t.trialEndsAt ? o()(t.trialEndsAt).diff(o()(), "d") : 0, u = et.hd[t.planIdFromItems], m = w.Ay.formatPriceString(w.Ay.getDefaultPrice(u.id), u.interval);
    return d ? (0, i.jsxs)(i.Fragment, {
        children: [(a || !r) && (0, i.jsx)(q.ir, {
            text: a ? es.intl.string(es.t.qYKftX) : es.intl.string(es.t.EyjDRE),
            className: el.uS,
            colorOptions: (0, g.Mw)(l) ? q.at.PREMIUM_TIER_2_WHITE_FILL : q.at.PREMIUM_TIER_2_OLD_GRADIENT_FILL
        }), (a || !r) && (0, i.jsx)("div", {
            className: el.on
        }), (0, i.jsx)(x.Heading, {
            variant: "heading-md/normal",
            color: "always-white",
            className: el.KB,
            children: a ? es.intl.format(es.t["2CGBri"], {
                remainingTime: c,
                price: m
            }) : r ? es.intl.format(es.t["+qqh6g"], {
                percent: s?.percentage ?? et.Cq,
                regularPrice: m
            }) : es.intl.formatToPlainString(es.t["3ZiutU"], {
                percent: s?.percentage ?? et._$,
                regularPrice: m,
                numMonths: s?.duration ?? et.OJ
            })
        })]
    }) : (0, i.jsx)(Q.A, {
        variant: void 0,
        subscriptionTier: et.pe.TIER_2,
        interval: u.interval
    })
}

function e_() {
    let e = (0, V.k5)(),
        t = (0, V.nf)(),
        n = (0, E.Ay)(),
        s = (0, u.bG)([G.A], () => G.A.getPremiumTypeSubscription()),
        l = (0, u.bG)([D.default], () => D.default.getCurrentUser()),
        r = l?.isPremiumWithPremiumGroup(),
        o = (0, N.A)(),
        d = (0, B.d)(),
        c = null !== s && null !== s.planIdFromItems;
    if (!c && !o.isFractionalPremiumActive && !r) return null;
    let m = o.isFractionalPremiumActive,
        A = null !== s && s.hasActiveTrial;
    return (0, i.jsxs)("div", {
        className: a()(el.$Y, {
            [el.J5]: e || A
        }),
        children: [(0, i.jsxs)("div", {
            className: el.jp,
            children: [r ? (0, i.jsx)(x.Heading, {
                variant: "display-md",
                color: "always-white",
                className: el._K,
                children: (0, en.DP)()
            }) : (0, i.jsx)(M.A, {
                className: el.TJ
            }), r ? (0, i.jsx)("div", {
                style: {
                    marginBottom: "18px"
                }
            }) : m && !d ? (0, i.jsxs)(i.Fragment, {
                children: [(0, i.jsx)(q.R, {
                    text: es.intl.string(es.t.uXF4c4),
                    className: el.rd,
                    colorOptions: q.at.PREMIUM_TIER_2_OLD_GRADIENT_FILL
                }), (0, i.jsx)(x.Heading, {
                    variant: "heading-md/normal",
                    color: "always-white",
                    className: el.sQ,
                    children: es.intl.format(es.t.sK7fGl, {
                        helpCenterLink: U.A.getArticleURL(ei.MVz.FRACTIONAL_PREMIUM_ABOUT)
                    })
                })]
            }) : c ? (0, i.jsx)(em, {
                premiumSubscription: s,
                isDiscountApplied: e,
                activeDiscountInfo: t,
                theme: n
            }) : d ? (0, i.jsxs)(i.Fragment, {
                children: [(0, i.jsx)(q.ir, {
                    text: es.intl.string(es.t.qYKftX),
                    className: el.uS,
                    colorOptions: (0, g.Mw)(n) ? q.at.PREMIUM_TIER_2_WHITE_FILL : q.at.PREMIUM_TIER_2_OLD_GRADIENT_FILL
                }), (0, i.jsx)(x.Heading, {
                    variant: "heading-md/normal",
                    color: "always-white",
                    className: el.KB,
                    children: es.intl.format(es.t["/SfHwl"], {
                        weeks: 1
                    })
                })]
            }) : null, (0, i.jsx)(J.ZP, {
                featureSet: l?.isPremiumGroupPrimary() ? J.Nz.PREMIUM_GROUP_PRIMARY : l?.isPremiumGroupMember() ? J.Nz.PREMIUM_GROUP_MEMBER : m ? J.Nz.FRACTIONAL_PREMIUM : J.Nz.DEFAULT
            }), m && !c ? (0, i.jsxs)(_.e2v, {
                fullWidth: !0,
                direction: "vertical",
                children: [(0, i.jsx)(Z.A, {
                    defaultTextOverride: d ? es.intl.string(es.t.YScQSF) : es.intl.string(es.t["0b3YRn"])
                }), (0, i.jsx)(_.$nd, {
                    onClick: () => {
                        k.default.track(ei.HAw.PREMIUM_SETTINGS_INTERACTED, {
                            cta_type: eo,
                            target: ed
                        }), (0, R.default)(), (0, y.pX)(ei.BVt.APPLICATION_STORE)
                    },
                    variant: "overlay-secondary",
                    fullWidth: !0,
                    size: "md",
                    text: d ? es.intl.string(es.t.VR2iVB) : es.intl.string(es.t.T1aUAX)
                })]
            }) : (0, i.jsxs)(_.e2v, {
                fullWidth: !0,
                direction: "vertical",
                children: [(0, i.jsx)(_.$nd, {
                    variant: "overlay-primary",
                    fullWidth: !0,
                    onClick: () => {
                        k.default.track(ei.HAw.PREMIUM_SETTINGS_INTERACTED, {
                            cta_type: eo,
                            target: ed
                        }), (0, R.default)(), (0, y.pX)(ei.BVt.APPLICATION_STORE)
                    },
                    text: es.intl.string(es.t.VR2iVB),
                    size: "md"
                }), (0, i.jsx)(_.$nd, {
                    variant: "overlay-secondary",
                    onClick: () => {
                        k.default.track(ei.HAw.PREMIUM_SETTINGS_INTERACTED, {
                            cta_type: "to_subscriptions_button",
                            target: "subscriptions settings"
                        }), (0, L.openUserSettings)(O.X.SUBSCRIPTIONS_PANEL)
                    },
                    text: es.intl.string(es.t["9uDy6C"]),
                    fullWidth: !0,
                    size: "md"
                })]
            })]
        }), (0, i.jsx)("div", {
            className: el.ah,
            children: (0, i.jsx)("img", {
                className: el.ah,
                alt: "",
                src: ea
            })
        })]
    })
}

function eg(e) {
    let {
        className: t,
        config: n
    } = e, l = (0, H.T)(n.asset), r = (0, H.T)(n.backgroundAsset), o = (0, F.gc)(r), d = s.useMemo(() => {
        let e = n.gradient;
        if (null != e && null != e.colors && !(e.colors.length < 2)) return (0, F.K5)({
            gradient: e.colors,
            angle: e.angle
        }, {
            defaultAngle: 180
        })
    }, [n.gradient]), c = (0, F.x)(o, d), u = {
        color: null != n.textColor && "" !== n.textColor ? n.textColor : "var(--always-white)"
    };
    return (0, i.jsxs)("div", {
        className: a()(el.WR, t),
        style: c,
        children: [null != l && (0, i.jsx)("img", {
            alt: "",
            className: el.TB,
            "aria-hidden": !0,
            src: l
        }), (0, i.jsxs)("div", {
            className: el.QT,
            children: [(0, i.jsx)(x.Heading, {
                className: el.u_,
                style: u,
                variant: "heading-lg/extrabold",
                children: n.header
            }), (0, i.jsx)(x.Text, {
                className: el.Oi,
                style: u,
                variant: "text-xs/medium",
                children: n.body
            }), null != n.additionalTerms && (0, i.jsx)(x.Text, {
                className: el.KW,
                style: u,
                variant: "text-xxs/normal",
                children: n.additionalTerms
            }), (0, i.jsx)(K.A, {
                variant: "primary",
                size: "md",
                onClick: () => {
                    k.default.track(ei.HAw.PREMIUM_SETTINGS_INTERACTED, {
                        cta_type: ec,
                        target: eu
                    })
                }
            })]
        })]
    })
}

function eA() {
    return (0, i.jsxs)("div", {
        className: el.T1,
        children: [(0, i.jsx)("img", {
            className: el.GY,
            alt: "",
            src: er
        }), (0, i.jsxs)("div", {
            className: el.b4,
            children: [(0, i.jsx)(x.Heading, {
                className: el.Vz,
                variant: "heading-xl/extrabold",
                children: es.intl.string(es.t["3KomGa"])
            }), (0, i.jsx)(x.Text, {
                className: el.Oi,
                variant: "text-sm/normal",
                children: es.intl.string(es.t.yQ06u1)
            }), (0, i.jsx)(W.A, {
                className: a()(el.Tp, el._c),
                textOptions: {
                    textOverride: es.intl.string(es.t.Ve9Ge6),
                    textClassName: el.VV
                },
                color: A.$n.Colors.CUSTOM,
                onClick: () => {
                    k.default.track(ei.HAw.PREMIUM_SETTINGS_INTERACTED, {
                        cta_type: ec,
                        target: eu
                    })
                }
            })]
        })]
    })
}
let ex = function() {
    let e = (0, C.Hp)(),
        {
            analyticsLocations: t
        } = (0, b.Ay)(S.A.PREMIUM_SETTINGS),
        n = (0, u.bG)([D.default], () => D.default.getCurrentUser()),
        l = (0, u.bG)([G.A], () => G.A.getPremiumTypeSubscription()),
        a = (0, u.bG)([G.A], () => G.A.hasFetchedSubscriptions()),
        r = (0, v.Y)(et.T7),
        [o, _] = s.useState(!0),
        g = (0, N.A)({
            forceFetch: !0
        }),
        A = (0, u.bG)([z.A], () => {
            let e = z.A.getMarketingComponentByType(c.C.BILLING_SETTINGS_NITRO_GIFT_BANNER);
            return null == e || "billingSettingsNitroGiftBanner" !== e.properties.properties.oneofKind ? null : e.properties.properties.billingSettingsNitroGiftBanner
        }),
        E = !(d.Fr || d.v1) && null != A,
        y = (0, u.bG)([P.A], () => P.A.enabled),
        O = s.useRef(null);
    (0, X.i)();
    let R = (0, Y.m)();
    s.useEffect(() => {
        p.h.wait(async () => {
            y || e || await Promise.all([h.hP(), h.$o(), (0, f.zS)(null, null, ei.tF5.DISCOVERY)]), _(!1)
        })
    }, [y, e]);
    let [L, M] = s.useState(!1);
    if (y) return (0, i.jsx)(T.A, {});
    if (e) return (0, i.jsx)(I.uK, {});
    let U = a && null !== l && r,
        w = g.fetched && g.isFractionalPremiumActive,
        V = n?.isPremiumWithPremiumGroup();
    if (!U && !w && !o && !V) return (0, i.jsx)(j.A, {
        title: es.intl.string(es.t.dyq9TR),
        note: null
    });
    if (!U && !w && !V || o) return (0, i.jsx)(x.y$y, {});
    let B = !!l?.hasActiveTrial;
    return (0, i.jsx)(b.f5, {
        value: t,
        children: (0, i.jsxs)(i.Fragment, {
            children: [(0, i.jsxs)("div", {
                children: [E && (0, i.jsx)(eg, {
                    config: A
                }), (0, i.jsx)(e_, {}), R && (0, i.jsx)(ee.A, {
                    isInSettings: !0
                }), !E && (0, i.jsx)(eA, {}), (0, i.jsx)($.A, {
                    hideCTAs: !0,
                    headingOverride: es.intl.string(es.t.dnVvQS),
                    hidePill: !B,
                    selectedPlanColumnClassName: el.JG,
                    selectedPlanTier: et.PremiumTypes.TIER_2
                })]
            }), (0, i.jsx)(m.L, {
                innerRef: O,
                onChange: e => {
                    e && !L && (k.default.track(ei.HAw.PREMIUM_MARKETING_SURFACE_REACHED_BOTTOM, {
                        location_stack: t
                    }), M(!0))
                },
                children: (0, i.jsx)("div", {
                    ref: O,
                    className: el._Z
                })
            })]
        })
    })
}