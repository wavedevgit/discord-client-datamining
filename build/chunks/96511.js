/** Chunk was on 97492 **/
/** chunk id: 96511, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => g
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

function f(e) {
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

function g(e) {
    var t, n, r, g, m, b, A, y, _, O, j, v, x, E, C;
    let {
        item: S,
        renderApplication: I
    } = e, N = null != (t = null == (r = S.other_user) ? void 0 : r.id) ? t : p.dJq, T = u.Ay.getName(o.default.getUser(null == (g = S.other_user) ? void 0 : g.id)), P = S.applicationId;
    switch (S.type) {
        case d.Uo.FRIEND_REQUESTS_GROUPED:
            let w = u.Ay.getName(o.default.getUser(null == (A = S.other_users) || null == (b = A[0]) ? void 0 : b.id)),
                R = u.Ay.getName(o.default.getUser(null == (_ = S.other_users) || null == (y = _[1]) ? void 0 : y.id)),
                D = Math.max((null != (m = null == (O = S.other_users) ? void 0 : O.length) ? m : 0) - 2, 0);
            return h.intl.format(h.t.g5xyIC, {
                user: w,
                user2: R,
                count: D
            });
        case d.Uo.MOBILE_NATIVE_UPDATE_AVAILABLE:
            let M = null != (j = null == (v = S.local_id) ? void 0 : v.split("_").pop()) ? j : "unknown";
            return "Update to build ".concat(M, " available!");
        case d.hW.FRIEND_SUGGESTION_CREATED:
            return a.A.getRelationshipType(N), p.eA$.PENDING_OUTGOING, null != (x = S.body) ? x : "";
        case d.hW.GUILD_SCHEDULED_EVENT_STARTED:
            let L = S.guild_scheduled_event_id,
                k = null != L ? i.Ay.getGuildScheduledEvent(L) : null,
                G = null == k ? void 0 : k.name,
                U = null == (C = s.A.getGuild(null == k ? void 0 : k.guild_id)) ? void 0 : C.name,
                B = (0, i.AZ)(null != k ? k : void 0);
            return (0, c.uJ)(U) || (0, c.uJ)(G) || !B ? null != (E = S.body) ? E : "" : h.intl.format(h.t.AyvfXR, {
                event_name: G,
                guild_name: U
            });
        case d.Uo.INCOMING_FRIEND_REQUESTS:
            return f({
                username: T,
                applicationId: P,
                renderApplication: I,
                withApplication: h.t["9Dgf1L"],
                withDefault: h.t.uIomXw
            });
        case d.Uo.INCOMING_FRIEND_REQUESTS_ACCEPTED:
            return f({
                username: T,
                applicationId: P,
                renderApplication: I,
                withApplication: h.t.nnC1q9,
                withDefault: h.t["5Uzkdp"]
            });
        case d.hW.FRIEND_REQUEST_ACCEPTED:
            return f({
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