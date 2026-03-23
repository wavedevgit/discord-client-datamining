/** chunk id: 692150 params = (module,exports,require) **/
n.r(t), n.d(t, {
    default: () => b
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
    _ = n(975571),
    m = n(363487),
    x = n(665171),
    g = n(397400),
    f = n(187549),
    v = n(522055),
    j = n(969117),
    h = n(982257),
    A = n(140033),
    C = n(486180),
    p = n(566704),
    I = n(652215),
    N = n(294726),
    E = n(985018),
    S = n(715896);

function b(e) {
    let {
        guildId: t
    } = e;
    (0, g.tR)(t);
    let n = (0, f.U)("GameServerPage"),
        b = (0, l.bG)([u.A], () => u.A.getGuild(t)?.features.has(I.GuildFeatures.GAME_SERVERS) ?? !1);
    (0, p.A)(b ? t : null), s.useEffect(() => {
        b && ((0, x.cq)(t), d.A.getDetectableGames())
    }, [t, b]);
    let T = (0, m.A)(t),
        R = (0, j.N)("GameServerPage"),
        M = (0, l.bG)([v.A], () => v.A.getStateForGuild(t)),
        y = s.useMemo(() => {
            if (!M?.hasFetchedInstances) return;
            let e = Object.values(M.instances ?? {});
            return 0 === e.length ? null : e.map((e, n) => (0, a.jsx)(A.Ay, {
                guildId: t,
                instance: e
            }, `${e.gameId}-${n}`))
        }, [M?.instances, M?.hasFetchedInstances, t]);
    return (0, a.jsxs)("div", {
        className: S.kL,
        children: [(0, a.jsxs)(c.Ay, {
            className: S.KE,
            toolbar: (0, a.jsx)("div", {}),
            children: [(0, a.jsx)(c.Ay.Icon, {
                icon: i.GameControllerIcon,
                "aria-label": ""
            }), (0, a.jsx)(c.Ay.Title, {
                children: E.intl.string(N.default.vCzwM7)
            }), (0, a.jsx)(r.LpS, {
                disableColor: !0,
                text: E.intl.string(E.t.oW0eUd),
                className: S.qS
            }), (0, a.jsx)(c.Ay.Divider, {
                className: S.yF
            }), (0, a.jsx)(r.Text, {
                variant: "text-sm/normal",
                color: "text-muted",
                children: E.intl.format(N.default.LiR4eN, {
                    helpCenterUrl: _.A.getArticleURL(I.MVz.GAME_SERVER_HOSTING)
                })
            })]
        }), (0, a.jsxs)("div", {
            className: S.hQ,
            children: [b && !M?.hasFetchedInstances ? (0, a.jsx)("div", {
                className: S.dc,
                children: (0, a.jsx)(r.y$y, {
                    type: r.tVU.SPINNING_CIRCLE
                })
            }) : null == y ? (0, a.jsx)(h.A, {
                guildId: t
            }) : (0, a.jsxs)("div", {
                className: S.nd,
                children: [n && (0, a.jsx)("div", {
                    className: S.MR,
                    children: (0, a.jsx)(o.A, {
                        look: o.k.WARNING,
                        children: E.intl.format(N.default.XzXjK2, {})
                    })
                }), (0, a.jsx)(r.IpV, {
                    children: (0, a.jsx)("div", {
                        className: S.Y_,
                        children: y
                    })
                })]
            }), (T || R) && (0, a.jsx)(C.A, {
                guildId: t,
                isAdmin: T ?? !1
            })]
        })]
    })
}