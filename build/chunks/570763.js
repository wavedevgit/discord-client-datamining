/** chunk id: 570763 params = (module,exports,require) **/
n.d(t, {
    A: () => eE
}), n(323874), n(14289), n(35956);
var i = n(627968),
    l = n(64700),
    a = n(503698),
    r = n.n(a),
    s = n(873263),
    o = n(835245),
    d = n(110259),
    c = n(311907),
    u = n(554146),
    A = n(397927),
    h = n(944791),
    _ = n(775602),
    m = n(793574),
    p = n(139286),
    g = n(197111),
    E = n(10088),
    I = n(979286),
    f = n(726249),
    C = n(607470),
    T = n(826673),
    N = n(239365),
    S = n(178629),
    x = n(701508),
    v = n(979590),
    b = n(153527),
    y = n(783531),
    O = n(334465),
    L = n(318346),
    R = n(151252),
    P = n(142270),
    D = n(531685),
    M = n(954571),
    j = n(676279),
    w = n(975571),
    U = n(240248),
    G = n(341915),
    k = n(631001),
    V = n(87549),
    B = n(245853),
    H = n(807876),
    F = n(890687),
    Y = n(590202),
    W = n(885459),
    K = n(545986),
    q = n(203879),
    z = n(409389),
    $ = n(881172),
    Q = n(724339),
    X = n(516226),
    Z = n(854514),
    J = n(729168),
    ee = n(321503),
    et = n(475529),
    en = n(654487),
    ei = n(652215),
    el = n(758836),
    ea = n(613057),
    er = n(985018),
    es = n(207573),
    eo = n(92872),
    ed = n(880440),
    ec = n(522303),
    eu = n(595411),
    eA = n(602557),
    eh = n(850493);
let e_ = l.createContext({});

function em(e) {
    let {
        onLoadComplete: t,
        className: n
    } = e, {
        enabled: a
    } = (0, R.Z)({
        location: en.rE.QUEST_HOME_DESKTOP
    }), r = (0, c.bG)([_.A], () => _.A.useReducedMotion), s = (0, c.bG)([D.A], () => D.A.isFocused()), {
        ref: o,
        inViewport: d
    } = (0, q.p)(), u = l.useRef(null);
    if (l.useEffect(() => {
            u?.current != null && (u.current.paused || s && d && !r ? u.current.paused && !r && d && s && u.current.play() : u.current.pause())
        }, [r, d, s]), a) {
        let e = (0, j.TM)();
        return (0, i.jsx)(C.A, {
            ref: e => {
                u.current = e, o.current = e
            },
            loop: !0,
            muted: !0,
            playsInline: !0,
            className: n,
            onProgress: t,
            "data-mtctest-ignore": "true",
            controls: !1,
            children: (0, i.jsx)("source", {
                src: e ? eo.A : ed.A,
                type: e ? "video/mp4" : "video/webm"
            })
        })
    }
    return (0, i.jsx)("img", {
        src: eh.A,
        className: n,
        alt: "",
        onLoad: t
    })
}

function ep(e) {
    let {
        onLoadComplete: t
    } = e;
    return (0, i.jsxs)(i.Fragment, {
        children: [(0, i.jsx)("img", {
            src: ec.Ay,
            className: r()(es.BW, es.rZ),
            alt: ""
        }), (0, i.jsx)("img", {
            src: eA.Ay,
            className: r()(es.BW, es.rZ),
            alt: "",
            onLoad: t
        }), (0, i.jsx)("img", {
            src: eu.Ay,
            className: r()(es.BW, es.rZ),
            alt: ""
        })]
    })
}

