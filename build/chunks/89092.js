/** chunk id: 89092 params = (module,exports,require) **/
l.d(t, {
    A: () => R
});
var n = l(627968),
    i = l(64700),
    s = l(503698),
    a = l.n(s),
    C = l(33851),
    r = l.n(C),
    o = l(417597),
    d = l(990078),
    c = l(397927),
    u = l(71393),
    m = l(576705),
    x = l(70738),
    h = l(587426),
    g = l(134413),
    H = l(266047),
    p = l(100172),
    j = l(401695),
    _ = l(925282),
    f = l(441358),
    b = l(386404),
    A = l(652215),
    v = l(985018),
    V = l(301050),
    L = l(62255);
let D = i.forwardRef(function(e, t) {
    let {
        label: l,
        onFilter: i,
        isFiltered: s,
        isSorted: C,
        className: r,
        ...o
    } = e, d = s ? "text-strong" : "text-default";
    return C && (d = "text-brand"), (0, n.jsx)("th", {
        className: a()(V.P1, r),
        children: (0, n.jsxs)(c.DUT, {
            ...o,
            innerRef: t,
            onClick: i,
            className: a()(V.WV, {
                [V.o1]: null != i
            }),
            children: [(0, n.jsx)(c.Text, {
                variant: "eyebrow",
                color: d,
                children: l
            }), null != i && (0, n.jsx)("div", {
                className: V.IO,
                children: (0, n.jsx)(c.RgP, {
                    size: "custom",
                    className: V.Sj,
                    color: s ? c.LU0.colors.CONTROL_BRAND_FOREGROUND.css : c.LU0.colors.TEXT_MUTED.css,
                    width: 16,
                    height: 16
                })
            })]
        })
    })
});

