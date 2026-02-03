/** chunk id: 773699, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => j
}), n(896048);
var s = n(627968),
    r = n(64700),
    a = n(284009),
    i = n.n(a),
    l = n(311907),
    c = n(397927),
    o = n(842209),
    u = n(210978),
    p = n(545152),
    d = n(664929),
    g = n(700210),
    f = n(718676),
    b = n(71393),
    h = n(287809),
    m = n(822517),
    y = n(652215),
    O = n(73510),
    x = n(985018),
    v = n(329872);
let j = e => {
    let t, {
            commandType: n,
            commandTargetId: a,
            channel: j,
            guildId: A,
            onHeightUpdate: _,
            context: T,
            showIcon: E = !1
        } = e,
        S = (0, l.bG)([b.A], () => b.A.getGuild(null != A ? A : j.guild_id)),
        w = (0, l.bG)([h.default], () => h.default.getUser(a)),
        P = (0, g.A)({
            user: w,
            guildId: null == S ? void 0 : S.id,
            context: T
        }),
        I = r.useMemo(() => ({
            channel: j,
            type: "channel"
        }), [j]),
        {
            newUIEnabled: N,
            searchEnabled: C
        } = m.A.useConfig({
            location: "useAppsCommandItems"
        }),
        [R, G] = r.useState(""),
        k = "" !== R,
        {
            commands: D,
            commandsByActiveSection: M,
            sectionDescriptors: K,
            loading: L
        } = o.cu({
            context: I,
            filters: {
                text: k ? R : void 0,
                commandTypes: [n]
            },
            options: {
                limit: O.YC,
                includeFrecency: N && !k,
                scoreMethod: k ? u.M.COMMAND_OR_APPLICATION : void 0
            },
            allowFetch: !0
        }),
        {
            sections: U
        } = r.useMemo(() => {
            let e = {};
            return K.forEach(t => {
                e[t.id] = t
            }), {
                sections: e
            }
        }, [K]),
        X = r.useRef(L);
    r.useEffect(() => {
        L !== X.current && (X.current = L, null == _ || _())
    }, [L, _]);
    let F = r.useCallback((e, t) => {
            let {
                showAppIcon: n
            } = t;
            i()(null != j, "menu item should not show if channel is null");
            let r = U[e.applicationId],
                l = n && null != r ? (0, d.Rg)(r) : void 0,
                o = null != l && null != r ? e => {
                    let {
                        className: t
                    } = e;
                    return (0, s.jsx)("span", {
                        className: t,
                        children: (0, s.jsx)(l, {
                            channel: j,
                            section: r,
                            width: 20,
                            height: 20,
                            selectable: !1
                        })
                    })
                } : void 0;
            return (0, s.jsx)(c.Drp, {
                id: e.id,
                label: e.displayName,
                iconLeft: o,
                leadingAccessory: null != o ? {
                    type: "icon",
                    icon: o
                } : void 0,
                trailingIndicator: N ? {
                    type: "icon",
                    icon: c.lX7
                } : void 0,
                icon: N ? c.lX7 : void 0,
                action: () => {
                    (0, p.A)({
                        command: e,
                        optionValues: {},
                        context: {
                            channel: j,
                            guild: S
                        },
                        commandTargetId: a
                    })
                }
            }, e.id)
        }, [j, U, N, S, a]),
        V = r.useCallback(e => {
            let {
                section: t,
                data: n
            } = e;
            return (0, s.jsx)(c.rXV, {
                label: x.intl.string(x.t.V0w2ap),
                children: n.map(e => F(e, {
                    showAppIcon: !0
                }))
            }, t.id)
        }, [F]),
        H = r.useCallback(e => {
            let {
                section: t,
                data: n
            } = e, r = (0, d.Rg)(t), a = null != r ? e => {
                let {
                    className: n
                } = e;
                return (0, s.jsx)("span", {
                    className: n,
                    children: (0, s.jsx)(r, {
                        channel: j,
                        section: t,
                        selectable: !1,
                        width: 20,
                        height: 20
                    })
                })
            } : void 0;
            return (0, s.jsx)(c.Drp, {
                id: t.id,
                label: t.name,
                iconLeft: a,
                leadingAccessory: null != a ? {
                    type: "icon",
                    icon: a
                } : void 0,
                children: n.map(e => F(e, {
                    showAppIcon: !1
                }))
            }, t.id)
        }, [j, F]),
        W = (0, s.jsx)(c.aK1, {
            id: "command-search",
            control: (e, t) => {
                var n, r;
                return (0, s.jsx)(c.VPO, (n = function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = null != arguments[t] ? arguments[t] : {},
                            s = Object.keys(n);
                        "function" == typeof Object.getOwnPropertySymbols && (s = s.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                            return Object.getOwnPropertyDescriptor(n, e).enumerable
                        }))), s.forEach(function(t) {
                            var s;
                            s = n[t], t in e ? Object.defineProperty(e, t, {
                                value: s,
                                enumerable: !0,
                                configurable: !0,
                                writable: !0
                            }) : e[t] = s
                        })
                    }
                    return e
                }({}, e), r = r = {
                    query: R,
                    onChange: G,
                    placeholder: x.intl.string(x.t.m1UwbP),
                    ref: t
                }, Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(r)) : (function(e, t) {
                    var n = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var s = Object.getOwnPropertySymbols(e);
                        n.push.apply(n, s)
                    }
                    return n
                })(Object(r)).forEach(function(e) {
                    Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(r, e))
                }), n))
            }
        }, "command-search");
    if (L) t = (0, s.jsx)(c.Drp, {
        id: "menu-commands-placeholder",
        render: () => (0, s.jsx)(f.A, {}),
        disabled: !0
    }, "menu-commands-placeholder");
    else {
        if (0 === D.length) t = (0, s.jsxs)(s.Fragment, {
            children: [k && (0, s.jsxs)(s.Fragment, {
                children: [W, (0, s.jsx)(c.bXX, {})]
            }), (0, s.jsx)(c.Drp, {
                id: "menu-commands-empty",
                label: x.intl.string(x.t.YSNlV2),
                disabled: !0
            }, "menu-commands-empty")]
        });
        else if (N)
            if (k) t = (0, s.jsxs)(s.Fragment, {
                children: [W, (0, s.jsx)(c.bXX, {}), D.map(e => F(e, {
                    showAppIcon: !0
                }))]
            });
            else {
                let e = M.find(e => {
                        let {
                            section: t
                        } = e;
                        return t.id === O.Ik.FRECENCY
                    }),
                    n = M.filter(e => {
                        let {
                            section: t
                        } = e;
                        return t.id !== O.Ik.FRECENCY
                    });
                t = (0, s.jsxs)(s.Fragment, {
                    children: [C && W, null != e && V(e), (0, s.jsx)(c.rXV, {
                        label: x.intl.string(x.t.PHjkRE),
                        children: n.map(e => H(e))
                    })]
                })
            }
        else t = D.map(e => F(e, {
            showAppIcon: !0
        }));
        null != P && P.length > 0 && (t = (0, s.jsxs)(s.Fragment, {
            children: [t, (0, s.jsx)(c.bXX, {}, "separator"), P]
        }))
    }
    if (!y.kvI.TEXTUAL.has(j.type))
        if (null == P) return null;
        else t = P;
    return (0, s.jsx)(c.Drp, {
        id: "apps",
        label: x.intl.string(x.t.PHjkRE),
        icon: E ? c.k9F : void 0,
        leadingAccessory: E ? {
            type: "icon",
            icon: c.k9F
        } : void 0,
        listClassName: v.p,
        children: t
    })
}