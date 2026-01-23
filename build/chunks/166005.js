/** Chunk was on web.js **/
/** chunk id: 166005, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    Q: () => J,
    Y: () => K
}), n(896048), n(321073);
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(835245),
    l = n(837381),
    c = n(884362),
    u = n(311907),
    d = n(827734),
    f = n(435371),
    p = n(397927),
    _ = n(442433),
    h = n(686956),
    m = n(775602),
    g = n(915089),
    E = n(201275),
    y = n(997509),
    b = n(967144),
    O = n(657048),
    v = n(253932),
    A = n(34457),
    I = n(696451),
    S = n(576705),
    T = n(287809),
    C = n(488926),
    N = n(465738),
    w = n(652215),
    R = n(985018),
    P = n(456665);

function D(e, t, n) {
    return t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = n, e
}

function x(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
            return Object.getOwnPropertyDescriptor(n, e).enumerable
        }))), r.forEach(function(t) {
            D(e, t, n[t])
        })
    }
    return e
}

function L(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t && (r = r.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
        })), n.push.apply(n, r)
    }
    return n
}

function j(e, t) {
    return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : L(Object(t)).forEach(function(n) {
        Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
    }), e
}

function M(e, t) {
    if (null == e) return {};
    var n, r, i, a = {};
    if ("u" > typeof Reflect && Reflect.ownKeys) {
        for (i = 0, n = Reflect.ownKeys(e); i < n.length; i++) r = n[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
        return a
    }
    if (a = k(e, t), Object.getOwnPropertySymbols)
        for (i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++) r = n[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
    return a
}

function k(e, t) {
    if (null == e) return {};
    var n, r, i = {},
        a = Object.getOwnPropertyNames(e);
    for (r = 0; r < a.length; r++) n = a[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    return i
}
let U = d.A.unsafe_rawColors.PRIMARY_300;

function G(e) {
    var t, n;
    let {
        role: i,
        guildId: a,
        trailing: o,
        itemRef: l,
        labelId: c,
        className: d,
        style: _
    } = e, h = (0, E.$7)({
        roleId: i.id,
        size: 12,
        guildId: a
    }), g = (0, u.bG)([m.A], () => m.A.roleStyle), y = (0, b.X_)(a, i, i.colorStrings), v = (null == (n = i.tags) ? void 0 : n.guild_connections) === null, A = (0, p.rdh)(U).hex(), I = null != (t = i.colorString) ? t : A, S = () => "dot" === g ? (0, r.jsx)(p.WYI, {
        className: P.m4,
        color: I,
        background: !1,
        colors: y,
        tooltip: !1
    }) : (0, r.jsx)(p.RYH, {
        color: I,
        colors: y
    });
    return (0, r.jsxs)("div", {
        ref: l,
        className: s()(P.JC, d),
        style: _,
        children: [S(), v && (0, r.jsx)(p.qYV, {
            className: P.AP,
            size: "custom",
            width: 12,
            height: 12,
            color: "currentColor"
        }), (0, r.jsx)(f.m_, {
            text: i.name,
            overflowOnly: !0,
            ariaHidden: !0,
            children: (0, r.jsx)(p.Text, {
                variant: "text-xs/normal",
                color: "text-default",
                className: P.S3,
                id: c,
                children: i.name
            })
        }), null != h ? (0, r.jsx)(O.A, j(x({
            className: P.UT
        }, h), {
            enableTooltip: !1
        })) : null, o]
    })
}

function V(e) {
    let {
        role: t,
        canRemove: n,
        onRemoveRole: a,
        onContextMenu: s
    } = e, o = M(e, ["role", "canRemove", "onRemoveRole", "onContextMenu"]), c = (0, l.rm)(t.id), {
        tabIndex: u
    } = c, d = M(c, ["tabIndex"]), _ = (0, g.GV)(), h = i.useCallback(e => {
        e.preventDefault(), e.stopPropagation(), null == a || a(t)
    }, [a, t]), m = n ? (0, r.jsx)(f.m_, {
        text: R.intl.string(R.t["T+3Adg"]),
        spacing: 4,
        ariaHidden: !0,
        children: (0, r.jsx)(p.DUT, {
            "aria-label": R.intl.formatToPlainString(R.t.QrxwhY, {
                roleName: t.name
            }),
            onClick: h,
            className: P.DT,
            tabIndex: u,
            children: (0, r.jsx)(p.PGe, {
                size: "xxs",
                color: "currentColor"
            })
        })
    }) : void 0;
    return (0, r.jsx)(p.vN3, {
        children: (0, r.jsx)("div", j(x({}, d), {
            tabIndex: u,
            onContextMenu: s,
            className: P.b6,
            "aria-labelledby": _,
            children: (0, r.jsx)(G, x({
                role: t,
                className: n ? P.nO : void 0,
                trailing: m,
                labelId: _
            }, o))
        }))
    })
}

function F(e) {
    let {
        roleCount: t,
        children: n
    } = e, a = i.useMemo(() => "roles-".concat((0, o.A)()), []), s = (0, c.Ay)({
        id: a,
        isEnabled: !0,
        scrollToStart: w.js$,
        scrollToEnd: w.js$,
        wrap: !0
    }), u = R.intl.formatToPlainString(R.t.PCs0oo, {
        numRoles: t
    });
    return (0, r.jsx)(l.hD, {
        navigator: s,
        children: (0, r.jsx)(l.PR, {
            children: e => {
                let {
                    ref: t
                } = e, i = M(e, ["ref"]);
                return (0, r.jsx)("div", j(x({}, i), {
                    ref: t,
                    "aria-label": u,
                    className: P.JK,
                    children: n
                }))
            }
        })
    })
}

function B(e) {
    var t;
    let {
        userId: n,
        guild: a,
        showLabel: o = !1,
        onAddRole: l,
        buttonRef: c
    } = e, d = (0, u.bG)([T.default], () => T.default.getCurrentUser()), _ = null != d ? C.HJ(a, d.id) : null, h = (0, u.bG)([I.Ay], () => I.Ay.getMember(a.id, n)), g = null != (t = null == h ? void 0 : h.roles) ? t : [], E = (0, u.bG)([m.A], () => m.A.roleStyle), b = i.useRef(null), O = null != c ? c : b, v = i.useCallback(e => {
        var t;
        null == l || l();
        let r = I.Ay.getMember(a.id, n),
            i = null != (t = null == r ? void 0 : r.roles) ? t : [];
        i.includes(e) || (i = [...i, e]), y.A.updateMemberRoles(a.id, n, i, [e], [])
    }, [a.id, n, l]), w = e => !(0, A.Oy)(e) && !e.managed && S.A.isRoleHigher(a, _, e) && -1 === g.indexOf(e.id);
    return (0, r.jsx)(p.YNO, {
        targetElementRef: O,
        position: "bottom",
        align: "center",
        renderPopout: e => {
            let {
                closePopout: t
            } = e;
            return (0, r.jsx)(N.A, {
                guild: a,
                roleStyle: E,
                roleFilter: w,
                onSelect: v,
                onClose: t
            })
        },
        children: e => (0, r.jsx)(f.m_, {
            text: R.intl.string(R.t.e3Wlyw),
            shouldShow: !o,
            ariaHidden: !0,
            children: (0, r.jsxs)(p.DUT, j(x({
                innerRef: O,
                "aria-label": R.intl.string(R.t.e3Wlyw),
                className: s()(P.c9, {
                    [P.MS]: o
                })
            }, e), {
                children: [(0, r.jsx)(p.j96, {
                    size: "sm",
                    color: "currentColor"
                }), o && (0, r.jsx)(p.Text, {
                    variant: "text-xs/normal",
                    color: "none",
                    children: R.intl.string(R.t.e3Wlyw)
                })]
            }))
        })
    })
}

function H(e) {
    let {
        userId: t,
        guild: n,
        roles: r,
        allowEditing: a,
        readOnly: s
    } = e, o = (0, u.bG)([T.default], () => T.default.getCurrentUser()), l = v.Q_.useSetting(), [c] = (0, u.yK)([S.A], () => [S.A.can(w.xBc.MANAGE_ROLES, n), S.A.getGuildVersion(n.id)]), d = null != o ? C.HJ(n, o.id) : null, f = i.useMemo(() => {
        let e = new Set;
        return s || !a || r.forEach(r => {
            var i;
            ((null == (i = r.tags) ? void 0 : i.guild_connections) === null ? t === (null == o ? void 0 : o.id) : c && C.wO(n, null == o ? void 0 : o.id, d, r)) && e.add(r.id)
        }), e
    }, [s, a, r, t, null == o ? void 0 : o.id, c, n, d]), p = !s && l, _ = !s && a && c;
    return {
        canAddRoles: _,
        canRemoveAnyRoles: f.size > 0,
        isRoleRemovable: i.useCallback(e => f.has(e), [f]),
        hasDeveloperContextMenu: p
    }
}

function Y(e, t, n) {
    return i.useCallback(r => {
        var i, a;
        null == n || n();
        let s = I.Ay.getMember(t, e),
            o = (null != (i = null == s ? void 0 : s.roles) ? i : []).filter(e => e !== r.id);
        (null == (a = r.tags) ? void 0 : a.guild_connections) === null ? h.A.unassignGuildRoleConnection(t, r.id) : y.A.updateMemberRoles(t, e, o, [], [r.id])
    }, [n, t, e])
}

function W() {
    return i.useCallback((e, t) => {
        (0, _.L3)(e, async () => {
            let {
                default: e
            } = await n.e("15687").then(n.bind(n, 646938));
            return n => (0, r.jsx)(e, j(x({}, n), {
                id: t,
                label: R.intl.string(R.t.sMsaLg)
            }))
        })
    }, [])
}

function K(e) {
    let {
        userId: t,
        guild: n,
        roles: i,
        className: a,
        onRemoveRole: o,
        onAddRole: l,
        readOnly: c = !1,
        allowEditing: u = !1
    } = e, {
        canAddRoles: d,
        canRemoveAnyRoles: f,
        hasDeveloperContextMenu: p,
        isRoleRemovable: _
    } = H({
        userId: t,
        guild: n,
        roles: i,
        allowEditing: u,
        readOnly: c
    }), h = d || f || p, m = Y(t, n.id, o), g = W(), E = () => (0, r.jsx)(B, {
        userId: t,
        guild: n,
        showLabel: 0 === i.length,
        onAddRole: l
    });
    return 0 === i.length ? d ? (0, r.jsx)("div", {
        className: s()(P.MR, a),
        children: E()
    }) : null : (0, r.jsx)("div", {
        className: s()(P.MR, a),
        children: h ? (0, r.jsxs)(F, {
            roleCount: i.length,
            children: [i.map(e => (0, r.jsx)(V, {
                role: e,
                guildId: n.id,
                canRemove: _(e.id),
                onRemoveRole: f ? m : void 0,
                onContextMenu: p ? t => g(t, e.id) : void 0
            }, e.id)), d ? E() : null]
        }) : (0, r.jsx)("ul", {
            className: P.nt,
            "aria-label": R.intl.string(R.t["LPJmL/"]),
            children: i.map(e => (0, r.jsx)("li", {
                children: (0, r.jsx)(G, {
                    role: e,
                    guildId: n.id
                })
            }, e.id))
        })
    })
}

function z(e) {
    let {
        isExpanded: t,
        overflowCount: n,
        onClick: i,
        buttonRef: a
    } = e, o = t ? R.intl.string(R.t.XnXtCt) : R.intl.string(R.t.DY6n4q), l = t ? R.intl.string(R.t.XnXtCt) : R.intl.formatToPlainString(R.t.zr0Y5R, {
        numberOfItems: n
    });
    return (0, r.jsx)(f.m_, {
        text: o,
        ariaHidden: !0,
        children: (0, r.jsx)(p.DUT, {
            innerRef: a,
            "aria-label": l,
            onClick: i,
            className: s()(P.s6, {
                [P.X1]: !t
            }),
            children: t ? (0, r.jsx)(p.n2b, {
                size: "xs",
                color: "currentColor"
            }) : (0, r.jsx)(p.Text, {
                variant: "text-xs/normal",
                color: "none",
                children: "+".concat(n)
            })
        })
    })
}
let q = 4,
    Z = 268,
    X = 2,
    Q = e => {
        if (null == e) return 0;
        let {
            width: t
        } = e.getBoundingClientRect();
        return t > 0 ? t + q : 0
    };

function J(e) {
    let {
        userId: t,
        guild: n,
        roles: a,
        className: o,
        onAddRole: l,
        onRemoveRole: c,
        onExpand: u,
        onCollapse: d,
        allowEditing: f = !1,
        readOnly: p = !1
    } = e, {
        canAddRoles: _,
        canRemoveAnyRoles: h,
        hasDeveloperContextMenu: m,
        isRoleRemovable: g
    } = H({
        userId: t,
        guild: n,
        roles: a,
        allowEditing: f,
        readOnly: p
    }), E = _ || h || m, y = Y(t, n.id, c), b = W(), O = i.useRef({}), v = (e, t) => {
        null != t ? O.current[e] = t : delete O.current[e]
    }, [A, I] = i.useState(a), [S, T] = i.useState(Z), [C, N] = i.useState(!1), w = i.useRef(null), D = i.useRef(null), x = i.useRef(0);
    i.useLayoutEffect(() => {
        x.current = 0
    }, [a]), i.useLayoutEffect(() => {
        if (C) return;
        let e = Q(w.current),
            t = Q(D.current),
            n = [],
            r = Z - e - t;
        for (let e = 0; e < X; e++) {
            let t = e === X - 1 ? r : Z;
            for (let e = 0, r = n.length; r < a.length; r++) {
                let i = a[r],
                    s = O.current[i.id];
                if (null == s) {
                    0 === x.current && n.push(i);
                    continue
                }
                let o = Math.min(s.getBoundingClientRect().width, t);
                if (e + o > t) break;
                e += o + q, n.push(i)
            }
        }
        I(n.length === A.length ? A : n), T(r), x.current++
    }, [a, A, C]);
    let L = C ? a : A,
        j = () => {
            C ? (null == d || d(), N(!1)) : (null == u || u(), N(!0))
        },
        M = () => A.length < a.length ? (0, r.jsx)(z, {
            isExpanded: C,
            overflowCount: a.length - A.length,
            onClick: j,
            buttonRef: w
        }) : null,
        k = () => (0, r.jsx)(B, {
            buttonRef: D,
            userId: t,
            guild: n,
            showLabel: 0 === a.length,
            onAddRole: l
        });
    return 0 === a.length ? _ ? (0, r.jsx)("div", {
        className: s()(P.MR, o),
        children: k()
    }) : null : (0, r.jsx)("div", {
        className: s()(P.MR, o),
        children: E ? (0, r.jsxs)(F, {
            roleCount: a.length,
            children: [L.map((e, t) => (0, r.jsx)(V, {
                role: e,
                guildId: n.id,
                canRemove: g(e.id),
                onRemoveRole: h ? y : void 0,
                itemRef: t => v(e.id, t),
                onContextMenu: m ? t => b(t, e.id) : void 0,
                style: {
                    maxWidth: C || t !== A.length - 1 ? Z : S
                }
            }, e.id)), M(), _ ? k() : null]
        }) : (0, r.jsxs)(r.Fragment, {
            children: [(0, r.jsx)("ul", {
                className: P.nt,
                "aria-label": R.intl.string(R.t["LPJmL/"]),
                children: L.map((e, t) => (0, r.jsx)("li", {
                    children: (0, r.jsx)(G, {
                        itemRef: t => v(e.id, t),
                        role: e,
                        guildId: n.id,
                        style: {
                            maxWidth: C || t !== A.length - 1 ? Z : S
                        }
                    })
                }, e.id))
            }), M()]
        })
    })
}