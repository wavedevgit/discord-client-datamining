/** chunk id: 524728 params = (module,exports,require) **/
n.d(e, {
    A: () => f
});
var i = n(627968),
    s = n(64700),
    a = n(158954),
    r = n(397927),
    l = n(341915),
    d = n(73473),
    o = n(545986),
    c = n(240710),
    u = n(654487),
    h = n(985018),
    m = n(63639);

function b(t) {
    let {
        onClose: e,
        transitionState: n
    } = t;
    return (0, i.jsx)(a.Modal, {
        size: "md",
        title: h.intl.string(h.t.Hd3D8W),
        actions: [{
            variant: "primary",
            text: h.intl.string(h.t.cpT0Cq),
            onClick: e
        }],
        onClose: e,
        transitionState: n,
        children: (0, i.jsx)(r.Text, {
            variant: "text-md/medium",
            color: "text-subtle",
            children: h.intl.string(h.t.Ij97SL)
        })
    })
}

function f(t) {
    let {
        quest: e,
        sourceQuestContent: n,
        transitionState: a,
        onClose: h,
        rewardContent: f,
        isRewardContentLoading: g,
        rewardContentHasError: x,
        location: C
    } = t, I = l.uF.REWARD_MODAL, [N, p] = s.useState(!0), A = e.config.features.some(t => u.Tz.has(t)), v = s.useCallback(async () => {
        A ? h() : await (0, o.f7)(e.config.ctaConfig?.link) && (h(), (0, r.s7G)())
    }, [e.config.ctaConfig?.link, h, A]);
    if (x) return (0, i.jsx)(b, {
        onClose: h,
        transitionState: a
    });
    let T = g || N;
    return (0, i.jsx)(d.R, {
        questOrQuests: e,
        questContent: I,
        sourceQuestContent: n,
        children: t => (0, i.jsxs)(i.Fragment, {
            children: [T ? (0, i.jsx)(r.y$y, {
                className: m.u1,
                type: r.y$y.Type.WANDERING_CUBES
            }) : null, (0, i.jsx)("div", {
                ref: t,
                style: {
                    visibility: T ? "hidden" : "visible"
                },
                children: (0, i.jsxs)(r.EOs, {
                    "data-migration-pending": !0,
                    transitionState: T ? r.ip4.HIDDEN : a,
                    size: r.rIJ.DYNAMIC,
                    className: m.yl,
                    parentComponent: "QuestRewardModalBase",
                    children: [(0, i.jsx)(r.s_y, {
                        "data-migration-pending": !0,
                        className: m.b,
                        onClick: h,
                        withCircleBackground: !0
                    }), (0, i.jsxs)("div", {
                        className: m.jE,
                        children: [(0, i.jsx)("div", {
                            className: m._H,
                            children: f
                        }), (0, i.jsx)("div", {
                            className: m.xK,
                            children: (0, i.jsx)(c.A, {
                                quest: e,
                                sourceQuestContent: n,
                                onLoadComplete: () => p(!1),
                                preCtaClick: v,
                                location: C
                            })
                        })]
                    })]
                })
            })]
        })
    })
}