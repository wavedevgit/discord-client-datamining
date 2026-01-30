/** chunk id: 921955, original params: e,t,n (module,exports,require) **/
let r;
n.d(t, {
    A: () => j
}), n(896048), n(321073), n(733351), n(747238);
var l, i = n(311907),
    a = n(73153),
    o = n(308368),
    s = n(629357),
    c = n(47167),
    u = n(734057),
    d = n(71393),
    f = n(375492),
    p = n(290863),
    g = n(994500),
    m = n(287809),
    _ = n(645959),
    h = n(652215);

function y(e, t, n) {
    return t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = n, e
}
let A = [s.rD.TEXT_CHANNEL, s.rD.GROUP_DM, s.rD.USER],
    b = null,
    E = null,
    v = [],
    O = [];

function x(e) {
    v = [...v, e], O = O.map(e => {
        var t, n;
        return t = function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {},
                    r = Object.keys(n);
                "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable
                }))), r.forEach(function(t) {
                    y(e, t, n[t])
                })
            }
            return e
        }({}, e), n = n = {
            sent: v.includes(e.data.record.id)
        }, Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : (function(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                n.push.apply(n, r)
            }
            return n
        })(Object(n)).forEach(function(e) {
            Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
        }), t
    }), I.emitChange()
}

function S() {
    b = null, null != r && (r.destroy(), r = null), null != E && E()
}

function C() {
    let e = null != b && null != b.application_id ? f.A.getApplicationActivity(b.application_id) : null;
    if (null != b && (null == e || null == e.party || null == e.party.id)) return S()
}
class N extends(l = i.Ay.Store) {
    initialize() {
        this.waitFor(u.A, d.A, f.A, p.A, _.A, m.default)
    }
    getActivity() {
        return b
    }
    getQuery() {
        var e;
        return null != (e = null == r ? void 0 : r.query) ? e : ""
    }
    getResults() {
        return O
    }
}
y(N, "displayName", "ActivityInviteModalStore");
let I = new N(a.h, {
        ACTIVITY_INVITE_MODAL_OPEN: function(e) {
            b = e.activity, E = e.resolve, v = [], null == r && (r = new s.Ay((e, t) => {
                let n;
                O = ("" === t.trim() ? (n = [], _.A.getPrivateChannelIds().forEach(e => {
                    let t = u.A.getChannel(e);
                    if (null != t)
                        if (t.type === h.rbe.DM) {
                            let e = t.getRecipientId(),
                                r = null != e ? m.default.getUser(e) : null;
                            null != r && n.push({
                                type: s.rD.USER,
                                record: r,
                                score: 0
                            })
                        } else t.isMultiUserDM() && n.push({
                            type: s.rD.GROUP_DM,
                            record: t,
                            score: 0
                        })
                }), n) : e).map(e => {
                    switch (e.type) {
                        case s.rD.USER: {
                            let {
                                record: t
                            } = e;
                            return {
                                type: s.rD.USER,
                                sent: v.includes(t.id),
                                status: p.A.getStatus(t.id),
                                data: e
                            }
                        }
                        case s.rD.TEXT_CHANNEL: {
                            var t;
                            let {
                                record: n
                            } = e, r = u.A.getChannel(n.parent_id), l = d.A.getGuild(n.guild_id);
                            return {
                                type: s.rD.TEXT_CHANNEL,
                                sent: v.includes(n.id),
                                categoryName: null != r ? (0, c.m1)(r, m.default, g.A) : "",
                                guildName: null != (t = null == l ? void 0 : l.name) ? t : "",
                                data: e
                            }
                        }
                        case s.rD.GROUP_DM: {
                            let {
                                record: t
                            } = e;
                            return {
                                type: s.rD.GROUP_DM,
                                sent: v.includes(t.id),
                                data: e
                            }
                        }
                        default:
                            return null
                    }
                }).filter(e => null != e), I.emitChange()
            }, A, 100)), r.search("")
        },
        ACTIVITY_INVITE_MODAL_QUERY: function(e) {
            let {
                query: t
            } = e;
            null != r && r.search(t)
        },
        ACTIVITY_INVITE_MODAL_SEND: function(e) {
            if (null == b) return;
            let t = e.channelId,
                n = e.userId;
            null != t ? o.A.sendActivityInvite({
                channelId: t,
                type: h.xL.JOIN,
                activity: b,
                location: "Channel Text Area - Invite to Join Modal"
            }).then(() => x(t)) : null != n && o.A.sendActivityInviteUser({
                userId: n,
                type: h.xL.JOIN,
                activity: b,
                location: "Channel Text Area - Invite to Join Modal"
            }).then(() => x(n))
        },
        ACTIVITY_INVITE_MODAL_CLOSE: S,
        OVERLAY_SET_INPUT_LOCKED: function(e) {
            let {
                locked: t
            } = e;
            return !!t && null != b && (S(), !0)
        },
        LOCAL_ACTIVITY_UPDATE: C,
        RPC_APP_DISCONNECTED: C
    }),
    j = 21552 == n.j ? I : null