function eg(e) {
    let {
        renderBanner: t,
        children: n,
        header: a,
        withQuestsGrid: s = !0
    } = e, {
        isInDiscoverQuestHomeTab: o,
        onScroll: d,
        onSelectTab: c,
        scrollerRef: u,
        selectedTab: A
    } = l.useContext(e_), {
        questHomeHero: h,
        isLoading: _
    } = (0, F.vG)(), {
        enabled: m
    } = (0, R.Z)({
        location: en.rE.QUEST_HOME_DESKTOP
    }), {
        enabled: p
    } = B.sn.useConfig({
        location: en.rE.QUEST_HOME_DESKTOP
    }), g = l.useRef(null), E = l.useCallback(e => {
        g.current?.resetSortingFiltering(), requestAnimationFrame(() => {
            g.current?.scrollToQuest(e)
        })
    }, []);
    return (0, i.jsxs)(ee.X.Provider, {
        value: u,
        children: [a, (0, i.jsxs)(y.A, {
            onScroll: d,
            ref: u,
            children: [function() {
                if (!o && p) {
                    if (A !== F.NC.ALL) return null;
                    if (_) return (0, i.jsx)(Z.Hk, {});
                    if (null != h) return (0, i.jsx)(Z.Ay, {
                        config: h,
                        onQuestCtaClick: E
                    })
                }
                return t()
            }(), (0, i.jsx)(v.A, {
                children: (0, i.jsxs)("div", {
                    className: r()(es.Qs, {
                        [es.HR]: p && !m && A !== F.NC.ALL
                    }),
                    children: [n, s ? A === F.NC.CLAIMED ? (0, i.jsx)($.A, {
                        onSelectTab: c
                    }) : A === F.NC.PREVIEW_TOOL ? (0, i.jsx)(W.A, {}) : (0, i.jsx)(z.A, {
                        ref: g
                    }) : null]
                })
            })]
        })]
    })
}
let eE = function(e) {
    let {
        topLevelRoute: t
    } = e, n = (0, s.zy)(), a = (0, s.W6)(), _ = l.useMemo(() => (0, O.B)(n.pathname, ei.BVt.QUEST_HOME_DEPRECATED)?.isExact === !0, [n.pathname]), C = (0, c.bG)([E.A], () => E.A.getState("quests")), {
        selectedTab: v,
        onSelectTab: y,
        tabs: D
    } = (0, et.J)({
        withClaimedQuestsTab: !_
    });
    l.useLayoutEffect(() => {
        _ && v === F.NC.CLAIMED && k.A.setState({
            tab: F.NC.ALL
        })
    }, [_, v]);
    let {
        onScroll: j
    } = (0, S.G)(), B = V.A.getState().getUtmCurrentContext(), W = (0, Q.W)(e => e.registerAssetLoad), q = l.useRef(B);
    l.useEffect(() => {
        q.current = B
    }), l.useEffect(() => {
        let {
            current: e
        } = q;
        (0, p.x)({
            name: d.ImpressionNames.QUEST_HOME,
            type: d.ImpressionTypes.VIEW,
            properties: {
                utm_source_current: e.utmSourceCurrent,
                utm_medium_current: e.utmMediumCurrent,
                utm_campaign_current: e.utmCampaignCurrent,
                utm_content_current: e.utmContentCurrent,
                tab: v
            }
        })
    }, [v]);
    let {
        enabled: z
    } = (0, R.Z)({
        location: en.rE.QUEST_HOME_DESKTOP
    }), $ = l.useCallback(() => {
        z ? window.open(ei.X7G.PAID_TERMS_ORBS) : window.open(w.A.getArticleURL(ei.MVz.QUESTS_LEARN_MORE))
    }, [z]);
    (0, f.HU)({
        location: er.intl.string(er.t.JALI2K)
    });
    let ee = z ? er.intl.format(er.t.BCBIlp, {}) : er.intl.format(er.t.lmMBfy, {}),
        eo = z ? er.intl.format(er.t.U9FY0J, {}) : er.intl.string(er.t.oWCrBq),
        ed = l.useRef(null),
        ec = l.useCallback(() => {
            (0, L.Y)({
                pageType: ei.liQ.GLOBAL_DISCOVERY_QUESTS,
                sectionType: ei.JJy.ORBS_BALANCE_MENU,
                ctaObject: ei.ZSU.CTA_TO_ORBS_SHOP
            }), (0, I.Cz)({
                tab: el.G2.ORBS,
                analyticsLocations: [],
                analyticsSource: m.A.ORBS_BALANCE_MENU
            })
        }, []);
    l.useEffect(() => {
        (0, h.I)(ei.BVt.QUEST_HOME)
    }, []), l.useEffect(() => {
        N.g.trigger()
    }, []);
    let eu = (0, H.U)({
        location: en.rE.QUEST_PREVIEW_TOOL_2
    });
    l.useEffect(() => {
        if (null != C) return;
        let e = new URLSearchParams(n.search),
            i = e.get(F.L1.TAB);
        if (eu && i === F.NC.PREVIEW_TOOL) {
            let t = e.get(F.L1.QUEST_ID);
            g.A.openNativeAppModal("quests", ei.e$_.DEEP_LINK, {
                type: ea.XK.QUEST_PREVIEW_TOOL,
                params: {
                    questId: t,
                    tab: i
                }
            });
            return
        }
        let l = performance.getEntriesByType("navigation")[0];
        if ("POP" === a.action && l?.type === "navigate" && t && i !== F.NC.PREVIEW_TOOL) {
            let t = (0, U.uJ)(n.hash) ? null : n.hash.substring(1),
                l = e.get(F.L1.SORT),
                a = e.get(F.L1.FILTER);
            g.A.openNativeAppModal("quests", ei.e$_.DEEP_LINK, {
                type: ea.XK.QUEST_HOME,
                params: {
                    questId: (0, U.uJ)(t) ? void 0 : t,
                    sort: l,
                    filter: a,
                    tab: i
                }
            })
        }
    }, [n.search, C, eu, a.action, n.hash, t]), l.useEffect(() => {
        t && (0, T.Dr)(u.M.QUEST_HOME_ENTRYPOINT_ONBOARDING)
    }, [t]);
    let eA = l.useCallback(() => {
            (0, K.navigateToQuestHome)({
                fromContent: G.uF.QUEST_HOME_MOVE_CALLOUT_DISCOVER
            }), M.default.track(ei.HAw.QUEST_CONTENT_CLICKED, {
                cta_name: Y.Cy.VIEW_QUESTS,
                click_id: (0, o.A)(),
                is_targeted: !1,
                ...(0, Y.fF)(G.uF.QUEST_HOME_MOVE_CALLOUT_DISCOVER)
            })
        }, []),
        eh = l.useCallback(e => {
            a.replace({
                ...a.location,
                hash: void 0
            }), ed.current?.scrollToTop({
                animate: !1
            }), y(e)
        }, [a, y]);
    return (0, i.jsx)(X.M.Provider, {
        value: {
            onAssetLoadComplete: W
        },
        children: (0, i.jsx)(e_.Provider, {
            value: l.useMemo(() => ({
                isInDiscoverQuestHomeTab: _,
                onScroll: j,
                onSelectTab: eh,
                scrollerRef: ed,
                selectedTab: v
            }), [_, j, eh, ed, v]),
            children: (0, i.jsx)("div", {
                className: r()(es.kL, {
                    [es.KY]: !t
                }),
                children: _ ? (0, i.jsx)(eg, {
                    renderBanner: () => (0, i.jsx)(x.A, {
                        title: er.intl.string(er.t.z8YP2A),
                        titleColor: "always-white",
                        button: (0, i.jsx)(A.Button, {
                            variant: "overlay-primary",
                            text: er.intl.string(er.t.GURBQl),
                            onClick: eA
                        }),
                        className: es.Gj,
                        children: (0, i.jsx)(ep, {
                            onLoadComplete: W
                        })
                    }),
                    header: (0, i.jsx)(b.S, {
                        selectedTabId: v,
                        handleTransition: eh,
                        tabs: D,
                        icon: A.r2v
                    }),
                    withQuestsGrid: !1,
                    children: (0, i.jsxs)("div", {
                        className: es.kj,
                        children: [(0, i.jsx)(A.Heading, {
                            variant: "heading-xl/semibold",
                            children: er.intl.string(er.t.z8YP2A)
                        }), (0, i.jsx)(A.Text, {
                            color: "text-subtle",
                            variant: "text-md/normal",
                            children: er.intl.string(er.t.HdKh65)
                        }), (0, i.jsx)(A.QWc, {
                            text: er.intl.string(er.t["1CdL8d"]),
                            onClick: eA,
                            textVariant: "text-md/normal",
                            variant: "primary"
                        })]
                    })
                }) : (0, i.jsx)(eg, {
                    renderBanner: () => v !== F.NC.PREVIEW_TOOL && (0, i.jsx)(J.A, {
                        title: ee,
                        subtitle: eo,
                        buttons: z ? (0, i.jsxs)(A.ButtonGroup, {
                            children: [(0, i.jsx)(A.Button, {
                                variant: "overlay-primary",
                                text: er.intl.string(er.t["1Wm127"]),
                                onClick: () => (0, I.Cz)({
                                    tab: el.G2.ORBS,
                                    analyticsLocations: [],
                                    analyticsSource: m.A.INTRO_TO_ORBS_QUEST_BANNER
                                })
                            }), (0, i.jsx)(A.Button, {
                                variant: "overlay-secondary",
                                text: er.intl.string(er.t["7kTAgJ"]),
                                onClick: $
                            })]
                        }) : (0, i.jsx)(A.Button, {
                            variant: "overlay-primary",
                            text: er.intl.string(er.t.hvVgAZ),
                            onClick: $,
                            icon: A.I9m,
                            iconPosition: "end"
                        }),
                        background: (0, i.jsxs)("div", {
                            className: r()(es.Tv, {
                                [es.lJ]: z
                            }),
                            children: [(0, i.jsx)(Z.Ae, {}), (0, i.jsx)("div", {
                                className: r()(es.nz, {
                                    [es.ZZ]: z
                                })
                            }), (0, i.jsx)(em, {
                                onLoadComplete: W,
                                className: r()(es.Fe, {
                                    [es.H4]: z,
                                    [es.Q8]: !z
                                })
                            })]
                        })
                    }),
                    header: (0, i.jsx)(b.S, {
                        selectedTabId: v,
                        handleTransition: eh,
                        tabs: D,
                        endContent: z ? (0, i.jsx)(P.SS, {
                            analyticsPage: ei.liQ.GLOBAL_DISCOVERY_QUESTS,
                            cardAlignment: P.cP.END,
                            ctaText: er.intl.string(er.t["J+vlIR"]),
                            ctaOnClick: ec
                        }) : null,
                        icon: A.r2v
                    })
                })
            })
        })
    })
}