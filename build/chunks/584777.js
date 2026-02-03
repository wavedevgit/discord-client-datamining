/** chunk id: 584777, original params: e,t,n (module,exports,require) **/
let l;
n.d(t, {
    A: () => O,
    h: () => W
}), n(896048), n(733351), n(321073), n(638769);
var r, i, a, s = n(311907),
    o = n(713402),
    c = n(73153),
    u = n(450827),
    d = n(49463),
    h = n(625788),
    p = n(21119),
    f = n(95701),
    m = n(240248),
    g = n(427262),
    A = n(734057),
    b = n(153488),
    _ = n(205761),
    y = n(994500),
    v = n(287809),
    E = n(652215),
    O = ((i = {})[i.FRIENDS = 0] = "FRIENDS", i[i.GUILD_MEMBERS = 1] = "GUILD_MEMBERS", i);
let C = !1,
    S = "",
    x = 0,
    j = 0,
    I = [],
    T = !1,
    N = new Set,
    P = null,
    w = new o.J(function(e) {
        let t = [],
            n = v.default.getCurrentUser();
        return y.A.isFriend(e.user.id) ? t.push("FRIENDS") : e.user.id !== (null == n ? void 0 : n.id) && t.push("GUILD_MEMBERS"), t
    }, function(e) {
        if (b.A.hasConsented(E.YAq.PERSONALIZATION)) {
            var t, n;
            return -(null != (t = null == (n = p.A.getUserAffinity(e.user.id)) ? void 0 : n.communicationProbability) ? t : 0)
        }
        return (0, m.sS)(g.Ay.getName(e.user).toLocaleLowerCase())
    });

function R() {
    S = "", x = 0, j = 0, I = [], N = new Set, C = !1, P = null, w.clear()
}

function D(e) {
    S = e, j = 0, M()
}

function M() {
    if (!C) return !1;
    let e = A.A.getChannel(P);
    if (0 === S.trim().length) return null != l && l.clearQuery(), I = function(e) {
        let t = y.A.getFriendIDs(),
            n = h.A.getConfig({
                location: "PrivateChannelRecipientsInviteStore"
            }).enabled,
            l = v.default.getCurrentUser();
        if ((null == l ? void 0 : l.isStaff()) && (t = Array.from(new Set([...t, ...v.default.filter(e => e.isStaff() && e.id !== l.id, !1).map(e => e.id)]))), (null == e ? void 0 : e.isPrivate()) && (t = t.filter(t => !e.recipients.includes(t))), n)
            for (let n of ((null == e ? void 0 : e.isPrivate()) && e.recipients.forEach(e => {
                    w.delete(e)
                }), t)) ! function(e) {
                if (y.A.getRelationshipType(e) === E.eA$.BLOCKED) return w.delete(e);
                let t = v.default.getUser(e);
                if (null == t) return w.delete(e);
                w.set(e, {
                    user: t,
                    comparator: g.Ay.getName(t)
                })
            }(n);
        return t.reduce((e, t) => {
            let n = v.default.getUser(t);
            return null == n || n.isProvisional || e.push({
                user: n,
                comparator: g.Ay.getName(n)
            }), e
        }, []).sort(L)
    }(e), !0;
    let t = null != e ? e.recipients : [];
    if (null != l) {
        var n;
        let e, r, i, a = v.default.getCurrentUser(),
            s = null != (n = null == a ? void 0 : a.isStaff()) && n,
            o = h.A.getConfig({
                location: "PrivateChannelRecipientsInviteStore"
            }).enabled;
        l.setQuery({
            query: S,
            filters: o ? void 0 : {
                friends: !0,
                staff: s,
                provisional: !1
            },
            blacklist: t,
            boosters: (r = Math.max(...(e = _.A.getFrequentlyWithoutFetchingLatest().filter(e => e instanceof f.cq && e.isDM())).map(e => {
                let {
                    id: t
                } = e;
                return _.A.getScoreWithoutFetchingLatest(t)
            })), i = {}, e.forEach(e => {
                let t = _.A.getScoreWithoutFetchingLatest(e.id),
                    n = e.getRecipientId(),
                    l = .2 * !!y.A.isFriend(n),
                    a = .1 * (null != A.A.getDMFromUserId(n));
                i[n] = 1 + t / r + l + a
            }), i)
        })
    }
    return !1
}

