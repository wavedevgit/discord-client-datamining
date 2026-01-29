/** Chunk was on 43629 **/
/** chunk id: 493507, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => b
}), n(896048);
var i, r = n(311907),
    s = n(73153),
    l = n(217222),
    a = n(253932),
    o = n(617617),
    u = n(961350),
    d = n(543465),
    c = n(927813),
    A = n(469679);

function f(e, t, n) {
    return t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = n, e
}
let h = 3 * c.A.Millis.DAY,
    p = !1,
    E = {};

function g() {
    let e = !1 !== a.LJ.getSetting() && A.T.getConfig({
        location: "ReplyNudgeStore"
    }).enabled;
    if (p === e) return !1;
    p = e
}

function _() {
    let e = !1;
    for (let t of Object.keys(E)) d.Ay.isChannelMuted(null, t) && (delete E[t], e = !0);
    return e
}
class O extends(i = r.Ay.PersistedStore) {
    initialize(e) {
        var t;
        E = function(e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now(),
                n = {};
            for (let [i, r] of Object.entries(e)) null != r && t - r < h && (n[i] = r);
            return n
        }(null != (t = null == e ? void 0 : e.nudgedChannels) ? t : {}), this.waitFor(u.default, o.A, l.A, d.Ay), this.syncWith([o.A, l.A], g), this.syncWith([d.Ay], _)
    }
    getState() {
        return {
            nudgedChannels: E
        }
    }
    getNudgeTimestamp(e) {
        var t;
        return p && null != (t = E[e]) ? t : null
    }
    isChannelNudged(e) {
        return null != this.getNudgeTimestamp(e)
    }
}
f(O, "displayName", "ReplyNudgeStore"), f(O, "persistKey", "ReplyNudgeStore");
let b = new O(s.h, {
    REPLY_NUDGE_SET: function(e) {
        let {
            channelId: t,
            timestamp: n
        } = e;
        if (d.Ay.isChannelMuted(null, t) || t in E) return !1;
        E[t] = n
    },
    MESSAGE_CREATE: function(e) {
        let {
            message: t
        } = e;
        if (!(t.channel_id in E)) return !1;
        delete E[t.channel_id]
    },
    MESSAGE_REACTION_ADD: function(e) {
        let {
            channelId: t,
            userId: n
        } = e;
        if (n !== u.default.getId() || !(t in E)) return !1;
        delete E[t]
    },
    CHANNEL_DELETE: function(e) {
        let {
            channel: {
                id: t
            }
        } = e;
        if (!(t in E)) return !1;
        delete E[t]
    },
    LOGOUT: function() {
        E = {}, p = !1
    }
})