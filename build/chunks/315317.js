/** Chunk was on 77223 **/
/** chunk id: 315317, original params: e,n,l (module,exports,require) **/
l.d(n, {
    XG: () => x,
    XV: () => v
}), l(321073), l(896048), l(65821);
var t = l(284009),
    i = l.n(t),
    s = l(755584),
    a = l(602146),
    r = l(95701),
    c = l(734057),
    o = l(71393),
    u = l(496092),
    d = l(988794),
    h = l(652215);
async function m(e, n) {
    let l = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [],
        t = [];
    t.push(...l);
    let i = await s.A.createChannel({
        guildId: e.id,
        type: h.rbe.GUILD_STAGE_VOICE,
        name: n.substring(0, 100),
        permissionOverwrites: t
    });
    if (null == i || 201 !== i.status) throw Error("Can't create channel for event");
    return (0, r.UE)(i.body)
}
async function v(e, n) {
    let {
        entity_type: l
    } = e;
    if (l === d.Ps.STAGE_INSTANCE) {
        let l = await
        function(e, n) {
            let {
                guild_id: l,
                channel_id: t
            } = e, i = o.A.getGuild(l);
            if (null == i) return Promise.resolve(null);
            let s = c.A.getChannel(t);
            return null == s ? m(i, e.name, n) : Promise.resolve(s)
        }(e, n);
        i()(null != l, "could not find or create channel")
    }
}
async function x(e) {
    let n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        {
            channel_id: l,
            entity_type: t,
            name: s,
            id: r,
            guild_id: c
        } = e;
    switch (t) {
        case d.Ps.STAGE_INSTANCE:
            i()(null != l, "channel_id is required"), await (0, a.yG)(l, s, d.dD.GUILD_ONLY, n, r);
            break;
        case d.Ps.VOICE:
            i()(null != l, "channel_id is required"), await u.A.startEvent(r, c);
            break;
        case d.Ps.EXTERNAL:
            await u.A.startEvent(r, c)
    }
}