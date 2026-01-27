/** Chunk was on web.js **/
/** chunk id: 224868, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    f: () => g,
    p: () => m
}), n(896048), n(747238);
var r = n(47167),
    i = n(508675),
    a = n(7584),
    o = n(863005),
    s = n(734057),
    l = n(808728),
    c = n(696451),
    u = n(317525),
    d = n(71393),
    f = n(287809),
    p = n(248465),
    _ = n(661191),
    h = n(408018);

function m(e, t, n, r) {
    let {
        allowUsers: i = !0,
        allowRoles: a = !0
    } = null != r ? r : {};
    switch (e[0]) {
        case "@":
            return E(e, t, n, i, a);
        case ":":
            return O(e, t);
        case "#":
            return b(e, t)
    }
    return null
}

function g(e, t, n, r) {
    let i = m(e, t, n, r);
    return null == i ? null : (0, h.QR)(i)
}

function E(e, t, n, r, i) {
    let [a, o] = e.slice(1).split("#", 2), l = null != t ? d.A.getGuild(t) : null;
    if (i && null == o && null != l) {
        for (let e of u.A.getSortedRoles(l.id))
            if (a === e.name) return {
                type: "roleMention",
                roleId: e.id,
                children: [{
                    text: ""
                }]
            }
    }
    if (r) {
        let e = null != n ? s.A.getChannel(n) : null;
        if (null == e) return null;
        let r = (e.isPrivate() ? e.recipients : c.Ay.getMembers(t).map(e => {
            let {
                userId: t
            } = e;
            return t
        })).map(e => f.default.getUser(e)).filter(e => void 0 !== e && y(a, o, e));
        if (1 === r.length) {
            let e = r[0];
            if (y(a, o, e, {
                    requireExact: !0
                })) return {
                type: "userMention",
                userId: e.id,
                children: [{
                    text: ""
                }]
            }
        }
    }
    return null
}

function y(e, t, n) {
    let {
        requireExact: r = !1
    } = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
    return null != n && (r ? n.username === e : n.username.startsWith(e)) && n.discriminator === (null != t ? t : "0")
}

function b(e, t) {
    let n;
    if (null == t) return null;
    n = e.length > 3 && '"' === e[1] && '"' === e[e.length - 1] ? (0, r.LG)(e.slice(2, e.length - 1)) : e.slice(1);
    let i = l.Ay.getTextChannelNameDisambiguations(t);
    for (let e of _.default.keys(i))
        if (i[e].name === n) return {
            type: "channelMention",
            channelId: e,
            children: [{
                text: ""
            }]
        };
    for (let e of p.L3)
        if (e !== l.I6) {
            for (let {
                    channel: r
                }
                of l.Ay.getChannels(t)[e])
                if (r.name === n) return {
                    type: "channelMention",
                    channelId: r.id,
                    children: [{
                        text: ""
                    }]
                }
        } let a = o.A.getActiveJoinedThreadsForGuild(t);
    for (let e of _.default.keys(a))
        for (let t of _.default.keys(a[e])) {
            let {
                channel: r
            } = a[e][t];
            if (r.name === n) return {
                type: "channelMention",
                channelId: r.id,
                children: [{
                    text: ""
                }]
            }
        }
    return null
}

function O(e, t) {
    let n = a.Ay.EMOJI_NAME_RE.exec(e);
    if (null == n) return null;
    let r = n[1],
        o = i.Ay.getDisambiguatedEmojiContext(t).getCustomEmoji();
    if (null != o && r in o) {
        let e = o[r];
        return {
            type: "customEmoji",
            emoji: {
                emojiId: e.id,
                name: "require_colons" in e && e.require_colons ? ":".concat(e.name, ":") : e.name,
                animated: !0 === e.animated,
                jumboable: !1
            },
            children: [{
                text: ""
            }]
        }
    }
    return null
}