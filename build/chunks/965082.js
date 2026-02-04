/** chunk id: 965082, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => I
});
var i = n(627968);
n(64700);
var r = n(684013),
    l = n(334738),
    a = n(465364),
    o = n(742984),
    s = n(976860),
    u = n(400492),
    c = n(845618),
    d = n(203982),
    h = n(723702),
    p = n(837921),
    f = n(41984),
    g = n(589051),
    m = n(592598),
    A = n(395011),
    y = n(222506),
    O = n(145567),
    v = n(378702),
    b = n(119191),
    E = n(581730),
    _ = n(672396),
    S = n(652215),
    x = n(985018);

function I(e, t, n, I) {
    var j;
    if (m.A.isNotificationDisabled(_.KS.TextChat)) return (0, u.Ak)(c.cH, c.pD), null;
    let {
        icon: C,
        title: T,
        body: w
    } = (0, o.TB)(e, t, n), {
        trackView: N,
        trackClick: P
    } = (0, E.Y9)(_.KS.TextChat, {
        notif_type: _.KS.TextChat,
        notif_user_id: null == (j = t.author) ? void 0 : j.id,
        message_id: t.id,
        message_type: t.type,
        guild_id: e.guild_id,
        channel_id: e.id,
        channel_type: e.type
    }), {
        hasChat: D
    } = (0, g.NI)("textChatNotification");
    return {
        icon: C,
        title: T,
        body: t.content.length > 0 ? (0, a.Ay)(t, {
            noStyleAndInteraction: !0,
            formatInline: !0,
            hideSimpleEmbedContent: !1
        }).content : w,
        hint: (e, t) => e || !t ? null : (0, b.sI)((0, E.Jn)(), x.t.ykjOAJ, x.intl.string(x.t.jZkzVJ)),
        maxBodyLines: 2,
        renderFooter: (n, r, l) => D ? null : n && !l ? (0, i.jsx)(v.A, {
            id: r,
            replyToMessageId: t.id,
            channel: e,
            onSend: () => P("send")
        }) : null,
        onNotificationShow: () => {
            I && (0, u.Ak)(c.cH, c.pD), N()
        },
        onNotificationClick: (n, i) => {
            let a = A.A.getTargetPID();
            if ((0, l.ack)(e.id, {
                    section: S.JJy.OVERLAY,
                    object: S.ZSU.ACK_TEXT_CHAT_NOTIFICATION,
                    objectType: S.AnalyticsObjectTypes.ACK_SEMI_AUTOMATIC
                }, !0, !0, t.id), D) {
                var o;
                (0, O.D$)({
                    target: {
                        kind: O.bB.CHANNEL,
                        channelId: e.id,
                        guildId: null != (o = e.guild_id) ? o : null,
                        messageId: t.id
                    },
                    source: f.B9.NOTIFICATION_CLICK,
                    widgetType: S.uss.NOTIFICATIONS
                }), y.A.isInputLocked(a) ? (P("unlock"), r.A.setInputLocked(!1, a)) : P("jump"), requestAnimationFrame(() => {
                    d._.dispatchToLastSubscribed(S.jej.TEXTAREA_FOCUS, {
                        channelId: e.id
                    })
                }), r.A.updateNotificationStatus(i, S.yFH.DISMISSED);
                return
            }
            y.A.isInputLocked(a) ? (P("unlock"), r.A.setInputLocked(!1, a)) : (P("jump"), (0, s.pX)(S.BVt.CHANNEL(e.guild_id, e.id, t.id)), h.isPlatformEmbedded && p.Ay.focus())
        },
        onDismissClick: () => {
            P("dismiss")
        }
    }
}