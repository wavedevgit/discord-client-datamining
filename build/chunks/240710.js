/** Chunk was on 90948 **/
/** chunk id: 240710, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => y
});
var i = n(627968),
    a = n(64700),
    r = n(731355),
    s = n(158954),
    l = n(435371),
    o = n(736653),
    d = n(341915),
    c = n(579473),
    u = n(590202),
    m = n(971649),
    f = n(651892),
    x = n(901406),
    _ = n(814793),
    g = n(241124),
    v = n(918338),
    h = n(201805),
    j = n(654487),
    p = n(818348),
    C = n(985018),
    A = n(861616);

function N(e) {
    let {
        quest: t,
        sourceQuestContent: n,
        onLoadComplete: N
    } = e, y = (0, o.Ay)(), E = (0, s.Mwr)(y) ? p.NJ.DARK : p.NJ.LIGHT, L = (0, f.wr)(t), b = (0, m.go)(), w = (0, _.E0)(t.config), O = a.useMemo(() => {
        var e;
        let n = null == (e = t.config.ctaConfig) ? void 0 : e.subtitle;
        return null != n ? n : (0, _.pv)(t.config) !== r.Z.GAMEPLAY || t.config.features.includes(j.Li.NON_GAMING_PLAY_QUEST) || (0, _.ui)(t) ? C.intl.string(C.t.y8Xf3k) : C.intl.string(C.t["wirwN+"])
    }, [t]), {
        isLoading: D
    } = (0, g.Gk)();
    a.useEffect(() => {
        D || N()
    }, [D, N]);
    let R = (0, h.Lk)({
        isShareable: w,
        questId: t.id,
        trackingCtx: a.useMemo(() => ({
            content: d.uF.REWARD_MODAL,
            ctaContent: u.Cy.REWARD_MODAL_COPY_LINK,
            impressionId: b,
            sourceQuestContent: n
        }), [b, n])
    });
    return (0, i.jsxs)("div", {
        className: A.kL,
        children: [(0, i.jsx)(g.Sn, {
            id: "hero-display",
            children: e => (0, i.jsx)(v.A, {
                quest: t,
                imageSize: {
                    width: 908,
                    height: 380
                },
                containerClassName: A.WQ,
                isInteracting: !0,
                assetRef: e
            })
        }), (0, i.jsx)("div", {
            className: A.Lt,
            children: (0, i.jsx)(g.Sn, {
                id: "partner-logotype",
                children: e => (0, i.jsx)("img", {
                    ref: e,
                    className: A.a$,
                    alt: C.intl.formatToPlainString(C.t.rtm15P, {
                        name: t.config.messages.gameTitle
                    }),
                    src: (0, c.tW)(t, c.fY.LOGO_TYPE, E).url
                })
            })
        }), (0, i.jsxs)("div", {
            className: A.Th,
            children: [(0, i.jsxs)("div", {
                className: A.Ly,
                children: [(0, i.jsx)(s.DZT, {
                    variant: "heading-md/semibold",
                    color: "text-strong",
                    className: A.fx,
                    children: C.intl.format(C.t.EAYZAr, {
                        questName: t.config.messages.questName
                    })
                }), (0, i.jsx)(s.EYj, {
                    variant: "text-sm/medium",
                    color: "text-subtle",
                    children: O
                })]
            }), (0, i.jsx)(g.Sn, {
                id: "partner-game-tile",
                children: e => (0, i.jsx)("img", {
                    ref: e,
                    className: A.rw,
                    alt: C.intl.formatToPlainString(C.t.rtm15P, {
                        name: t.config.messages.gameTitle
                    }),
                    src: (0, c.tW)(t, c.fY.GAME_TILE, E).url
                })
            })]
        }), (0, i.jsx)("div", {
            className: A.tu,
            children: (0, i.jsxs)(s.e2v, {
                size: "sm",
                direction: "horizontal",
                fullWidth: !0,
                fullWidthContainer: !0,
                children: [w && (0, i.jsx)(l.m_, {
                    text: C.intl.string(C.t.WmfZHZ),
                    children: (0, i.jsx)(s.K0, {
                        icon: s.qYV,
                        onClick: R,
                        "aria-label": C.intl.string(C.t.WmfZHZ),
                        variant: "secondary"
                    })
                }), (0, i.jsx)(s.$nd, {
                    variant: "primary",
                    text: L,
                    onClick: () => {
                        (0, x.pu)(t, {
                            content: d.uF.REWARD_MODAL,
                            ctaContent: u.Cy.OPEN_GAME_LINK,
                            impressionId: b,
                            sourceQuestContent: n
                        })
                    },
                    fullWidth: !0,
                    icon: s.We5,
                    iconPosition: "end"
                })]
            })
        })]
    })
}

function y(e) {
    let {
        quest: t,
        location: n
    } = e;
    return (0, i.jsx)(g.jY, {
        source: n,
        questId: t.id,
        isPreview: t.preview,
        children: (0, i.jsx)(N, function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {},
                    i = Object.keys(n);
                "function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable
                }))), i.forEach(function(t) {
                    var i;
                    i = n[t], t in e ? Object.defineProperty(e, t, {
                        value: i,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }) : e[t] = i
                })
            }
            return e
        }({}, e))
    })
}