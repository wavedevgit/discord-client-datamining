/** Chunk was on 78528 **/
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
    p = n(397927),
    h = n(914430),
    f = n(442433),
    g = n(676002),
    m = n(485947),
    b = n(924985),
    A = n(71393),
    y = n(576705),
    _ = n(543465),
    O = n(551851),
    j = n(879124),
    v = n(652215),
    x = n(985018),
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
                connectChannelDropTarget: g,
                disableManageChannels: O,
                position: j,
                sortingPosition: N,
                hideIcon: T,
                children: P
            } = e,
            w = (0, o.bG)([_.Ay], () => _.Ay.isChannelMuted(i.getGuildId(), i.id)),
            R = (0, o.bG)([b.A], () => b.A.isCollapsed(i.id)),
            D = (0, o.bG)([y.A], () => y.A.can(v.xBc.MANAGE_CHANNELS, i));
        t = null != N ? j > N ? E.mU : E.TR : E.fx;
        let M = l.useCallback(() => {
                R ? (0, h.fh)(i.id) : (0, h.Gv)(i.id)
            }, [i.id, R]),
            L = l.useCallback(e => {
                if ("null" !== i.id) {
                    let t = A.A.getGuild(i.getGuildId());
                    null != t && (0, f.L3)(e, async () => {
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
            k = l.useCallback(() => {
                let e = i.type === v.rbe.GUILD_CATEGORY ? null : i.type,
                    t = i.getGuildId();
                null != t && (0, p.mMO)(async () => {
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
            G = (0, a.rm)(i.id),
            {
                role: U,
                tabIndex: B
            } = G,
            V = function(e, t) {
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
            }(G, ["role", "tabIndex"]),
            F = l.useRef(null),
            H = l.useRef(null),
            K = (0, r.jsxs)("li", {
                className: t,
                "data-dnd-name": i.name,
                children: [(0, r.jsx)(p.vN3, {
                    focusTarget: F,
                    ringTarget: H,
                    offset: {
                        left: 4,
                        right: 4
                    },
                    children: (0, r.jsxs)("div", {
                        ref: H,
                        className: s()(E.Ki, E.iE, {
                            [E.yZ]: R,
                            [E.SU]: w,
                            [E.vk]: !0
                        }),
                        onContextMenu: L,
                        children: [(0, r.jsxs)(p.DUT, S(C({
                            innerRef: F,
                            className: E.rb,
                            tabIndex: B
                        }, V), {
                            onClick: M,
                            "aria-label": x.intl.formatToPlainString(x.t.y5l3J2, {
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
                            }), T ? null : (0, r.jsx)(p.abt, {
                                size: "md",
                                color: "currentColor",
                                className: E.Kk
                            })]
                        })), (0, r.jsx)("div", {
                            onClick: I,
                            className: E.Y_,
                            children: D && !O ? (0, r.jsx)(u.m, {
                                text: x.intl.string(x.t["fUYU+j"]),
                                children: (0, r.jsx)(p.DUT, {
                                    className: s()(E.c9, E.ih),
                                    onClick: k,
                                    tabIndex: B,
                                    role: "button",
                                    "aria-label": x.intl.string(x.t["fUYU+j"]),
                                    children: (0, r.jsx)(p.TIR, {
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
        return null != g && null != d ? g(d(K)) : K
    }),
    T = (0, g.a)(N),
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
                    text: x.intl.string(x.t["5qNmsU"]),
                    children: (0, r.jsx)(p.DUT, {
                        className: E.r,
                        onClick: n,
                        children: (0, r.jsx)(p.aXh, {
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
        } = e, n = (0, o.bG)([O.A], () => O.A.isVoiceCategoryCollapsed(t.guild.id)), i = l.useCallback(() => {
            n ? (0, j.T)(t.guild.id) : (0, j.E)(t.guild.id)
        }, [t.guild.id, n]);
        return (0, r.jsx)("div", {
            className: E.oA,
            children: (0, r.jsx)(d.$nd, {
                variant: "secondary",
                fullWidth: !0,
                onClick: i,
                icon: p.HKD,
                text: n ? x.intl.string(x.t["/eB9Bg"]) : x.intl.string(x.t.Q2gPWl)
            })
        })
    }),
    R = l.memo(function(e) {
        let {
            category: t,
            channel: n
        } = e, l = (0, o.bG)([O.A], () => O.A.isVoiceCategoryCollapsed(t.guild.id));
        return l || null == n || n.record.type === v.rbe.GUILD_CATEGORY ? l ? (0, r.jsx)("li", {
            className: E.fx,
            children: (0, r.jsx)("div", {
                className: s()(E.Ki, E._V),
                children: (0, r.jsx)(m.A, {
                    className: E.UU,
                    children: (0, r.jsx)(c.A, {
                        children: x.intl.string(x.t["V/u9Dy"])
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