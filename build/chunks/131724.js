/** chunk id: 131724 params = (module,exports,require) **/
n.d(t, {
    D: () => m,
    M: () => h
});
var i = n(723702),
    l = n(850670),
    s = n(206589),
    r = n(125017),
    a = n(625248),
    o = n(833349),
    d = n(287613),
    c = n(659051),
    u = n(702631),
    _ = n(652215);

function m(e) {
    let {
        presenceActivity: t,
        currentUserPresenceActivity: n,
        currentUserId: o,
        message: m,
        application: h,
        isEmbeddedApplication: p,
        isFrameApplication: g,
        isGameLaunchable: A
    } = e;
    if (m.author.id === o || !(0, c.A)(t, m, h.id)) return {
        canJoin: !1,
        remoteJoinPlatform: null
    };
    let x = (0, r._)(t);
    if (!(0, d.A)(x) || (0, u.U)(x) || (0, s.w)(n, t) || (0, l.v)(m)) return {
        canJoin: !1,
        remoteJoinPlatform: null
    };
    if (p && g) return {
        canJoin: !0,
        remoteJoinPlatform: null
    };
    if (m.activity?.type === _.xL.JOIN && null != t) {
        let e = (0, a.l)(t);
        if (null != e) return {
            canJoin: !0,
            remoteJoinPlatform: e
        }
    }
    return (0, i.platformSupportsActivityJoin)() && A ? {
        canJoin: !0,
        remoteJoinPlatform: null
    } : {
        canJoin: !1,
        remoteJoinPlatform: null
    }
}

function h(e, t, n, l) {
    return !(null == e || !(0, c.A)(e, n, l.id) || !(0, o.A)(e, _.jUm.SYNC) || !i.isPlatformEmbedded || (0, s.w)(t, e))
}