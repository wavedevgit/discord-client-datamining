/** chunk id: 971203, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => _
});
var r = n(627968),
    i = n(64700),
    l = n(311907),
    a = n(397927),
    s = n(956793),
    o = n(58149),
    c = n(378570),
    u = n(345942),
    d = n(576705),
    p = n(231608),
    h = n(954571),
    f = n(652215),
    g = n(985018);

function m(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
            return Object.getOwnPropertyDescriptor(n, e).enumerable
        }))), r.forEach(function(t) {
            var r;
            r = n[t], t in e ? Object.defineProperty(e, t, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = r
        })
    }
    return e
}

function A(e, t) {
    return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            n.push.apply(n, r)
        }
        return n
    })(Object(t)).forEach(function(n) {
        Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
    }), e
}

function _(e) {
    let t = i.useContext(h.AnalyticsContext),
        n = e.voiceChannels[0],
        _ = (0, l.bG)([d.A], () => null != n && d.A.can(f.xBc.CONNECT, n.channel));
    return null == n ? null : [(0, r.jsx)(a.Drp, {
        id: "join-voice",
        action: function() {
            (0, c.iN)(n.channel.id), s.default.selectVoiceChannel(n.channel.id), o.Ay.trackWithMetadata(f.HAw.ACTIVITY_FEED_VOICE_CHANNEL_VISITED, m({
                source: A(m({}, t.location), {
                    object: f.ZSU.LIST_ITEM
                }),
                guild_id: n.guild.id,
                channel_id: n.channel.id
            }, (0, p.o)(e)))
        },
        label: g.intl.string(g.t["8yOlh9"]),
        disabled: !_
    }, "join-voice"), (0, r.jsx)(a.Drp, {
        id: "goto-server",
        action: function() {
            (0, u.u)(n.guild.id), o.Ay.trackWithMetadata(f.HAw.ACTIVITY_FEED_GUILD_VISITED, m({
                source: A(m({}, t.location), {
                    object: f.ZSU.LIST_ITEM
                }),
                guild_id: n.guild.id,
                af_recently_played: !1
            }, (0, p.o)(e)))
        },
        label: g.intl.string(g.t.RGgqm1)
    }, "goto-server")]
}