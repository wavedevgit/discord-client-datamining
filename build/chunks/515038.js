/** chunk id: 515038 params = (module,exports,require) **/
n.d(t, {
    A: () => N
});
var a = n(627968),
    i = n(64700),
    s = n(503698),
    l = n.n(s),
    r = n(497766),
    o = n(311907),
    d = n(397927),
    c = n(765671),
    u = n(775602),
    m = n(409626),
    h = n(106799),
    x = n(714510),
    p = n(890687),
    g = n(710969),
    _ = n(92246),
    f = n(453384),
    v = n(646764),
    b = n(398025),
    j = n(516226),
    A = n(720875),
    C = n(713457),
    T = n(419367),
    E = n(985018),
    S = n(196240);
let y = async () => await n.e("40119").then(n.t.bind(n, 718698, 19));

function N(e) {
    let {
        quest: t,
        questContent: n,
        isHovering: s,
        contentPosition: N,
        rowIndex: O,
        isVisibleInViewport: R,
        onReceiveErrorHints: k,
        sourceQuestContent: w
    } = e, D = i.useRef(null), M = (0, _.mq)(t.config), P = (0, _.mH)(t.config), L = t.userStatus?.enrolledAt != null, {
        ref: U,
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
    }), H = t.userStatus?.completedAt != null, W = t.userStatus?.claimedAt != null, K = (0, _.ks)(t.config), z = (0, _._Z)(t.config), {
        completedRatio: $,
        completedRatioDisplay: q
    } = (0, p.O9)(t), Y = (0, x.gj)(t, w, m.Ob.QuestHome, D), Q = i.useMemo(() => W && K ? E.intl.format(E.t["8Op4c4"], {
        balanceHook: () => (0, a.jsxs)(I, {
            questId: t.id,
            children: [(0, a.jsx)(h.A, {
                shouldUseThemeColor: !0,
                className: S.Kq,
                customSize: 14
            }), z]
        }, t.id)
    }) : W ? (0, a.jsx)(I, {
        questId: t.id,
        children: M
    }) : K ? E.intl.format(E.t.ro1sze, {
        balanceHook: () => (0, a.jsxs)(I, {
            questId: t.id,
            children: [(0, a.jsx)(h.A, {
                shouldUseThemeColor: !0,
                className: S.Kq,
                customSize: 14
            }), z]
        }, t.id)
    }) : E.intl.format(E.t["0IUT4Y"], {
        rewardWithArticleHook: () => (0, a.jsx)(I, {
            questId: t.id,
            children: P
        }, t.id)
    }), [M, W, P, t.id, z, K]), J = i.useMemo(() => {
        if (null != Y) return (0, a.jsx)(d.Text, {
            variant: "text-sm/medium",
            color: "text-muted",
            className: S.h_,
            children: Y
        })
    }, [Y]), X = (0, o.bG)([u.A], () => u.A.useReducedMotion);
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
                    children: [!W && H && (0, a.jsx)("div", {
                        className: S.Nz
                    }), L ? (0, a.jsxs)("div", {
                        className: S.Tr,
                        children: [H && (0, a.jsx)(d.akl, {
                            importData: y,
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
                ref: U,
                className: l()(S.FS, {
                    [S.wq]: !G
                }),
                children: [(0, a.jsx)(d.Heading, {
                    variant: "eyebrow",
                    color: "text-brand",
                    className: S.G$,
                    children: E.intl.format(E.t.EAYZAr, {
                        questName: t.config.messages.questName
                    })
                }), (0, a.jsx)(d.Text, {
                    variant: "text-md/semibold",
                    color: "text-strong",
                    className: S.wx,
                    children: Q
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
            rowIndex: O,
            onReceiveErrorHints: k,
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