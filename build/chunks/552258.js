/** Chunk was on 59294 **/
/** chunk id: 552258, original params: e,n,i (module,exports,require) **/
i.d(n, {
    default: () => h
});
var s = i(627968),
    t = i(64700),
    _ = i(110259),
    r = i(311907),
    d = i(397927),
    o = i(956793),
    a = i(964486),
    c = i(734057),
    l = i(994500),
    u = i(287809),
    N = i(954571),
    A = i(549022),
    g = i(212758),
    f = i(90386),
    p = i(64175),
    E = i(652215),
    C = i(985018),
    O = i(927884);

function h(e) {
    let {
        channelId: n,
        userId: i,
        transitionState: h,
        onClose: I
    } = e, L = t.useRef(!1), T = (0, r.bG)([l.A], () => l.A.isBlocked(i)), m = (0, r.bG)([c.A], () => c.A.getChannel(n));
    if ((0, a.l0)(() => {
            L.current || (0, A.$Y)(i)
        }), null == u.default.getUser(i)) return null;
    let x = [{
            icon: (0, f.I)([i], null == m ? void 0 : m.guild_id),
            text: (0, f.T)([i], 1, null == m ? void 0 : m.guild_id, n),
            className: O.n
        }, {
            icon: (0, s.jsx)("div", {
                className: O.K,
                children: (0, s.jsx)(d.id, {})
            }),
            text: C.intl.string(C.t["+4O9nX"]),
            className: O.n
        }],
        k = T ? C.intl.string(C.t.QnTzrp) : C.intl.string(C.t.QsWbfY);
    return (0, s.jsx)(g.A, {
        headerText: C.intl.string(C.t["1/gpFh"]),
        descriptionText: k,
        infoRows: x,
        onDismissAndStay: () => {
            L.current = !0, I(), (0, A.$Y)(i), N.default.track(E.HAw.VOICE_CHANNEL_BLOCKED_USER_WARNING_ENGAGEMENT, {
                action: p.Qi.CLICK_TO_STAY,
                channel_id: n,
                blocked_user_ids: T ? [i] : [],
                ignored_user_ids: T ? [] : [i],
                warning_surface: p.gD.POST_JOIN_MODAL
            })
        },
        onDismissAndLeave: () => {
            L.current = !0, I(), o.default.disconnect(), N.default.track(E.HAw.VOICE_CHANNEL_BLOCKED_USER_WARNING_ENGAGEMENT, {
                action: p.Qi.CLICK_TO_LEAVE,
                channel_id: n,
                blocked_user_ids: T ? [i] : [],
                ignored_user_ids: T ? [] : [i],
                warning_surface: p.gD.POST_JOIN_MODAL
            })
        },
        leaveButtonText: C.intl.string(C.t["Hi1/aQ"]),
        stayButtonText: C.intl.string(C.t["Z+/hfb"]),
        transitionState: h,
        onClose: I,
        impression: {
            impressionName: _.ImpressionNames.VOICE_CHANNEL_BLOCKED_USER_WARNING,
            impressionProperties: {
                channel_id: n,
                blocked_user_ids: T ? [i] : [],
                ignored_user_ids: T ? [] : [i],
                warning_surface: p.gD.POST_JOIN_MODAL
            }
        }
    })
}