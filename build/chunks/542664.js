/** chunk id: 542664, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => ei
}), n(747238), n(812715), n(321073), n(866193), n(896048), n(733351), n(591487), n(727858);
var r = n(735438),
    i = n.n(r),
    a = n(791332),
    o = n.n(a),
    s = n(128265),
    l = n(7584),
    c = n(176201),
    u = n(676608),
    d = n(335432),
    f = n(734057),
    p = n(317525),
    _ = n(71393),
    h = n(287809),
    m = n(486020),
    g = n(562153),
    E = n(427262),
    y = n(258072),
    b = n(867402),
    O = n(223637),
    v = n(694403),
    A = n(873879),
    I = n(683412),
    S = n(704726),
    T = n(438419),
    C = n(78390),
    N = n(379418),
    w = n(551965),
    R = n(652215),
    P = n(73510),
    D = n(985018);

function L(e, t, n) {
    return t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = n, e
}

function x(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
            return Object.getOwnPropertyDescriptor(n, e).enumerable
        }))), r.forEach(function(t) {
            L(e, t, n[t])
        })
    }
    return e
}

function M(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t && (r = r.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
        })), n.push.apply(n, r)
    }
    return n
}

function j(e, t) {
    return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : M(Object(t)).forEach(function(n) {
        Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
    }), e
}
let k = /^( *>>> +([\s\S]*))|^( *>(?!>>) +[^\n]*(\n *>(?!>>) +[^\n]*)*\n?)/,
    U = /^$|\n *$/,
    G = /^ *>>> ?/,
    V = /^ *> ?/gm,
    F = /^((?:https?|steam):\/\/[^\s<]+[^<.,:;"'\]\s])/;

function B(e) {
    let t = (0, v.W1)(e[1]);
    if (null == t) return {
        type: "text",
        content: e[1]
    };
    let {
        displayTarget: n,
        target: r
    } = t;
    return {
        type: "link",
        content: [{
            type: "text",
            content: n
        }],
        target: r,
        title: void 0
    }
}
let H = e => {
        let t = f.A.getChannel(e);
        return null == t ? void 0 : t.getGuildId()
    },
    Y = e => null != e.guildId ? _.A.getGuild(e.guildId) : null != e.channelId ? _.A.getGuild(H(e.channelId)) : null,
    W = {
        newline: o().defaultRules.newline,
        paragraph: o().defaultRules.paragraph,
        escape: j(x({}, o().defaultRules.escape), {
            match: (e, t, n) => !1 === t.allowEscape ? null : o().defaultRules.escape.match(e, t, n)
        }),
        blockQuote: j(x({}, o().defaultRules.blockQuote), {
            requiredFirstCharacters: [" ", ">"],
            match(e, t) {
                let {
                    prevCapture: n,
                    inQuote: r,
                    nested: i
                } = t;
                if (r || i) return null;
                if (null == n) return k.exec(e);
                let a = n[0];
                return U.test(a) ? k.exec(e) : null
            },
            parse(e, t, n) {
                let r = e[0],
                    i = !!G.exec(r),
                    a = i ? G : V,
                    o = r.replace(a, ""),
                    s = n.inQuote || !1,
                    l = n.inline || !1;
                n.inQuote = !0, i || (n.inline = !0);
                let c = t(o, n);
                return n.inQuote = s, n.inline = l, 0 === c.length && c.push({
                    type: "text",
                    content: " "
                }), {
                    content: c,
                    type: "blockQuote"
                }
            }
        }),
        link: v.Ay,
        autolink: j(x({}, o().defaultRules.autolink), {
            parse: B
        }),
        mailto: j(x({}, o().defaultRules.mailto), {
            match: o().inlineRegex(/^<([^\s<>@]+@[^\s<>@]+\.[^\s<>@]+)>/),
            requiredFirstCharacters: ["<"],
            parse(e) {
                let t = e[1],
                    n = e[1];
                return n.startsWith("mailto:") || (n = "mailto:" + n), {
                    type: "link",
                    content: [{
                        type: "text",
                        content: t
                    }],
                    target: n
                }
            }
        }),
        tel: j(x({}, o().defaultRules.mailto), {
            requiredFirstCharacters: ["<"],
            match: o().inlineRegex(/^<((?:(?:tel|sms):\+?|\+)(?:(?:[0-9]|\([0-9]+\)))(?:[- .\/]?(?:[0-9]|\([0-9]+\)))+)>/),
            parse(e) {
                let t = e[1],
                    n = e[1].replaceAll(/[ \/]+/g, "-");
                return n.startsWith("tel:") || n.startsWith("sms:") || (n = "tel:" + n), {
                    type: "link",
                    content: [{
                        type: "text",
                        content: t
                    }],
                    target: n
                }
            }
        }),
        url: j(x({}, o().defaultRules.url), {
            requiredFirstCharacters: ["h", "s"],
            match(e, t) {
                if (!t.inline) return null;
                let n = F.exec(e);
                if (null != n) {
                    let e = 0,
                        t = n[0];
                    for (let n = t.length - 1; n >= 0 && ")" === t[n]; n--) {
                        let n = t.indexOf("(", e);
                        if (-1 === n) {
                            t = t.slice(0, t.length - 1);
                            break
                        }
                        e = n + 1
                    }
                    n[0] = n[1] = t
                }
                return n
            },
            parse: B
        }),
        strong: o().defaultRules.strong,
        em: o().defaultRules.em,
        u: o().defaultRules.u,
        br: o().defaultRules.br,
        text: S.Ay,
        inlineCode: j(x({}, o().defaultRules.inlineCode), {
            parse(e, t, n) {
                let r = o().defaultRules.inlineCode.parse(e, t, n);
                return !0 === n.parseInlineCodeChildContent ? j(x({}, r), {
                    validationChildContent: t(r.content, n)
                }) : r
            }
        }),
        emoticon: {
            order: S.Ay.order,
            requiredFirstCharacters: ["\xaf"],
            match: e => /^(¯\\_\(ツ\)_\/¯)/.exec(e),
            parse: e => ({
                type: "text",
                content: e[1]
            })
        },
        codeBlock: {
            order: o().defaultRules.codeBlock.order,
            requiredFirstCharacters: ["`"],
            match: e => /^```(?:([a-z0-9_+\-.#]+?)\n)?\n*([^\n][^]*?)\n*```/i.exec(e),
            parse(e, t, n) {
                var r, i;
                return {
                    lang: null != (r = e[1]) ? r : "",
                    content: null != (i = e[2]) ? i : "",
                    inQuote: n.inQuote || n.formatInline || !1
                }
            }
        },
        roleMention: {
            order: S.Ay.order,
            requiredFirstCharacters: ["<"],
            match: e => /^<@&(\d+)>/.exec(e),
            parse(e, t, n) {
                var r, i, a;
                let [o, s] = e;
                if (n.returnMentionIds) return {
                    type: "roleMention",
                    id: s
                };
                let l = Y(n),
                    d = null != l ? p.A.getRole(l.id, s) : null;
                if (null == d) return {
                    type: "text",
                    content: "@".concat(D.intl.string(D.t["YV4F/n"]))
                };
                let f = (0, u.aF)(null == l ? void 0 : l.id, d) && !(0, c.Qv)(d);
                return {
                    type: "mention",
                    channelId: n.channelId,
                    guildId: null != l ? l.id : null,
                    roleId: s,
                    roleColor: d.color,
                    roleColors: f ? {
                        primaryColor: null == (r = d.colors) ? void 0 : r.primary_color,
                        secondaryColor: null == (i = d.colors) ? void 0 : i.secondary_color,
                        tertiaryColor: null == (a = d.colors) ? void 0 : a.tertiary_color
                    } : null,
                    roleName: "@".concat(d.name),
                    color: d.color,
                    colorString: d.colorString,
                    content: [{
                        type: "text",
                        content: "@".concat(d.name)
                    }]
                }
            }
        },
        mention: {
            order: S.Ay.order,
            requiredFirstCharacters: ["<", "@"],
            match(e) {
                let t = /^<@!?(\d+)>|^(@(?:everyone|here))/.exec(e);
                return null == t ? null : t
            },
            parse(e, t, n) {
                let r, i;
                if (n.returnMentionIds) return null == e[1] ? {
                    type: "mention",
                    text: e[0]
                } : {
                    type: "mention",
                    id: e[1]
                };
                let a = h.default.getUser(e[1]),
                    o = f.A.getChannel(n.channelId);
                if (null != a && (i = a.id, r = a.toString(), null != o)) {
                    var s;
                    r = null != (s = g.Ay.getNickname(o.getGuildId(), n.channelId, a)) ? s : E.Ay.getName(a)
                }
                let l = e[1],
                    c = null != l && R.Ut1.test(l.trim()),
                    u = c && n.unknownUserMentionPlaceholder ? "@".concat(D.intl.string(D.t.sKdZ6U)) : e[0];
                return {
                    userId: i,
                    channelId: n.channelId,
                    viewingChannelId: n.viewingChannelId,
                    guildId: null == o ? void 0 : o.getGuildId(),
                    parsedUserId: c ? l : null,
                    roleName: e[2],
                    content: [{
                        type: "text",
                        content: null != r ? "@".concat(r) : u
                    }]
                }
            }
        },
        silentPrefix: {
            order: S.Ay.order,
            requiredFirstCharacters: ["@"],
            match: (e, t, n) => null == n || "" === n ? /^(@silent(?![^\s]))/.exec(e) : null,
            parse: function(e) {
                return {
                    type: "silentPrefix",
                    content: e[0]
                }
            }
        },
        channelMention: b.A.channelMention,
        channelOrMessageUrl: b.A.channelOrMessageUrl,
        mediaPostLink: b.A.mediaPostLink,
        attachmentLink: y.A.attachmentLink,
        commandMention: {
            order: o().defaultRules.text.order,
            requiredFirstCharacters: ["<"],
            match: e => RegExp("^<\\/((?:[-_\\p{Letter}\\p{Number}\\p{sc=Deva}\\p{sc=Thai}]{1,32})(?: [-_\\p{Letter}\\p{Number}\\p{sc=Deva}\\p{sc=Thai}]{1,32})?(?: [-_\\p{Letter}\\p{Number}\\p{sc=Deva}\\p{sc=Thai}]{1,32})?):(\\d+)>", "u").exec(e),
            parse(e, t, n) {
                if (n.returnMentionIds) return {
                    type: "commandMention",
                    id: e[2]
                };
                let [, ...r] = e[1].split(" "), i = "".concat(e[2]).concat([...r].map(e => "".concat(P.v4).concat(e)).join(""));
                return {
                    channelId: n.channelId,
                    commandId: e[2],
                    commandName: e[1],
                    commandKey: i,
                    content: [{
                        type: "text",
                        content: "".concat(e[1])
                    }]
                }
            }
        },
        gameMention: {
            order: o().defaultRules.text.order,
            requiredFirstCharacters: ["<"],
            match: (e, t) => t.allowGameMentions ? /^<@\$(\d+)>/.exec(e) : null,
            parse(e, t, n) {
                var r, i, a;
                if (null == n.channelId || null == n.messageId) return {
                    type: "gameMention",
                    applicationId: e[1],
                    channelId: n.channelId,
                    content: [{
                        type: "text",
                        content: D.intl.string(D.t["11pdXZ"])
                    }],
                    icon: void 0
                };
                let o = null == (i = s.A.get(n.channelId)) ? void 0 : i.get(n.messageId),
                    l = null == o || null == (a = o.mentionGames) ? void 0 : a.find(t => t.id === e[1]);
                return {
                    type: "gameMention",
                    applicationId: e[1],
                    channelId: n.channelId,
                    content: [{
                        type: "text",
                        content: "".concat(null != (r = null == l ? void 0 : l.name) ? r : D.intl.string(D.t["11pdXZ"]))
                    }],
                    icon: null != l && null != l.icon_hash ? m.Ay.getApplicationIconURL({
                        id: l.id,
                        icon: l.icon_hash,
                        size: 32
                    }) : void 0
                }
            }
        },
        timestampMentionInput: {
            order: o().defaultRules.text.order,
            requiredFirstCharacters: ["<"],
            match: (e, t) => t.allowTimeMentionInput ? /^<@time:([^>]*)>/.exec(e) : null,
            parse: e => ({
                type: "timestampMentionInput",
                content: e[1]
            })
        },
        emoji: {
            order: S.Ay.order,
            requiredFirstCharacters: [":"],
            match(e) {
                let t = l.Ay.EMOJI_NAME_RE.exec(e);
                return null != t && "" !== l.Ay.convertNameToSurrogate(t[1]) ? t : null
            },
            parse(e) {
                let t = l.Ay.convertNameToSurrogate(e[1]);
                return {
                    type: "text",
                    content: null == t || "" === t ? ":".concat(e[1], ":") : t
                }
            }
        },
        soundboard: {
            order: S.Ay.order,
            requiredFirstCharacters: ["<"],
            match: e => d.ds.exec(e),
            parse: (e, t, n) => (0, d.Ay)(e, n)
        },
        customEmoji: {
            order: S.Ay.order,
            requiredFirstCharacters: ["<"],
            match: e => /^<a?:(\w+):(\d+)>/.exec(e),
            parse: e => ({
                type: "text",
                content: ":".concat(e[1], ":")
            })
        },
        timestamp: {
            order: S.Ay.order - 1,
            requiredFirstCharacters: ["<"],
            match: e => N.l9.exec(e),
            parse(e) {
                let [t, n, r] = e, i = (0, N.EH)(n, r);
                return null == i ? {
                    type: "text",
                    content: t
                } : (i.type = "timestamp", i)
            }
        },
        s: {
            order: o().defaultRules.u.order,
            requiredFirstCharacters: ["~"],
            match: o().inlineRegex(/^~~([\s\S]+?)~~(?!_)/),
            parse: o().defaultRules.u.parse
        },
        spoiler: {
            order: S.Ay.order,
            requiredFirstCharacters: ["|"],
            match: e => R.VFs.exec(e),
            parse: (e, t, n) => ({
                content: t(e[1], n),
                channelId: n.channelId
            })
        },
        staticRouteLink: {
            order: S.Ay.order,
            requiredFirstCharacters: ["<"],
            match: e => R.P0V.exec(e),
            parse(e, t, n) {
                var r;
                let [, i, a] = e, o = (0, C.Q)(i), s = (0, C.f)(i, a, null == (r = Y(n)) ? void 0 : r.id);

                function l(e) {
                    return null == e ? null : [{
                        type: "text",
                        content: e
                    }]
                }
                return {
                    content: l(o + (null != s ? " › ".concat(s) : "")),
                    mainContent: l(o),
                    itemContent: l(s),
                    itemId: a,
                    id: i,
                    guildId: H(n.channelId),
                    channelId: i
                }
            }
        },
        heading: O.A,
        list: A.A,
        subtext: I.A
    },
    K = (0, w.A)([W, T.A]),
    z = i().omit(K, ["inlineCode", "codeBlock", "br", "blockQuote", "subtext", "soundboard"]),
    q = i().omit(K, ["inlineCode", "codeBlock", "br", "blockQuote", "autolink", "url", "attachmentLink", "mention", "roleMention", "channelMention", "channelOrMessageUrl", "mediaPostLink", "subtext", "soundboard", "gameMention"]),
    Z = i().omit(K, ["codeBlock", "br", "mention", "channel", "roleMention", "attachmentLink", "subtext", "soundboard", "gameMention"]),
    Q = i().omit((0, w.A)([K, {
        inlineCode: {
            match(e, t, n) {
                let r = K.codeBlock.match(e, t, n);
                if (null != r) return r;
                let i = K.inlineCode.match(e, t, n);
                if (null != i) return i
            }
        }
    }]), ["blockQuote", "codeBlock", "br"]),
    X = i().omit(K, ["codeBlock", "br", "blockQuote"]),
    J = i().omit(K, ["codeBlock", "br", "attachmentLink", "mention", "roleMention", "channel", "paragraph", "newline", "subtext", "soundboard"]),
    $ = i().omit(K, ["codeBlock", "blockQuote", "br"]),
    ee = i().omit(K, ["codeBlock", "br", "inlineCode"]);

function et(e, t) {
    return 0 === e.length || 0 === t || "" === e.charAt(t - 1).trim()
}
let en = 10,
    er = (0, w.A)([{
        highlightWord: {
            order: -1,
            match(e, t) {
                if (null != t.parseDepth && t.parseDepth > en || null == t.highlightWord || 0 === t.highlightWord.length) return null;
                let n = e.indexOf(t.highlightWord);
                if (-1 === n) return null;
                let r = !et(e, n);
                if (r)
                    do n = e.indexOf(t.highlightWord, n + 1), r = !et(e, n); while (r && -1 !== n);
                if (-1 === n) return null;
                let i = e.substring(0, n),
                    a = e.substring(n + t.highlightWord.length);
                return [e, t.highlightWord, i, a]
            },
            parse(e, t, n) {
                var r;
                let i = null != (r = n.parseDepth) ? r : 0,
                    a = j(x({}, n), {
                        parseDepth: i + 1
                    }),
                    o = t(e[2], a),
                    s = t(e[3], a);
                return [...o, {
                    type: "highlight",
                    content: e[1]
                }, ...s]
            }
        }
    }, i().omit(K, ["url"])]),
    ei = {
        RULES: K,
        CHANNEL_TOPIC_RULES: z,
        VOICE_CHANNEL_STATUS_RULES: q,
        EMBED_TITLE_RULES: Z,
        INLINE_REPLY_RULES: Q,
        GUILD_VERIFICATION_FORM_RULES: X,
        GUILD_EVENT_RULES: $,
        PROFILE_BIO_RULES: J,
        AUTO_MODERATION_SYSTEM_MESSAGE_RULES: er,
        NATIVE_SEARCH_RESULT_LINK_RULES: ee
    }