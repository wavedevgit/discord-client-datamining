/** Chunk was on 38985 **/
/** chunk id: 666813, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => I
});
var l = n(627968),
    r = n(64700),
    a = n(417597),
    i = n(397927),
    s = n(854378),
    o = n(221950),
    u = n(836731),
    c = n(589935),
    E = n(71393),
    d = n(309010),
    _ = n(706752),
    g = n(829887),
    A = n(652215),
    T = n(985018),
    h = n(438536);

function I(e) {
    let {
        member: t
    } = e, n = (0, a.bG)([E.A], () => E.A.getGuild(t.guildId), [t.guildId]), I = (0, u.GT)(t.userId, t.guildId), O = (0, u.Wi)(t.userId, t.guildId), m = (0, u.t)(t.userId), N = (0, u.ff)(t.userId, t.guildId);
    return (r.useEffect(() => {
        (0, o.uO)(t.guildId)
    }, [t.guildId]), null == n) ? null : (0, l.jsx)(i.D0$, {
        label: T.intl.string(T.t["ldCE/p"]),
        children: (0, l.jsxs)(g.SQ, {
            children: [(0, l.jsx)(g.RU, {
                icon: (0, l.jsx)(i.iTF, {
                    size: "custom",
                    width: g.mb,
                    height: g.mb
                }),
                name: (0, l.jsx)(i.Text, {
                    variant: "text-sm/medium",
                    color: "text-default",
                    children: T.intl.string(T.t.nzGai4)
                }),
                description: I ? (0, l.jsx)(i.rOg, {
                    size: "custom",
                    width: g.mb,
                    height: g.mb,
                    color: i.LU0.colors.STATUS_POSITIVE
                }) : (0, l.jsx)(i.UlM, {
                    size: "custom",
                    width: g.mb,
                    height: g.mb,
                    color: i.LU0.colors.ICON_FEEDBACK_CRITICAL
                })
            }), O !== u.bM.NO_GATE && (0, l.jsx)(g.RU, {
                icon: (0, l.jsx)(i.B8Q, {
                    size: "custom",
                    width: g.mb,
                    height: g.mb
                }),
                name: (0, l.jsx)(i.Text, {
                    variant: "text-sm/medium",
                    color: "text-default",
                    children: T.intl.string(T.t["93hqln"])
                }),
                description: O === u.bM.AGREED ? (0, l.jsx)(i.rOg, {
                    size: "custom",
                    width: g.mb,
                    height: g.mb,
                    color: i.LU0.colors.STATUS_POSITIVE
                }) : (0, l.jsx)(i.UlM, {
                    size: "custom",
                    width: g.mb,
                    height: g.mb,
                    color: i.LU0.colors.ICON_FEEDBACK_CRITICAL
                })
            }), (0, l.jsx)(g.RU, {
                icon: (0, l.jsx)(i.pVd, {
                    size: "custom",
                    color: "currentColor",
                    width: g.mb,
                    height: g.mb
                }),
                name: (0, l.jsx)(i.Text, {
                    variant: "text-sm/medium",
                    color: "text-default",
                    children: T.intl.string(T.t.SaDIpL)
                }),
                description: (0, l.jsx)(i.Text, {
                    variant: "text-sm/medium",
                    color: "text-default",
                    children: m
                })
            }), (0, l.jsx)(g.RU, {
                icon: (0, l.jsx)(s.$v, {
                    guild: n,
                    size: s.$v.Sizes.SMOL,
                    animate: !1,
                    className: h.$f
                }),
                name: (0, l.jsx)(i.Text, {
                    variant: "text-sm/medium",
                    color: "text-default",
                    children: T.intl.string(T.t["NQJ+WG"])
                }),
                description: (0, l.jsx)(i.Text, {
                    variant: "text-sm/medium",
                    color: "text-default",
                    children: N
                })
            }), (0, l.jsx)(g.RU, {
                icon: (0, l.jsx)(i.DpX, {
                    size: "custom",
                    width: g.mb,
                    height: g.mb
                }),
                name: (0, l.jsx)(i.Text, {
                    variant: "text-sm/medium",
                    color: "text-default",
                    children: T.intl.string(T.t["eJOq+Z"])
                }),
                description: (0, l.jsx)(i.Text, {
                    variant: "text-sm/medium",
                    color: "text-default",
                    children: (0, l.jsx)(c.Ay, {
                        userId: t.userId,
                        guildId: t.guildId,
                        showJoinMethodContextAsFooter: !0,
                        onClickInviter: e => {
                            let n = d.A.getChannelId();
                            (0, _.z)(t.guildId, e.id, null != n ? n : A.dJq)
                        }
                    })
                })
            })]
        })
    })
}