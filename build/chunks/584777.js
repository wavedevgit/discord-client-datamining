/** Chunk was on 1113 **/
/** chunk id: 584777, original params: e,t,n (module,exports,require) **/
let r;
n.d(t, {
    A: () => j,
    h: () => Y
}), n(896048), n(733351), n(321073), n(638769);
var l, i, s, a = n(311907),
    o = n(713402),
    c = n(73153),
    u = n(450827),
    d = n(49463),
    h = n(625788),
    p = n(21119),
    g = n(95701),
    f = n(240248),
    m = n(427262),
    b = n(734057),
    A = n(153488),
    y = n(205761),
    O = n(994500),
    _ = n(287809),
    x = n(652215),
    j = ((i = {})[i.FRIENDS = 0] = "FRIENDS", i[i.GUILD_MEMBERS = 1] = "GUILD_MEMBERS", i);
let v = !1,
    E = "",
    C = 0,
    S = 0,
    I = [],
    N = !1,
    T = new Set,
    P = null,
    w = new o.J(function(e) {
        let t = [],
            n = _.default.getCurrentUser();
        return O.A.isFriend(e.user.id) ? t.push("FRIENDS") : e.user.id !== (null == n ? void 0 : n.id) && t.push("GUILD_MEMBERS"), t
    }, function(e) {
        if (A.A.hasConsented(x.YAq.PERSONALIZATION)) {
            var t, n;
            return -(null != (t = null == (n = p.A.getUserAffinity(e.user.id)) ? void 0 : n.communicationProbability) ? t : 0)
        }
        return (0, f.sS)(m.Ay.getName(e.user).toLocaleLowerCase())
    });

function R() {
    E = "", C = 0, S = 0, I = [], T = new Set, v = !1, P = null, w.clear()
}

function D(e) {
    E = e, S = 0, L()
}

function L() {
    if (!v) return !1;
    let e = b.A.getChannel(P);
    if (0 === E.trim().length) return null != r && r.clearQuery(), I = function(e) {
        let t = O.A.getFriendIDs(),
            n = h.A.getConfig({
                location: "PrivateChannelRecipientsInviteStore"
            }).enabled,
            r = _.default.getCurrentUser();
        if ((null == r ? void 0 : r.isStaff()) && (t = Array.from(new Set([...t, ..._.default.filter(e => e.isStaff() && e.id !== r.id, !1).map(e => e.id)]))), (null == e ? void 0 : e.isPrivate()) && (t = t.filter(t => !e.recipients.includes(t))), n)
            for (let n of ((null == e ? void 0 : e.isPrivate()) && e.recipients.forEach(e => {
                    w.delete(e)
                }), t)) ! function(e) {
                if (O.A.getRelationshipType(e) === x.eA$.BLOCKED) return w.delete(e);
                let t = _.default.getUser(e);
                if (null == t) return w.delete(e);
                w.set(e, {
                    user: t,
                    comparator: m.Ay.getName(t)
                })
            }(n);
        return t.reduce((e, t) => {
            let n = _.default.getUser(t);
            return null == n || n.isProvisional || e.push({
                user: n,
                comparator: m.Ay.getName(n)
            }), e
        }, []).sort(k)
    }(e), !0;
    let t = null != e ? e.recipients : [];
    if (null != r) {
        var n;
        let e, l, i, s = _.default.getCurrentUser(),
            a = null != (n = null == s ? void 0 : s.isStaff()) && n,
            o = h.A.getConfig({
                location: "PrivateChannelRecipientsInviteStore"
            }).enabled;
        r.setQuery({
            query: E,
            filters: o ? void 0 : {
                friends: !0,
                staff: a,
                provisional: !1
            },
            blacklist: t,
            boosters: (l = Math.max(...(e = y.A.getFrequentlyWithoutFetchingLatest().filter(e => e instanceof g.cq && e.isDM())).map(e => {
                let {
                    id: t
                } = e;
                return y.A.getScoreWithoutFetchingLatest(t)
            })), i = {}, e.forEach(e => {
                let t = y.A.getScoreWithoutFetchingLatest(e.id),
                    n = e.getRecipientId(),
                    r = .2 * !!O.A.isFriend(n),
                    s = .1 * (null != b.A.getDMFromUserId(n));
                i[n] = 1 + t / l + r + s
            }), i)
        })
    }
    return !1
}

