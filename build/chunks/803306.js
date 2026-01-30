/** chunk id: 803306, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    Q9: () => m,
    eO: () => b,
    lA: () => g,
    nj: () => y,
    q0: () => O,
    rQ: () => h,
    wz: () => E
}), n(938796);
var r = n(284009),
    i = n.n(r),
    a = n(239947),
    o = n(562465),
    s = n(73153),
    l = n(198982),
    c = n(626584),
    u = n(427157),
    d = n(287809),
    f = n(499785),
    p = n(652215);
let _ = new c.A("UserProfileModalActionCreators");

function h() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
        {
            withAnalyticsToken: t = !1
        } = e;
    return o.Bo.get({
        url: p.Rsh.ME,
        query: {
            with_analytics_token: t
        },
        oldFormErrors: !0,
        rejectWithError: !1
    }).then(e => (s.h.dispatch({
        type: "CURRENT_USER_UPDATE",
        user: e.body,
        analyticsToken: t ? e.body.analytics_token : void 0
    }), new u.A(e.body)))
}

function m() {
    let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0],
        t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
    return f.A.patch({
        url: p.Rsh.USER_AGREEMENTS,
        trackedActionData: {
            event: a.D.USER_ACCEPT_AGREEMENTS
        },
        body: {
            terms: e,
            privacy: t
        },
        oldFormErrors: !0,
        rejectWithError: !1
    }).then(() => !0, () => !1)
}

function g(e, t) {
    let n = d.default.getCurrentUser();
    i()(null != n, "setFlag: user cannot be undefined");
    let r = t ? n.flags | e : n.flags & ~e;
    return o.Bo.patch({
        url: p.Rsh.ME,
        oldFormErrors: !0,
        body: {
            flags: r
        },
        rejectWithError: !1
    })
}

function E(e) {
    let t = d.default.getUser(e);
    return null != t ? Promise.resolve(t) : o.Bo.get({
        url: p.Rsh.USER(e),
        oldFormErrors: !0,
        rejectWithError: !1
    }).then(t => (s.h.dispatch({
        type: "USER_UPDATE",
        user: t.body
    }), d.default.getUser(e)))
}

function y(e) {
    return s.h.dispatch({
        type: "USER_UPDATE",
        user: e
    }), d.default.getUser(e.id)
}
async function b(e) {
    let {
        type: t,
        withMutualGuilds: n,
        withMutualFriendsCount: r,
        withMutualFriends: i,
        guildId: a,
        connectionsRoleId: c,
        joinRequestId: u,
        abortSignal: d
    } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, f = arguments.length > 2 ? arguments[2] : void 0, h = Date.now();
    s.h.dispatch({
        type: "USER_PROFILE_FETCH_START",
        userId: e,
        guildId: a,
        withMutualFriends: i
    });
    try {
        let l = await o.Bo.get({
            url: p.Rsh.USER_PROFILE(e),
            query: {
                type: t,
                with_mutual_guilds: n,
                with_mutual_friends: i,
                with_mutual_friends_count: r && (null == i || !i),
                guild_id: a,
                connections_role_id: c,
                join_request_id: u
            },
            signal: d,
            rejectWithError: !0
        });
        null == f || f(l.body, a), s.h.dispatch({
            type: "USER_UPDATE",
            user: l.body.user
        }), s.h.dispatch({
            type: "USER_PROFILE_FETCH_SUCCESS",
            userProfile: l.body,
            fetchStartedAt: h
        }), null != a && null != l.body.guild_member && s.h.dispatch({
            type: "GUILD_MEMBER_PROFILE_UPDATE",
            guildId: a,
            guildMember: l.body.guild_member
        })
    } catch (t) {
        throw null != t && (null == t ? void 0 : t.body) != null && _.warn("fetchProfile error: ".concat(t.body.code, " - ").concat(t.body.message)), s.h.dispatch({
            type: "USER_PROFILE_FETCH_FAILURE",
            apiError: new l.LG(t),
            fetchStartedAt: h,
            userId: e,
            guildId: a
        }), t
    }
}
async function O(e, t) {
    s.h.dispatch({
        type: "MUTUAL_FRIENDS_FETCH_START",
        userId: e
    });
    try {
        let n = await o.Bo.get({
            url: p.Rsh.USER_RELATIONSHIPS(e),
            oldFormErrors: !0,
            signal: t,
            rejectWithError: !1
        });
        s.h.dispatch({
            type: "MUTUAL_FRIENDS_FETCH_SUCCESS",
            userId: e,
            mutualFriends: n.body
        })
    } catch (t) {
        throw (null == t ? void 0 : t.body) != null && _.warn("fetchMutualFriends error: ".concat(t.body.code, " - ").concat(t.body.message)), s.h.dispatch({
            type: "MUTUAL_FRIENDS_FETCH_FAILURE",
            userId: e
        }), t
    }
}