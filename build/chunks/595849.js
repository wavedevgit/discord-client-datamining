/** chunk id: 595849, original params: e,t,n (module,exports,require) **/
n.d(t, {
    RP: () => O,
    S2: () => T,
    _G: () => I,
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
    _ = n(652215),
    d = n(124759);
let g = Object.keys(_.xBc),
    A = Array.from(new Set([...d.dR, ..._.nfo, _.xBc.ADMINISTRATOR, _.xBc.KICK_MEMBERS, _.xBc.BAN_MEMBERS, _.xBc.MANAGE_GUILD, _.xBc.MANAGE_CHANNELS, _.xBc.MANAGE_ROLES, _.xBc.MANAGE_MESSAGES, _.xBc.MANAGE_THREADS, _.xBc.MANAGE_GUILD_EXPRESSIONS, _.xBc.CREATE_GUILD_EXPRESSIONS, _.xBc.MANAGE_EVENTS, _.xBc.CREATE_EVENTS, _.xBc.MODERATE_MEMBERS, _.xBc.MENTION_EVERYONE, _.xBc.MANAGE_WEBHOOKS])).map(e => {
        let t = g.find(t => _.xBc[t] === e);
        if (null == t) throw Error("Permission ".concat(e, " not found in Permissions"));
        return t
    }),
    T = new Set(_.nfo);

function I(e, t) {
    return e === t
}

function O(e, t, n) {
    let d = (0, r.bG)([u.A], () => u.A.getGuild(t), [t]);
    return (0, r.bG)([s.Ay, c.default, o.A], () => {
        let r = {},
            u = s.Ay.getMember(t, e),
            g = c.default.getUser(e);
        if (null == d || null == u || null == g) return r;
        let A = o.A.getEveryoneRole(d),
            T = E.cc({
                user: g,
                context: d
            });
        for (let e of n) {
            let t = _.xBc[e];
            if (l.zy(T, t)) {
                for (let n of (r[e] = [], u.roles)) {
                    let l = o.A.getRole(d.id, n);
                    null != l && ((0, i._m)(l, _.xBc.ADMINISTRATOR) || (0, i.sx)(l, t)) && r[e].push(l.id)
                }((0, i._m)(A, _.xBc.ADMINISTRATOR) || (0, i.sx)(A, t)) && r[e].push(A.id), (0, a.bM)(d, g) && r[e].push(g.id)
            }
        }
        return r
    }, [d, t, n, e])
}