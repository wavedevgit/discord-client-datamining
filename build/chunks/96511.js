/** chunk id: 96511 params = (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => _
});
var i = n(284009),
    s = n.n(i),
    l = n(698441),
    a = n(71393),
    r = n(994500),
    o = n(287809),
    c = n(240248),
    d = n(427262),
    u = n(322387),
    h = n(652215),
    A = n(985018);

function m(e) {
    let {
        username: t,
        applicationId: n,
        renderApplication: i,
        withApplication: s,
        withDefault: l
    } = e;
    return null != n ? A.intl.format(s, {
        username: t,
        applicationName: () => i(n)
    }) : A.intl.format(l, {
        username: t
    })
}

function _(e) {
    let {
        item: t,
        renderApplication: n
    } = e, i = t.other_user?.id ?? h.dJq, _ = d.Ay.getName(o.default.getUser(t.other_user?.id)), g = t.applicationId;
    switch (t.type) {
        case u.Uo.FRIEND_REQUESTS_GROUPED:
            let p = d.Ay.getName(o.default.getUser(t.other_users?.[0]?.id)),
                f = d.Ay.getName(o.default.getUser(t.other_users?.[1]?.id)),
                x = Math.max((t.other_users?.length ?? 0) - 2, 0);
            return A.intl.format(A.t.g5xyIC, {
                user: p,
                user2: f,
                count: x
            });
        case u.Uo.MOBILE_NATIVE_UPDATE_AVAILABLE:
            let C = t.local_id?.split("_").pop() ?? "unknown";
            return `Update to build ${C} available!`;
        case u.hW.FRIEND_SUGGESTION_CREATED:
            r.A.getRelationshipType(i), h.eA$.PENDING_OUTGOING;
            break;
        case u.hW.GUILD_SCHEDULED_EVENT_STARTED:
            let E = t.guild_scheduled_event_id,
                I = null != E ? l.Ay.getGuildScheduledEvent(E) : null,
                N = I?.name,
                b = a.A.getGuild(I?.guild_id)?.name,
                S = (0, l.AZ)(I ?? void 0);
            return (0, c.uJ)(b) || (0, c.uJ)(N) || !S ? t.body ?? "" : A.intl.format(A.t.AyvfXR, {
                event_name: N,
                guild_name: b
            });
        case u.Uo.INCOMING_FRIEND_REQUESTS:
            return m({
                username: _,
                applicationId: g,
                renderApplication: n,
                withApplication: A.t["9Dgf1L"],
                withDefault: A.t.uIomXw
            });
        case u.Uo.INCOMING_FRIEND_REQUESTS_ACCEPTED:
            return m({
                username: _,
                applicationId: g,
                renderApplication: n,
                withApplication: A.t.nnC1q9,
                withDefault: A.t["5Uzkdp"]
            });
        case u.hW.FRIEND_REQUEST_ACCEPTED:
            return m({
                username: _,
                applicationId: g,
                renderApplication: n,
                withApplication: A.t.jXlYiF,
                withDefault: A.t.McYRBk
            });
        case u.Uo.INCOMING_GAME_FRIEND_REQUESTS_ACCEPTED:
            return s()(null != g, `Expected application id for ${t.type}`), A.intl.format(A.t["BB/0vn"], {
                username: _,
                applicationName: () => n(g)
            });
        case u.Uo.INCOMING_GAME_FRIEND_REQUESTS:
            return s()(null != g, `Expected application id for ${t.type}`), A.intl.format(A.t["7cqOLI"], {
                username: _,
                applicationName: () => n(g)
            });
        case u.hW.GAME_FRIEND_REQUEST_ACCEPTED:
            if (null == g) return t.body;
            return A.intl.format(A.t.Wi64vN, {
                username: _,
                applicationName: () => n(g)
            })
    }
    return t.body ?? ""
}