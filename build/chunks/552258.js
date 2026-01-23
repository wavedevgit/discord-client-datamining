/** Chunk was on 39679 **/
/** chunk id: 552258, original params: e,t,n (module,exports,require) **/
n.d(t, {
    default: () => E
});
var s = n(627968),
    i = n(64700),
    r = n(110259),
    a = n(311907),
    o = n(397927),
    l = n(956793),
    d = n(964486),
    _ = n(734057),
    u = n(994500),
    c = n(287809),
    m = n(954571),
    g = n(549022),
    f = n(212758),
    x = n(90386),
    N = n(64175),
    A = n(652215),
    h = n(985018),
    p = n(927884);

function E(e) {
    let {
        channelId: t,
        userId: n,
        transitionState: E,
        onClose: C
    } = e, k = i.useRef(!1), O = (0, a.bG)([u.A], () => u.A.isBlocked(n)), v = (0, a.bG)([_.A], () => _.A.getChannel(t));
    if ((0, d.l0)(() => {
            k.current || (0, g.$Y)(n)
        }), null == c.default.getUser(n)) return null;
    let I = [{
            icon: (0, x.I)([n], null == v ? void 0 : v.guild_id),
            text: (0, x.T)([n], 1, null == v ? void 0 : v.guild_id, t),
            className: p.n
        }, {
            icon: (0, s.jsx)("div", {
                className: p.K,
                children: (0, s.jsx)(o.id, {})
            }),
            text: h.intl.string(h.t["+4O9nX"]),
            className: p.n
        }],
        T = O ? h.intl.string(h.t.QnTzrp) : h.intl.string(h.t.QsWbfY);
    return (0, s.jsx)(f.A, {
        headerText: h.intl.string(h.t["1/gpFh"]),
        descriptionText: T,
        infoRows: I,
        onDismissAndStay: () => {
            k.current = !0, C(), (0, g.$Y)(n), m.default.track(A.HAw.VOICE_CHANNEL_BLOCKED_USER_WARNING_ENGAGEMENT, {
                action: N.Qi.CLICK_TO_STAY,
                channel_id: t,
                blocked_user_ids: O ? [n] : [],
                ignored_user_ids: O ? [] : [n],
                warning_surface: N.gD.POST_JOIN_MODAL
            })
        },
        onDismissAndLeave: () => {
            k.current = !0, C(), l.default.disconnect(), m.default.track(A.HAw.VOICE_CHANNEL_BLOCKED_USER_WARNING_ENGAGEMENT, {
                action: N.Qi.CLICK_TO_LEAVE,
                channel_id: t,
                blocked_user_ids: O ? [n] : [],
                ignored_user_ids: O ? [] : [n],
                warning_surface: N.gD.POST_JOIN_MODAL
            })
        },
        leaveButtonText: h.intl.string(h.t["Hi1/aQ"]),
        stayButtonText: h.intl.string(h.t["Z+/hfb"]),
        transitionState: E,
        onClose: C,
        impression: {
            impressionName: r.ImpressionNames.VOICE_CHANNEL_BLOCKED_USER_WARNING,
            impressionProperties: {
                channel_id: t,
                blocked_user_ids: O ? [n] : [],
                ignored_user_ids: O ? [] : [n],
                warning_surface: N.gD.POST_JOIN_MODAL
            }
        }
    })
}