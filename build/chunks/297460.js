/** chunk id: 297460, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => g
}), n(896048);
var r = n(627968);
n(64700);
var i = n(311907),
    l = n(397927),
    a = n(308528),
    u = n(442433),
    o = n(734057),
    c = n(576705),
    d = n(145567),
    s = n(187667),
    f = n(34307),
    A = n(652215),
    b = n(895867),
    y = n(985018);

function g(e, t) {
    let n = "DM_USER" === e.kind ? e.userId : null,
        g = (0, i.bG)([o.A], () => {
            var e;
            return null != n && null != (e = o.A.getDMFromUserId(n)) ? e : null
        }, [n]),
        v = "CHANNEL" === e.kind ? e.channel.id : g,
        E = "CHANNEL" === e.kind ? e.channel : null,
        O = (0, i.bG)([c.A], () => !!(null == E || E.isDM() || E.isMultiUserDM() || E.isPrivate()) || c.A.can(A.xBc.READ_MESSAGE_HISTORY, E), [E]);
    return (0, i.bG)([s.A], () => {
        if (null == v) return !1;
        let [e] = s.A.getSessionEntries();
        for (let t of e)
            if (t.channelId === v) return !0;
        return s.A.getSelectedChannelId() === v
    }, [v]) && null != v ? (0, r.jsx)(l.Drp, {
        id: "close-chat",
        label: y.intl.string(b.default.ERApc4),
        action: () => {
            (0, d.lu)({
                channelId: v,
                widgetType: t,
                secondaryValue: "context_menu_close_chat"
            }), (0, u.Z_)()
        }
    }) : O ? (0, r.jsx)(l.Drp, {
        id: "open-chat",
        label: y.intl.string(b.default.KWrMk5),
        action: () => {
            switch (e.kind) {
                case "CHANNEL":
                    (0, d.D$)({
                        channelId: e.channel.id,
                        source: f.B.MANUAL,
                        guildId: e.guildId,
                        messageId: null,
                        widgetType: t
                    });
                    break;
                case "DM_USER":
                    if (null != e.onOpenOverride) {
                        try {
                            e.onOpenOverride(e.userId)
                        } finally {
                            (0, u.Z_)()
                        }
                        return
                    }(async () => {
                        try {
                            let n = null != g ? g : await a.A.getOrEnsurePrivateChannel(e.userId);
                            (0, d.D$)({
                                channelId: n,
                                source: f.B.MANUAL,
                                guildId: null,
                                messageId: null,
                                widgetType: t
                            })
                        } catch (e) {} finally {
                            (0, u.Z_)()
                        }
                    })();
                    break;
                default:
                    return e
            }
        }
    }) : null
}