function M() {
    if (!v) return !1;
    let e = N;
    return (N = O.A.getFriendCount() > 0) !== e
}

function k(e, t) {
    if (A.A.hasConsented(x.YAq.PERSONALIZATION)) {
        var n, r, l, i;
        let s = null != (n = null == (l = p.A.getUserAffinity(e.user.id)) ? void 0 : l.communicationProbability) ? n : 0,
            a = null != (r = null == (i = p.A.getUserAffinity(t.user.id)) ? void 0 : i.communicationProbability) ? r : 0;
        if (s !== a) return a - s
    }
    return (0, f.sS)(m.Ay.getName(e.user).toLocaleLowerCase()).localeCompare((0, f.sS)(m.Ay.getName(t.user).toLocaleLowerCase()))
}

function G(e) {
    let {
        results: t
    } = e;
    if (!v || "" === E) return;
    let n = [];
    for (let {
            id: e,
            comparator: r
        }
        of(w.clear(), t)) {
        let t = _.default.getUser(e);
        null == t || t.isProvisional || (n.push({
            user: t,
            comparator: r
        }), w.set(e, {
            user: t,
            comparator: r
        }))
    }
    I = n, K.emitChange()
}

function U() {
    return null != r && (r.destroy(), r = null), u.A.getUserSearchContext(G, 1e3)
}

function V(e) {
    if (e.key !== x.TLS) return !1;
    v = !0, M(), r = U(), P = null, D("")
}

function B(e) {
    if (e.key !== x.TLS) return !1;
    H()
}

function H() {
    null != r && (r.destroy(), r = null), R()
}
class F extends(l = a.Ay.Store) {
    initialize() {
        this.waitFor(b.A, A.A, d.A, y.A, O.A, p.A, _.default), this.syncWith([_.default, b.A], L), this.syncWith([O.A], M)
    }
    getResults() {
        return I
    }
    hasFriends() {
        return N
    }
    getSelectedUsers() {
        return T
    }
    getQuery() {
        return E
    }
    getState() {
        return {
            query: E,
            selectedRow: S,
            selectedSection: C,
            selectedUsers: T,
            results: I,
            hasFriends: N
        }
    }
    getSections() {
        let e = w.indexes();
        return [e.FRIENDS, e.GUILD_MEMBERS]
    }
}(s = "displayName") in F ? Object.defineProperty(F, s, {
    value: "PrivateChannelRecipientsInviteStore",
    enumerable: !0,
    configurable: !0,
    writable: !0
}) : F[s] = "PrivateChannelRecipientsInviteStore";
let K = new F(c.h, {
        CONNECTION_OPEN: function() {
            R()
        },
        CHANNEL_SELECT: function(e) {
            let {
                guildId: t,
                channelId: n
            } = e;
            if (null != t) return !1;
            let r = v;
            return R(), v = r, P = n, L()
        },
        MODAL_PUSH: V,
        SHOW_ACTION_SHEET: V,
        PRIVATE_CHANNEL_RECIPIENTS_INVITE_OPEN: function(e) {
            v = !0, M(), r = U(), P = e.channelId, D("")
        },
        MODAL_POP: B,
        HIDE_ACTION_SHEET: B,
        PRIVATE_CHANNEL_RECIPIENTS_INVITE_CLOSE: H,
        PRIVATE_CHANNEL_RECIPIENTS_INVITE_QUERY: function(e) {
            P = e.channelId, D(e.query)
        },
        PRIVATE_CHANNEL_RECIPIENTS_INVITE_SELECT: function(e) {
            C = e.section, S = e.row
        },
        PRIVATE_CHANNEL_RECIPIENTS_ADD_USER: function(e) {
            let {
                userId: t
            } = e;
            T.add(t), T = new Set(T)
        },
        PRIVATE_CHANNEL_RECIPIENTS_REMOVE_USER: function(e) {
            let {
                userId: t
            } = e;
            T.delete(t), T = new Set(T)
        }
    }),
    Y = K