/** chunk id: 121914, original params: e,t,n (module,exports,require) **/
n.d(t, {
    _: () => N,
    g: () => P
}), n(896048);
var i, r = n(627968),
    l = n(64700),
    a = n(503698),
    o = n.n(a),
    s = n(311907),
    u = n(459192),
    c = n(397927),
    d = n(47167),
    h = n(713654),
    p = n(941971),
    f = n(734057),
    g = n(71393),
    m = n(222823),
    A = n(994500),
    y = n(485296),
    O = n(741961),
    v = n(287809),
    b = n(145567),
    E = n(187667),
    _ = n(922611),
    S = n(651813),
    x = n(919843),
    I = n(534765),
    j = n(34307),
    C = n(652215),
    T = n(985018),
    w = n(58812),
    N = ((i = {}).DEFAULT = "DEFAULT", i.CHANNEL_TYPE = "CHANNEL_TYPE", i);
let P = l.memo(function(e) {
    var t, n;
    let {
        channelId: i,
        selectedVoiceChannelId: a,
        iconVariant: N = "DEFAULT"
    } = e, P = null != a && i === a, D = (0, s.bG)([E.A], () => E.A.getSelectedChannelId() === i, [i]), R = (0, s.bG)([E.A], () => E.A.getVoiceChatMinimized()), L = (0, c.rdh)(c.LU0.colors.ICON_STATUS_ONLINE), k = (0, s.bG)([y.A], () => !!P && !!(y.A.isAnyoneElseSpeaking() || y.A.isCurrentUserSpeaking()), [P]), [M, z] = l.useState(!1), {
        mentionCount: V,
        isMentionLowImportance: U
    } = (0, s.cf)([m.Ay], () => null != i ? {
        mentionCount: m.Ay.getMentionCount(i),
        isMentionLowImportance: m.Ay.getIsMentionLowImportance(i)
    } : {
        mentionCount: 0,
        isMentionLowImportance: !1
    }, [i]), {
        label: G,
        user: H,
        guild: Y,
        channel: F
    } = (0, s.cf)([f.A, g.A, v.default, A.A], () => {
        var e;
        let t = null != (e = f.A.getChannel(i)) ? e : null;
        if (null == t) return {
            label: T.intl.string(T.t.zLZPmk),
            user: null,
            guild: null,
            channel: null
        };
        let n = (0, d.m1)(t, v.default, A.A);
        return {
            label: n,
            user: (0, S.j)(t, v.default),
            guild: (0, S.P)(t, g.A),
            channel: t
        }
    }, [i]);
    l.useEffect(() => {
        null == F && (0, x.b)(i)
    }, [F, i]);
    let W = (0, s.bG)([O.A, v.default], () => {
            var e, t;
            if (null == F) return !1;
            let n = null != (e = null == (t = v.default.getCurrentUser()) ? void 0 : t.id) ? e : null,
                i = O.A.getTypingUsers(F.id);
            for (let e in i)
                if (e !== n) return !0;
            return !1
        }, [F]),
        K = (0, s.bG)([m.Ay], () => {
            let e = null == F ? void 0 : F.id;
            return null != e && m.Ay.hasUnread(e)
        }, [F]),
        Z = (0, r.jsx)("div", {
            className: w.St,
            children: (() => {
                var e;
                let t = null != (e = null == F ? void 0 : F.isPrivate()) && e;
                if ("CHANNEL_TYPE" === N && !t) {
                    let e = (0, h.gU)(F, Y);
                    null != e || (e = c.oyn);
                    let t = P && !R && k,
                        n = {
                            boxShadow: "none"
                        },
                        i = L.rgba({
                            opacity: .85
                        }),
                        l = L.rgba({
                            opacity: .45
                        });
                    return t && (n.boxShadow = "0 0 0 2px rgba(".concat(i, "), 0 0 12px 2px rgba(").concat(l, ")")), (0, r.jsx)("div", {
                        className: o()(w.s, D && w.lJ),
                        style: n,
                        children: (0, r.jsx)(e, {
                            className: w.Yc,
                            size: "sm",
                            color: D ? c.LU0.colors.WHITE : c.LU0.colors.ICON_STATUS_ONLINE
                        })
                    })
                }
                return (0, r.jsx)(_.g, {
                    channel: F,
                    user: H,
                    guild: Y,
                    isSelected: D,
                    size: _.c.SIZE_40,
                    isTyping: W,
                    mentionCount: V,
                    isMentionLowImportance: U
                })
            })()
        }),
        B = (0, I.r)({
            channel: F,
            guild: Y,
            user: H
        }),
        X = null != (t = null == F ? void 0 : F.isPrivate()) && t,
        J = null != (n = null == Y ? void 0 : Y.name) ? n : "",
        Q = X ? void 0 : G,
        q = X ? G : "" !== J ? J : G,
        $ = (() => {
            if (null == F || X) return null;
            let e = (0, h.gU)(F, Y);
            return null != e || (e = c.oyn), (0, r.jsx)(e, {
                size: "sm",
                color: c.LU0.colors.INTERACTIVE_ICON_DEFAULT
            })
        })();
    return null == F ? (0, r.jsx)("div", {
        className: w.R
    }) : (0, r.jsx)(u.u, {
        title: Q,
        body: q,
        asset: $,
        assetSize: 20,
        "aria-label": G,
        children: (0, r.jsxs)(c.DUT, {
            className: w.pc,
            onClick: () => {
                var e;
                P && (0, b.S$)({
                    minimized: !1
                }), (0, b.D$)({
                    target: {
                        kind: b.bB.CHANNEL,
                        channelId: i,
                        guildId: null != (e = null == Y ? void 0 : Y.id) ? e : null,
                        messageId: null
                    },
                    source: j.B.MANUAL,
                    widgetType: C.uss.TEXT_CHAT_V3
                })
            },
            onContextMenu: B,
            onMouseEnter: () => z(!0),
            onMouseLeave: () => z(!1),
            children: [Z, (0, r.jsx)("div", {
                className: w.vT,
                children: (0, r.jsx)(p.A, {
                    selected: D,
                    hovered: M,
                    unread: K
                })
            })]
        })
    })
})