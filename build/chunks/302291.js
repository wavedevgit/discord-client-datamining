/** chunk id: 302291 params = (module,exports,require) **/
n.d(t, {
    R: () => A,
    d: () => E
});
var i = n(627968),
    a = n(64700),
    l = n(397927),
    r = n(763754),
    s = n(447215),
    o = n(888675),
    c = n(342296),
    d = n(486020),
    u = n(552691),
    _ = n(652215);

function m(e, t) {
    let n = a.useRef(null);
    return a.useCallback(a => (r, s) => {
        let o = d.Ay.getApplicationIconURL({
                id: a.id,
                icon: a.icon,
                bot: a.bot,
                botIconFirst: !0
            }),
            {
                bot: u
            } = a;
        return null == u ? r : (0, i.jsx)(c.A, {
            targetElementRef: n,
            userId: u.id,
            avatarUrl: o,
            guildId: e.guild_id,
            channelId: e.id,
            messageId: t.id,
            clickTrap: !0,
            children: e => (0, i.jsx)(l.MzZ, {
                ...e,
                ref: n,
                children: r
            })
        }, s)
    }, [e, t.id])
}

function A(e) {
    let {
        message: t,
        channel: a,
        compact: l
    } = e, c = (0, r.Ay)(t), d = t.application, A = (0, s.P)({
        user: t.author,
        channelId: a.id,
        guildId: a.guild_id,
        messageId: t.id
    }), E = m(a, t);
    return (0, i.jsx)(o.A, {
        icon: n(617184),
        timestamp: t.timestamp,
        compact: l,
        children: (0, u.eu)({
            application: d,
            username: c.nick,
            usernameHook: A(c),
            applicationNameHook: null != d ? E(d) : _.tEg
        })
    })
}

function E(e) {
    let {
        message: t,
        channel: a,
        compact: l
    } = e, c = (0, r.Ay)(t), d = t.application, A = (0, s.P)({
        user: t.author,
        channelId: a.id,
        guildId: a.guild_id,
        messageId: t.id
    }), E = m(a, t);
    return (0, i.jsx)(o.A, {
        icon: n(884797),
        timestamp: t.timestamp,
        compact: l,
        children: (0, u.A0)({
            application: d,
            username: c.nick,
            usernameHook: A(c),
            applicationNameHook: null != d ? E(d) : _.tEg
        })
    })
}