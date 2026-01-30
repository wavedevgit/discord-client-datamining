/** Chunk was on 43629 **/
/** chunk id: 493507, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => C
}), n(896048);
var i, r = n(311907),
    s = n(73153),
    l = n(217222),
    a = n(253932),
    o = n(617617),
    u = n(961350),
    d = n(309010),
    c = n(543465),
    A = n(927813),
    f = n(469679);

function E(e, t, n) {
    return t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = n, e
}
let h = 3 * A.A.Millis.DAY,
    p = !1,
    g = {};

function _(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now(),
        n = {};
    for (let [i, {
            timestamp: r,
            isActive: s
        }] of Object.entries(e)) null != r && t - r < h && s && (n[i] = {
        timestamp: r,
        isActive: s
    });
    return n
}

function O(e) {
    if (!(e in g)) return !1;
    g[e].isActive = !1
}

function b() {
    let e = !1 !== a.LJ.getSetting() && f.T.getConfig({
        location: "ReplyNudgeStore"
    }).enabled;
    if (p === e) return !1;
    p = e
}

function M() {
    let e = !1;
    for (let t of Object.keys(g)) c.Ay.isChannelMuted(null, t) && (delete g[t], e = !0);
    return e
}
class v extends(i = r.Ay.PersistedStore) {
    initialize(e) {
        var t;
        g = _(null != (t = null == e ? void 0 : e.nudgedChannels) ? t : {}), this.waitFor(u.default, o.A, l.A, c.Ay, d.A), this.syncWith([o.A, l.A], b), this.syncWith([c.Ay], M)
    }
    getState() {
        return {
            nudgedChannels: _(g)
        }
    }
    getNudgeTimestamp(e) {
        var t, n;
        return p && null != (t = null == (n = g[e]) ? void 0 : n.timestamp) ? t : null
    }
    isChannelNudged(e) {
        var t;
        return !!p && (null == (t = g[e]) ? void 0 : t.isActive) === !0
    }
}
E(v, "displayName", "ReplyNudgeStore"), E(v, "persistKey", "ReplyNudgeStore");
let C = new v(s.h, {
    REPLY_NUDGE_SET: function(e) {
        var t;
        let {
            channelId: n,
            timestamp: i
        } = e;
        if (c.Ay.isChannelMuted(null, n) || (null == (t = g[n]) ? void 0 : t.isActive) === !0) return !1;
        g[n] = {
            timestamp: i,
            isActive: !0
        }
    },
    REPLY_NUDGE_CLEAR: function(e) {
        let {
            channelId: t
        } = e;
        return O(t)
    },
    MESSAGE_CREATE: function(e) {
        let {
            message: t
        } = e;
        return O(t.channel_id)
    },
    MESSAGE_REACTION_ADD: function(e) {
        let {
            channelId: t,
            userId: n
        } = e;
        return n === u.default.getId() && O(t)
    },
    CHANNEL_SELECT: function() {
        let e = d.A.getLastSelectedChannelId();
        return null != e && O(e)
    },
    CHANNEL_DELETE: function(e) {
        let {
            channel: {
                id: t
            }
        } = e;
        return O(t)
    },
    LOGOUT: function() {
        g = {}, p = !1
    }
})