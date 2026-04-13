/** chunk id: 650724 params = (module,exports,require) **/
n.d(t, {
    D: () => A
});
var i = n(64700),
    l = n(417597),
    s = n(717125),
    r = n(376943),
    a = n(961350),
    o = n(734057),
    d = n(696451),
    c = n(71393),
    u = n(967198),
    m = n(287809),
    _ = n(36491),
    h = n(752755),
    p = n(461715),
    g = n(652215);

function A(e, t) {
    let n = (0, p.CI)(e),
        A = (0, l.bG)([d.Ay, a.default], () => {
            let e = a.default.getId();
            return d.Ay.isMember(n?.guildId, e)
        }, [n]),
        x = (0, l.bG)([s.A], () => null != n && n?.channelId != null && s.A.isChannelGated(n.guildId, n.channelId), [n]),
        f = t.hasFlag(g.pr7.IS_CROSSPOST),
        {
            rawMediaPostEmbedData: C,
            guild: E,
            parentChannel: I,
            user: v,
            selectedGuildId: b,
            canAccess: T
        } = (0, l.cf)([h.A, c.A, o.A, m.default, u.A], () => {
            let e = h.A.getMediaPostEmbed(n?.threadId)?.media,
                t = c.A.getGuild(n?.guildId),
                i = o.A.getChannel(n?.channelId),
                l = m.default.getUser(e?.author_id),
                s = u.A.getGuildId(),
                a = null != i && (0, r.nc)(i);
            return {
                rawMediaPostEmbedData: e,
                guild: t,
                parentChannel: i,
                user: l,
                selectedGuildId: s,
                canAccess: a
            }
        }, [n]),
        y = i.useMemo(() => {
            let e = (0, p.tU)({
                mediaPostEmbedData: C,
                guild: E,
                parentChannel: I,
                user: v,
                selectedGuildId: b,
                canAccess: T
            });
            return null == e ? null : {
                ...e,
                user: v
            }
        }, [C, E, I, v, b, T]);
    return i.useEffect(() => {
        n?.threadId != null && (h.A.getEmbedFetchState(n.threadId) !== h.e.NOT_FETCHED || A && !1 === x || !A && f || (0, _.O0)(n?.threadId))
    }, [n, A, x, f]), y
}