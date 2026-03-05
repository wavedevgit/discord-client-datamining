/** chunk id: 539895 params = (module,exports,require) **/
let i;
n.d(t, {
    A: () => y
}), n(938796), n(321073);
var l = n(311907),
    a = n(73153),
    r = n(846293),
    o = n(346542),
    d = n(976860),
    _ = n(95701),
    s = n(961350),
    u = n(734057),
    c = n(696451),
    f = n(71393),
    g = n(299091),
    A = n(576705),
    p = n(994500),
    I = n(287809),
    S = n(860689),
    v = n(837921),
    h = n(430914),
    m = n(652215),
    E = n(746080);
let C = m.BRT.APP,
    w = !1,
    b = !1,
    T = [];

function N() {
    w = !0
}
class O extends l.Ay.Store {
    static displayName = "InviteModalStore";
    initialize() {
        this.waitFor(s.default, u.A, c.Ay, f.A, g.A, A.A, p.A, I.default)
    }
    isOpen() {
        let e = __OVERLAY__ ? m.BRT.OVERLAY : m.BRT.APP;
        return !!(w && T.length > 0 && C === e)
    }
    getProps() {
        return {
            invite: T.length > 0 ? T[0][0] : null,
            error: null != i && "" !== i ? i : null,
            submitting: b
        }
    }
}
let y = new O(a.h, {
    OVERLAY_INITIALIZE: N,
    CONNECTION_OPEN: N,
    CONNECTION_CLOSED: function() {
        w = !1
    },
    INVITE_MODAL_OPEN: function(e) {
        let t = e.invite;
        if (null == t) return !1;
        if (t.state !== m.elq.EXPIRED && t.state !== m.elq.BANNED && t.state !== m.elq.ERROR) {
            let {
                channel: e,
                guild: n
            } = t;
            if (null == e) return !1;
            if ((0, _.MK)(e.type)) {
                if (null != u.A.getChannel(e.id)) return (0, d.uh)(m.ME, e.id), v.Ay.focus(), !1
            } else {
                if (null == n) return !1;
                if (null != f.A.getGuild(n.id) && !(0, o.G4)(t)) {
                    let e = !1;
                    if (null != t.roles && t.roles.length > 0) {
                        let i = s.default.getId(),
                            l = c.Ay.getMember(n.id, i),
                            a = new Set(l?.roles ?? []);
                        e = t.roles.some(e => !a.has(e.id))
                    }
                    if (!e) {
                        let e = function(e) {
                            if ((0, o.d4)(e)) return E.VV.ROLE_SUBSCRIPTIONS;
                            let {
                                channel: t
                            } = e;
                            if (null != t) {
                                let e = u.A.getChannel(t.id);
                                if (A.A.can(m.xBc.VIEW_CHANNEL, e)) return t.id
                            }
                            return null
                        }(t);
                        return (0, d.uh)(n.id, e), v.Ay.focus(), !1
                    }
                }
            }
        }
        if (T.some(e => {
                let [n] = e;
                return n.code === t.code
            })) return !1;
        C = e.context, b = !1;
        let n = function(e) {
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
                guild: s,
                is_nickname_changeable: u,
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
                is_nickname_changeable: u,
                flags: c
            };
            return null != _ && (f.channel = {
                ..._
            }), null != s && (f.guild = (0, S.DY)(s)), null != e.inviter && (f.inviter = {
                ...e.inviter
            }), null != e.roles && (f.roles = e.roles), f
        }(t);
        T.push([n, e.resolve]), (0, h.Zs)({
            location: "accept_invite_modal",
            autoTrackExposure: !0,
            guild: t.guild
        }).showFriendsInServer && r.Ay.fetchFriendMembers(t.code)
    },
    INVITE_MODAL_CLOSE: function() {
        if (i = null, b = !1, T.length > 0) {
            let [, e] = T.shift();
            null != e && e()
        }
    },
    INVITE_ACCEPT: function() {
        b = !0
    },
    INVITE_MODAL_ERROR: function(e) {
        let {
            message: t
        } = e;
        i = t, b = !1
    }
})