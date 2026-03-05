/** chunk id: 862804 params = (module,exports,require) **/
n.d(t, {
    j: () => h
});
var i = n(47167),
    l = n(958340),
    r = n(734057),
    a = n(71393),
    s = n(576705),
    o = n(994500),
    d = n(287809),
    c = n(486020),
    u = n(405269);
n(427930);
var _ = n(985018);

function m(e, t) {
    return {
        originLabel: e.name,
        originIconUrl: c.Ay.getGuildIconURL({
            id: e.id,
            size: 16,
            icon: e.icon,
            canAnimate: !1
        }),
        timestampLabel: t,
        accessibilityLabel: _.intl.formatToPlainString(_.t["+l04BN"], {
            origin: e.name,
            timestamp: t
        })
    }
}
class h {
    parentMessage;
    messageSnapshot;
    snapshotIndex;
    constructor(e, t, n) {
        this.parentMessage = e, this.messageSnapshot = t, this.snapshotIndex = n
    }
    getForwardInfo() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : r.A,
            t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : d.default,
            n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : o.A,
            c = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : s.A,
            h = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : a.A,
            p = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : l.A,
            {
                snapshotIndex: g,
                parentMessage: A,
                messageSnapshot: x
            } = this,
            f = (0, u.Fe)(x.message.timestamp),
            C = e.getChannel(this.parentMessage.channel_id);
        if (null != C && C.guild_id === A.messageReference?.guild_id) {
            var E;
            let l = e.getChannel(A.messageReference?.channel_id);
            if (null == l) {
                let e = h.getGuild(C.guild_id);
                return null == e ? {
                    snapshotIndex: g
                } : {
                    snapshotIndex: g,
                    footerInfo: m(e, f)
                }
            }
            return c.can(l.accessPermissions, l) ? {
                snapshotIndex: g,
                footerInfo: {
                    originLabel: E = (0, i.m1)(l, t, n, !0),
                    timestampLabel: f,
                    accessibilityLabel: _.intl.formatToPlainString(_.t["+l04BN"], {
                        origin: E,
                        timestamp: f
                    })
                }
            } : {
                snapshotIndex: g
            }
        }
        let I = A.messageReference?.guild_id;
        if (null == I) return {
            snapshotIndex: g
        };
        let b = h.getGuild(I) ?? p.getGuild(I);
        return null == b ? {
            snapshotIndex: g
        } : {
            snapshotIndex: g,
            footerInfo: m(b, f)
        }
    }
}