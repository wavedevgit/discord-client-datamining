/** chunk id: 121914 params = (module,exports,require) **/
n.d(t, {
    _: () => j,
    g: () => O
});
var i, a = n(627968),
    r = n(64700),
    s = n(503698),
    l = n.n(s),
    o = n(311907),
    d = n(459192),
    c = n(397927),
    u = n(47167),
    _ = n(713654),
    h = n(941971),
    m = n(734057),
    p = n(71393),
    g = n(222823),
    f = n(994500),
    A = n(485296),
    x = n(741961),
    I = n(287809),
    E = n(1193),
    b = n(145567),
    v = n(922611),
    C = n(651813),
    S = n(919843),
    y = n(534765),
    T = n(256688),
    N = n(652215),
    w = n(985018),
    L = n(110738),
    j = ((i = {}).DEFAULT = "DEFAULT", i.CHANNEL_TYPE = "CHANNEL_TYPE", i);
let O = r.memo(function(e) {
    let {
        channelId: t,
        selectedVoiceChannelId: n,
        iconVariant: i = "DEFAULT"
    } = e, s = null != n && t === n, j = (0, o.bG)([E.A], () => E.A.getSelectedChannelId() === t, [t]), O = (0, o.bG)([E.A], () => E.A.getVoiceChatMinimized()), P = (0, c.rdh)(c.LU0.colors.ICON_STATUS_ONLINE), R = (0, o.bG)([A.A], () => !!s && !!(A.A.isAnyoneElseSpeaking() || A.A.isCurrentUserSpeaking()), [s]), [D, M] = r.useState(!1), {
        mentionCount: k,
        isMentionLowImportance: G
    } = (0, o.cf)([g.Ay], () => null != t ? {
        mentionCount: g.Ay.getMentionCount(t),
        isMentionLowImportance: g.Ay.getIsMentionLowImportance(t)
    } : {
        mentionCount: 0,
        isMentionLowImportance: !1
    }, [t]), {
        label: z,
        user: U,
        guild: V,
        channel: F
    } = (0, o.cf)([m.A, p.A, I.default, f.A], () => {
        let e = m.A.getChannel(t) ?? null;
        if (null == e) return {
            label: w.intl.string(w.t.zLZPmk),
            user: null,
            guild: null,
            channel: null
        };
        let n = (0, u.m1)(e, I.default, f.A);
        return {
            label: n,
            user: (0, C.j)(e, I.default),
            guild: (0, C.P)(e, p.A),
            channel: e
        }
    }, [t]);
    r.useEffect(() => {
        null == F && (0, S.b)(t)
    }, [F, t]);
    let W = (0, o.bG)([x.A, I.default], () => {
            if (null == F) return !1;
            let e = I.default.getCurrentUser()?.id ?? null,
                t = x.A.getTypingUsers(F.id);
            for (let n in t)
                if (n !== e) return !0;
            return !1
        }, [F]),
        H = (0, o.bG)([g.Ay], () => {
            let e = F?.id;
            return null != e && g.Ay.hasUnread(e)
        }, [F]),
        B = (0, a.jsx)("div", {
            className: L.St,
            children: (() => {
                let e = F?.isPrivate() ?? !1;
                if ("CHANNEL_TYPE" === i && !e) {
                    let e = (0, _.gU)(F, V);
                    e ??= c.oyn;
                    let t = s && !O && R,
                        n = {
                            boxShadow: "none"
                        },
                        i = P.rgba({
                            opacity: .85
                        }),
                        r = P.rgba({
                            opacity: .45
                        });
                    return t && (n.boxShadow = `0 0 0 2px rgba(${i}), 0 0 12px 2px rgba(${r})`), (0, a.jsx)("div", {
                        className: l()(L.s, j && L.lJ),
                        style: n,
                        children: (0, a.jsx)(e, {
                            className: L.Yc,
                            size: "sm",
                            color: j ? c.LU0.colors.WHITE : c.LU0.colors.ICON_STATUS_ONLINE
                        })
                    })
                }
                return (0, a.jsx)(v.g, {
                    channel: F,
                    user: U,
                    guild: V,
                    isSelected: j,
                    size: v.c.SIZE_40,
                    isTyping: W,
                    mentionCount: k,
                    isMentionLowImportance: G
                })
            })()
        }),
        Y = (0, y.r)({
            channel: F,
            guild: V,
            user: U
        }),
        X = F?.isPrivate() ?? !1,
        Z = V?.name ?? "",
        K = X ? void 0 : z,
        J = X ? z : "" !== Z ? Z : z,
        Q = (() => {
            if (null == F || X) return null;
            let e = (0, _.gU)(F, V);
            return e ??= c.oyn, (0, a.jsx)(e, {
                size: "sm",
                color: c.LU0.colors.INTERACTIVE_ICON_DEFAULT
            })
        })();
    return null == F ? (0, a.jsx)("div", {
        className: L.R
    }) : (0, a.jsx)(d.u, {
        title: K,
        body: J,
        asset: Q,
        assetSize: 20,
        "aria-label": z,
        children: (0, a.jsxs)(c.DUT, {
            className: L.pc,
            onClick: () => {
                s && (0, b.S$)({
                    minimized: !1
                }), (0, b.D$)({
                    target: {
                        kind: b.bB.CHANNEL,
                        channelId: t,
                        guildId: V?.id ?? null,
                        messageId: null
                    },
                    source: T.B.MANUAL,
                    widgetType: N.uss.TEXT_CHAT_V3
                })
            },
            onContextMenu: Y,
            onMouseEnter: () => M(!0),
            onMouseLeave: () => M(!1),
            children: [B, (0, a.jsx)("div", {
                className: L.vT,
                children: (0, a.jsx)(h.A, {
                    selected: j,
                    hovered: D,
                    unread: H
                })
            })]
        })
    })
})