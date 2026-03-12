/** chunk id: 226936 params = (module,exports,require) **/
n.d(t, {
    A: () => v
});
var a = n(627968),
    i = n(64700),
    s = n(503698),
    l = n.n(s),
    r = n(934551),
    o = n(311907),
    d = n(397927),
    c = n(238193),
    u = n(624622),
    m = n(844330),
    h = n(961350),
    p = n(447340);
let x = [r.UserIcon, r.ShieldIcon, r.GiftIcon, r.AchievementsIcon, r.PiggyBankIcon, r.TreehouseIcon, r.SpeedometerIcon, r.CompassIcon, r.SignPostIcon, r.CarIcon, r.TrainIcon, r.TeacupIcon, r.InventoryIcon, r.FoodIcon, r.BurgerIcon, r.MagicDoorIcon, r.PawPrintIcon, r.RecordPlayerIcon, r.SettingsIcon],
    g = ["text-default", "text-feedback-positive", "text-feedback-warning", "text-feedback-info", "text-feedback-critical"],
    _ = () => {
        let [e, t] = i.useState(""), [n, s] = i.useState(""), [l, r] = i.useState(!1);
        return (0, a.jsxs)(a.Fragment, {
            children: [(0, a.jsx)("form", {
                onSubmit: async a => {
                    a.preventDefault(), r(!0);
                    try {
                        await (0, c.gs)(e, n), t(""), s("")
                    } finally {
                        r(!1)
                    }
                },
                children: (0, a.jsxs)(d.BJc, {
                    direction: "vertical",
                    align: "center",
                    gap: 8,
                    children: [(0, a.jsxs)(d.BJc, {
                        direction: "horizontal",
                        align: "center",
                        gap: 4,
                        children: [(0, a.jsx)(d.ksK, {
                            fullWidth: !0,
                            value: e,
                            onChange: t,
                            placeholder: "Pool ID",
                            disabled: l
                        }), (0, a.jsx)(d.ksK, {
                            type: "password",
                            fullWidth: !0,
                            value: n,
                            onChange: s,
                            placeholder: "Password",
                            disabled: l
                        })]
                    }), (0, a.jsxs)(d.BJc, {
                        direction: "horizontal",
                        align: "center",
                        gap: 4,
                        children: [(0, a.jsx)(d.Button, {
                            type: "button",
                            size: "md",
                            fullWidth: !0,
                            variant: "secondary",
                            text: "Clear",
                            onClick: () => {
                                t(""), s("")
                            },
                            disabled: 0 === e.length || 0 === n.length || l
                        }), (0, a.jsx)(d.Button, {
                            type: "submit",
                            size: "md",
                            fullWidth: !0,
                            variant: "primary",
                            text: "Add Pool",
                            disabled: 0 === e.length || 0 === n.length || l,
                            loading: l
                        })]
                    })]
                })
            }), (0, a.jsx)(d.cGx, {
                gap: 4
            })]
        })
    },
    f = e => {
        let {
            pool: t
        } = e, {
            id: n,
            summary: s
        } = t, _ = u.A.getUsersForPool(n), f = (0, o.bG)([h.default], () => h.default.getId()), v = x[Number(n) % x.length], b = g[Number(n) % g.length], j = i.useCallback(() => {
            (0, c.cD)(n)
        }, [n]);
        return (0, a.jsx)(d.BJc, {
            direction: "horizontal",
            align: "start",
            justify: "space-between",
            children: (0, a.jsx)(m.A, {
                icon: (0, a.jsx)(d.Text, {
                    variant: "text-md/medium",
                    color: b,
                    className: p.td,
                    children: (0, a.jsx)(v, {
                        size: "custom",
                        width: 24,
                        height: 24,
                        color: "currentColor"
                    })
                }),
                title: s,
                className: p.JC,
                subtitle: `${_.length} users`,
                children: (0, a.jsxs)(d.BJc, {
                    direction: "vertical",
                    gap: 4,
                    padding: {
                        left: 24,
                        right: 8,
                        bottom: 16
                    },
                    fullWidth: !1,
                    children: [_.map((e, n) => (0, a.jsxs)(i.Fragment, {
                        children: [0 !== n && (0, a.jsx)(d.cGx, {
                            gap: 4
                        }), (0, a.jsx)(d.DUT, {
                            onClick: n => {
                                n.stopPropagation(), (0, c.sl)(t.id, e.id)
                            },
                            "aria-disabled": f === e.id,
                            className: l()(p.vk, {
                                [p.Pe]: f === e.id
                            }),
                            children: (0, a.jsxs)(d.BJc, {
                                direction: "horizontal",
                                align: "center",
                                justify: "space-between",
                                gap: 8,
                                padding: {
                                    right: 8
                                },
                                fullWidth: !1,
                                children: [(0, a.jsxs)(d.BJc, {
                                    direction: "horizontal",
                                    align: "center",
                                    gap: 8,
                                    fullWidth: !1,
                                    className: l()({
                                        [p.WP]: f === e.id
                                    }),
                                    children: [(0, a.jsx)(r.UserIcon, {
                                        size: "custom",
                                        width: 20,
                                        height: 20,
                                        color: "currentColor"
                                    }), (0, a.jsxs)("div", {
                                        children: [(0, a.jsx)(d.Text, {
                                            variant: "text-sm/normal",
                                            color: "text-default",
                                            children: e.username
                                        }), (0, a.jsx)(d.Text, {
                                            variant: "text-xs/normal",
                                            color: "text-muted",
                                            className: p.c1,
                                            children: e.email
                                        })]
                                    })]
                                }), f === e.id ? (0, a.jsx)(d.Text, {
                                    variant: "text-sm/normal",
                                    color: "text-feedback-positive",
                                    children: (0, a.jsx)(r.CircleCheckIcon, {
                                        size: "sm",
                                        color: "currentColor"
                                    })
                                }) : (0, a.jsx)(d._BQ, {
                                    size: "sm",
                                    color: "currentColor"
                                })]
                            }, e.id)
                        }, e.id)]
                    }, e.id)), (0, a.jsx)("div", {
                        className: p.UD,
                        children: (0, a.jsx)(d.Button, {
                            icon: r.TrashIcon,
                            text: "",
                            size: "sm",
                            variant: "secondary",
                            onClick: j
                        })
                    })]
                })
            })
        })
    };

function v() {
    let e = (0, o.yK)([u.A], () => u.A.getPools() ?? []);
    return (0, a.jsxs)(d.BJc, {
        padding: 16,
        gap: 16,
        fullWidth: !1,
        className: p.kL,
        children: [(0, a.jsx)(_, {}), (0, a.jsx)(d.HOs, {
            className: p.Ik,
            children: e?.map(e => (0, a.jsx)(f, {
                pool: e
            }, e.id))
        })]
    })
}