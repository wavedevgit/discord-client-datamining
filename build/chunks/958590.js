/** chunk id: 958590, original params: e,t,n (module,exports,require) **/
"use strict";
let r;
n.d(t, {
    A: () => k
});
var i, a = n(177029),
    o = n.n(a),
    s = n(818125),
    l = n.n(s),
    c = n(725918),
    u = n.n(c),
    d = n(311907),
    f = n(73153),
    p = n(671759),
    _ = n(172799);

function h(e, t, n) {
    return t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = n, e
}
let m = {},
    g = {},
    E = {},
    y = {},
    b = !1,
    O = !1,
    v = !1;

function A() {
    m = {}, g = {}, E = {}, y = {}, r = null, O = !1, v = !1, b = !1
}

function I(e) {
    let {
        channel: t
    } = e;
    delete m[t.id], delete g[t.id], delete E[t.id]
}

function S(e) {
    let {
        channelId: t,
        invite: n
    } = e, r = p.A.createFromServer(n);
    r.targetType === _.yV.STREAM && null != r.targetUser ? (null == g[t] && (g[t] = {}), g[t][String(r.targetUser.id)] = r) : r.targetType === _.yV.EMBEDDED_APPLICATION && null != r.targetApplication ? (null == E[t] && (E[t] = {}), E[t][r.targetApplication.id] = r) : m[t] = r
}

function T(e) {
    let {
        channelId: t
    } = e;
    m[t] = null
}

function C(e) {
    let {
        channelId: t
    } = e;
    m[t] = null
}

function N(e) {
    var t;
    y[e.invite.code] = p.A.createFromServer(e.invite), r = null != (t = o()(l()(u()(Object.values(y), "createdAt")))) ? t : null, v = !1
}

function w() {
    v = !1
}

function R(e) {
    var t;
    null != e.invites && e.invites.forEach(e => {
        null != y[e.code] && delete y[e.code]
    }), r = null != (t = o()(l()(u()(Object.values(y), "createdAt")))) ? t : null, O = !1
}

function P() {
    O = !0
}

function D() {
    v = !0
}

function L() {
    b = !0
}

function x(e) {
    var t;
    y = {}, e.invites.forEach(e => {
        y[e.code] = p.A.createFromServer(e)
    }), r = null != (t = o()(l()(u()(Object.values(y), "createdAt")))) ? t : null, b = !1
}

function M(e) {
    delete m[e.channelId]
}
class j extends(i = d.Ay.Store) {
    getInvite(e) {
        var t, n;
        let {
            targetType: r,
            targetUserId: i,
            targetApplicationId: a
        } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        return r === _.yV.STREAM && null != i ? null == (t = g[e]) ? void 0 : t[i] : r === _.yV.EMBEDDED_APPLICATION && null != a ? null == (n = E[e]) ? void 0 : n[a] : m[e]
    }
    getFriendInvite() {
        return r
    }
    getFriendInvitesFetching() {
        return b
    }
    canRevokeFriendInvite() {
        return null != r && !O && !v
    }
}
h(j, "displayName", "InstantInviteStore");
let k = new j(f.h, {
    CONNECTION_OPEN: A,
    CHANNEL_DELETE: I,
    FRIEND_INVITE_CREATE_SUCCESS: N,
    FRIEND_INVITE_CREATE_FAILURE: w,
    FRIEND_INVITE_REVOKE_SUCCESS: R,
    INSTANT_INVITE_CREATE_SUCCESS: S,
    INSTANT_INVITE_CREATE_FAILURE: T,
    INSTANT_INVITE_REVOKE_SUCCESS: C,
    FRIEND_INVITE_REVOKE_REQUEST: P,
    FRIEND_INVITE_CREATE_REQUEST: D,
    FRIEND_INVITES_FETCH_REQUEST: L,
    FRIEND_INVITES_FETCH_RESPONSE: x,
    INSTANT_INVITE_CLEAR: M
})