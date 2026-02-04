/** chunk id: 761640, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    Ay: () => J,
    JU: () => x,
    fe: () => S
});
var r, i = n(607399),
    a = n(311907),
    o = n(73153),
    s = n(49463),
    l = n(517381),
    c = n(940382),
    u = n(203982),
    d = n(661191),
    f = n(734057),
    p = n(71393),
    _ = n(576705),
    h = n(309010),
    m = n(967198),
    g = n(287809),
    E = n(652215),
    y = n(746080),
    b = n(818348);

function O(e, t, n) {
    return t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = n, e
}

function v(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
            return Object.getOwnPropertyDescriptor(n, e).enumerable
        }))), r.forEach(function(t) {
            O(e, t, n[t])
        })
    }
    return e
}

function A(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t && (r = r.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
        })), n.push.apply(n, r)
    }
    return n
}

function I(e, t) {
    return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : A(Object(t)).forEach(function(n) {
        Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
    }), e
}
let S = "message_requests",
    T = !1,
    C = !1,
    N = !0,
    w = {},
    R = {},
    P = !1,
    D = null;

function L(e) {
    if (null == e) return null;
    if ((0, y.jq)(e)) {
        let t = m.A.getGuildId();
        return null == t ? null : (0, y.Gr)(e, t)
    }
    return e
}

function x(e) {
    return [c.PE.VIEW_CHANNEL, c.PE.VIEW_THREAD, c.PE.VIEW_MESSAGE_REQUEST, c.PE.VIEW_MOD_REPORT].includes(e.type)
}

function M(e) {
    let t = !1;
    P && (P = !1, t = !0);
    let n = L(h.A.getChannelId());
    return null != n && n in w && (delete w[n], t = !0), t && e ? e : !e
}

function j() {
    P && u._.dispatch(E.jej.SEARCH_RESULTS_CLOSE), C && (C = M(C)), T = M(T)
}

function k() {
    T && (T = M(T)), C = M(C)
}

function U() {
    N || u._.dispatch(E.jej.SEARCH_RESULTS_CLOSE), N = M(N)
}

function G(e) {
    let {
        sidebarType: t,
        guildId: n,
        baseChannelId: r,
        details: i
    } = e;
    P = !1;
    let a = L(r);
    return null != a && (R[n] = {
        type: t,
        baseChannelId: a,
        guildId: n,
        details: i
    }, !0)
}

function V(e) {
    let {
        guildId: t
    } = e;
    return null != R[t] && (delete R[t], !0)
}

function F(e) {
    let {
        sidebarType: t,
        baseChannelId: n,
        channelId: r,
        details: i
    } = e;
    P = !1;
    let a = L(n);
    if (null == a) return !1;
    let o = {
        type: t,
        channelId: r,
        details: i
    };
    return t === c.PE.VIEW_MOD_REPORT && (o = I(v({}, o), {
        baseChannelId: n
    })), w[a] = o, !0
}

function B(e) {
    let {
        parentChannelId: t,
        parentMessageId: n,
        location: r
    } = e;
    P = !1;
    let i = L(t);
    null != i && (w[i] = {
        type: c.PE.CREATE_THREAD,
        parentChannelId: t,
        parentMessageId: n,
        location: r
    })
}

function H(e) {
    let {
        channel: t
    } = e;
    if (t.id in w) return delete w[t.id], !0;
    let n = !1;
    for (let e in w) {
        let r = w[e];
        null != r && r.type === c.PE.VIEW_CHANNEL && r.channelId === t.id && (delete w[e], n = !0)
    }
    return n
}

function Y(e) {
    let {
        channel: t
    } = e, n = w[t.parent_id];
    if (null == n || n.type !== c.PE.VIEW_THREAD || n.channelId !== t.id) return !1;
    delete w[t.parent_id]
}

function W(e) {
    var t;
    let {
        channel: n
    } = e;
    if (n.ownerId === (null == (t = g.default.getCurrentUser()) ? void 0 : t.id)) return !1;
    let r = w[n.parent_id];
    null != r && r.type === c.PE.CREATE_THREAD && r.parentMessageId === d.default.castChannelIdAsMessageId(n.id) && (w[n.parent_id] = {
        type: c.PE.VIEW_THREAD,
        channelId: n.id
    })
}

function K() {
    let e = !1;
    for (let t in w) {
        let n = w[t];
        if (n.type === c.PE.VIEW_THREAD || n.type === c.PE.VIEW_CHANNEL) {
            let r = f.A.getChannel(n.channelId);
            null != r && _.A.can(b.xB.VIEW_CHANNEL, r) || (delete w[t], e = !0)
        }
    }
    return e
}

function z(e) {
    let {
        baseChannelId: t
    } = e, n = L(t);
    null != n && delete w[n]
}

function q() {
    let e = null != D && l.A.hasSearchState(D);
    if (e === P) return !1;
    P = e
}

function Z() {
    i.Fr && T && (T = !1, C = !1)
}

function Q(e) {
    return D = e.searchContextId, q()
}
class X extends(r = a.Ay.PersistedStore) {
    initialize(e) {
        if (null != e) {
            var t, n, r, i, a;
            T = null != (t = e.isMembersOpen) && t, C = null != (n = e.isSummariesOpen) && n, N = null == (r = e.isProfileOpen) || r, w = null != (i = e.sidebars) ? i : {}, R = null != (a = e.guildSidebars) ? a : {}
        }
        this.syncWith([l.A], q), this.syncWith([_.A], K), this.waitFor(f.A, s.A, p.A, _.A, l.A, h.A, m.A, g.default)
    }
    getState() {
        return {
            isMembersOpen: T,
            isSummariesOpen: C,
            isProfileOpen: N,
            sidebars: w,
            guildSidebars: R
        }
    }
    getSection(e, t) {
        if (P) return E.YvQ.SEARCH;
        let n = L(e);
        return null != n && null != w[n] ? E.YvQ.SIDEBAR_CHAT : t && N ? E.YvQ.PROFILE : C ? E.YvQ.SUMMARIES : T ? E.YvQ.MEMBERS : E.YvQ.NONE
    }
    getSidebarState(e) {
        let t = L(e);
        return null == t ? void 0 : w[t]
    }
    getGuildSidebarState(e) {
        return null == e ? void 0 : R[e]
    }
    getCurrentSidebarChannelId(e) {
        let t = L(e);
        if (null == t || P) return null;
        let n = w[t];
        return null == n ? null : n.type === c.PE.VIEW_THREAD || n.type === c.PE.VIEW_CHANNEL || n.type === c.PE.VIEW_MOD_REPORT ? n.channelId : null
    }
    getCurrentSidebarMessageId(e) {
        var t;
        let n = L(e);
        if (null == n || P) return null;
        let r = w[n];
        return null == r ? null : r.type === c.PE.VIEW_THREAD || r.type === c.PE.VIEW_CHANNEL || r.type === c.PE.VIEW_MOD_REPORT ? null == (t = r.details) ? void 0 : t.initialMessageId : null
    }
    getCurrentSearchContextId() {
        return D
    }
}
O(X, "displayName", "ChannelSectionStore"), O(X, "persistKey", "ChannelSectionStore2");
let J = new X(o.h, {
    SIDEBAR_SET_SELECTED_SEARCH_CONTEXT: Q,
    CHANNEL_TOGGLE_MEMBERS_SECTION: j,
    USER_PROFILE_SIDEBAR_TOGGLE_SECTION: U,
    CHANNEL_TOGGLE_SUMMARIES_SECTION: k,
    SIDEBAR_VIEW_CHANNEL: F,
    SIDEBAR_VIEW_GUILD: G,
    SIDEBAR_CREATE_THREAD: B,
    SIDEBAR_CLOSE: z,
    SIDEBAR_CLOSE_GUILD: V,
    CHANNEL_DELETE: H,
    CHANNEL_SELECT: Z,
    THREAD_CREATE: W,
    THREAD_DELETE: Y
})