/** chunk id: 773699 params = (module,exports,require) **/
n.d(t, {
    A: () => b
});
var i = n(627968),
    s = n(64700),
    l = n(284009),
    r = n.n(l),
    a = n(311907),
    o = n(397927),
    c = n(842209),
    d = n(210978),
    h = n(545152),
    g = n(664929),
    u = n(700210),
    p = n(718676),
    _ = n(71393),
    m = n(287809),
    x = n(652215),
    A = n(73510),
    f = n(985018),
    E = n(404111);
let b = e => {
    let t, {
            commandType: n,
            commandTargetId: l,
            channel: b,
            guildId: I,
            onHeightUpdate: N,
            context: S,
            showIcon: C = !1
        } = e,
        j = (0, a.bG)([_.A], () => _.A.getGuild(I ?? b.guild_id)),
        T = (0, a.bG)([m.default], () => m.default.getUser(l)),
        v = (0, u.A)({
            user: T,
            guildId: j?.id,
            context: S
        }),
        M = s.useMemo(() => ({
            channel: b,
            type: "channel"
        }), [b]),
        [y, P] = s.useState(""),
        k = "" !== y,
        {
            commands: R,
            commandsByActiveSection: D,
            sectionDescriptors: F,
            loading: L
        } = c.cu({
            context: M,
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
            sections: w
        } = s.useMemo(() => {
            let e = {};
            return F.forEach(t => {
                e[t.id] = t
            }), {
                sections: e
            }
        }, [F]),
        O = s.useRef(L);
    s.useEffect(() => {
        L !== O.current && (O.current = L, N?.())
    }, [L, N]);
    let G = s.useCallback((e, t) => {
            let {
                showAppIcon: n
            } = t;
            r()(null != b, "menu item should not show if channel is null");
            let s = w[e.applicationId],
                a = n && null != s ? (0, g.Rg)(s) : void 0,
                c = null != a && null != s ? e => {
                    let {
                        className: t
                    } = e;
                    return (0, i.jsx)("span", {
                        className: t,
                        children: (0, i.jsx)(a, {
                            channel: b,
                            section: s,
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
                    (0, h.A)({
                        command: e,
                        optionValues: {},
                        context: {
                            channel: b,
                            guild: j
                        },
                        commandTargetId: l
                    })
                }
            }, e.id)
        }, [b, w, j, l]),
        V = s.useCallback(e => {
            let {
                section: t,
                data: n
            } = e;
            return (0, i.jsx)(o.rXV, {
                label: f.intl.string(f.t.V0w2ap),
                children: n.map(e => G(e, {
                    showAppIcon: !0
                }))
            }, t.id)
        }, [G]),
        H = s.useCallback(e => {
            let {
                section: t,
                data: n
            } = e, s = (0, g.Rg)(t), l = null != s ? e => {
                let {
                    className: n
                } = e;
                return (0, i.jsx)("span", {
                    className: n,
                    children: (0, i.jsx)(s, {
                        channel: b,
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
                iconLeft: l,
                leadingAccessory: null != l ? {
                    type: "icon",
                    icon: l
                } : void 0,
                children: n.map(e => G(e, {
                    showAppIcon: !1
                }))
            }, t.id)
        }, [b, G]),
        U = (0, i.jsx)(o.aK1, {
            id: "command-search",
            control: (e, t) => (0, i.jsx)(o.VPO, {
                ...e,
                query: y,
                onChange: P,
                placeholder: f.intl.string(f.t.m1UwbP),
                ref: t
            })
        }, "command-search");
    if (L) t = (0, i.jsx)(o.Drp, {
        id: "menu-commands-placeholder",
        render: () => (0, i.jsx)(p.A, {}),
        disabled: !0
    }, "menu-commands-placeholder");
    else {
        if (0 === R.length) t = (0, i.jsxs)(i.Fragment, {
            children: [k && (0, i.jsxs)(i.Fragment, {
                children: [U, (0, i.jsx)(o.bXX, {})]
            }), (0, i.jsx)(o.Drp, {
                id: "menu-commands-empty",
                label: f.intl.string(f.t.YSNlV2),
                disabled: !0
            }, "menu-commands-empty")]
        });
        else if (k) t = (0, i.jsxs)(i.Fragment, {
            children: [U, (0, i.jsx)(o.bXX, {}), R.map(e => G(e, {
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
                children: [U, null != e && V(e), (0, i.jsx)(o.rXV, {
                    label: f.intl.string(f.t.PHjkRE),
                    children: n.map(e => H(e))
                })]
            })
        }
        null != v && v.length > 0 && (t = (0, i.jsxs)(i.Fragment, {
            children: [t, (0, i.jsx)(o.bXX, {}, "separator"), v]
        }))
    }
    if (!x.kvI.TEXTUAL.has(b.type))
        if (null == v) return null;
        else t = v;
    return (0, i.jsx)(o.Drp, {
        id: "apps",
        label: f.intl.string(f.t.PHjkRE),
        leadingAccessory: C ? {
            type: "icon",
            icon: o.k9F
        } : void 0,
        listClassName: E.p,
        children: t
    })
}