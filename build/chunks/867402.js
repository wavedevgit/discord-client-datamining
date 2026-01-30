/** chunk id: 867402, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => U
}), n(747238);
var r = n(280230),
    i = n.n(r),
    a = n(717125),
    o = n(47167),
    s = n(721592),
    l = n(376943),
    c = n(734057),
    u = n(71393),
    d = n(576705),
    f = n(994500),
    p = n(287809),
    _ = n(486020),
    h = n(147036),
    m = n(240248),
    g = n(465365),
    E = n(704726),
    y = n(652215),
    b = n(985018);

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
let S = e => {
    let t = c.A.getChannel(e);
    return null == t ? void 0 : t.getGuildId()
};

function T(e) {
    return {
        type: "guild",
        guildId: e.id,
        content: (0, m.EJ)(e.name, 32),
        icon: _.Ay.getGuildIconURL({
            id: e.id,
            icon: e.icon,
            size: 40
        })
    }
}

function C(e, t) {
    let n, r = D((0, m.EJ)(e.name, 32));
    return {
        type: "channel",
        content: [n = "italics" === t ? {
            type: "em",
            content: [r]
        } : r],
        channelType: e.type,
        iconType: e.iconType
    }
}

function N(e, t) {
    let n = {
        type: "channel",
        content: [D(e.roleSubscriptionGated ? e.name : b.intl.string(b.t["/YzI63"]))],
        channelType: e.roleSubscriptionGated ? e.type : y.rbe.UNKNOWN,
        iconType: "locked"
    };
    return {
        type: "channelMention",
        guildId: e.guildId,
        channelId: e.id,
        messageId: t,
        inContent: null,
        content: [n]
    }
}

function w(e) {
    return {
        type: "channel",
        content: [D("")],
        iconType: e ? "post" : "message"
    }
}

function R(e, t) {
    var n;
    let r = c.A.getChannel(e),
        i = (0, s.p)(e, c.A, a.A, d.A).isSubscriptionGated,
        u = null != (n = (0, h.QG)(r)) ? n : "text";
    if (null != t) {
        let n = t.find(t => t.id === e);
        if (null != n) return {
            type: n.type,
            id: n.id,
            guildId: n.guild_id,
            name: n.name,
            isDm: null != r && r.isPrivate(),
            isForumPost: null != r && r.isForumPost(),
            isMentionable: !0,
            canViewChannel: !0,
            roleSubscriptionGated: i,
            iconType: u,
            parentId: null == r ? void 0 : r.parent_id
        }
    }
    return null != r ? {
        type: r.type,
        id: r.id,
        guildId: r.guild_id,
        name: (0, o.m1)(r, p.default, f.A),
        isDm: r.isPrivate(),
        isForumPost: r.isForumPost(),
        isMentionable: (0, g.Y)(r.type),
        canViewChannel: (0, l.nc)(r),
        roleSubscriptionGated: i,
        iconType: u,
        parentId: r.parent_id
    } : null
}

function P(e) {
    return {
        type: "link",
        content: [{
            type: "text",
            content: e
        }],
        target: e,
        title: void 0
    }
}

function D(e) {
    return {
        type: "text",
        content: e
    }
}

function L(e) {
    return null != e ? P(e) : D("#".concat(b.intl.string(b.t.J90oLW)))
}

function x() {
    return C({
        name: b.intl.string(b.t.zLZPmk).toLowerCase(),
        type: y.rbe.UNKNOWN,
        iconType: "text"
    }, "italics")
}

function M(e, t, n, r, i) {
    let a = u.A.getGuild(e),
        o = (null == a ? void 0 : a.id) === r;
    return {
        type: "channelMention",
        guildId: e,
        channelId: t,
        messageId: n,
        originalLink: i,
        inContent: null == a || o ? null : [T(a)],
        content: [x()]
    }
}

function j(e, t, n, r) {
    let i = T(e),
        a = C(t),
        o = w(t.isForumPost);
    if (n && r) {
        if (t.isForumPost) {
            let e = c.A.getChannel(t.parentId);
            if (null != e) {
                var s;
                return {
                    inContent: [C({
                        name: e.name,
                        type: e.type,
                        iconType: null != (s = (0, h.QG)(e)) ? s : "forum"
                    })],
                    content: [a]
                }
            }
        }
        return {
            inContent: [a],
            content: [o]
        }
    }
    return n && !r ? {
        inContent: null,
        content: [a]
    } : !n && r ? {
        inContent: [i],
        content: [t.isForumPost ? a : o]
    } : n || r ? void 0 : {
        inContent: [i],
        content: [a]
    }
}

function k(e, t, n, r) {
    if (!e.canViewChannel) return N(e, t);
    if (!e.isMentionable) return D("#".concat(e.name));
    let i = {
            type: "channelMention",
            channelId: e.id,
            guildId: e.guildId,
            messageId: t,
            originalLink: r
        },
        a = u.A.getGuild(e.guildId);
    if (null == a)
        if (e.isDm) return I(v({}, i), {
            guildId: y.ME,
            inContent: [C(e)],
            content: [w(!1)]
        });
        else return L(r);
    let o = e.guildId === n;
    return v({}, i, j(a, e, o, null != t))
}
let U = {
    channelMention: {
        order: E.Ay.order,
        requiredFirstCharacters: ["<"],
        match: e => /^<#(\d+)>/.exec(e),
        parse(e, t, n) {
            let r = e[1];
            if (n.returnMentionIds) return {
                type: "channelMention",
                id: r
            };
            let i = R(r, n.mentionChannels);
            return null == i ? M(null, r, null, S(n.channelId)) : k(i, null, S(n.channelId))
        }
    },
    channelOrMessageUrl: {
        order: i().defaultRules.url.order - .5,
        requiredFirstCharacters: ["h"],
        match(e) {
            let t = l.Ju.exec(e);
            return null != t && (null != t[2] && /\D/.test(t[2]) || null != t[3] && /\D/.test(t[3])) ? null : t
        },
        parse(e, t, n) {
            let r = e[0],
                i = e[1],
                a = e[2],
                o = e[3];
            if (null == a) return P(r);
            let s = R(a, null);
            return null == s ? M(i, a, o, S(n.channelId), r) : k(s, o, S(n.channelId), r)
        }
    },
    mediaPostLink: {
        order: i().defaultRules.url.order - .5,
        requiredFirstCharacters: ["h"],
        match: e => l.En.exec(e),
        parse(e, t, n) {
            let r = e[0],
                i = e[1],
                a = e[2],
                o = e[3],
                s = e[4];
            if (null == a || null == o) return P(r);
            let l = R(o, null);
            if (null != l) return k(l, s, S(n.channelId), r);
            let c = R(a, null);
            return null != c ? k(c, s, S(n.channelId), r) : M(i, a, s, S(n.channelId), r)
        }
    }
}