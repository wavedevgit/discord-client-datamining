/** chunk id: 823142, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    AV: () => R,
    Ay: () => y,
    P4: () => j,
    kD: () => O,
    sM: () => L
});
var i = n(627968),
    s = n(64700),
    l = n(503698),
    a = n.n(l),
    r = n(837381),
    o = n(311907),
    c = n(3026),
    d = n(990078),
    u = n(732955),
    h = n(397927),
    A = n(914430),
    p = n(442433),
    m = n(676002),
    g = n(485947),
    _ = n(924985),
    f = n(71393),
    x = n(576705),
    C = n(543465),
    E = n(551851),
    I = n(879124),
    N = n(652215),
    S = n(985018),
    b = n(33925);

function T(e) {
    e.stopPropagation()
}
let v = s.memo(function(e) {
        let t, {
                channel: l,
                connectChannelDragSource: u,
                connectChannelDropTarget: m,
                disableManageChannels: E,
                position: I,
                sortingPosition: v,
                hideIcon: y,
                children: j
            } = e,
            R = (0, o.bG)([C.Ay], () => C.Ay.isChannelMuted(l.getGuildId(), l.id)),
            O = (0, o.bG)([_.A], () => _.A.isCollapsed(l.id)),
            L = (0, o.bG)([x.A], () => x.A.can(N.xBc.MANAGE_CHANNELS, l));
        t = null != v ? I > v ? b.mU : b.TR : b.fx;
        let M = s.useCallback(() => {
                O ? (0, A.fh)(l.id) : (0, A.Gv)(l.id)
            }, [l.id, O]),
            D = s.useCallback(e => {
                if ("null" !== l.id) {
                    let t = f.A.getGuild(l.getGuildId());
                    null != t && (0, p.L3)(e, async () => {
                        let {
                            default: e
                        } = await Promise.all([n.e("75149"), n.e("40540")]).then(n.bind(n, 725756));
                        return n => (0, i.jsx)(e, {
                            ...n,
                            channel: l,
                            guild: t
                        })
                    })
                }
            }, [l]),
            G = s.useCallback(() => {
                let e = l.type === N.rbe.GUILD_CATEGORY ? null : l.type,
                    t = l.getGuildId();
                null != t && (0, h.mMO)(async () => {
                    let {
                        default: s
                    } = await Promise.all([n.e("64233"), n.e("9743")]).then(n.bind(n, 409200));
                    return n => (0, i.jsx)(s, {
                        ...n,
                        channelType: e,
                        guildId: t,
                        categoryId: "null" !== l.id ? l.id : null
                    })
                })
            }, [l]),
            {
                role: U,
                tabIndex: P,
                ...w
            } = (0, r.rm)(l.id),
            k = s.useRef(null),
            V = s.useRef(null),
            B = (0, i.jsxs)("li", {
                className: t,
                "data-dnd-name": l.name,
                children: [(0, i.jsx)(h.vN3, {
                    focusTarget: k,
                    ringTarget: V,
                    offset: {
                        left: 4,
                        right: 4
                    },
                    children: (0, i.jsxs)("div", {
                        ref: V,
                        className: a()(b.Ki, b.iE, {
                            [b.yZ]: O,
                            [b.SU]: R,
                            [b.vk]: !0
                        }),
                        onContextMenu: D,
                        children: [(0, i.jsxs)(h.DUT, {
                            innerRef: k,
                            className: b.rb,
                            tabIndex: P,
                            ...w,
                            onClick: M,
                            "aria-label": S.intl.formatToPlainString(S.t.y5l3J2, {
                                categoryName: l.name
                            }),
                            "aria-expanded": !O,
                            focusProps: {
                                enabled: !1
                            },
                            children: [(0, i.jsx)(g.A, {
                                className: b.UU,
                                children: (0, i.jsx)(c.A, {
                                    children: l.name
                                })
                            }), y ? null : (0, i.jsx)(h.abt, {
                                size: "md",
                                color: "currentColor",
                                className: b.Kk
                            })]
                        }), (0, i.jsx)("div", {
                            onClick: T,
                            className: b.Y_,
                            children: L && !E ? (0, i.jsx)(d.m, {
                                text: S.intl.string(S.t["fUYU+j"]),
                                children: (0, i.jsx)(h.DUT, {
                                    className: a()(b.c9, b.ih),
                                    onClick: G,
                                    tabIndex: P,
                                    role: "button",
                                    "aria-label": S.intl.string(S.t["fUYU+j"]),
                                    children: (0, i.jsx)(h.TIR, {
                                        size: "xs",
                                        color: "currentColor",
                                        className: b.hs
                                    })
                                })
                            }) : null
                        })]
                    })
                }), j]
            });
        return null != m && null != u ? m(u(B)) : B
    }),
    y = (0, m.a)(v),
    j = s.memo(function(e) {
        let {
            name: t,
            onDismiss: n,
            className: s
        } = e;
        return (0, i.jsx)("li", {
            className: a()(s, b.fx),
            children: (0, i.jsxs)("div", {
                className: a()(b.Ki, b._V),
                children: [(0, i.jsx)("div", {
                    className: b.rb,
                    children: (0, i.jsx)(g.A, {
                        className: b.UU,
                        children: (0, i.jsx)(c.A, {
                            children: t
                        })
                    })
                }), null != n ? (0, i.jsx)(d.m, {
                    asContainer: !0,
                    text: S.intl.string(S.t["5qNmsU"]),
                    children: (0, i.jsx)(h.DUT, {
                        className: b.r,
                        onClick: n,
                        children: (0, i.jsx)(h.aXh, {
                            size: "md",
                            color: "currentColor",
                            className: b.X8
                        })
                    })
                }) : null]
            })
        })
    }),
    R = s.memo(function(e) {
        let {
            category: t
        } = e, n = (0, o.bG)([E.A], () => E.A.isVoiceCategoryCollapsed(t.guild.id)), l = s.useCallback(() => {
            n ? (0, I.T)(t.guild.id) : (0, I.E)(t.guild.id)
        }, [t.guild.id, n]);
        return (0, i.jsx)("div", {
            className: b.oA,
            children: (0, i.jsx)(u.$nd, {
                variant: "secondary",
                fullWidth: !0,
                onClick: l,
                icon: h.HKD,
                text: n ? S.intl.string(S.t["/eB9Bg"]) : S.intl.string(S.t.Q2gPWl)
            })
        })
    }),
    O = s.memo(function(e) {
        let {
            category: t,
            channel: n
        } = e, s = (0, o.bG)([E.A], () => E.A.isVoiceCategoryCollapsed(t.guild.id));
        return s || null == n || n.record.type === N.rbe.GUILD_CATEGORY ? s ? (0, i.jsx)("li", {
            className: b.fx,
            children: (0, i.jsx)("div", {
                className: a()(b.Ki, b._V),
                children: (0, i.jsx)(g.A, {
                    className: b.UU,
                    children: (0, i.jsx)(c.A, {
                        children: S.intl.string(S.t["V/u9Dy"])
                    })
                })
            })
        }) : null : (0, i.jsx)("div", {
            style: {
                height: 16
            }
        })
    }),
    L = s.memo(function(e) {
        let {
            channel: t
        } = e;
        return (0, i.jsx)("li", {
            className: b.fx,
            children: (0, i.jsx)("div", {
                className: a()(b.Ki, b._V),
                children: (0, i.jsx)(g.A, {
                    className: b.UU,
                    children: (0, i.jsx)(c.A, {
                        children: t.name
                    })
                })
            })
        })
    })