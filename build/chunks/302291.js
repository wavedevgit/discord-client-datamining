/** chunk id: 302291, original params: e,t,n (module,exports,require) **/
n.d(t, {
    R: () => A,
    d: () => f
});
var i = n(627968),
    l = n(64700),
    a = n(397927),
    r = n(763754),
    s = n(447215),
    o = n(888675),
    c = n(342296),
    d = n(486020),
    u = n(552691),
    m = n(652215);

function _(e, t) {
    let n = l.useRef(null);
    return l.useCallback(l => (r, s) => {
        let o = d.Ay.getApplicationIconURL({
                id: l.id,
                icon: l.icon,
                bot: l.bot,
                botIconFirst: !0
            }),
            {
                bot: u
            } = l;
        return null == u ? r : (0, i.jsx)(c.A, {
            targetElementRef: n,
            userId: u.id,
            avatarUrl: o,
            guildId: e.guild_id,
            channelId: e.id,
            messageId: t.id,
            clickTrap: !0,
            children: e => (0, i.jsx)(a.MzZ, {
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
        channel: l,
        compact: a
    } = e, c = (0, r.Ay)(t), d = t.application, A = (0, s.P)({
        user: t.author,
        channelId: l.id,
        guildId: l.guild_id,
        messageId: t.id
    }), f = _(l, t);
    return (0, i.jsx)(o.A, {
        icon: n(617184),
        timestamp: t.timestamp,
        compact: a,
        children: (0, u.eu)({
            application: d,
            username: c.nick,
            usernameHook: A(c),
            applicationNameHook: null != d ? f(d) : m.tEg
        })
    })
}

function f(e) {
    let {
        message: t,
        channel: l,
        compact: a
    } = e, c = (0, r.Ay)(t), d = t.application, A = (0, s.P)({
        user: t.author,
        channelId: l.id,
        guildId: l.guild_id,
        messageId: t.id
    }), f = _(l, t);
    return (0, i.jsx)(o.A, {
        icon: n(884797),
        timestamp: t.timestamp,
        compact: a,
        children: (0, u.A0)({
            application: d,
            username: c.nick,
            usernameHook: A(c),
            applicationNameHook: null != d ? f(d) : m.tEg
        })
    })
}