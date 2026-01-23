/** Chunk was on web.js **/
/** chunk id: 862804, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    j: () => g
});
var r = n(47167),
    i = n(958340),
    a = n(734057),
    s = n(71393),
    o = n(576705),
    l = n(994500),
    c = n(287809),
    u = n(486020),
    d = n(405269);
n(427930);
var f = n(985018);

function p(e, t, n) {
    return t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = n, e
}
let _ = 16;

function h(e, t) {
    return {
        originLabel: e.name,
        originIconUrl: u.Ay.getGuildIconURL({
            id: e.id,
            size: _,
            icon: e.icon,
            canAnimate: !1
        }),
        timestampLabel: t,
        accessibilityLabel: f.intl.formatToPlainString(f.t["+l04BN"], {
            origin: e.name,
            timestamp: t
        })
    }
}

function m(e, t) {
    return {
        originLabel: e,
        timestampLabel: t,
        accessibilityLabel: f.intl.formatToPlainString(f.t["+l04BN"], {
            origin: e,
            timestamp: t
        })
    }
}
class g {
    getForwardInfo() {
        var e, t, n, u;
        let f = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : a.A,
            p = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : c.default,
            _ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : l.A,
            g = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : o.A,
            E = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : s.A,
            y = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : i.A,
            {
                snapshotIndex: b,
                parentMessage: O,
                messageSnapshot: v
            } = this,
            A = (0, d.Fe)(v.message.timestamp),
            I = f.getChannel(this.parentMessage.channel_id);
        if (null != I && I.guild_id === (null == (t = O.messageReference) ? void 0 : t.guild_id)) {
            let e = f.getChannel(null == (u = O.messageReference) ? void 0 : u.channel_id);
            if (null == e) {
                let e = E.getGuild(I.guild_id);
                return null == e ? {
                    snapshotIndex: b
                } : {
                    snapshotIndex: b,
                    footerInfo: h(e, A)
                }
            }
            return g.can(e.accessPermissions, e) ? {
                snapshotIndex: b,
                footerInfo: m((0, r.m1)(e, p, _, !0), A)
            } : {
                snapshotIndex: b
            }
        }
        let S = null == (n = O.messageReference) ? void 0 : n.guild_id;
        if (null == S) return {
            snapshotIndex: b
        };
        let T = null != (e = E.getGuild(S)) ? e : y.getGuild(S);
        return null == T ? {
            snapshotIndex: b
        } : {
            snapshotIndex: b,
            footerInfo: h(T, A)
        }
    }
    constructor(e, t, n) {
        p(this, "parentMessage", void 0), p(this, "messageSnapshot", void 0), p(this, "snapshotIndex", void 0), this.parentMessage = e, this.messageSnapshot = t, this.snapshotIndex = n
    }
}