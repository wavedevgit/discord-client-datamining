/** chunk id: 525828, original params: e,i,n (module,exports,require) **/
n.d(i, {
    default: () => A
}), n(896048), n(667532);
var t = n(627968);
n(64700);
var s = n(110259),
    r = n(397927),
    l = n(954376),
    a = n(734057),
    _ = n(287809),
    d = n(954571),
    o = n(549022),
    c = n(212758),
    u = n(90386),
    g = n(64175),
    m = n(652215),
    N = n(985018),
    f = n(441805);

function A(e) {
    var i, n;
    let A, p, {
            channelId: E,
            blockedUserIds: h,
            ignoredUserIds: C,
            transitionState: I,
            onClose: x,
            onJoin: O
        } = e,
        L = Array.from(h).map(e => _.default.getUser(e)).filter(e => null !== e),
        k = Array.from(C).map(e => _.default.getUser(e)).filter(e => null !== e);
    return 0 === L.length && 0 === k.length ? null : (0, t.jsx)(c.A, {
        headerText: N.intl.string(N.t.zPUmzZ),
        descriptionText: (i = h.size, n = C.size, A = i > 0, p = n > 0, A && p ? N.intl.string(N.t["X/iIjg"]) : A ? N.intl.formatToPlainString(N.t.WgQ12s, {
            n: i
        }) : p ? N.intl.formatToPlainString(N.t.bwibp1, {
            n: n
        }) : null),
        infoRows: (e => {
            let {
                channelId: i,
                blockedUsers: n,
                ignoredUsers: s
            } = e, _ = a.A.getChannel(i), d = n.length > 0, o = s.length > 0, c = [{
                icon: (0, t.jsx)("div", {
                    className: f.Kk,
                    children: (0, t.jsx)(r.id, {})
                }),
                text: N.intl.string(N.t["7jN3FC"]),
                className: f.nM
            }];
            if (d && o) {
                let e = [...n, ...s],
                    a = e.slice(0, 2).map(e => e.id);
                c.unshift({
                    icon: (0, t.jsx)("div", {
                        className: f.Kk,
                        children: (0, t.jsx)(l.A, {
                            recipients: a,
                            size: r._3J.SIZE_32
                        })
                    }),
                    text: (0, u.T)(a, e.length, null == _ ? void 0 : _.guild_id, i),
                    className: f.nM
                })
            } else {
                let e = d ? n.slice(0, 2).map(e => e.id) : s.slice(0, 2).map(e => e.id),
                    r = d ? n.length : s.length;
                c.unshift({
                    icon: (0, t.jsx)("div", {
                        className: f.Kk,
                        children: (0, u.I)(e, null == _ ? void 0 : _.guild_id)
                    }),
                    text: (0, u.T)(e, r, null == _ ? void 0 : _.guild_id, i),
                    className: f.nM
                })
            }
            return c
        })({
            channelId: E,
            blockedUsers: L,
            ignoredUsers: k
        }),
        onDismissAndStay: () => {
            O(), x(), (0, o.Cs)(new Set([...h, ...C])), d.default.track(m.HAw.VOICE_CHANNEL_BLOCKED_USER_WARNING_ENGAGEMENT, {
                action: g.Qi.CLICK_TO_JOIN,
                channel_id: E,
                blocked_user_ids: Array.from(h),
                ignored_user_ids: Array.from(C),
                warning_surface: g.gD.PRE_JOIN_MODAL
            })
        },
        onDismissAndLeave: () => {
            x(), d.default.track(m.HAw.VOICE_CHANNEL_BLOCKED_USER_WARNING_ENGAGEMENT, {
                action: g.Qi.CLICK_TO_LEAVE,
                channel_id: E,
                blocked_user_ids: Array.from(h),
                ignored_user_ids: Array.from(C),
                warning_surface: g.gD.PRE_JOIN_MODAL
            })
        },
        leaveButtonText: N.intl.string(N.t.rOXspL),
        stayButtonText: N.intl.string(N.t.VJlc0S),
        transitionState: I,
        onClose: x,
        impression: {
            impressionName: s.ImpressionNames.VOICE_CHANNEL_BLOCKED_USER_WARNING,
            impressionProperties: {
                channel_id: E,
                blocked_user_ids: Array.from(h),
                warning_surface: g.gD.PRE_JOIN_MODAL
            }
        }
    })
}