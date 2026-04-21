/** chunk id: 524728 params = (module,exports,require) **/
n.d(e, {
    A: () => g
});
var i = n(627968),
    s = n(64700),
    a = n(158954),
    r = n(397927),
    l = n(341915),
    d = n(73473),
    c = n(545986),
    o = n(240710),
    u = n(654487),
    m = n(985018),
    h = n(63639);

function f(t) {
    let {
        onClose: e,
        transitionState: n
    } = t;
    return (0, i.jsx)(a.Modal, {
        size: "md",
        title: m.intl.string(m.t.Hd3D8W),
        actions: [{
            variant: "primary",
            text: m.intl.string(m.t.cpT0Cq),
            onClick: e
        }],
        onClose: e,
        transitionState: n,
        children: (0, i.jsx)(r.Text, {
            variant: "text-md/medium",
            color: "text-subtle",
            children: m.intl.string(m.t.Ij97SL)
        })
    })
}

function g(t) {
    let {
        quest: e,
        sourceQuestContent: n,
        transitionState: a,
        onClose: m,
        rewardContent: g,
        isRewardContentLoading: x,
        rewardContentHasError: C,
        location: I
    } = t, b = l.uF.REWARD_MODAL, [N, A] = s.useState(!0), p = e.config.features.some(t => u.Tz.has(t)), v = s.useCallback(async () => {
        p ? m() : await (0, c.f7)(e.config.ctaConfig?.link) && (m(), (0, r.s7G)())
    }, [e.config.ctaConfig?.link, m, p]);
    if (C) return (0, i.jsx)(f, {
        onClose: m,
        transitionState: a
    });
    let T = x || N;
    return (0, i.jsx)(d.R, {
        questOrQuests: e,
        questContent: b,
        sourceQuestContent: n,
        children: t => (0, i.jsxs)(i.Fragment, {
            children: [T ? (0, i.jsx)(r.y$y, {
                className: h.u1,
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
                    className: h.yl,
                    parentComponent: "QuestRewardModalBase",
                    children: [(0, i.jsx)(r.s_y, {
                        "data-migration-pending": !0,
                        className: h.b,
                        onClick: m,
                        withCircleBackground: !0
                    }), (0, i.jsxs)("div", {
                        className: h.jE,
                        children: [(0, i.jsx)("div", {
                            className: h._H,
                            children: g
                        }), (0, i.jsx)("div", {
                            className: h.xK,
                            children: (0, i.jsx)(o.A, {
                                quest: e,
                                sourceQuestContent: n,
                                onLoadComplete: () => A(!1),
                                preCtaClick: v,
                                location: I
                            })
                        })]
                    })]
                })
            })]
        })
    })
}