/** chunk id: 904854 params = (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => p
});
var i = n(627968),
    r = n(64700),
    s = n(158954),
    a = n(311907),
    l = n(397927),
    o = n(802341),
    c = n(538451),
    u = n(734057),
    d = n(562153),
    _ = n(944052),
    E = n(480012),
    A = n(763754),
    m = n(447215),
    I = n(888675),
    T = n(985018),
    N = n(202447);

function g(e) {
    let {
        users: t,
        guildId: n,
        channelId: r
    } = e;
    return (0, i.jsx)(l.lGe, {
        className: N.XM,
        children: (0, i.jsx)(l.HOs, {
            className: N.XG,
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

function p(e) {
    let {
        message: t,
        channel: n,
        compact: c
    } = e, d = (0, E.A)(t), p = (0, _.X7)(t), C = t.messageReference?.channel_id, f = (0, a.bG)([u.A], () => u.A.getChannel(C)), h = function(e, t, n, s, a, c) {
        let u = (0, m.P)({
                user: n,
                channelId: t.id,
                guildId: t.guild_id,
                messageId: e.id
            }),
            d = (0, m.P)({
                user: s[0],
                channelId: t.id,
                guildId: t.guild_id,
                messageId: e.id
            }),
            _ = (0, m.P)({
                user: s[1],
                channelId: t.id,
                guildId: t.guild_id,
                messageId: e.id
            }),
            E = (0, A.Ay)(e),
            [I, p] = s,
            C = (0, A.d8)(I, t),
            f = (0, A.d8)(p, t),
            h = function(e, t) {
                let n = r.useRef(null),
                    [s, a] = r.useState(!1),
                    o = r.useCallback(n => (0, i.jsx)(g, {
                        users: n,
                        guildId: e,
                        channelId: t
                    }), [e, t]);
                return r.useCallback(e => (t, r) => (0, i.jsx)(l.YNO, {
                    targetElementRef: n,
                    renderPopout: () => o(e),
                    shouldShow: s,
                    position: "bottom",
                    onRequestClose: () => a(!1),
                    children: e => (0, i.jsx)(l.DUT, {
                        ...e,
                        tag: "a",
                        style: {
                            display: "inline"
                        },
                        innerRef: n,
                        onClick: () => {
                            a(e => !e)
                        },
                        children: t
                    })
                }, r), [s, o])
            }(t.guild_id, t.id),
            S = r.useCallback((e, t) => null == c ? e : (0, i.jsx)(o.T, {
                channel: c,
                childWrapperClassName: N.c6,
                children: (0, i.jsx)(l.DUT, {
                    tag: "a",
                    children: e
                })
            }, t), [c]);
        return null == a ? T.intl.format(T.t["eX6e/3"], {
            username: E.nick,
            usernameHook: u(E),
            channelHook: S
        }) : T.intl.format(T.t.YUbgR8, {
            userCount: s.length + 1,
            username: E.nick,
            usernameHook: u(E),
            username2: C.nick,
            username2Hook: d(C),
            username3: f.nick,
            username3Hook: _(f),
            otherCount: s.length - 1,
            othersHook: h([n, ...s]),
            duration: a
        })
    }(t, n, t.author, p, d, f), S = r.useMemo(() => {
        let e = (0, i.jsx)(s.HKD, {
            size: "md",
            color: l.LU0.colors.STATUS_POSITIVE
        });
        return null == f || null != d ? e : (0, i.jsx)(o.T, {
            channel: f,
            children: (0, i.jsx)(s.HKD, {
                size: "md",
                color: l.LU0.colors.STATUS_POSITIVE
            })
        })
    }, [f, d]);
    return (0, i.jsx)(I.A, {
        iconNode: S,
        iconContainerClassName: N.zc,
        timestamp: t.timestamp,
        compact: c,
        children: h
    })
}