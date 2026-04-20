/** chunk id: 396777 params = (module,exports,require) **/
n.d(t, {
    A: () => S
});
var i = n(627968),
    l = n(64700),
    s = n(284009),
    a = n.n(s),
    r = n(110259),
    o = n(397927),
    c = n(475743),
    d = n(954571),
    u = n(362311),
    m = n(230801),
    p = n(424912),
    x = n(468820),
    g = n(803585),
    h = n(819638),
    C = n(652215),
    N = n(70082);

function S(e) {
    let {
        transitionState: t,
        initialSlide: n = h.oS.GUILD_TEMPLATES,
        onSuccess: s,
        onClose: S,
        onSlideChange: j,
        hasJoinButton: A
    } = e, [b, v] = l.useState(n), I = (0, c.A)(b), [T, E] = l.useState(null), [D, f] = l.useState(null), [L, k] = l.useState(null), [_, U] = l.useState(!1);
    l.useEffect(() => {
        v(n)
    }, [v, n]), l.useEffect(() => {
        b !== I && j(b)
    }, [j, b, I]);
    let y = l.useCallback(e => {
            v(h.oS.CREATION_INTENT), f(e), d.default.track(C.HAw.GUILD_TEMPLATE_SELECTED, {
                template_name: e.id,
                template_code: e.code
            })
        }, []),
        O = l.useCallback(e => {
            U(e === h.IR.COMMUNITY), v(h.oS.CUSTOMIZE_GUILD)
        }, []),
        G = l.useCallback(() => v(h.oS.JOIN_GUILD), [v]),
        w = l.useCallback(() => {
            b === h.oS.CUSTOMIZE_GUILD ? v(h.oS.CREATION_INTENT) : (v(h.oS.GUILD_TEMPLATES), f(null))
        }, [b]),
        P = l.useCallback(e => {
            k(e), s(e)
        }, [s, k]),
        R = l.useCallback(() => {
            a()(null != L, "handleSuccess called before onGuildCreated"), s(L)
        }, [s, L]),
        M = {
            impression_group: r.ImpressionGroups.GUILD_ADD_FLOW
        },
        B = (0, o.rdh)(o.LU0.modules.modal.WIDTH_SMALL);
    return (0, i.jsx)("div", {
        children: (0, i.jsx)(o.EOs, {
            "data-migration-pending": !0,
            transitionState: t,
            disableTrack: !0,
            parentComponent: "CreateGuildModal",
            children: (0, i.jsx)("div", {
                className: N.k,
                children: (0, i.jsxs)(o.tN_, {
                    activeSlide: b,
                    width: B,
                    onSlideReady: e => E(e),
                    children: [(0, i.jsx)(o.q7S, {
                        id: h.oS.GUILD_TEMPLATES,
                        impressionName: r.ImpressionNames.GUILD_ADD_LANDING,
                        impressionProperties: M,
                        children: (0, i.jsx)(x.A, {
                            isNewUser: !1,
                            onJoin: A ? G : void 0,
                            onChooseTemplate: y,
                            onClose: S
                        })
                    }), (0, i.jsx)(o.q7S, {
                        id: h.oS.CREATION_INTENT,
                        impressionName: r.ImpressionNames.GUILD_ADD_INTENT_SELECTION,
                        impressionProperties: M,
                        children: (0, i.jsx)(m.A, {
                            onClose: S,
                            onBack: w,
                            onCreationIntentChosen: O
                        })
                    }), (0, i.jsx)(o.q7S, {
                        id: h.oS.CUSTOMIZE_GUILD,
                        impressionName: r.ImpressionNames.GUILD_ADD_CUSTOMIZE,
                        impressionProperties: M,
                        children: (0, i.jsx)(p.A, {
                            guildTemplate: D,
                            onGuildCreated: P,
                            onClose: S,
                            onBack: w,
                            isSlideReady: T === h.oS.CUSTOMIZE_GUILD,
                            isCommunity: _
                        })
                    }), (0, i.jsx)(o.q7S, {
                        id: h.oS.CHANNEL_PROMPT,
                        impressionName: r.ImpressionNames.GUILD_ADD_CHANNEL_PROMPT,
                        impressionProperties: M,
                        children: (0, i.jsx)(u.A, {
                            createdGuildId: L,
                            onClose: S,
                            onChannelPromptCompleted: R,
                            isSlideReady: T === h.oS.CHANNEL_PROMPT
                        })
                    }), (0, i.jsx)(o.q7S, {
                        id: h.oS.JOIN_GUILD,
                        impressionName: r.ImpressionNames.GUILD_ADD_JOIN,
                        impressionProperties: M,
                        children: (0, i.jsx)(g.A, {
                            onBack: w,
                            onClose: S,
                            isSlideReady: T === h.oS.JOIN_GUILD
                        })
                    })]
                })
            })
        })
    })
}