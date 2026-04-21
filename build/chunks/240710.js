/** chunk id: 240710 params = (module,exports,require) **/
n.d(e, {
    A: () => j
});
var i = n(627968),
    s = n(64700),
    a = n(731355),
    r = n(158954),
    l = n(435371),
    d = n(736653),
    c = n(341915),
    o = n(579473),
    u = n(590202),
    m = n(971649),
    h = n(651892),
    f = n(901406),
    g = n(814793),
    x = n(241124),
    C = n(918338),
    I = n(201805),
    b = n(491145),
    N = n(654487),
    A = n(818348),
    p = n(985018),
    v = n(970197);

function T(t) {
    let {
        quest: e,
        sourceQuestContent: n,
        onLoadComplete: T,
        preCtaClick: j
    } = t, E = (0, d.Ay)(), _ = (0, r.Mwr)(E) ? A.NJ.DARK : A.NJ.LIGHT, y = (0, m.go)(), O = (0, g.E0)(e.config), R = async () => {
        await j?.(), (0, f.pu)(e, {
            content: c.uF.REWARD_MODAL,
            ctaContent: u.Cy.OPEN_GAME_LINK,
            impressionId: y,
            sourceQuestContent: n
        })
    }, L = s.useMemo(() => {
        let t = e.config.ctaConfig?.subtitle;
        return null != t ? t : (0, g.pv)(e.config) !== a.Z.GAMEPLAY || e.config.features.includes(N.Li.NON_GAMING_PLAY_QUEST) || (0, g.ui)(e) ? p.intl.string(p.t.y8Xf3k) : p.intl.string(p.t["wirwN+"])
    }, [e]), k = (0, b.A)(e, {
        impressionId: y,
        sourceQuestContent: n
    }, j) ?? {
        ctaText: (0, h.wr)(e),
        ctaIcon: r.We5,
        ctaVariant: "primary",
        onClickCta: R,
        title: p.intl.format(p.t.EAYZAr, {
            questName: e.config.messages.questName
        }),
        subtitle: L,
        ctaIconPosition: "end"
    }, {
        isLoading: M
    } = (0, x.Gk)();
    s.useEffect(() => {
        M || T()
    }, [M, T]);
    let D = (0, I.Lk)({
        isShareable: O,
        questId: e.id,
        trackingCtx: s.useMemo(() => ({
            content: c.uF.REWARD_MODAL,
            ctaContent: u.Cy.REWARD_MODAL_COPY_LINK,
            impressionId: y,
            sourceQuestContent: n
        }), [y, n])
    });
    return (0, i.jsxs)("div", {
        className: v.kL,
        children: [(0, i.jsx)(x.Sn, {
            id: "hero-display",
            children: t => (0, i.jsx)(C.A, {
                quest: e,
                imageSize: {
                    width: 908,
                    height: 380
                },
                containerClassName: v.WQ,
                isInteracting: !0,
                assetRef: t
            })
        }), (0, i.jsx)("div", {
            className: v.Lt,
            children: (0, i.jsx)(x.Sn, {
                id: "partner-logotype",
                children: t => (0, i.jsx)("img", {
                    ref: t,
                    className: v.a$,
                    alt: p.intl.formatToPlainString(p.t.rtm15P, {
                        name: e.config.messages.gameTitle
                    }),
                    src: (0, o.tW)(e, o.fY.LOGO_TYPE, _).url
                })
            })
        }), (0, i.jsxs)("div", {
            className: v.Th,
            children: [(0, i.jsxs)("div", {
                className: v.Ly,
                children: [(0, i.jsx)(r.DZT, {
                    variant: "heading-md/semibold",
                    color: "text-strong",
                    className: v.fx,
                    children: k.title
                }), (0, i.jsx)(r.EYj, {
                    variant: "text-sm/medium",
                    color: "text-subtle",
                    children: k.subtitle
                })]
            }), (0, i.jsx)(x.Sn, {
                id: "partner-game-tile",
                children: t => (0, i.jsx)("img", {
                    ref: t,
                    className: v.rw,
                    alt: p.intl.formatToPlainString(p.t.rtm15P, {
                        name: e.config.messages.gameTitle
                    }),
                    src: (0, o.tW)(e, o.fY.GAME_TILE, _).url
                })
            })]
        }), (0, i.jsx)("div", {
            className: v.tu,
            children: (0, i.jsxs)(r.e2v, {
                size: "sm",
                direction: "horizontal",
                fullWidth: !0,
                fullWidthContainer: !0,
                children: [O && (0, i.jsx)(l.m_, {
                    text: p.intl.string(p.t.WmfZHZ),
                    children: (0, i.jsx)(r.K0, {
                        icon: r.qYV,
                        onClick: D,
                        "aria-label": p.intl.string(p.t.WmfZHZ),
                        variant: "secondary"
                    })
                }), (0, i.jsx)(r.$nd, {
                    variant: k.ctaVariant,
                    text: k.ctaText,
                    onClick: k.onClickCta,
                    fullWidth: !0,
                    icon: k.ctaIcon,
                    iconPosition: k.ctaIconPosition
                })]
            })
        })]
    })
}

function j(t) {
    let {
        quest: e,
        location: n
    } = t;
    return (0, i.jsx)(x.jY, {
        source: n,
        questId: e.id,
        isPreview: e.preview,
        children: (0, i.jsx)(T, {
            ...t
        })
    })
}