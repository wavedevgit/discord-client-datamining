/** Chunk was on web.js **/
/** chunk id: 381222, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    x: () => O
});
var r = n(835245),
    i = n(192308),
    a = n(73153),
    s = n(890615),
    o = n(51758),
    l = n(776781),
    c = n(96566),
    u = n(413339),
    d = n(513752),
    f = n(734057),
    p = n(71393),
    _ = n(834942),
    h = n(576705),
    m = n(309010),
    g = n(977997),
    E = n(147036);

function y(e, t, n) {
    return t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = n, e
}

function b(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
            return Object.getOwnPropertyDescriptor(n, e).enumerable
        }))), r.forEach(function(t) {
            y(e, t, n[t])
        })
    }
    return e
}
let O = function(e, t) {
    let y = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        O = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
        {
            lockVoiceStateForResume: v = !1
        } = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {},
        A = f.A.getChannel(e),
        I = g.A.getCurrentClientVoiceChannelId(null != t ? t : null) === e,
        S = null != A ? _.A.getCheck(A.guild_id) : null;
    if (!(null != t && (0, o.V)(t)) && (null == S || S.canChat || (0, l.pC)(A))) {
        if (null != A && !I) {
            let e = (0, E.Pd)(A, g.A, p.A);
            if (e && A.isGuildStageVoice() && (0, c.xn)(A.id)) return void(0, i.openModalLazy)(async () => {
                let {
                    default: e
                } = await n.e("21900").then(n.bind(n, 172231));
                return t => e(b({
                    channel: A
                }, t))
            });
            if (e) return void(0, i.openModalLazy)(async () => {
                let {
                    default: e
                } = await n.e("54207").then(n.bind(n, 361698));
                return t => e(t)
            });
            if (!(0, s.A)(A, h.A)) return
        }
        y && (0, u.PX)(), (0, d.A)(T, e, O, y)
    }

    function T() {
        let n = (0, r.A)();
        a.h.dispatch({
            type: "VOICE_CHANNEL_SELECT",
            guildId: t,
            channelId: e,
            currentVoiceChannelId: m.A.getVoiceChannelId(),
            video: y,
            stream: O,
            lockVoiceStateForResume: v,
            joinVoiceId: n
        })
    }
}