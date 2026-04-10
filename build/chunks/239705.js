/** chunk id: 239705 params = (module,exports,require) **/
n.d(e, {
    x: () => E
});
var r = n(397927),
    i = n(47167),
    l = n(734057),
    a = n(994500),
    s = n(287809),
    A = n(411335),
    u = n(200700),
    c = n(985018);
let d = function(t) {
    let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : A.uh.KEYWORD;
    switch (t) {
        case A.AH.BLOCK_MESSAGE:
            switch (e) {
                case A.uh.MENTION_SPAM:
                    return c.intl.string(c.t["8hdId3"]);
                case A.uh.ML_SPAM:
                    return c.intl.string(c.t.tLQYs5);
                default:
                    return c.intl.string(c.t.xAAoci)
            }
        case A.AH.FLAG_TO_CHANNEL:
            return c.intl.string(c.t.BHAXfa);
        case A.AH.USER_COMMUNICATION_DISABLED:
            return c.intl.string(c.t["bNK+gI"]);
        case A.AH.QUARANTINE_USER:
            return c.intl.string(c.t["/7nL5R"])
    }
};

function E(t, e, n) {
    return (t => {
        switch (t) {
            case A.AH.BLOCK_MESSAGE:
            case A.AH.FLAG_TO_CHANNEL:
            case A.AH.USER_COMMUNICATION_DISABLED:
            case A.AH.QUARANTINE_USER:
                return !0;
            default:
                return !1
        }
    })(t) ? {
        headerText: (t => {
            switch (t) {
                case A.AH.BLOCK_MESSAGE:
                    return c.intl.string(c.t.d1ab8n);
                case A.AH.FLAG_TO_CHANNEL:
                    return c.intl.string(c.t["Y+VmvU"]);
                case A.AH.USER_COMMUNICATION_DISABLED:
                    return c.intl.string(c.t.Xz2njA);
                case A.AH.QUARANTINE_USER:
                    return c.intl.string(c.t.NPO8ee)
            }
        })(t) ?? "",
        descriptionText: d(t, n) ?? "",
        helperText: ((t, e) => {
            switch (t) {
                case A.AH.QUARANTINE_USER:
                case A.AH.BLOCK_MESSAGE:
                    return null;
                case A.AH.FLAG_TO_CHANNEL: {
                    let t = e?.metadata?.channelId;
                    if (null == t) return null;
                    let n = l.A.getChannel(t);
                    if (null == n) return null;
                    let r = (0, i.m1)(n, s.default, a.A);
                    return c.intl.format(c.t.xQXnkK, {
                        channelName: r
                    })
                }
                case A.AH.USER_COMMUNICATION_DISABLED: {
                    let t = e?.metadata?.durationSeconds ?? 0,
                        n = (0, u.getFriendlyDurationString)(t);
                    if (null == n) return null;
                    return c.intl.format(c.t.AFmbfS, {
                        duration: n
                    })
                }
            }
        })(t, e) ?? null,
        icon: (t => {
            switch (t) {
                case A.AH.BLOCK_MESSAGE:
                    return r.aXh;
                case A.AH.FLAG_TO_CHANNEL:
                    return r.N$i;
                case A.AH.USER_COMMUNICATION_DISABLED:
                    return r.gQi;
                case A.AH.QUARANTINE_USER:
                    return r._mZ
            }
        })(t) ?? r.aXh,
        isEditable: t !== A.AH.QUARANTINE_USER
    } : null
}