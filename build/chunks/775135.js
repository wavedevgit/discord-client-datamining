/** chunk id: 775135 params = (module,exports,require) **/
n.d(t, {
    A: () => P
}), n(321073);
var i = n(627968),
    r = n(64700),
    a = n(311907),
    l = n(554146),
    s = n(506774),
    o = n(108722),
    d = n(932001),
    c = n(975076),
    u = n(67602),
    A = n(571616),
    h = n(541041),
    _ = n(289357),
    m = n(264328),
    p = n(636781),
    g = n(935158),
    E = n(836953),
    I = n(314457),
    f = n(536194),
    C = n(612340),
    T = n(860768),
    N = n(90166),
    S = n(940447),
    v = n(665037),
    x = n(946960),
    y = n(49999);
let b = new Set([l.M.CHANNEL_NOTICE_PREMIUM_GUILD_SUBSCRIPTION, l.M.CHANNEL_NOTICE_GUILD_BANNER]);

function O(e) {
    e.stopPropagation()
}
let L = [];

function R(e) {
    var t;
    let n, {
            guild: _
        } = e,
        [p, g] = r.useState(s.w.get(x.hV) ?? 0),
        E = (t = _.id, n = (0, c.I)(t), r.useMemo(() => {
            let e = [];
            return n && e.push(l.M.GAME_CLAIM_COACHMARK), e.length > 0 ? e : L
        }, [n])),
        [I, f] = (0, d.ww)(E, _.id, y.m.CHANNEL_NOTICES, !0),
        C = null != I,
        N = (0, a.yK)(x.cJ, () => C ? [] : x.cA.filter(e => {
            let {
                dismissibleContentType: t,
                store: n
            } = e;
            return !0 === n?.channelNoticePredicate(_, p) && !b.has(t)
        }).map(e => e.dismissibleContentType), [_, p, C]),
        [v, R] = (0, d.kn)(N, y.m.CHANNEL_NOTICES),
        P = I ?? v,
        D = null != I ? f : R,
        M = r.useCallback(() => {
            var e;
            e = Date.now(), s.w.set(x.hV, e), g(e), D(y.i.UNKNOWN)
        }, [D]),
        j = (() => {
            switch (P) {
                case l.M.CHANNEL_NOTICE_HUBLINK:
                    return (0, i.jsx)(m.A, {
                        guild: _,
                        markAsDismissed: M
                    });
                case l.M.CHANNEL_NOTICE_INVITE:
                    return (0, i.jsx)(T.A, {
                        guild: _,
                        markAsDismissed: M
                    });
                case l.M.CHANNEL_NOTICE_PREMIUM_GUILD_SUBSCRIPTION:
                    return (0, i.jsx)(h.A, {
                        guild: _,
                        markAsDismissed: M
                    });
                case l.M.CHANNEL_NOTICE_QUICKSWITCHER:
                    return (0, i.jsx)(S.A, {
                        guild: _,
                        markAsDismissed: M
                    });
                case l.M.CHANNEL_NOTICE_GUILD_BANNER:
                    return (0, i.jsx)(A.A, {
                        guild: _,
                        markAsDismissed: M
                    });
                case l.M.LINKED_ROLE_ADMIN_GUILD:
                    return (0, i.jsx)(o.A, {
                        guild: _,
                        markAsDismissed: () => D(y.i.UNKNOWN)
                    });
                case l.M.GAME_CLAIM_COACHMARK:
                    return (0, i.jsx)(u.A, {
                        guild: _,
                        markAsDismissed: D
                    });
                default:
                    return null
            }
        })();
    return null == j ? null : (0, i.jsx)("div", {
        onContextMenu: O,
        children: j
    })
}
let P = e => {
    let {
        guild: t
    } = e;
    switch ((0, v.A)(t)) {
        case v.G.ENABLE_PUBLIC_GUILD:
            return (0, i.jsx)(I.A, {
                guild: t
            });
        case v.G.MAX_MEMBER_COUNT:
            return (0, i.jsx)(N.A, {
                guild: t
            });
        case v.G.GUILD_LIVE_CHANNEL:
            return (0, i.jsx)(_.Ay, {
                guild: t
            });
        case v.G.GUILD_MFA_WARNING:
            return (0, i.jsx)(C.A, {
                guild: t
            });
        case v.G.COMMANDS_MIGRATION:
            return (0, i.jsx)(g.A, {
                guild: t
            });
        case v.G.APPLICATION_SUBSCRIPTION_EXPIRATION:
            return (0, i.jsx)(E.A, {
                guild: t
            });
        case v.G.HUB_STUDY_ROOM:
            return (0, i.jsx)(p.A, {
                guild: t
            })
    }
    return f.P.isDisallowPopupsSet() ? null : (0, i.jsx)(R, {
        guild: e.guild
    })
}