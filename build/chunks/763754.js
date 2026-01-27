/** Chunk was on web.js **/
/** chunk id: 763754, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    Ay: () => _,
    FT: () => y,
    X4: () => h,
    d8: () => E,
    m2: () => g,
    p_: () => m
});
var r = n(284009),
    i = n.n(r),
    a = n(311907),
    o = n(609425),
    s = n(734057),
    l = n(696451),
    c = n(317525),
    u = n(71393),
    d = n(994500),
    f = n(287809),
    p = n(427262);

function _(e, t) {
    let n = h(e);
    return i()(null != n, "Result cannot be null because the message is not null"), null != t ? t : n
}

function h(e) {
    var t;
    let n = (0, a.bG)([s.A], () => null == e ? null : s.A.getChannel(e.channel_id)),
        r = null == e || null == (t = e.author) ? void 0 : t.id,
        i = null == n ? void 0 : n.guild_id,
        _ = (0, a.bG)([l.Ay], () => null == i || null == r ? null : l.Ay.getMember(i, r)),
        h = (0, a.bG)([f.default], () => f.default.getUser(r), [r]),
        m = p.Ay.useName((null == e ? void 0 : e.author.bot) ? null == e ? void 0 : e.author : h),
        g = (0, a.bG)([u.A], () => u.A.getGuild(i), [i]),
        E = null == _ ? void 0 : _.colorRoleId,
        y = (0, a.bG)([c.A], () => null != i && null != E ? c.A.getRole(i, E) : void 0, [i, E]),
        O = (0, a.bG)([d.A], () => null != r && (null == n ? void 0 : n.isPrivate()) ? d.A.getNickname(r) : null),
        v = (0, o.A)({
            userId: r,
            guildId: i
        });
    return null == e ? null : b({
        user: e.author,
        channel: n,
        guild: g,
        memberColorRole: y,
        userName: m,
        member: _,
        friendNickname: O,
        displayNameStyles: v
    })
}

function m(e) {
    let t = s.A.getChannel(e.channel_id);
    return y(e.author, t)
}

function g(e, t) {
    let n = E(e, t);
    return i()(null != n, "Result cannot be null because user and channel are not null"), n
}

function E(e, t) {
    let n = null == e ? void 0 : e.id,
        r = null == t ? void 0 : t.guild_id,
        i = (0, a.bG)([l.Ay], () => null == r || null == n ? null : l.Ay.getMember(r, n)),
        o = (0, a.bG)([u.A], () => u.A.getGuild(r), [r]),
        s = null == i ? void 0 : i.colorRoleId,
        f = (0, a.bG)([c.A], () => null != r && null != s ? c.A.getRole(r, s) : void 0, [r, s]),
        _ = (0, a.bG)([d.A], () => null != n && (null == t ? void 0 : t.isPrivate()) ? d.A.getNickname(n) : null),
        h = p.Ay.useName(e);
    return b({
        user: e,
        channel: t,
        guild: o,
        memberColorRole: f,
        member: i,
        userName: h,
        friendNickname: _,
        displayNameStyles: null == e ? void 0 : e.displayNameStyles
    })
}

function y(e, t) {
    let n = null == e ? void 0 : e.id,
        r = null == t ? void 0 : t.guild_id,
        i = u.A.getGuild(r),
        a = null == r || null == n ? null : l.Ay.getMember(r, n),
        o = null != r && (null == a ? void 0 : a.colorRoleId) != null ? c.A.getRole(r, a.colorRoleId) : void 0,
        s = null != n && null != t && t.isPrivate() ? d.A.getNickname(n) : null;
    return b({
        user: e,
        channel: t,
        guild: i,
        memberColorRole: o,
        member: a,
        friendNickname: s,
        displayNameStyles: null == e ? void 0 : e.displayNameStyles
    })
}

function b(e) {
    var t, n;
    let {
        user: r,
        channel: i,
        guild: a,
        memberColorRole: o,
        member: s,
        userName: l,
        friendNickname: c,
        displayNameStyles: u
    } = e, d = null == r ? "???" : null != l ? l : p.Ay.getName(r);
    return (null == r ? void 0 : r.id) == null || null == i ? {
        nick: d,
        colorString: null,
        colorStrings: null,
        displayNameStyles: u
    } : (null == a ? void 0 : a.id) == null ? {
        nick: null != c ? c : d,
        colorString: null,
        colorStrings: null,
        displayNameStyles: u
    } : null == s ? {
        nick: d,
        colorString: null,
        colorStrings: null,
        displayNameStyles: u
    } : {
        nick: null != (t = s.nick) ? t : d,
        colorString: s.colorString,
        colorStrings: s.colorStrings,
        colorRoleName: null == o ? void 0 : o.name,
        colorRoleId: null == o ? void 0 : o.id,
        iconRoleId: s.iconRoleId,
        guildMemberAvatar: s.avatar,
        guildMemberAvatarDecoration: s.avatarDecoration,
        primaryGuild: null != (n = r.primaryGuild) ? n : void 0,
        guildId: a.id,
        authorId: r.id,
        displayNameStyles: u
    }
}