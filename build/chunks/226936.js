/** Chunk was on 36054 **/
/** chunk id: 226936, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => v
}), n(896048);
var a = n(627968),
    l = n(64700),
    r = n(503698),
    i = n.n(r),
    s = n(934551),
    o = n(311907),
    c = n(397927),
    d = n(238193),
    u = n(624622),
    m = n(844330),
    p = n(961350),
    h = n(372022);
let x = [s.UserIcon, s.ShieldIcon, s.GiftIcon, s.AchievementsIcon, s.PiggyBankIcon, s.TreehouseIcon, s.SpeedometerIcon, s.CompassIcon, s.SignPostIcon, s.CarIcon, s.TrainIcon, s.TeacupIcon, s.InventoryIcon, s.FoodIcon, s.BurgerIcon, s.MagicDoorIcon, s.PawPrintIcon, s.RecordPlayerIcon, s.SettingsIcon],
    g = ["text-default", "text-feedback-positive", "text-feedback-warning", "text-feedback-info", "text-feedback-critical"],
    f = () => {
        let [e, t] = l.useState(""), [n, r] = l.useState(""), [i, s] = l.useState(!1);
        return (0, a.jsxs)(a.Fragment, {
            children: [(0, a.jsx)("form", {
                onSubmit: async a => {
                    a.preventDefault(), s(!0);
                    try {
                        await (0, d.gs)(e, n), t(""), r("")
                    } finally {
                        s(!1)
                    }
                },
                children: (0, a.jsxs)(c.BJc, {
                    direction: "vertical",
                    align: "center",
                    gap: 8,
                    children: [(0, a.jsxs)(c.BJc, {
                        direction: "horizontal",
                        align: "center",
                        gap: 4,
                        children: [(0, a.jsx)(c.ksK, {
                            fullWidth: !0,
                            value: e,
                            onChange: t,
                            placeholder: "Pool ID",
                            disabled: i
                        }), (0, a.jsx)(c.ksK, {
                            type: "password",
                            fullWidth: !0,
                            value: n,
                            onChange: r,
                            placeholder: "Password",
                            disabled: i
                        })]
                    }), (0, a.jsxs)(c.BJc, {
                        direction: "horizontal",
                        align: "center",
                        gap: 4,
                        children: [(0, a.jsx)(c.Button, {
                            type: "button",
                            size: "md",
                            fullWidth: !0,
                            variant: "secondary",
                            text: "Clear",
                            onClick: () => {
                                t(""), r("")
                            },
                            disabled: 0 === e.length || 0 === n.length || i
                        }), (0, a.jsx)(c.Button, {
                            type: "submit",
                            size: "md",
                            fullWidth: !0,
                            variant: "primary",
                            text: "Add Pool",
                            disabled: 0 === e.length || 0 === n.length || i,
                            loading: i
                        })]
                    })]
                })
            }), (0, a.jsx)(c.cGx, {
                gap: 4
            })]
        })
    },
    b = e => {
        let {
            pool: t
        } = e, {
            id: n,
            summary: r
        } = t, f = u.A.getUsersForPool(n), b = (0, o.bG)([p.default], () => p.default.getId()), v = x[Number(n) % x.length], j = g[Number(n) % g.length], _ = l.useCallback(() => {
            (0, d.cD)(n)
        }, [n]);
        return (0, a.jsx)(c.BJc, {
            direction: "horizontal",
            align: "start",
            justify: "space-between",
            children: (0, a.jsx)(m.A, {
                icon: (0, a.jsx)(c.Text, {
                    variant: "text-md/medium",
                    color: j,
                    className: h.td,
                    children: (0, a.jsx)(v, {
                        size: "custom",
                        width: 24,
                        height: 24,
                        color: "currentColor"
                    })
                }),
                title: r,
                className: h.JC,
                subtitle: "".concat(f.length, " users"),
                children: (0, a.jsxs)(c.BJc, {
                    direction: "vertical",
                    gap: 4,
                    padding: {
                        left: 24,
                        right: 8,
                        bottom: 16
                    },
                    fullWidth: !1,
                    children: [f.map((e, n) => (0, a.jsxs)(l.Fragment, {
                        children: [0 !== n && (0, a.jsx)(c.cGx, {
                            gap: 4
                        }), (0, a.jsx)(c.DUT, {
                            onClick: n => {
                                n.stopPropagation(), (0, d.sl)(t.id, e.id)
                            },
                            "aria-disabled": b === e.id,
                            className: i()(h.vk, {
                                [h.Pe]: b === e.id
                            }),
                            children: (0, a.jsxs)(c.BJc, {
                                direction: "horizontal",
                                align: "center",
                                justify: "space-between",
                                gap: 8,
                                padding: {
                                    right: 8
                                },
                                fullWidth: !1,
                                children: [(0, a.jsxs)(c.BJc, {
                                    direction: "horizontal",
                                    align: "center",
                                    gap: 8,
                                    fullWidth: !1,
                                    className: i()({
                                        [h.WP]: b === e.id
                                    }),
                                    children: [(0, a.jsx)(s.UserIcon, {
                                        size: "custom",
                                        width: 20,
                                        height: 20,
                                        color: "currentColor"
                                    }), (0, a.jsxs)("div", {
                                        children: [(0, a.jsx)(c.Text, {
                                            variant: "text-sm/normal",
                                            color: "text-default",
                                            children: e.username
                                        }), (0, a.jsx)(c.Text, {
                                            variant: "text-xs/normal",
                                            color: "text-muted",
                                            className: h.c1,
                                            children: e.email
                                        })]
                                    })]
                                }), b === e.id ? (0, a.jsx)(c.Text, {
                                    variant: "text-sm/normal",
                                    color: "text-feedback-positive",
                                    children: (0, a.jsx)(s.CircleCheckIcon, {
                                        size: "sm",
                                        color: "currentColor"
                                    })
                                }) : (0, a.jsx)(c._BQ, {
                                    size: "sm",
                                    color: "currentColor"
                                })]
                            }, e.id)
                        }, e.id)]
                    }, e.id)), (0, a.jsx)("div", {
                        className: h.UD,
                        children: (0, a.jsx)(c.Button, {
                            icon: s.TrashIcon,
                            text: "",
                            size: "sm",
                            variant: "secondary",
                            onClick: _
                        })
                    })]
                })
            })
        })
    };

function v() {
    let e = (0, o.yK)([u.A], () => {
        var e;
        return null != (e = u.A.getPools()) ? e : []
    });
    return (0, a.jsxs)(c.BJc, {
        padding: 16,
        gap: 16,
        fullWidth: !1,
        className: h.kL,
        children: [(0, a.jsx)(f, {}), (0, a.jsx)(c.HOs, {
            className: h.Ik,
            children: null == e ? void 0 : e.map(e => (0, a.jsx)(b, {
                pool: e
            }, e.id))
        })]
    })
}