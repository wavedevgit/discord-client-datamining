/** Chunk was on 42446 **/
/** chunk id: 653981, original params: t,e,n (module,exports,require) **/
n.d(e, {
    default: () => b
}), n(896048), n(321073);
var i = n(627968),
    o = n(64700),
    a = n(136722),
    s = n(311907),
    l = n(554146),
    r = n(827734),
    c = n(990078),
    d = n(732955),
    _ = n(397927),
    p = n(997509),
    u = n(636042),
    E = n(376092),
    S = n(317525),
    f = n(488926),
    I = n(45780),
    N = n(652215),
    O = n(49999),
    h = n(124759),
    m = n(985018),
    T = n(763481);

function y(t) {
    let {
        guild: e
    } = t, n = (0, s.bG)([S.A], () => S.A.getEveryoneRole(e));
    if (null == n) return null;
    let {
        name: o,
        color: a
    } = n;
    return (0, i.jsxs)("span", {
        className: T.xf,
        children: [(0, i.jsx)(_.WYI, {
            className: T.m4,
            color: a.toString(),
            background: !1,
            tooltip: !1
        }), (0, i.jsx)(_.Text, {
            className: T.S3,
            variant: "text-sm/medium",
            color: "interactive-text-active",
            children: o
        })]
    })
}
let x = t => t.toString() === N.xBc.MENTION_EVERYONE.toString() ? m.intl.string(m.t.yCpsQw) : (0, E.hx)(t);

function C(t) {
    let {
        permissions: e,
        step: n
    } = t;
    return 2 === n ? null : (0, i.jsxs)("div", {
        className: T.CZ,
        children: [(0, i.jsx)(_.Text, {
            className: T.qd,
            variant: "text-xs/semibold",
            color: "text-muted",
            children: 0 === n ? m.intl.string(m.t["0WZKI4"]) : m.intl.string(m.t.xU8RDk)
        }), (0, i.jsx)("div", {
            className: T.lM,
            children: e.map((t, e) => (0, i.jsxs)("div", {
                className: T.ce,
                children: [(0, i.jsx)("div", {
                    className: 0 === n ? T.I0 : T.dT
                }), (0, i.jsx)(_.Text, {
                    variant: "text-sm/normal",
                    color: "text-default",
                    children: x(t)
                })]
            }, e))
        })]
    })
}

function R(t) {
    let {
        permissions: e,
        step: n
    } = t;
    return 0 === e.length && 2 !== n ? null : (2 === n && (e = h.dR), (0, i.jsxs)("div", {
        className: T.CZ,
        children: [(0, i.jsx)(_.Text, {
            className: T.qd,
            variant: "text-xs/semibold",
            color: "text-muted",
            children: 2 === n ? m.intl.string(m.t.FgMS6i) : m.intl.string(m.t.Yo5qlq)
        }), (0, i.jsx)("div", {
            className: T.lM,
            children: e.map((t, e) => (0, i.jsxs)("div", {
                className: T.ce,
                children: [(0, i.jsx)("div", {
                    className: T.xE
                }), (0, i.jsx)(_.Text, {
                    variant: "text-sm/normal",
                    color: "text-muted",
                    children: x(t)
                })]
            }, e))
        })]
    }))
}

function g(t) {
    let {
        permissions: e,
        step: n
    } = t, {
        enabledPermissions: o,
        disabledPermissions: a
    } = e;
    return 0 === o.length && 2 !== n ? null : (0, i.jsxs)("div", {
        className: T.tp,
        children: [2 !== n ? (0, i.jsx)(C, {
            permissions: o,
            step: n
        }) : null, (0, i.jsx)(R, {
            permissions: a,
            step: n
        })]
    })
}

