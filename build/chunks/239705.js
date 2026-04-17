/** chunk id: 239705 params = (module,exports,require) **/
"use strict";
n.d(t, {
    x: () => _
});
var i = n(397927),
    r = n(47167),
    l = n(734057),
    s = n(994500),
    a = n(287809),
    o = n(411335),
    c = n(200700),
    u = n(985018);
let d = function(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : o.uh.KEYWORD;
    switch (e) {
        case o.AH.BLOCK_MESSAGE:
            switch (t) {
                case o.uh.MENTION_SPAM:
                    return u.intl.string(u.t["8hdId3"]);
                case o.uh.ML_SPAM:
                    return u.intl.string(u.t.tLQYs5);
                default:
                    return u.intl.string(u.t.xAAoci)
            }
        case o.AH.FLAG_TO_CHANNEL:
            return u.intl.string(u.t.BHAXfa);
        case o.AH.USER_COMMUNICATION_DISABLED:
            return u.intl.string(u.t["bNK+gI"]);
        case o.AH.QUARANTINE_USER:
            return u.intl.string(u.t["/7nL5R"])
    }
};

function _(e, t, n) {
    return (e => {
        switch (e) {
            case o.AH.BLOCK_MESSAGE:
            case o.AH.FLAG_TO_CHANNEL:
            case o.AH.USER_COMMUNICATION_DISABLED:
            case o.AH.QUARANTINE_USER:
                return !0;
            default:
                return !1
        }
    })(e) ? {
        headerText: (e => {
            switch (e) {
                case o.AH.BLOCK_MESSAGE:
                    return u.intl.string(u.t.d1ab8n);
                case o.AH.FLAG_TO_CHANNEL:
                    return u.intl.string(u.t["Y+VmvU"]);
                case o.AH.USER_COMMUNICATION_DISABLED:
                    return u.intl.string(u.t.Xz2njA);
                case o.AH.QUARANTINE_USER:
                    return u.intl.string(u.t.NPO8ee)
            }
        })(e) ?? "",
        descriptionText: d(e, n) ?? "",
        helperText: ((e, t) => {
            switch (e) {
                case o.AH.QUARANTINE_USER:
                case o.AH.BLOCK_MESSAGE:
                    return null;
                case o.AH.FLAG_TO_CHANNEL: {
                    let e = t?.metadata?.channelId;
                    if (null == e) return null;
                    let n = l.A.getChannel(e);
                    if (null == n) return null;
                    let i = (0, r.m1)(n, a.default, s.A);
                    return u.intl.format(u.t.xQXnkK, {
                        channelName: i
                    })
                }
                case o.AH.USER_COMMUNICATION_DISABLED: {
                    let e = t?.metadata?.durationSeconds ?? 0,
                        n = (0, c.getFriendlyDurationString)(e);
                    if (null == n) return null;
                    return u.intl.format(u.t.AFmbfS, {
                        duration: n
                    })
                }
            }
        })(e, t) ?? null,
        icon: (e => {
            switch (e) {
                case o.AH.BLOCK_MESSAGE:
                    return i.aXh;
                case o.AH.FLAG_TO_CHANNEL:
                    return i.N$i;
                case o.AH.USER_COMMUNICATION_DISABLED:
                    return i.gQi;
                case o.AH.QUARANTINE_USER:
                    return i._mZ
            }
        })(e) ?? i.aXh,
        isEditable: e !== o.AH.QUARANTINE_USER
    } : null
}