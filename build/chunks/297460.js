/** chunk id: 297460, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => y
}), n(896048);
var r = n(627968);
n(64700);
var i = n(311907),
    l = n(397927),
    a = n(442433),
    u = n(734057),
    o = n(576705),
    c = n(589051),
    s = n(145567),
    d = n(187667),
    f = n(34307),
    A = n(652215),
    b = n(895867),
    g = n(985018);

function y(e, t) {
    let {
        hasChat: n
    } = (0, c.M8)("useOverlayTextChatToggleMenuItem"), y = "DM_USER" === e.kind ? e.userId : null, v = (0, i.bG)([u.A], () => {
        var e;
        return null != y && null != (e = u.A.getDMFromUserId(y)) ? e : null
    }, [y]), E = "CHANNEL" === e.kind ? e.channel.id : v, O = (0, i.bG)([d.A], () => {
        if (null == E) return !1;
        let [e] = d.A.getSessionEntries();
        for (let t of e)
            if (t.channelId === E) return !0;
        return d.A.getSelectedChannelId() === E
    }, [E]), h = "CHANNEL" === e.kind ? e.channel : null, p = (0, i.bG)([o.A], () => !!(null == h || h.isDM() || h.isMultiUserDM() || h.isPrivate()) || o.A.can(A.xBc.READ_MESSAGE_HISTORY, h), [h]);
    return O && null != E ? (0, r.jsx)(l.Drp, {
        id: "close-chat",
        label: g.intl.string(b.default.ERApc4),
        action: () => {
            (0, s.lu)({
                channelId: E,
                widgetType: t,
                secondaryValue: "context_menu_close_chat"
            }), (0, a.Z_)()
        }
    }) : n && p ? (0, r.jsx)(l.Drp, {
        id: "open-chat",
        label: g.intl.string(b.default.KWrMk5),
        action: () => {
            switch (e.kind) {
                case "CHANNEL":
                    (0, s.D$)({
                        target: {
                            kind: s.bB.CHANNEL,
                            channelId: e.channel.id,
                            guildId: e.guildId,
                            messageId: null
                        },
                        source: f.B.MANUAL,
                        widgetType: t
                    });
                    break;
                case "DM_USER":
                    if (null != e.onOpenOverride) {
                        try {
                            e.onOpenOverride(e.userId)
                        } finally {
                            (0, a.Z_)()
                        }
                        return
                    }(async () => {
                        try {
                            await (0, s.D$)({
                                target: {
                                    kind: s.bB.DM_USER,
                                    userId: e.userId,
                                    messageId: null,
                                    existingChannelId: v
                                },
                                source: f.B.MANUAL,
                                widgetType: t
                            })
                        } catch (e) {} finally {
                            (0, a.Z_)()
                        }
                    })();
                    break;
                default:
                    return e
            }
        }
    }) : null
}