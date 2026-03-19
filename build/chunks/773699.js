/** chunk id: 773699 params = (module,exports,require) **/
n.d(t, {
    A: () => C
});
var i = n(627968),
    l = n(64700),
    r = n(284009),
    a = n.n(r),
    o = n(311907),
    d = n(397927),
    s = n(842209),
    u = n(210978),
    c = n(545152),
    h = n(664929),
    A = n(700210),
    f = n(718676),
    E = n(71393),
    _ = n(287809),
    p = n(652215),
    g = n(73510),
    v = n(985018),
    T = n(936790);
let C = e => {
    let t, {
            commandType: n,
            commandTargetId: r,
            channel: C,
            guildId: b,
            onHeightUpdate: I,
            context: m,
            showIcon: R = !1
        } = e,
        O = (0, o.bG)([E.A], () => E.A.getGuild(b ?? C.guild_id)),
        S = (0, o.bG)([_.default], () => _.default.getUser(r)),
        y = (0, A.A)({
            user: S,
            guildId: O?.id,
            context: m
        }),
        N = l.useMemo(() => ({
            channel: C,
            type: "channel"
        }), [C]),
        [D, x] = l.useState(""),
        G = "" !== D,
        {
            commands: L,
            commandsByActiveSection: P,
            sectionDescriptors: w,
            loading: U
        } = s.cu({
            context: N,
            filters: {
                text: G ? D : void 0,
                commandTypes: [n]
            },
            options: {
                limit: g.YC,
                includeFrecency: !G,
                scoreMethod: G ? u.M.COMMAND_OR_APPLICATION : void 0
            },
            allowFetch: !0
        }),
        {
            sections: F
        } = l.useMemo(() => {
            let e = {};
            return w.forEach(t => {
                e[t.id] = t
            }), {
                sections: e
            }
        }, [w]),
        j = l.useRef(U);
    l.useEffect(() => {
        U !== j.current && (j.current = U, I?.())
    }, [U, I]);
    let k = l.useCallback((e, t) => {
            let {
                showAppIcon: n
            } = t;
            a()(null != C, "menu item should not show if channel is null");
            let l = F[e.applicationId],
                o = n && null != l ? (0, h.Rg)(l) : void 0,
                s = null != o && null != l ? e => {
                    let {
                        className: t
                    } = e;
                    return (0, i.jsx)("span", {
                        className: t,
                        children: (0, i.jsx)(o, {
                            channel: C,
                            section: l,
                            width: 20,
                            height: 20,
                            selectable: !1
                        })
                    })
                } : void 0;
            return (0, i.jsx)(d.Drp, {
                id: e.id,
                label: e.displayName,
                iconLeft: s,
                leadingAccessory: null != s ? {
                    type: "icon",
                    icon: s
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
                            channel: C,
                            guild: O
                        },
                        commandTargetId: r
                    })
                }
            }, e.id)
        }, [C, F, O, r]),
        V = l.useCallback(e => {
            let {
                section: t,
                data: n
            } = e;
            return (0, i.jsx)(d.rXV, {
                label: v.intl.string(v.t.V0w2ap),
                children: n.map(e => k(e, {
                    showAppIcon: !0
                }))
            }, t.id)
        }, [k]),
        M = l.useCallback(e => {
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
                        channel: C,
                        section: t,
                        selectable: !1,
                        width: 20,
                        height: 20
                    })
                })
            } : void 0;
            return (0, i.jsx)(d.Drp, {
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
        }, [C, k]),
        Y = (0, i.jsx)(d.aK1, {
            id: "command-search",
            control: (e, t) => (0, i.jsx)(d.VPO, {
                ...e,
                query: D,
                onChange: x,
                placeholder: v.intl.string(v.t.m1UwbP),
                ref: t
            })
        }, "command-search");
    if (U) t = (0, i.jsx)(d.Drp, {
        id: "menu-commands-placeholder",
        render: () => (0, i.jsx)(f.A, {}),
        disabled: !0
    }, "menu-commands-placeholder");
    else {
        if (0 === L.length) t = (0, i.jsxs)(i.Fragment, {
            children: [G && (0, i.jsxs)(i.Fragment, {
                children: [Y, (0, i.jsx)(d.bXX, {})]
            }), (0, i.jsx)(d.Drp, {
                id: "menu-commands-empty",
                label: v.intl.string(v.t.YSNlV2),
                disabled: !0
            }, "menu-commands-empty")]
        });
        else if (G) t = (0, i.jsxs)(i.Fragment, {
            children: [Y, (0, i.jsx)(d.bXX, {}), L.map(e => k(e, {
                showAppIcon: !0
            }))]
        });
        else {
            let e = P.find(e => {
                    let {
                        section: t
                    } = e;
                    return t.id === g.Ik.FRECENCY
                }),
                n = P.filter(e => {
                    let {
                        section: t
                    } = e;
                    return t.id !== g.Ik.FRECENCY
                });
            t = (0, i.jsxs)(i.Fragment, {
                children: [Y, null != e && V(e), (0, i.jsx)(d.rXV, {
                    label: v.intl.string(v.t.PHjkRE),
                    children: n.map(e => M(e))
                })]
            })
        }
        null != y && y.length > 0 && (t = (0, i.jsxs)(i.Fragment, {
            children: [t, (0, i.jsx)(d.bXX, {}, "separator"), y]
        }))
    }
    if (!p.kvI.TEXTUAL.has(C.type))
        if (null == y) return null;
        else t = y;
    return (0, i.jsx)(d.Drp, {
        id: "apps",
        label: v.intl.string(v.t.PHjkRE),
        leadingAccessory: R ? {
            type: "icon",
            icon: d.k9F
        } : void 0,
        listClassName: T.p,
        children: t
    })
}