/** chunk id: 818276 params = (module,exports,require) **/
n.d(t, {
    A: () => _
});
var a = n(627968),
    i = n(64700),
    s = n(503698),
    l = n.n(s),
    r = n(517738),
    o = n(341915),
    d = n(890687),
    c = n(398025),
    u = n(568329),
    m = n(207869),
    h = n(158265),
    x = n(963713),
    p = n(277928),
    g = n(783602),
    f = n(272111),
    v = n(249309);
let _ = i.forwardRef(function(e, t) {
    let {
        className: n,
        overlayRef: s
    } = e, {
        expansionSpring: _
    } = i.useContext(u.PW), {
        quest: b,
        taskDetails: j,
        isExpanded: A,
        isExpansionAnimationComplete: C
    } = i.useContext(x.T), y = b.userStatus?.completedAt != null, S = (0, d.I3)(b), E = i.useRef(null), T = b.userStatus?.enrolledAt != null, N = null != S ? S.percentComplete : j.percentComplete, [I, k] = i.useState(!1);
    return (0, a.jsxs)(a.Fragment, {
        children: [y && (0, a.jsx)(h.A, {
            overlayRef: s,
            progressBarRef: E,
            isHovered: I
        }), (0, a.jsx)(r.animated.div, {
            ref: t,
            "aria-hidden": A && C,
            className: l()(n, v.hR, {
                [v.Ag]: A,
                [v.s]: T
            }),
            style: {
                opacity: (0, c.a)(_.to({
                    range: [0, 1],
                    output: [1, 0]
                })),
                backgroundImage: y ? `linear-gradient(90deg, ${f.V1}, ${f.us})` : void 0
            },
            onMouseEnter: () => k(!0),
            onMouseLeave: () => k(!1),
            children: (0, a.jsxs)("div", {
                className: v.o8,
                children: [y && (0, a.jsxs)(a.Fragment, {
                    children: [(0, a.jsx)(g.A, {}), (0, a.jsx)("div", {
                        className: v.yF
                    })]
                }), T ? (0, a.jsx)(p.A, {
                    contentLocation: "collapsed",
                    progressBarRef: E,
                    isExpanded: !1,
                    percentComplete: N
                }) : null, y && (0, a.jsx)(m.f, {
                    awaitingConsoleConnections: !1,
                    hasMadeProgress: !0,
                    isProgressing: !1,
                    activeScreen: o.X0.DESKTOP,
                    showBackButton: !1,
                    onBack: () => {},
                    sourceQuestContent: o.uF.QUEST_BAR_V2
                })]
            })
        })]
    })
})