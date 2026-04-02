/** chunk id: 904854 params = (module,exports,require) **/
n.d(t, {
    A: () => h
});
var i = n(627968),
    l = n(64700),
    a = n(158954),
    r = n(311907),
    s = n(397927),
    o = n(802341),
    c = n(538451),
    d = n(21119),
    u = n(907459),
    _ = n(734057),
    A = n(287809),
    m = n(562153),
    E = n(763754),
    T = n(447215),
    I = n(888675),
    N = n(502197),
    g = n(985018),
    f = n(547270);

function C(e) {
    let {
        users: t,
        guildId: n,
        channelId: l
    } = e;
    return (0, i.jsx)(s.lGe, {
        className: f.XM,
        children: (0, i.jsx)(s.HOs, {
            className: f.XG,
            children: (0, i.jsx)("div", {
                children: t.map(e => (0, i.jsx)(c.A, {
                    user: e,
                    guildId: n ?? void 0,
                    channelId: l,
                    nick: m.Ay.getNickname(n, l, e)
                }, e.id))
            })
        })
    })
}

function h(e) {
    let {
        message: t,
        channel: n,
        compact: c
    } = e, m = (0, N.K)(t), h = (0, r.yK)([A.default], () => t.call?.participants != null ? t.call.participants.map(e => A.default.getUser(e)).filter(e => null != e).filter(e => e.id !== t.author.id) : [], [t.author.id, t.call]), p = (0, r.bG)([d.A], () => d.A.getUserAffinitiesMap(), []), S = l.useMemo(() => (0, u.L)(h, p, "VoiceSession - participants"), [h, p]), x = t.messageReference?.channel_id, R = (0, r.bG)([_.A], () => _.A.getChannel(x)), O = function(e, t, n, a, r, c) {
        let d = (0, T.P)({
                user: n,
                channelId: t.id,
                guildId: t.guild_id,
                messageId: e.id
            }),
            u = (0, T.P)({
                user: a[0],
                channelId: t.id,
                guildId: t.guild_id,
                messageId: e.id
            }),
            _ = (0, T.P)({
                user: a[1],
                channelId: t.id,
                guildId: t.guild_id,
                messageId: e.id
            }),
            A = (0, E.Ay)(e),
            [m, I] = a,
            N = (0, E.d8)(m, t),
            h = (0, E.d8)(I, t),
            p = function(e, t) {
                let n = l.useRef(null),
                    [a, r] = l.useState(!1),
                    o = l.useCallback(n => (0, i.jsx)(C, {
                        users: n,
                        guildId: e,
                        channelId: t
                    }), [e, t]);
                return l.useCallback(e => (t, l) => (0, i.jsx)(s.YNO, {
                    targetElementRef: n,
                    renderPopout: () => o(e),
                    shouldShow: a,
                    position: "bottom",
                    onRequestClose: () => r(!1),
                    children: e => (0, i.jsx)(s.DUT, {
                        ...e,
                        tag: "a",
                        style: {
                            display: "inline"
                        },
                        innerRef: n,
                        onClick: () => {
                            r(e => !e)
                        },
                        children: t
                    })
                }, l), [a, o])
            }(t.guild_id, t.id),
            S = l.useCallback((e, t) => null == c ? e : (0, i.jsx)(o.T, {
                channel: c,
                childWrapperClassName: f.c6,
                children: (0, i.jsx)(s.DUT, {
                    tag: "a",
                    children: e
                })
            }, t), [c]);
        return null == r ? g.intl.format(g.t["eX6e/3"], {
            username: A.nick,
            usernameHook: d(A),
            channelHook: S
        }) : g.intl.format(g.t.YUbgR8, {
            userCount: a.length + 1,
            username: A.nick,
            usernameHook: d(A),
            username2: N.nick,
            username2Hook: u(N),
            username3: h.nick,
            username3Hook: _(h),
            otherCount: a.length - 1,
            othersHook: p([n, ...a]),
            duration: r
        })
    }(t, n, t.author, S, m, R), M = l.useMemo(() => {
        let e = (0, i.jsx)(a.HKD, {
            size: "md",
            color: s.LU0.colors.STATUS_POSITIVE
        });
        return null == R || null != m ? e : (0, i.jsx)(o.T, {
            channel: R,
            children: (0, i.jsx)(a.HKD, {
                size: "md",
                color: s.LU0.colors.STATUS_POSITIVE
            })
        })
    }, [R, m]);
    return (0, i.jsx)(I.A, {
        iconNode: M,
        iconContainerClassName: f.zc,
        timestamp: t.timestamp,
        compact: c,
        children: O
    })
}