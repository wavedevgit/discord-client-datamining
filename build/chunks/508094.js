/** Chunk was on 21738 **/
/** chunk id: 508094, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => m
}), n(321073), n(896048);
var r = n(179771),
    i = n(793574),
    l = n(796774),
    a = n(209932),
    s = n(807348),
    o = n(536432),
    c = n(123973),
    u = n(287809),
    d = n(636401),
    p = n(629471),
    h = n(693806),
    g = n(613057),
    f = n(818348);
let m = {
    [f.e$.GET_SOUNDBOARD_SOUNDS]: {
        scope: {
            [g.sm.ANY]: [r.F.RPC, g.hj]
        },
        async handler() {
            await (0, l.E7)();
            let e = a.A.getSounds(),
                t = [];
            return e.forEach(e => e.forEach(e => t.push((0, s.A2)(e)))), t
        }
    },
    [f.e$.PLAY_SOUNDBOARD_SOUND]: {
        scope: {
            [g.sm.ALL]: [r.F.RPC, r.F.RPC_VOICE_WRITE]
        },
        validation: e => (0, p.A)(e).required().keys({
            guild_id: e.string(),
            sound_id: e.string()
        }),
        async handler(e) {
            let {
                args: {
                    guild_id: t,
                    sound_id: n
                }
            } = e;
            await (0, l.E7)();
            let r = u.default.getCurrentUser(),
                s = a.A.getSound(t, n),
                p = (0, h.A)(),
                g = null != s && null != r && (0, o.Ir)(r, s, p);
            if (null == p) throw new d.A({
                errorCode: f.Lw.INVALID_CHANNEL
            }, "Invalid Channel.");
            if (g)
                if ((0, c.A)(p)) null != s && (0, o.Ak)(s, p.id, [i.A.RPC]);
                else throw new d.A({
                    errorCode: f.Lw.INVALID_PERMISSIONS
                }, "Invalid Permissions.");
            else throw new d.A({
                errorCode: f.Lw.INVALID_SOUND
            }, "Invalid Sound.")
        }
    }
}