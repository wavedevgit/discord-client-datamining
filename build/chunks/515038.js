/** Chunk was on 36054 **/
/** chunk id: 515038, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => O
}), n(228524);
var a = n(627968),
    l = n(64700),
    r = n(503698),
    i = n.n(r),
    s = n(108531),
    o = n(311907),
    c = n(397927),
    d = n(765671),
    u = n(775602),
    m = n(106799),
    p = n(714510),
    h = n(890687),
    x = n(710969),
    g = n(92246),
    f = n(453384),
    b = n(646764),
    v = n(516226),
    j = n(720875),
    _ = n(713457),
    y = n(419367),
    A = n(985018),
    C = n(196240);
let S = async () => await n.e("40119").then(n.t.bind(n, 718698, 19));

function O(e) {
    var t, n, r, O, E;
    let {
        quest: N,
        questContent: w,
        isHovering: I,
        contentPosition: k,
        rowIndex: P,
        isVisibleInViewport: R,
        onReceiveErrorHints: D,
        sourceQuestContent: M
    } = e, L = l.useRef(null), U = (0, g.mq)(N.config), B = (0, g.mH)(N.config), G = (null == (t = N.userStatus) ? void 0 : t.enrolledAt) != null, {
        ref: F,
        scrollHeight: V
    } = (0, d.wR)(), W = 104 !== V, {
        onAssetLoadComplete: H
    } = l.useContext(v.M), {
        expansionSpring: K
    } = (0, c.zhh)({
        expansionSpring: +!!I,
        config: (O = function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {},
                    a = Object.keys(n);
                "function" == typeof Object.getOwnPropertySymbols && (a = a.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable
                }))), a.forEach(function(t) {
                    var a;
                    a = n[t], t in e ? Object.defineProperty(e, t, {
                        value: a,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }) : e[t] = a
                })
            }
            return e
        }({}, y.N), E = E = {
            clamp: !0
        }, Object.getOwnPropertyDescriptors ? Object.defineProperties(O, Object.getOwnPropertyDescriptors(E)) : (function(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var a = Object.getOwnPropertySymbols(e);
                n.push.apply(n, a)
            }
            return n
        })(Object(E)).forEach(function(e) {
            Object.defineProperty(O, e, Object.getOwnPropertyDescriptor(E, e))
        }), O)
    }), z = (null == (n = N.userStatus) ? void 0 : n.completedAt) != null, q = (null == (r = N.userStatus) ? void 0 : r.claimedAt) != null, Q = (0, g.ks)(N.config), Y = (0, g._Z)(N.config), {
        completedRatio: J,
        completedRatioDisplay: X
    } = (0, h.O9)(N), $ = (0, p.gj)(N, M, L), Z = l.useMemo(() => q && Q ? A.intl.format(A.t["8Op4c4"], {
        balanceHook: () => (0, a.jsxs)(T, {
            questId: N.id,
            children: [(0, a.jsx)(m.A, {
                shouldUseThemeColor: !0,
                className: C.Kq,
                customSize: 14
            }), Y]
        }, N.id)
    }) : q ? (0, a.jsx)(T, {
        questId: N.id,
        children: U
    }) : Q ? A.intl.format(A.t.ro1sze, {
        balanceHook: () => (0, a.jsxs)(T, {
            questId: N.id,
            children: [(0, a.jsx)(m.A, {
                shouldUseThemeColor: !0,
                className: C.Kq,
                customSize: 14
            }), Y]
        }, N.id)
    }) : A.intl.format(A.t["0IUT4Y"], {
        rewardWithArticleHook: () => (0, a.jsx)(T, {
            questId: N.id,
            children: B
        }, N.id)
    }), [U, q, B, N.id, Y, Q]), ee = l.useMemo(() => {
        if (null != $) return (0, a.jsx)(c.Text, {
            variant: "text-sm/medium",
            color: "text-muted",
            className: C.h_,
            children: $
        })
    }, [$]), et = (0, o.bG)([u.A], () => u.A.useReducedMotion);
    return (0, a.jsxs)("div", {
        className: C.kL,
        ref: L,
        children: [(0, a.jsxs)(s.animated.div, {
            style: {
                maxHeight: K.to([0, 1], [104, (null != V ? V : 0) + 12])
            },
            className: C.z,
            children: [(0, a.jsx)(j.A, {
                showPlaceholder: !R,
                width: 80,
                height: 80,
                children: (0, a.jsxs)("div", {
                    className: C.c6,
                    children: [!q && z && (0, a.jsx)("div", {
                        className: C.Nz
                    }), G ? (0, a.jsxs)("div", {
                        className: C.Tr,
                        children: [z && (0, a.jsx)(c.akl, {
                            importData: S,
                            className: C.t_,
                            loop: !1,
                            autoplay: !1,
                            shouldAnimate: !et
                        }), (0, a.jsx)(f.A, {
                            quest: N,
                            size: 76,
                            percentComplete: J,
                            percentCompleteText: I && !(0, x.Ic)(N) ? X : void 0,
                            children: (0, a.jsx)("div", {
                                className: C.yv,
                                children: (0, a.jsx)(b.A, {
                                    quest: N,
                                    questContent: w,
                                    className: C.ve,
                                    autoplay: I,
                                    onLoadComplete: H,
                                    lazyLoad: !0,
                                    sourceQuestContent: M
                                })
                            })
                        })]
                    }) : (0, a.jsx)(b.A, {
                        quest: N,
                        autoplay: I,
                        questContent: w,
                        className: C.eB,
                        onLoadComplete: H,
                        lazyLoad: !0,
                        sourceQuestContent: M
                    })]
                })
            }), (0, a.jsxs)("div", {
                ref: F,
                className: i()(C.FS, {
                    [C.wq]: !W
                }),
                children: [(0, a.jsx)(c.Heading, {
                    variant: "eyebrow",
                    color: "text-brand",
                    className: C.G$,
                    children: A.intl.format(A.t.EAYZAr, {
                        questName: N.config.messages.questName
                    })
                }), (0, a.jsx)(c.Text, {
                    variant: "text-md/semibold",
                    color: "text-strong",
                    className: C.wx,
                    children: Z
                }), ee]
            }), W && (0, a.jsx)(s.animated.div, {
                style: {
                    opacity: K.to([0, 1], [1, 0])
                },
                className: C.hS
            })]
        }), (0, a.jsx)(_.A, {
            quest: N,
            questContent: w,
            contentPosition: k,
            rowIndex: P,
            onReceiveErrorHints: D,
            sourceQuestContent: M
        })]
    })
}
let T = l.memo(function(e) {
    let {
        questId: t,
        children: n
    } = e;
    return (0, a.jsx)(c.Text, {
        variant: "text-md/semibold",
        color: "text-strong",
        tag: "span",
        className: C.wx,
        children: n
    }, "".concat(t, "_reward"))
})