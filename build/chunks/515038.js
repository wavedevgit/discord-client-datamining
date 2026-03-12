/** chunk id: 515038 params = (module,exports,require) **/
n.d(t, {
    A: () => N
});
var a = n(627968),
    i = n(64700),
    s = n(503698),
    l = n.n(s),
    r = n(490249),
    o = n(311907),
    d = n(397927),
    c = n(765671),
    u = n(775602),
    m = n(409626),
    h = n(106799),
    p = n(714510),
    x = n(890687),
    g = n(710969),
    _ = n(92246),
    f = n(453384),
    v = n(646764),
    b = n(398025),
    j = n(516226),
    A = n(720875),
    C = n(713457),
    T = n(419367),
    y = n(985018),
    S = n(962734);
let E = async () => await n.e("40119").then(n.t.bind(n, 718698, 19));

function N(e) {
    let {
        quest: t,
        questContent: n,
        isHovering: s,
        contentPosition: N,
        rowIndex: k,
        isVisibleInViewport: R,
        onReceiveErrorHints: O,
        sourceQuestContent: w
    } = e, D = i.useRef(null), M = (0, _.mq)(t.config), P = (0, _.mH)(t.config), U = t.userStatus?.enrolledAt != null, {
        ref: L,
        scrollHeight: B
    } = (0, c.wR)(), G = 104 !== B, {
        onAssetLoadComplete: F
    } = i.useContext(j.M), {
        expansionSpring: V
    } = (0, d.zhh)({
        expansionSpring: +!!s,
        config: {
            ...T.N,
            clamp: !0
        }
    }), W = t.userStatus?.completedAt != null, H = t.userStatus?.claimedAt != null, K = (0, _.ks)(t.config), z = (0, _._Z)(t.config), {
        completedRatio: $,
        completedRatioDisplay: q
    } = (0, x.O9)(t), Q = (0, p.gj)(t, w, m.Ob.QuestHome, D), Y = i.useMemo(() => H && K ? y.intl.format(y.t["8Op4c4"], {
        balanceHook: () => (0, a.jsxs)(I, {
            questId: t.id,
            children: [(0, a.jsx)(h.A, {
                shouldUseThemeColor: !0,
                className: S.Kq,
                customSize: 14
            }), z]
        }, t.id)
    }) : H ? (0, a.jsx)(I, {
        questId: t.id,
        children: M
    }) : K ? y.intl.format(y.t.ro1sze, {
        balanceHook: () => (0, a.jsxs)(I, {
            questId: t.id,
            children: [(0, a.jsx)(h.A, {
                shouldUseThemeColor: !0,
                className: S.Kq,
                customSize: 14
            }), z]
        }, t.id)
    }) : y.intl.format(y.t["0IUT4Y"], {
        rewardWithArticleHook: () => (0, a.jsx)(I, {
            questId: t.id,
            children: P
        }, t.id)
    }), [M, H, P, t.id, z, K]), J = i.useMemo(() => {
        if (null != Q) return (0, a.jsx)(d.Text, {
            variant: "text-sm/medium",
            color: "text-muted",
            className: S.h_,
            children: Q
        })
    }, [Q]), X = (0, o.bG)([u.A], () => u.A.useReducedMotion);
    return (0, a.jsxs)("div", {
        className: S.kL,
        ref: D,
        children: [(0, a.jsxs)(r.animated.div, {
            style: {
                maxHeight: V.to([0, 1], [104, (B ?? 0) + 12])
            },
            className: S.z,
            children: [(0, a.jsx)(A.A, {
                showPlaceholder: !R,
                width: 80,
                height: 80,
                children: (0, a.jsxs)("div", {
                    className: S.c6,
                    children: [!H && W && (0, a.jsx)("div", {
                        className: S.Nz
                    }), U ? (0, a.jsxs)("div", {
                        className: S.Tr,
                        children: [W && (0, a.jsx)(d.akl, {
                            importData: E,
                            className: S.t_,
                            loop: !1,
                            autoplay: !1,
                            shouldAnimate: !X
                        }), (0, a.jsx)(f.A, {
                            size: 76,
                            percentComplete: $,
                            percentCompleteText: s && !(0, g.Ic)(t) ? q : void 0,
                            children: (0, a.jsx)(v.A, {
                                quest: t,
                                questContent: n,
                                autoplay: s,
                                onLoadComplete: F,
                                lazyLoad: !0,
                                fullWidth: !0,
                                sourceQuestContent: w
                            })
                        })]
                    }) : (0, a.jsx)(v.A, {
                        quest: t,
                        autoplay: s,
                        questContent: n,
                        className: S.eB,
                        onLoadComplete: F,
                        lazyLoad: !0,
                        sourceQuestContent: w
                    })]
                })
            }), (0, a.jsxs)("div", {
                ref: L,
                className: l()(S.FS, {
                    [S.wq]: !G
                }),
                children: [(0, a.jsx)(d.Heading, {
                    variant: "eyebrow",
                    color: "text-brand",
                    className: S.G$,
                    children: y.intl.format(y.t.EAYZAr, {
                        questName: t.config.messages.questName
                    })
                }), (0, a.jsx)(d.Text, {
                    variant: "text-md/semibold",
                    color: "text-strong",
                    className: S.wx,
                    children: Y
                }), J]
            }), G && (0, a.jsx)(r.animated.div, {
                style: {
                    opacity: (0, b.a)(V.to([0, 1], [1, 0]))
                },
                className: S.hS
            })]
        }), (0, a.jsx)(C.A, {
            quest: t,
            questContent: n,
            contentPosition: N,
            rowIndex: k,
            onReceiveErrorHints: O,
            sourceQuestContent: w
        })]
    })
}
let I = i.memo(function(e) {
    let {
        questId: t,
        children: n
    } = e;
    return (0, a.jsx)(d.Text, {
        variant: "text-md/semibold",
        color: "text-strong",
        tag: "span",
        className: S.wx,
        children: n
    }, `${t}_reward`)
})