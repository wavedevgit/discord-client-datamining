/** chunk id: 876717 params = (module,exports,require) **/
s.d(t, {
    default: () => L
}), s(667532);
var _ = s(627968),
    i = s(64700),
    a = s(397927),
    n = s(308528),
    A = s(954376),
    r = s(734057),
    l = s(954571),
    c = s(105600),
    d = s(212758),
    o = s(90386),
    I = s(64175),
    h = s(652215),
    E = s(985018),
    u = s(627534);

function L(e) {
    var t, s;
    let L, N, {
        channelId: C,
        blockedUserIds: g,
        ignoredUserIds: m = [],
        transitionState: G,
        onClose: f
    } = e;
    return i.useEffect(() => {
        l.default.track(h.HAw.GDM_BLOCKED_USER_WARNING_VIEWED, {
            channel_id: C,
            warning_medium: I.W_.MODAL,
            blocked_user_ids: g,
            ignored_user_ids: m
        })
    }, [C, g, m]), (0, _.jsx)(d.A, {
        headerText: E.intl.string(E.t["mwJJ+f"]),
        descriptionText: (t = g.length, s = m.length, L = t > 0, N = s > 0, L && N ? E.intl.string(E.t["0dP7Fk"]) : L ? E.intl.formatToPlainString(E.t.OpIG9d, {
            n: t
        }) : N ? E.intl.formatToPlainString(E.t["D+V4jI"], {
            n: s
        }) : null),
        infoRows: (e => {
            let {
                channelId: t,
                blockedUserIds: s,
                ignoredUserIds: i
            } = e, n = r.A.getChannel(t), l = s.length > 0, c = i.length > 0, d = [{
                icon: (0, _.jsx)("div", {
                    className: u.Kk,
                    children: (0, _.jsx)(a.yr3, {})
                }),
                text: E.intl.string(E.t.RIMw54),
                className: u.nM
            }, {
                icon: (0, _.jsx)("div", {
                    className: u.Kk,
                    children: (0, _.jsx)(a.mir, {})
                }),
                text: E.intl.string(E.t.bejNWN),
                className: u.nM
            }];
            if (l && c) {
                let e = [...s, ...i],
                    r = e.slice(0, 2);
                d.unshift({
                    icon: (0, _.jsx)("div", {
                        className: u.Kk,
                        children: (0, _.jsx)(A.A, {
                            recipients: r,
                            size: a._3J.SIZE_32
                        })
                    }),
                    text: (0, o.T)(r, e.length, n?.guild_id, t),
                    className: u.nM
                })
            } else {
                let e = l ? [...s].slice(0, 2) : [...i].slice(0, 2),
                    a = l ? s.length : i.length;
                d.unshift({
                    icon: (0, _.jsx)("div", {
                        className: u.Kk,
                        children: (0, o.I)(e, n?.guild_id)
                    }),
                    text: (0, o.T)(e, a, n?.guild_id, t),
                    className: u.nM
                })
            }
            return d
        })({
            channelId: C,
            blockedUserIds: g,
            ignoredUserIds: m
        }),
        onDismissAndStay: () => {
            f(), (0, c.U)(C), l.default.track(h.HAw.GDM_BLOCKED_USER_WARNING_ENGAGEMENT, {
                action: I.Qi.CLICK_TO_STAY,
                channel_id: C,
                warning_medium: I.W_.MODAL,
                blocked_user_ids: g,
                ignored_user_ids: m
            })
        },
        onDismissAndLeave: () => {
            f(), (0, c.U)(C), n.A.closePrivateChannel(C, !0, !0), l.default.track(h.HAw.GDM_BLOCKED_USER_WARNING_ENGAGEMENT, {
                action: I.Qi.CLICK_TO_LEAVE,
                channel_id: C,
                warning_medium: I.W_.MODAL,
                blocked_user_ids: g,
                ignored_user_ids: m
            })
        },
        leaveButtonText: E.intl.string(E.t["Hi1/aQ"]),
        stayButtonText: E.intl.string(E.t.SW3lpH),
        transitionState: G,
        onClose: f
    })
}