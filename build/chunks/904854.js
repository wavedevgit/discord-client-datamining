/** chunk id: 904854 params = (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => f
});
var i = n(627968),
    r = n(64700),
    l = n(158954),
    s = n(311907),
    a = n(397927),
    o = n(802341),
    c = n(538451),
    u = n(734057),
    d = n(562153),
    _ = n(944052),
    A = n(480012),
    E = n(763754),
    m = n(447215),
    I = n(888675),
    T = n(985018),
    g = n(202447);

function N(e) {
    let {
        users: t,
        guildId: n,
        channelId: r
    } = e;
    return (0, i.jsx)(a.lGe, {
        className: g.XM,
        children: (0, i.jsx)(a.HOs, {
            className: g.XG,
            children: (0, i.jsx)("div", {
                children: t.map(e => (0, i.jsx)(c.A, {
                    user: e,
                    guildId: n ?? void 0,
                    channelId: r,
                    nick: d.Ay.getNickname(n, r, e)
                }, e.id))
            })
        })
    })
}

function f(e) {
    let {
        message: t,
        channel: n,
        compact: c
    } = e, d = (0, A.A)(t), f = (0, _.X7)(t), C = t.messageReference?.channel_id, p = (0, s.bG)([u.A], () => u.A.getChannel(C)), h = function(e, t, n, l, s, c) {
        let u = (0, m.P)({
                user: n,
                channelId: t.id,
                guildId: t.guild_id,
                messageId: e.id
            }),
            d = (0, m.P)({
                user: l[0],
                channelId: t.id,
                guildId: t.guild_id,
                messageId: e.id
            }),
            _ = (0, m.P)({
                user: l[1],
                channelId: t.id,
                guildId: t.guild_id,
                messageId: e.id
            }),
            A = (0, E.Ay)(e),
            [I, f] = l,
            C = (0, E.d8)(I, t),
            p = (0, E.d8)(f, t),
            h = function(e, t) {
                let n = r.useRef(null),
                    [l, s] = r.useState(!1),
                    o = r.useCallback(n => (0, i.jsx)(N, {
                        users: n,
                        guildId: e,
                        channelId: t
                    }), [e, t]);
                return r.useCallback(e => (t, r) => (0, i.jsx)(a.YNO, {
                    targetElementRef: n,
                    renderPopout: () => o(e),
                    shouldShow: l,
                    position: "bottom",
                    onRequestClose: () => s(!1),
                    children: e => (0, i.jsx)(a.DUT, {
                        ...e,
                        tag: "a",
                        style: {
                            display: "inline"
                        },
                        innerRef: n,
                        onClick: () => {
                            s(e => !e)
                        },
                        children: t
                    })
                }, r), [l, o])
            }(t.guild_id, t.id),
            S = r.useCallback((e, t) => null == c ? e : (0, i.jsx)(o.T, {
                channel: c,
                childWrapperClassName: g.c6,
                children: (0, i.jsx)(a.DUT, {
                    tag: "a",
                    children: e
                })
            }, t), [c]);
        return null == s ? T.intl.format(T.t["eX6e/3"], {
            username: A.nick,
            usernameHook: u(A),
            channelHook: S
        }) : T.intl.format(T.t.YUbgR8, {
            userCount: l.length + 1,
            username: A.nick,
            usernameHook: u(A),
            username2: C.nick,
            username2Hook: d(C),
            username3: p.nick,
            username3Hook: _(p),
            otherCount: l.length - 1,
            othersHook: h([n, ...l]),
            duration: s
        })
    }(t, n, t.author, f, d, p), S = r.useMemo(() => {
        let e = (0, i.jsx)(l.HKD, {
            size: "md",
            color: a.LU0.colors.STATUS_POSITIVE
        });
        return null == p || null != d ? e : (0, i.jsx)(o.T, {
            channel: p,
            children: (0, i.jsx)(l.HKD, {
                size: "md",
                color: a.LU0.colors.STATUS_POSITIVE
            })
        })
    }, [p, d]);
    return (0, i.jsx)(I.A, {
        iconNode: S,
        iconContainerClassName: g.zc,
        timestamp: t.timestamp,
        compact: c,
        children: h
    })
}