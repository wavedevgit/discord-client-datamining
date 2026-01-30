/** Chunk was on 1113 **/
/** chunk id: 823142, original params: e,t,n (module,exports,require) **/
n.d(t, {
    AV: () => w,
    Ay: () => T,
    P4: () => P,
    kD: () => R,
    sM: () => D
});
var r = n(627968),
    l = n(64700),
    i = n(503698),
    s = n.n(i),
    a = n(837381),
    o = n(311907),
    c = n(3026),
    u = n(990078),
    d = n(732955),
    h = n(397927),
    p = n(914430),
    g = n(442433),
    f = n(676002),
    m = n(485947),
    b = n(924985),
    A = n(71393),
    y = n(576705),
    O = n(543465),
    _ = n(551851),
    j = n(879124),
    x = n(652215),
    v = n(985018),
    E = n(33925);

function C(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
            return Object.getOwnPropertyDescriptor(n, e).enumerable
        }))), r.forEach(function(t) {
            var r;
            r = n[t], t in e ? Object.defineProperty(e, t, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = r
        })
    }
    return e
}

function S(e, t) {
    return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            n.push.apply(n, r)
        }
        return n
    })(Object(t)).forEach(function(n) {
        Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
    }), e
}

function I(e) {
    e.stopPropagation()
}
let N = l.memo(function(e) {
        let t, {
                channel: i,
                connectChannelDragSource: d,
                connectChannelDropTarget: f,
                disableManageChannels: _,
                position: j,
                sortingPosition: N,
                hideIcon: T,
                children: P
            } = e,
            w = (0, o.bG)([O.Ay], () => O.Ay.isChannelMuted(i.getGuildId(), i.id)),
            R = (0, o.bG)([b.A], () => b.A.isCollapsed(i.id)),
            D = (0, o.bG)([y.A], () => y.A.can(x.xBc.MANAGE_CHANNELS, i));
        t = null != N ? j > N ? E.mU : E.TR : E.fx;
        let L = l.useCallback(() => {
                R ? (0, p.fh)(i.id) : (0, p.Gv)(i.id)
            }, [i.id, R]),
            M = l.useCallback(e => {
                if ("null" !== i.id) {
                    let t = A.A.getGuild(i.getGuildId());
                    null != t && (0, g.L3)(e, async () => {
                        let {
                            default: e
                        } = await Promise.all([n.e("75149"), n.e("30997")]).then(n.bind(n, 725756));
                        return n => (0, r.jsx)(e, S(C({}, n), {
                            channel: i,
                            guild: t
                        }))
                    })
                }
            }, [i]),
            G = l.useCallback(() => {
                let e = i.type === x.rbe.GUILD_CATEGORY ? null : i.type,
                    t = i.getGuildId();
                null != t && (0, h.mMO)(async () => {
                    let {
                        default: l
                    } = await Promise.all([n.e("64233"), n.e("9743")]).then(n.bind(n, 409200));
                    return n => (0, r.jsx)(l, S(C({}, n), {
                        channelType: e,
                        guildId: t,
                        categoryId: "null" !== i.id ? i.id : null
                    }))
                })
            }, [i]),
            k = (0, a.rm)(i.id),
            {
                role: U,
                tabIndex: V
            } = k,
            B = function(e, t) {
                if (null == e) return {};
                var n, r, l, i = {};
                if ("u" > typeof Reflect && Reflect.ownKeys) {
                    for (l = 0, n = Reflect.ownKeys(e); l < n.length; l++) r = n[l], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (i[r] = e[r]);
                    return i
                }
                if (i = function(e, t) {
                        if (null == e) return {};
                        var n, r, l = {},
                            i = Object.getOwnPropertyNames(e);
                        for (r = 0; r < i.length; r++) n = i[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (l[n] = e[n]);
                        return l
                    }(e, t), Object.getOwnPropertySymbols)
                    for (l = 0, n = Object.getOwnPropertySymbols(e); l < n.length; l++) r = n[l], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (i[r] = e[r]);
                return i
            }(k, ["role", "tabIndex"]),
            H = l.useRef(null),
            F = l.useRef(null),
            K = (0, r.jsxs)("li", {
                className: t,
                "data-dnd-name": i.name,
                children: [(0, r.jsx)(h.vN3, {
                    focusTarget: H,
                    ringTarget: F,
                    offset: {
                        left: 4,
                        right: 4
                    },
                    children: (0, r.jsxs)("div", {
                        ref: F,
                        className: s()(E.Ki, E.iE, {
                            [E.yZ]: R,
                            [E.SU]: w,
                            [E.vk]: !0
                        }),
                        onContextMenu: M,
                        children: [(0, r.jsxs)(h.DUT, S(C({
                            innerRef: H,
                            className: E.rb,
                            tabIndex: V
                        }, B), {
                            onClick: L,
                            "aria-label": v.intl.formatToPlainString(v.t.y5l3J2, {
                                categoryName: i.name
                            }),
                            "aria-expanded": !R,
                            focusProps: {
                                enabled: !1
                            },
                            children: [(0, r.jsx)(m.A, {
                                className: E.UU,
                                children: (0, r.jsx)(c.A, {
                                    children: i.name
                                })
                            }), T ? null : (0, r.jsx)(h.abt, {
                                size: "md",
                                color: "currentColor",
                                className: E.Kk
                            })]
                        })), (0, r.jsx)("div", {
                            onClick: I,
                            className: E.Y_,
                            children: D && !_ ? (0, r.jsx)(u.m, {
                                text: v.intl.string(v.t["fUYU+j"]),
                                children: (0, r.jsx)(h.DUT, {
                                    className: s()(E.c9, E.ih),
                                    onClick: G,
                                    tabIndex: V,
                                    role: "button",
                                    "aria-label": v.intl.string(v.t["fUYU+j"]),
                                    children: (0, r.jsx)(h.TIR, {
                                        size: "xs",
                                        color: "currentColor",
                                        className: E.hs
                                    })
                                })
                            }) : null
                        })]
                    })
                }), P]
            });
        return null != f && null != d ? f(d(K)) : K
    }),
    T = (0, f.a)(N),
    P = l.memo(function(e) {
        let {
            name: t,
            onDismiss: n,
            className: l
        } = e;
        return (0, r.jsx)("li", {
            className: s()(l, E.fx),
            children: (0, r.jsxs)("div", {
                className: s()(E.Ki, E._V),
                children: [(0, r.jsx)("div", {
                    className: E.rb,
                    children: (0, r.jsx)(m.A, {
                        className: E.UU,
                        children: (0, r.jsx)(c.A, {
                            children: t
                        })
                    })
                }), null != n ? (0, r.jsx)(u.m, {
                    asContainer: !0,
                    text: v.intl.string(v.t["5qNmsU"]),
                    children: (0, r.jsx)(h.DUT, {
                        className: E.r,
                        onClick: n,
                        children: (0, r.jsx)(h.aXh, {
                            size: "md",
                            color: "currentColor",
                            className: E.X8
                        })
                    })
                }) : null]
            })
        })
    }),
    w = l.memo(function(e) {
        let {
            category: t
        } = e, n = (0, o.bG)([_.A], () => _.A.isVoiceCategoryCollapsed(t.guild.id)), i = l.useCallback(() => {
            n ? (0, j.T)(t.guild.id) : (0, j.E)(t.guild.id)
        }, [t.guild.id, n]);
        return (0, r.jsx)("div", {
            className: E.oA,
            children: (0, r.jsx)(d.$nd, {
                variant: "secondary",
                fullWidth: !0,
                onClick: i,
                icon: h.HKD,
                text: n ? v.intl.string(v.t["/eB9Bg"]) : v.intl.string(v.t.Q2gPWl)
            })
        })
    }),
    R = l.memo(function(e) {
        let {
            category: t,
            channel: n
        } = e, l = (0, o.bG)([_.A], () => _.A.isVoiceCategoryCollapsed(t.guild.id));
        return l || null == n || n.record.type === x.rbe.GUILD_CATEGORY ? l ? (0, r.jsx)("li", {
            className: E.fx,
            children: (0, r.jsx)("div", {
                className: s()(E.Ki, E._V),
                children: (0, r.jsx)(m.A, {
                    className: E.UU,
                    children: (0, r.jsx)(c.A, {
                        children: v.intl.string(v.t["V/u9Dy"])
                    })
                })
            })
        }) : null : (0, r.jsx)("div", {
            style: {
                height: 16
            }
        })
    }),
    D = l.memo(function(e) {
        let {
            channel: t
        } = e;
        return (0, r.jsx)("li", {
            className: E.fx,
            children: (0, r.jsx)("div", {
                className: s()(E.Ki, E._V),
                children: (0, r.jsx)(m.A, {
                    className: E.UU,
                    children: (0, r.jsx)(c.A, {
                        children: t.name
                    })
                })
            })
        })
    })