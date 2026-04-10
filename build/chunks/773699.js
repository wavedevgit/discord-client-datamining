/** chunk id: 773699 params = (module,exports,require) **/
n.d(t, {
    A: () => E
});
var i = n(627968),
    r = n(64700),
    s = n(284009),
    l = n.n(s),
    a = n(311907),
    o = n(397927),
    c = n(842209),
    d = n(210978),
    g = n(545152),
    h = n(664929),
    p = n(700210),
    u = n(718676),
    _ = n(71393),
    m = n(287809),
    x = n(652215),
    A = n(73510),
    b = n(985018),
    f = n(142271);
let E = e => {
    let t, {
            commandType: n,
            commandTargetId: s,
            channel: E,
            guildId: I,
            onHeightUpdate: N,
            context: C,
            showIcon: S = !1
        } = e,
        j = (0, a.bG)([_.A], () => _.A.getGuild(I ?? E.guild_id)),
        T = (0, a.bG)([m.default], () => m.default.getUser(s)),
        M = (0, p.A)({
            user: T,
            guildId: j?.id,
            context: C
        }),
        v = r.useMemo(() => ({
            channel: E,
            type: "channel"
        }), [E]),
        [y, P] = r.useState(""),
        k = "" !== y,
        {
            commands: R,
            commandsByActiveSection: D,
            sectionDescriptors: L,
            loading: w
        } = c.cu({
            context: v,
            filters: {
                text: k ? y : void 0,
                commandTypes: [n]
            },
            options: {
                limit: A.YC,
                includeFrecency: !k,
                scoreMethod: k ? d.M.COMMAND_OR_APPLICATION : void 0
            },
            allowFetch: !0
        }),
        {
            sections: F
        } = r.useMemo(() => {
            let e = {};
            return L.forEach(t => {
                e[t.id] = t
            }), {
                sections: e
            }
        }, [L]),
        O = r.useRef(w);
    r.useEffect(() => {
        w !== O.current && (O.current = w, N?.())
    }, [w, N]);
    let V = r.useCallback((e, t) => {
            let {
                showAppIcon: n
            } = t;
            l()(null != E, "menu item should not show if channel is null");
            let r = F[e.applicationId],
                a = n && null != r ? (0, h.Rg)(r) : void 0,
                c = null != a && null != r ? e => {
                    let {
                        className: t
                    } = e;
                    return (0, i.jsx)("span", {
                        className: t,
                        children: (0, i.jsx)(a, {
                            channel: E,
                            section: r,
                            width: 20,
                            height: 20,
                            selectable: !1
                        })
                    })
                } : void 0;
            return (0, i.jsx)(o.Drp, {
                id: e.id,
                label: e.displayName,
                iconLeft: c,
                leadingAccessory: null != c ? {
                    type: "icon",
                    icon: c
                } : void 0,
                trailingIndicator: {
                    type: "icon",
                    icon: o.lX7
                },
                icon: o.lX7,
                action: () => {
                    (0, g.A)({
                        command: e,
                        optionValues: {},
                        context: {
                            channel: E,
                            guild: j
                        },
                        commandTargetId: s
                    })
                }
            }, e.id)
        }, [E, F, j, s]),
        G = r.useCallback(e => {
            let {
                section: t,
                data: n
            } = e;
            return (0, i.jsx)(o.rXV, {
                label: b.intl.string(b.t.V0w2ap),
                children: n.map(e => V(e, {
                    showAppIcon: !0
                }))
            }, t.id)
        }, [V]),
        U = r.useCallback(e => {
            let {
                section: t,
                data: n
            } = e, r = (0, h.Rg)(t), s = null != r ? e => {
                let {
                    className: n
                } = e;
                return (0, i.jsx)("span", {
                    className: n,
                    children: (0, i.jsx)(r, {
                        channel: E,
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
                iconLeft: s,
                leadingAccessory: null != s ? {
                    type: "icon",
                    icon: s
                } : void 0,
                children: n.map(e => V(e, {
                    showAppIcon: !1
                }))
            }, t.id)
        }, [E, V]),
        H = (0, i.jsx)(o.aK1, {
            id: "command-search",
            control: (e, t) => (0, i.jsx)(o.VPO, {
                ...e,
                query: y,
                onChange: P,
                placeholder: b.intl.string(b.t.m1UwbP),
                ref: t
            })
        }, "command-search");
    if (w) t = (0, i.jsx)(o.Drp, {
        id: "menu-commands-placeholder",
        render: () => (0, i.jsx)(u.A, {}),
        disabled: !0
    }, "menu-commands-placeholder");
    else {
        if (0 === R.length) t = (0, i.jsxs)(i.Fragment, {
            children: [k && (0, i.jsxs)(i.Fragment, {
                children: [H, (0, i.jsx)(o.bXX, {})]
            }), (0, i.jsx)(o.Drp, {
                id: "menu-commands-empty",
                label: b.intl.string(b.t.YSNlV2),
                disabled: !0
            }, "menu-commands-empty")]
        });
        else if (k) t = (0, i.jsxs)(i.Fragment, {
            children: [H, (0, i.jsx)(o.bXX, {}), R.map(e => V(e, {
                showAppIcon: !0
            }))]
        });
        else {
            let e = D.find(e => {
                    let {
                        section: t
                    } = e;
                    return t.id === A.Ik.FRECENCY
                }),
                n = D.filter(e => {
                    let {
                        section: t
                    } = e;
                    return t.id !== A.Ik.FRECENCY
                });
            t = (0, i.jsxs)(i.Fragment, {
                children: [H, null != e && G(e), (0, i.jsx)(o.rXV, {
                    label: b.intl.string(b.t.PHjkRE),
                    children: n.map(e => U(e))
                })]
            })
        }
        null != M && M.length > 0 && (t = (0, i.jsxs)(i.Fragment, {
            children: [t, (0, i.jsx)(o.bXX, {}, "separator"), M]
        }))
    }
    if (!x.kvI.TEXTUAL.has(E.type))
        if (null == M) return null;
        else t = M;
    return (0, i.jsx)(o.Drp, {
        id: "apps",
        label: b.intl.string(b.t.PHjkRE),
        leadingAccessory: S ? {
            type: "icon",
            icon: o.k9F
        } : void 0,
        listClassName: f.p,
        children: t
    })
}