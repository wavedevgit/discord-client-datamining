/** chunk id: 668446 params = (module,exports,require) **/
n.d(t, {
    Sk: () => E,
    lF: () => x
});
var i = n(64700),
    l = n(735438),
    s = n.n(l),
    a = n(311907),
    r = n(855687),
    o = n(143413),
    c = n(961350),
    d = n(734057),
    u = n(808728),
    h = n(498642),
    m = n(71393),
    A = n(186111),
    p = n(320501),
    g = n(576705),
    f = n(661191),
    _ = n(652215);

function E(e, t) {
    return (0, a.cf)([g.A], () => ({
        canInvite: (0, r.K)(g.A, t, e),
        canManageGuild: null != t && g.A.can(_.xBc.MANAGE_GUILD, t),
        canMessage: null != e && g.A.can(_.xBc.SEND_MESSAGES, e),
        canCreateChannel: null != t && g.A.can(_.xBc.MANAGE_CHANNELS, t)
    }), [t, e])
}

function x(e) {
    var t;
    let n, l, r, g, E, x;
    return {
        guildPopulated: (n = (0, a.bG)([d.A], () => d.A.getChannel(e?.systemChannelId)), l = (0, a.yK)([p.A], () => null != n ? p.A.getMessages(n.id).toArray() : []), (0, a.bG)([h.A], () => {
            let t = h.A.getMemberCount(e?.id) ?? 0,
                n = l.some(e => e.type === _.lAJ.USER_JOIN);
            return t > 1 || n
        }, [e, l])),
        guildMessaged: (r = (0, a.bG)([d.A], () => null != e ? d.A.getMutableBasicGuildChannelsForGuild(e.id) : null), t = i.useMemo(() => null == r ? [] : s().values(r), [r]), g = (0, a.bG)([c.default], () => c.default.getId()), (0, a.bG)([p.A], () => s().some(t, e => {
            let t = p.A.getMessages(e.id).toArray();
            return s().some(t, e => e.author.id === g && !(0, o.A)(e))
        }))),
        guildPersonalized: (E = (0, a.bG)([A.A], () => A.A.hasLayers()), x = (0, a.bG)([m.A], () => m.A.getGuild(e?.id)), x?.icon != null && !E),
        guildChannelCreated: (0, a.bG)([u.Ay], () => {
            let t = u.Ay.getChannels(e?.id),
                n = t[u.vM];

            function i(t) {
                return null != e && f.default.extractTimestamp(t.channel.id) - f.default.extractTimestamp(e.id) > 500
            }
            return t[u.I6].some(i) || n.some(i)
        }, [e])
    }
}