/** chunk id: 131677, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => y
}), n(896048);
var r, l, i = n(311907),
    s = n(73153),
    a = n(95701),
    o = n(583613),
    c = n(734057),
    u = n(222823),
    d = n(309010),
    p = n(645959);
let h = [],
    g = new Set;

function f() {
    let e = p.A.getPrivateChannelIds().filter(e => u.Ay.getMentionCount(e) > 0);
    return e.length > 20 && (e.length = 20), !(0, o.in)(e, h) && (h = e, g = new Set(e), !0)
}

function m() {
    return f()
}

function b(e) {
    let {
        channelId: t
    } = e, n = c.A.getChannel(t);
    return null != n && !!(0, a.Gw)(n.type) && f()
}
class A extends(r = i.Ay.Store) {
    initialize() {
        this.waitFor(p.A, c.A, d.A, u.Ay)
    }
    getUnreadPrivateChannelIds() {
        return h
    }
}(l = "displayName") in A ? Object.defineProperty(A, l, {
    value: "PrivateChannelReadStateStore",
    enumerable: !0,
    configurable: !0,
    writable: !0
}) : A[l] = "PrivateChannelReadStateStore";
let y = new A(s.h, {
    CONNECTION_OPEN: m,
    OVERLAY_INITIALIZE: m,
    MESSAGE_CREATE: b,
    MESSAGE_ACK: b,
    CHANNEL_SELECT: function(e) {
        let {
            channelId: t
        } = e, n = c.A.getChannel(t);
        return null != n && !!(0, a.Gw)(n.type) && f()
    },
    CHANNEL_DELETE: function(e) {
        let {
            channel: {
                id: t
            }
        } = e;
        return !!g.has(t) && f()
    },
    WINDOW_FOCUS: function() {
        let e = c.A.getChannel(d.A.getChannelId());
        return null != e && !!(0, a.Gw)(e.type) && f()
    },
    CHANNEL_CREATE: function(e) {
        let {
            channel: {
                id: t
            }
        } = e, n = c.A.getChannel(t);
        return null != n && !!(0, a.Gw)(n.type) && f()
    },
    CHANNEL_UPDATES: function(e) {
        let {
            channels: t
        } = e, n = !1;
        for (let {
                id: e
            }
            of t) {
            let t = c.A.getChannel(e);
            null != t && (0, a.Gw)(t.type) && (n = !0)
        }
        return !!n && f()
    }
})