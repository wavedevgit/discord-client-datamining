/** chunk id: 96511, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => f
}), n(747238);
var r = n(284009),
    l = n.n(r),
    i = n(698441),
    s = n(71393),
    a = n(994500),
    o = n(287809),
    c = n(240248),
    u = n(427262),
    d = n(322387),
    p = n(652215),
    h = n(985018);

function g(e) {
    let {
        username: t,
        applicationId: n,
        renderApplication: r,
        withApplication: l,
        withDefault: i
    } = e;
    return null != n ? h.intl.format(l, {
        username: t,
        applicationName: () => r(n)
    }) : h.intl.format(i, {
        username: t
    })
}

function f(e) {
    var t, n, r, f, m, b, A, y, O, j, x, _, v, E, C;
    let {
        item: S,
        renderApplication: I
    } = e, N = null != (t = null == (r = S.other_user) ? void 0 : r.id) ? t : p.dJq, T = u.Ay.getName(o.default.getUser(null == (f = S.other_user) ? void 0 : f.id)), P = S.applicationId;
    switch (S.type) {
        case d.Uo.FRIEND_REQUESTS_GROUPED:
            let w = u.Ay.getName(o.default.getUser(null == (A = S.other_users) || null == (b = A[0]) ? void 0 : b.id)),
                R = u.Ay.getName(o.default.getUser(null == (O = S.other_users) || null == (y = O[1]) ? void 0 : y.id)),
                D = Math.max((null != (m = null == (j = S.other_users) ? void 0 : j.length) ? m : 0) - 2, 0);
            return h.intl.format(h.t.g5xyIC, {
                user: w,
                user2: R,
                count: D
            });
        case d.Uo.MOBILE_NATIVE_UPDATE_AVAILABLE:
            let L = null != (x = null == (_ = S.local_id) ? void 0 : _.split("_").pop()) ? x : "unknown";
            return "Update to build ".concat(L, " available!");
        case d.hW.FRIEND_SUGGESTION_CREATED:
            return a.A.getRelationshipType(N), p.eA$.PENDING_OUTGOING, null != (v = S.body) ? v : "";
        case d.hW.GUILD_SCHEDULED_EVENT_STARTED:
            let M = S.guild_scheduled_event_id,
                G = null != M ? i.Ay.getGuildScheduledEvent(M) : null,
                k = null == G ? void 0 : G.name,
                U = null == (C = s.A.getGuild(null == G ? void 0 : G.guild_id)) ? void 0 : C.name,
                V = (0, i.AZ)(null != G ? G : void 0);
            return (0, c.uJ)(U) || (0, c.uJ)(k) || !V ? null != (E = S.body) ? E : "" : h.intl.format(h.t.AyvfXR, {
                event_name: k,
                guild_name: U
            });
        case d.Uo.INCOMING_FRIEND_REQUESTS:
            return g({
                username: T,
                applicationId: P,
                renderApplication: I,
                withApplication: h.t["9Dgf1L"],
                withDefault: h.t.uIomXw
            });
        case d.Uo.INCOMING_FRIEND_REQUESTS_ACCEPTED:
            return g({
                username: T,
                applicationId: P,
                renderApplication: I,
                withApplication: h.t.nnC1q9,
                withDefault: h.t["5Uzkdp"]
            });
        case d.hW.FRIEND_REQUEST_ACCEPTED:
            return g({
                username: T,
                applicationId: P,
                renderApplication: I,
                withApplication: h.t.jXlYiF,
                withDefault: h.t.McYRBk
            });
        case d.Uo.INCOMING_GAME_FRIEND_REQUESTS_ACCEPTED:
            return l()(null != P, "Expected application id for ".concat(S.type)), h.intl.format(h.t["BB/0vn"], {
                username: T,
                applicationName: () => I(P)
            });
        case d.Uo.INCOMING_GAME_FRIEND_REQUESTS:
            return l()(null != P, "Expected application id for ".concat(S.type)), h.intl.format(h.t["7cqOLI"], {
                username: T,
                applicationName: () => I(P)
            });
        case d.hW.GAME_FRIEND_REQUEST_ACCEPTED:
            if (null == P) return S.body;
            return h.intl.format(h.t.Wi64vN, {
                username: T,
                applicationName: () => I(P)
            })
    }
    return null != (n = S.body) ? n : ""
}