/** chunk id: 773699, original params: e,n,t (module,exports,require) **/
t.d(n, {
    A: () => b
});
var i = t(627968),
    l = t(64700),
    r = t(284009),
    a = t.n(r),
    s = t(311907),
    d = t(397927),
    o = t(842209),
    c = t(210978),
    u = t(545152),
    h = t(664929),
    A = t(700210),
    g = t(718676),
    m = t(71393),
    _ = t(287809),
    p = t(652215),
    f = t(73510),
    E = t(985018),
    x = t(329872);
let b = e => {
    let n, {
            commandType: t,
            commandTargetId: r,
            channel: b,
            guildId: T,
            onHeightUpdate: v,
            context: j,
            showIcon: C = !1
        } = e,
        I = (0, s.bG)([m.A], () => m.A.getGuild(T ?? b.guild_id)),
        S = (0, s.bG)([_.default], () => _.default.getUser(r)),
        y = (0, A.A)({
            user: S,
            guildId: I?.id,
            context: j
        }),
        O = l.useMemo(() => ({
            channel: b,
            type: "channel"
        }), [b]),
        [R, N] = l.useState(""),
        D = "" !== R,
        {
            commands: w,
            commandsByActiveSection: U,
            sectionDescriptors: G,
            loading: P
        } = o.cu({
            context: O,
            filters: {
                text: D ? R : void 0,
                commandTypes: [t]
            },
            options: {
                limit: f.YC,
                includeFrecency: !D,
                scoreMethod: D ? c.M.COMMAND_OR_APPLICATION : void 0
            },
            allowFetch: !0
        }),
        {
            sections: M
        } = l.useMemo(() => {
            let e = {};
            return G.forEach(n => {
                e[n.id] = n
            }), {
                sections: e
            }
        }, [G]),
        V = l.useRef(P);
    l.useEffect(() => {
        P !== V.current && (V.current = P, v?.())
    }, [P, v]);
    let k = l.useCallback((e, n) => {
            let {
                showAppIcon: t
            } = n;
            a()(null != b, "menu item should not show if channel is null");
            let l = M[e.applicationId],
                s = t && null != l ? (0, h.Rg)(l) : void 0,
                o = null != s && null != l ? e => {
                    let {
                        className: n
                    } = e;
                    return (0, i.jsx)("span", {
                        className: n,
                        children: (0, i.jsx)(s, {
                            channel: b,
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
                    (0, u.A)({
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
        }, [b, M, I, r]),
        L = l.useCallback(e => {
            let {
                section: n,
                data: t
            } = e;
            return (0, i.jsx)(d.rXV, {
                label: E.intl.string(E.t.V0w2ap),
                children: t.map(e => k(e, {
                    showAppIcon: !0
                }))
            }, n.id)
        }, [k]),
        B = l.useCallback(e => {
            let {
                section: n,
                data: t
            } = e, l = (0, h.Rg)(n), r = null != l ? e => {
                let {
                    className: t
                } = e;
                return (0, i.jsx)("span", {
                    className: t,
                    children: (0, i.jsx)(l, {
                        channel: b,
                        section: n,
                        selectable: !1,
                        width: 20,
                        height: 20
                    })
                })
            } : void 0;
            return (0, i.jsx)(d.Drp, {
                id: n.id,
                label: n.name,
                iconLeft: r,
                leadingAccessory: null != r ? {
                    type: "icon",
                    icon: r
                } : void 0,
                children: t.map(e => k(e, {
                    showAppIcon: !1
                }))
            }, n.id)
        }, [b, k]),
        X = (0, i.jsx)(d.aK1, {
            id: "command-search",
            control: (e, n) => (0, i.jsx)(d.VPO, {
                ...e,
                query: R,
                onChange: N,
                placeholder: E.intl.string(E.t.m1UwbP),
                ref: n
            })
        }, "command-search");
    if (P) n = (0, i.jsx)(d.Drp, {
        id: "menu-commands-placeholder",
        render: () => (0, i.jsx)(g.A, {}),
        disabled: !0
    }, "menu-commands-placeholder");
    else {
        if (0 === w.length) n = (0, i.jsxs)(i.Fragment, {
            children: [D && (0, i.jsxs)(i.Fragment, {
                children: [X, (0, i.jsx)(d.bXX, {})]
            }), (0, i.jsx)(d.Drp, {
                id: "menu-commands-empty",
                label: E.intl.string(E.t.YSNlV2),
                disabled: !0
            }, "menu-commands-empty")]
        });
        else if (D) n = (0, i.jsxs)(i.Fragment, {
            children: [X, (0, i.jsx)(d.bXX, {}), w.map(e => k(e, {
                showAppIcon: !0
            }))]
        });
        else {
            let e = U.find(e => {
                    let {
                        section: n
                    } = e;
                    return n.id === f.Ik.FRECENCY
                }),
                t = U.filter(e => {
                    let {
                        section: n
                    } = e;
                    return n.id !== f.Ik.FRECENCY
                });
            n = (0, i.jsxs)(i.Fragment, {
                children: [X, null != e && L(e), (0, i.jsx)(d.rXV, {
                    label: E.intl.string(E.t.PHjkRE),
                    children: t.map(e => B(e))
                })]
            })
        }
        null != y && y.length > 0 && (n = (0, i.jsxs)(i.Fragment, {
            children: [n, (0, i.jsx)(d.bXX, {}, "separator"), y]
        }))
    }
    if (!p.kvI.TEXTUAL.has(b.type))
        if (null == y) return null;
        else n = y;
    return (0, i.jsx)(d.Drp, {
        id: "apps",
        label: E.intl.string(E.t.PHjkRE),
        leadingAccessory: C ? {
            type: "icon",
            icon: d.k9F
        } : void 0,
        listClassName: x.p,
        children: n
    })
}