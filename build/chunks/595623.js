/** chunk id: 595623 params = (module,exports,require) **/
s.d(t, {
    Ay: () => U
}), s(321073);
var i = s(735438),
    n = s.n(i),
    a = s(311907),
    r = s(73153),
    l = s(49229),
    u = s(315069),
    o = s(49463),
    c = s(217222),
    h = s(346084),
    d = s(800828),
    A = s(275759),
    I = s(616356),
    N = s(696451),
    m = s(71393),
    p = s(290863),
    E = s(994500),
    _ = s(287809),
    g = s(652215),
    y = s(788868);

function C(e) {
    let t = _.default.getUser(e);
    return {
        user: t,
        usernameLower: null != t ? t.username.toLowerCase() : null
    }
}

function f(e) {
    return {
        status: p.A.getStatus(e),
        isMobile: p.A.isMobileOnline(e),
        isVR: p.A.isVROnline(e),
        activities: p.A.getActivities(e),
        applicationStream: I.A.getAnyStreamForUser(e)
    }
}

function D(e) {
    let t = [];
    return n()(N.Ay.memberOf(e)).map(m.A.getGuild).sortBy(e => null != e ? e.name.toLowerCase() : null).forEach(e => {
        null != e && t.push(e)
    }), {
        mutualGuildsLength: t.length,
        mutualGuilds: t.slice(0, 5)
    }
}
class L extends u.A {
    key;
    userId;
    type;
    status;
    isMobile;
    isVR;
    activities;
    applicationStream;
    user;
    usernameLower;
    mutualGuildsLength;
    mutualGuilds;
    nickname;
    spam;
    giftIntentType;
    ignoredUser;
    applicationId;
    isGameRelationship;
    constructor(e) {
        super(), this.key = e.key, this.userId = e.userId, this.type = e.type, this.status = e.status, this.activities = e.activities, this.applicationStream = e.applicationStream, this.user = e.user, this.isMobile = e.isMobile, this.isVR = e.isVR, this.usernameLower = e.usernameLower, this.mutualGuildsLength = e.mutualGuildsLength, this.mutualGuilds = e.mutualGuilds, this.nickname = e.nickname, this.spam = e.spam, this.giftIntentType = e.giftIntentType, this.ignoredUser = e.ignoredUser, this.applicationId = e.applicationId, this.isGameRelationship = e.isGameRelationship ?? !1
    }
    get comparator() {
        return [this.type, this.nickname?.toLowerCase() ?? this.user?.globalName?.toLowerCase() ?? this.usernameLower]
    }
}
class S {
    _rows;
    constructor(e = []) {
        this._rows = e
    }
    reset() {
        let e = new Set,
            t = Array.from(E.A.getMutableRelationships().entries()).map(t => {
                let [s, i] = t;
                return i === g.eA$.FRIEND && e.add(s), new L({
                    key: s,
                    type: i,
                    userId: s,
                    nickname: E.A.getNickname(s),
                    ...C(s),
                    ...f(s),
                    ...D(s),
                    spam: E.A.isSpam(s),
                    ignoredUser: E.A.isIgnored(s),
                    giftIntentType: i === g.eA$.FRIEND && A.Ay.getFriendAnniversaries().includes(s) ? y.np.FRIEND_ANNIVERSARY : void 0,
                    applicationId: E.A.getOriginApplicationId(s)
                })
            }),
            s = [],
            i = d.A.getGameRelationships().values(),
            a = new Set;
        i.forEach(t => {
            let {
                id: i,
                applicationId: n,
                type: r
            } = t;
            r === g.eA$.FRIEND && e.has(i) || r === g.eA$.FRIEND && a.has(i) || (r === g.eA$.FRIEND && a.add(i), s.push(new L({
                key: `${i}-${n}`,
                type: r,
                userId: i,
                applicationId: n,
                nickname: E.A.getNickname(i),
                ...C(i),
                ...f(i),
                ...D(i),
                spam: E.A.isSpam(i),
                ignoredUser: E.A.isIgnored(i),
                isGameRelationship: !0
            })))
        });
        let r = n().map(h.A.getSuggestions(), e => new L({
            key: e.key,
            userId: e.key,
            type: 99,
            nickname: e.name,
            ...C(e.key),
            ...f(e.key),
            ...D(e.key)
        }));
        return new S(n().concat(t, s, r))
    }
    clone() {
        return new S(this._rows)
    }
    update(e) {
        let t = !1;
        for (let s = 0; s < this._rows.length; s++) {
            let i = this._rows[s],
                n = i.merge(e(i.userId));
            t = t || n !== i, this._rows[s] = n
        }
        return t
    }
    filter(e, t) {
        return n()(this._rows).filter(e => {
            if (null == e.user) return !1;
            if (null != t && "" !== t) {
                let s = t.toLowerCase();
                return [e.usernameLower, e.nickname, e.user.globalName].map(e => e?.toLowerCase()).some(e => e?.includes(s))
            }
            return !0
        }).filter(t => {
            switch (e) {
                case g.m3P.ONLINE:
                    return t.type === g.eA$.FRIEND && t.status !== g.clD.OFFLINE;
                case g.m3P.PENDING:
                    return t.type === g.eA$.PENDING_INCOMING && !t.spam && !t.ignoredUser || t.type === g.eA$.PENDING_OUTGOING;
                case g.m3P.SPAM:
                    return t.type === g.eA$.PENDING_INCOMING && t.spam;
                case g.m3P.PENDING_IGNORED:
                    return t.type === g.eA$.PENDING_INCOMING && t.ignoredUser;
                case g.m3P.SUGGESTIONS:
                    return 99 === t.type;
                case g.m3P.ALL:
                default:
                    return t.type === g.eA$.FRIEND
            }
        }).sortBy(e => e.comparator).value()
    }
    getRelationshipCounts() {
        let e = {
            [g.eA$.FRIEND]: 0,
            [g.eA$.PENDING_INCOMING]: 0,
            [g.eA$.PENDING_OUTGOING]: 0,
            99: 0,
            [g.eA$.BLOCKED]: 0
        };
        return this._rows.forEach(t => {
            null != t.user && null != e[t.type] && e[t.type]++
        }), e
    }
}
let w = !0,
    R = !1,
    v = g.m3P.ONLINE,
    G = new S,
    T = !0,
    k = !1;

