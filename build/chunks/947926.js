/** Chunk was on 87557 **/
/** chunk id: 947926, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => B,
    Y: () => U
});
var a = n(627968),
    l = n(64700),
    r = n(503698),
    i = n.n(r),
    s = n(864605),
    o = n(311907),
    c = n(475743),
    d = n(676594),
    u = n(186111),
    m = n(859703),
    p = n(341915),
    h = n(245853),
    x = n(677402),
    g = n(943849),
    f = n(890687),
    b = n(792620),
    v = n(241124),
    j = n(73473),
    _ = n(201805),
    y = n(545986),
    A = n(139210),
    C = n(568329),
    S = n(818276),
    O = n(742860),
    T = n(783569),
    E = n(963713),
    N = n(717695),
    w = n(899592),
    I = n(546350),
    P = n(922532),
    k = n(20732),
    R = n(654487),
    D = n(419548);

function M(e) {
    let {
        isExpanded: t,
        questId: n
    } = e;
    return (0, f.H6)({
        mode: t ? R.fP.EXPANDED : R.fP.COLLAPSED,
        questContent: p.uF.QUEST_BAR_V2,
        questId: n,
        sourceQuestContent: p.uF.QUEST_BAR_V2
    }), null
}

function L() {
    return l.useEffect(() => {
        d.l.trigger()
    }, []), null
}

function U(e) {
    var t, n;
    let {
        quest: r
    } = e, d = (0, g.L)({
        quest: r,
        location: R.rE.QUESTS_BAR
    }), h = (0, x.H)({
        location: R.rE.QUESTS_BAR
    }), U = (0, o.bG)([m.A], () => null != m.A.questEnrollmentBlockedUntil), {
        isQuestBarVisible: B,
        reason: G
    } = (0, _.TQ)({
        quest: r,
        location: R.rE.QUESTS_BAR
    }), F = (0, o.bG)([u.A], () => u.A.hasLayers()), V = l.useRef(null), W = l.useMemo(() => (0, b.vv)(r), [r]), H = (null == (t = r.userStatus) ? void 0 : t.enrolledAt) != null, K = (0, c.A)(H), z = (null == (n = r.userStatus) ? void 0 : n.completedAt) != null, {
        hasError: q,
        isLoading: Q
    } = (0, v.Gk)(), Y = l.useContext(N.Z) || h && B && !Q && !U, {
        isExpanded: J,
        setIsExpanded: X,
        expandQuestBar: Z,
        isExpansionAnimationComplete: $,
        isVisibilityAnimationAtRest: ee,
        expansionSpring: et,
        visibilitySpring: en,
        springConfig: ea
    } = (0, I.w)({
        isQuestAccepted: H,
        isQuestCompleted: z,
        isQuestBarVisible: Y
    }), {
        handleCtxMenuOpened: el,
        handleCtxMenuClosed: er,
        handleCtxMenuSelection: ei,
        handleGameSheetOpened: es,
        handleGameSheetClosed: eo,
        handleFocusWithoutDelay: ec,
        handleBlur: ed,
        handleMouseEnter: eu,
        handleMouseLeave: em
    } = (0, P.m)({
        quest: r,
        isExpanded: J,
        setIsExpanded: X,
        expandQuestBar: Z,
        isQuestCompleted: z,
        isQuestAccepted: H,
        prevIsQuestAccepted: K,
        impressionRef: V
    });
    (0, k.S)({
        quest: r,
        hasAssetsError: q,
        isEligibleForQuests: h,
        isQuestBarVisible: Y,
        isVisibilityAnimationAtRest: ee,
        isLoadingAssets: Q,
        currentQuestVisibleReason: G,
        shouldShowQuestBar: B,
        isQuestEnrollmentBlocked: U,
        impressionRef: V
    });
    let ep = l.useRef(null),
        eh = l.useRef(null),
        ex = l.useRef(null),
        eg = (0, f.fc)(r);
    if (l.useEffect(() => {
            W && (0, y.l9)()
        }, [W]), !h || !Y && ee && !Q || q) return q ? d.log("Not rendered due to asset error") : h || d.log("Not rendered due to ineligibility"), null;
    let ef = 70 + 78 * !!z;
    return (0, a.jsx)(j.R, {
        questOrQuests: r,
        questContent: p.uF.QUEST_BAR_V2,
        overrideVisibility: !F && Y,
        sourceQuestContent: p.uF.QUEST_BAR_V2,
        children: (e, t) => (V.current = t.current, (0, a.jsxs)("div", {
            className: D.dK,
            children: [Y && (0, a.jsxs)(a.Fragment, {
                children: [(0, a.jsx)(M, {
                    questId: r.id,
                    isExpanded: J
                }), (0, a.jsx)(L, {})]
            }), (0, a.jsx)(s.animated.div, {
                "aria-hidden": !Y,
                onMouseLeave: em,
                onMouseEnter: eu,
                onFocus: ec,
                onBlur: ed,
                className: i()(D.iE, {
                    [D.Xc]: !Y,
                    [D.uv]: Y && ee
                }),
                style: {
                    height: en.to({
                        range: [0, 1],
                        output: [0, ef]
                    })
                },
                children: (0, a.jsx)(s.animated.div, {
                    className: i()(D.FG, {
                        [D.E$]: J,
                        [D.KA]: H
                    }),
                    children: (0, a.jsx)(T.R, {
                        springConfig: ea,
                        isExpanded: J,
                        children: (0, a.jsx)(C.oK, {
                            expandedContentRef: ep,
                            collapsedContentRef: eh,
                            expansionSpring: et,
                            children: (0, a.jsxs)(E.C, {
                                quest: r,
                                taskDetails: eg,
                                isExpanded: J,
                                isExpansionAnimationComplete: $,
                                onCtxMenuClose: er,
                                onCtxMenuOpen: el,
                                onCtxMenuSelect: ei,
                                onGameSheetOpen: es,
                                onGameSheetClose: eo,
                                collapsedHeight: ef,
                                children: [(0, a.jsx)(S.A, {
                                    ref: eh,
                                    className: D.Qs,
                                    overlayRef: ex
                                }, z ? "collapsed-with-rewards" : "collapsed-without-rewards"), (0, a.jsx)(O.A, {
                                    className: D.Qs,
                                    overlayRef: ex,
                                    ref: ep,
                                    children: (0, a.jsxs)(a.Fragment, {
                                        children: [(0, a.jsx)(w.A, {}), !H && (0, a.jsx)(A.A, {})]
                                    })
                                }), (0, a.jsx)("div", {
                                    ref: ex,
                                    className: D.Lw
                                })]
                            })
                        })
                    })
                })
            })]
        }))
    })
}
let B = 21552 == n.j ? function() {
    let e = (0, _.dN)(),
        {
            enabled: t,
            variant: n
        } = h.qd.getConfig({
            location: R.rE.QUESTS_BAR
        });
    return null == e ? null : (0, a.jsx)(v.jY, {
        source: R.rE.QUESTS_BAR,
        questId: e.id,
        listenForSourceError: t,
        retrySourceLoadOnError: n === h.LO.LISTEN_AND_RETRY_LOADING,
        children: (0, a.jsx)(U, {
            quest: e
        })
    }, e.id)
} : null