function R(e) {
    let {
        guildId: t,
        currentPagedMembers: l
    } = e, s = i.useRef(null), C = i.useRef(null), R = i.useRef(null), M = i.useRef(null), N = i.useRef(null), S = (0, o.bG)([H.A], () => H.A.getSearchStateByGuildId(t), [t], r()), E = (0, o.bG)([m.A, u.A], () => m.A.can(A.xBc.MANAGE_GUILD, u.A.getGuild(t)), [t]), {
        selectedUserIds: I,
        addUsers: y,
        clearSelection: T
    } = (0, h.A)(t), Z = S.requireUnusualDmActivity || S.requireCommunicationDisabled || S.requireUnusualAccountActivity || S.requireUsernameQuarantined, U = S.selectedRoleIds.size > 0, w = null != S.selectedJoinDateOption.afterDate, O = S.selectedSort === x.mF.ORDER_BY_GUILD_JOINED_AT_ASC, k = null != S.selectedAccountAgeOption.afterDate, F = S.selectedSort === x.mF.ORDER_BY_USER_ID_ASC || S.selectedSort === x.mF.ORDER_BY_USER_ID_DESC, B = null != S.selectedSourceInviteCode && "" !== S.selectedSourceInviteCode, P = null != S.selectedJoinSourceType, G = B || P, Y = (0, g.vA)(t), q = i.useMemo(() => l.filter(e => (0, g.Ph)(t, Y, e)), [Y, l, t]), z = q.length > 0, K = 0 === q.filter(e => !I.has(e)).length, Q = i.useCallback(() => {
        z && (K ? T() : y(q))
    }, [z, K, T, y, q]);
    return (0, n.jsx)("thead", {
        children: (0, n.jsxs)("tr", {
            className: V.Yk,
            children: [Y && (0, n.jsx)("th", {
                className: a()(V.P1, L.y2),
                children: (0, n.jsx)(d.m, {
                    shouldShow: !z,
                    text: v.intl.string(v.t.tJEY0G),
                    children: (0, n.jsx)(c.DUT, {
                        onClick: Q,
                        className: V.WV,
                        children: (0, n.jsx)(c.P7L, {
                            checked: K,
                            disabled: !z
                        })
                    })
                })
            }), (0, n.jsx)(D, {
                label: v.intl.string(v.t.Es7n9c)
            }), E ? (0, n.jsxs)(n.Fragment, {
                children: [(0, n.jsx)(c.YNO, {
                    targetElementRef: s,
                    animation: c.YNO.Animation.FADE,
                    position: "bottom",
                    spacing: 4,
                    align: "left",
                    renderPopout: () => (0, n.jsx)(_.A, {
                        guildId: t,
                        onClose: A.tEg
                    }),
                    children: e => {
                        let {
                            onClick: t,
                            ...l
                        } = e;
                        return (0, n.jsx)(D, {
                            ref: s,
                            label: v.intl.string(v.t.xcKP1P),
                            onFilter: t,
                            isFiltered: w,
                            isSorted: O,
                            className: L.qp,
                            ...l
                        })
                    }
                }), (0, n.jsx)(c.YNO, {
                    targetElementRef: C,
                    animation: c.YNO.Animation.FADE,
                    position: "bottom",
                    spacing: 4,
                    align: "left",
                    renderPopout: () => (0, n.jsx)(p.A, {
                        guildId: t,
                        onClose: A.tEg
                    }),
                    children: e => {
                        let {
                            onClick: t,
                            ...l
                        } = e;
                        return (0, n.jsx)(D, {
                            ref: C,
                            label: v.intl.string(v.t.sPph4O),
                            onFilter: t,
                            isFiltered: k,
                            isSorted: F,
                            className: L.qp,
                            ...l
                        })
                    }
                })]
            }) : (0, n.jsxs)(n.Fragment, {
                children: [(0, n.jsx)(D, {
                    label: v.intl.string(v.t.xcKP1P),
                    className: L.qp
                }), (0, n.jsx)(D, {
                    label: v.intl.string(v.t.sPph4O),
                    className: L.qp
                })]
            }), E ? (0, n.jsx)(c.YNO, {
                targetElementRef: R,
                animation: c.YNO.Animation.FADE,
                position: "bottom",
                spacing: 4,
                align: "left",
                renderPopout: () => (0, n.jsx)(f.default, {
                    guildId: t,
                    onClose: A.tEg
                }),
                children: e => {
                    let {
                        onClick: t,
                        ...l
                    } = e;
                    return (0, n.jsx)(D, {
                        ref: R,
                        label: v.intl.string(v.t["yn0w1+"]),
                        onFilter: t,
                        isFiltered: G,
                        className: L.qp,
                        ...l
                    })
                }
            }) : null, (0, n.jsx)(c.YNO, {
                targetElementRef: M,
                animation: c.YNO.Animation.FADE,
                position: "bottom",
                spacing: 4,
                align: "left",
                renderPopout: e => {
                    let {
                        closePopout: l
                    } = e;
                    return (0, n.jsx)(b.A, {
                        guildId: t,
                        onClose: l
                    })
                },
                children: e => {
                    let {
                        onClick: t,
                        ...l
                    } = e;
                    return (0, n.jsx)(D, {
                        ref: M,
                        label: v.intl.string(v.t["2SZsWX"]),
                        onFilter: t,
                        isFiltered: U,
                        className: L.QB,
                        ...l
                    })
                }
            }), (0, n.jsx)(d.m, {
                text: v.intl.string(v.t["2cRO3R"]),
                position: "top",
                align: "left",
                shouldShow: !0,
                children: (0, n.jsx)(c.YNO, {
                    targetElementRef: N,
                    animation: c.YNO.Animation.FADE,
                    position: "bottom",
                    spacing: 4,
                    align: "left",
                    renderPopout: e => {
                        let {
                            closePopout: l
                        } = e;
                        return (0, n.jsx)(j.A, {
                            guildId: t,
                            onClose: l
                        })
                    },
                    children: e => (0, n.jsx)(D, {
                        ref: N,
                        label: v.intl.string(v.t["7V3759"]),
                        "aria-label": v.intl.string(v.t["2cRO3R"]),
                        onFilter: t => {
                            e.onClick?.(t)
                        },
                        isFiltered: Z,
                        className: L.qp,
                        onMouseEnter: () => {
                            e.onMouseEnter?.()
                        },
                        onMouseDown: e.onMouseDown,
                        onKeyDown: e.onKeyDown,
                        "aria-controls": e["aria-controls"],
                        "aria-expanded": e["aria-expanded"]
                    })
                })
            }), (0, n.jsx)(D, {
                label: v.intl.string(v.t["5Q9xGr"]),
                className: L.qp
            })]
        })
    })
}