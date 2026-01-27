/** Chunk was on web.js **/
/** chunk id: 157550, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => g
}), n(896048);
var r = n(734057),
    i = n(536802);

function a(e, t, n) {
    return t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = n, e
}
let o = new Set,
    s = new Set,
    l = !1;

function c(e) {
    return e.isSpam
}

function u(e) {
    let t = !1;
    return c(e) && !o.has(e.id) && (o.add(e.id), t = !0), !c(e) && o.has(e.id) && (o.delete(e.id), t = !0), !c(e) && s.has(e.id) && (s.delete(e.id), t = !0), t
}

function d() {
    o.clear(), s.clear(), Object.values(r.A.getMutablePrivateChannels()).forEach(e => {
        u(e)
    }), l = !0
}

function f(e) {
    let {
        channelId: t
    } = e;
    s.add(t)
}

function p(e) {
    let {
        channel: t
    } = e;
    return u(t)
}

function _(e) {
    let {
        channels: t
    } = e;
    for (let e of t) u(e)
}

function h(e) {
    let {
        channel: t
    } = e, n = !1;
    return o.has(t.id) && (o.delete(t.id), n = !0), n
}
class m extends i.A {
    initialize() {
        this.waitFor(r.A)
    }
    loadCache() {
        let e = this.readSnapshot(m.LATEST_SNAPSHOT_VERSION);
        null != e && (o = new Set(e))
    }
    takeSnapshot() {
        return {
            version: m.LATEST_SNAPSHOT_VERSION,
            data: Array.from(o)
        }
    }
    getSpamChannelIds() {
        return o
    }
    getSpamChannelsCount() {
        return o.size
    }
    isSpam(e) {
        return o.has(e)
    }
    isAcceptedOptimistic(e) {
        return s.has(e)
    }
    isReady() {
        return l
    }
    constructor() {
        super({
            CONNECTION_OPEN: d,
            CONNECTION_OPEN_SUPPLEMENTAL: d,
            CACHE_LOADED_LAZY: () => this.loadCache(),
            CHANNEL_CREATE: p,
            CHANNEL_UPDATES: _,
            CHANNEL_DELETE: h,
            MESSAGE_REQUEST_ACCEPT_OPTIMISTIC: f
        })
    }
}
a(m, "displayName", "SpamMessageRequestStore"), a(m, "LATEST_SNAPSHOT_VERSION", 1);
let g = new m