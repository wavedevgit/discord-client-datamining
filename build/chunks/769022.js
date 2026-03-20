/** chunk id: 769022 params = (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => C
});
var i = n(311907),
    s = n(713402),
    l = n(73153),
    a = n(734057),
    r = n(994500),
    o = n(977997),
    c = n(927813),
    d = n(898926);

function u(e) {
    return `voice-user-${e}`
}
c.A.Millis.MINUTE;
let h = "past";

function A(e) {
    switch (e.eventType) {
        case d.i.USER_JOINED:
            return ["present-user", e.userId];
        case d.i.USER_LEFT:
            return [h, e.userId];
        case d.i.ACTIVITY_STARTED:
            return ["present-activity", e.userId];
        case d.i.ACTIVITY_ENDED:
            return [h, e.userId];
        default:
            return []
    }
}

function m(e) {
    return -e.timestamp
}
let _ = new Map,
    p = [];

function g(e, t) {
    let n = u(t),
        i = _.get(e);
    return null != i && (i.set(n, {
        userId: t,
        timestamp: Date.now(),
        eventType: d.i.USER_JOINED,
        key: n
    }), !0)
}

function f(e) {
    let t = _.get(e);
    null != t && t.clear()
}
class x extends i.Ay.Store {
    initialize() {
        this.waitFor(a.A, r.A, o.A)
    }
    __getLocalVars = () => ({
        channelEventMaps: _
    });
    getHistory(e) {
        return _.get(e)?.values(h) ?? p
    }
    getHistoryVersion(e) {
        return _.get(e)?.version ?? 0
    }
}
let C = new x(l.h, {
    VOICE_STATE_UPDATES: function(e) {
        let t = !1,
            n = e.voiceStates.filter(e => null != e.oldChannelId && _.has(e.oldChannelId)),
            i = e.voiceStates.filter(e => null != e.channelId && _.has(e.channelId));
        return new Set(n.map(e => e.oldChannelId).filter(e => null != e)).forEach(e => {
            0 === Object.keys(o.A.getVoiceStatesForChannel(e)).length && f(e)
        }), n.forEach(e => {
            let {
                userId: n,
                oldChannelId: i
            } = e, s = null != i ? _.get(i) : null;
            null != i && null != s && s.values().length > 0 && (t = function(e, t) {
                let n = u(t),
                    i = _.get(e);
                if (null == i) return !1;
                let s = i.get(n);
                return null != s && (i.set(n, {
                    userId: t,
                    key: n,
                    eventType: d.i.USER_LEFT,
                    durationSeconds: Math.floor((Date.now() - s.timestamp) / 1e3),
                    timestamp: Date.now()
                }), !0)
            }(i, n) || t)
        }), i.forEach(e => {
            let {
                userId: n,
                channelId: i
            } = e;
            !r.A.isBlockedOrIgnored(n) && null != i && _.has(i) && (t = g(i, n) || t)
        }), t
    },
    CHANNEL_DELETE: function(e) {
        let {
            channel: t
        } = e;
        return !!_.has(t.id) && (f(t.id), !0)
    },
    VOICE_CHANNEL_HISTORY_START_TRACKING: function(e) {
        let {
            channelId: t
        } = e;
        if (!_.has(t)) return _.has(t) || _.set(t, new s.J(A, m)), Object.values(o.A.getVoiceStatesForChannel(t)).forEach(e => {
            g(t, e.userId)
        }), !0;
        return !1
    }
})