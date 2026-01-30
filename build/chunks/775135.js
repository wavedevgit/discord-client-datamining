/** chunk id: 775135, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => j
}), n(896048);
var r = n(627968),
    i = n(64700),
    l = n(311907),
    a = n(554146),
    s = n(506774),
    o = n(108722),
    c = n(379848),
    u = n(571616),
    d = n(541041),
    p = n(289357),
    h = n(264328),
    g = n(636781),
    f = n(935158),
    m = n(836953),
    A = n(314457),
    _ = n(536194),
    b = n(612340),
    E = n(860768),
    O = n(90166),
    y = n(940447),
    I = n(665037),
    v = n(946960),
    S = n(49999);
let C = new Set([a.M.CHANNEL_NOTICE_PREMIUM_GUILD_SUBSCRIPTION, a.M.CHANNEL_NOTICE_GUILD_BANNER]);

function N(e) {
    e.stopPropagation()
}

function T(e) {
    var t;
    let {
        guild: n
    } = e, [p, g] = i.useState(null != (t = s.w.get(v.hV)) ? t : 0), f = (0, l.yK)(v.cJ, () => v.cA.filter(e => {
        let {
            dismissibleContentType: t,
            store: r
        } = e;
        return !0 === (null == r ? void 0 : r.channelNoticePredicate(n, p)) && !C.has(t)
    }).map(e => e.dismissibleContentType), [n, p]);
    return (0, r.jsx)(c.Ay, {
        contentTypes: f,
        groupName: S.m.CHANNEL_NOTICES,
        children: e => {
            let {
                visibleContent: t,
                markAsDismissed: i
            } = e, l = () => {
                var e;
                e = Date.now(), s.w.set(v.hV, e), g(e), i(S.i.UNKNOWN)
            }, c = (() => {
                switch (t) {
                    case a.M.CHANNEL_NOTICE_HUBLINK:
                        return (0, r.jsx)(h.A, {
                            guild: n,
                            markAsDismissed: l
                        });
                    case a.M.CHANNEL_NOTICE_INVITE:
                        return (0, r.jsx)(E.A, {
                            guild: n,
                            markAsDismissed: l
                        });
                    case a.M.CHANNEL_NOTICE_PREMIUM_GUILD_SUBSCRIPTION:
                        return (0, r.jsx)(d.A, {
                            guild: n,
                            markAsDismissed: l
                        });
                    case a.M.CHANNEL_NOTICE_QUICKSWITCHER:
                        return (0, r.jsx)(y.A, {
                            guild: n,
                            markAsDismissed: l
                        });
                    case a.M.CHANNEL_NOTICE_GUILD_BANNER:
                        return (0, r.jsx)(u.A, {
                            guild: n,
                            markAsDismissed: l
                        });
                    case a.M.LINKED_ROLE_ADMIN_GUILD:
                        return (0, r.jsx)(o.A, {
                            guild: n,
                            markAsDismissed: () => i(S.i.UNKNOWN)
                        });
                    default:
                        return null
                }
            })();
            return null == c ? null : (0, r.jsx)("div", {
                onContextMenu: N,
                children: c
            })
        }
    })
}
let j = e => {
    let {
        guild: t
    } = e;
    switch ((0, I.A)(t)) {
        case I.G.ENABLE_PUBLIC_GUILD:
            return (0, r.jsx)(A.A, {
                guild: t
            });
        case I.G.MAX_MEMBER_COUNT:
            return (0, r.jsx)(O.A, {
                guild: t
            });
        case I.G.GUILD_LIVE_CHANNEL:
            return (0, r.jsx)(p.Ay, {
                guild: t
            });
        case I.G.GUILD_MFA_WARNING:
            return (0, r.jsx)(b.A, {
                guild: t
            });
        case I.G.COMMANDS_MIGRATION:
            return (0, r.jsx)(f.A, {
                guild: t
            });
        case I.G.APPLICATION_SUBSCRIPTION_EXPIRATION:
            return (0, r.jsx)(m.A, {
                guild: t
            });
        case I.G.HUB_STUDY_ROOM:
            return (0, r.jsx)(g.A, {
                guild: t
            })
    }
    return _.P.isDisallowPopupsSet() ? null : (0, r.jsx)(T, {
        guild: e.guild
    })
}