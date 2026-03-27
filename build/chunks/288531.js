/** chunk id: 288531 params = (module,exports,require) **/
n.d(t, {
    A: () => M
});
var i = n(627968);
n(64700);
var a = n(503698),
    r = n.n(a),
    l = n(696292),
    s = n(311907),
    o = n(435371),
    d = n(397927),
    c = n(409626),
    u = n(773669),
    _ = n(975571),
    m = n(252424),
    h = n(859703),
    p = n(33621),
    g = n(714510),
    A = n(890687),
    x = n(18437),
    f = n(590202),
    C = n(92246),
    I = n(792620),
    E = n(201805),
    b = n(212614),
    v = n(79545),
    T = n(646764),
    y = n(545986),
    S = n(433745),
    N = n(654487),
    j = n(652215),
    L = n(985018),
    R = n(364237);

function P(e) {
    let {
        containerSize: t,
        onClick: n,
        text: a,
        tabIndex: r
    } = e;
    return "xs" === t ? (0, i.jsx)(d.DUT, {
        tabIndex: r,
        className: R.CU,
        tag: "span",
        onClick: n,
        children: (0, i.jsx)(d.Text, {
            variant: "text-sm/medium",
            color: "text-link",
            children: a
        })
    }) : (0, i.jsx)(d.Button, {
        fullWidth: !0,
        tabIndex: r,
        variant: "secondary",
        onClick: n,
        text: a
    })
}

