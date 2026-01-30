/** chunk id: 595849, original params: e,t,n (module,exports,require) **/
n.d(t, {
    RP: () => I,
    S2: () => T,
    _G: () => h,
    lp: () => g,
    yO: () => A
}), n(896048), n(65821), n(321073);
var l = n(136722),
    r = n(417597),
    a = n(260509),
    i = n(34457),
    s = n(696451),
    o = n(317525),
    u = n(71393),
    c = n(287809),
    E = n(488926),
    d = n(652215),
    _ = n(124759);
let g = Object.keys(d.xBc),
    A = Array.from(new Set([..._.dR, ...d.nfo, d.xBc.ADMINISTRATOR, d.xBc.KICK_MEMBERS, d.xBc.BAN_MEMBERS, d.xBc.MANAGE_GUILD, d.xBc.MANAGE_CHANNELS, d.xBc.MANAGE_ROLES, d.xBc.MANAGE_MESSAGES, d.xBc.MANAGE_THREADS, d.xBc.MANAGE_GUILD_EXPRESSIONS, d.xBc.CREATE_GUILD_EXPRESSIONS, d.xBc.MANAGE_EVENTS, d.xBc.CREATE_EVENTS, d.xBc.MODERATE_MEMBERS, d.xBc.MENTION_EVERYONE, d.xBc.MANAGE_WEBHOOKS])).map(e => {
        let t = g.find(t => d.xBc[t] === e);
        if (null == t) throw Error("Permission ".concat(e, " not found in Permissions"));
        return t
    }),
    T = new Set(d.nfo);

function h(e, t) {
    return e === t
}

function I(e, t, n) {
    let _ = (0, r.bG)([u.A], () => u.A.getGuild(t), [t]);
    return (0, r.bG)([s.Ay, c.default, o.A], () => {
        let r = {},
            u = s.Ay.getMember(t, e),
            g = c.default.getUser(e);
        if (null == _ || null == u || null == g) return r;
        let A = o.A.getEveryoneRole(_),
            T = E.cc({
                user: g,
                context: _
            });
        for (let e of n) {
            let t = d.xBc[e];
            if (l.zy(T, t)) {
                for (let n of (r[e] = [], u.roles)) {
                    let l = o.A.getRole(_.id, n);
                    null != l && ((0, i._m)(l, d.xBc.ADMINISTRATOR) || (0, i.sx)(l, t)) && r[e].push(l.id)
                }((0, i._m)(A, d.xBc.ADMINISTRATOR) || (0, i.sx)(A, t)) && r[e].push(A.id), (0, a.bM)(_, g) && r[e].push(g.id)
            }
        }
        return r
    }, [_, t, n, e])
}