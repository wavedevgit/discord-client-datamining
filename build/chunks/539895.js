/** chunk id: 539895 params = (module,exports,require) **/
let i;
n.d(t, {
    A: () => R
}), n(938796);
var l = n(311907),
    a = n(73153),
    r = n(846293),
    o = n(346542),
    d = n(976860),
    _ = n(95701),
    u = n(961350),
    s = n(734057),
    c = n(696451),
    f = n(71393),
    p = n(299091),
    g = n(576705),
    A = n(994500),
    v = n(287809),
    m = n(860689),
    I = n(837921),
    S = n(260451),
    h = n(652215),
    C = n(746080);
let E = h.BRT.APP,
    b = !1,
    w = !1,
    O = null,
    T = null;

function N() {
    b = !0
}
class y extends l.Ay.Store {
    static displayName = "InviteModalStore";
    initialize() {
        this.waitFor(u.default, s.A, c.Ay, f.A, p.A, g.A, A.A, v.default)
    }
    isOpen() {
        let e = __OVERLAY__ ? h.BRT.OVERLAY : h.BRT.APP;
        return !!(b && null != T && E === e)
    }
    getProps() {
        return {
            invite: T?.invite ?? null,
            error: null != i && "" !== i ? i : null,
            submitting: w,
            invite_instance_id: O
        }
    }
}
let R = new y(a.h, {
    OVERLAY_INITIALIZE: N,
    CONNECTION_OPEN: N,
    CONNECTION_CLOSED: function() {
        b = !1
    },
    INVITE_MODAL_OPEN: function(e) {
        let t = e.invite;
        if (null == t) return !1;
        if (t.state !== h.elq.EXPIRED && t.state !== h.elq.BANNED && t.state !== h.elq.ERROR) {
            let {
                channel: e,
                guild: n
            } = t;
            if (null == e) return !1;
            if ((0, _.MK)(e.type)) {
                if (null != s.A.getChannel(e.id)) return (0, d.uh)(h.ME, e.id), I.Ay.focus(), !1
            } else {
                if (null == n) return !1;
                if (null != f.A.getGuild(n.id) && !(0, o.G4)(t)) {
                    let e = !1;
                    if (null != t.roles && t.roles.length > 0) {
                        let i = u.default.getId(),
                            l = c.Ay.getMember(n.id, i),
                            a = new Set(l?.roles ?? []);
                        e = t.roles.some(e => !a.has(e.id))
                    }
                    if (!e) {
                        let e = function(e) {
                            if ((0, o.d4)(e)) return C.VV.ROLE_SUBSCRIPTIONS;
                            let {
                                channel: t
                            } = e;
                            if (null != t) {
                                let e = s.A.getChannel(t.id);
                                if (g.A.can(h.xBc.VIEW_CHANNEL, e)) return t.id
                            }
                            return null
                        }(t);
                        return (0, d.uh)(n.id, e), I.Ay.focus(), !1
                    }
                }
            }
        }
        if (null != T && T.invite.code === t.code) return !1;
        null != T && null != T.resolve && T.resolve(), E = e.context, i = null, w = !1, O = e.invite_instance_id ?? null, T = {
            invite: function(e) {
                let {
                    approximate_member_count: t,
                    approximate_presence_count: n,
                    code: i,
                    state: l,
                    target_type: a,
                    target_user: r,
                    target_application: o,
                    type: d,
                    channel: _,
                    guild: u,
                    is_nickname_changeable: s,
                    flags: c
                } = e, f = {
                    code: i,
                    state: l,
                    approximate_member_count: t,
                    approximate_presence_count: n,
                    target_type: a,
                    target_user: r,
                    target_application: o,
                    type: d,
                    is_nickname_changeable: s,
                    flags: c
                };
                return null != _ && (f.channel = {
                    ..._
                }), null != u && (f.guild = (0, m.DY)(u)), null != e.inviter && (f.inviter = {
                    ...e.inviter
                }), null != e.roles && (f.roles = e.roles), f
            }(t),
            resolve: e.resolve
        }, S.SH.getConfig({
            location: "accept_invite_modal"
        }).enabled && r.Ay.fetchFriendMembers(t.code)
    },
    INVITE_MODAL_CLOSE: function() {
        i = null, w = !1, O = null, T?.resolve != null && T.resolve(), T = null
    },
    INVITE_ACCEPT: function() {
        w = !0
    },
    INVITE_MODAL_ERROR: function(e) {
        let {
            message: t
        } = e;
        i = t, w = !1
    }
})