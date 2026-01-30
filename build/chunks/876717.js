/** chunk id: 876717, original params: e,i,n (module,exports,require) **/
n.d(i, {
    default: () => x
}), n(896048), n(667532);
var t = n(627968),
    s = n(64700),
    l = n(397927),
    _ = n(308528),
    d = n(954376),
    a = n(734057),
    r = n(954571),
    c = n(105600),
    o = n(212758),
    u = n(90386),
    g = n(64175),
    h = n(652215),
    m = n(985018),
    N = n(441805);

function x(e) {
    var i, n;
    let x, A, {
        channelId: f,
        blockedUserIds: E,
        ignoredUserIds: k = [],
        transitionState: p,
        onClose: M
    } = e;
    return s.useEffect(() => {
        r.default.track(h.HAw.GDM_BLOCKED_USER_WARNING_VIEWED, {
            channel_id: f,
            warning_medium: g.W_.MODAL,
            blocked_user_ids: E,
            ignored_user_ids: k
        })
    }, [f, E, k]), (0, t.jsx)(o.A, {
        headerText: m.intl.string(m.t["mwJJ+f"]),
        descriptionText: (i = E.length, n = k.length, x = i > 0, A = n > 0, x && A ? m.intl.string(m.t["0dP7Fk"]) : x ? m.intl.formatToPlainString(m.t.OpIG9d, {
            n: i
        }) : A ? m.intl.formatToPlainString(m.t["D+V4jI"], {
            n: n
        }) : null),
        infoRows: (e => {
            let {
                channelId: i,
                blockedUserIds: n,
                ignoredUserIds: s
            } = e, _ = a.A.getChannel(i), r = n.length > 0, c = s.length > 0, o = [{
                icon: (0, t.jsx)("div", {
                    className: N.Kk,
                    children: (0, t.jsx)(l.yr3, {})
                }),
                text: m.intl.string(m.t.RIMw54),
                className: N.nM
            }, {
                icon: (0, t.jsx)("div", {
                    className: N.Kk,
                    children: (0, t.jsx)(l.mir, {})
                }),
                text: m.intl.string(m.t.bejNWN),
                className: N.nM
            }];
            if (r && c) {
                let e = [...n, ...s],
                    a = e.slice(0, 2);
                o.unshift({
                    icon: (0, t.jsx)("div", {
                        className: N.Kk,
                        children: (0, t.jsx)(d.A, {
                            recipients: a,
                            size: l._3J.SIZE_32
                        })
                    }),
                    text: (0, u.T)(a, e.length, null == _ ? void 0 : _.guild_id, i),
                    className: N.nM
                })
            } else {
                let e = r ? [...n].slice(0, 2) : [...s].slice(0, 2),
                    l = r ? n.length : s.length;
                o.unshift({
                    icon: (0, t.jsx)("div", {
                        className: N.Kk,
                        children: (0, u.I)(e, null == _ ? void 0 : _.guild_id)
                    }),
                    text: (0, u.T)(e, l, null == _ ? void 0 : _.guild_id, i),
                    className: N.nM
                })
            }
            return o
        })({
            channelId: f,
            blockedUserIds: E,
            ignoredUserIds: k
        }),
        onDismissAndStay: () => {
            M(), (0, c.U)(f), r.default.track(h.HAw.GDM_BLOCKED_USER_WARNING_ENGAGEMENT, {
                action: g.Qi.CLICK_TO_STAY,
                channel_id: f,
                warning_medium: g.W_.MODAL,
                blocked_user_ids: E,
                ignored_user_ids: k
            })
        },
        onDismissAndLeave: () => {
            M(), (0, c.U)(f), _.A.closePrivateChannel(f, !0, !0), r.default.track(h.HAw.GDM_BLOCKED_USER_WARNING_ENGAGEMENT, {
                action: g.Qi.CLICK_TO_LEAVE,
                channel_id: f,
                warning_medium: g.W_.MODAL,
                blocked_user_ids: E,
                ignored_user_ids: k
            })
        },
        leaveButtonText: m.intl.string(m.t["Hi1/aQ"]),
        stayButtonText: m.intl.string(m.t.SW3lpH),
        transitionState: p,
        onClose: M
    })
}