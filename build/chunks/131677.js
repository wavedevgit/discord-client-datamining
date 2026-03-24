/** chunk id: 131677 params = (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => g
});
var i = n(311907),
    s = n(73153),
    l = n(95701),
    a = n(583613),
    r = n(734057),
    o = n(222823),
    c = n(309010),
    d = n(645959);
let u = [],
    h = new Set;

function A() {
    let e = d.default.getPrivateChannelIds().filter(e => o.Ay.getMentionCount(e) > 0);
    return e.length > 20 && (e.length = 20), !(0, a.in)(e, u) && (u = e, h = new Set(e), !0)
}

function m() {
    return A()
}

function p(e) {
    let {
        channelId: t
    } = e, n = r.A.getChannel(t);
    return null != n && !!(0, l.Gw)(n.type) && A()
}
class _ extends i.Ay.Store {
    static displayName = "PrivateChannelReadStateStore";
    initialize() {
        this.waitFor(d.default, r.A, c.A, o.Ay)
    }
    getUnreadPrivateChannelIds() {
        return u
    }
}
let g = new _(s.h, {
    CONNECTION_OPEN: m,
    OVERLAY_INITIALIZE: m,
    MESSAGE_CREATE: p,
    MESSAGE_ACK: p,
    CHANNEL_SELECT: function(e) {
        let {
            channelId: t
        } = e, n = r.A.getChannel(t);
        return null != n && !!(0, l.Gw)(n.type) && A()
    },
    CHANNEL_DELETE: function(e) {
        let {
            channel: {
                id: t
            }
        } = e;
        return !!h.has(t) && A()
    },
    WINDOW_FOCUS: function() {
        let e = r.A.getChannel(c.A.getChannelId());
        return null != e && !!(0, l.Gw)(e.type) && A()
    },
    CHANNEL_CREATE: function(e) {
        let {
            channel: {
                id: t
            }
        } = e, n = r.A.getChannel(t);
        return null != n && !!(0, l.Gw)(n.type) && A()
    },
    CHANNEL_UPDATES: function(e) {
        let {
            channels: t
        } = e, n = !1;
        for (let {
                id: e
            }
            of t) {
            let t = r.A.getChannel(e);
            null != t && (0, l.Gw)(t.type) && (n = !0)
        }
        return !!n && A()
    }
})