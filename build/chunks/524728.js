/** chunk id: 524728 params = (module,exports,require) **/
n.d(t, {
    A: () => p
});
var i = n(627968),
    a = n(64700),
    s = n(158954),
    r = n(397927),
    l = n(341915),
    o = n(73473),
    d = n(545986),
    c = n(240710),
    u = n(985018),
    m = n(512508);

function g(e) {
    let {
        onClose: t,
        transitionState: n
    } = e;
    return (0, i.jsx)(s.Modal, {
        size: "md",
        title: u.intl.string(u.t.Hd3D8W),
        actions: [{
            variant: "primary",
            text: u.intl.string(u.t.cpT0Cq),
            onClick: t
        }],
        onClose: t,
        transitionState: n,
        children: (0, i.jsx)(r.Text, {
            variant: "text-md/medium",
            color: "text-subtle",
            children: u.intl.string(u.t.Ij97SL)
        })
    })
}

function p(e) {
    let {
        quest: t,
        sourceQuestContent: n,
        transitionState: s,
        onClose: u,
        rewardContent: p,
        isRewardContentLoading: f,
        rewardContentHasError: v,
        location: _
    } = e, x = l.uF.REWARD_MODAL, [h, C] = a.useState(!0), A = a.useCallback(async () => {
        await (0, d.f7)(t.config.ctaConfig.link) && (u(), (0, r.s7G)())
    }, [t.config.ctaConfig.link, u]);
    if (v) return (0, i.jsx)(g, {
        onClose: u,
        transitionState: s
    });
    let N = f || h;
    return (0, i.jsx)(o.R, {
        questOrQuests: t,
        questContent: x,
        sourceQuestContent: n,
        children: e => (0, i.jsxs)(i.Fragment, {
            children: [N ? (0, i.jsx)(r.y$y, {
                className: m.u1,
                type: r.y$y.Type.WANDERING_CUBES
            }) : null, (0, i.jsx)("div", {
                ref: e,
                style: {
                    visibility: N ? "hidden" : "visible"
                },
                children: (0, i.jsxs)(r.EOs, {
                    "data-migration-pending": !0,
                    transitionState: N ? r.ip4.HIDDEN : s,
                    size: r.rIJ.DYNAMIC,
                    className: m.yl,
                    parentComponent: "QuestRewardModalBase",
                    children: [(0, i.jsx)(r.s_y, {
                        "data-migration-pending": !0,
                        className: m.b,
                        onClick: u,
                        withCircleBackground: !0
                    }), (0, i.jsxs)("div", {
                        className: m.jE,
                        children: [(0, i.jsx)("div", {
                            className: m._H,
                            children: p
                        }), (0, i.jsx)("div", {
                            className: m.xK,
                            children: (0, i.jsx)(c.A, {
                                quest: t,
                                sourceQuestContent: n,
                                onLoadComplete: () => C(!1),
                                preCtaClick: A,
                                location: _
                            })
                        })]
                    })]
                })
            })]
        })
    })
}