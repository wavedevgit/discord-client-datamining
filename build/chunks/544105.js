/** Chunk was on web.js **/
/** chunk id: 544105, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    EY: () => o,
    Gp: () => a,
    K8: () => f,
    NL: () => l,
    f$: () => u,
    hv: () => d,
    hw: () => c,
    sS: () => s,
    v_: () => p,
    yM: () => _
}), n(896048), n(680155), n(323874), n(14289), n(35956);
var r = n(179771),
    i = n(652215);
let a = "xbox://communitylinking/donut/audio",
    o = "https://www.xbox.com/en-US/apps/xbox-app-for-mobile",
    s = [r.F.VOICE, r.F.DM_CHANNELS_READ, r.F.GUILDS, r.F.GUILDS_MEMBERS_READ, r.F.IDENTIFY, r.F.CONNECTIONS, r.F.ACTIVITIES_READ],
    l = [r.F.VOICE, r.F.DM_CHANNELS_READ, r.F.GUILDS, r.F.GUILDS_MEMBERS_READ, r.F.IDENTIFY, r.F.CONNECTIONS],
    c = e => {
        let {
            guildId: t,
            channelName: n,
            guildName: r,
            channelId: i,
            muted: a,
            deafened: o,
            nonce: s
        } = e, l = {
            channelid: i,
            guildid: t,
            channelname: n,
            guildname: r,
            muted: String(a),
            deafened: String(o)
        };
        return null != s && (l.nonce = s), new URLSearchParams(l)
    };
var u = function(e) {
    return e.PLAYSTATION = "playstation", e.XBOX = "xbox", e
}({});
let d = new Set(["xbox", "playstation"]);
i.yTV.XBOX, i.yTV.PS5;
var f = function(e) {
    return e[e.CONSOLE_DEVICE_PASSCODE_UNLOCK_REQUIRED = 27e4] = "CONSOLE_DEVICE_PASSCODE_UNLOCK_REQUIRED", e[e.CONSOLE_DEVICE_UNAVAILABLE = 270001] = "CONSOLE_DEVICE_UNAVAILABLE", e[e.CONSOLE_DEVICE_UNVAILABLE_FROM_OTHER_USERS = 270002] = "CONSOLE_DEVICE_UNVAILABLE_FROM_OTHER_USERS", e[e.CONSOLE_DEVICE_COMMUNICATION_RESTRICTED = 270003] = "CONSOLE_DEVICE_COMMUNICATION_RESTRICTED", e[e.CONSOLE_DEVICE_INVALID_POWER_MODE = 270004] = "CONSOLE_DEVICE_INVALID_POWER_MODE", e[e.CONSOLE_DEVICE_ACCOUNT_LINK_ERROR = 270005] = "CONSOLE_DEVICE_ACCOUNT_LINK_ERROR", e[e.CONSOLE_DEVICE_MAX_MEMBERS_REACHED = 270006] = "CONSOLE_DEVICE_MAX_MEMBERS_REACHED", e[e.CONSOLE_DEVICE_BAD_COMMAND = 270007] = "CONSOLE_DEVICE_BAD_COMMAND", e
}({});
let p = new Set([27e4]),
    _ = "console error alert"