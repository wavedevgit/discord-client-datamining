/** Chunk was on 42897 **/
/** chunk id: 773699, original params: e,n,t (module,exports,require) **/
t.d(n, {
    A: () => _
}), t(896048);
var l = t(627968),
    r = t(64700),
    i = t(284009),
    a = t.n(i),
    s = t(311907),
    o = t(397927),
    c = t(842209),
    u = t(210978),
    d = t(545152),
    p = t(664929),
    f = t(700210),
    b = t(718676),
    m = t(71393),
    h = t(287809),
    g = t(822517),
    j = t(652215),
    x = t(73510),
    A = t(985018),
    v = t(329872);
let _ = e => {
    let n, {
            commandType: t,
            commandTargetId: i,
            channel: _,
            guildId: O,
            onHeightUpdate: w,
            context: y
        } = e,
        I = (0, s.bG)([m.A], () => m.A.getGuild(null != O ? O : _.guild_id)),
        C = (0, s.bG)([h.default], () => h.default.getUser(i)),
        E = (0, f.A)({
            user: C,
            guildId: null == I ? void 0 : I.id,
            context: y
        }),
        k = r.useMemo(() => ({
            channel: _,
            type: "channel"
        }), [_]),
        {
            newUIEnabled: P,
            searchEnabled: X
        } = g.A.useConfig({
            location: "useAppsCommandItems"
        }),
        [G, M] = r.useState(""),
        D = "" !== G,
        {
            commands: F,
            commandsByActiveSection: N,
            sectionDescriptors: R,
            loading: T
        } = c.cu({
            context: k,
            filters: {
                text: D ? G : void 0,
                commandTypes: [t]
            },
            options: {
                limit: x.YC,
                includeFrecency: P && !D,
                scoreMethod: D ? u.M.COMMAND_OR_APPLICATION : void 0
            },
            allowFetch: !0
        }),
        {
            sections: U
        } = r.useMemo(() => {
            let e = {};
            return R.forEach(n => {
                e[n.id] = n
            }), {
                sections: e
            }
        }, [R]),
        V = r.useRef(T);
    r.useEffect(() => {
        T !== V.current && (V.current = T, null == w || w())
    }, [T, w]);
    let S = r.useCallback((e, n) => {
            let {
                showAppIcon: t
            } = n;
            a()(null != _, "menu item should not show if channel is null");
            let r = U[e.applicationId],
                s = t && null != r ? (0, p.Rg)(r) : void 0;
            return (0, l.jsx)(o.Drp, {
                id: e.id,
                label: e.displayName,
                iconLeft: null != s ? () => (0, l.jsx)(s, {
                    channel: _,
                    section: r,
                    width: 20,
                    height: 20,
                    selectable: !1
                }) : void 0,
                icon: P ? o.lX7 : void 0,
                action: () => {
                    (0, d.A)({
                        command: e,
                        optionValues: {},
                        context: {
                            channel: _,
                            guild: I
                        },
                        commandTargetId: i
                    })
                }
            }, e.id)
        }, [_, U, P, I, i]),
        Y = r.useCallback(e => {
            let {
                section: n,
                data: t
            } = e;
            return (0, l.jsx)(o.rXV, {
                label: A.intl.string(A.t.V0w2ap),
                children: t.map(e => S(e, {
                    showAppIcon: !0
                }))
            }, n.id)
        }, [S]),
        L = r.useCallback(e => {
            let {
                section: n,
                data: t
            } = e, r = (0, p.Rg)(n);
            return (0, l.jsx)(o.Drp, {
                id: n.id,
                label: n.name,
                iconLeft: null != r ? () => (0, l.jsx)(r, {
                    channel: _,
                    section: n,
                    width: 20,
                    height: 20,
                    selectable: !1
                }) : void 0,
                children: t.map(e => S(e, {
                    showAppIcon: !1
                }))
            }, n.id)
        }, [_, S]),
        H = (0, l.jsx)(o.aK1, {
            id: "command-search",
            control: (e, n) => {
                var t, r;
                return (0, l.jsx)(o.VPO, (t = function(e) {
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
                    query: G,
                    onChange: M,
                    placeholder: A.intl.string(A.t.m1UwbP),
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
    if (T) n = (0, l.jsx)(o.Drp, {
        id: "menu-commands-placeholder",
        render: () => (0, l.jsx)(b.A, {}),
        disabled: !0
    }, "menu-commands-placeholder");
    else {
        if (0 === F.length) n = (0, l.jsxs)(l.Fragment, {
            children: [D && (0, l.jsxs)(l.Fragment, {
                children: [H, (0, l.jsx)(o.bXX, {})]
            }), (0, l.jsx)(o.Drp, {
                id: "menu-commands-empty",
                label: A.intl.string(A.t.YSNlV2),
                disabled: !0
            }, "menu-commands-empty")]
        });
        else if (P)
            if (D) n = (0, l.jsxs)(l.Fragment, {
                children: [H, (0, l.jsx)(o.bXX, {}), F.map(e => S(e, {
                    showAppIcon: !0
                }))]
            });
            else {
                let e = N.find(e => {
                        let {
                            section: n
                        } = e;
                        return n.id === x.Ik.FRECENCY
                    }),
                    t = N.filter(e => {
                        let {
                            section: n
                        } = e;
                        return n.id !== x.Ik.FRECENCY
                    });
                n = (0, l.jsxs)(l.Fragment, {
                    children: [X && H, null != e && Y(e), (0, l.jsx)(o.rXV, {
                        label: A.intl.string(A.t.PHjkRE),
                        children: t.map(e => L(e))
                    })]
                })
            }
        else n = F.map(e => S(e, {
            showAppIcon: !0
        }));
        null != E && E.length > 0 && (n = (0, l.jsxs)(l.Fragment, {
            children: [n, (0, l.jsx)(o.bXX, {}, "separator"), E]
        }))
    }
    if (!j.kvI.TEXTUAL.has(_.type))
        if (null == E) return null;
        else n = E;
    return (0, l.jsx)(o.Drp, {
        id: "apps",
        label: A.intl.string(A.t.PHjkRE),
        listClassName: v.p,
        children: n
    })
}