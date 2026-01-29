/** Chunk was on 1113 **/
/** chunk id: 241874, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => g
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
let h = l.memo(function(e) {
        let {
            message: t,
            channel: n,
            compact: i = !1,
            groupId: s,
            isGroupStart: o,
            usernameProfile: h,
            avatarProfile: p,
            setPopout: g,
            author: f,
            repliedMessage: m,
            roleIcon: b
        } = e, A = (0, u.r4)(t.author.id, n.id), y = (0, u.m)(t, n, h, g), O = (0, u.Jo)(p, g), _ = l.useCallback(() => {
            g({
                usernameProfile: !1,
                avatarProfile: !1,
                referencedUsernameProfile: !1
            })
        }, [g]);
        return (0, r.jsx)(a.Ay, {
            guildId: n.guild_id,
            message: t,
            channel: n,
            repliedMessage: m,
            author: f,
            compact: i,
            subscribeToGroupId: s,
            showTimestampOnHover: !o && i && t.type !== d.lAJ.REPLY,
            renderPopout: c.A,
            showAvatarPopout: p,
            showUsernamePopout: h,
            onClickAvatar: O,
            onClickUsername: y,
            onContextMenu: A,
            onPopoutRequestClose: _,
            roleIcon: b
        })
    }),
    p = l.memo(o.A);

function g(e) {
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
        compact: g,
        channel: f,
        groupId: m
    } = t, {
        usernameProfile: b,
        avatarProfile: A
    } = l;
    if ((0, i.A)(d)) return null;
    let y = d.id === m;
    return y || g || null != a ? (0, r.jsx)(h, {
        message: d,
        channel: f,
        compact: g,
        subscribeToGroupId: m,
        isGroupStart: y,
        groupId: m,
        setPopout: n,
        usernameProfile: b,
        avatarProfile: A,
        author: o,
        repliedMessage: c,
        roleIcon: u
    }) : (0, r.jsx)(p, {
        compact: !0,
        timestamp: d.timestamp,
        isInline: !1,
        id: (0, s.xl)(d),
        isVisibleOnlyOnHover: !0,
        cozyAlt: !0
    })
}