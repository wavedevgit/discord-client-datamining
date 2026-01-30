/** chunk id: 163679, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => y
}), n(896048);
var a = n(627968),
    l = n(64700),
    r = n(397927),
    i = n(964486),
    s = n(847599),
    o = n(767379),
    c = n(240248),
    d = n(39537),
    u = n(278466),
    m = n(805866),
    p = n(627575),
    h = n(870341),
    x = n(686267),
    g = n(818348),
    f = n(646284),
    b = n(985018),
    v = n(36303);
let j = n(843020);

function _(e) {
    let {
        task: t,
        handleSubmit: n,
        disabled: r
    } = e, [i, s] = l.useState(t), o = l.useMemo(() => ({
        task: i,
        setTask: s
    }), [i, s]);
    return l.useEffect(() => {
        s(t)
    }, [t]), (0, a.jsxs)(u.h.Provider, {
        value: o,
        children: [(0, a.jsx)(x.A, {}), (0, a.jsx)(h.A, {
            onSubmit: n,
            disabled: r
        })]
    })
}
let y = function(e) {
    let {
        onClose: t
    } = e, [n, u] = l.useState(null), [h, x] = l.useState(!0), [y, A] = l.useState(null), [C, S] = l.useState(!1), O = l.useCallback(async () => {
        x(!0), A(null);
        try {
            var e;
            let n = await (0, d.$R)();
            if (null == n) return void t();
            !(0, c.uJ)(null == (e = n.ui_component) ? void 0 : e.component.type) && m.Vn.has(n.ui_component.component.type) ? u(n) : u({
                task_id: n.task_id,
                task_type: m.wP.REFRESH_APP,
                assignment_id: n.assignment_id,
                ui_component: {
                    component: {
                        type: m.Qq.REFRESH_APP,
                        data: {}
                    }
                },
                flow_context: {
                    tasks: [],
                    flow_id: n.flow_context.flow_id
                }
            })
        } catch (e) {
            A(b.intl.string(f.default["/f++3g"]))
        } finally {
            x(!1)
        }
    }, [t]), T = l.useCallback(async e => {
        if (null !== n) {
            S(!0);
            try {
                let t = {
                    task_id: n.task_id,
                    flow_id: n.flow_context.flow_id,
                    data: e
                };
                await (0, d.Rt)(t), O()
            } catch (e) {
                A(b.intl.string(f.default["+QRSxc"]))
            } finally {
                S(!1)
            }
        }
    }, [n, O]);
    (0, i.Ay)(() => {
        O()
    });
    let E = l.useMemo(() => (null == n ? void 0 : n.task_type) === m.wP.AGE_VERIFICATION, [n]);
    return (0, a.jsxs)("div", {
        className: v.Tp,
        children: [(0, a.jsx)("img", {
            className: v.xX,
            src: j,
            alt: ""
        }), E ? (0, a.jsx)(o.default, {
            transitionState: r.ip4.ENTERED,
            entryPoint: s.q1.SAFETY_FLOWS,
            onClose: g.tE,
            onComplete: async () => {
                await T({
                    type: m.Ij.Empty
                })
            },
            dismissable: !1
        }) : (0, a.jsx)("div", {
            className: v.nA,
            children: h ? (0, a.jsx)(r.y$y, {
                type: r.y$y.Type.SPINNING_CIRCLE
            }) : (0, a.jsx)("div", {
                className: v.kL,
                children: (0, a.jsxs)(r.BJc, {
                    direction: "horizontal",
                    justify: "start",
                    className: v.rf,
                    children: [null !== y && (0, a.jsxs)(r.BJc, {
                        direction: "vertical",
                        justify: "space-between",
                        align: "center",
                        className: v.Nj,
                        padding: 16,
                        children: [(0, a.jsxs)(r.BJc, {
                            direction: "vertical",
                            gap: 4,
                            children: [(0, a.jsx)(r.Heading, {
                                variant: "heading-xl/semibold",
                                children: b.intl.string(b.t.c6kn6F)
                            }), (0, a.jsx)(r.Text, {
                                variant: "text-md/normal",
                                color: "text-muted",
                                children: b.intl.string(b.t.ZUEGFn)
                            })]
                        }), (0, a.jsxs)(r.BJc, {
                            direction: "horizontal",
                            justify: "center",
                            align: "center",
                            children: [(0, a.jsx)(r.Button, {
                                fullWidth: !0,
                                variant: "secondary",
                                text: b.intl.string(b.t["2jxGer"]),
                                onClick: () => {
                                    (0, p.k)("safety_flows_modal")
                                }
                            }), (0, a.jsx)(r.Button, {
                                fullWidth: !0,
                                text: b.intl.string(b.t["7NqTJn"]),
                                onClick: () => {
                                    O()
                                }
                            })]
                        })]
                    }), null === y && null != n && (0, a.jsx)(_, {
                        task: n,
                        handleSubmit: T,
                        disabled: C
                    })]
                })
            })
        })]
    })
}