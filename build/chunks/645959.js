/** Chunk was on web.js **/
/** chunk id: 645959, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => j
}), n(896048), n(321073);
var r, i = n(989349),
    a = n.n(i),
    s = n(311907),
    o = n(713402),
    l = n(73153),
    c = n(695870),
    u = n(380335),
    d = n(157550),
    f = n(95701),
    p = n(734057),
    _ = n(71393),
    h = n(222823),
    m = n(543465),
    g = n(287809),
    E = n(661191);

function y(e, t, n) {
    return t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = n, e
}
let b = e => {
        let {
            lastMessageId: t
        } = e;
        return -E.default.extractTimestamp(t)
    },
    O = e => {
        let {
            isRequest: t,
            isFavorite: n
        } = e;
        return t ? [] : [n ? "FAVORITE" : "DEFAULT"]
    },
    v = new o.J(O, b);

function A() {
    v.clear()
}

function I(e) {
    var t, n;
    let r = null != (t = null != (n = h.Ay.lastMessageId(e.id)) ? n : e.lastMessageId) ? t : e.id,
        i = e.isMessageRequestTimestamp;
    if (null != i) {
        let e = a()(i).valueOf(),
            t = E.default.fromTimestamp(e);
        return E.default.compare(r, t) > 0 ? r : t
    }
    return r
}

function S(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : I(e);
    return {
        channelId: e.id,
        lastMessageId: t,
        isFavorite: !1,
        isRequest: u.A.isMessageRequest(e.id) || d.A.isSpam(e.id)
    }
}

function T() {
    v.clear(), Object.values(p.A.getMutablePrivateChannels()).forEach(e => {
        v.set(e.id, S(e))
    })
}

function C(e) {
    let {
        channel: t
    } = e;
    if (!(0, f.Gw)(t.type) || t.id === c.E) return !1;
    v.set(t.id, S(t))
}

function N(e) {
    let {
        channels: t
    } = e;
    t.forEach(e => {
        ((0, f.Gw)(e.type) || v.has(e.id)) && v.set(e.id, S(e))
    })
}

function w(e) {
    let {
        channel: t
    } = e;
    return v.delete(t.id)
}

function R(e) {
    let {
        channelId: t,
        message: n
    } = e;
    if (!v.has(t)) return !1;
    let r = p.A.getChannel(t);
    return null != r && v.set(t, S(r, n.id))
}

function P(e) {
    let t = e.guild.id;
    return v.delete(t)
}

function D() {
    let e = p.A.getMutablePrivateChannels();
    for (let t in e) v.set(t, S(e[t]))
}
let x = (() => {
    let e = [],
        t = [],
        n = [];
    return () => {
        let r = v.values("FAVORITE"),
            i = v.values("DEFAULT");
        return (e !== r || t !== i) && (n = [], r.forEach(e => {
            let {
                channelId: t
            } = e;
            return n.push(t)
        }), e = r, i.forEach(e => {
            let {
                channelId: t
            } = e;
            return n.push(t)
        }), t = i), n
    }
})();
class L extends(r = s.Ay.Store) {
    initialize() {
        this.waitFor(p.A, _.A, u.A, h.Ay, d.A, m.Ay, g.default), this.syncWith([m.Ay, u.A], T)
    }
    getPrivateChannelIds() {
        return x()
    }
    getSortedChannels() {
        return [v.values("FAVORITE"), v.values("DEFAULT")]
    }
    serializeForOverlay() {
        let e = {};
        return v.values().forEach(t => {
            let {
                channelId: n,
                lastMessageId: r
            } = t;
            e[n] = r
        }), e
    }
}
y(L, "displayName", "PrivateChannelSortStore");
let j = new L(l.h, {
    CONNECTION_OPEN: T,
    CONNECTION_OPEN_SUPPLEMENTAL: T,
    OVERLAY_INITIALIZE: T,
    CACHE_LOADED: D,
    CACHE_LOADED_LAZY: D,
    CHANNEL_UPDATES: N,
    CHANNEL_CREATE: C,
    CHANNEL_DELETE: w,
    MESSAGE_CREATE: R,
    GUILD_CREATE: P,
    LOGOUT: A
})