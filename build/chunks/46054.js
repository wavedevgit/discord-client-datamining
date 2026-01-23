/** Chunk was on web.js **/
/** chunk id: 46054, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => w
}), n(896048);
var r = n(735438),
    i = n.n(r),
    a = n(436857),
    s = n(999443),
    o = n(542664),
    l = n(551965);

function c(e, t, n) {
    return t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = n, e
}

function u(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
            return Object.getOwnPropertyDescriptor(n, e).enumerable
        }))), r.forEach(function(t) {
            c(e, t, n[t])
        })
    }
    return e
}

function d(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t && (r = r.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
        })), n.push.apply(n, r)
    }
    return n
}

function f(e, t) {
    return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : d(Object(t)).forEach(function(n) {
        Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
    }), e
}
let p = null;
p = n(937767).A;
let _ = ["url", "autolink", "link", "mailto", "tel"];

function h(e, t) {
    let n = {};
    return null != e.mention && null != p && (n = {
        mention: p
    }), (0, l.A)([e, ...t, n])
}
let m = {
        enableBuildOverrides: !1,
        enableEmojiClick: !0
    },
    g = h(o.A.RULES, [(0, s.A)({
        enableBuildOverrides: !0
    })]),
    E = i().omit(h(o.A.RULES, [(0, s.A)(m)]), "paragraph", "newline"),
    y = h(o.A.CHANNEL_TOPIC_RULES, [(0, s.A)(f(u({}, m), {
        emojiTooltipPosition: "bottom"
    })), {
        codeBlock: {
            react: o.A.RULES.text.react
        }
    }]),
    b = h(o.A.VOICE_CHANNEL_STATUS_RULES, [(0, s.A)(f(u({}, m), {
        enableEmojiClick: !1
    }))]),
    O = h(o.A.EMBED_TITLE_RULES, [(0, s.A)(m)]),
    v = i().omit(h(o.A.EMBED_TITLE_RULES, [(0, s.A)(m)]), _),
    A = h(o.A.INLINE_REPLY_RULES, [(0, s.A)(m)]),
    I = h(o.A.GUILD_VERIFICATION_FORM_RULES, [(0, s.A)(m)]),
    S = h(o.A.GUILD_EVENT_RULES, [(0, s.A)(m)]),
    T = h(o.A.AUTO_MODERATION_SYSTEM_MESSAGE_RULES, [(0, s.A)(m)]),
    C = i().omit(h(o.A.RULES, [(0, s.A)(m)]), "paragraph", "newline", "strong", "codeBlock", "inlineCode", "u", "list", "heading", "subtext", ..._),
    N = {
        text: o.A.RULES.text
    },
    w = {
        combineAndInjectMentionRule: h,
        createReactRules: s.A,
        defaultReactRuleOptions: m,
        defaultRules: g,
        guildEventRules: S,
        notifCenterV2MessagePreviewRules: C,
        lockscreenWidgetMessageRules: N,
        astParserFor: a.X,
        reactParserFor: a.aV,
        parse: a.aV(g),
        parseTopic: (e, t, n, r) => a.aV(y)(e, t, u({
            allowLinks: !0
        }, n), r),
        parseVoiceChannelStatus: a.aV(b),
        parseEmbedTitle: a.aV(O),
        parseEmbedTitleWithoutLinks: a.aV(v),
        parseInlineReply: a.aV(A),
        parseGuildVerificationFormRule: a.aV(I),
        parseGuildEventDescription: a.aV(S),
        parseAutoModerationSystemMessage: a.aV(T),
        parseForumPostGuidelines: a.aV(E),
        parseToAST: a.X(g),
        parseTopicToAST: a.X(y),
        parseEmbedTitleToAST: a.X(O),
        parseEmbedTitleWithoutLinksToAST: a.X(v),
        parseInlineReplyToAST: a.X(A),
        parseAutoModerationSystemMessageToAST: a.X(T)
    }