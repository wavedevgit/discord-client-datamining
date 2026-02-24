/** chunk id: 121914, original params: e,t,n (module,exports,require) **/
n.d(t, {
    _: () => N,
    g: () => M
});
var i, l = n(627968),
    r = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(311907),
    u = n(459192),
    d = n(397927),
    c = n(47167),
    h = n(713654),
    m = n(941971),
    g = n(734057),
    p = n(71393),
    A = n(222823),
    f = n(994500),
    x = n(485296),
    E = n(741961),
    S = n(287809),
    v = n(145567),
    C = n(187667),
    I = n(922611),
    T = n(651813),
    _ = n(919843),
    y = n(534765),
    j = n(34307),
    b = n(652215),
    w = n(985018),
    O = n(58812),
    N = ((i = {}).DEFAULT = "DEFAULT", i.CHANNEL_TYPE = "CHANNEL_TYPE", i);
let M = r.memo(function(e) {
    let {
        channelId: t,
        selectedVoiceChannelId: n,
        iconVariant: i = "DEFAULT"
    } = e, s = null != n && t === n, N = (0, o.bG)([C.A], () => C.A.getSelectedChannelId() === t, [t]), M = (0, o.bG)([C.A], () => C.A.getVoiceChatMinimized()), R = (0, d.rdh)(d.LU0.colors.ICON_STATUS_ONLINE), k = (0, o.bG)([x.A], () => !!s && !!(x.A.isAnyoneElseSpeaking() || x.A.isCurrentUserSpeaking()), [s]), [L, D] = r.useState(!1), {
        mentionCount: z,
        isMentionLowImportance: P
    } = (0, o.cf)([A.Ay], () => null != t ? {
        mentionCount: A.Ay.getMentionCount(t),
        isMentionLowImportance: A.Ay.getIsMentionLowImportance(t)
    } : {
        mentionCount: 0,
        isMentionLowImportance: !1
    }, [t]), {
        label: G,
        user: V,
        guild: U,
        channel: H
    } = (0, o.cf)([g.A, p.A, S.default, f.A], () => {
        let e = g.A.getChannel(t) ?? null;
        if (null == e) return {
            label: w.intl.string(w.t.zLZPmk),
            user: null,
            guild: null,
            channel: null
        };
        let n = (0, c.m1)(e, S.default, f.A);
        return {
            label: n,
            user: (0, T.j)(e, S.default),
            guild: (0, T.P)(e, p.A),
            channel: e
        }
    }, [t]);
    r.useEffect(() => {
        null == H && (0, _.b)(t)
    }, [H, t]);
    let Y = (0, o.bG)([E.A, S.default], () => {
            if (null == H) return !1;
            let e = S.default.getCurrentUser()?.id ?? null,
                t = E.A.getTypingUsers(H.id);
            for (let n in t)
                if (n !== e) return !0;
            return !1
        }, [H]),
        F = (0, o.bG)([A.Ay], () => {
            let e = H?.id;
            return null != e && A.Ay.hasUnread(e)
        }, [H]),
        Z = (0, l.jsx)("div", {
            className: O.St,
            children: (() => {
                let e = H?.isPrivate() ?? !1;
                if ("CHANNEL_TYPE" === i && !e) {
                    let e = (0, h.gU)(H, U);
                    e ??= d.oyn;
                    let t = s && !M && k,
                        n = {
                            boxShadow: "none"
                        },
                        i = R.rgba({
                            opacity: .85
                        }),
                        r = R.rgba({
                            opacity: .45
                        });
                    return t && (n.boxShadow = `0 0 0 2px rgba(${i}), 0 0 12px 2px rgba(${r})`), (0, l.jsx)("div", {
                        className: a()(O.s, N && O.lJ),
                        style: n,
                        children: (0, l.jsx)(e, {
                            className: O.Yc,
                            size: "sm",
                            color: N ? d.LU0.colors.WHITE : d.LU0.colors.ICON_STATUS_ONLINE
                        })
                    })
                }
                return (0, l.jsx)(I.g, {
                    channel: H,
                    user: V,
                    guild: U,
                    isSelected: N,
                    size: I.c.SIZE_40,
                    isTyping: Y,
                    mentionCount: z,
                    isMentionLowImportance: P
                })
            })()
        }),
        W = (0, y.r)({
            channel: H,
            guild: U,
            user: V
        }),
        X = H?.isPrivate() ?? !1,
        K = U?.name ?? "",
        B = X ? void 0 : G,
        q = X ? G : "" !== K ? K : G,
        Q = (() => {
            if (null == H || X) return null;
            let e = (0, h.gU)(H, U);
            return e ??= d.oyn, (0, l.jsx)(e, {
                size: "sm",
                color: d.LU0.colors.INTERACTIVE_ICON_DEFAULT
            })
        })();
    return null == H ? (0, l.jsx)("div", {
        className: O.R
    }) : (0, l.jsx)(u.u, {
        title: B,
        body: q,
        asset: Q,
        assetSize: 20,
        "aria-label": G,
        children: (0, l.jsxs)(d.DUT, {
            className: O.pc,
            onClick: () => {
                s && (0, v.S$)({
                    minimized: !1
                }), (0, v.D$)({
                    target: {
                        kind: v.bB.CHANNEL,
                        channelId: t,
                        guildId: U?.id ?? null,
                        messageId: null
                    },
                    source: j.B.MANUAL,
                    widgetType: b.uss.TEXT_CHAT_V3
                })
            },
            onContextMenu: W,
            onMouseEnter: () => D(!0),
            onMouseLeave: () => D(!1),
            children: [Z, (0, l.jsx)("div", {
                className: O.vT,
                children: (0, l.jsx)(m.A, {
                    selected: N,
                    hovered: L,
                    unread: F
                })
            })]
        })
    })
})