/** Chunk was on web.js **/
/** chunk id: 967198, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => N
});
var r, i = n(960488),
    a = n(311907),
    o = n(73153),
    s = n(212455),
    l = n(463347),
    c = n(976860),
    u = n(961350),
    d = n(650048),
    f = n(71393),
    p = n(652215);

function _(e, t, n) {
    return t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = n, e
}
let h = -1,
    m = null,
    g = null,
    E = {};

function y() {
    null != m && null == f.A.getGuild(m) && null == s.A.getRequest(m) && (m = null), null != g && null == f.A.getGuild(g) && null == s.A.getRequest(g) && (g = null), O(m)
}

function b(e) {
    m = e.selectedGuildId, g = void 0, y()
}

function O(e) {
    null != e && (E[e] = Date.now())
}

function v(e) {
    let {
        guildId: t
    } = e;
    if (m === t) return !1;
    O(m), O(t), null != t && (g = t), m = t
}

function A(e) {
    let t = !1;
    return delete E[e], g === e && (g = null, t = !0), m === e && (f.A.getGuildsArray().find(t => t.id !== e), m = null, (0, c.bG)(p.BVt.ME), t = !0), t
}

function I(e) {
    let {
        guild: {
            id: t,
            unavailable: n
        }
    } = e;
    return !0 !== n && A(t)
}

function S(e) {
    let {
        guildId: t,
        user: n
    } = e;
    return n.id === u.default.getId() && A(t)
}

function T() {
    m = null, g = null
}
class C extends(r = a.Ay.PersistedStore) {
    initialize(e) {
        var t, n, r, a;
        this.mustEmitChanges(e => "CONNECTION_OPEN" !== e.type), this.waitFor(u.default, d.A, f.A, s.A), E = null != (t = null == e ? void 0 : e.selectedGuildTimestampMillis) ? t : {}, m = null != (n = null == e ? void 0 : e.selectedGuildId) ? n : null, g = null != (r = null == e ? void 0 : e.lastSelectedGuildId) ? r : null;
        let o = d.A.lastNonVoiceRoute,
            c = (0, i.B6)(o, {
                path: p.BVt.CHANNEL(l.pv.guildId())
            });
        null == c || null == (a = c.params) || a.guildId
    }
    getState() {
        return {
            selectedGuildTimestampMillis: E,
            selectedGuildId: m,
            lastSelectedGuildId: g
        }
    }
    getGuildId() {
        return m
    }
    getLastSelectedGuildId() {
        return g
    }
    getLastSelectedTimestamp(e) {
        return m === e ? h : E[e]
    }
}
_(C, "displayName", "SelectedGuildStore"), _(C, "persistKey", "SelectedGuildStore");
let N = new C(o.h, {
    CONNECTION_OPEN: y,
    OVERLAY_INITIALIZE: b,
    CHANNEL_SELECT: v,
    GUILD_MEMBER_REMOVE: S,
    GUILD_DELETE: I,
    LOGOUT: T
})