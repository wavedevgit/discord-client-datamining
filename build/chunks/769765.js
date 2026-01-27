/** Chunk was on web.js **/
/** chunk id: 769765, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => j
}), n(321073), n(896048);
var r, i = n(311907),
    a = n(73153),
    o = n(999903),
    s = n(181079),
    l = n(961350),
    c = n(734057),
    u = n(808728),
    d = n(71393),
    f = n(652215);

function p(e, t, n) {
    return t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = n, e
}
let _ = null,
    h = {},
    m = null;

function g() {
    return {
        _categories: [],
        null: []
    }
}
let E = g();

function y(e, t) {
    e.index = t
}

function b(e) {
    let t = u.Ay.getChannels(e),
        n = g(),
        r = e => {
            var t;
            let {
                channel: r
            } = e;
            (null != (t = n[null != r.parent_id ? r.parent_id : "null"]) ? t : n.null).push({
                channel: r,
                index: -1
            })
        };
    return t[f.rbe.GUILD_CATEGORY].forEach(e => {
        let {
            channel: t
        } = e;
        n._categories.push({
            channel: t,
            index: -1
        }), n[t.id] = []
    }), t[u.I6].forEach(r), t[u.vM].forEach(r), (0, o.A)(n._categories, n).forEach(y), h[e] = n, n
}

function O() {
    h = {}, null != _ && b(_)
}

function v(e) {
    let {
        guild: {
            id: t
        }
    } = e;
    h[t] = void 0, _ === t && b(t)
}

function A(e) {
    let {
        guild: {
            id: t
        }
    } = e;
    delete h[t]
}

function I(e) {
    let {
        channel: {
            guild_id: t
        }
    } = e;
    if (null == t) return !1;
    h[t] = void 0, _ === t && b(t)
}

function S(e) {
    let {
        channels: t
    } = e, n = !1;
    for (let {
            guild_id: e
        }
        of t) null != e && (h[e] = void 0, n = !0, _ === e && b(e));
    return n
}

function T(e) {
    let {
        guildId: t,
        user: n
    } = e;
    if (l.default.getId() !== n.id) return !1;
    h[t] = void 0, t === _ && b(t)
}

function C() {
    if (null == _) return !1;
    b(_)
}

function N(e) {
    let {
        guildId: t
    } = e;
    h[t] = void 0, t === _ && b(t)
}

function w(e, t) {
    if (m = t, null == e || null == e.getGuildId()) return !1;
    let n = e.getGuildId();
    return null != n && (h[n] = void 0, n === _ && b(n), !0)
}

function R(e) {
    let {
        channelId: t
    } = e;
    return null == t && null != m ? w(c.A.getChannel(m), null) : w(c.A.getChannel(t), t)
}

function P(e) {
    let {
        voiceStates: t
    } = e;
    return t.reduce((e, t) => {
        let {
            channelId: n,
            sessionId: r
        } = t;
        return l.default.getSessionId() !== r ? e : w(c.A.getChannel(n), n) || e
    }, !1)
}

function D(e) {
    let {
        guildId: t
    } = e;
    if (_ = null != t ? t : null, null == t || null != h[t]) return !1;
    b(t)
}

function L() {
    b(f.YYv)
}

function x(e) {
    let t = h[e];
    return null != t ? t : b(e)
}
class M extends(r = i.Ay.Store) {
    initialize() {
        this.waitFor(u.Ay, d.A, l.default, c.A, s.A), this.syncWith([s.A], L)
    }
    getCategories(e) {
        return null != e ? x(e) : E
    }
}
p(M, "displayName", "GuildCategoryStore");
let j = new M(a.h, {
    CHANNEL_SELECT: D,
    CONNECTION_OPEN: O,
    OVERLAY_INITIALIZE: O,
    CACHE_LOADED_LAZY: O,
    GUILD_CREATE: v,
    GUILD_UPDATE: v,
    GUILD_DELETE: A,
    CHANNEL_CREATE: I,
    CHANNEL_DELETE: I,
    CHANNEL_UPDATES: S,
    GUILD_MEMBER_UPDATE: T,
    CURRENT_USER_UPDATE: C,
    GUILD_ROLE_CREATE: N,
    GUILD_ROLE_UPDATE: N,
    GUILD_ROLE_DELETE: N,
    IMPERSONATE_UPDATE: N,
    IMPERSONATE_STOP: N,
    VOICE_CHANNEL_SELECT: R,
    VOICE_STATE_UPDATES: P
})