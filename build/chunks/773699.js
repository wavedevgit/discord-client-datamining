/** chunk id: 773699 params = (module,exports,require) **/
n.d(t, {
    A: () => y
});
var r = n(627968),
    i = n(64700),
    a = n(284009),
    l = n.n(a),
    o = n(311907),
    s = n(397927),
    c = n(842209),
    u = n(210978),
    d = n(545152),
    E = n(664929),
    f = n(700210),
    _ = n(718676),
    h = n(71393),
    A = n(287809),
    S = n(652215),
    g = n(73510),
    m = n(985018),
    p = n(404111);
let y = e => {
    let t, {
            commandType: n,
            commandTargetId: a,
            channel: y,
            guildId: I,
            onHeightUpdate: R,
            context: C,
            showIcon: T = !1
        } = e,
        U = (0, o.bG)([h.A], () => h.A.getGuild(I ?? y.guild_id)),
        w = (0, o.bG)([A.default], () => A.default.getUser(a)),
        D = (0, f.A)({
            user: w,
            guildId: U?.id,
            context: C
        }),
        F = i.useMemo(() => ({
            channel: y,
            type: "channel"
        }), [y]),
        [b, N] = i.useState(""),
        V = "" !== b,
        {
            commands: M,
            commandsByActiveSection: L,
            sectionDescriptors: k,
            loading: O
        } = c.cu({
            context: F,
            filters: {
                text: V ? b : void 0,
                commandTypes: [n]
            },
            options: {
                limit: g.YC,
                includeFrecency: !V,
                scoreMethod: V ? u.M.COMMAND_OR_APPLICATION : void 0
            },
            allowFetch: !0
        }),
        {
            sections: K
        } = i.useMemo(() => {
            let e = {};
            return k.forEach(t => {
                e[t.id] = t
            }), {
                sections: e
            }
        }, [k]),
        x = i.useRef(O);
    i.useEffect(() => {
        O !== x.current && (x.current = O, R?.())
    }, [O, R]);
    let P = i.useCallback((e, t) => {
            let {
                showAppIcon: n
            } = t;
            l()(null != y, "menu item should not show if channel is null");
            let i = K[e.applicationId],
                o = n && null != i ? (0, E.Rg)(i) : void 0,
                c = null != o && null != i ? e => {
                    let {
                        className: t
                    } = e;
                    return (0, r.jsx)("span", {
                        className: t,
                        children: (0, r.jsx)(o, {
                            channel: y,
                            section: i,
                            width: 20,
                            height: 20,
                            selectable: !1
                        })
                    })
                } : void 0;
            return (0, r.jsx)(s.Drp, {
                id: e.id,
                label: e.displayName,
                iconLeft: c,
                leadingAccessory: null != c ? {
                    type: "icon",
                    icon: c
                } : void 0,
                trailingIndicator: {
                    type: "icon",
                    icon: s.lX7
                },
                icon: s.lX7,
                action: () => {
                    (0, d.A)({
                        command: e,
                        optionValues: {},
                        context: {
                            channel: y,
                            guild: U
                        },
                        commandTargetId: a
                    })
                }
            }, e.id)
        }, [y, K, U, a]),
        Y = i.useCallback(e => {
            let {
                section: t,
                data: n
            } = e;
            return (0, r.jsx)(s.rXV, {
                label: m.intl.string(m.t.V0w2ap),
                children: n.map(e => P(e, {
                    showAppIcon: !0
                }))
            }, t.id)
        }, [P]),
        v = i.useCallback(e => {
            let {
                section: t,
                data: n
            } = e, i = (0, E.Rg)(t), a = null != i ? e => {
                let {
                    className: n
                } = e;
                return (0, r.jsx)("span", {
                    className: n,
                    children: (0, r.jsx)(i, {
                        channel: y,
                        section: t,
                        selectable: !1,
                        width: 20,
                        height: 20
                    })
                })
            } : void 0;
            return (0, r.jsx)(s.Drp, {
                id: t.id,
                label: t.name,
                iconLeft: a,
                leadingAccessory: null != a ? {
                    type: "icon",
                    icon: a
                } : void 0,
                children: n.map(e => P(e, {
                    showAppIcon: !1
                }))
            }, t.id)
        }, [y, P]),
        j = (0, r.jsx)(s.aK1, {
            id: "command-search",
            control: (e, t) => (0, r.jsx)(s.VPO, {
                ...e,
                query: b,
                onChange: N,
                placeholder: m.intl.string(m.t.m1UwbP),
                ref: t
            })
        }, "command-search");
    if (O) t = (0, r.jsx)(s.Drp, {
        id: "menu-commands-placeholder",
        render: () => (0, r.jsx)(_.A, {}),
        disabled: !0
    }, "menu-commands-placeholder");
    else {
        if (0 === M.length) t = (0, r.jsxs)(r.Fragment, {
            children: [V && (0, r.jsxs)(r.Fragment, {
                children: [j, (0, r.jsx)(s.bXX, {})]
            }), (0, r.jsx)(s.Drp, {
                id: "menu-commands-empty",
                label: m.intl.string(m.t.YSNlV2),
                disabled: !0
            }, "menu-commands-empty")]
        });
        else if (V) t = (0, r.jsxs)(r.Fragment, {
            children: [j, (0, r.jsx)(s.bXX, {}), M.map(e => P(e, {
                showAppIcon: !0
            }))]
        });
        else {
            let e = L.find(e => {
                    let {
                        section: t
                    } = e;
                    return t.id === g.Ik.FRECENCY
                }),
                n = L.filter(e => {
                    let {
                        section: t
                    } = e;
                    return t.id !== g.Ik.FRECENCY
                });
            t = (0, r.jsxs)(r.Fragment, {
                children: [j, null != e && Y(e), (0, r.jsx)(s.rXV, {
                    label: m.intl.string(m.t.PHjkRE),
                    children: n.map(e => v(e))
                })]
            })
        }
        null != D && D.length > 0 && (t = (0, r.jsxs)(r.Fragment, {
            children: [t, (0, r.jsx)(s.bXX, {}, "separator"), D]
        }))
    }
    if (!S.kvI.TEXTUAL.has(y.type))
        if (null == D) return null;
        else t = D;
    return (0, r.jsx)(s.Drp, {
        id: "apps",
        label: m.intl.string(m.t.PHjkRE),
        leadingAccessory: T ? {
            type: "icon",
            icon: s.k9F
        } : void 0,
        listClassName: p.p,
        children: t
    })
}