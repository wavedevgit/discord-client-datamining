/** chunk id: 584777 params = (module,exports,require) **/
let i;
n.d(t, {
    A: () => U
}), n(321073);
var l = n(311907),
    a = n(73153),
    s = n(450827),
    r = n(49463),
    o = n(21119),
    c = n(95701),
    d = n(240248),
    u = n(427262),
    h = n(734057),
    m = n(153488),
    A = n(205761),
    g = n(994500),
    _ = n(287809),
    p = n(652215);
let f = !1,
    E = "",
    C = 0,
    x = [],
    S = !1,
    I = new Set,
    T = null;

function v() {
    E = "", C = 0, x = [], I = new Set, f = !1, T = null
}

function N(e) {
    E = e, C = 0, y()
}

function y() {
    if (!f) return !1;
    let e = h.A.getChannel(T);
    if (0 === E.trim().length) {
        var t;
        let n, l;
        return null != i && i.clearQuery(), t = e, n = g.A.getFriendIDs(), l = _.default.getCurrentUser(), l?.isStaff() && (n = Array.from(new Set([...n, ..._.default.filter(e => e.isStaff() && e.id !== l.id, !1).map(e => e.id)]))), t?.isPrivate() && (n = n.filter(e => !t.recipients.includes(e))), x = n.reduce((e, t) => {
            let n = _.default.getUser(t);
            return null == n || n.isProvisional || e.push({
                user: n,
                comparator: u.Ay.getName(n)
            }), e
        }, []).sort(j), !0
    }
    let n = null != e ? e.recipients : [];
    if (null != i) {
        let e, t, l, a = _.default.getCurrentUser(),
            s = a?.isStaff() ?? !1;
        i.setQuery({
            query: E,
            filters: {
                friends: !0,
                staff: s,
                provisional: !1
            },
            blacklist: n,
            boosters: (t = Math.max(...(e = A.A.getFrequentlyWithoutFetchingLatest().filter(e => e instanceof c.cq && e.isDM())).map(e => {
                let {
                    id: t
                } = e;
                return A.A.getScoreWithoutFetchingLatest(t)
            })), l = {}, e.forEach(e => {
                let n = A.A.getScoreWithoutFetchingLatest(e.id),
                    i = e.getRecipientId(),
                    a = .2 * !!g.A.isFriend(i),
                    s = .1 * (null != h.A.getDMFromUserId(i));
                l[i] = 1 + n / t + a + s
            }), l)
        })
    }
    return !1
}

function b() {
    if (!f) return !1;
    let e = S;
    return (S = g.A.getFriendCount() > 0) !== e
}

function j(e, t) {
    if (m.A.hasConsented(p.YAq.PERSONALIZATION)) {
        let n = o.A.getUserAffinity(e.user.id)?.communicationProbability ?? 0,
            i = o.A.getUserAffinity(t.user.id)?.communicationProbability ?? 0;
        if (n !== i) return i - n
    }
    return (0, d.sS)(u.Ay.getName(e.user).toLocaleLowerCase()).localeCompare((0, d.sS)(u.Ay.getName(t.user).toLocaleLowerCase()))
}

function R(e) {
    let {
        results: t
    } = e;
    if (!f || "" === E) return;
    let n = [];
    for (let {
            id: e,
            comparator: i
        }
        of t) {
        let t = _.default.getUser(e);
        null != t && n.push({
            user: t,
            comparator: i
        })
    }
    x = n, w.emitChange()
}

function M() {
    return null != i && (i.destroy(), i = null), s.A.getUserSearchContext(R, 1e3)
}

function L(e) {
    if (e.key !== p.TLS) return !1;
    f = !0, b(), i = M(), T = null, N("")
}

function O(e) {
    if (e.key !== p.TLS) return !1;
    D()
}

function D() {
    null != i && (i.destroy(), i = null), v()
}
class P extends l.Ay.Store {
    static displayName = "PrivateChannelRecipientsInviteStore";
    initialize() {
        this.waitFor(h.A, m.A, r.A, A.A, g.A, o.A, _.default), this.syncWith([_.default, h.A], y), this.syncWith([g.A], b)
    }
    getResults() {
        return x
    }
    hasFriends() {
        return S
    }
    getSelectedUsers() {
        return I
    }
    getQuery() {
        return E
    }
    getState() {
        return {
            query: E,
            selectedRow: C,
            selectedUsers: I,
            results: x,
            hasFriends: S
        }
    }
}
let w = new P(a.h, {
        CONNECTION_OPEN: function() {
            v()
        },
        CHANNEL_SELECT: function(e) {
            let {
                guildId: t,
                channelId: n
            } = e;
            if (null != t) return !1;
            let i = f;
            return v(), f = i, T = n, y()
        },
        MODAL_PUSH: L,
        SHOW_ACTION_SHEET: L,
        PRIVATE_CHANNEL_RECIPIENTS_INVITE_OPEN: function(e) {
            f = !0, b(), i = M(), T = e.channelId, N("")
        },
        MODAL_POP: O,
        HIDE_ACTION_SHEET: O,
        PRIVATE_CHANNEL_RECIPIENTS_INVITE_CLOSE: D,
        PRIVATE_CHANNEL_RECIPIENTS_INVITE_QUERY: function(e) {
            T = e.channelId, N(e.query)
        },
        PRIVATE_CHANNEL_RECIPIENTS_INVITE_SELECT: function(e) {
            C = e.row
        },
        PRIVATE_CHANNEL_RECIPIENTS_ADD_USER: function(e) {
            let {
                userId: t
            } = e;
            I.add(t), I = new Set(I)
        },
        PRIVATE_CHANNEL_RECIPIENTS_REMOVE_USER: function(e) {
            let {
                userId: t
            } = e;
            I.delete(t), I = new Set(I)
        }
    }),
    U = w