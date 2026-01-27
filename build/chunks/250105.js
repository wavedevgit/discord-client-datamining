/** Chunk was on web.js **/
/** chunk id: 250105, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    Ay: () => l,
    cT: () => c
}), n(896048);
var r = n(720757),
    i = n(311907),
    a = n(961350),
    o = n(403362),
    s = n(217222);

function l(e) {
    return (0, r.A)(e, s.A, c, u)
}

function c(e, t) {
    switch (e) {
        case "guild":
            return t.guildId;
        case "user":
            return a.default.getId();
        case "installation":
            var n;
            return null != (n = a.default.getInstallationForTracking()) ? n : "";
        default:
            (0, o.xb)(e)
    }
}

function u(e, t) {
    let [n, r] = (0, i.yK)([a.default], () => [a.default.getId(), a.default.getInstallationForTracking()]);
    switch (e) {
        case "guild":
            return t.guildId;
        case "user":
            return n;
        case "installation":
            return null != r ? r : "";
        default:
            (0, o.xb)(e)
    }
}