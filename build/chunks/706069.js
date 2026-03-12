/** chunk id: 706069 params = (module,exports,require) **/
E.d(A, {
    A: () => x
});
var e = E(627968),
    I = E(64700),
    T = E(503698),
    C = E.n(T),
    t = E(731738),
    S = E(827734),
    i = E(397927),
    n = E(311907),
    N = E(831062),
    R = E(773669),
    a = E(954571),
    l = E(67521),
    O = E(739010),
    s = E(207913),
    o = E(393033),
    r = E(335891),
    P = E(985481),
    D = E(259960),
    d = E(26095),
    c = E(246505),
    V = E(239093),
    L = E(652215),
    Y = E(985018),
    U = E(100123);
let M = _ => {
        let {
            classificationTypeText: A,
            guildMetadata: E
        } = _, T = I.useMemo(() => {
            let _ = {
                classification_type: A,
                classificationHook: (_, A) => (0, e.jsx)("strong", {
                    children: _
                }, A)
            };
            return null == E ? Y.intl.format(Y.t.HpvELh, _) : E?.member_type === O.Z9.OWNER ? Y.intl.format(Y.t.X1ngSd, {
                ..._,
                guildName: E?.name
            }) : Y.intl.format(Y.t.rmpEPD, {
                ..._,
                guildName: E?.name
            })
        }, [A, E]);
        return (0, e.jsx)(i.Heading, {
            variant: "heading-xl/normal",
            children: T
        })
    },
    m = _ => {
        let {
            actions: A,
            classificationExpiration: E
        } = _, I = (0, n.bG)([R.default], () => R.default.locale);
        return 0 === A.filter(_ => _.descriptions.length > 0).length && null == E ? null : (0, e.jsxs)("div", {
            children: [(0, e.jsx)(i.Text, {
                variant: "eyebrow",
                color: "text-muted",
                children: Y.intl.string(Y.t["O2nYk+"])
            }), (0, e.jsxs)("ul", {
                className: U.nq,
                children: [A.map(_ => (0, e.jsx)(h, {
                    action: _
                }, _.id)), null != E ? (0, e.jsx)("li", {
                    className: U.DJ,
                    children: (0, e.jsx)(i.Text, {
                        tag: "span",
                        variant: "heading-md/normal",
                        color: "text-default",
                        children: Y.intl.format(Y.t.TByIjT, {
                            expirationDate: E.toLocaleDateString(I, {
                                dateStyle: "medium"
                            })
                        })
                    })
                }, "expiration") : null]
            })]
        })
    },
    h = _ => {
        let {
            action: A
        } = _;
        return (0, e.jsx)(e.Fragment, {
            children: A.descriptions.map((_, A) => (0, e.jsx)("li", {
                className: U.DJ,
                children: (0, e.jsx)(i.Text, {
                    tag: "span",
                    variant: "heading-md/normal",
                    color: "text-default",
                    children: _
                })
            }, A))
        })
    },
    u = _ => {
        let {
            classificationTypeText: A,
            policyExplainerLink: E
        } = _;
        return (0, e.jsxs)(i.MzZ, {
            href: E,
            className: U.F8,
            useDefaultUnderlineStyles: !1,
            children: [(0, e.jsx)("div", {
                className: U.yi,
                children: (0, e.jsx)(i.lmn, {
                    size: "md",
                    color: S.A.colors.BORDER_FOCUS
                })
            }), (0, e.jsx)("div", {
                className: U.wC,
                children: (0, e.jsx)(i.Text, {
                    variant: "text-md/normal",
                    children: Y.intl.format(Y.t.zxUdpj, {
                        classificationDescription: A
                    })
                })
            }), (0, e.jsx)("div", {
                className: U.g_,
                children: (0, e.jsx)(i._BQ, {
                    size: "md",
                    color: S.A.colors.INTERACTIVE_TEXT_DEFAULT
                })
            })]
        })
    },
    G = () => (0, e.jsx)(i.Text, {
        variant: "text-md/normal",
        color: "text-muted",
        children: Y.intl.string(Y.t["I2H0/E"])
    }),
    p = _ => (0, e.jsx)(i.Text, {
        variant: "text-md/normal",
        color: "text-muted",
        children: Y.intl.format(Y.t.IFxUaT, {
            letUsKnowHook: (A, E) => (0, e.jsx)(i.MzZ, {
                href: _.isAppealEligible ? void 0 : _.appealLink,
                onClick: _.letUsKnowClick,
                children: A
            }, E)
        })
    }),
    F = _ => (0, e.jsx)("div", {
        className: U.CC,
        children: _.hasBeenAppealed ? (0, e.jsx)(G, {}) : (0, e.jsx)(p, {
            appealLink: V.d$.APPEALS_LINK,
            letUsKnowClick: _.onLetUsKnowClick,
            isAppealEligible: _.isAppealEligible
        })
    }),
    H = _ => {
        let {
            tosLink: A,
            communityGuidelinesLink: E,
            classificationTypeText: I,
            policyExplainerLink: T,
            appealComponent: C
        } = _;
        return (0, e.jsxs)("div", {
            children: [(0, e.jsx)(i.Text, {
                variant: "eyebrow",
                color: "text-muted",
                children: Y.intl.string(Y.t["977iei"])
            }), (0, e.jsx)(i.Text, {
                className: U.t8,
                variant: "text-sm/normal",
                children: Y.intl.format(Y.t["1Z/+aA"], {
                    tosLink: A,
                    communityGuidelinesLink: E
                })
            }), (0, e.jsx)(u, {
                classificationTypeText: I,
                policyExplainerLink: T
            }), C]
        })
    },
    x = _ => {
        let {
            classificationId: A,
            source: E,
            onError: T,
            onClose: S
        } = _, {
            classification: i,
            classificationRequestState: R,
            isAppealEligible: Y,
            isDsaEligible: h,
            violationType: u
        } = (0, P.LJ)(A), G = (0, n.bG)([s.A], () => s.A.getAppealEligibility()), p = (0, r.K)(), x = null != i && null != i.flagged_content && i.flagged_content.length > 0, g = (0, D.v)(), f = !!i?.is_coppa && G.includes(O.RH.AGE_VERIFY_ELIGIBLE), B = !!i?.is_coppa && G.includes(O.RH.AGE_VERIFY_GLOBAL_ELIGIBLE), v = {
            accountStanding: p,
            classificationId: A,
            hasFlaggedContent: x,
            isDsaEligible: h,
            source: E,
            violationType: u
        }, j = I.useRef(v);
        return (I.useEffect(() => {
            j.current = v
        }), I.useEffect(() => {
            let {
                accountStanding: _,
                classificationId: A,
                hasFlaggedContent: E,
                isDsaEligible: e,
                source: I,
                violationType: T
            } = j.current;
            g && a.default.track(L.HAw.SAFETY_HUB_ACTION, {
                action: V.ZU.ViewViolationDetail,
                account_standing: _.state,
                classification_ids: [Number(A)],
                source: I,
                is_violative_content_shown: E,
                is_dsa_eligible: e,
                violation_type: T
            })
        }, [g]), null == i && R === O.nU.FAILED) ? (T(), null) : null == i ? null : (0, e.jsxs)("div", {
            className: U.ch,
            children: [(0, e.jsx)("div", {
                className: U.uW,
                children: (0, e.jsx)(M, {
                    classificationTypeText: i.description,
                    guildMetadata: i?.guild_metadata
                })
            }), (0, e.jsxs)("div", {
                className: C()(U.rf, U.uW),
                children: [(0, e.jsx)(c.U, {
                    flaggedContent: i.flagged_content ?? []
                }), (0, e.jsx)(m, {
                    actions: i.actions,
                    classificationExpiration: (0, o.UI)(i)
                }), (0, e.jsx)(H, {
                    classificationTypeText: i.description,
                    tosLink: V.d$.TOS_LINK,
                    communityGuidelinesLink: V.d$.COMMUNITY_GUIDELINES,
                    policyExplainerLink: i.explainer_link,
                    appealComponent: (0, e.jsx)(F, {
                        hasBeenAppealed: null != i.appeal_status,
                        onLetUsKnowClick: () => {
                            a.default.track(L.HAw.SAFETY_HUB_ACTION, {
                                action: V.ZU.ClickLetUsKnow,
                                account_standing: p.state,
                                classification_ids: [Number(A)],
                                source: E,
                                is_violative_content_shown: x,
                                is_dsa_eligible: h,
                                violation_type: u
                            }), B ? l.A.openV2(A, S) : f ? l.A.open(A, S) : Y && (N.A.increment({
                                name: t.K.APPEAL_INGESTION_VIEW
                            }), d.A.open(A))
                        },
                        isAppealEligible: Y || f
                    })
                })]
            })]
        })
    }