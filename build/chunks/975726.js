/** Chunk was on 67299 **/
/** chunk id: 975726, original params: e,t,n (module,exports,require) **/
n.d(t, {
    default: () => q
}), n(747238), n(812715);
var r = n(627968),
    a = n(64700),
    i = n(158954),
    s = n(311907),
    o = n(862482),
    l = n(397927),
    c = n(416052),
    d = n(475743),
    u = n(765548),
    m = n(165508),
    f = n(46054),
    p = n(351906),
    C = n(957565),
    h = n(240248),
    x = n(216456),
    y = n(859703),
    _ = n(341915),
    j = n(714510),
    g = n(890687),
    v = n(645627),
    b = n(92246),
    O = n(73473),
    A = n(646764),
    w = n(109174),
    N = n(524728),
    E = n(654487),
    P = n(985018),
    R = n(491284);

function D(e) {
    let {
        rewardCode: t,
        questContent: n,
        questId: a,
        sourceQuestContent: i,
        className: l,
        inputClassName: d
    } = e, u = (0, s.bG)([p.A], () => p.A.hidePersonalInformation), m = (0, x.Ut)();
    return null == t ? null : (0, r.jsx)(c.A, {
        className: l,
        inputClassName: d,
        value: u ? P.intl.string(P.t["0n2u0k"]) : t.code,
        buttonColor: o.XD.PRIMARY,
        onCopy: () => {
            u && (0, C.C)(t.code), m({
                questId: a,
                questContent: n,
                questContentCTA: x.Cy.COPY_REWARD_CODE,
                sourceQuestContent: i
            })
        }
    })
}

function k(e) {
    var t;
    let {
        quest: n,
        questContent: s,
        sourceQuestContent: o,
        rewardCode: c,
        onClose: d,
        transitionState: u,
        impressionRef: m
    } = e, p = null != (t = (0, j.XR)({
        quest: n,
        rewardCode: c
    })) ? t : "", C = a.useMemo(() => {
        var e;
        let t = null == (e = (0, b.cg)({
            quest: n,
            idx: 0
        })) ? void 0 : e.redemptionLink;
        if ((0, h.uJ)(t)) return null;
        let r = null == c ? void 0 : c.code;
        return (0, h.uJ)(r) ? t : t.replace(E.mg, encodeURIComponent(r))
    }, [n, null == c ? void 0 : c.code]), x = (0, v.HJ)({
        quest: n,
        questContent: s,
        redemptionLink: C,
        sourceQuestContent: o
    });
    return (0, r.jsx)("div", {
        ref: m,
        children: (0, r.jsx)(i.Modal, {
            size: "md",
            title: P.intl.string(P.t.NkZ7OU),
            actions: [null != C ? {
                variant: "primary",
                text: P.intl.string(P.t["+zx47d"]),
                onClick: x
            } : {
                variant: "primary",
                text: P.intl.string(P.t["/g10LC"]),
                onClick: d
            }],
            preview: (0, r.jsxs)(r.Fragment, {
                children: [(0, r.jsx)(l.Text, {
                    variant: "eyebrow",
                    color: "interactive-text-default",
                    className: R.V6,
                    children: P.intl.string(P.t.srzsU2)
                }), (0, r.jsx)(D, {
                    rewardCode: c,
                    questContent: s,
                    questId: n.id,
                    sourceQuestContent: o
                })]
            }),
            onClose: d,
            transitionState: u,
            children: (0, r.jsx)(l.Text, {
                variant: "text-sm/medium",
                color: "text-default",
                className: R.tG,
                children: f.A.parse(p, !1, {
                    allowLinks: !0
                })
            })
        })
    })
}

