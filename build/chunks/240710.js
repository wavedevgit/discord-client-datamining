/** chunk id: 240710 params = (module,exports,require) **/
n.d(t, {
    A: () => y
});
var i = n(627968),
    a = n(64700),
    s = n(731355),
    r = n(158954),
    l = n(435371),
    o = n(736653),
    d = n(341915),
    c = n(579473),
    u = n(590202),
    m = n(971649),
    g = n(651892),
    p = n(901406),
    f = n(814793),
    v = n(241124),
    _ = n(918338),
    x = n(201805),
    h = n(654487),
    C = n(818348),
    A = n(985018),
    N = n(661942);

function j(e) {
    let {
        quest: t,
        sourceQuestContent: n,
        onLoadComplete: j,
        preCtaClick: y
    } = e, E = (0, o.Ay)(), D = (0, r.Mwr)(E) ? C.NJ.DARK : C.NJ.LIGHT, k = (0, g.wr)(t), I = (0, m.go)(), L = (0, f.E0)(t.config), S = async () => {
        await y?.(), (0, p.pu)(t, {
            content: d.uF.REWARD_MODAL,
            ctaContent: u.Cy.OPEN_GAME_LINK,
            impressionId: I,
            sourceQuestContent: n
        })
    }, R = a.useMemo(() => {
        let e = t.config.ctaConfig?.subtitle;
        return null != e ? e : (0, f.pv)(t.config) !== s.Z.GAMEPLAY || t.config.features.includes(h.Li.NON_GAMING_PLAY_QUEST) || (0, f.ui)(t) ? A.intl.string(A.t.y8Xf3k) : A.intl.string(A.t["wirwN+"])
    }, [t]), {
        isLoading: b
    } = (0, v.Gk)();
    a.useEffect(() => {
        b || j()
    }, [b, j]);
    let w = (0, x.Lk)({
        isShareable: L,
        questId: t.id,
        trackingCtx: a.useMemo(() => ({
            content: d.uF.REWARD_MODAL,
            ctaContent: u.Cy.REWARD_MODAL_COPY_LINK,
            impressionId: I,
            sourceQuestContent: n
        }), [I, n])
    });
    return (0, i.jsxs)("div", {
        className: N.kL,
        children: [(0, i.jsx)(v.Sn, {
            id: "hero-display",
            children: e => (0, i.jsx)(_.A, {
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
            children: (0, i.jsx)(v.Sn, {
                id: "partner-logotype",
                children: e => (0, i.jsx)("img", {
                    ref: e,
                    className: N.a$,
                    alt: A.intl.formatToPlainString(A.t.rtm15P, {
                        name: t.config.messages.gameTitle
                    }),
                    src: (0, c.tW)(t, c.fY.LOGO_TYPE, D).url
                })
            })
        }), (0, i.jsxs)("div", {
            className: N.Th,
            children: [(0, i.jsxs)("div", {
                className: N.Ly,
                children: [(0, i.jsx)(r.DZT, {
                    variant: "heading-md/semibold",
                    color: "text-strong",
                    className: N.fx,
                    children: A.intl.format(A.t.EAYZAr, {
                        questName: t.config.messages.questName
                    })
                }), (0, i.jsx)(r.EYj, {
                    variant: "text-sm/medium",
                    color: "text-subtle",
                    children: R
                })]
            }), (0, i.jsx)(v.Sn, {
                id: "partner-game-tile",
                children: e => (0, i.jsx)("img", {
                    ref: e,
                    className: N.rw,
                    alt: A.intl.formatToPlainString(A.t.rtm15P, {
                        name: t.config.messages.gameTitle
                    }),
                    src: (0, c.tW)(t, c.fY.GAME_TILE, D).url
                })
            })]
        }), (0, i.jsx)("div", {
            className: N.tu,
            children: (0, i.jsxs)(r.e2v, {
                size: "sm",
                direction: "horizontal",
                fullWidth: !0,
                fullWidthContainer: !0,
                children: [L && (0, i.jsx)(l.m_, {
                    text: A.intl.string(A.t.WmfZHZ),
                    children: (0, i.jsx)(r.K0, {
                        icon: r.qYV,
                        onClick: w,
                        "aria-label": A.intl.string(A.t.WmfZHZ),
                        variant: "secondary"
                    })
                }), (0, i.jsx)(r.$nd, {
                    variant: "primary",
                    text: k,
                    onClick: S,
                    fullWidth: !0,
                    icon: r.We5,
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
    return (0, i.jsx)(v.jY, {
        source: n,
        questId: t.id,
        isPreview: t.preview,
        children: (0, i.jsx)(j, {
            ...e
        })
    })
}