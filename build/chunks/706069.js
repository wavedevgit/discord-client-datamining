/** chunk id: 706069 params = (module,exports,require) **/
I.d(_, {
    A: () => p
});
var A = I(627968),
    S = I(64700),
    T = I(503698),
    C = I.n(T),
    O = I(731738),
    R = I(827734),
    N = I(397927),
    e = I(311907),
    P = I(831062),
    t = I(773669),
    L = I(954571),
    D = I(67521),
    i = I(739010),
    n = I(207913),
    a = I(393033),
    l = I(335891),
    V = I(985481),
    s = I(259960),
    Y = I(26095),
    o = I(246505),
    r = I(239093),
    U = I(652215),
    d = I(985018),
    G = I(976213);
let c = E => {
        let {
            classificationTypeText: _,
            guildMetadata: I
        } = E, T = S.useMemo(() => {
            let E = {
                classification_type: _,
                classificationHook: (E, _) => (0, A.jsx)("strong", {
                    children: E
                }, _)
            };
            return null == I ? d.intl.format(d.t.HpvELh, E) : I?.member_type === i.Z9.OWNER ? d.intl.format(d.t.X1ngSd, {
                ...E,
                guildName: I?.name
            }) : d.intl.format(d.t.rmpEPD, {
                ...E,
                guildName: I?.name
            })
        }, [_, I]);
        return (0, A.jsx)(N.Heading, {
            variant: "heading-xl/normal",
            children: T
        })
    },
    M = E => {
        let {
            actions: _,
            classificationExpiration: I
        } = E, S = (0, e.bG)([t.default], () => t.default.locale);
        return 0 === _.filter(E => E.descriptions.length > 0).length && null == I ? null : (0, A.jsxs)("div", {
            children: [(0, A.jsx)(N.Text, {
                variant: "eyebrow",
                color: "text-muted",
                children: d.intl.string(d.t["O2nYk+"])
            }), (0, A.jsxs)("ul", {
                className: G.nq,
                children: [_.map(E => (0, A.jsx)(B, {
                    action: E
                }, E.id)), null != I ? (0, A.jsx)("li", {
                    className: G.DJ,
                    children: (0, A.jsx)(N.Text, {
                        tag: "span",
                        variant: "heading-md/normal",
                        color: "text-default",
                        children: d.intl.format(d.t.TByIjT, {
                            expirationDate: I.toLocaleDateString(S, {
                                dateStyle: "medium"
                            })
                        })
                    })
                }, "expiration") : null]
            })]
        })
    },
    B = E => {
        let {
            action: _
        } = E;
        return (0, A.jsx)(A.Fragment, {
            children: _.descriptions.map((E, _) => (0, A.jsx)("li", {
                className: G.DJ,
                children: (0, A.jsx)(N.Text, {
                    tag: "span",
                    variant: "heading-md/normal",
                    color: "text-default",
                    children: E
                })
            }, _))
        })
    },
    m = E => {
        let {
            classificationTypeText: _,
            policyExplainerLink: I
        } = E;
        return (0, A.jsxs)(N.MzZ, {
            href: I,
            className: G.F8,
            useDefaultUnderlineStyles: !1,
            children: [(0, A.jsx)("div", {
                className: G.yi,
                children: (0, A.jsx)(N.lmn, {
                    size: "md",
                    color: R.A.colors.BORDER_FOCUS
                })
            }), (0, A.jsx)("div", {
                className: G.wC,
                children: (0, A.jsx)(N.Text, {
                    variant: "text-md/normal",
                    children: d.intl.format(d.t.zxUdpj, {
                        classificationDescription: _
                    })
                })
            }), (0, A.jsx)("div", {
                className: G.g_,
                children: (0, A.jsx)(N._BQ, {
                    size: "md",
                    color: R.A.colors.INTERACTIVE_TEXT_DEFAULT
                })
            })]
        })
    },
    H = () => (0, A.jsx)(N.Text, {
        variant: "text-md/normal",
        color: "text-muted",
        children: d.intl.string(d.t["I2H0/E"])
    }),
    h = E => (0, A.jsx)(N.Text, {
        variant: "text-md/normal",
        color: "text-muted",
        children: d.intl.format(d.t.IFxUaT, {
            letUsKnowHook: (_, I) => (0, A.jsx)(N.MzZ, {
                href: E.isAppealEligible ? void 0 : E.appealLink,
                onClick: E.letUsKnowClick,
                children: _
            }, I)
        })
    }),
    u = E => (0, A.jsx)("div", {
        className: G.CC,
        children: E.hasBeenAppealed ? (0, A.jsx)(H, {}) : (0, A.jsx)(h, {
            appealLink: r.d$.APPEALS_LINK,
            letUsKnowClick: E.onLetUsKnowClick,
            isAppealEligible: E.isAppealEligible
        })
    }),
    F = E => {
        let {
            tosLink: _,
            communityGuidelinesLink: I,
            classificationTypeText: S,
            policyExplainerLink: T,
            appealComponent: C
        } = E;
        return (0, A.jsxs)("div", {
            children: [(0, A.jsx)(N.Text, {
                variant: "eyebrow",
                color: "text-muted",
                children: d.intl.string(d.t["977iei"])
            }), (0, A.jsx)(N.Text, {
                className: G.t8,
                variant: "text-sm/normal",
                children: d.intl.format(d.t["1Z/+aA"], {
                    tosLink: _,
                    communityGuidelinesLink: I
                })
            }), (0, A.jsx)(m, {
                classificationTypeText: S,
                policyExplainerLink: T
            }), C]
        })
    },
    p = E => {
        let {
            classificationId: _,
            source: I,
            onError: T,
            onClose: R
        } = E, {
            classification: N,
            classificationRequestState: t,
            isAppealEligible: d,
            isDsaEligible: B,
            violationType: m
        } = (0, V.LJ)(_), H = (0, e.bG)([n.A], () => n.A.getAppealEligibility()), h = (0, l.K)(), p = null != N && null != N.flagged_content && N.flagged_content.length > 0, x = (0, s.v)(), g = !!N?.is_coppa && H.includes(i.RH.AGE_VERIFY_ELIGIBLE), f = !!N?.is_coppa && H.includes(i.RH.AGE_VERIFY_GLOBAL_ELIGIBLE), v = {
            accountStanding: h,
            classificationId: _,
            hasFlaggedContent: p,
            isDsaEligible: B,
            source: I,
            violationType: m
        }, j = S.useRef(v);
        return (S.useEffect(() => {
            j.current = v
        }), S.useEffect(() => {
            let {
                accountStanding: E,
                classificationId: _,
                hasFlaggedContent: I,
                isDsaEligible: A,
                source: S,
                violationType: T
            } = j.current;
            x && L.default.track(U.HAw.SAFETY_HUB_ACTION, {
                action: r.ZU.ViewViolationDetail,
                account_standing: E.state,
                classification_ids: [Number(_)],
                source: S,
                is_violative_content_shown: I,
                is_dsa_eligible: A,
                violation_type: T
            })
        }, [x]), null == N && t === i.nU.FAILED) ? (T(), null) : null == N ? null : (0, A.jsxs)("div", {
            className: G.ch,
            children: [(0, A.jsx)("div", {
                className: G.uW,
                children: (0, A.jsx)(c, {
                    classificationTypeText: N.description,
                    guildMetadata: N?.guild_metadata
                })
            }), (0, A.jsxs)("div", {
                className: C()(G.rf, G.uW),
                children: [(0, A.jsx)(o.U, {
                    flaggedContent: N.flagged_content ?? []
                }), (0, A.jsx)(M, {
                    actions: N.actions,
                    classificationExpiration: (0, a.UI)(N)
                }), (0, A.jsx)(F, {
                    classificationTypeText: N.description,
                    tosLink: r.d$.TOS_LINK,
                    communityGuidelinesLink: r.d$.COMMUNITY_GUIDELINES,
                    policyExplainerLink: N.explainer_link,
                    appealComponent: (0, A.jsx)(u, {
                        hasBeenAppealed: null != N.appeal_status,
                        onLetUsKnowClick: () => {
                            L.default.track(U.HAw.SAFETY_HUB_ACTION, {
                                action: r.ZU.ClickLetUsKnow,
                                account_standing: h.state,
                                classification_ids: [Number(_)],
                                source: I,
                                is_violative_content_shown: p,
                                is_dsa_eligible: B,
                                violation_type: m
                            }), f ? D.A.openV2(_, R) : g ? D.A.open(_, R) : d && (P.A.increment({
                                name: O.K.APPEAL_INGESTION_VIEW
                            }), Y.A.open(_))
                        },
                        isAppealEligible: d || g
                    })
                })]
            })]
        })
    }