/** chunk id: 668446, original params: e,t,n (module,exports,require) **/
n.d(t, {
    Sk: () => y,
    lF: () => O
}), n(896048);
var r = n(64700),
    l = n(735438),
    i = n.n(l),
    s = n(311907),
    a = n(855687),
    o = n(143413),
    c = n(961350),
    u = n(734057),
    d = n(808728),
    h = n(498642),
    p = n(71393),
    g = n(186111),
    f = n(320501),
    m = n(576705),
    b = n(661191),
    A = n(652215);

function y(e, t) {
    return (0, s.cf)([m.A], () => ({
        canInvite: (0, a.K)(m.A, t, e),
        canManageGuild: null != t && m.A.can(A.xBc.MANAGE_GUILD, t),
        canMessage: null != e && m.A.can(A.xBc.SEND_MESSAGES, e),
        canCreateChannel: null != t && m.A.can(A.xBc.MANAGE_CHANNELS, t)
    }), [t, e])
}

function O(e) {
    var t;
    let n, l, a, m, y, O;
    return {
        guildPopulated: (n = (0, s.bG)([u.A], () => u.A.getChannel(null == e ? void 0 : e.systemChannelId)), l = (0, s.yK)([f.A], () => null != n ? f.A.getMessages(n.id).toArray() : []), (0, s.bG)([h.A], () => {
            var t;
            let n = null != (t = h.A.getMemberCount(null == e ? void 0 : e.id)) ? t : 0,
                r = l.some(e => e.type === A.lAJ.USER_JOIN);
            return n > 1 || r
        }, [e, l])),
        guildMessaged: (a = (0, s.bG)([u.A], () => null != e ? u.A.getMutableBasicGuildChannelsForGuild(e.id) : null), t = r.useMemo(() => null == a ? [] : i().values(a), [a]), m = (0, s.bG)([c.default], () => c.default.getId()), (0, s.bG)([f.A], () => i().some(t, e => {
            let t = f.A.getMessages(e.id).toArray();
            return i().some(t, e => e.author.id === m && !(0, o.A)(e))
        }))),
        guildPersonalized: (y = (0, s.bG)([g.A], () => g.A.hasLayers()), (null == (O = (0, s.bG)([p.A], () => p.A.getGuild(null == e ? void 0 : e.id))) ? void 0 : O.icon) != null && !y),
        guildChannelCreated: (0, s.bG)([d.Ay], () => {
            let t = d.Ay.getChannels(null == e ? void 0 : e.id),
                n = t[d.vM];

            function r(t) {
                return null != e && b.default.extractTimestamp(t.channel.id) - b.default.extractTimestamp(e.id) > 500
            }
            return t[d.I6].some(r) || n.some(r)
        }, [e])
    }
}