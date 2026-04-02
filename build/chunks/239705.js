/** chunk id: 239705 params = (module,exports,require) **/
n.d(t, {
    x: () => _
});
var i = n(397927),
    l = n(47167),
    a = n(734057),
    r = n(994500),
    s = n(287809),
    o = n(411335),
    c = n(200700),
    d = n(985018);
let u = function(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : o.uh.KEYWORD;
    switch (e) {
        case o.AH.BLOCK_MESSAGE:
            switch (t) {
                case o.uh.MENTION_SPAM:
                    return d.intl.string(d.t["8hdId3"]);
                case o.uh.ML_SPAM:
                    return d.intl.string(d.t.tLQYs5);
                default:
                    return d.intl.string(d.t.xAAoci)
            }
        case o.AH.FLAG_TO_CHANNEL:
            return d.intl.string(d.t.BHAXfa);
        case o.AH.USER_COMMUNICATION_DISABLED:
            return d.intl.string(d.t["bNK+gI"]);
        case o.AH.QUARANTINE_USER:
            return d.intl.string(d.t["/7nL5R"])
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
                    return d.intl.string(d.t.d1ab8n);
                case o.AH.FLAG_TO_CHANNEL:
                    return d.intl.string(d.t["Y+VmvU"]);
                case o.AH.USER_COMMUNICATION_DISABLED:
                    return d.intl.string(d.t.Xz2njA);
                case o.AH.QUARANTINE_USER:
                    return d.intl.string(d.t.NPO8ee)
            }
        })(e) ?? "",
        descriptionText: u(e, n) ?? "",
        helperText: ((e, t) => {
            switch (e) {
                case o.AH.QUARANTINE_USER:
                case o.AH.BLOCK_MESSAGE:
                    return null;
                case o.AH.FLAG_TO_CHANNEL: {
                    let e = t?.metadata?.channelId;
                    if (null == e) return null;
                    let n = a.A.getChannel(e);
                    if (null == n) return null;
                    let i = (0, l.m1)(n, s.default, r.A);
                    return d.intl.format(d.t.xQXnkK, {
                        channelName: i
                    })
                }
                case o.AH.USER_COMMUNICATION_DISABLED: {
                    let e = t?.metadata?.durationSeconds ?? 0,
                        n = (0, c.getFriendlyDurationString)(e);
                    if (null == n) return null;
                    return d.intl.format(d.t.AFmbfS, {
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