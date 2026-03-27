/** chunk id: 773699 params = (module,exports,require) **/
n.d(t, {
    A: () => b
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
    T = n(759238);
let b = e => {
    let t, {
            commandType: n,
            commandTargetId: r,
            channel: b,
            guildId: y,
            onHeightUpdate: S,
            context: v,
            showIcon: x = !1
        } = e,
        I = (0, o.bG)([f.A], () => f.A.getGuild(y ?? b.guild_id)),
        C = (0, o.bG)([E.default], () => E.default.getUser(r)),
        R = (0, h.A)({
            user: C,
            guildId: I?.id,
            context: v
        }),
        O = i.useMemo(() => ({
            channel: b,
            type: "channel"
        }), [b]),
        [D, j] = i.useState(""),
        N = "" !== D,
        {
            commands: G,
            commandsByActiveSection: M,
            sectionDescriptors: w,
            loading: U
        } = d.cu({
            context: O,
            filters: {
                text: N ? D : void 0,
                commandTypes: [n]
            },
            options: {
                limit: _.YC,
                includeFrecency: !N,
                scoreMethod: N ? u.M.COMMAND_OR_APPLICATION : void 0
            },
            allowFetch: !0
        }),
        {
            sections: B
        } = i.useMemo(() => {
            let e = {};
            return w.forEach(t => {
                e[t.id] = t
            }), {
                sections: e
            }
        }, [w]),
        P = i.useRef(U);
    i.useEffect(() => {
        U !== P.current && (P.current = U, S?.())
    }, [U, S]);
    let L = i.useCallback((e, t) => {
            let {
                showAppIcon: n
            } = t;
            a()(null != b, "menu item should not show if channel is null");
            let i = B[e.applicationId],
                o = n && null != i ? (0, A.Rg)(i) : void 0,
                d = null != o && null != i ? e => {
                    let {
                        className: t
                    } = e;
                    return (0, l.jsx)("span", {
                        className: t,
                        children: (0, l.jsx)(o, {
                            channel: b,
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
                            channel: b,
                            guild: I
                        },
                        commandTargetId: r
                    })
                }
            }, e.id)
        }, [b, B, I, r]),
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
                        channel: b,
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
        }, [b, L]),
        F = (0, l.jsx)(s.aK1, {
            id: "command-search",
            control: (e, t) => (0, l.jsx)(s.VPO, {
                ...e,
                query: D,
                onChange: j,
                placeholder: m.intl.string(m.t.m1UwbP),
                ref: t
            })
        }, "command-search");
    if (U) t = (0, l.jsx)(s.Drp, {
        id: "menu-commands-placeholder",
        render: () => (0, l.jsx)(g.A, {}),
        disabled: !0
    }, "menu-commands-placeholder");
    else {
        if (0 === G.length) t = (0, l.jsxs)(l.Fragment, {
            children: [N && (0, l.jsxs)(l.Fragment, {
                children: [F, (0, l.jsx)(s.bXX, {})]
            }), (0, l.jsx)(s.Drp, {
                id: "menu-commands-empty",
                label: m.intl.string(m.t.YSNlV2),
                disabled: !0
            }, "menu-commands-empty")]
        });
        else if (N) t = (0, l.jsxs)(l.Fragment, {
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
        null != R && R.length > 0 && (t = (0, l.jsxs)(l.Fragment, {
            children: [t, (0, l.jsx)(s.bXX, {}, "separator"), R]
        }))
    }
    if (!p.kvI.TEXTUAL.has(b.type))
        if (null == R) return null;
        else t = R;
    return (0, l.jsx)(s.Drp, {
        id: "apps",
        label: m.intl.string(m.t.PHjkRE),
        leadingAccessory: x ? {
            type: "icon",
            icon: s.k9F
        } : void 0,
        listClassName: T.p,
        children: t
    })
}