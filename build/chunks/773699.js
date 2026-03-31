/** chunk id: 773699 params = (module,exports,require) **/
n.d(t, {
    A: () => y
});
var l = n(627968),
    i = n(64700),
    r = n(284009),
    a = n.n(r),
    o = n(311907),
    s = n(397927),
    d = n(842209),
    u = n(210978),
    c = n(545152),
    A = n(664929),
    h = n(700210),
    g = n(718676),
    f = n(71393),
    E = n(287809),
    p = n(652215),
    _ = n(73510),
    m = n(985018),
    T = n(142271);
let y = e => {
    let t, {
            commandType: n,
            commandTargetId: r,
            channel: y,
            guildId: b,
            onHeightUpdate: S,
            context: v,
            showIcon: I = !1
        } = e,
        x = (0, o.bG)([f.A], () => f.A.getGuild(b ?? y.guild_id)),
        R = (0, o.bG)([E.default], () => E.default.getUser(r)),
        C = (0, h.A)({
            user: R,
            guildId: x?.id,
            context: v
        }),
        O = i.useMemo(() => ({
            channel: y,
            type: "channel"
        }), [y]),
        [N, j] = i.useState(""),
        D = "" !== N,
        {
            commands: G,
            commandsByActiveSection: M,
            sectionDescriptors: w,
            loading: B
        } = d.cu({
            context: O,
            filters: {
                text: D ? N : void 0,
                commandTypes: [n]
            },
            options: {
                limit: _.YC,
                includeFrecency: !D,
                scoreMethod: D ? u.M.COMMAND_OR_APPLICATION : void 0
            },
            allowFetch: !0
        }),
        {
            sections: U
        } = i.useMemo(() => {
            let e = {};
            return w.forEach(t => {
                e[t.id] = t
            }), {
                sections: e
            }
        }, [w]),
        P = i.useRef(B);
    i.useEffect(() => {
        B !== P.current && (P.current = B, S?.())
    }, [B, S]);
    let L = i.useCallback((e, t) => {
            let {
                showAppIcon: n
            } = t;
            a()(null != y, "menu item should not show if channel is null");
            let i = U[e.applicationId],
                o = n && null != i ? (0, A.Rg)(i) : void 0,
                d = null != o && null != i ? e => {
                    let {
                        className: t
                    } = e;
                    return (0, l.jsx)("span", {
                        className: t,
                        children: (0, l.jsx)(o, {
                            channel: y,
                            section: i,
                            width: 20,
                            height: 20,
                            selectable: !1
                        })
                    })
                } : void 0;
            return (0, l.jsx)(s.Drp, {
                id: e.id,
                label: e.displayName,
                iconLeft: d,
                leadingAccessory: null != d ? {
                    type: "icon",
                    icon: d
                } : void 0,
                trailingIndicator: {
                    type: "icon",
                    icon: s.lX7
                },
                icon: s.lX7,
                action: () => {
                    (0, c.A)({
                        command: e,
                        optionValues: {},
                        context: {
                            channel: y,
                            guild: x
                        },
                        commandTargetId: r
                    })
                }
            }, e.id)
        }, [y, U, x, r]),
        V = i.useCallback(e => {
            let {
                section: t,
                data: n
            } = e;
            return (0, l.jsx)(s.rXV, {
                label: m.intl.string(m.t.V0w2ap),
                children: n.map(e => L(e, {
                    showAppIcon: !0
                }))
            }, t.id)
        }, [L]),
        k = i.useCallback(e => {
            let {
                section: t,
                data: n
            } = e, i = (0, A.Rg)(t), r = null != i ? e => {
                let {
                    className: n
                } = e;
                return (0, l.jsx)("span", {
                    className: n,
                    children: (0, l.jsx)(i, {
                        channel: y,
                        section: t,
                        selectable: !1,
                        width: 20,
                        height: 20
                    })
                })
            } : void 0;
            return (0, l.jsx)(s.Drp, {
                id: t.id,
                label: t.name,
                iconLeft: r,
                leadingAccessory: null != r ? {
                    type: "icon",
                    icon: r
                } : void 0,
                children: n.map(e => L(e, {
                    showAppIcon: !1
                }))
            }, t.id)
        }, [y, L]),
        F = (0, l.jsx)(s.aK1, {
            id: "command-search",
            control: (e, t) => (0, l.jsx)(s.VPO, {
                ...e,
                query: N,
                onChange: j,
                placeholder: m.intl.string(m.t.m1UwbP),
                ref: t
            })
        }, "command-search");
    if (B) t = (0, l.jsx)(s.Drp, {
        id: "menu-commands-placeholder",
        render: () => (0, l.jsx)(g.A, {}),
        disabled: !0
    }, "menu-commands-placeholder");
    else {
        if (0 === G.length) t = (0, l.jsxs)(l.Fragment, {
            children: [D && (0, l.jsxs)(l.Fragment, {
                children: [F, (0, l.jsx)(s.bXX, {})]
            }), (0, l.jsx)(s.Drp, {
                id: "menu-commands-empty",
                label: m.intl.string(m.t.YSNlV2),
                disabled: !0
            }, "menu-commands-empty")]
        });
        else if (D) t = (0, l.jsxs)(l.Fragment, {
            children: [F, (0, l.jsx)(s.bXX, {}), G.map(e => L(e, {
                showAppIcon: !0
            }))]
        });
        else {
            let e = M.find(e => {
                    let {
                        section: t
                    } = e;
                    return t.id === _.Ik.FRECENCY
                }),
                n = M.filter(e => {
                    let {
                        section: t
                    } = e;
                    return t.id !== _.Ik.FRECENCY
                });
            t = (0, l.jsxs)(l.Fragment, {
                children: [F, null != e && V(e), (0, l.jsx)(s.rXV, {
                    label: m.intl.string(m.t.PHjkRE),
                    children: n.map(e => k(e))
                })]
            })
        }
        null != C && C.length > 0 && (t = (0, l.jsxs)(l.Fragment, {
            children: [t, (0, l.jsx)(s.bXX, {}, "separator"), C]
        }))
    }
    if (!p.kvI.TEXTUAL.has(y.type))
        if (null == C) return null;
        else t = C;
    return (0, l.jsx)(s.Drp, {
        id: "apps",
        label: m.intl.string(m.t.PHjkRE),
        leadingAccessory: I ? {
            type: "icon",
            icon: s.k9F
        } : void 0,
        listClassName: T.p,
        children: t
    })
}