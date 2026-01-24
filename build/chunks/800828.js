/** Chunk was on web.js **/
/** chunk id: 800828, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => N
}), n(321073), n(896048);
var r, i = n(311907),
    a = n(713402),
    s = n(73153),
    o = n(994500),
    l = n(652215);

function c(e, t, n) {
    return t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = n, e
}

function u(e) {
    return {
        id: e.id,
        applicationId: e.application_id,
        type: e.type,
        since: e.since,
        dmAccessType: e.dm_access_type
    }
}
let d = (e, t) => "".concat(t, "-").concat(e),
    f = e => "application-id-".concat(e),
    p = e => "user-id-".concat(e),
    _ = e => "relationship-type-".concat(e);

function h(e) {
    let t = [];
    return t.push(f(e.applicationId)), t.push(p(e.id)), t.push(_(e.type)), t
}
let m = new a.J(h, e => "".concat(e.since)),
    g = 0,
    E = 0,
    y = 0;

function b() {
    let e = 0,
        t = 0,
        n = 0;
    m.values().forEach(r => {
        let {
            type: i,
            id: a
        } = r;
        if (i === l.eA$.FRIEND) n += 1;
        else if (i === l.eA$.PENDING_OUTGOING) t += 1;
        else if (i === l.eA$.PENDING_INCOMING) {
            if (o.A.isSpam(a) || o.A.isIgnored(a)) return;
            e += 1
        }
    }), g = e, E = t, y = n
}

function O(e) {
    m.set(d(e.id, e.applicationId), e)
}

function v(e, t) {
    m.delete(d(e, t))
}

function A(e) {
    let {
        unknownApplicationIds: t
    } = e;
    if (null != t) {
        for (let e of t)
            for (let t of m.values(f(e)))(t.type === l.eA$.PENDING_INCOMING || t.type === l.eA$.PENDING_OUTGOING) && v(t.id, e);
        b()
    }
}

function I(e) {
    m.clear(), e.gameRelationships.forEach(e => {
        O(u(e))
    }), b()
}

function S(e) {
    O(e.gameRelationship), b()
}

function T(e) {
    v(e.userId, e.applicationId), b()
}
class C extends(r = i.Ay.Store) {
    initialize() {
        this.waitFor(o.A)
    }
    getPendingIncomingCount() {
        return g
    }
    getPendingOutgoingCount() {
        return E
    }
    getGameFriendCount() {
        return y
    }
    getGameFriendsForApplication(e) {
        return m.values(f(e), !0).filter(e => e.type === l.eA$.FRIEND)
    }
    getGameRelationshipsForUser(e) {
        return m.values(p(e), !0)
    }
    getGameRelationshipsForUserByType(e, t) {
        return this.getGameRelationshipsForUser(e).filter(e => e.type === t)
    }
    getGameFriendsForUser(e) {
        return this.getGameRelationshipsForUserByType(e, l.eA$.FRIEND)
    }
    getGameRelationshipCount() {
        return m.size()
    }
    getGameRelationships() {
        return m
    }
    getGameRelationshipsByType(e) {
        return m.values(_(e), !0)
    }
    getGameRelationshipsVersion() {
        return m.version
    }
}
c(C, "displayName", "GameRelationshipStore");
let N = new C(s.h, {
    CONNECTION_OPEN: I,
    GAME_RELATIONSHIP_ADD: S,
    GAME_RELATIONSHIP_REMOVE: T,
    APPLICATIONS_FETCH_SUCCESS: A
})