/** Chunk was on 77870 **/
/** chunk id: 241874, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => f
});
var r = n(627968),
    l = n(64700),
    i = n(143413),
    s = n(860227),
    a = n(643204),
    o = n(449859),
    c = n(535421),
    u = n(112758),
    d = n(652215);
let p = l.memo(function(e) {
        let {
            message: t,
            channel: n,
            compact: i = !1,
            groupId: s,
            isGroupStart: o,
            usernameProfile: p,
            avatarProfile: h,
            setPopout: f,
            author: g,
            repliedMessage: m,
            roleIcon: b
        } = e, A = (0, u.r4)(t.author.id, n.id), y = (0, u.m)(t, n, p, f), _ = (0, u.Jo)(h, f), O = l.useCallback(() => {
            f({
                usernameProfile: !1,
                avatarProfile: !1,
                referencedUsernameProfile: !1
            })
        }, [f]);
        return (0, r.jsx)(a.Ay, {
            guildId: n.guild_id,
            message: t,
            channel: n,
            repliedMessage: m,
            author: g,
            compact: i,
            subscribeToGroupId: s,
            showTimestampOnHover: !o && i && t.type !== d.lAJ.REPLY,
            renderPopout: c.A,
            showAvatarPopout: h,
            showUsernamePopout: p,
            onClickAvatar: _,
            onClickUsername: y,
            onContextMenu: A,
            onPopoutRequestClose: O,
            roleIcon: b
        })
    }),
    h = l.memo(o.A);

function f(e) {
    let {
        messageProps: t,
        setPopout: n,
        messagePopouts: l,
        replyReference: a,
        author: o,
        repliedMessage: c,
        roleIcon: u
    } = e, {
        message: d,
        compact: f,
        channel: g,
        groupId: m
    } = t, {
        usernameProfile: b,
        avatarProfile: A
    } = l;
    if ((0, i.A)(d)) return null;
    let y = d.id === m;
    return y || f || null != a ? (0, r.jsx)(p, {
        message: d,
        channel: g,
        compact: f,
        subscribeToGroupId: m,
        isGroupStart: y,
        groupId: m,
        setPopout: n,
        usernameProfile: b,
        avatarProfile: A,
        author: o,
        repliedMessage: c,
        roleIcon: u
    }) : (0, r.jsx)(h, {
        compact: !0,
        timestamp: d.timestamp,
        isInline: !1,
        id: (0, s.xl)(d),
        isVisibleOnlyOnHover: !0,
        cozyAlt: !0
    })
}