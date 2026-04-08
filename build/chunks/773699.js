/** chunk id: 773699 params = (module,exports,require) **/
n.d(t, {
    A: () => b
});
var l = n(627968),
    i = n(64700),
    r = n(284009),
    a = n.n(r),
    s = n(311907),
    d = n(397927),
    o = n(842209),
    u = n(210978),
    c = n(545152),
    h = n(664929),
    _ = n(700210),
    A = n(718676),
    g = n(71393),
    E = n(287809),
    p = n(652215),
    m = n(73510),
    f = n(985018),
    T = n(759238);
let b = e => {
    let t, {
            commandType: n,
            commandTargetId: r,
            channel: b,
            guildId: S,
            onHeightUpdate: R,
            context: O,
            showIcon: I = !1
        } = e,
        y = (0, s.bG)([g.A], () => g.A.getGuild(S ?? b.guild_id)),
        v = (0, s.bG)([E.default], () => E.default.getUser(r)),
        x = (0, _.A)({
            user: v,
            guildId: y?.id,
            context: O
        }),
        C = i.useMemo(() => ({
            channel: b,
            type: "channel"
        }), [b]),
        [N, j] = i.useState(""),
        D = "" !== N,
        {
            commands: G,
            commandsByActiveSection: P,
            sectionDescriptors: w,
            loading: L
        } = o.cu({
            context: C,
            filters: {
                text: D ? N : void 0,
                commandTypes: [n]
            },
            options: {
                limit: m.YC,
                includeFrecency: !D,
                scoreMethod: D ? u.M.COMMAND_OR_APPLICATION : void 0
            },
            allowFetch: !0
        }),
        {
            sections: V
        } = i.useMemo(() => {
            let e = {};
            return w.forEach(t => {
                e[t.id] = t
            }), {
                sections: e
            }
        }, [w]),
        M = i.useRef(L);
    i.useEffect(() => {
        L !== M.current && (M.current = L, R?.())
    }, [L, R]);
    let k = i.useCallback((e, t) => {
            let {
                showAppIcon: n
            } = t;
            a()(null != b, "menu item should not show if channel is null");
            let i = V[e.applicationId],
                s = n && null != i ? (0, h.Rg)(i) : void 0,
                o = null != s && null != i ? e => {
                    let {
                        className: t
                    } = e;
                    return (0, l.jsx)("span", {
                        className: t,
                        children: (0, l.jsx)(s, {
                            channel: b,
                            section: i,
                            width: 20,
                            height: 20,
                            selectable: !1
                        })
                    })
                } : void 0;
            return (0, l.jsx)(d.Drp, {
                id: e.id,
                label: e.displayName,
                iconLeft: o,
                leadingAccessory: null != o ? {
                    type: "icon",
                    icon: o
                } : void 0,
                trailingIndicator: {
                    type: "icon",
                    icon: d.lX7
                },
                icon: d.lX7,
                action: () => {
                    (0, c.A)({
                        command: e,
                        optionValues: {},
                        context: {
                            channel: b,
                            guild: y
                        },
                        commandTargetId: r
                    })
                }
            }, e.id)
        }, [b, V, y, r]),
        U = i.useCallback(e => {
            let {
                section: t,
                data: n
            } = e;
            return (0, l.jsx)(d.rXV, {
                label: f.intl.string(f.t.V0w2ap),
                children: n.map(e => k(e, {
                    showAppIcon: !0
                }))
            }, t.id)
        }, [k]),
        F = i.useCallback(e => {
            let {
                section: t,
                data: n
            } = e, i = (0, h.Rg)(t), r = null != i ? e => {
                let {
                    className: n
                } = e;
                return (0, l.jsx)("span", {
                    className: n,
                    children: (0, l.jsx)(i, {
                        channel: b,
                        section: t,
                        selectable: !1,
                        width: 20,
                        height: 20
                    })
                })
            } : void 0;
            return (0, l.jsx)(d.Drp, {
                id: t.id,
                label: t.name,
                iconLeft: r,
                leadingAccessory: null != r ? {
                    type: "icon",
                    icon: r
                } : void 0,
                children: n.map(e => k(e, {
                    showAppIcon: !1
                }))
            }, t.id)
        }, [b, k]),
        B = (0, l.jsx)(d.aK1, {
            id: "command-search",
            control: (e, t) => (0, l.jsx)(d.VPO, {
                ...e,
                query: N,
                onChange: j,
                placeholder: f.intl.string(f.t.m1UwbP),
                ref: t
            })
        }, "command-search");
    if (L) t = (0, l.jsx)(d.Drp, {
        id: "menu-commands-placeholder",
        render: () => (0, l.jsx)(A.A, {}),
        disabled: !0
    }, "menu-commands-placeholder");
    else {
        if (0 === G.length) t = (0, l.jsxs)(l.Fragment, {
            children: [D && (0, l.jsxs)(l.Fragment, {
                children: [B, (0, l.jsx)(d.bXX, {})]
            }), (0, l.jsx)(d.Drp, {
                id: "menu-commands-empty",
                label: f.intl.string(f.t.YSNlV2),
                disabled: !0
            }, "menu-commands-empty")]
        });
        else if (D) t = (0, l.jsxs)(l.Fragment, {
            children: [B, (0, l.jsx)(d.bXX, {}), G.map(e => k(e, {
                showAppIcon: !0
            }))]
        });
        else {
            let e = P.find(e => {
                    let {
                        section: t
                    } = e;
                    return t.id === m.Ik.FRECENCY
                }),
                n = P.filter(e => {
                    let {
                        section: t
                    } = e;
                    return t.id !== m.Ik.FRECENCY
                });
            t = (0, l.jsxs)(l.Fragment, {
                children: [B, null != e && U(e), (0, l.jsx)(d.rXV, {
                    label: f.intl.string(f.t.PHjkRE),
                    children: n.map(e => F(e))
                })]
            })
        }
        null != x && x.length > 0 && (t = (0, l.jsxs)(l.Fragment, {
            children: [t, (0, l.jsx)(d.bXX, {}, "separator"), x]
        }))
    }
    if (!p.kvI.TEXTUAL.has(b.type))
        if (null == x) return null;
        else t = x;
    return (0, l.jsx)(d.Drp, {
        id: "apps",
        label: f.intl.string(f.t.PHjkRE),
        leadingAccessory: I ? {
            type: "icon",
            icon: d.k9F
        } : void 0,
        listClassName: T.p,
        children: t
    })
}