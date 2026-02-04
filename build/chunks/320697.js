/** chunk id: 320697, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => ey
}), n(114821), n(339614), n(321073), n(896048), n(638769), n(839272);
var r, i = n(284009),
    a = n.n(i),
    o = n(311907),
    s = n(73153),
    l = n(323073),
    c = n(141468),
    u = n(187508),
    d = n(863005),
    f = n(152007),
    p = n(607508),
    _ = n(95701),
    h = n(383233),
    m = n(734057),
    g = n(808728),
    E = n(320501),
    y = n(222823),
    b = n(711014),
    O = n(543465),
    v = n(287809),
    A = n(661191),
    I = n(851109),
    S = n(394953),
    T = n(28156),
    C = n(849077),
    N = n(652215),
    w = n(37411);

function R(e, t, n) {
    return t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = n, e
}
let P = {},
    D = null,
    L = [],
    x = new T.A,
    M = !1,
    j = !1,
    k = !1,
    U = !1,
    G = A.default.fromTimestamp(Date.now()),
    V = !0,
    F = null,
    B = null,
    H = !0;

function Y() {
    let e = b.Ay.getFlattenedGuildIds().flatMap(e => g.Ay.getSelectableChannelIds(e)),
        t = d.A.getAllActiveJoinedThreads(),
        n = e => !(!N.kvI.GUILD_TEXTUAL.has(e.type) || (0, l.UK)(e.id)) && ((0, _.fT)(e.type) ? (0, p.l)(e) === w.CP.ALL_MESSAGES && !f.A.isMuted(e.id) : O.Ay.allowAllMessages(e)),
        r = [];
    for (let t of e) {
        let e = m.A.getBasicChannel(t);
        null != e && n(e) && r.push(e)
    }
    for (let e in t)
        for (let i in t[e])
            for (let a in t[e][i]) {
                let e = m.A.getBasicChannel(a);
                null != e && n(e) && r.push(e)
            }
    return r.map(e => e.id).sort((e, t) => {
        let n = y.Ay.hasUnread(e);
        return n !== y.Ay.hasUnread(t) ? n ? -1 : 1 : A.default.compare(y.Ay.lastMessageId(t), y.Ay.lastMessageId(e))
    }).reduce((e, t) => (y.Ay.lastMessageTimestamp(t) > Date.now() - C.V$ ? e.notifyingChannelIds.push(t) : e.staleChannelIds.push(t), e), {
        notifyingChannelIds: [],
        staleChannelIds: []
    })
}

function W(e) {
    var t;
    if (!E.A.isReady(e)) return;
    let n = m.A.getBasicChannel(e),
        r = E.A.getMessages(e);
    if (r.hasPresent() && 0 !== r.length) return x.addChannelMessages({
        channel: n,
        channelMessages: r,
        userId: null == (t = v.default.getCurrentUser()) ? void 0 : t.id
    }), r
}

function K() {
    if (null == D) {
        G = A.default.fromTimestamp(Date.now());
        return
    }
    for (let e of D.toSorted((e, t) => A.default.compare(y.Ay.lastMessageId(t), y.Ay.lastMessageId(e)))) {
        let t = P[e];
        if (t.loadState === C.Ve.UNLOADED && null != t.mostRecentMessageId) {
            G = t.mostRecentMessageId;
            return
        }
    }
    G = "0"
}

function z() {
    let {
        notifyingChannelIds: e,
        staleChannelIds: t
    } = Y();
    D = e, L = t, a()(null != D, "notifyingChannelIds should not be null");
    let n = D.filter(e => null == P[e]),
        r = Object.keys(P).filter(e => !(null == D ? void 0 : D.includes(e)));
    if (0 !== D.length && 0 === n.length && 0 === r.length) return !1;
    for (let e of r) delete P[e];
    for (let e of n)
        if (P[e] = {
                loadState: C.Ve.UNLOADED,
                mostRecentMessageId: y.Ay.lastMessageId(e)
            }, E.A.isReady(e)) {
            let t = W(e);
            if (null != t) {
                var i, o;
                P[e].loadState = C.Ve.LOADED, P[e].mostRecentMessageId = null != (i = null == (o = t.last()) ? void 0 : o.id) ? i : P[e].mostRecentMessageId
            }
        } x.updateChannelIds(D), K()
}

function q() {
    P = {}, D = null, L = [], x = new T.A, M = !1, j = !1, k = !1, G = A.default.fromTimestamp(Date.now()), V = !0, U = !1, B = null, F = null
}

function Z() {
    var e, t, n;
    for (let e of (z(), null != D ? D : [])) {
        let r = W(e);
        null != r && (P[e].loadState = C.Ve.LOADED, P[e].mostRecentMessageId = null != (t = null == (n = r.last()) ? void 0 : n.id) ? t : null, K())
    }
    let r = null != (e = u.Ay.getSettingsFilteredMentions()) ? e : [];
    x.addMessages(r.map(e => {
        var t;
        return {
            id: e.id,
            channelId: e.channel_id,
            guildId: null == (t = m.A.getBasicChannel(e.channel_id)) ? void 0 : t.guild_id,
            kind: C.yL.MENTION,
            message: e
        }
    }))
}

function Q() {
    q(), Z()
}

function X() {
    q()
}

function J(e) {
    if (e instanceof h.Ay) return e;
    let t = E.A.getMessage(e.channel_id, e.id);
    return null != t ? t : (0, c.rh)(e)
}

function $(e) {
    var t, n, r;
    let {
        channelId: i,
        message: a
    } = e;
    if (null == D || (null == (t = a.author) ? void 0 : t.id) === (null == (n = v.default.getCurrentUser()) ? void 0 : n.id)) return !1;
    let o = D.includes(i);
    if ((0, l.UK)(i)) return !1;
    let s = J(a),
        c = s.mentioned;
    if (!o && !c) {
        if (!L.includes(i)) return !1;
        z()
    }
    if (!o && c && !(0, u.pK)(s)) return !1;
    x.addMessage({
        id: a.id,
        channelId: a.channel_id,
        guildId: null == (r = m.A.getBasicChannel(a.channel_id)) ? void 0 : r.guild_id,
        kind: c ? C.yL.MENTION : C.yL.ALL_MESSAGES_CHANNEL,
        message: s
    })
}

function ee(e) {
    let {
        channelId: t
    } = e;
    if (!(null == D ? void 0 : D.includes(t))) return !1;
    let n = W(t);
    if (null == n) return !1;
    let r = n.length >= C.EM || n.hasFetched && !n.hasMoreBefore;
    P[t].loadState !== C.Ve.LOADED && (P[t].loadState = r ? C.Ve.LOADED : C.Ve.LOADED_UNREAD), K()
}

function et(e) {
    let {
        messages: t
    } = e;
    if (0 === t.length) return !1;
    let n = u.Ay.getSettingsFilteredMentions();
    if (null == n || 0 === n.length) return !1;
    x.addMessages(n.map(e => {
        var t;
        return {
            id: e.id,
            channelId: e.channel_id,
            guildId: null == (t = m.A.getBasicChannel(e.channel_id)) ? void 0 : t.guild_id,
            kind: C.yL.MENTION,
            message: e
        }
    }))
}

function en(e) {
    let {
        id: t
    } = e;
    return x.deleteMessages([t])
}

function er(e) {
    let {
        ids: t
    } = e;
    return x.deleteMessages(t)
}

function ei() {
    M = !0
}

function ea(e) {
    let {
        preload: t,
        hasMoreToLoad: n,
        analyticsPayload: r
    } = e;
    M = !1, t ? U = !0 : (null != n && (V = n), k = !0), B = null != r ? r : null
}

function eo(e) {
    var t;
    let {
        preload: n
    } = e;
    return null != (null == (t = (0, I.GE)({
        location: "NotificationsInboxStore.canLoadMore",
        autoTrackExposure: !1
    })) ? void 0 : t.notificationCenterVariant) && null != D && !M && !j && (!n || !U) && V
}

function es() {
    M = !1, B = null, j = !0
}

function el(e) {
    let {
        messageId: t,
        channelId: n,
        isUnread: r
    } = e, i = (0, I.GE)({
        location: "handleInboxItemClick"
    }).notificationCenterVariant;
    F = r && i === I.U5.SIDEBAR ? {
        channelId: n,
        messageId: t
    } : null
}

function ec(e) {
    let {
        channelId: t,
        messageId: n
    } = e;
    (0, S.zo)({
        channelId: t,
        id: n
    }, F) && (F = null)
}

function eu() {
    j = !1
}

function ed() {
    F = null
}

function ef(e) {
    let {
        channel: t
    } = e;
    if (O.Ay.allowNoMessages(t)) return !1;
    Q()
}

function ep(e) {
    var t;
    let {
        userId: n
    } = e;
    if (n !== (null == (t = v.default.getCurrentUser()) ? void 0 : t.id)) return !1;
    Q()
}

function e_(e) {
    var t;
    let {
        id: n,
        addedMembers: r,
        removedMemberIds: i
    } = e, a = null == (t = v.default.getCurrentUser()) ? void 0 : t.id;
    if (null == a) return !1;
    if (null == r ? void 0 : r.some(e => e.userId === a)) {
        let e = m.A.getBasicChannel(n);
        return !(null == e || f.A.isMuted(n)) && (0, p.l)(e) !== w.CP.NO_MESSAGES && void Q()
    }
    return null != i && !!i.includes(a) && void Q()
}

function eh(e) {
    let {
        channel: t
    } = e;
    if (!x.getMessages().some(e => e.channelId === t.id)) return !1;
    Q()
}

function em(e) {
    let {
        guild: t
    } = e;
    if (!x.getMessages().some(e => e.guildId === t.id)) return !1;
    Q()
}

function eg(e) {
    let {
        navOnClick: t
    } = e;
    H = null == t || t
}
class eE extends(r = o.Ay.Store) {
    initialize() {
        this.waitFor(d.A, m.A, g.Ay, f.A, E.A, y.Ay, u.Ay, b.Ay, O.Ay, v.default)
    }
    canLoadMore(e) {
        let {
            preload: t
        } = e;
        return eo({
            preload: t
        })
    }
    getInboxMessages() {
        return x.getMessages()
    }
    getNotifyingChannelIds() {
        return D
    }
    getChannelInfoMap() {
        return P
    }
    get oldestDisplayedMessageId() {
        return G
    }
    get hasMoreToLoad() {
        return V
    }
    get isLoading() {
        return M
    }
    get hasLoadedEver() {
        return k
    }
    get hasPreloaded() {
        return U
    }
    get isLoadingComplete() {
        return !M && !V
    }
    get selectedItemInfo() {
        return F
    }
    get currentRequestAnalyticsPayload() {
        return B
    }
    getDevOverrides() {
        return {
            navOnClick: H
        }
    }
}
R(eE, "displayName", "NotificationsInboxStore");
let ey = new eE(s.h, {
    LOAD_RECENT_MENTIONS_SUCCESS: et,
    LOAD_MESSAGES_SUCCESS: ee,
    MESSAGE_CREATE: $,
    MESSAGE_DELETE: en,
    RECENT_MENTION_DELETE: en,
    MESSAGE_DELETE_BULK: er,
    CONNECTION_OPEN: Q,
    LOGOUT: X,
    USER_GUILD_SETTINGS_CHANNEL_UPDATE_BULK: Q,
    USER_GUILD_SETTINGS_GUILD_AND_CHANNELS_UPDATE: Q,
    GUILD_CREATE: Q,
    USER_GUILD_SETTINGS_GUILD_UPDATE: Q,
    USER_GUILD_SETTINGS_CHANNEL_UPDATE: Q,
    CHANNEL_CREATE: ef,
    GUILD_DELETE: em,
    THREAD_DELETE: eh,
    CHANNEL_DELETE: eh,
    THREAD_MEMBER_UPDATE: ep,
    THREAD_MEMBERS_UPDATE: e_,
    NOTIFICATIONS_INBOX_OPEN: eu,
    NOTIFICATIONS_INBOX_LOAD_MORE_INBOX_START: ei,
    NOTIFICATIONS_INBOX_LOAD_MORE_INBOX_SUCCESS: ea,
    NOTIFICATIONS_INBOX_LOAD_MORE_INBOX_FAILURE: es,
    NOTIFICATIONS_INBOX_ITEM_CLICK: el,
    NOTIFICATIONS_INBOX_ITEM_ACK: ec,
    NOTIFICATIONS_INBOX_CLOSE: ed,
    NOTIFICATIONS_INBOX_SET_DEV_OVERRIDES: eg
})