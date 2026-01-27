/** Chunk was on 52081 **/
/** chunk id: 396777, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => E
}), n(896048);
var r = n(627968),
    l = n(64700),
    i = n(284009),
    o = n.n(i),
    a = n(110259),
    s = n(397927),
    c = n(475743),
    u = n(954571),
    _ = n(362311),
    d = n(230801),
    p = n(424912),
    f = n(468820),
    m = n(803585),
    I = n(819638),
    S = n(652215),
    N = n(534093);

function E(e) {
    let {
        transitionState: t,
        initialSlide: n = I.oS.GUILD_TEMPLATES,
        onSuccess: i,
        onClose: E,
        onSlideChange: T,
        hasJoinButton: A
    } = e, [g, O] = l.useState(n), D = (0, c.A)(g), [C, b] = l.useState(null), [L, w] = l.useState(null), [U, y] = l.useState(null), [G, h] = l.useState(!1);
    l.useEffect(() => {
        O(n)
    }, [O, n]), l.useEffect(() => {
        g !== D && T(g)
    }, [T, g, D]);
    let j = l.useCallback(e => {
            O(I.oS.CREATION_INTENT), w(e), u.default.track(S.HAw.GUILD_TEMPLATE_SELECTED, {
                template_name: e.id,
                template_code: e.code
            })
        }, []),
        v = l.useCallback(e => {
            h(e === I.IR.COMMUNITY), O(I.oS.CUSTOMIZE_GUILD)
        }, []),
        x = l.useCallback(() => O(I.oS.JOIN_GUILD), [O]),
        R = l.useCallback(() => {
            g === I.oS.CUSTOMIZE_GUILD ? O(I.oS.CREATION_INTENT) : (O(I.oS.GUILD_TEMPLATES), w(null))
        }, [g]),
        P = l.useCallback(e => {
            y(e), i(e)
        }, [i, y]),
        k = l.useCallback(() => {
            o()(null != U, "handleSuccess called before onGuildCreated"), i(U)
        }, [i, U]),
        M = {
            impression_group: a.ImpressionGroups.GUILD_ADD_FLOW
        },
        B = (0, s.rdh)(s.LU0.modules.modal.WIDTH_SMALL);
    return (0, r.jsx)("div", {
        children: (0, r.jsx)(s.EOs, {
            "data-migration-pending": !0,
            transitionState: t,
            disableTrack: !0,
            parentComponent: "CreateGuildModal",
            children: (0, r.jsx)("div", {
                className: N.k,
                children: (0, r.jsxs)(s.tN_, {
                    activeSlide: g,
                    width: B,
                    onSlideReady: e => b(e),
                    children: [(0, r.jsx)(s.q7S, {
                        id: I.oS.GUILD_TEMPLATES,
                        impressionName: a.ImpressionNames.GUILD_ADD_LANDING,
                        impressionProperties: M,
                        children: (0, r.jsx)(f.A, {
                            isNewUser: !1,
                            onJoin: A ? x : void 0,
                            onChooseTemplate: j,
                            onClose: E
                        })
                    }), (0, r.jsx)(s.q7S, {
                        id: I.oS.CREATION_INTENT,
                        impressionName: a.ImpressionNames.GUILD_ADD_INTENT_SELECTION,
                        impressionProperties: M,
                        children: (0, r.jsx)(d.A, {
                            onClose: E,
                            onBack: R,
                            onCreationIntentChosen: v
                        })
                    }), (0, r.jsx)(s.q7S, {
                        id: I.oS.CUSTOMIZE_GUILD,
                        impressionName: a.ImpressionNames.GUILD_ADD_CUSTOMIZE,
                        impressionProperties: M,
                        children: (0, r.jsx)(p.A, {
                            guildTemplate: L,
                            onGuildCreated: P,
                            onClose: E,
                            onBack: R,
                            isSlideReady: C === I.oS.CUSTOMIZE_GUILD,
                            isCommunity: G
                        })
                    }), (0, r.jsx)(s.q7S, {
                        id: I.oS.CHANNEL_PROMPT,
                        impressionName: a.ImpressionNames.GUILD_ADD_CHANNEL_PROMPT,
                        impressionProperties: M,
                        children: (0, r.jsx)(_.A, {
                            createdGuildId: U,
                            onClose: E,
                            onChannelPromptCompleted: k,
                            isSlideReady: C === I.oS.CHANNEL_PROMPT
                        })
                    }), (0, r.jsx)(s.q7S, {
                        id: I.oS.JOIN_GUILD,
                        impressionName: a.ImpressionNames.GUILD_ADD_JOIN,
                        impressionProperties: M,
                        children: (0, r.jsx)(m.A, {
                            onBack: R,
                            onClose: E,
                            isSlideReady: C === I.oS.JOIN_GUILD
                        })
                    })]
                })
            })
        })
    })
}