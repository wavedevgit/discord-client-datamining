/** chunk id: 706069 params = (module,exports,require) **/
A.d(_, {
    A: () => B
});
var I = A(627968),
    T = A(64700),
    O = A(503698),
    S = A.n(O),
    C = A(731738),
    e = A(827734),
    R = A(397927),
    N = A(311907),
    t = A(831062),
    P = A(773669),
    i = A(954571),
    n = A(67521),
    D = A(739010),
    a = A(207913),
    L = A(393033),
    l = A(335891),
    V = A(985481),
    s = A(259960),
    o = A(26095),
    r = A(246505),
    d = A(239093),
    U = A(652215),
    c = A(985018),
    Y = A(100123);
let G = E => {
        let {
            classificationTypeText: _,
            guildMetadata: A
        } = E, O = T.useMemo(() => {
            let E = {
                classification_type: _,
                classificationHook: (E, _) => (0, I.jsx)("strong", {
                    children: E
                }, _)
            };
            return null == A ? c.intl.format(c.t.HpvELh, E) : A?.member_type === D.Z9.OWNER ? c.intl.format(c.t.X1ngSd, {
                ...E,
                guildName: A?.name
            }) : c.intl.format(c.t.rmpEPD, {
                ...E,
                guildName: A?.name
            })
        }, [_, A]);
        return (0, I.jsx)(R.Heading, {
            variant: "heading-xl/normal",
            children: O
        })
    },
    M = E => {
        let {
            actions: _,
            classificationExpiration: A
        } = E, T = (0, N.bG)([P.default], () => P.default.locale);
        return 0 === _.filter(E => E.descriptions.length > 0).length && null == A ? null : (0, I.jsxs)("div", {
            children: [(0, I.jsx)(R.Text, {
                variant: "eyebrow",
                color: "text-muted",
                children: c.intl.string(c.t["O2nYk+"])
            }), (0, I.jsxs)("ul", {
                className: Y.nq,
                children: [_.map(E => (0, I.jsx)(m, {
                    action: E
                }, E.id)), null != A ? (0, I.jsx)("li", {
                    className: Y.DJ,
                    children: (0, I.jsx)(R.Text, {
                        tag: "span",
                        variant: "heading-md/normal",
                        color: "text-default",
                        children: c.intl.format(c.t.TByIjT, {
                            expirationDate: A.toLocaleDateString(T, {
                                dateStyle: "medium"
                            })
                        })
                    })
                }, "expiration") : null]
            })]
        })
    },
    m = E => {
        let {
            action: _
        } = E;
        return (0, I.jsx)(I.Fragment, {
            children: _.descriptions.map((E, _) => (0, I.jsx)("li", {
                className: Y.DJ,
                children: (0, I.jsx)(R.Text, {
                    tag: "span",
                    variant: "heading-md/normal",
                    color: "text-default",
                    children: E
                })
            }, _))
        })
    },
    h = E => {
        let {
            classificationTypeText: _,
            policyExplainerLink: A
        } = E;
        return (0, I.jsxs)(R.MzZ, {
            href: A,
            className: Y.F8,
            useDefaultUnderlineStyles: !1,
            children: [(0, I.jsx)("div", {
                className: Y.yi,
                children: (0, I.jsx)(R.lmn, {
                    size: "md",
                    color: e.A.colors.BORDER_FOCUS
                })
            }), (0, I.jsx)("div", {
                className: Y.wC,
                children: (0, I.jsx)(R.Text, {
                    variant: "text-md/normal",
                    children: c.intl.format(c.t.zxUdpj, {
                        classificationDescription: _
                    })
                })
            }), (0, I.jsx)("div", {
                className: Y.g_,
                children: (0, I.jsx)(R._BQ, {
                    size: "md",
                    color: e.A.colors.INTERACTIVE_TEXT_DEFAULT
                })
            })]
        })
    },
    u = () => (0, I.jsx)(R.Text, {
        variant: "text-md/normal",
        color: "text-muted",
        children: c.intl.string(c.t["I2H0/E"])
    }),
    H = E => (0, I.jsx)(R.Text, {
        variant: "text-md/normal",
        color: "text-muted",
        children: c.intl.format(c.t.IFxUaT, {
            letUsKnowHook: (_, A) => (0, I.jsx)(R.MzZ, {
                href: E.isAppealEligible ? void 0 : E.appealLink,
                onClick: E.letUsKnowClick,
                children: _
            }, A)
        })
    }),
    p = E => (0, I.jsx)("div", {
        className: Y.CC,
        children: E.hasBeenAppealed ? (0, I.jsx)(u, {}) : (0, I.jsx)(H, {
            appealLink: d.d$.APPEALS_LINK,
            letUsKnowClick: E.onLetUsKnowClick,
            isAppealEligible: E.isAppealEligible
        })
    }),
    F = E => {
        let {
            tosLink: _,
            communityGuidelinesLink: A,
            classificationTypeText: T,
            policyExplainerLink: O,
            appealComponent: S
        } = E;
        return (0, I.jsxs)("div", {
            children: [(0, I.jsx)(R.Text, {
                variant: "eyebrow",
                color: "text-muted",
                children: c.intl.string(c.t["977iei"])
            }), (0, I.jsx)(R.Text, {
                className: Y.t8,
                variant: "text-sm/normal",
                children: c.intl.format(c.t["1Z/+aA"], {
                    tosLink: _,
                    communityGuidelinesLink: A
                })
            }), (0, I.jsx)(h, {
                classificationTypeText: T,
                policyExplainerLink: O
            }), S]
        })
    },
    B = E => {
        let {
            classificationId: _,
            source: A,
            onError: O,
            onClose: e
        } = E, {
            classification: R,
            classificationRequestState: P,
            isAppealEligible: c,
            isDsaEligible: m,
            violationType: h
        } = (0, V.LJ)(_), u = (0, N.bG)([a.A], () => a.A.getAppealEligibility()), H = (0, l.K)(), B = null != R && null != R.flagged_content && R.flagged_content.length > 0, x = (0, s.v)(), g = !!R?.is_coppa && u.includes(D.RH.AGE_VERIFY_ELIGIBLE), f = !!R?.is_coppa && u.includes(D.RH.AGE_VERIFY_GLOBAL_ELIGIBLE), v = {
            accountStanding: H,
            classificationId: _,
            hasFlaggedContent: B,
            isDsaEligible: m,
            source: A,
            violationType: h
        }, j = T.useRef(v);
        return (T.useEffect(() => {
            j.current = v
        }), T.useEffect(() => {
            let {
                accountStanding: E,
                classificationId: _,
                hasFlaggedContent: A,
                isDsaEligible: I,
                source: T,
                violationType: O
            } = j.current;
            x && i.default.track(U.HAw.SAFETY_HUB_ACTION, {
                action: d.ZU.ViewViolationDetail,
                account_standing: E.state,
                classification_ids: [Number(_)],
                source: T,
                is_violative_content_shown: A,
                is_dsa_eligible: I,
                violation_type: O
            })
        }, [x]), null == R && P === D.nU.FAILED) ? (O(), null) : null == R ? null : (0, I.jsxs)("div", {
            className: Y.ch,
            children: [(0, I.jsx)("div", {
                className: Y.uW,
                children: (0, I.jsx)(G, {
                    classificationTypeText: R.description,
                    guildMetadata: R?.guild_metadata
                })
            }), (0, I.jsxs)("div", {
                className: S()(Y.rf, Y.uW),
                children: [(0, I.jsx)(r.U, {
                    flaggedContent: R.flagged_content ?? []
                }), (0, I.jsx)(M, {
                    actions: R.actions,
                    classificationExpiration: (0, L.UI)(R)
                }), (0, I.jsx)(F, {
                    classificationTypeText: R.description,
                    tosLink: d.d$.TOS_LINK,
                    communityGuidelinesLink: d.d$.COMMUNITY_GUIDELINES,
                    policyExplainerLink: R.explainer_link,
                    appealComponent: (0, I.jsx)(p, {
                        hasBeenAppealed: null != R.appeal_status,
                        onLetUsKnowClick: () => {
                            i.default.track(U.HAw.SAFETY_HUB_ACTION, {
                                action: d.ZU.ClickLetUsKnow,
                                account_standing: H.state,
                                classification_ids: [Number(_)],
                                source: A,
                                is_violative_content_shown: B,
                                is_dsa_eligible: m,
                                violation_type: h
                            }), f ? n.A.openV2(_, e) : g ? n.A.open(_, e) : c && (t.A.increment({
                                name: C.K.APPEAL_INGESTION_VIEW
                            }), o.A.open(_))
                        },
                        isAppealEligible: c || g
                    })
                })]
            })]
        })
    }