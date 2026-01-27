/** Chunk was on web.js **/
/** chunk id: 581381, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    Ay: () => es,
    MX: () => D
}), n(896048);
var r = n(294845),
    i = n.n(r),
    a = n(543222),
    o = n.n(a),
    s = n(731738),
    l = n(73153),
    c = n(439372),
    u = n(141468),
    d = n(831062),
    f = n(9842),
    p = n(961350),
    _ = n(761640),
    h = n(734057),
    m = n(320501),
    g = n(309010),
    E = n(967198),
    y = n(661191),
    b = n(789846),
    O = n(135598),
    v = n(930125),
    A = n(390248),
    I = n(457699),
    S = n(811602),
    T = n(282108),
    C = n(797019),
    N = n(493364),
    w = n(652215),
    R = n(355097);

function P(e, t, n) {
    return t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = n, e
}
let D = 3e3,
    L = 800,
    x = {};

function M(e) {
    return "".concat(e.channel_id, ":").concat(e.id)
}

function j() {
    Object.values(x).forEach(e => {
        let {
            timeout: t
        } = e;
        clearTimeout(t)
    }), x = {}
}

function k(e, t) {
    if (null == e.id || null == e.channel_id) return !1;
    let n = M(e);
    if (null != x[n]) {
        let {
            timeout: r,
            setAt: i
        } = x[n];
        return U(e, t, i), clearTimeout(r), delete x[n], !0
    }
    return !1
}

function U(e, t, n) {
    if (t === A.VL.UPDATE) {
        var r, i;
        let t = null != (r = e.attachments) ? r : [],
            n = null != (i = e.embeds) ? i : [],
            a = t.filter(e => (0, T.gh)(S.kn.EXPLICIT, {
                type: v.D.Attachment,
                media: e
            })),
            o = n.filter(e => (0, T.gh)(S.kn.EXPLICIT, {
                type: v.D.Embed,
                media: e
            }));
        (0, A.Kl)({
            messageId: e.id,
            channelId: e.channel_id,
            numOfAttachments: t.length,
            numOfEmbeds: n.length,
            numOfExplicitAttachments: a.length,
            numOfExplicitEmbeds: o.length
        })
    }(0, A.rA)(n, t)
}

function G(e) {
    if (k(e, A.VL.TIMEOUT)) {
        let t = m.A.getMessage(e.channel_id, e.id);
        if (null != t) {
            let {
                attachmentIds: n,
                embedIds: r
            } = (0, T.M)(t);
            (0, A.gm)({
                channelId: e.channel_id,
                messageId: e.id,
                attachmentIds: n,
                embedIds: r
            })
        }
        l.h.dispatch({
            type: "MESSAGE_EXPLICIT_CONTENT_SCAN_TIMEOUT",
            messageId: e.id,
            channelId: e.channel_id
        })
    }
}
let F = (e, t) => {
    if (0 !== e.length) {
        if (t) return void(0, O.jd)(e);
        (0, O.j1)(e[0].channel_id, e.map(e => e.id))
    }
};

function V(e) {
    return null == x[M(e)]
}

function B(e, t) {
    let {
        forceBatchScan: n = !1,
        jitter: r = !1
    } = null != t ? t : {}, i = (null == t ? void 0 : t.isMessageUpdate) ? e.filter(e => (0, T.s9)(e) && (0, T.mS)(e)).filter(V) : e.filter(e => (0, T.s9)(e)).filter(V);
    i.forEach(e => {
        let t = M(e);
        null == x[t] && (d.A.increment({
            name: s.K.EXPLICIT_MEDIA_SCAN_CLIENT_TIMEOUT_CREATE
        }), x[t] = {
            setAt: Date.now(),
            timeout: setTimeout(() => {
                G(e)
            }, D)
        })
    });
    let a = n || new Set(i.map(e => e.channel_id)).size > 1;
    r ? setTimeout(() => {
        F(i.filter(e => null != x[M(e)]), a)
    }, Math.random() * L) : F(i, a)
}

function H(e) {
    let t = {},
        n = {};
    return e.forEach(e => {
        var r, i, a, o, s, l, c, u, d, f, p, _, h, m, g, E;
        null == t[e.channel_id] && (t[e.channel_id] = {
            numOfAttachments: 0,
            numOfAttachmentsPendingScan: 0,
            numOfEmbeds: 0,
            numOfEmbedsPendingScan: 0
        }), null == n[e.id] && (n[e.id] = {
            channelId: e.channel_id,
            numOfAttachments: 0,
            numOfSelfHarmAttachments: 0,
            numOfGoreAttachments: 0,
            numOfExplicitAttachments: 0,
            numOfEmbeds: 0,
            numOfSelfHarmEmbeds: 0,
            numOfGoreEmbeds: 0,
            numOfExplicitEmbeds: 0
        });
        let y = null != (r = null == (d = e.attachments) ? void 0 : d.length) ? r : 0,
            b = null != (i = null == (f = e.embeds) ? void 0 : f.length) ? i : 0,
            {
                attachmentIds: O,
                embedIds: A
            } = (0, T.M)(e),
            I = t[e.channel_id];
        I.numOfAttachments += y, I.numOfEmbeds += b, I.numOfAttachmentsPendingScan += O.length, I.numOfEmbedsPendingScan += A.length;
        let C = n[e.id];
        C.numOfAttachments += y, C.numOfEmbeds += b, C.numOfExplicitAttachments = null != (a = null == (p = e.attachments) ? void 0 : p.filter(e => (0, T.gh)(S.kn.EXPLICIT, {
            type: v.D.Attachment,
            media: e
        })).length) ? a : 0, C.numOfExplicitEmbeds = null != (o = null == (_ = e.embeds) ? void 0 : _.filter(e => (0, T.gh)(S.kn.EXPLICIT, {
            type: v.D.Embed,
            media: e
        })).length) ? o : 0, C.numOfGoreAttachments = null != (s = null == (h = e.attachments) ? void 0 : h.filter(e => (0, T.gh)(S.kn.GORE, {
            type: v.D.Attachment,
            media: e
        })).length) ? s : 0, C.numOfGoreEmbeds = null != (l = null == (m = e.embeds) ? void 0 : m.filter(e => (0, T.gh)(S.kn.GORE, {
            type: v.D.Embed,
            media: e
        })).length) ? l : 0, C.numOfSelfHarmAttachments = null != (c = null == (g = e.attachments) ? void 0 : g.filter(e => (0, T.gh)(S.kn.SELF_HARM, {
            type: v.D.Attachment,
            media: e
        })).length) ? c : 0, C.numOfSelfHarmEmbeds = null != (u = null == (E = e.embeds) ? void 0 : E.filter(e => (0, T.gh)(S.kn.SELF_HARM, {
            type: v.D.Embed,
            media: e
        })).length) ? u : 0
    }), {
        channelLookup: t,
        messageLookup: n
    }
}

function Y(e) {
    function t(e) {
        return null != e
    }
    let n = e.filter(e => {
            let t = (0, b.b)(e),
                n = 0 !== (0, T.Fg)(e);
            return t && n
        }),
        r = e.map(e => {
            if (null != e && "referenced_message" in e && null != e.referenced_message && (0, b.b)(e.referenced_message) && 0 !== (0, T.Fg)(e.referenced_message)) return e.referenced_message
        }).filter(t);
    r.length > 0 && (n = [...n, ...r]);
    let i = o()(n, (e, t) => e.id === t.id && e.channel_id === t.channel_id),
        a = i.filter(e => (0, T.mS)(e)),
        s = H(i);
    return {
        messagesPendingScan: a,
        attributesByMessageId: s.messageLookup,
        attributesByChannelId: s.channelLookup
    }
}

function W(e) {
    function t(e) {
        return null != e
    }
    let n = e.filter(e => (0, b.b)(e) && 0 !== (0, T.Fg)(e)),
        r = e.map(e => {
            if (w.sl8.has(e.type) && null != e.messageReference) {
                let t = f.A.getMessageByReference(e.messageReference);
                if (t.state === f.a.LOADED && null != t.message && (0, b.b)(t.message) && 0 !== (0, T.Fg)(t.message)) return t.message
            }
        }).filter(t);
    r.length > 0 && (n = [...n, ...r]);
    let i = o()(n, (e, t) => e.id === t.id && e.channel_id === t.channel_id),
        a = i.filter(e => (0, T.mS)(e)),
        s = H(i);
    return {
        messagesPendingScan: a,
        attributesByChannelId: s.channelLookup,
        attributesByMessageId: s.messageLookup
    }
}

function K(e, t) {
    let {
        messagesPendingScan: n,
        attributesByChannelId: r,
        attributesByMessageId: i
    } = Y(e);
    return y.default.entries(r).forEach(e => {
        let [t, n] = e;
        (0, A.zt)({
            channelId: t,
            numOfAttachments: n.numOfAttachments,
            numOfAttachmentsPendingScan: n.numOfAttachmentsPendingScan,
            numOfEmbeds: n.numOfEmbeds,
            numOfEmbedsPendingScan: n.numOfEmbedsPendingScan
        })
    }), (0, C.y)() && y.default.entries(i).forEach(e => {
        let [t, n] = e;
        (0, A.bz)({
            messageId: t,
            channelId: n.channelId,
            numOfAttachments: n.numOfAttachments,
            numOfGoreAttachments: n.numOfGoreAttachments,
            numOfExplicitAttachments: n.numOfExplicitAttachments,
            numOfSelfHarmAttachments: n.numOfSelfHarmAttachments,
            numOfEmbeds: n.numOfEmbeds,
            numOfGoreEmbeds: n.numOfGoreEmbeds,
            numOfExplicitEmbeds: n.numOfExplicitEmbeds,
            numOfSelfHarmEmbeds: n.numOfSelfHarmEmbeds
        })
    }), n.length > 0 && (B(n, t), !0)
}

function z(e) {
    let {
        messagesPendingScan: t,
        attributesByChannelId: n,
        attributesByMessageId: r
    } = W(e);
    return y.default.entries(n).forEach(e => {
        let [t, n] = e;
        (0, A.zt)({
            channelId: t,
            numOfAttachments: n.numOfAttachments,
            numOfAttachmentsPendingScan: n.numOfAttachmentsPendingScan,
            numOfEmbeds: n.numOfEmbeds,
            numOfEmbedsPendingScan: n.numOfEmbedsPendingScan
        })
    }), (0, C.y)() && y.default.entries(r).forEach(e => {
        let [t, n] = e;
        (0, A.bz)({
            messageId: t,
            channelId: n.channelId,
            numOfAttachments: n.numOfAttachments,
            numOfGoreAttachments: n.numOfGoreAttachments,
            numOfSelfHarmAttachments: n.numOfSelfHarmAttachments,
            numOfExplicitAttachments: n.numOfExplicitAttachments,
            numOfEmbeds: n.numOfEmbeds,
            numOfGoreEmbeds: n.numOfGoreEmbeds,
            numOfExplicitEmbeds: n.numOfExplicitEmbeds,
            numOfSelfHarmEmbeds: n.numOfSelfHarmEmbeds
        })
    }), t.length > 0 && (B(t), !0)
}

function q(e) {
    var t, n, r, i, a, o;
    let {
        message: s
    } = e;
    if (null == s.channel_id || null == s.id || (null == (t = s.author) ? void 0 : t.id) === p.default.getId() || null == s.embeds && null == s.attachments && !(0, A.aY)(s) || (null == (n = s.embeds) ? void 0 : n.length) === 0 && (null == (r = s.attachments) ? void 0 : r.length) === 0 && !(0, A.aY)(s)) return !1;
    if (!(0, T.mS)(s)) {
        let e = null != (i = null != (a = m.A.getMessage(s.channel_id, s.id)) ? a : I.A.getMessage(s.id, s.channel_id)) ? i : null == (o = f.A.getMessage(s.channel_id, s.id)) ? void 0 : o.message;
        null == e || (0, T.mS)((0, u.IU)(e, s)) || k(e, A.VL.UPDATE)
    }
    let l = g.A.getChannelId(),
        c = _.Ay.getCurrentSidebarChannelId(l);
    if (s.channel_id !== l && s.channel_id !== c) return !1;
    let d = m.A.getMessage(s.channel_id, s.id);
    return null != d && K([d], {
        isMessageUpdate: !0
    })
}

function Z(e) {
    var t, n;
    let {
        channelId: r,
        message: i,
        optimistic: a,
        isPushNotification: o
    } = e;
    if (a || o || null == r || (null == (n = i.author) ? void 0 : n.id) === p.default.getId()) return !1;
    let s = g.A.getChannelId(),
        l = _.Ay.getCurrentSidebarChannelId(s),
        c = r === s || r === l,
        u = h.A.getChannel(r);
    if (!c) return !1;
    let d = null == (t = null == u ? void 0 : u.isPrivate()) || t,
        f = (null == u ? void 0 : u.memberCount) == null || (null == u ? void 0 : u.memberCount) > 100;
    return K([i], {
        jitter: d && f
    })
}

function Q(e) {
    let {
        channelId: t,
        messages: n
    } = e;
    if (null == t || null == n) return !1;
    let r = g.A.getChannelId(),
        i = _.Ay.getCurrentSidebarChannelId(r);
    return (t === r || t === i) && K(n)
}

function X(e) {
    let {
        data: t
    } = e, n = !1;
    return t.forEach(e => {
        let {
            messages: t
        } = e, r = i()(t);
        n = K(o()(r, (e, t) => e.id === t.id && e.channel_id === t.channel_id)) || n
    }), n
}

function J(e) {
    let {
        pins: t
    } = e;
    return K(t.map(e => {
        let {
            message: t
        } = e;
        return t
    }))
}

function $(e) {
    let {
        guildId: t,
        threads: n
    } = e;
    return null != n && E.A.getGuildId() === t && K(y.default.keys(n).map(e => n[e].first_message))
}

function ee(e) {
    let {
        guildId: t,
        firstMessages: n
    } = e;
    return null != n && E.A.getGuildId() === t && K(n, {
        forceBatchScan: !0
    })
}

function et(e) {
    let {
        channelId: t
    } = e;
    return null != t && ea(t)
}

function en(e) {
    let {
        channelId: t
    } = e;
    return (0, N.B)(), null != t && t === g.A.getChannelId() && ea(t)
}

function er(e) {
    let {
        settings: t,
        local: n
    } = e;
    if (!n || t.type !== R.oD.PRELOADED_USER_SETTINGS) return !1;
    let r = g.A.getChannelId();
    return null != r && ea(r)
}

function ei(e) {
    let {
        channelId: t,
        chatOpen: n
    } = e;
    return !!n && ea(t)
}

function ea(e) {
    let t = m.A.getMessages(e);
    return 0 !== t.length && z(t)
}
class eo extends c.A {
    constructor(...e) {
        super(...e), P(this, "actions", {
            LOAD_MESSAGES_SUCCESS: Q,
            LOAD_FORUM_POSTS: $,
            LOAD_THREADS_SUCCESS: ee,
            LOAD_ARCHIVED_THREADS_SUCCESS: ee,
            SIDEBAR_VIEW_CHANNEL: et,
            MESSAGE_CREATE: Z,
            MESSAGE_UPDATE: q,
            LOGOUT: j,
            SEARCH_MESSAGES_SUCCESS: X,
            MOD_VIEW_SEARCH_MESSAGES_SUCCESS: X,
            CHANNEL_SELECT: en,
            LOAD_PINNED_MESSAGES_SUCCESS: J,
            USER_SETTINGS_PROTO_UPDATE: er,
            CHANNEL_RTC_UPDATE_CHAT_OPEN: ei
        })
    }
}
let es = new eo