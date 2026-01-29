/** Chunk was on 43629 **/
/** chunk id: 493507, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => _
}), n(896048);
var i, r = n(311907),
    s = n(73153),
    l = n(217222),
    a = n(253932),
    o = n(617617),
    u = n(961350),
    d = n(927813),
    c = n(469679);

function A(e, t, n) {
    return t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = n, e
}
let f = 3 * d.A.Millis.DAY,
    h = !1,
    p = {};

function E() {
    let e = !1 !== a.LJ.getSetting() && c.T.getConfig({
        location: "ReplyNudgeStore"
    }).enabled;
    if (h === e) return !1;
    h = e
}
class g extends(i = r.Ay.PersistedStore) {
    initialize(e) {
        var t;
        p = function(e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now(),
                n = {};
            for (let [i, r] of Object.entries(e)) null != r && t - r < f && (n[i] = r);
            return n
        }(null != (t = null == e ? void 0 : e.nudgedChannels) ? t : {}), this.waitFor(u.default, o.A, l.A), this.syncWith([o.A, l.A], E)
    }
    getState() {
        return {
            nudgedChannels: p
        }
    }
    getNudgeTimestamp(e) {
        var t;
        return h && null != (t = p[e]) ? t : null
    }
    isChannelNudged(e) {
        return null != this.getNudgeTimestamp(e)
    }
}
A(g, "displayName", "ReplyNudgeStore"), A(g, "persistKey", "ReplyNudgeStore");
let _ = new g(s.h, {
    REPLY_NUDGE_SET: function(e) {
        let {
            channelId: t,
            timestamp: n
        } = e;
        if (t in p) return !1;
        p[t] = n
    },
    MESSAGE_CREATE: function(e) {
        let {
            message: t
        } = e;
        if (!(t.channel_id in p)) return !1;
        delete p[t.channel_id]
    },
    MESSAGE_REACTION_ADD: function(e) {
        let {
            channelId: t,
            userId: n
        } = e;
        if (n !== u.default.getId() || !(t in p)) return !1;
        delete p[t]
    },
    CHANNEL_DELETE: function(e) {
        let {
            channel: {
                id: t
            }
        } = e;
        if (!(t in p)) return !1;
        delete p[t]
    },
    LOGOUT: function() {
        p = {}, h = !1
    }
})