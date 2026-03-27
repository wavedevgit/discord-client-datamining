/** chunk id: 297460 params = (module,exports,require) **/
n.d(t, {
    A: () => v
});
var r = n(627968);
n(64700);
var i = n(311907),
    l = n(397927),
    a = n(442433),
    d = n(734057),
    u = n(576705),
    s = n(1193),
    o = n(589051),
    c = n(145567),
    A = n(34307),
    E = n(652215),
    f = n(822889),
    g = n(985018);

function v(e, t) {
    let {
        hasChat: n
    } = (0, o.M8)("useOverlayTextChatToggleMenuItem"), v = "DM_USER" === e.kind ? e.userId : null, h = (0, i.bG)([d.A], () => null != v ? d.A.getDMFromUserId(v) ?? null : null, [v]), I = "CHANNEL" === e.kind ? e.channel.id : h, N = (0, i.bG)([s.A], () => {
        if (null == I) return !1;
        let [e] = s.A.getSessionEntries();
        for (let t of e)
            if (t.channelId === I) return !0;
        return s.A.getSelectedChannelId() === I
    }, [I]), y = "CHANNEL" === e.kind ? e.channel : null, M = (0, i.bG)([u.A], () => !!(null == y || y.isDM() || y.isMultiUserDM() || y.isPrivate()) || u.A.can(E.xBc.READ_MESSAGE_HISTORY, y), [y]);
    return N && null != I ? (0, r.jsx)(l.Drp, {
        id: "close-chat",
        label: g.intl.string(f.default.ERApc4),
        action: () => {
            (0, c.lu)({
                channelId: I,
                widgetType: t,
                secondaryValue: "context_menu_close_chat"
            }), (0, a.Z_)()
        }
    }) : n && M ? (0, r.jsx)(l.Drp, {
        id: "open-chat",
        label: g.intl.string(f.default.KWrMk5),
        action: () => {
            switch (e.kind) {
                case "CHANNEL":
                    (0, c.D$)({
                        target: {
                            kind: c.bB.CHANNEL,
                            channelId: e.channel.id,
                            guildId: e.guildId,
                            messageId: null
                        },
                        source: A.B.MANUAL,
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
                            await (0, c.D$)({
                                target: {
                                    kind: c.bB.DM_USER,
                                    userId: e.userId,
                                    messageId: null,
                                    existingChannelId: h
                                },
                                source: A.B.MANUAL,
                                widgetType: t
                            })
                        } catch {} finally {
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