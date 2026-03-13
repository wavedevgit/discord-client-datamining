/** chunk id: 310953 params = (module,exports,require) **/
n.d(t, {
    A: () => A,
    W: () => E
}), n(321073);
var i = n(64700),
    r = n(311907),
    a = n(960755),
    s = n(866842),
    l = n(95701),
    o = n(924985),
    d = n(458294),
    c = n(309010),
    _ = n(652215),
    u = n(349828);

function A(e) {
    let {
        withVoiceChannels: t = !1,
        withCurrentVoiceChannel: n = !1
    } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, i = arguments.length > 2 ? arguments[2] : void 0;
    return g(e === u.Vc || e === _.YYv ? (0, s.g3)() : a.A.getGuildWithoutChangingGuildActionRows(e).guildChannels, {
        currentVoiceChannelId: c.A.getVoiceChannelId(),
        selectedChannelId: c.A.getChannelId()
    }, {
        withVoiceChannels: t,
        withCurrentVoiceChannel: n
    }, i)
}

function E(e, t, n) {
    let {
        withVoiceChannels: a = !1,
        withCurrentVoiceChannel: s = !1
    } = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {}, l = arguments.length > 4 ? arguments[4] : void 0, _ = (0, r.bG)([d.default], () => d.default.getGuildChangeSentinel(e)), u = (0, r.bG)([o.A], () => o.A.version), {
        currentVoiceChannelId: A,
        selectedChannelId: E
    } = (0, r.cf)([c.A], () => ({
        currentVoiceChannelId: c.A.getVoiceChannelId(),
        selectedChannelId: c.A.getChannelId()
    }));
    return (0, i.useMemo)(() => g(t, {
        currentVoiceChannelId: A,
        selectedChannelId: E
    }, {
        withVoiceChannels: a,
        withCurrentVoiceChannel: s
    }, l).map(e => e.id), [t, n, _, u])
}

function g(e, t) {
    let {
        currentVoiceChannelId: n,
        selectedChannelId: i
    } = t, {
        withVoiceChannels: r,
        withCurrentVoiceChannel: a
    } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}, s = arguments.length > 3 ? arguments[3] : void 0, o = [];
    return e.forEachShownChannel(e => {
        ((0, l.tr)(e.type) || r && (0, l.ay)(e.type) || a && (e.id === n || e.id === i)) && o.push(e)
    }, s), o
}