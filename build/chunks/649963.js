/** chunk id: 649963, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    BB: () => R,
    Go: () => D,
    Jf: () => L,
    ao: () => w,
    et: () => x,
    on: () => P,
    qN: () => I
});
var r = n(562465),
    i = n(582754),
    a = n(73153),
    o = n(157559),
    s = n(58149),
    l = n(505527),
    c = n(867455),
    u = n(961350),
    d = n(734057),
    f = n(320501),
    p = n(954571),
    _ = n(203982),
    h = n(927813),
    m = n(690521),
    g = n(300703),
    E = n(652215),
    y = n(985018);

function b(e, t, n) {
    return t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = n, e
}

function O(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
            return Object.getOwnPropertyDescriptor(n, e).enumerable
        }))), r.forEach(function(t) {
            b(e, t, n[t])
        })
    }
    return e
}

function v(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t && (r = r.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
        })), n.push.apply(n, r)
    }
    return n
}

function A(e, t) {
    return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : v(Object(t)).forEach(function(n) {
        Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
    }), e
}
var I = function(e) {
    return e.MESSAGE = "Message", e.FORUM_TOOLBAR = "Forum Toolbar", e.MOBILE_MEDIA_VIEWER = "Mobile Media Viewer", e.MESSAGE_HOVER_BAR = "Message Hover Bar", e.MESSAGE_INLINE_BUTTON = "Message Inline Button", e.MESSAGE_CONTEXT_MENU = "Message Context Menu", e.MESSAGE_REACTION_PICKER = "Message Reaction Picker", e.MESSAGE_SHORTCUT = "Message Shortcut", e.DOUBLE_TAP = "Double Tap", e
}({});

function S(e, t, n) {
    let {
        headers: r,
        status: i,
        body: a
    } = e;
    if (429 === i) {
        if (n.isRetry) return !0;
        let e = parseInt(r["retry-after"]);
        return isNaN(e) || setTimeout(t, e * h.A.Millis.SECOND), !1
    }
    if (403 === i) switch (a && a.code) {
        case E.t02.TOO_MANY_REACTIONS:
            o.A.show({
                title: y.intl.string(y.t.lFddsR),
                body: y.intl.string(y.t.h27eIm),
                confirmText: y.intl.string(y.t.BddRzS)
            });
            break;
        case E.t02.REACTION_BLOCKED:
            _._.dispatch(E.jej.SHAKE_APP, {
                duration: 200,
                intensity: 2
            })
    } else if (!n.isRetry) return t(), !1;
    return !0
}

function T(e, t, n, r, i) {
    var o, s;
    a.h.dispatch({
        type: e,
        channelId: t,
        messageId: n,
        userId: null != (o = null == i ? void 0 : i.userId) ? o : u.default.getId(),
        emoji: r,
        optimistic: !0,
        colors: null != (s = null == i ? void 0 : i.colors) ? s : [],
        reactionType: (null == i ? void 0 : i.burst) ? l.v.BURST : l.v.NORMAL
    })
}

function C(e) {
    let {
        channelId: t,
        messageId: n,
        emoji: r,
        userId: i,
        useTypeEndpoint: a = !1,
        type: o = l.v.NORMAL
    } = e, s = null != r.id ? "".concat(r.name, ":").concat(r.id) : r.name;
    return null == i ? E.Rsh.REACTIONS(t, n, s) : a ? E.Rsh.REACTION_WITH_TYPE(t, n, s, i, o) : E.Rsh.REACTION(t, n, s, i)
}

function N(e, t, n) {
    var r;
    let i = null != (r = n.id) ? r : n.name;
    return E.Rsh.POLL_ANSWER_VOTERS(e, t, i)
}
async function w(e) {
    let {
        channelId: t,
        messageId: n,
        emoji: i,
        limit: o,
        after: s,
        type: c
    } = e, u = c === l.v.VOTE ? N(t, n, i) : C({
        channelId: t,
        messageId: n,
        emoji: i
    }), d = await r.Bo.get({
        url: u,
        query: {
            limit: o,
            after: s,
            type: c
        },
        oldFormErrors: !0,
        rejectWithError: !1
    }), f = c === l.v.VOTE ? d.body.users : d.body;
    return a.h.dispatch({
        type: "MESSAGE_REACTION_ADD_USERS",
        channelId: t,
        messageId: n,
        users: f,
        emoji: i,
        reactionType: c
    }), f
}
async function R(e, t, n) {
    let a = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "Message",
        u = arguments.length > 4 ? arguments[4] : void 0,
        f = null != u && !!u.burst,
        _ = null != u && !!u.isRetry;
    if (!_ && j(e, t, n, f)) return void o.A.show({
        title: y.intl.string(y.t["uaUU/g"]),
        body: y.intl.string(y.t.psMorl),
        confirmText: y.intl.string(y.t["NX+WJN"])
    });
    let h = await M(n, f);
    return T("MESSAGE_REACTION_ADD", e, t, n, {
        burst: f,
        colors: h
    }), await c.A.unarchiveThreadIfNecessary(e), r.Bo.put({
        url: C({
            channelId: e,
            messageId: t,
            emoji: n,
            userId: "@me"
        }),
        query: {
            location: a,
            type: f ? l.v.BURST : l.v.NORMAL
        },
        oldFormErrors: !0,
        rejectWithError: !1
    }).then(() => {
        if ("Message Shortcut" === a) {
            var r;
            let i = d.A.getChannel(e);
            p.default.track(E.HAw.MESSAGE_SHORTCUT_ACTION_SENT, O({
                channel_id: e,
                guild_id: null == i ? void 0 : i.guild_id,
                original_message_id: t,
                emoji_id: null != (r = n.id) ? r : n.name,
                action: "react"
            }, (0, s.H$)(null == i ? void 0 : i.guild_id), (0, s.dI)(i)))
        }
        f ? (i.OR.announce(y.intl.formatToPlainString(y.t["RJlG+R"], {
            name: n.name
        })), g.A.triggerFullscreenAnimation({
            channelId: e,
            messageId: t,
            emoji: A(O({}, n), {
                animated: !1
            })
        })) : i.OR.announce(y.intl.formatToPlainString(y.t.ol4acF, {
            name: n.name
        }))
    }).catch(r => {
        S(r, () => R(e, t, n, a, {
            burst: f,
            isRetry: !0
        }), {
            isRetry: _
        }) && (T("MESSAGE_REACTION_REMOVE", e, t, n, {
            burst: f
        }), f ? i.OR.announce(y.intl.formatToPlainString(y.t.fJeu87, {
            name: n.name
        })) : i.OR.announce(y.intl.formatToPlainString(y.t["UUn5V+"], {
            name: n.name
        })))
    })
}

function P(e) {
    let {
        channelId: t,
        messageId: n,
        emoji: r,
        key: i
    } = e;
    a.h.dispatch({
        type: "BURST_REACTION_EFFECT_PLAY",
        channelId: t,
        messageId: n,
        emoji: r,
        key: i
    })
}
async function D(e, t, n) {
    let i = null != n && !!n.isRetry;
    await c.A.unarchiveThreadIfNecessary(e), r.Bo.del({
        url: E.Rsh.REMOVE_REACTIONS(e, t),
        oldFormErrors: !0,
        rejectWithError: !1
    }).catch(n => {
        S(n, () => D(e, t, {
            isRetry: !0
        }), {
            isRetry: i
        })
    })
}
async function L(e, t, n, i) {
    let a = null != i && !!i.isRetry;
    await c.A.unarchiveThreadIfNecessary(e);
    let o = null === n.id ? n.name : "".concat(n.name, ":").concat(n.id);
    r.Bo.del({
        url: E.Rsh.REMOVE_EMOJI_REACTIONS(e, t, o),
        oldFormErrors: !0,
        rejectWithError: !1
    }).catch(r => {
        S(r, () => L(e, t, n, {
            isRetry: !0
        }), {
            isRetry: a
        })
    })
}
async function x(e) {
    let {
        channelId: t,
        messageId: n,
        emoji: a,
        location: o = "Message",
        userId: s,
        options: u
    } = e, d = null != u && !!u.burst, f = null != u && !!u.isRetry;
    T("MESSAGE_REACTION_REMOVE", t, n, a, {
        userId: s,
        burst: d
    }), await c.A.unarchiveThreadIfNecessary(t), r.Bo.del({
        url: C({
            channelId: t,
            messageId: n,
            emoji: a,
            userId: null != s ? s : "@me",
            type: d ? l.v.BURST : l.v.NORMAL,
            useTypeEndpoint: !0
        }),
        query: {
            location: o,
            burst: d
        },
        oldFormErrors: !0,
        rejectWithError: !1
    }).then(() => {
        (null == u ? void 0 : u.burst) ? i.OR.announce(y.intl.formatToPlainString(y.t["3l9f6u"], {
            name: a.name
        })): i.OR.announce(y.intl.formatToPlainString(y.t["DQxi+7"], {
            name: a.name
        }))
    }).catch(async e => {
        if (S(e, () => x({
                channelId: t,
                messageId: n,
                emoji: a,
                location: o,
                userId: s,
                options: {
                    burst: d,
                    isRetry: !0
                }
            }), {
                isRetry: f
            })) {
            let e = await M(a, d);
            T("MESSAGE_REACTION_ADD", t, n, a, {
                userId: s,
                burst: d,
                colors: e
            }), (null == u ? void 0 : u.burst) ? i.OR.announce(y.intl.formatToPlainString(y.t.OamVbV, {
                name: a.name
            })) : i.OR.announce(y.intl.formatToPlainString(y.t["tD9+b+"], {
                name: a.name
            }))
        }
    })
}
async function M(e, t) {
    let n = [];
    if (t) try {
        n = await (0, m.D_)(e)
    } catch (e) {}
    return n
}

function j(e, t, n, r) {
    let i = f.A.getMessage(e, t);
    return null != i && i.userHasReactedWithEmoji(n, r)
}