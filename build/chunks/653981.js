/** chunk id: 653981 params = (module,exports,require) **/
s.d(e, {
    default: () => U
}), s(321073);
var i = s(627968),
    n = s(64700),
    l = s(136722),
    a = s(311907),
    o = s(554146),
    r = s(827734),
    c = s(990078),
    d = s(732955),
    _ = s(397927),
    S = s(997509),
    u = s(636042),
    E = s(376092),
    f = s(317525),
    m = s(488926),
    h = s(45780),
    p = s(652215),
    I = s(49999),
    N = s(124759),
    T = s(985018),
    x = s(298754);

function O(t) {
    let {
        guild: e
    } = t, s = (0, a.bG)([f.A], () => f.A.getEveryoneRole(e));
    if (null == s) return null;
    let {
        name: n,
        color: l
    } = s;
    return (0, i.jsxs)("span", {
        className: x.xf,
        children: [(0, i.jsx)(_.WYI, {
            className: x.m4,
            color: l.toString(),
            background: !1,
            tooltip: !1
        }), (0, i.jsx)(_.Text, {
            className: x.S3,
            variant: "text-sm/medium",
            color: "interactive-text-active",
            children: n
        })]
    })
}
let R = t => t.toString() === p.xBc.MENTION_EVERYONE.toString() ? T.intl.string(T.t.yCpsQw) : (0, E.hx)(t);

function g(t) {
    let {
        permissions: e,
        step: s
    } = t;
    return 2 === s ? null : (0, i.jsxs)("div", {
        className: x.CZ,
        children: [(0, i.jsx)(_.Text, {
            className: x.qd,
            variant: "text-xs/semibold",
            color: "text-muted",
            children: 0 === s ? T.intl.string(T.t["0WZKI4"]) : T.intl.string(T.t.xU8RDk)
        }), (0, i.jsx)("div", {
            className: x.lM,
            children: e.map((t, e) => (0, i.jsxs)("div", {
                className: x.ce,
                children: [(0, i.jsx)("div", {
                    className: 0 === s ? x.I0 : x.dT
                }), (0, i.jsx)(_.Text, {
                    variant: "text-sm/normal",
                    color: "text-default",
                    children: R(t)
                })]
            }, e))
        })]
    })
}

function L(t) {
    let {
        permissions: e,
        step: s
    } = t;
    return 0 === e.length && 2 !== s ? null : (2 === s && (e = N.dR), (0, i.jsxs)("div", {
        className: x.CZ,
        children: [(0, i.jsx)(_.Text, {
            className: x.qd,
            variant: "text-xs/semibold",
            color: "text-muted",
            children: 2 === s ? T.intl.string(T.t.FgMS6i) : T.intl.string(T.t.Yo5qlq)
        }), (0, i.jsx)("div", {
            className: x.lM,
            children: e.map((t, e) => (0, i.jsxs)("div", {
                className: x.ce,
                children: [(0, i.jsx)("div", {
                    className: x.xE
                }), (0, i.jsx)(_.Text, {
                    variant: "text-sm/normal",
                    color: "text-muted",
                    children: R(t)
                })]
            }, e))
        })]
    }))
}

function G(t) {
    let {
        permissions: e,
        step: s
    } = t, {
        enabledPermissions: n,
        disabledPermissions: l
    } = e;
    return 0 === n.length && 2 !== s ? null : (0, i.jsxs)("div", {
        className: x.tp,
        children: [2 !== s ? (0, i.jsx)(g, {
            permissions: n,
            step: s
        }) : null, (0, i.jsx)(L, {
            permissions: l,
            step: s
        })]
    })
}

