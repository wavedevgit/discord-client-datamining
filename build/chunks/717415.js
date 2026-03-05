/** chunk id: 717415 params = (module,exports,require) **/
n.r(t), n.d(t, {
    VideoQuestConfigContext: () => w,
    VideoQuestModalContext: () => M,
    default: () => O
});
var r = n(627968),
    l = n(64700),
    i = n(503698),
    a = n.n(i),
    s = n(284009),
    o = n.n(s),
    u = n(412703),
    c = n(311907),
    d = n(397927),
    m = n(770178),
    p = n(765548),
    f = n(892358),
    E = n(859703),
    h = n(341915),
    v = n(245853),
    x = n(890687),
    g = n(971649),
    S = n(792620),
    A = n(753386),
    C = n(73473),
    _ = n(922623),
    b = n(60040),
    y = n(885947),
    T = n(440891),
    N = n(471535),
    D = n(583235),
    R = n(654487),
    L = n(985018),
    I = n(407481),
    j = n(221190);
let M = l.createContext({
        quest: null,
        sourceQuestContent: null,
        videoSessionId: "",
        isPortrait: !1,
        isFullscreenEnabled: !1,
        useNewProgressBarStyling: !1,
        onClose: () => {},
        setIsFullscreenEnabled: () => {}
    }),
    w = l.createContext({
        questConfig: null
    });

function k(e) {
    let {
        transitionState: t,
        onClose: n,
        quest: i,
        autoplay: s,
        videoSessionId: c,
        impressionRef: f,
        parentModalOpenStartClockTime: E,
        sourceQuestContent: h
    } = e, C = (0, S.Yh)(i), w = (0, x.LS)(i), k = (0, g.go)(), [O, P] = l.useState(C.progressSeconds), [Q, V] = l.useState(142), [U, B] = l.useState(!1), F = i.config.taskConfigV2?.tasks?.[u.n.WATCH_VIDEO];
    o()(null != F, "VideoQuestModal: videoTask must not be null");
    let G = (0, A.eG)(F),
        K = "portrait" === G,
        $ = (0, p.A)(e => {
            V(e.target.offsetHeight)
        }),
        Y = (0, m.w)($),
        H = i.config.features.includes(R.Li.FULL_EPISODE_VIDEO_QUEST),
        {
            enabled: z
        } = v.jS.useConfig({
            location: R.rE.VIDEO_MODAL
        }),
        W = z || H,
        q = (0, D.H)({
            quest: i,
            onClose: n,
            sourceQuestContent: h,
            impressionId: k
        }),
        X = l.useMemo(() => ({
            quest: i,
            sourceQuestContent: h,
            videoSessionId: c,
            isPortrait: K,
            onClose: n,
            isFullscreenEnabled: U,
            useNewProgressBarStyling: W,
            setIsFullscreenEnabled: B
        }), [i, h, c, K, n, U, W, B]);
    return (0, r.jsx)(M.Provider, {
        value: X,
        children: (0, r.jsx)("div", {
            style: K ? {
                "--custom-portrait-footer-height": `${Q}px`
            } : void 0,
            children: (0, r.jsxs)(d.EOs, {
                "data-migration-pending": !0,
                transitionState: t,
                size: d.rIJ.DYNAMIC,
                className: a()(j.CR, {
                    [j.VX]: "landscape" === G,
                    [j.Zy]: "portrait" === G
                }),
                parentComponent: "Modal",
                children: [!W && (0, r.jsx)("div", {
                    className: j.z6,
                    children: (0, r.jsx)(d.K0, {
                        variant: "icon-only",
                        icon: e => (0, r.jsx)(d.PGe, {
                            ...e,
                            color: d.LU0.colors.CONTROL_OVERLAY_SECONDARY_TEXT_DEFAULT
                        }),
                        "aria-label": L.intl.string(L.t.cpT0Cq),
                        onClick: n
                    })
                }), (0, r.jsx)("div", {
                    ref: e => {
                        f.current = e
                    },
                    className: j.NE,
                    children: (0, r.jsx)("div", {
                        className: j.S3,
                        style: {
                            "--custom-footer-horizontal-padding": `${W?20:16}px`
                        },
                        children: (0, r.jsxs)("div", {
                            className: j.jE,
                            children: [(0, r.jsx)(N.A, {
                                targetTimeSec: F.target,
                                parentTransitionState: t,
                                onOptimisticProgressUpdate: P,
                                autoplay: s,
                                performanceClockStartTime: E,
                                orientation: G
                            }), K ? (0, r.jsxs)("div", {
                                ref: Y,
                                className: I.uh,
                                children: [(0, r.jsxs)("div", {
                                    className: I.Df,
                                    children: [w ? null : (0, r.jsx)(T.A, {}), (0, r.jsx)(y.A, {})]
                                }), (0, r.jsxs)("div", {
                                    className: I.eX,
                                    children: [(0, r.jsx)("div", {
                                        className: I.uP,
                                        children: (0, r.jsx)("div", {
                                            className: I.ne,
                                            children: (0, r.jsx)(b.A, {})
                                        })
                                    }), (0, r.jsx)(_.A, {
                                        handlePrimaryCtaClick: q
                                    })]
                                })]
                            }) : (0, r.jsxs)("div", {
                                className: I.nR,
                                children: [(0, r.jsxs)("div", {
                                    className: I.uu,
                                    children: [w ? null : (0, r.jsx)(T.A, {}), (0, r.jsx)(y.A, {})]
                                }), (0, r.jsxs)("div", {
                                    className: I.NY,
                                    children: [(0, r.jsx)(b.A, {}), (0, r.jsx)(_.A, {
                                        handlePrimaryCtaClick: q
                                    })]
                                })]
                            })]
                        })
                    })
                })]
            })
        })
    })
}

function O(e) {
    let {
        questId: t,
        overrideQuest: n,
        autoplay: i,
        openStartClockTime: a,
        ...s
    } = e, o = (0, c.bG)([E.A], () => E.A.getQuest(t)), u = (0, c.bG)([E.A], () => E.A.getQuestConfig(t)), d = n ?? o, m = null != n ? n.config : u, p = l.useMemo(() => null != m ? {
        questConfig: m
    } : null, [m]);
    return null != d && null != m && null != p ? (0, r.jsx)(w.Provider, {
        value: p,
        children: (0, r.jsx)(C.R, {
            questOrQuests: d,
            questContent: h.uF.VIDEO_MODAL,
            minViewTimeSeconds: f.bq,
            trackGuildAndChannelMetadata: !0,
            sourceQuestContent: s.sourceQuestContent,
            children: e => (0, r.jsx)(k, {
                ...s,
                parentModalOpenStartClockTime: a,
                impressionRef: e,
                quest: d,
                autoplay: i
            })
        })
    }) : null
}