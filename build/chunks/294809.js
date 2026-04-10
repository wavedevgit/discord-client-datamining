/** chunk id: 294809 params = (module,exports,require) **/
n.d(t, {
    C: () => H
});
var i = n(627968),
    l = n(64700),
    r = n(311907),
    s = n(377802),
    a = n(342952),
    o = n(397927),
    u = n(47167),
    d = n(713654),
    c = n(21119),
    h = n(734057),
    g = n(71393),
    m = n(576705),
    f = n(290863),
    A = n(222823),
    I = n(994500),
    E = n(309010),
    p = n(287809),
    _ = n(977997),
    S = n(607567),
    x = n(403362),
    T = n(996439),
    N = n(914853),
    C = n(676923),
    v = n(1404),
    y = n(483392),
    M = n(578093),
    R = n(912156),
    D = n(67103),
    b = n(195435),
    O = n(576420),
    w = n(70191),
    j = n(336148),
    U = n(652215),
    L = n(985018),
    k = n(925031),
    G = n(453748),
    P = n(664674);

function F(e) {
    let {
        isCollapsed: t
    } = e;
    return (0, i.jsx)(y.C, {
        isCollapsed: t,
        size: "md",
        className: G.t4
    })
}

function V(e) {
    e.preventDefault(), e.stopPropagation()
}

function z(e) {
    let {
        channelId: t,
        guildId: n
    } = e, l = function(e) {
        let {
            channelId: t
        } = e;
        return (0, r.yK)([_.A, p.default, c.A, I.A], () => Object.values(_.A.getVoiceStatesForChannel(t)).map(e => p.default.getUser(e.userId)).filter(x.Vq).sort((e, t) => I.A.isFriend(e.id) && !I.A.isFriend(t.id) ? -1 : !I.A.isFriend(e.id) && I.A.isFriend(t.id) ? 1 : (c.A.getUserAffinity(t.id)?.vcProbability ?? 0) - (c.A.getUserAffinity(e.id)?.vcProbability ?? 0)), [t])
    }({
        channelId: t
    });
    return 0 === l.length ? null : (0, i.jsx)("div", {
        className: P.X0,
        children: (0, i.jsx)(a.A, {
            users: l,
            guildId: n ?? void 0,
            maxUsers: Math.min(l.length, 4),
            size: o._3J.SIZE_24,
            disableUserPopout: !0,
            "aria-label": L.intl.string(L.t.TxqPQR)
        })
    })
}