function A(t) {
    let {
        guild: e,
        permissions: s,
        step: n,
        canEveryoneModerate: l,
        isDefaultNotificationsAllMessages: a
    } = t;
    return (0, i.jsxs)(i.Fragment, {
        children: [a ? (0, i.jsxs)("div", {
            className: x.J_,
            children: [(0, i.jsx)(_.yr3, {
                size: "md",
                className: x.aV,
                color: r.A.unsafe_rawColors.GREEN_360.css,
                secondaryColor: r.A.unsafe_rawColors.WHITE.css
            }), (0, i.jsx)(_.Text, {
                variant: "text-md/normal",
                children: T.intl.format(T.t.K8Eg4P, {
                    infoHook: () => (0, i.jsx)(c.m, {
                        text: T.intl.string(T.t["3h2WyM"]),
                        "aria-label": T.intl.string(T.t["3h2WyM"]),
                        children: (0, i.jsx)(_.mir, {
                            size: "xs",
                            color: "currentColor",
                            className: x.Kk
                        })
                    })
                })
            })]
        }) : null, l ? (0, i.jsxs)("div", {
            className: x.J_,
            children: [(0, i.jsx)(_.yr3, {
                size: "md",
                className: x.aV,
                color: r.A.unsafe_rawColors.GREEN_360.css,
                secondaryColor: r.A.unsafe_rawColors.WHITE.css
            }), (0, i.jsx)(_.Text, {
                variant: "text-md/normal",
                children: T.intl.string(T.t.LfeFFr)
            }), (0, i.jsx)(O, {
                guild: e
            })]
        }) : null, (0, i.jsx)(G, {
            permissions: s,
            step: n
        })]
    })
}

function U(t) {
    let {
        guild: e,
        canEveryoneModerate: s,
        isDefaultNotificationsAllMessages: a,
        transitionState: r,
        onClose: c
    } = t, [_, E] = n.useState(0), x = n.useMemo(() => {
        let t = [],
            s = [];
        return N.dR.map(i => {
            m.Ib(i, e) ? t.push(i) : s.push(i)
        }), {
            enabledPermissions: t,
            disabledPermissions: s
        }
    }, [e]);
    if (null == e) return null;
    let O = () => {
            let t, i;
            s && (t = f.A.getEveryoneRole(e), i = l.TF(t.permissions, N.e$), (0, u.JY)(e.id, [{
                ...t,
                permissions: i
            }])), a && (S.A.updateGuild({
                defaultMessageNotifications: p.orn.ONLY_MENTIONS
            }), S.A.saveGuild(e.id, {
                defaultMessageNotifications: p.orn.ONLY_MENTIONS
            }))
        },
        R = [...0 === _ ? [{
            variant: "secondary",
            text: T.intl.string(T.t.gWQZvr),
            onClick: () => {
                c(), (0, h._$)(o.V.DISABLE_UNSAFE_COMMUNITY_PERMISSIONS_NOTICE, e.id, !0, I.i.DISMISS)
            }
        }] : [], {
            variant: "primary",
            text: 0 === _ ? s ? T.intl.string(T.t.R7GC7b) : T.intl.string(T.t.iOSdAW) : T.intl.string(T.t.mVuDq5),
            onClick: () => {
                s || (O(), c(), (0, h._$)(o.V.DISABLE_UNSAFE_COMMUNITY_PERMISSIONS_NOTICE, e?.id ?? "", !0, I.i.PRIMARY)), 0 === _ ? (E(1), setTimeout(() => E(2), 3e3)) : 2 === _ && (O(), c(), (0, h._$)(o.V.DISABLE_UNSAFE_COMMUNITY_PERMISSIONS_NOTICE, e?.id ?? "", !0, I.i.PRIMARY))
            },
            loading: 1 === _
        }];
    return (0, i.jsx)(d.aFV, {
        transitionState: r,
        onClose: c,
        size: "md",
        title: s ? T.intl.string(T.t["7/ux15"]) : T.intl.string(T.t.sRcn4z),
        subtitle: s ? T.intl.string(T.t.aliKPx) : T.intl.string(T.t.F4KDOH),
        actions: R,
        children: (0, i.jsx)(A, {
            guild: e,
            permissions: x,
            step: _,
            canEveryoneModerate: s,
            isDefaultNotificationsAllMessages: a
        })
    })
}