/** chunk id: 240710 params = (module,exports,require) **/
n.d(t, {
    A: () => C
});
var i = n(627968),
    a = n(64700),
    r = n(731355),
    s = n(158954),
    l = n(435371),
    o = n(736653),
    d = n(341915),
    c = n(579473),
    _ = n(590202),
    u = n(971649),
    p = n(651892),
    E = n(901406),
    m = n(814793),
    h = n(241124),
    g = n(918338),
    f = n(201805),
    S = n(654487),
    v = n(818348),
    A = n(985018),
    N = n(861616);

function T(e) {
    let {
        quest: t,
        sourceQuestContent: n,
        onLoadComplete: T,
        preCtaClick: C
    } = e, I = (0, o.Ay)(), R = (0, s.Mwr)(I) ? v.NJ.DARK : v.NJ.LIGHT, y = (0, p.wr)(t), x = (0, u.go)(), D = (0, m.E0)(t.config), L = async () => {
        await C?.(), (0, E.pu)(t, {
            content: d.uF.REWARD_MODAL,
            ctaContent: _.Cy.OPEN_GAME_LINK,
            impressionId: x,
            sourceQuestContent: n
        })
    }, j = a.useMemo(() => {
        let e = t.config.ctaConfig?.subtitle;
        return null != e ? e : (0, m.pv)(t.config) !== r.Z.GAMEPLAY || t.config.features.includes(S.Li.NON_GAMING_PLAY_QUEST) || (0, m.ui)(t) ? A.intl.string(A.t.y8Xf3k) : A.intl.string(A.t["wirwN+"])
    }, [t]), {
        isLoading: O
    } = (0, h.Gk)();
    a.useEffect(() => {
        O || T()
    }, [O, T]);
    let k = (0, f.Lk)({
        isShareable: D,
        questId: t.id,
        trackingCtx: a.useMemo(() => ({
            content: d.uF.REWARD_MODAL,
            ctaContent: _.Cy.REWARD_MODAL_COPY_LINK,
            impressionId: x,
            sourceQuestContent: n
        }), [x, n])
    });
    return (0, i.jsxs)("div", {
        className: N.kL,
        children: [(0, i.jsx)(h.Sn, {
            id: "hero-display",
            children: e => (0, i.jsx)(g.A, {
                quest: t,
                imageSize: {
                    width: 908,
                    height: 380
                },
                containerClassName: N.WQ,
                isInteracting: !0,
                assetRef: e
            })
        }), (0, i.jsx)("div", {
            className: N.Lt,
            children: (0, i.jsx)(h.Sn, {
                id: "partner-logotype",
                children: e => (0, i.jsx)("img", {
                    ref: e,
                    className: N.a$,
                    alt: A.intl.formatToPlainString(A.t.rtm15P, {
                        name: t.config.messages.gameTitle
                    }),
                    src: (0, c.tW)(t, c.fY.LOGO_TYPE, R).url
                })
            })
        }), (0, i.jsxs)("div", {
            className: N.Th,
            children: [(0, i.jsxs)("div", {
                className: N.Ly,
                children: [(0, i.jsx)(s.DZT, {
                    variant: "heading-md/semibold",
                    color: "text-strong",
                    className: N.fx,
                    children: A.intl.format(A.t.EAYZAr, {
                        questName: t.config.messages.questName
                    })
                }), (0, i.jsx)(s.EYj, {
                    variant: "text-sm/medium",
                    color: "text-subtle",
                    children: j
                })]
            }), (0, i.jsx)(h.Sn, {
                id: "partner-game-tile",
                children: e => (0, i.jsx)("img", {
                    ref: e,
                    className: N.rw,
                    alt: A.intl.formatToPlainString(A.t.rtm15P, {
                        name: t.config.messages.gameTitle
                    }),
                    src: (0, c.tW)(t, c.fY.GAME_TILE, R).url
                })
            })]
        }), (0, i.jsx)("div", {
            className: N.tu,
            children: (0, i.jsxs)(s.e2v, {
                size: "sm",
                direction: "horizontal",
                fullWidth: !0,
                fullWidthContainer: !0,
                children: [D && (0, i.jsx)(l.m_, {
                    text: A.intl.string(A.t.WmfZHZ),
                    children: (0, i.jsx)(s.K0, {
                        icon: s.qYV,
                        onClick: k,
                        "aria-label": A.intl.string(A.t.WmfZHZ),
                        variant: "secondary"
                    })
                }), (0, i.jsx)(s.$nd, {
                    variant: "primary",
                    text: y,
                    onClick: L,
                    fullWidth: !0,
                    icon: s.We5,
                    iconPosition: "end"
                })]
            })
        })]
    })
}

function C(e) {
    let {
        quest: t,
        location: n
    } = e;
    return (0, i.jsx)(h.jY, {
        source: n,
        questId: t.id,
        isPreview: t.preview,
        children: (0, i.jsx)(T, {
            ...e
        })
    })
}