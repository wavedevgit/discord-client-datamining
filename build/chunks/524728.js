/** chunk id: 524728 params = (module,exports,require) **/
n.d(t, {
    A: () => E
});
var i = n(627968),
    a = n(64700),
    r = n(158954),
    s = n(397927),
    l = n(341915),
    o = n(73473),
    d = n(545986),
    c = n(240710),
    _ = n(985018),
    u = n(512508);

function p(e) {
    let {
        onClose: t,
        transitionState: n
    } = e;
    return (0, i.jsx)(r.Modal, {
        size: "md",
        title: _.intl.string(_.t.Hd3D8W),
        actions: [{
            variant: "primary",
            text: _.intl.string(_.t.cpT0Cq),
            onClick: t
        }],
        onClose: t,
        transitionState: n,
        children: (0, i.jsx)(s.Text, {
            variant: "text-md/medium",
            color: "text-subtle",
            children: _.intl.string(_.t.Ij97SL)
        })
    })
}

function E(e) {
    let {
        quest: t,
        sourceQuestContent: n,
        transitionState: r,
        onClose: _,
        rewardContent: E,
        isRewardContentLoading: m,
        rewardContentHasError: h,
        location: S
    } = e, g = l.uF.REWARD_MODAL, [f, A] = a.useState(!0), v = a.useCallback(async () => {
        await (0, d.f7)(t.config.ctaConfig.link) && (_(), (0, s.s7G)())
    }, [t.config.ctaConfig.link, _]);
    if (h) return (0, i.jsx)(p, {
        onClose: _,
        transitionState: r
    });
    let N = m || f;
    return (0, i.jsx)(o.R, {
        questOrQuests: t,
        questContent: g,
        sourceQuestContent: n,
        children: e => (0, i.jsxs)(i.Fragment, {
            children: [N ? (0, i.jsx)(s.y$y, {
                className: u.u1,
                type: s.y$y.Type.WANDERING_CUBES
            }) : null, (0, i.jsx)("div", {
                ref: e,
                style: {
                    visibility: N ? "hidden" : "visible"
                },
                children: (0, i.jsxs)(s.EOs, {
                    "data-migration-pending": !0,
                    transitionState: N ? s.ip4.HIDDEN : r,
                    size: s.rIJ.DYNAMIC,
                    className: u.yl,
                    parentComponent: "QuestRewardModalBase",
                    children: [(0, i.jsx)(s.s_y, {
                        "data-migration-pending": !0,
                        className: u.b,
                        onClick: _,
                        withCircleBackground: !0
                    }), (0, i.jsxs)("div", {
                        className: u.jE,
                        children: [(0, i.jsx)("div", {
                            className: u._H,
                            children: E
                        }), (0, i.jsx)("div", {
                            className: u.xK,
                            children: (0, i.jsx)(c.A, {
                                quest: t,
                                sourceQuestContent: n,
                                onLoadComplete: () => A(!1),
                                preCtaClick: v,
                                location: S
                            })
                        })]
                    })]
                })
            })]
        })
    })
}