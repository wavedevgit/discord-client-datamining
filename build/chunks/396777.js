/** Chunk was on 52081 **/
/** chunk id: 396777, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => b
}), n(896048);
var r = n(627968),
    o = n(64700),
    l = n(284009),
    i = n.n(l),
    a = n(110259),
    s = n(397927),
    c = n(475743),
    u = n(954571),
    d = n(362311),
    _ = n(230801),
    p = n(424912),
    f = n(468820),
    m = n(803585),
    S = n(819638),
    N = n(652215),
    I = n(534093);

function b(e) {
    let {
        transitionState: t,
        initialSlide: n = S.oS.GUILD_TEMPLATES,
        onSuccess: l,
        onClose: b,
        onSlideChange: T,
        hasJoinButton: O
    } = e, [E, g] = o.useState(n), A = (0, c.A)(E), [C, w] = o.useState(null), [D, y] = o.useState(null), [j, h] = o.useState(null), [L, v] = o.useState(!1);
    o.useEffect(() => {
        g(n)
    }, [g, n]), o.useEffect(() => {
        E !== A && T(E)
    }, [T, E, A]);
    let x = o.useCallback(e => {
            g(S.oS.CREATION_INTENT), y(e), u.default.track(N.HAw.GUILD_TEMPLATE_SELECTED, {
                template_name: e.id,
                template_code: e.code
            })
        }, []),
        U = o.useCallback(e => {
            v(e === S.IR.COMMUNITY), g(S.oS.CUSTOMIZE_GUILD)
        }, []),
        G = o.useCallback(() => g(S.oS.JOIN_GUILD), [g]),
        k = o.useCallback(() => {
            E === S.oS.CUSTOMIZE_GUILD ? g(S.oS.CREATION_INTENT) : (g(S.oS.GUILD_TEMPLATES), y(null))
        }, [E]),
        P = o.useCallback(e => {
            h(e), l(e)
        }, [l, h]),
        R = o.useCallback(() => {
            i()(null != j, "handleSuccess called before onGuildCreated"), l(j)
        }, [l, j]),
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
                className: I.k,
                children: (0, r.jsxs)(s.tN_, {
                    activeSlide: E,
                    width: B,
                    onSlideReady: e => w(e),
                    children: [(0, r.jsx)(s.q7S, {
                        id: S.oS.GUILD_TEMPLATES,
                        impressionName: a.ImpressionNames.GUILD_ADD_LANDING,
                        impressionProperties: M,
                        children: (0, r.jsx)(f.A, {
                            isNewUser: !1,
                            onJoin: O ? G : void 0,
                            onChooseTemplate: x,
                            onClose: b
                        })
                    }), (0, r.jsx)(s.q7S, {
                        id: S.oS.CREATION_INTENT,
                        impressionName: a.ImpressionNames.GUILD_ADD_INTENT_SELECTION,
                        impressionProperties: M,
                        children: (0, r.jsx)(_.A, {
                            onClose: b,
                            onBack: k,
                            onCreationIntentChosen: U
                        })
                    }), (0, r.jsx)(s.q7S, {
                        id: S.oS.CUSTOMIZE_GUILD,
                        impressionName: a.ImpressionNames.GUILD_ADD_CUSTOMIZE,
                        impressionProperties: M,
                        children: (0, r.jsx)(p.A, {
                            guildTemplate: D,
                            onGuildCreated: P,
                            onClose: b,
                            onBack: k,
                            isSlideReady: C === S.oS.CUSTOMIZE_GUILD,
                            isCommunity: L
                        })
                    }), (0, r.jsx)(s.q7S, {
                        id: S.oS.CHANNEL_PROMPT,
                        impressionName: a.ImpressionNames.GUILD_ADD_CHANNEL_PROMPT,
                        impressionProperties: M,
                        children: (0, r.jsx)(d.A, {
                            createdGuildId: j,
                            onClose: b,
                            onChannelPromptCompleted: R,
                            isSlideReady: C === S.oS.CHANNEL_PROMPT
                        })
                    }), (0, r.jsx)(s.q7S, {
                        id: S.oS.JOIN_GUILD,
                        impressionName: a.ImpressionNames.GUILD_ADD_JOIN,
                        impressionProperties: M,
                        children: (0, r.jsx)(m.A, {
                            onBack: k,
                            onClose: b,
                            isSlideReady: C === S.oS.JOIN_GUILD
                        })
                    })]
                })
            })
        })
    })
}