function H(e) {
    let t, {
            channelId: n,
            listItemId: a,
            voiceStates: c,
            shouldHighlightIfRecentlyAdded: I,
            isExpanded: p = !1,
            onToggleExpanded: x,
            onPrimaryAction: y,
            onContextMenu: G
        } = e,
        H = (0, r.bG)([h.A], () => h.A.getChannel(n), [n]),
        Y = (0, u.Ay)(H ?? void 0, !0) ?? "???",
        W = H?.getGuildId?.() ?? null,
        B = (0, r.bG)([g.A], () => null != W ? g.A.getGuild(W) ?? null : null, [W]),
        Z = (0, r.bG)([E.A], () => E.A.getVoiceChannelId() === n, [n]),
        X = (0, r.bG)([m.A], () => null != H && (!!H.isPrivate?.() || m.A.can(U.xBc.READ_MESSAGE_HISTORY, H)), [H]),
        [K] = (0, r.bG)([S.Ay], () => null == H || null == W ? [
            [], 0
        ] : [S.Ay.getVoiceStatesForChannel(H), S.Ay.getVoiceStateVersion(W)], [H, W], T.D),
        $ = null != K && K.length > 0,
        q = (0, r.bG)([_.A, f.A], () => {
            for (let e of Object.values(_.A.getVoiceStatesForChannel(n))) {
                let t = f.A.findActivity(e.userId, w.A);
                if (t?.name != null) return t.name
            }
            return null
        }, [n]),
        J = (0, O.A2)(n),
        Q = (0, j.X6)(H),
        ee = l.useRef(null),
        et = l.useCallback(() => {
            let e = ee.current;
            null != e && (clearTimeout(e), ee.current = null)
        }, []);
    l.useEffect(() => () => {
        et()
    }, [et]);
    let en = l.useCallback(e => {
            e.stopPropagation(), y?.({
                type: D.c.CONNECT_VOICE_CHANNEL,
                channelId: n,
                guildId: W
            }), p || x?.(n)
        }, [n, W, p, y, x]),
        ei = l.useCallback(e => {
            e.stopPropagation(), y?.({
                type: D.c.DISCONNECT_VOICE_CHANNEL,
                channelId: n
            })
        }, [n, y]),
        el = l.useCallback(() => {
            X && y?.({
                type: D.c.OPEN_TEXT_CHAT_CHANNEL,
                channelId: n,
                guildId: W
            })
        }, [X, n, W, y]),
        er = l.useCallback(e => {
            if ($) return void x?.(n)
        }, [n, $, x]),
        es = l.useCallback(e => {
            et(), el()
        }, [et, el]),
        ea = l.useCallback(e => {
            G?.({
                type: D.K.VOICE_CHANNEL,
                event: e,
                channel: H ?? void 0,
                guild: B,
                channelId: n
            })
        }, [H, n, B, G]),
        {
            mentionCount: eo
        } = (0, r.cf)([A.Ay], () => ({
            mentionCount: A.Ay.getMentionCount(n),
            isMentionLowImportance: A.Ay.getIsMentionLowImportance(n),
            unread: A.Ay.hasUnread(n)
        }), [n]),
        eu = (0, o.rdh)(o.LU0.colors.STATUS_POSITIVE),
        ed = (0, o.rdh)(o.LU0.colors.STATUS_DANGER),
        ec = (0, o.rdh)(o.LU0.colors.TEXT_STRONG),
        eh = (0, o.rdh)(o.LU0.colors.TEXT_MUTED),
        eg = Z ? eu : eo > 0 ? ec : eh,
        {
            Component: em,
            events: {
                onMouseEnter: ef,
                onMouseLeave: eA
            }
        } = (0, s.O)(),
        eI = () => {
            let e = Z ? L.intl.string(L.t["6vrfgt"]) : L.intl.string(L.t.S0W8Z5),
                t = Z ? ed.hex() : eu.hex(),
                n = Z ? em : o._jp;
            return (0, i.jsx)("div", {
                onDoubleClick: V,
                children: (0, i.jsx)(C.S, {
                    tooltipText: e,
                    onClick: Z ? ei : en,
                    onMouseEnter: ef,
                    onMouseLeave: eA,
                    children: (0, i.jsx)(n, {
                        size: "sm",
                        color: t
                    })
                })
            })
        };
    return (0, i.jsxs)("div", {
        onDoubleClick: es,
        children: [(0, i.jsx)(v.D, {
            listItemId: a,
            recentlyAddedTimestampMs: I ? J : null,
            onClick: er,
            onContextMenu: ea,
            avatar: null != H ? (0, i.jsx)(R.A, {
                isTyping: Q,
                guild: B ?? void 0,
                channel: H,
                size: R.Q.SMALL_32
            }) : null,
            primaryText: (0, i.jsxs)("div", {
                className: k.QV,
                children: [null == (t = (0, d.gU)(H, B)) ? null : (0, i.jsx)(t, {
                    color: eg.hex(),
                    size: "xxs",
                    className: k.p
                }), (0, i.jsx)(o.Text, {
                    className: k.Xh,
                    variant: "text-sm/medium",
                    color: Z ? "status-positive-text" : eo > 0 ? "text-strong" : "text-muted",
                    children: Y
                })]
            }),
            secondaryText: null != q ? (0, i.jsxs)("div", {
                className: P.z2,
                children: [(0, i.jsx)(o._xR, {
                    size: "xxs",
                    color: "currentColor",
                    className: P.AE
                }), (0, i.jsx)(o.Text, {
                    variant: "text-xs/normal",
                    color: "text-muted",
                    children: q
                })]
            }) : B?.name != null ? (0, i.jsx)(o.Text, {
                variant: "text-xs/normal",
                color: "text-muted",
                children: B.name
            }) : null,
            rightActions: e => {
                switch (!0) {
                    case !$:
                        return e ? (0, i.jsxs)("div", {
                            className: P.YT,
                            onDoubleClick: V,
                            children: [eI(), (0, i.jsx)(M.j, {
                                tab: N.x.VOICE,
                                targetId: n
                            })]
                        }) : null;
                    case $:
                        return (0, i.jsxs)(i.Fragment, {
                            children: [p ? (0, i.jsxs)("div", {
                                className: P.YT,
                                onDoubleClick: V,
                                children: [eI(), (0, i.jsx)(M.j, {
                                    tab: N.x.VOICE,
                                    targetId: n
                                })]
                            }) : (0, i.jsx)(z, {
                                channelId: n,
                                guildId: W
                            }), (0, i.jsx)(F, {
                                isCollapsed: !p
                            })]
                        });
                    default:
                        return null
                }
            }
        }), p && K.length > 0 ? (0, i.jsx)("div", {
            className: P.Nz,
            children: K.slice(0, 25).map(e => (0, i.jsx)(b.a, {
                channelId: n,
                guildId: W,
                userId: e.user.id,
                onDoubleClick: V,
                onContextMenu: G
            }, e.user.id))
        }) : null]
    })
}