function L(t) {
    let {
        guild: e,
        permissions: n,
        step: o,
        canEveryoneModerate: a,
        isDefaultNotificationsAllMessages: s
    } = t;
    return (0, i.jsxs)(i.Fragment, {
        children: [s ? (0, i.jsxs)("div", {
            className: T.J_,
            children: [(0, i.jsx)(_.yr3, {
                size: "md",
                className: T.aV,
                color: r.A.unsafe_rawColors.GREEN_360.css,
                secondaryColor: r.A.unsafe_rawColors.WHITE.css
            }), (0, i.jsx)(_.Text, {
                variant: "text-md/normal",
                children: m.intl.format(m.t.K8Eg4P, {
                    infoHook: () => (0, i.jsx)(c.m, {
                        text: m.intl.string(m.t["3h2WyM"]),
                        "aria-label": m.intl.string(m.t["3h2WyM"]),
                        children: (0, i.jsx)(_.mir, {
                            size: "xs",
                            color: "currentColor",
                            className: T.Kk
                        })
                    })
                })
            })]
        }) : null, a ? (0, i.jsxs)("div", {
            className: T.J_,
            children: [(0, i.jsx)(_.yr3, {
                size: "md",
                className: T.aV,
                color: r.A.unsafe_rawColors.GREEN_360.css,
                secondaryColor: r.A.unsafe_rawColors.WHITE.css
            }), (0, i.jsx)(_.Text, {
                variant: "text-md/normal",
                children: m.intl.string(m.t.LfeFFr)
            }), (0, i.jsx)(y, {
                guild: e
            })]
        }) : null, (0, i.jsx)(g, {
            permissions: n,
            step: o
        })]
    })
}

function b(t) {
    let {
        guild: e,
        canEveryoneModerate: n,
        isDefaultNotificationsAllMessages: s,
        transitionState: r,
        onClose: c
    } = t, [_, E] = o.useState(0), T = o.useMemo(() => {
        let t = [],
            n = [];
        return h.dR.map(i => {
            f.Ib(i, e) ? t.push(i) : n.push(i)
        }), {
            enabledPermissions: t,
            disabledPermissions: n
        }
    }, [e]);
    if (null == e) return null;
    let y = () => {
            var t, i;
            let o, l;
            n && (o = S.A.getEveryoneRole(e), l = a.TF(o.permissions, h.e$), (0, u.JY)(e.id, [(t = function(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var n = null != arguments[e] ? arguments[e] : {},
                        i = Object.keys(n);
                    "function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(n).filter(function(t) {
                        return Object.getOwnPropertyDescriptor(n, t).enumerable
                    }))), i.forEach(function(e) {
                        var i;
                        i = n[e], e in t ? Object.defineProperty(t, e, {
                            value: i,
                            enumerable: !0,
                            configurable: !0,
                            writable: !0
                        }) : t[e] = i
                    })
                }
                return t
            }({}, o), i = i = {
                permissions: l
            }, Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(i)) : (function(t, e) {
                var n = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(t);
                    n.push.apply(n, i)
                }
                return n
            })(Object(i)).forEach(function(e) {
                Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(i, e))
            }), t)])), s && (p.A.updateGuild({
                defaultMessageNotifications: N.orn.ONLY_MENTIONS
            }), p.A.saveGuild(e.id, {
                defaultMessageNotifications: N.orn.ONLY_MENTIONS
            }))
        },
        x = [...0 === _ ? [{
            variant: "secondary",
            text: m.intl.string(m.t.gWQZvr),
            onClick: () => {
                c(), (0, I._$)(l.V.DISABLE_UNSAFE_COMMUNITY_PERMISSIONS_NOTICE, e.id, !0, O.i.DISMISS)
            }
        }] : [], {
            variant: "primary",
            text: 0 === _ ? n ? m.intl.string(m.t.R7GC7b) : m.intl.string(m.t.iOSdAW) : m.intl.string(m.t.mVuDq5),
            onClick: () => {
                var t, i;
                n || (y(), c(), (0, I._$)(l.V.DISABLE_UNSAFE_COMMUNITY_PERMISSIONS_NOTICE, null != (t = null == e ? void 0 : e.id) ? t : "", !0, O.i.PRIMARY)), 0 === _ ? (E(1), setTimeout(() => E(2), 3e3)) : 2 === _ && (y(), c(), (0, I._$)(l.V.DISABLE_UNSAFE_COMMUNITY_PERMISSIONS_NOTICE, null != (i = null == e ? void 0 : e.id) ? i : "", !0, O.i.PRIMARY))
            },
            loading: 1 === _
        }];
    return (0, i.jsx)(d.aFV, {
        transitionState: r,
        onClose: c,
        size: "md",
        title: n ? m.intl.string(m.t["7/ux15"]) : m.intl.string(m.t.sRcn4z),
        subtitle: n ? m.intl.string(m.t.aliKPx) : m.intl.string(m.t.F4KDOH),
        actions: x,
        children: (0, i.jsx)(L, {
            guild: e,
            permissions: T,
            step: _,
            canEveryoneModerate: n,
            isDefaultNotificationsAllMessages: s
        })
    })
}