function L(e) {
    let {
        quest: t,
        questContent: n,
        rewardCode: a,
        sourceQuestContent: i,
        onClaimInstructions: s
    } = e;
    return (0, r.jsxs)("div", {
        className: R.hQ,
        children: [(0, r.jsx)("div", {
            className: R.tE,
            children: (0, r.jsx)(A.A, {
                className: R.Ag,
                quest: t,
                questContent: n,
                sourceQuestContent: i
            })
        }), (0, r.jsxs)("div", {
            className: R.dD,
            children: [(0, r.jsx)(l.Heading, {
                variant: "heading-xl/semibold",
                color: "text-strong",
                className: R.R_,
                children: P.intl.string(P.t["5j/Zym"])
            }), (0, r.jsx)(l.Text, {
                variant: "text-sm/medium",
                color: "text-subtle",
                children: P.intl.format(P.t["ESmp2+"], {
                    onClaimInstructions: s
                })
            })]
        }), (0, r.jsx)(D, {
            className: R.DA,
            rewardCode: a,
            questContent: n,
            questId: t.id,
            sourceQuestContent: i,
            inputClassName: R.Uy
        })]
    })
}

function q(e) {
    var t;
    let n, i, o, c, {
            initialQuest: f,
            onClose: p,
            transitionState: C,
            sourceQuestContent: h
        } = e,
        x = null != (t = (0, g.C5)(f.id)) ? t : f,
        j = _.uF.REWARD_MODAL,
        {
            rewardCode: A,
            isFetchingRewardCode: P,
            isClaimingReward: R
        } = (0, s.cf)([y.A], () => ({
            rewardCode: y.A.getRewardCode(x.id),
            isFetchingRewardCode: y.A.isFetchingRewardCode(x.id),
            isClaimingReward: y.A.isClaimingReward(x.id)
        })),
        {
            hasError: D,
            setHasError: q
        } = (0, v.Ln)({
            isClaimingReward: R,
            isFetchingRewardCode: P,
            quest: x,
            questContent: j,
            rewardCode: A
        });
    n = (0, u.A)(() => {
        q(!0)
    }), i = m.default.useIsCaptchaModalOpen(), o = (0, d.A)(i), c = !!(!i && o), a.useEffect(() => {
        c && n()
    }, [c, n]);
    let I = null == A && (P || R),
        S = D && !R && !P;
    return (0, r.jsx)(N.A, {
        onClose: p,
        transitionState: C,
        quest: x,
        sourceQuestContent: h,
        location: E.rE.REWARD_CODE_MODAL,
        isRewardContentLoading: I,
        rewardContentHasError: S,
        rewardContent: S ? null : (0, r.jsx)(w.A, {
            rewardName: (0, b.mq)(x.config),
            children: (0, r.jsx)(L, {
                quest: x,
                questContent: j,
                rewardCode: A,
                sourceQuestContent: h,
                onClaimInstructions: () => {
                    (0, l.mMO)(() => Promise.resolve(e => (0, r.jsx)(O.R, {
                        questOrQuests: x,
                        questContent: j,
                        sourceQuestContent: h,
                        children: t => {
                            var n, a;
                            return (0, r.jsx)(k, (n = function(e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var n = null != arguments[t] ? arguments[t] : {},
                                        r = Object.keys(n);
                                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                                        return Object.getOwnPropertyDescriptor(n, e).enumerable
                                    }))), r.forEach(function(t) {
                                        var r;
                                        r = n[t], t in e ? Object.defineProperty(e, t, {
                                            value: r,
                                            enumerable: !0,
                                            configurable: !0,
                                            writable: !0
                                        }) : e[t] = r
                                    })
                                }
                                return e
                            }({}, e), a = a = {
                                impressionRef: t,
                                quest: x,
                                questContent: j,
                                sourceQuestContent: h,
                                rewardCode: A
                            }, Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(a)) : (function(e, t) {
                                var n = Object.keys(e);
                                if (Object.getOwnPropertySymbols) {
                                    var r = Object.getOwnPropertySymbols(e);
                                    n.push.apply(n, r)
                                }
                                return n
                            })(Object(a)).forEach(function(e) {
                                Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(a, e))
                            }), n))
                        }
                    })), {
                        stackingBehavior: "replace"
                    })
                }
            })
        })
    })
}