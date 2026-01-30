/** chunk id: 310953, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => p,
    W: () => m
}), n(321073);
var r = n(64700),
    i = n(311907),
    l = n(960755),
    s = n(994020),
    a = n(95701),
    o = n(924985),
    c = n(458294),
    d = n(309010),
    u = n(652215),
    _ = n(349828);

function p(e) {
    let {
        withVoiceChannels: t = !1,
        withCurrentVoiceChannel: n = !1
    } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, r = arguments.length > 2 ? arguments[2] : void 0;
    return g(e === _.V || e === u.YYv ? (0, s.g)() : l.A.getGuildWithoutChangingGuildActionRows(e).guildChannels, {
        currentVoiceChannelId: d.A.getVoiceChannelId(),
        selectedChannelId: d.A.getChannelId()
    }, {
        withVoiceChannels: t,
        withCurrentVoiceChannel: n
    }, r)
}

function m(e, t, n) {
    let {
        withVoiceChannels: l = !1,
        withCurrentVoiceChannel: s = !1
    } = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {}, a = arguments.length > 4 ? arguments[4] : void 0, u = (0, i.bG)([c.default], () => c.default.getGuildChangeSentinel(e)), _ = (0, i.bG)([o.A], () => o.A.version), {
        currentVoiceChannelId: p,
        selectedChannelId: m
    } = (0, i.cf)([d.A], () => ({
        currentVoiceChannelId: d.A.getVoiceChannelId(),
        selectedChannelId: d.A.getChannelId()
    }));
    return (0, r.useMemo)(() => g(t, {
        currentVoiceChannelId: p,
        selectedChannelId: m
    }, {
        withVoiceChannels: l,
        withCurrentVoiceChannel: s
    }, a).map(e => e.id), [t, n, u, _])
}

function g(e, t) {
    let {
        currentVoiceChannelId: n,
        selectedChannelId: r
    } = t, {
        withVoiceChannels: i,
        withCurrentVoiceChannel: l
    } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}, s = arguments.length > 3 ? arguments[3] : void 0, o = [];
    return e.forEachShownChannel(e => {
        ((0, a.tr)(e.type) || i && (0, a.ay)(e.type) || l && (e.id === n || e.id === r)) && o.push(e)
    }, s), o
}