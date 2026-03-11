/** chunk id: 773699 params = (module,exports,require) **/
n.d(t, {
    A: () => m
});
var i = n(627968),
    l = n(64700),
    r = n(284009),
    a = n.n(r),
    s = n(311907),
    o = n(397927),
    d = n(842209),
    c = n(210978),
    u = n(545152),
    h = n(664929),
    A = n(700210),
    _ = n(718676),
    g = n(71393),
    p = n(287809),
    f = n(652215),
    E = n(73510),
    b = n(985018),
    T = n(329872);
let m = e => {
    let t, {
            commandType: n,
            commandTargetId: r,
            channel: m,
            guildId: S,
            onHeightUpdate: y,
            context: v,
            showIcon: x = !1
        } = e,
        C = (0, s.bG)([g.A], () => g.A.getGuild(S ?? m.guild_id)),
        I = (0, s.bG)([p.default], () => p.default.getUser(r)),
        O = (0, A.A)({
            user: I,
            guildId: C?.id,
            context: v
        }),
        R = l.useMemo(() => ({
            channel: m,
            type: "channel"
        }), [m]),
        [j, D] = l.useState(""),
        N = "" !== j,
        {
            commands: w,
            commandsByActiveSection: P,
            sectionDescriptors: V,
            loading: G
        } = d.cu({
            context: R,
            filters: {
                text: N ? j : void 0,
                commandTypes: [n]
            },
            options: {
                limit: E.YC,
                includeFrecency: !N,
                scoreMethod: N ? c.M.COMMAND_OR_APPLICATION : void 0
            },
            allowFetch: !0
        }),
        {
            sections: U
        } = l.useMemo(() => {
            let e = {};
            return V.forEach(t => {
                e[t.id] = t
            }), {
                sections: e
            }
        }, [V]),
        k = l.useRef(G);
    l.useEffect(() => {
        G !== k.current && (k.current = G, y?.())
    }, [G, y]);
    let L = l.useCallback((e, t) => {
            let {
                showAppIcon: n
            } = t;
            a()(null != m, "menu item should not show if channel is null");
            let l = U[e.applicationId],
                s = n && null != l ? (0, h.Rg)(l) : void 0,
                d = null != s && null != l ? e => {
                    let {
                        className: t
                    } = e;
                    return (0, i.jsx)("span", {
                        className: t,
                        children: (0, i.jsx)(s, {
                            channel: m,
                            section: l,
                            width: 20,
                            height: 20,
                            selectable: !1
                        })
                    })
                } : void 0;
            return (0, i.jsx)(o.Drp, {
                id: e.id,
                label: e.displayName,
                iconLeft: d,
                leadingAccessory: null != d ? {
                    type: "icon",
                    icon: d
                } : void 0,
                trailingIndicator: {
                    type: "icon",
                    icon: o.lX7
                },
                icon: o.lX7,
                action: () => {
                    (0, u.A)({
                        command: e,
                        optionValues: {},
                        context: {
                            channel: m,
                            guild: C
                        },
                        commandTargetId: r
                    })
                }
            }, e.id)
        }, [m, U, C, r]),
        M = l.useCallback(e => {
            let {
                section: t,
                data: n
            } = e;
            return (0, i.jsx)(o.rXV, {
                label: b.intl.string(b.t.V0w2ap),
                children: n.map(e => L(e, {
                    showAppIcon: !0
                }))
            }, t.id)
        }, [L]),
        B = l.useCallback(e => {
            let {
                section: t,
                data: n
            } = e, l = (0, h.Rg)(t), r = null != l ? e => {
                let {
                    className: n
                } = e;
                return (0, i.jsx)("span", {
                    className: n,
                    children: (0, i.jsx)(l, {
                        channel: m,
                        section: t,
                        selectable: !1,
                        width: 20,
                        height: 20
                    })
                })
            } : void 0;
            return (0, i.jsx)(o.Drp, {
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
        }, [m, L]),
        F = (0, i.jsx)(o.aK1, {
            id: "command-search",
            control: (e, t) => (0, i.jsx)(o.VPO, {
                ...e,
                query: j,
                onChange: D,
                placeholder: b.intl.string(b.t.m1UwbP),
                ref: t
            })
        }, "command-search");
    if (G) t = (0, i.jsx)(o.Drp, {
        id: "menu-commands-placeholder",
        render: () => (0, i.jsx)(_.A, {}),
        disabled: !0
    }, "menu-commands-placeholder");
    else {
        if (0 === w.length) t = (0, i.jsxs)(i.Fragment, {
            children: [N && (0, i.jsxs)(i.Fragment, {
                children: [F, (0, i.jsx)(o.bXX, {})]
            }), (0, i.jsx)(o.Drp, {
                id: "menu-commands-empty",
                label: b.intl.string(b.t.YSNlV2),
                disabled: !0
            }, "menu-commands-empty")]
        });
        else if (N) t = (0, i.jsxs)(i.Fragment, {
            children: [F, (0, i.jsx)(o.bXX, {}), w.map(e => L(e, {
                showAppIcon: !0
            }))]
        });
        else {
            let e = P.find(e => {
                    let {
                        section: t
                    } = e;
                    return t.id === E.Ik.FRECENCY
                }),
                n = P.filter(e => {
                    let {
                        section: t
                    } = e;
                    return t.id !== E.Ik.FRECENCY
                });
            t = (0, i.jsxs)(i.Fragment, {
                children: [F, null != e && M(e), (0, i.jsx)(o.rXV, {
                    label: b.intl.string(b.t.PHjkRE),
                    children: n.map(e => B(e))
                })]
            })
        }
        null != O && O.length > 0 && (t = (0, i.jsxs)(i.Fragment, {
            children: [t, (0, i.jsx)(o.bXX, {}, "separator"), O]
        }))
    }
    if (!f.kvI.TEXTUAL.has(m.type))
        if (null == O) return null;
        else t = O;
    return (0, i.jsx)(o.Drp, {
        id: "apps",
        label: b.intl.string(b.t.PHjkRE),
        leadingAccessory: x ? {
            type: "icon",
            icon: o.k9F
        } : void 0,
        listClassName: T.p,
        children: t
    })
}