/** Chunk was on 43629 **/
/** chunk id: 493507, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => f
}), n(896048);
var i, r = n(311907),
    s = n(73153),
    l = n(961350),
    a = n(927813),
    o = n(469679);

function u(e, t, n) {
    return t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = n, e
}
let d = 3 * a.A.Millis.DAY,
    c = {};
class A extends(i = r.Ay.PersistedStore) {
    initialize(e) {
        var t;
        c = function(e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now(),
                n = {};
            for (let [i, r] of Object.entries(e)) null != r && t - r < d && (n[i] = r);
            return n
        }(null != (t = null == e ? void 0 : e.nudgedChannels) ? t : {}), this.waitFor(l.default)
    }
    getState() {
        return {
            nudgedChannels: c
        }
    }
    getNudgeTimestamp(e) {
        var t;
        return o.T.getConfig({
            location: "ReplyNudgeStore"
        }).enabled && null != (t = c[e]) ? t : null
    }
    isChannelNudged(e) {
        return null != this.getNudgeTimestamp(e)
    }
}
u(A, "displayName", "ReplyNudgeStore"), u(A, "persistKey", "ReplyNudgeStore");
let f = new A(s.h, {
    REPLY_NUDGE_SET: function(e) {
        let {
            channelId: t,
            timestamp: n
        } = e;
        if (t in c) return !1;
        c[t] = n
    },
    MESSAGE_CREATE: function(e) {
        let {
            message: t
        } = e;
        if (!(t.channel_id in c)) return !1;
        delete c[t.channel_id]
    },
    MESSAGE_REACTION_ADD: function(e) {
        let {
            channelId: t,
            userId: n
        } = e;
        if (n !== l.default.getId() || !(t in c)) return !1;
        delete c[t]
    },
    CHANNEL_DELETE: function(e) {
        let {
            channel: {
                id: t
            }
        } = e;
        if (!(t in c)) return !1;
        delete c[t]
    },
    LOGOUT: function() {
        c = {}
    }
})