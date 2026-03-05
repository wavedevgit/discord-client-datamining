/** chunk id: 692150 params = (module,exports,require) **/
n.r(t), n.d(t, {
    default: () => T
});
var a = n(627968),
    s = n(64700),
    i = n(934551),
    l = n(311907),
    r = n(397927),
    d = n(544420),
    c = n(58736),
    o = n(801264),
    u = n(71393),
    m = n(975571),
    _ = n(363487),
    x = n(665171),
    f = n(397400),
    g = n(187549),
    v = n(522055),
    j = n(969117),
    h = n(982257),
    A = n(270424),
    p = n(140033),
    C = n(486180),
    b = n(566704),
    N = n(652215),
    I = n(738072),
    E = n(985018),
    S = n(192150);

function T(e) {
    let {
        guildId: t
    } = e;
    (0, f.tR)(t);
    let n = (0, g.U)("GameServerPage"),
        T = (0, l.bG)([u.A], () => u.A.getGuild(t)?.features.has(N.GuildFeatures.GAME_SERVERS) ?? !1);
    (0, b.A)(T ? t : null), s.useEffect(() => {
        T && ((0, x.cq)(t), d.A.getDetectableGames())
    }, [t, T]);
    let y = (0, _.A)(t),
        R = (0, j.N)("GameServerPage"),
        M = (0, l.bG)([v.A], () => v.A.getStateForGuild(t)),
        G = s.useMemo(() => {
            if (!M?.hasFetchedInstances) return;
            let e = Object.values(M.instances ?? {});
            return 0 === e.length ? null : e.map((e, n) => (0, a.jsx)(p.Ay, {
                guildId: t,
                instance: e
            }, `${e.gameId}-${n}`))
        }, [M?.instances, M?.hasFetchedInstances, t]),
        [k, L] = s.useState(!1);
    return s.useEffect(() => {
        (null == G || G.length > 0) && L(!0)
    }, [G]), (0, a.jsxs)("div", {
        className: S.kL,
        children: [(0, a.jsxs)(c.Ay, {
            className: S.KE,
            toolbar: (0, a.jsx)("div", {}),
            children: [(0, a.jsx)(c.Ay.Icon, {
                icon: i.GameControllerIcon,
                "aria-label": ""
            }), (0, a.jsx)(c.Ay.Title, {
                children: E.intl.string(I.default.vCzwM7)
            }), (0, a.jsx)(r.LpS, {
                disableColor: !0,
                text: E.intl.string(E.t.oW0eUd),
                className: S.qS
            }), (0, a.jsx)(c.Ay.Divider, {
                className: S.yF
            }), (0, a.jsx)(r.Text, {
                variant: "text-sm/normal",
                color: "text-muted",
                children: E.intl.format(I.default.LiR4eN, {
                    helpCenterUrl: m.A.getArticleURL(N.MVz.GAME_SERVER_HOSTING)
                })
            })]
        }), (0, a.jsxs)("div", {
            className: S.hQ,
            children: [T && !M?.hasFetchedInstances ? (0, a.jsx)("div", {
                className: S.dc,
                children: (0, a.jsx)(r.y$y, {
                    type: r.tVU.SPINNING_CIRCLE
                })
            }) : null == G ? (0, a.jsx)(h.A, {
                guildId: t
            }) : (0, a.jsxs)("div", {
                className: S.nd,
                children: [n && (0, a.jsx)("div", {
                    className: S.MR,
                    children: (0, a.jsx)(o.A, {
                        look: o.k.WARNING,
                        children: E.intl.format(I.default.XzXjK2, {})
                    })
                }), (0, a.jsx)(r.IpV, {
                    children: (0, a.jsxs)("div", {
                        className: S.Y_,
                        children: [G, k && (0, a.jsx)(A.A, {
                            guildId: t
                        })]
                    })
                })]
            }), (y || R) && (0, a.jsx)(C.A, {
                guildId: t,
                isAdmin: y ?? !1
            })]
        })]
    })
}