/** chunk id: 668446, original params: e,t,n (module,exports,require) **/
n.d(t, {
    Sk: () => _,
    lF: () => y
}), n(896048);
var l = n(64700),
    r = n(735438),
    i = n.n(r),
    a = n(311907),
    s = n(855687),
    o = n(143413),
    c = n(961350),
    u = n(734057),
    d = n(808728),
    h = n(498642),
    p = n(71393),
    f = n(186111),
    m = n(320501),
    g = n(576705),
    A = n(661191),
    b = n(652215);

function _(e, t) {
    return (0, a.cf)([g.A], () => ({
        canInvite: (0, s.K)(g.A, t, e),
        canManageGuild: null != t && g.A.can(b.xBc.MANAGE_GUILD, t),
        canMessage: null != e && g.A.can(b.xBc.SEND_MESSAGES, e),
        canCreateChannel: null != t && g.A.can(b.xBc.MANAGE_CHANNELS, t)
    }), [t, e])
}

function y(e) {
    var t;
    let n, r, s, g, _, y;
    return {
        guildPopulated: (n = (0, a.bG)([u.A], () => u.A.getChannel(null == e ? void 0 : e.systemChannelId)), r = (0, a.yK)([m.A], () => null != n ? m.A.getMessages(n.id).toArray() : []), (0, a.bG)([h.A], () => {
            var t;
            let n = null != (t = h.A.getMemberCount(null == e ? void 0 : e.id)) ? t : 0,
                l = r.some(e => e.type === b.lAJ.USER_JOIN);
            return n > 1 || l
        }, [e, r])),
        guildMessaged: (s = (0, a.bG)([u.A], () => null != e ? u.A.getMutableBasicGuildChannelsForGuild(e.id) : null), t = l.useMemo(() => null == s ? [] : i().values(s), [s]), g = (0, a.bG)([c.default], () => c.default.getId()), (0, a.bG)([m.A], () => i().some(t, e => {
            let t = m.A.getMessages(e.id).toArray();
            return i().some(t, e => e.author.id === g && !(0, o.A)(e))
        }))),
        guildPersonalized: (_ = (0, a.bG)([f.A], () => f.A.hasLayers()), (null == (y = (0, a.bG)([p.A], () => p.A.getGuild(null == e ? void 0 : e.id))) ? void 0 : y.icon) != null && !_),
        guildChannelCreated: (0, a.bG)([d.Ay], () => {
            let t = d.Ay.getChannels(null == e ? void 0 : e.id),
                n = t[d.vM];

            function l(t) {
                return null != e && A.default.extractTimestamp(t.channel.id) - A.default.extractTimestamp(e.id) > 500
            }
            return t[d.I6].some(l) || n.some(l)
        }, [e])
    }
}