function k() {
    if (!C) return !1;
    let e = T;
    return (T = y.A.getFriendCount() > 0) !== e
}

function L(e, t) {
    if (b.A.hasConsented(E.YAq.PERSONALIZATION)) {
        var n, l, r, i;
        let a = null != (n = null == (r = p.A.getUserAffinity(e.user.id)) ? void 0 : r.communicationProbability) ? n : 0,
            s = null != (l = null == (i = p.A.getUserAffinity(t.user.id)) ? void 0 : i.communicationProbability) ? l : 0;
        if (a !== s) return s - a
    }
    return (0, m.sS)(g.Ay.getName(e.user).toLocaleLowerCase()).localeCompare((0, m.sS)(g.Ay.getName(t.user).toLocaleLowerCase()))
}

function U(e) {
    let {
        results: t
    } = e;
    if (!C || "" === S) return;
    let n = [];
    for (let {
            id: e,
            comparator: l
        }
        of(w.clear(), t)) {
        let t = v.default.getUser(e);
        null == t || t.isProvisional || (n.push({
            user: t,
            comparator: l
        }), w.set(e, {
            user: t,
            comparator: l
        }))
    }
    I = n, K.emitChange()
}

function G() {
    return null != l && (l.destroy(), l = null), u.A.getUserSearchContext(U, 1e3)
}

function F(e) {
    if (e.key !== E.TLS) return !1;
    C = !0, k(), l = G(), P = null, D("")
}

function H(e) {
    if (e.key !== E.TLS) return !1;
    B()
}

function B() {
    null != l && (l.destroy(), l = null), R()
}
class V extends(r = s.Ay.Store) {
    initialize() {
        this.waitFor(A.A, b.A, d.A, _.A, y.A, p.A, v.default), this.syncWith([v.default, A.A], M), this.syncWith([y.A], k)
    }
    getResults() {
        return I
    }
    hasFriends() {
        return T
    }
    getSelectedUsers() {
        return N
    }
    getQuery() {
        return S
    }
    getState() {
        return {
            query: S,
            selectedRow: j,
            selectedSection: x,
            selectedUsers: N,
            results: I,
            hasFriends: T
        }
    }
    getSections() {
        let e = w.indexes();
        return [e.FRIENDS, e.GUILD_MEMBERS]
    }
}(a = "displayName") in V ? Object.defineProperty(V, a, {
    value: "PrivateChannelRecipientsInviteStore",
    enumerable: !0,
    configurable: !0,
    writable: !0
}) : V[a] = "PrivateChannelRecipientsInviteStore";
let K = new V(c.h, {
        CONNECTION_OPEN: function() {
            R()
        },
        CHANNEL_SELECT: function(e) {
            let {
                guildId: t,
                channelId: n
            } = e;
            if (null != t) return !1;
            let l = C;
            return R(), C = l, P = n, M()
        },
        MODAL_PUSH: F,
        SHOW_ACTION_SHEET: F,
        PRIVATE_CHANNEL_RECIPIENTS_INVITE_OPEN: function(e) {
            C = !0, k(), l = G(), P = e.channelId, D("")
        },
        MODAL_POP: H,
        HIDE_ACTION_SHEET: H,
        PRIVATE_CHANNEL_RECIPIENTS_INVITE_CLOSE: B,
        PRIVATE_CHANNEL_RECIPIENTS_INVITE_QUERY: function(e) {
            P = e.channelId, D(e.query)
        },
        PRIVATE_CHANNEL_RECIPIENTS_INVITE_SELECT: function(e) {
            x = e.section, j = e.row
        },
        PRIVATE_CHANNEL_RECIPIENTS_ADD_USER: function(e) {
            let {
                userId: t
            } = e;
            N.add(t), N = new Set(N)
        },
        PRIVATE_CHANNEL_RECIPIENTS_REMOVE_USER: function(e) {
            let {
                userId: t
            } = e;
            N.delete(t), N = new Set(N)
        }
    }),
    W = K