function O() {
    let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
    w && (e || v !== g.m3P.ONLINE && v !== g.m3P.ADD_FRIEND) && !R && (w = !1, R = !0, l.A.fetchRelationships())
}

function F() {
    if (w = !0, T ? R = !1 : O(), G = G.reset(), k) return;
    let e = G.getRelationshipCounts();
    v = 0 === e[g.eA$.FRIEND] ? 0 !== e[g.eA$.PENDING_INCOMING] ? g.m3P.PENDING : g.m3P.ADD_FRIEND : g.m3P.ONLINE
}

function M() {
    G = T ? new S : G.reset()
}

function P(e) {
    return function() {
        return !T && !!G.update(e) && (G = G.clone(), !0)
    }
}
class x extends a.Ay.Store {
    static displayName = "FriendsStore";
    initialize() {
        this.waitFor(c.A, I.A, o.A, h.A, d.A, N.Ay, m.A, A.Ay, p.A, E.A, _.default), this.syncWith([E.A], M), this.syncWith([d.A], M), this.syncWith([h.A], M), this.syncWith([A.Ay], M), this.syncWith([_.default], P(C)), this.syncWith([p.A, I.A], P(f)), F()
    }
    getState() {
        return {
            fetching: R,
            section: v,
            rows: G
        }
    }
}
let U = new x(r.h, {
    CONNECTION_OPEN: function() {
        F()
    },
    FRIENDS_SET_SECTION: function(e) {
        v = e.section, O()
    },
    CHANNEL_SELECT: function(e) {
        let {
            channelId: t
        } = e;
        return T = null != t, M(), !T
    },
    LOAD_RELATIONSHIPS_SUCCESS: function() {
        R = !1
    },
    LOAD_RELATIONSHIPS_FAILURE: function() {
        w = !0, R = !0
    },
    FRIENDS_SET_INITIAL_SECTION: function(e) {
        v = e.section, k = !0
    }
})