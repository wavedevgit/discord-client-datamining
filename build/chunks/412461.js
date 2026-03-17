/** chunk id: 412461 params = (module,exports,require) **/
a.d(t, {
    DB: () => m,
    TR: () => u,
    dG: () => p,
    jL: () => h
}), a(323874), a(14289), a(35956);
var n = a(323125),
    i = a(311907),
    l = a(976860),
    s = a(961350),
    r = a(287809),
    o = a(954571),
    c = a(310419),
    d = a(652215);

function u(e, t) {
    let a = c.h.getField("sessionId"),
        n = c.h.getField("guildId"),
        i = c.h.getField("entrypoint")?.name,
        l = r.default.getCurrentUser(),
        s = {
            ...t,
            guild_id: n,
            directory_session_id: a,
            source: i,
            user_id: l?.id
        };
    return o.default.track(e, s)
}

function m() {
    return (0, i.bG)([s.default], () => s.default.isAuthenticated())
}

function h() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
        t = new URL(location.href);
    for (let a in e) {
        let n = e[a];
        t.searchParams.set(a, n)
    }
    let a = t.pathname + t.search,
        i = (0, n.T2)(a, !1);
    (0, l.pX)(i)
}

function p() {
    let e = new URL(location.href),
        t = `?redirect_to=${encodeURIComponent(e.pathname+e.search)}`;
    (0, l.pX)(d.BVt.REGISTER + t)
}