function w(e) {
    let {
        quest: t,
        progressState: n,
        questContent: a,
        questContentPosition: r,
        sourceQuestContent: l
    } = e, c = (0, s.bG)([h.A], () => h.A.isEnrolling(t.id)), u = (0, I.vv)(t), _ = (0, I.Cr)(t), m = (0, E._c)({
        progressState: n,
        quest: t,
        questContent: a,
        questContentPosition: r,
        inGiftInventory: !1,
        isVideoQuest: u,
        inGameQuest: _,
        sourceQuestContent: l
    });
    return (0, i.jsx)(o.m_, {
        text: m.tooltipText,
        children: (0, i.jsx)(d.Button, {
            fullWidth: !0,
            variant: "primary",
            disabled: null == m.onClick,
            loading: c,
            onClick: m.onClick ?? void 0,
            text: m.text
        })
    }, m.tooltipText)
}
let M = e => {
    let {
        quest: t,
        location: n,
        size: a,
        isFocused: E,
        isQuestExpired: M,
        isExpanded: D,
        isAnimating: k,
        contentPosition: O,
        sourceQuestContent: U
    } = e, B = (0, A.In)(t), G = (0, A.S5)(t.userStatus?.completedAt, {
        year: "numeric",
        month: "long",
        day: "numeric"
    }), F = B >= A.F3.ACCEPTED, H = B >= A.F3.COMPLETED, V = D || k, q = (0, g.wT)(t, N.rE.QUESTS_CARD, n, U), W = (0, x.Ut)(), z = (0, A.fc)(t), Y = (0, g.mU)({
        quest: t,
        taskDetails: z,
        location: N.rE.QUESTS_CARD,
        questContent: l.u.QUESTS_EMBED,
        sourceQuestContent: U,
        gameProfileSource: c.Ob.QuestEmbed
    }), Q = (0, s.bG)([h.A], () => null != h.A.questEnrollmentBlockedUntil, []), K = p.t.useConfig({
        location: N.rE.QUEST_HOME_DESKTOP
    }), J = (0, v.Pd)(t), X = (0, s.bG)([u.default], () => u.default.locale), Z = M && !H, $ = (0, I.vv)(t);
    return (0, i.jsx)("div", {
        className: R.zr,
        children: (0, i.jsxs)("div", {
            className: r()(R.nw, {
                [R.dF]: "sm" === a,
                [R.e5]: "xs" === a
            }),
            style: {
                visibility: V ? "inherit" : "hidden"
            },
            "aria-hidden": !V,
            children: [(0, i.jsx)(o.m_, {
                text: Z ? L.intl.string(L.t["04MTGf"]) : null,
                shouldShow: Z,
                children: (0, i.jsxs)("div", {
                    className: R.D9,
                    children: [M && (0, i.jsx)("div", {
                        className: R.FL,
                        children: (0, i.jsx)(d.EpV, {
                            color: d.LU0.colors.WHITE
                        })
                    }), (0, i.jsx)(T.A, {
                        autoplay: E,
                        className: r()({
                            [R.Lu]: "lg" === a,
                            [R.je]: "sm" === a,
                            [R.ks]: "xs" === a
                        }),
                        learnMoreStyle: "text",
                        quest: t,
                        questContent: n,
                        questContentPosition: O,
                        sourceQuestContent: U
                    })]
                })
            }), (0, i.jsxs)("div", {
                className: R.oW,
                children: [!$ && (0, i.jsx)(d.Text, {
                    variant: (0, S.a3)(n) && !F && "lg" === a ? "text-lg/medium" : "lg" === a ? "text-md/medium" : "sm" === a ? "text-sm/medium" : "text-xs/medium",
                    className: R.$p,
                    children: M ? L.intl.formatToPlainString(L.t["ge+AJp"], {
                        questName: t.config.messages.questName
                    }) : q
                }), (0, i.jsx)(d.Text, {
                    variant: "lg" === a ? "text-sm/medium" : "text-xs/medium",
                    color: "text-muted",
                    children: function(e) {
                        let {
                            quest: t,
                            locale: n,
                            isQuestExpired: i,
                            collectibleQuestRewardDescription: a,
                            formattedCompletionDate: r
                        } = e, l = t.userStatus?.completedAt != null, s = l && t.userStatus?.claimedAt != null, o = (0, C.kr)({
                            quest: t
                        }), d = (0, C.mH)(t.config);
                        if (s) {
                            let e = o ? (0, C.cg)({
                                    quest: t,
                                    idx: t.userStatus?.claimedTier
                                }) : null,
                                n = e?.messages.nameWithArticle ?? null;
                            return null != n ? L.intl.formatToPlainString(L.t.RrxtPU, {
                                reward: n,
                                date: r
                            }) : L.intl.formatToPlainString(L.t.zNoqRe, {
                                reward: d,
                                date: r
                            })
                        }
                        if (l) return o ? L.intl.formatToPlainString(L.t["l1jCM/"], {
                            date: r
                        }) : L.intl.formatToPlainString(L.t.zNoqRe, {
                            reward: d,
                            date: r
                        });
                        let c = o ? (0, C.cg)({
                            quest: t,
                            idx: 0
                        }) : null;
                        return i ? L.intl.formatToPlainString(L.t.DT3auf, {
                            reward: c?.messages.nameWithArticle ?? d
                        }) : null != c && null != c.approximateCount ? L.intl.format(L.t["4bMK1z"], {
                            maxReward: c.messages.nameWithArticle,
                            maxRewardCount: (0, m.tg)(c.approximateCount, n),
                            helpCenterLink: _.A.getArticleURL(j.MVz.QUESTS_LEARN_MORE)
                        }) : a
                    }({
                        quest: t,
                        locale: X,
                        isQuestExpired: M,
                        collectibleQuestRewardDescription: Y,
                        formattedCompletionDate: G
                    })
                })]
            }), Q ? (0, i.jsxs)(d.ButtonGroup, {
                direction: "horizontal",
                align: "center",
                fullWidth: "lg" !== a,
                children: [(0, i.jsx)(d.Button, {
                    variant: "secondary",
                    disabled: !0,
                    text: L.intl.string(L.t.V293qn)
                }), (0, i.jsx)(d.Button, {
                    variant: "primary",
                    onClick: () => (0, y.m6)(t, n, U),
                    text: L.intl.string(L.t.vY9GgG)
                })]
            }) : (0, i.jsxs)(d.ButtonGroup, {
                direction: "horizontal",
                align: "center",
                justify: "end",
                fullWidth: "lg" !== a,
                children: [(0, i.jsx)(P, {
                    containerSize: a,
                    onClick: () => {
                        (0, y.navigateToQuestHome)({
                            fromContent: n,
                            questId: t.id
                        }), W({
                            questId: t.id,
                            questContent: n,
                            questContentPosition: O,
                            questContentCTA: f.Cy.LEARN_MORE,
                            sourceQuestContent: U
                        })
                    },
                    text: L.intl.string(L.t.LLLLPD)
                }), !Z && (K.enabled && J === v.UA.UNENROLLED && K.enabledQuestStates.has(v.UA.UNENROLLED) ? (0, i.jsx)(b.A, {
                    quest: t,
                    surface: v.V3.QUEST_EMBED,
                    analyticsCtxQuestContent: n,
                    analyticsCtxSourceQuestContent: U,
                    analyticsCtxQuestContentPosition: O
                }) : (0, i.jsx)(w, {
                    quest: t,
                    progressState: B,
                    questContent: n,
                    sourceQuestContent: U
                }))]
            })]
        })
    })
}