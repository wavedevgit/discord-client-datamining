/** Chunk was on 78528 **/
/** chunk id: 584777, original params: e,t,n (module,exports,require) **/
let r;
n.d(t, {
    A: () => U
}), n(896048), n(733351), n(321073), n(638769);
var l, i, s = n(311907),
    a = n(73153),
    o = n(450827),
    c = n(49463),
    u = n(21119),
    d = n(95701),
    p = n(240248),
    h = n(427262),
    f = n(734057),
    g = n(153488),
    m = n(205761),
    b = n(994500),
    A = n(287809),
    y = n(652215);
let _ = !1,
    O = "",
    j = 0,
    v = [],
    x = !1,
    E = new Set,
    C = null;

function S() {
    O = "", j = 0, v = [], E = new Set, _ = !1, C = null
}

function I(e) {
    O = e, j = 0, N()
}

function N() {
    var e, t;
    if (!_) return !1;
    let n = f.A.getChannel(C);
    if (0 === O.trim().length) {
        let t, l;
        return null != r && r.clearQuery(), e = n, t = b.A.getFriendIDs(), (null == (l = A.default.getCurrentUser()) ? void 0 : l.isStaff()) && (t = Array.from(new Set([...t, ...A.default.filter(e => e.isStaff() && e.id !== l.id, !1).map(e => e.id)]))), (null == e ? void 0 : e.isPrivate()) && (t = t.filter(t => !e.recipients.includes(t))), v = t.reduce((e, t) => {
            let n = A.default.getUser(t);
            return null == n || n.isProvisional || e.push({
                user: n,
                comparator: h.Ay.getName(n)
            }), e
        }, []).sort(P), !0
    }
    let l = null != n ? n.recipients : [];
    if (null != r) {
        let e, n, i, s = A.default.getCurrentUser(),
            a = null != (t = null == s ? void 0 : s.isStaff()) && t;
        r.setQuery({
            query: O,
            filters: {
                friends: !0,
                staff: a,
                provisional: !1
            },
            blacklist: l,
            boosters: (n = Math.max(...(e = m.A.getFrequentlyWithoutFetchingLatest().filter(e => e instanceof d.cq && e.isDM())).map(e => {
                let {
                    id: t
                } = e;
                return m.A.getScoreWithoutFetchingLatest(t)
            })), i = {}, e.forEach(e => {
                let t = m.A.getScoreWithoutFetchingLatest(e.id),
                    r = e.getRecipientId(),
                    l = .2 * !!b.A.isFriend(r),
                    s = .1 * (null != f.A.getDMFromUserId(r));
                i[r] = 1 + t / n + l + s
            }), i)
        })
    }
    return !1
}

function T() {
    if (!_) return !1;
    let e = x;
    return (x = b.A.getFriendCount() > 0) !== e
}

function P(e, t) {
    if (g.A.hasConsented(y.YAq.PERSONALIZATION)) {
        var n, r, l, i;
        let s = null != (n = null == (l = u.A.getUserAffinity(e.user.id)) ? void 0 : l.communicationProbability) ? n : 0,
            a = null != (r = null == (i = u.A.getUserAffinity(t.user.id)) ? void 0 : i.communicationProbability) ? r : 0;
        if (s !== a) return a - s
    }
    return (0, p.sS)(h.Ay.getName(e.user).toLocaleLowerCase()).localeCompare((0, p.sS)(h.Ay.getName(t.user).toLocaleLowerCase()))
}

function w(e) {
    let {
        results: t
    } = e;
    if (!_ || "" === O) return;
    let n = [];
    for (let {
            id: e,
            comparator: r
        }
        of t) {
        let t = A.default.getUser(e);
        null != t && n.push({
            user: t,
            comparator: r
        })
    }
    v = n, G.emitChange()
}

function R() {
    return null != r && (r.destroy(), r = null), o.A.getUserSearchContext(w, 1e3)
}

function D(e) {
    if (e.key !== y.TLS) return !1;
    _ = !0, T(), r = R(), C = null, I("")
}

function M(e) {
    if (e.key !== y.TLS) return !1;
    L()
}

function L() {
    null != r && (r.destroy(), r = null), S()
}
class k extends(l = s.Ay.Store) {
    initialize() {
        this.waitFor(f.A, g.A, c.A, m.A, b.A, u.A, A.default), this.syncWith([A.default, f.A], N), this.syncWith([b.A], T)
    }
    getResults() {
        return v
    }
    hasFriends() {
        return x
    }
    getSelectedUsers() {
        return E
    }
    getQuery() {
        return O
    }
    getState() {
        return {
            query: O,
            selectedRow: j,
            selectedUsers: E,
            results: v,
            hasFriends: x
        }
    }
}(i = "displayName") in k ? Object.defineProperty(k, i, {
    value: "PrivateChannelRecipientsInviteStore",
    enumerable: !0,
    configurable: !0,
    writable: !0
}) : k[i] = "PrivateChannelRecipientsInviteStore";
let G = new k(a.h, {
        CONNECTION_OPEN: function() {
            S()
        },
        CHANNEL_SELECT: function(e) {
            let {
                guildId: t,
                channelId: n
            } = e;
            if (null != t) return !1;
            let r = _;
            return S(), _ = r, C = n, N()
        },
        MODAL_PUSH: D,
        SHOW_ACTION_SHEET: D,
        PRIVATE_CHANNEL_RECIPIENTS_INVITE_OPEN: function(e) {
            _ = !0, T(), r = R(), C = e.channelId, I("")
        },
        MODAL_POP: M,
        HIDE_ACTION_SHEET: M,
        PRIVATE_CHANNEL_RECIPIENTS_INVITE_CLOSE: L,
        PRIVATE_CHANNEL_RECIPIENTS_INVITE_QUERY: function(e) {
            C = e.channelId, I(e.query)
        },
        PRIVATE_CHANNEL_RECIPIENTS_INVITE_SELECT: function(e) {
            j = e.row
        },
        PRIVATE_CHANNEL_RECIPIENTS_ADD_USER: function(e) {
            let {
                userId: t
            } = e;
            E.add(t), E = new Set(E)
        },
        PRIVATE_CHANNEL_RECIPIENTS_REMOVE_USER: function(e) {
            let {
                userId: t
            } = e;
            E.delete(t), E = new Set(E)
        }
    }),
    U = G