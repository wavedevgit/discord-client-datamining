/** chunk id: 218318 params = (module,exports,require) **/
a.d(t, {
    default: () => L
});
var n = a(627968),
    i = a(64700),
    s = a(503698),
    l = a.n(s),
    r = a(110259),
    o = a(311907),
    c = a(397927),
    _ = a(765671),
    d = a(235986),
    u = a(915089),
    m = a(362311),
    p = a(230801),
    f = a(424912),
    E = a(468820),
    A = a(287809),
    N = a(954571),
    h = a(426620),
    b = a(603738),
    x = a(701077),
    T = a(758384),
    g = a(239763),
    j = a(771016),
    C = a(994277),
    D = a(652215),
    I = a(570465),
    y = a(819638),
    G = a(985018),
    v = a(735581);

function L(e) {
    let t = (0, u.GV)(),
        {
            onSlideChange: a,
            ...s
        } = e,
        {
            onClose: L
        } = s,
        [U, k] = i.useState(!1),
        O = (0, o.bG)([A.default], () => A.default.getCurrentUser()),
        S = null != O && null == O.nsfwAllowed,
        [R, M] = i.useState(S ? C.i.AGE_GATE : C.i.CHOOSE_TEMPLATE),
        [w, W] = i.useState(null);
    i.useEffect(() => {
        a(U ? C.i.COMPLETE : R)
    }, [a, R, U]);
    let [P, H] = i.useState(null), [B, V] = i.useState(null), [F, $] = i.useState(!1), q = (0, o.bG)([h.A], () => h.A.getType() === j.zY.INVITE_UNCLAIMED), z = i.useCallback(e => {
        V(e), M(C.i.CREATION_INTENT), N.default.track(D.HAw.GUILD_TEMPLATE_SELECTED, {
            template_name: e.label,
            template_code: e.code
        })
    }, [V, M]), {
        content: J,
        footer: Y
    } = (0, p.u)({
        hasFooter: !1,
        onBack: () => {
            V(null), M(C.i.CHOOSE_TEMPLATE)
        },
        onCreationIntentChosen: e => {
            $(e === y.IR.COMMUNITY), M(C.i.CUSTOMIZE_GUILD)
        }
    }), {
        content: Z,
        footer: K
    } = (0, f.D)({
        guildTemplate: B,
        titleClassName: v.RH,
        hasFooter: !1,
        onGuildCreated: e => {
            H(e), B?.id === I.v.CREATE ? M(C.i.CHANNEL_PROMPT) : k(!0)
        },
        onBack: () => {
            M(C.i.CREATION_INTENT)
        },
        isSlideReady: w === C.i.CUSTOMIZE_GUILD,
        isCommunity: F
    }), {
        content: Q,
        footer: X
    } = (0, m.m)({
        createdGuildId: P,
        hasFooter: !1,
        onChannelPromptCompleted: () => {
            k(!0)
        },
        isSlideReady: w === C.i.CHANNEL_PROMPT
    }), {
        content: ee,
        footer: et
    } = (0, T.A)({
        onBack: () => M(C.i.CHOOSE_TEMPLATE),
        onComplete: () => {
            L()
        },
        onConnect: L,
        isSlideReady: w === C.i.JOIN_GUILD
    }), ea = null;
    switch (R) {
        case C.i.CUSTOMIZE_GUILD:
            ea = K;
            break;
        case C.i.CHANNEL_PROMPT:
            ea = X;
            break;
        case C.i.JOIN_GUILD:
            ea = et;
            break;
        case C.i.CREATION_INTENT:
            ea = Y
    }
    let {
        ref: en,
        width: ei
    } = (0, _.Ay)();
    if (U) return (0, n.jsx)(c.EOs, {
        ...s,
        "data-migration-pending": !0,
        size: c.rIJ.MEDIUM,
        className: l()(v.yl, v.so),
        "aria-labelledby": t,
        parentComponent: "NUFModal",
        children: (0, n.jsx)(x.A, {
            onComplete: L
        })
    });
    let es = {
        impression_group: r.ImpressionGroups.GUILD_ADD_NUF
    };
    return (0, n.jsxs)(c.EOs, {
        ...s,
        "data-migration-pending": !0,
        size: c.rIJ.MEDIUM,
        className: v.yl,
        "aria-labelledby": t,
        parentComponent: "NUFModal",
        children: [(0, n.jsx)("div", {
            className: v.pz,
            children: (0, n.jsx)(g.A, {
                step: R
            })
        }), (0, n.jsx)(c.NPJ, {
            theme: D.NJ8.LIGHT,
            children: e => (0, n.jsxs)("div", {
                className: l()(v.Qs, e),
                ref: en,
                children: [(0, n.jsx)("div", {
                    className: v.WT,
                    children: (0, n.jsxs)(c.tN_, {
                        activeSlide: R,
                        onSlideReady: e => W(e),
                        centered: !1,
                        width: ei,
                        children: [(0, n.jsx)(c.q7S, {
                            id: C.i.AGE_GATE,
                            children: (0, n.jsx)("div", {
                                className: v.kL,
                                children: (0, n.jsx)(b.A, {
                                    onComplete: () => {
                                        q ? L() : M(C.i.CHOOSE_TEMPLATE)
                                    },
                                    onClose: L
                                })
                            })
                        }), (0, n.jsx)(c.q7S, {
                            id: C.i.CHOOSE_TEMPLATE,
                            impressionName: r.ImpressionNames.GUILD_ADD_LANDING,
                            impressionProperties: es,
                            children: (0, n.jsx)("div", {
                                className: l()(v.kL, v.yT),
                                children: (0, n.jsx)(E.A, {
                                    className: v.kT,
                                    onChooseTemplate: z,
                                    isNewUser: !0
                                })
                            })
                        }), (0, n.jsx)(c.q7S, {
                            id: C.i.CREATION_INTENT,
                            impressionName: r.ImpressionNames.GUILD_ADD_INTENT_SELECTION,
                            impressionProperties: es,
                            children: (0, n.jsx)("div", {
                                className: l()(v.kL, v.tn),
                                children: J
                            })
                        }), (0, n.jsx)(c.q7S, {
                            id: C.i.CUSTOMIZE_GUILD,
                            impressionName: r.ImpressionNames.GUILD_ADD_CUSTOMIZE,
                            impressionProperties: es,
                            children: (0, n.jsx)("div", {
                                className: l()(v.kL, v.tn),
                                children: Z
                            })
                        }), (0, n.jsx)(c.q7S, {
                            id: C.i.CHANNEL_PROMPT,
                            impressionName: r.ImpressionNames.GUILD_ADD_CHANNEL_PROMPT,
                            impressionProperties: es,
                            children: (0, n.jsx)("div", {
                                className: l()(v.kL, v.tn),
                                children: Q
                            })
                        }), (0, n.jsx)(c.q7S, {
                            id: C.i.JOIN_GUILD,
                            impressionName: r.ImpressionNames.GUILD_ADD_JOIN,
                            impressionProperties: es,
                            children: (0, n.jsx)("div", {
                                className: l()(v.kL, v.tn),
                                children: ee
                            })
                        })]
                    })
                }), R !== C.i.AGE_GATE ? (0, n.jsx)(c.s_y, {
                    "data-migration-pending": !0,
                    onClick: L,
                    className: v.b
                }) : null, R === C.i.CHOOSE_TEMPLATE ? (0, n.jsx)(c.jlY, {
                    "data-migration-pending": !0,
                    justify: d.A.Justify.BETWEEN,
                    className: l()(v.qr, v.fj),
                    children: (0, n.jsx)(c.MzZ, {
                        className: v.D3,
                        onClick: () => {
                            M(C.i.JOIN_GUILD)
                        },
                        children: (0, n.jsxs)(c.Text, {
                            variant: "text-sm/medium",
                            className: v.D3,
                            children: [G.intl.string(G.t["N+Mi/U"]), " ", G.intl.string(G.t.yRjK4p)]
                        })
                    })
                }) : null, null != ea ? (0, n.jsx)(c.jlY, {
                    "data-migration-pending": !0,
                    justify: d.A.Justify.BETWEEN,
                    className: v.qr,
                    children: ea
                }) : null]
            })
        })]
    })
}