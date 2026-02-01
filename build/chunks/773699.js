/** chunk id: 773699, original params: e,n,t (module,exports,require) **/
t.d(n, {
    A: () => v
}), t(896048);
var l = t(627968),
    r = t(64700),
    i = t(284009),
    s = t.n(i),
    a = t(311907),
    c = t(397927),
    o = t(842209),
    d = t(210978),
    u = t(545152),
    p = t(664929),
    m = t(700210),
    f = t(718676),
    h = t(71393),
    A = t(287809),
    b = t(822517),
    g = t(652215),
    j = t(73510),
    y = t(985018),
    O = t(329872);
let v = e => {
    let n, {
            commandType: t,
            commandTargetId: i,
            channel: v,
            guildId: I,
            onHeightUpdate: E,
            context: R,
            showIcon: P = !1
        } = e,
        _ = (0, a.bG)([h.A], () => h.A.getGuild(null != I ? I : v.guild_id)),
        x = (0, a.bG)([A.default], () => A.default.getUser(i)),
        C = (0, m.A)({
            user: x,
            guildId: null == _ ? void 0 : _.id,
            context: R
        }),
        N = r.useMemo(() => ({
            channel: v,
            type: "channel"
        }), [v]),
        {
            newUIEnabled: w,
            searchEnabled: T
        } = b.A.useConfig({
            location: "useAppsCommandItems"
        }),
        [S, k] = r.useState(""),
        F = "" !== S,
        {
            commands: D,
            commandsByActiveSection: G,
            sectionDescriptors: V,
            loading: X
        } = o.cu({
            context: N,
            filters: {
                text: F ? S : void 0,
                commandTypes: [t]
            },
            options: {
                limit: j.YC,
                includeFrecency: w && !F,
                scoreMethod: F ? d.M.COMMAND_OR_APPLICATION : void 0
            },
            allowFetch: !0
        }),
        {
            sections: Y
        } = r.useMemo(() => {
            let e = {};
            return V.forEach(n => {
                e[n.id] = n
            }), {
                sections: e
            }
        }, [V]),
        L = r.useRef(X);
    r.useEffect(() => {
        X !== L.current && (L.current = X, null == E || E())
    }, [X, E]);
    let M = r.useCallback((e, n) => {
            let {
                showAppIcon: t
            } = n;
            s()(null != v, "menu item should not show if channel is null");
            let r = Y[e.applicationId],
                a = t && null != r ? (0, p.Rg)(r) : void 0,
                o = null != a && null != r ? e => {
                    let {
                        className: n
                    } = e;
                    return (0, l.jsx)("span", {
                        className: n,
                        children: (0, l.jsx)(a, {
                            channel: v,
                            section: r,
                            width: 20,
                            height: 20,
                            selectable: !1
                        })
                    })
                } : void 0;
            return (0, l.jsx)(c.Drp, {
                id: e.id,
                label: e.displayName,
                iconLeft: o,
                leadingAccessory: null != o ? {
                    type: "icon",
                    icon: o
                } : void 0,
                trailingIndicator: w ? {
                    type: "icon",
                    icon: c.lX7
                } : void 0,
                icon: w ? c.lX7 : void 0,
                action: () => {
                    (0, u.A)({
                        command: e,
                        optionValues: {},
                        context: {
                            channel: v,
                            guild: _
                        },
                        commandTargetId: i
                    })
                }
            }, e.id)
        }, [v, Y, w, _, i]),
        U = r.useCallback(e => {
            let {
                section: n,
                data: t
            } = e;
            return (0, l.jsx)(c.rXV, {
                label: y.intl.string(y.t.V0w2ap),
                children: t.map(e => M(e, {
                    showAppIcon: !0
                }))
            }, n.id)
        }, [M]),
        q = r.useCallback(e => {
            let {
                section: n,
                data: t
            } = e, r = (0, p.Rg)(n), i = null != r ? e => {
                let {
                    className: t
                } = e;
                return (0, l.jsx)("span", {
                    className: t,
                    children: (0, l.jsx)(r, {
                        channel: v,
                        section: n,
                        selectable: !1,
                        width: 20,
                        height: 20
                    })
                })
            } : void 0;
            return (0, l.jsx)(c.Drp, {
                id: n.id,
                label: n.name,
                iconLeft: i,
                leadingAccessory: null != i ? {
                    type: "icon",
                    icon: i
                } : void 0,
                children: t.map(e => M(e, {
                    showAppIcon: !1
                }))
            }, n.id)
        }, [v, M]),
        z = (0, l.jsx)(c.aK1, {
            id: "command-search",
            control: (e, n) => {
                var t, r;
                return (0, l.jsx)(c.VPO, (t = function(e) {
                    for (var n = 1; n < arguments.length; n++) {
                        var t = null != arguments[n] ? arguments[n] : {},
                            l = Object.keys(t);
                        "function" == typeof Object.getOwnPropertySymbols && (l = l.concat(Object.getOwnPropertySymbols(t).filter(function(e) {
                            return Object.getOwnPropertyDescriptor(t, e).enumerable
                        }))), l.forEach(function(n) {
                            var l;
                            l = t[n], n in e ? Object.defineProperty(e, n, {
                                value: l,
                                enumerable: !0,
                                configurable: !0,
                                writable: !0
                            }) : e[n] = l
                        })
                    }
                    return e
                }({}, e), r = r = {
                    query: S,
                    onChange: k,
                    placeholder: y.intl.string(y.t.m1UwbP),
                    ref: n
                }, Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : (function(e, n) {
                    var t = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var l = Object.getOwnPropertySymbols(e);
                        t.push.apply(t, l)
                    }
                    return t
                })(Object(r)).forEach(function(e) {
                    Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e))
                }), t))
            }
        }, "command-search");
    if (X) n = (0, l.jsx)(c.Drp, {
        id: "menu-commands-placeholder",
        render: () => (0, l.jsx)(f.A, {}),
        disabled: !0
    }, "menu-commands-placeholder");
    else {
        if (0 === D.length) n = (0, l.jsxs)(l.Fragment, {
            children: [F && (0, l.jsxs)(l.Fragment, {
                children: [z, (0, l.jsx)(c.bXX, {})]
            }), (0, l.jsx)(c.Drp, {
                id: "menu-commands-empty",
                label: y.intl.string(y.t.YSNlV2),
                disabled: !0
            }, "menu-commands-empty")]
        });
        else if (w)
            if (F) n = (0, l.jsxs)(l.Fragment, {
                children: [z, (0, l.jsx)(c.bXX, {}), D.map(e => M(e, {
                    showAppIcon: !0
                }))]
            });
            else {
                let e = G.find(e => {
                        let {
                            section: n
                        } = e;
                        return n.id === j.Ik.FRECENCY
                    }),
                    t = G.filter(e => {
                        let {
                            section: n
                        } = e;
                        return n.id !== j.Ik.FRECENCY
                    });
                n = (0, l.jsxs)(l.Fragment, {
                    children: [T && z, null != e && U(e), (0, l.jsx)(c.rXV, {
                        label: y.intl.string(y.t.PHjkRE),
                        children: t.map(e => q(e))
                    })]
                })
            }
        else n = D.map(e => M(e, {
            showAppIcon: !0
        }));
        null != C && C.length > 0 && (n = (0, l.jsxs)(l.Fragment, {
            children: [n, (0, l.jsx)(c.bXX, {}, "separator"), C]
        }))
    }
    if (!g.kvI.TEXTUAL.has(v.type))
        if (null == C) return null;
        else n = C;
    return (0, l.jsx)(c.Drp, {
        id: "apps",
        label: y.intl.string(y.t.PHjkRE),
        icon: P ? c.k9F : void 0,
        leadingAccessory: P ? {
            type: "icon",
            icon: c.k9F
        } : void 0,
        listClassName: O.p,
        children: n
    })
}