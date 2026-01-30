/** chunk id: 503509, original params: e,t,n (module,exports,require) **/
"use strict";
let r;
n.d(t, {
    A: () => k
}), n(896048);
var i, a = n(311907),
    o = n(506774),
    s = n(73153),
    l = n(313961),
    c = n(253932),
    u = n(617617),
    d = n(164891),
    f = n(961350),
    p = n(734057),
    _ = n(461213),
    h = n(531685),
    m = n(652215);

function g(e, t, n) {
    return t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = n, e
}
let E = "IncomingCallStore",
    y = 232,
    b = 315,
    O = 10,
    v = new Set,
    A = [],
    I = new Map,
    S = new Set,
    T = !1;

function C() {
    let e = h.A.windowSize();
    return null != r && r.x + y < e.width && r.y + b < e.height ? r : {
        x: e.width / 2 - y / 2,
        y: e.height / 2 - b / 2
    }
}

function N(e) {
    if (null == e || null == I.get(e)) return !1;
    I.delete(e), (S = new Set(S)).delete(e)
}

function w(e) {
    let {
        channelId: t,
        ringing: n
    } = e;
    if ("GUILD_RING_START" === e.type && !d.A.getCurrentConfig({
            guildId: e.guildId,
            location: "IncomingCallCreate"
        }).enabled) return !1;
    let r = n.includes(f.default.getId());
    if (!S.has(t) && r) {
        let e = p.A.getChannel(t);
        if (null == e) return !1;
        let n = O * S.size,
            {
                x: r,
                y: i
            } = C();
        return I.set(t, {
            channel: e,
            x: r + n,
            y: i + n
        }), void(S = new Set(S)).add(t)
    }
    return !!S.has(t) && !r && N(t)
}

function R(e) {
    let {
        channelId: t
    } = e;
    return ("GUILD_RING_STOP" !== e.type || !!d.A.getCurrentConfig({
        guildId: e.guildId,
        location: "IncomingCallDelete"
    }).enabled && !!e.ringing.includes(f.default.getId())) && N(t)
}

function P(e) {
    let {
        channelId: t
    } = e;
    return N(t)
}

function D(e) {
    let {
        x: t,
        y: n
    } = e;
    return r = {
        x: t,
        y: n
    }, o.w.set(E, r), !1
}

function L(e) {
    let {
        channel: t
    } = e;
    return N(t.id)
}

function x() {
    T = _.A.getStatus() === m.clD.DND || c.NO.getSetting()
}

function M() {
    let e = f.default.getId();
    S.forEach(t => {
        var n;
        let r = t;
        null == (null == (n = p.A.getChannel(r)) ? void 0 : n.guild_id) || l.A.getGuildRingingUsers(r).has(e) || N(r)
    })
}
class j extends(i = a.Ay.Store) {
    initialize() {
        this.waitFor(f.default, l.A, p.A, _.A, u.A, h.A), this.syncWith([_.A], x), this.syncWith([u.A], x), this.syncWith([l.A], M)
    }
    getIncomingCalls() {
        return T ? A : Array.from(I.values())
    }
    getIncomingCallChannelIds() {
        return T ? v : S
    }
    getFirstIncomingCallId() {
        return T ? null : S.values().next().value
    }
    hasIncomingCalls() {
        return !T && S.size > 0
    }
}
g(j, "displayName", "IncomingCallStore");
let k = new j(s.h, {
    CALL_CREATE: w,
    CALL_UPDATE: w,
    CALL_DELETE: R,
    GUILD_RING_START: w,
    GUILD_RING_STOP: R,
    VOICE_CHANNEL_SELECT: P,
    INCOMING_CALL_MOVE: D,
    CHANNEL_DELETE: L
})