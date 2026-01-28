/** Chunk was on 5606 **/
/** chunk id: 106922, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => ef,
    c: () => em
}), n(896048);
var r = n(627968),
    i = n(64700),
    l = n(503698),
    s = n.n(l),
    a = n(989349),
    o = n.n(a),
    c = n(877624),
    d = n(311907),
    u = n(230109),
    p = n(732955),
    _ = n(582754),
    m = n(421380),
    g = n(397927),
    f = n(73153),
    b = n(384904),
    h = n(73825),
    A = n(974544),
    E = n(736653),
    x = n(793574),
    O = n(688810),
    C = n(86379),
    y = n(531260),
    j = n(160946),
    T = n(459793),
    v = n(721668),
    S = n(976860),
    I = n(780964),
    N = n(12901),
    P = n(840065),
    R = n(351906),
    D = n(287809),
    w = n(166403),
    L = n(224016),
    M = n(954571),
    G = n(975571),
    U = n(927578),
    k = n(526292),
    H = n(637073),
    B = n(411268),
    V = n(810498),
    F = n(807098),
    Y = n(412260),
    W = n(103411),
    z = n(190187),
    K = n(194509),
    Z = n(65470),
    q = n(857586),
    X = n(795269),
    J = n(501007),
    Q = n(156601),
    $ = n(244778),
    ee = n(659533),
    et = n(788868),
    en = n(88001),
    er = n(652215),
    ei = n(985018),
    el = n(95252),
    es = n(396785),
    ea = n(956537);
let eo = "to_premium_home_button",
    ec = "premium home page",
    ed = "gifting_button",
    eu = "payment modal";

function ep(e) {
    let {
        premiumSubscription: t,
        isDiscountApplied: n,
        activeDiscountInfo: i,
        theme: l
    } = e, s = t.hasActiveTrial, a = t.planIdFromItems === et.gD.PREMIUM_YEAR_TIER_2, c = n || s, d = null != t.trialEndsAt ? o()(t.trialEndsAt).diff(o()(), "d") : 0, u = et.hd[t.planIdFromItems], p = U.Ay.formatPriceString(U.Ay.getDefaultPrice(u.id), u.interval), {
        enabled: m
    } = B.K.getCurrentConfig({
        location: "SubscriptionUserHeroSubheader"
    });
    if (c) {
        var f, b, h;
        return (0, r.jsxs)(r.Fragment, {
            children: [(s || !a) && (0, r.jsx)(X.ir, {
                text: s ? ei.intl.string(ei.t.qYKftX) : ei.intl.string(ei.t.EyjDRE),
                className: el.uS,
                colorOptions: (0, _.Mw)(l) ? X.at.PREMIUM_TIER_2_WHITE_FILL : X.at.PREMIUM_TIER_2_OLD_GRADIENT_FILL
            }), (s || !a) && (0, r.jsx)("div", {
                className: el.on
            }), (0, r.jsx)(g.Heading, {
                variant: "heading-md/normal",
                color: "always-white",
                className: el.KB,
                children: m ? "" : s ? ei.intl.format(ei.t["2CGBri"], {
                    remainingTime: d,
                    price: p
                }) : a ? ei.intl.format(ei.t["+qqh6g"], {
                    percent: null != (f = null == i ? void 0 : i.percentage) ? f : et.Cq,
                    regularPrice: p
                }) : ei.intl.formatToPlainString(ei.t["3ZiutU"], {
                    percent: null != (b = null == i ? void 0 : i.percentage) ? b : et._$,
                    regularPrice: p,
                    numMonths: null != (h = null == i ? void 0 : i.duration) ? h : et.OJ
                })
            })]
        })
    }
    return m ? (0, r.jsx)("div", {
        style: {
            marginBottom: "18px"
        }
    }) : (0, r.jsx)(Q.A, {
        variant: void 0,
        subscriptionTier: et.pe.TIER_2,
        interval: u.interval
    })
}

function e_() {
    let e = (0, k.k5)(),
        t = (0, k.nf)(),
        n = (0, E.Ay)(),
        i = (0, d.bG)([w.A], () => w.A.getPremiumTypeSubscription()),
        l = (0, d.bG)([D.default], () => D.default.getCurrentUser()),
        a = null == l ? void 0 : l.isPremiumWithPremiumGroup(),
        o = (0, y.A)(),
        c = (0, H.d)(),
        u = null !== i && null !== i.planIdFromItems;
    if (!u && !o.isFractionalPremiumActive && !a) return null;
    let m = o.isFractionalPremiumActive,
        f = null !== i && i.hasActiveTrial;
    return (0, r.jsxs)("div", {
        className: s()(el.$Y, {
            [el.J5]: e || f
        }),
        children: [(0, r.jsxs)("div", {
            className: el.jp,
            children: [a ? (0, r.jsx)(g.Heading, {
                variant: "display-md",
                color: "always-white",
                className: el._K,
                children: (0, en.DP)()
            }) : (0, r.jsx)(L.A, {
                className: el.TJ
            }), a ? (0, r.jsx)("div", {
                style: {
                    marginBottom: "18px"
                }
            }) : m && !c ? (0, r.jsxs)(r.Fragment, {
                children: [(0, r.jsx)(X.R, {
                    text: ei.intl.string(ei.t.uXF4c4),
                    className: el.rd,
                    colorOptions: X.at.PREMIUM_TIER_2_OLD_GRADIENT_FILL
                }), (0, r.jsx)(g.Heading, {
                    variant: "heading-md/normal",
                    color: "always-white",
                    className: el.sQ,
                    children: ei.intl.format(ei.t.sK7fGl, {
                        helpCenterLink: G.A.getArticleURL(er.MVz.FRACTIONAL_PREMIUM_ABOUT)
                    })
                })]
            }) : u ? (0, r.jsx)(ep, {
                premiumSubscription: i,
                isDiscountApplied: e,
                activeDiscountInfo: t,
                theme: n
            }) : c ? (0, r.jsxs)(r.Fragment, {
                children: [(0, r.jsx)(X.ir, {
                    text: ei.intl.string(ei.t.qYKftX),
                    className: el.uS,
                    colorOptions: (0, _.Mw)(n) ? X.at.PREMIUM_TIER_2_WHITE_FILL : X.at.PREMIUM_TIER_2_OLD_GRADIENT_FILL
                }), (0, r.jsx)(g.Heading, {
                    variant: "heading-md/normal",
                    color: "always-white",
                    className: el.KB,
                    children: ei.intl.format(ei.t["/SfHwl"], {
                        weeks: 1
                    })
                })]
            }) : null, (0, r.jsx)(J.ZP, {
                featureSet: (null == l ? void 0 : l.isPremiumGroupPrimary()) ? J.Nz.PREMIUM_GROUP_PRIMARY : (null == l ? void 0 : l.isPremiumGroupMember()) ? J.Nz.PREMIUM_GROUP_MEMBER : m ? J.Nz.FRACTIONAL_PREMIUM : J.Nz.DEFAULT
            }), m && !u ? (0, r.jsxs)(p.e2v, {
                fullWidth: !0,
                direction: "vertical",
                children: [(0, r.jsx)(q.A, {
                    defaultTextOverride: c ? ei.intl.string(ei.t.YScQSF) : ei.intl.string(ei.t["0b3YRn"])
                }), (0, r.jsx)(p.$nd, {
                    onClick: () => {
                        M.default.track(er.HAw.PREMIUM_SETTINGS_INTERACTED, {
                            cta_type: eo,
                            target: ec
                        }), (0, N.default)(), (0, S.pX)(er.BVt.APPLICATION_STORE)
                    },
                    variant: "overlay-secondary",
                    fullWidth: !0,
                    size: "md",
                    text: c ? ei.intl.string(ei.t.VR2iVB) : ei.intl.string(ei.t.T1aUAX)
                })]
            }) : (0, r.jsxs)(p.e2v, {
                fullWidth: !0,
                direction: "vertical",
                children: [(0, r.jsx)(p.$nd, {
                    variant: "overlay-primary",
                    fullWidth: !0,
                    onClick: () => {
                        M.default.track(er.HAw.PREMIUM_SETTINGS_INTERACTED, {
                            cta_type: eo,
                            target: ec
                        }), (0, N.default)(), (0, S.pX)(er.BVt.APPLICATION_STORE)
                    },
                    text: ei.intl.string(ei.t.VR2iVB),
                    size: "md"
                }), (0, r.jsx)(p.$nd, {
                    variant: "overlay-secondary",
                    onClick: () => {
                        M.default.track(er.HAw.PREMIUM_SETTINGS_INTERACTED, {
                            cta_type: "to_subscriptions_button",
                            target: "subscriptions settings"
                        }), (0, P.openUserSettings)(I.X.SUBSCRIPTIONS_PANEL, {
                            section: er.nc_.SUBSCRIPTIONS
                        })
                    },
                    text: ei.intl.string(ei.t["9uDy6C"]),
                    fullWidth: !0,
                    size: "md"
                })]
            })]
        }), (0, r.jsx)("div", {
            className: el.ah,
            children: (0, r.jsx)("img", {
                className: el.ah,
                alt: "",
                src: es
            })
        })]
    })
}

function em(e) {
    let {
        className: t,
        config: n
    } = e, l = (0, F.T)(n.asset), a = (0, F.T)(n.backgroundAsset), o = (0, V.gc)(null != a ? a : void 0), c = i.useMemo(() => {
        let e = n.gradient;
        if (null != e && null != e.colors && !(e.colors.length < 2)) return (0, V.K5)({
            gradient: e.colors,
            angle: e.angle
        }, {
            defaultAngle: 180
        })
    }, [n.gradient]), d = (0, V.x)(o, c), u = {
        color: null != n.textColor && "" !== n.textColor ? n.textColor : "var(--always-white)"
    };
    return (0, r.jsxs)("div", {
        className: s()(el.WR, t),
        style: d,
        children: [null != l && (0, r.jsx)("img", {
            alt: "",
            className: el.TB,
            "aria-hidden": !0,
            src: l
        }), (0, r.jsxs)("div", {
            className: el.QT,
            children: [(0, r.jsx)(g.Heading, {
                className: el.u_,
                style: u,
                variant: "heading-lg/extrabold",
                children: n.header
            }), (0, r.jsx)(g.Text, {
                className: el.Oi,
                style: u,
                variant: "text-xs/medium",
                children: n.body
            }), null != n.additionalTerms && (0, r.jsx)(g.Text, {
                className: el.KW,
                style: u,
                variant: "text-xxs/normal",
                children: n.additionalTerms
            }), (0, r.jsx)(Z.A, {
                variant: "primary",
                size: "md",
                onClick: () => {
                    M.default.track(er.HAw.PREMIUM_SETTINGS_INTERACTED, {
                        cta_type: ed,
                        target: eu
                    })
                }
            })]
        })]
    })
}

function eg() {
    return (0, r.jsxs)("div", {
        className: el.T1,
        children: [(0, r.jsx)("img", {
            className: el.GY,
            alt: "",
            src: ea
        }), (0, r.jsxs)("div", {
            className: el.b4,
            children: [(0, r.jsx)(g.Heading, {
                className: el.Vz,
                variant: "heading-xl/extrabold",
                children: ei.intl.string(ei.t["3KomGa"])
            }), (0, r.jsx)(g.Text, {
                className: el.Oi,
                variant: "text-sm/normal",
                children: ei.intl.string(ei.t.yQ06u1)
            }), (0, r.jsx)(K.A, {
                className: s()(el.Tp, el._c),
                textOptions: {
                    textOverride: ei.intl.string(ei.t.Ve9Ge6),
                    textClassName: el.VV
                },
                color: m.$n.Colors.CUSTOM,
                onClick: () => {
                    M.default.track(er.HAw.PREMIUM_SETTINGS_INTERACTED, {
                        cta_type: ed,
                        target: eu
                    })
                }
            })]
        })]
    })
}
let ef = function() {
    let e = (0, C.H)(),
        {
            analyticsLocations: t
        } = (0, O.Ay)(x.A.PREMIUM_SETTINGS),
        n = (0, d.bG)([D.default], () => D.default.getCurrentUser()),
        l = (0, d.bG)([w.A], () => w.A.getPremiumTypeSubscription()),
        s = (0, d.bG)([w.A], () => w.A.hasFetchedSubscriptions()),
        a = (0, j.Y)(et.T7),
        [o, p] = i.useState(!0),
        _ = (0, y.A)({
            forceFetch: !0
        }),
        m = (0, d.bG)([Y.A], () => {
            let e = Y.A.getMarketingComponentByType(c.C.BILLING_SETTINGS_NITRO_GIFT_BANNER);
            return null == e || "billingSettingsNitroGiftBanner" !== e.properties.properties.oneofKind ? null : e.properties.properties.billingSettingsNitroGiftBanner
        }),
        E = (0, d.bG)([R.A], () => R.A.enabled),
        S = i.useRef(null);
    (0, z.i)();
    let I = (0, W.m)();
    i.useEffect(() => {
        f.h.wait(async () => {
            E || e || await Promise.all([b.hP(), b.$o(), (0, h.zS)(null, null, er.tF5.DISCOVERY)]), p(!1)
        })
    }, [E, e]);
    let [N, P] = i.useState(!1);
    if (E) return (0, r.jsx)(A.A, {});
    if (e) return (0, r.jsx)(T.uK, {});
    let L = s && null !== l && a,
        G = _.fetched && _.isFractionalPremiumActive,
        U = null == n ? void 0 : n.isPremiumWithPremiumGroup();
    if (!L && !G && !o && !U) return (0, r.jsx)(v.A, {
        title: ei.intl.string(ei.t.dyq9TR),
        note: null
    });
    if (!L && !G && !U || o) return (0, r.jsx)(g.y$y, {});
    let k = !!(null == l ? void 0 : l.hasActiveTrial);
    return (0, r.jsx)(O.f5, {
        value: t,
        children: (0, r.jsxs)(r.Fragment, {
            children: [(0, r.jsxs)("div", {
                children: [null != m && (0, r.jsx)(em, {
                    config: m
                }), (0, r.jsx)(e_, {}), I && (0, r.jsx)(ee.A, {
                    isInSettings: !0
                }), null == m && (0, r.jsx)(eg, {}), (0, r.jsx)($.A, {
                    hideCTAs: !0,
                    headingOverride: ei.intl.string(ei.t.dnVvQS),
                    hidePill: !k,
                    selectedPlanColumnClassName: el.JG,
                    selectedPlanTier: et.PremiumTypes.TIER_2
                })]
            }), (0, r.jsx)(u.L, {
                innerRef: S,
                onChange: e => {
                    e && !N && (M.default.track(er.HAw.PREMIUM_MARKETING_SURFACE_REACHED_BOTTOM, {
                        location_stack: t
                    }), P(!0))
                },
                children: (0, r.jsx)("div", {
                    ref: S,
                    className: el._Z
                })
            })]
        })
    })
}