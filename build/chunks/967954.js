/** chunk id: 967954, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => f
}), n(321073), n(896048);
var a, l, r = n(835245),
    i = n(80703),
    s = n(311907),
    o = n(73153),
    c = n(961350),
    d = n(540999);
let u = 0,
    m = [],
    p = 0,
    h = [],
    x = !1;
class g extends(a = s.Ay.Store) {
    initialize() {
        this.waitFor(c.default, d.A)
    }
    get loggedEvents() {
        return m
    }
    get loggedEventsVersion() {
        return p
    }
    get loggedTriggers() {
        return h
    }
    get trackTriggers() {
        return x
    }
}(l = "displayName") in g ? Object.defineProperty(g, l, {
    value: "AnalyticsLogStore",
    enumerable: !0,
    configurable: !0,
    writable: !0
}) : g[l] = "AnalyticsLogStore";
let f = new g(o.h, {
    TRACK: function(e) {
        let {
            event: t,
            properties: n,
            fingerprint: a
        } = e;
        d.A.isDeveloper && (m.push({
            key: (u++).toString(),
            event: t,
            properties: n,
            fingerprint: null != a ? (0, i.d)(a) : c.default.getId(),
            timestamp: new Date
        }), p++, m.length > 500 && (m = m.slice(-Math.floor(250))))
    },
    TRACK_TRIGGER: function(e) {
        let {
            experimentId: t,
            descriptor: n,
            exposureType: a,
            excluded: l,
            location: i,
            previouslyTracked: s
        } = e;
        !d.A.isDeveloper || x && (h = [...h, {
            key: (0, r.A)(),
            experimentId: t,
            descriptor: n,
            exposureType: a,
            excluded: l,
            location: i,
            previouslyTracked: s,
            timestamp: new Date
        }]).length > 500 && h.shift()
    },
    SET_TRACK_TRIGGERS: function(e) {
        let {
            enabled: t
        } = e;
        x = t
    },
    ANALYTICS_LOG_CLEAR: function() {
        m = [], p++, h = []
    }
})