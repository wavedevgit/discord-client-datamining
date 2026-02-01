/** chunk id: 241874, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => f
});
var l = n(627968),
    r = n(64700),
    i = n(143413),
    a = n(860227),
    s = n(643204),
    o = n(449859),
    c = n(535421),
    u = n(112758),
    d = n(652215);
let h = r.memo(function(e) {
        let {
            message: t,
            channel: n,
            compact: i = !1,
            groupId: a,
            isGroupStart: o,
            usernameProfile: h,
            avatarProfile: p,
            setPopout: f,
            author: m,
            repliedMessage: g,
            roleIcon: A
        } = e, b = (0, u.r4)(t.author.id, n.id), _ = (0, u.m)(t, n, h, f), y = (0, u.Jo)(p, f), v = r.useCallback(() => {
            f({
                usernameProfile: !1,
                avatarProfile: !1,
                referencedUsernameProfile: !1
            })
        }, [f]);
        return (0, l.jsx)(s.Ay, {
            guildId: n.guild_id,
            message: t,
            channel: n,
            repliedMessage: g,
            author: m,
            compact: i,
            subscribeToGroupId: a,
            showTimestampOnHover: !o && i && t.type !== d.lAJ.REPLY,
            renderPopout: c.A,
            showAvatarPopout: p,
            showUsernamePopout: h,
            onClickAvatar: y,
            onClickUsername: _,
            onContextMenu: b,
            onPopoutRequestClose: v,
            roleIcon: A
        })
    }),
    p = r.memo(o.A);

function f(e) {
    let {
        messageProps: t,
        setPopout: n,
        messagePopouts: r,
        replyReference: s,
        author: o,
        repliedMessage: c,
        roleIcon: u
    } = e, {
        message: d,
        compact: f,
        channel: m,
        groupId: g
    } = t, {
        usernameProfile: A,
        avatarProfile: b
    } = r;
    if ((0, i.A)(d)) return null;
    let _ = d.id === g;
    return _ || f || null != s ? (0, l.jsx)(h, {
        message: d,
        channel: m,
        compact: f,
        subscribeToGroupId: g,
        isGroupStart: _,
        groupId: g,
        setPopout: n,
        usernameProfile: A,
        avatarProfile: b,
        author: o,
        repliedMessage: c,
        roleIcon: u
    }) : (0, l.jsx)(p, {
        compact: !0,
        timestamp: d.timestamp,
        isInline: !1,
        id: (0, a.xl)(d),
        isVisibleOnlyOnHover: !0,
        cozyAlt: !0
    })
}