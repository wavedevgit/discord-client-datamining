/** chunk id: 650724 params = (module,exports,require) **/
n.d(t, {
    D: () => x
});
var i = n(64700),
    r = n(417597),
    l = n(717125),
    a = n(376943),
    s = n(961350),
    o = n(734057),
    d = n(696451),
    c = n(71393),
    u = n(967198),
    _ = n(287809),
    m = n(36491),
    h = n(219444),
    p = n(752755),
    g = n(461715),
    A = n(652215);

function x(e, t) {
    let n = (0, h.$k)(),
        x = (0, g.CI)(e),
        f = (0, r.bG)([d.Ay, s.default], () => {
            let e = s.default.getId();
            return d.Ay.isMember(x?.guildId, e)
        }, [x]),
        C = (0, r.bG)([l.A], () => null != x && x?.channelId != null && l.A.isChannelGated(x.guildId, x.channelId), [x]),
        I = t.hasFlag(A.pr7.IS_CROSSPOST),
        {
            rawMediaPostEmbedData: E,
            guild: v,
            parentChannel: b,
            user: T,
            selectedGuildId: S,
            canAccess: y
        } = (0, r.cf)([p.A, c.A, o.A, _.default, u.A], () => {
            let e = p.A.getMediaPostEmbed(x?.threadId)?.media,
                t = c.A.getGuild(x?.guildId),
                n = o.A.getChannel(x?.channelId),
                i = _.default.getUser(e?.author_id),
                r = u.A.getGuildId(),
                l = null != n && (0, a.nc)(n);
            return {
                rawMediaPostEmbedData: e,
                guild: t,
                parentChannel: n,
                user: i,
                selectedGuildId: r,
                canAccess: l
            }
        }, [x]),
        N = i.useMemo(() => {
            let e = (0, g.tU)({
                mediaPostEmbedData: E,
                guild: v,
                parentChannel: b,
                user: T,
                selectedGuildId: S,
                canAccess: y
            });
            return null == e ? null : {
                ...e,
                user: T
            }
        }, [E, v, b, T, S, y]);
    return i.useEffect(() => {
        if (x?.threadId != null) {
            let e = p.A.getEmbedFetchState(x.threadId);
            !0 !== n || e !== p.e.NOT_FETCHED || f && !1 === C || !f && I || (0, m.O0)(x?.threadId)
        }
    }, [x, n, f, C, I]), N
}