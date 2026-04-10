/** chunk id: 190012 params = (module,exports,require) **/
n.d(t, {
    BC: () => I
});
var i = n(735438),
    l = n(448761),
    r = n(311907),
    s = n(931046),
    a = n(427930),
    o = n(77350),
    u = n(944052),
    d = n(763754),
    c = n(961350),
    h = n(994500),
    g = n(287809),
    m = n(638075),
    f = n(652215),
    A = n(985018);

function I(e, t) {
    let {
        isBlocked: n,
        isIgnored: I
    } = (0, r.cf)([h.A], () => ({
        isBlocked: h.A.isBlocked(e.author.id),
        isIgnored: h.A.isIgnored(e.author.id)
    }), [e.author.id]), E = (0, s.Ay)(t.id, e.id), p = (0, r.bG)([c.default], () => c.default.getId()), _ = (0, d.Ay)(e).nick, S = e.type !== l.l.USER_JOIN && e.author.id === p ? A.intl.string(A.t.LuZzxn) : _, x = (0, r.bG)([g.default], () => e.mentions.length > 0 ? g.default.getUser(e.mentions[0]) : void 0), T = (0, d.d8)(x, t).nick;
    return function(e, t) {
        let {
            isBlocked: n,
            isIgnored: r,
            authorNick: s
        } = t;
        if (n) return {
            type: "text",
            text: A.intl.string(A.t.XAkOo2)
        };
        if (r) return {
            type: "text",
            text: A.intl.string(A.t["G7p6v/"])
        };
        if (function(e) {
                switch (e.type) {
                    case l.l.DEFAULT:
                    case l.l.CHANGELOG:
                    case l.l.REPLY:
                    case l.l.CHAT_INPUT_COMMAND:
                    case l.l.CONTEXT_MENU_COMMAND:
                    case l.l.POLL_RESULT:
                    case l.l.AUTO_MODERATION_ACTION:
                        return !0;
                    default:
                        return !1
                }
            }(e)) {
            let t = function(e) {
                if (1 === e.embeds.length && e.embeds[0].url === e.content && null != e.embeds[0].rawTitle) return {
                    type: "markup",
                    markup: e.embeds[0].rawTitle
                };
                if (null != e.content && "" !== e.content) return {
                    type: "message",
                    message: e
                };
                if (e.hasFlag(f.pr7.IS_VOICE_MESSAGE)) return {
                    type: "text",
                    text: A.intl.string(A.t.slFYgi)
                };
                if (e.attachments.length > 0) {
                    let t = e.attachments.every(e => (0, o.u)(e.filename)),
                        n = !t && e.attachments.every(e => (0, o.AE)(e.filename)),
                        i = !t && !n && e.attachments.every(e => (0, o.L8)(e.filename));
                    return t ? {
                        type: "text",
                        text: A.intl.formatToPlainString(A.t.h4pFfU, {
                            count: e.attachments.length
                        }),
                        trailingIcon: "image"
                    } : n ? {
                        type: "text",
                        text: A.intl.formatToPlainString(A.t.SJ6pPX, {
                            count: e.attachments.length
                        }),
                        trailingIcon: "video"
                    } : i ? {
                        type: "text",
                        text: A.intl.formatToPlainString(A.t.fnO3hK, {
                            count: e.attachments.length
                        }),
                        trailingIcon: "audio"
                    } : {
                        type: "text",
                        text: A.intl.formatToPlainString(A.t["89ihS8"], {
                            count: e.attachments.length
                        }),
                        trailingIcon: "attachment"
                    }
                }
                if (e.embeds.length > 0) {
                    let t = e.embeds.every(e => null != e.url && (0, o.Zj)(e.url)),
                        n = !t && e.embeds.every(e => null != e.url && (0, o.r1)(e.url)),
                        i = !t && !n && e.embeds.every(e => null != e.url && (0, o.L8)(e.url));
                    if (t) return {
                        type: "text",
                        text: A.intl.formatToPlainString(A.t.h4pFfU, {
                            count: e.embeds.length
                        }),
                        trailingIcon: "image"
                    };
                    if (n) return {
                        type: "text",
                        text: A.intl.formatToPlainString(A.t.SJ6pPX, {
                            count: e.embeds.length
                        }),
                        trailingIcon: "video"
                    };
                    if (i) return {
                        type: "text",
                        text: A.intl.formatToPlainString(A.t.fnO3hK, {
                            count: e.embeds.length
                        }),
                        trailingIcon: "audio"
                    };
                    else if (e.embeds.length > 0 && null != e.embeds[0].rawTitle) return {
                        type: "markup",
                        markup: e.embeds[0].rawTitle
                    };
                    else if (e.embeds.length > 0 && null != e.embeds[0].rawDescription) return {
                        type: "markup",
                        markup: e.embeds[0].rawDescription
                    };
                    else return {
                        type: "text",
                        text: A.intl.formatToPlainString(A.t["9XuYjs"], {
                            count: e.embeds.length
                        }),
                        trailingIcon: "link"
                    }
                }
                return e.stickerItems.length > 0 ? {
                    type: "text",
                    text: e.stickerItems[0].name,
                    trailingIcon: "sticker"
                } : e.isPoll() ? {
                    type: "text",
                    text: A.intl.formatToPlainString(A.t.ImizdM, {
                        question: e.poll?.question.text
                    })
                } : (0, a.A)(e) ? {
                    type: "text",
                    text: A.intl.string(A.t["9ddYKt"])
                } : void 0
            }(e);
            if (null != t) return {
                ...t,
                authorLabel: s
            }
        }
        let d = function(e, t) {
            let {
                currentUserId: n,
                authorNick: r,
                otherUser: s,
                otherUserNick: a,
                isCallActive: o
            } = t;
            return e.type === l.l.RECIPIENT_ADD && null != a ? {
                type: "text",
                text: A.intl.formatToPlainString(A.t.MMN2Jq, {
                    username: r,
                    usernameHook: i.identity,
                    otherUsername: a,
                    otherUsernameHook: i.identity
                })
            } : e.type === l.l.RECIPIENT_REMOVE && null != a ? {
                type: "text",
                text: e.author.id === s?.id ? A.intl.formatToPlainString(A.t["5v2xa8"], {
                    username: r,
                    usernameHook: i.identity
                }) : A.intl.formatToPlainString(A.t.L2FyVq, {
                    username: r,
                    usernameHook: i.identity,
                    otherUsername: a,
                    otherUsernameHook: i.identity
                })
            } : e.type === l.l.CALL ? {
                type: "text",
                text: o ? A.intl.string(A.t["NGg/fm"]) : null == e.call || e.call.participants.includes(n) ? A.intl.string(A.t.v05Xd6) : A.intl.string(A.t["2CnhoI"]),
                color: o ? "text-feedback-positive" : void 0,
                trailingIcon: o ? "call-active" : "call-ended"
            } : e.type === l.l.CHANNEL_NAME_CHANGE ? {
                type: "text",
                text: A.intl.formatToPlainString(A.t.oItgEw, {
                    username: r,
                    usernameHook: i.identity,
                    channelName: e.content
                })
            } : e.type === l.l.CHANNEL_ICON_CHANGE ? {
                type: "text",
                text: A.intl.formatToPlainString(A.t.OEdU6X, {
                    username: r,
                    usernameHook: i.identity
                })
            } : e.type === l.l.CHANNEL_PINNED_MESSAGE ? {
                type: "text",
                text: A.intl.formatToPlainString(A.t.vfkjqx, {
                    username: r,
                    usernameHook: i.identity
                })
            } : e.type === l.l.USER_JOIN ? {
                type: "text",
                text: A.intl.formatToPlainString(m.A.getSystemMessageUserJoin(e.id), {
                    username: r,
                    usernameHook: i.identity
                })
            } : e.type === l.l.THREAD_CREATED ? {
                type: "text",
                text: A.intl.formatToPlainString(A.t.SGaUAU, {
                    actorName: r,
                    actorHook: i.identity,
                    threadName: e.content,
                    threadOnClick: i.identity
                })
            } : e.type === l.l.PREMIUM_REFERRAL ? {
                type: "text",
                text: A.intl.formatToPlainString(A.t.lieTqU, {
                    username: r
                })
            } : e.type === l.l.STAGE_START ? {
                type: "text",
                text: A.intl.formatToPlainString(A.t.aZtRW8, {
                    username: r,
                    usernameOnClick: i.identity,
                    topic: e.content
                })
            } : e.type === l.l.STAGE_END ? {
                type: "text",
                text: A.intl.formatToPlainString(A.t.vMJhvG, {
                    username: r,
                    usernameOnClick: i.identity,
                    topic: e.content
                })
            } : e.type === l.l.STAGE_SPEAKER ? {
                type: "text",
                text: A.intl.formatToPlainString(A.t.V4uCm4, {
                    username: r,
                    usernameOnClick: i.identity
                })
            } : e.type === l.l.STAGE_TOPIC ? {
                type: "text",
                text: A.intl.formatToPlainString(A.t.ro3RM0, {
                    username: r,
                    usernameOnClick: i.identity,
                    topic: e.content
                })
            } : e.type === l.l.VOICE_SESSION ? {
                type: "text",
                text: (0, u.fn)(e)
            } : void 0
        }(e, t);
        if (null != d) return d
    }(e, {
        message: e,
        channel: t,
        currentUserId: p,
        authorNick: S,
        otherUser: x,
        otherUserNick: T,
        isBlocked: n,
        isIgnored: I,
        isCallActive: E
    })
}