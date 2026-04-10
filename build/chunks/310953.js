/** chunk id: 310953 params = (module,exports,require) **/
n.d(t, {
    A: () => _,
    W: () => A
}), n(321073);
var i = n(64700),
    r = n(311907),
    l = n(5180),
    o = n(960755),
    s = n(866842),
    a = n(95701),
    d = n(924985),
    c = n(458294),
    u = n(309010);

function _(e) {
    let {
        withVoiceChannels: t = !1,
        withCurrentVoiceChannel: n = !1
    } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, i = arguments.length > 2 ? arguments[2] : void 0;
    return E((0, l.ai)(e) ? (0, s.g)() : o.A.getGuildWithoutChangingGuildActionRows(e).guildChannels, {
        currentVoiceChannelId: u.A.getVoiceChannelId(),
        selectedChannelId: u.A.getChannelId()
    }, {
        withVoiceChannels: t,
        withCurrentVoiceChannel: n
    }, i)
}

function A(e, t, n) {
    let {
        withVoiceChannels: l = !1,
        withCurrentVoiceChannel: o = !1
    } = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {}, s = arguments.length > 4 ? arguments[4] : void 0, a = (0, r.bG)([c.default], () => c.default.getGuildChangeSentinel(e)), _ = (0, r.bG)([d.A], () => d.A.version), {
        currentVoiceChannelId: A,
        selectedChannelId: I
    } = (0, r.cf)([u.A], () => ({
        currentVoiceChannelId: u.A.getVoiceChannelId(),
        selectedChannelId: u.A.getChannelId()
    }));
    return (0, i.useMemo)(() => E(t, {
        currentVoiceChannelId: A,
        selectedChannelId: I
    }, {
        withVoiceChannels: l,
        withCurrentVoiceChannel: o
    }, s).map(e => e.id), [t, n, a, _])
}

function E(e, t) {
    let {
        currentVoiceChannelId: n,
        selectedChannelId: i
    } = t, {
        withVoiceChannels: r,
        withCurrentVoiceChannel: l
    } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}, o = arguments.length > 3 ? arguments[3] : void 0, s = [];
    return e.forEachShownChannel(e => {
        ((0, a.tr)(e.type) || r && (0, a.ay)(e.type) || l && (e.id === n || e.id === i)) && s.push(e)
    }, o), s
}