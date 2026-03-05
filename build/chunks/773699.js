/** chunk id: 773699, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => v
});
var i = n(627968),
    r = n(64700),
    l = n(284009),
    a = n.n(l),
    o = n(311907),
    s = n(397927),
    d = n(842209),
    u = n(210978),
    c = n(545152),
    A = n(664929),
    f = n(700210),
    E = n(718676),
    h = n(71393),
    _ = n(287809),
    p = n(652215),
    g = n(73510),
    C = n(985018),
    T = n(936790);
let v = e => {
    let t, {
            commandType: n,
            commandTargetId: l,
            channel: v,
            guildId: m,
            onHeightUpdate: I,
            context: R,
            showIcon: b = !1
        } = e,
        y = (0, o.bG)([h.A], () => h.A.getGuild(m ?? v.guild_id)),
        S = (0, o.bG)([_.default], () => _.default.getUser(l)),
        O = (0, f.A)({
            user: S,
            guildId: y?.id,
            context: R
        }),
        N = r.useMemo(() => ({
            channel: v,
            type: "channel"
        }), [v]),
        [x, P] = r.useState(""),
        G = "" !== x,
        {
            commands: D,
            commandsByActiveSection: w,
            sectionDescriptors: j,
            loading: L
        } = d.cu({
            context: N,
            filters: {
                text: G ? x : void 0,
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
            sections: U
        } = r.useMemo(() => {
            let e = {};
            return j.forEach(t => {
                e[t.id] = t
            }), {
                sections: e
            }
        }, [j]),
        F = r.useRef(L);
    r.useEffect(() => {
        L !== F.current && (F.current = L, I?.())
    }, [L, I]);
    let M = r.useCallback((e, t) => {
            let {
                showAppIcon: n
            } = t;
            a()(null != v, "menu item should not show if channel is null");
            let r = U[e.applicationId],
                o = n && null != r ? (0, A.Rg)(r) : void 0,
                d = null != o && null != r ? e => {
                    let {
                        className: t
                    } = e;
                    return (0, i.jsx)("span", {
                        className: t,
                        children: (0, i.jsx)(o, {
                            channel: v,
                            section: r,
                            width: 20,
                            height: 20,
                            selectable: !1
                        })
                    })
                } : void 0;
            return (0, i.jsx)(s.Drp, {
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
                            channel: v,
                            guild: y
                        },
                        commandTargetId: l
                    })
                }
            }, e.id)
        }, [v, U, y, l]),
        k = r.useCallback(e => {
            let {
                section: t,
                data: n
            } = e;
            return (0, i.jsx)(s.rXV, {
                label: C.intl.string(C.t.V0w2ap),
                children: n.map(e => M(e, {
                    showAppIcon: !0
                }))
            }, t.id)
        }, [M]),
        V = r.useCallback(e => {
            let {
                section: t,
                data: n
            } = e, r = (0, A.Rg)(t), l = null != r ? e => {
                let {
                    className: n
                } = e;
                return (0, i.jsx)("span", {
                    className: n,
                    children: (0, i.jsx)(r, {
                        channel: v,
                        section: t,
                        selectable: !1,
                        width: 20,
                        height: 20
                    })
                })
            } : void 0;
            return (0, i.jsx)(s.Drp, {
                id: t.id,
                label: t.name,
                iconLeft: l,
                leadingAccessory: null != l ? {
                    type: "icon",
                    icon: l
                } : void 0,
                children: n.map(e => M(e, {
                    showAppIcon: !1
                }))
            }, t.id)
        }, [v, M]),
        Y = (0, i.jsx)(s.aK1, {
            id: "command-search",
            control: (e, t) => (0, i.jsx)(s.VPO, {
                ...e,
                query: x,
                onChange: P,
                placeholder: C.intl.string(C.t.m1UwbP),
                ref: t
            })
        }, "command-search");
    if (L) t = (0, i.jsx)(s.Drp, {
        id: "menu-commands-placeholder",
        render: () => (0, i.jsx)(E.A, {}),
        disabled: !0
    }, "menu-commands-placeholder");
    else {
        if (0 === D.length) t = (0, i.jsxs)(i.Fragment, {
            children: [G && (0, i.jsxs)(i.Fragment, {
                children: [Y, (0, i.jsx)(s.bXX, {})]
            }), (0, i.jsx)(s.Drp, {
                id: "menu-commands-empty",
                label: C.intl.string(C.t.YSNlV2),
                disabled: !0
            }, "menu-commands-empty")]
        });
        else if (G) t = (0, i.jsxs)(i.Fragment, {
            children: [Y, (0, i.jsx)(s.bXX, {}), D.map(e => M(e, {
                showAppIcon: !0
            }))]
        });
        else {
            let e = w.find(e => {
                    let {
                        section: t
                    } = e;
                    return t.id === g.Ik.FRECENCY
                }),
                n = w.filter(e => {
                    let {
                        section: t
                    } = e;
                    return t.id !== g.Ik.FRECENCY
                });
            t = (0, i.jsxs)(i.Fragment, {
                children: [Y, null != e && k(e), (0, i.jsx)(s.rXV, {
                    label: C.intl.string(C.t.PHjkRE),
                    children: n.map(e => V(e))
                })]
            })
        }
        null != O && O.length > 0 && (t = (0, i.jsxs)(i.Fragment, {
            children: [t, (0, i.jsx)(s.bXX, {}, "separator"), O]
        }))
    }
    if (!p.kvI.TEXTUAL.has(v.type))
        if (null == O) return null;
        else t = O;
    return (0, i.jsx)(s.Drp, {
        id: "apps",
        label: C.intl.string(C.t.PHjkRE),
        leadingAccessory: b ? {
            type: "icon",
            icon: s.k9F
        } : void 0,
        listClassName: T.p,
        children: t
    })
}