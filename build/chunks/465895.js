/** chunk id: 465895 params = (module,exports,require) **/
n.d(t, {
    A: () => O
});
var a = n(627968),
    i = n(64700),
    s = n(503698),
    l = n.n(s),
    r = n(562465),
    o = n(554146),
    d = n(397927),
    c = n(472229),
    u = n(694080),
    m = n(594061),
    h = n(816733),
    x = n(957565),
    p = n(405269),
    g = n(927578),
    f = n(2915),
    v = n(367744),
    _ = n(652215),
    b = n(788868),
    j = n(214868),
    A = n(505206);
let C = async () => {
    try {
        let {
            body: e
        } = await r.Bo.get({
            url: _.Rsh.USER_OFFER_IDS,
            rejectWithError: !0
        });
        return e
    } catch (e) {
        return []
    }
}, y = async (e, t) => {
    try {
        await r.Bo.post({
            url: _.Rsh.CREATE_USER_OFFER(e, t),
            rejectWithError: !0
        })
    } catch {} finally {
        await (0, u._D)()
    }
}, S = async (e, t) => {
    try {
        await r.Bo.del({
            url: _.Rsh.UPDATE_USER_OFFER(e, t),
            rejectWithError: !0
        })
    } catch {} finally {
        await (0, u._D)()
    }
}, E = async () => {
    try {
        let {
            body: e
        } = await r.Bo.get({
            url: _.Rsh.USER_OFFERS,
            rejectWithError: !0
        });
        return e
    } catch (e) {
        return {
            trial: [],
            discount: []
        }
    }
}, T = async () => {
    try {
        await r.Bo.del({
            url: _.Rsh.USER_OFFERS,
            rejectWithError: !0
        })
    } catch {} finally {
        await h.A.forceReset(), await (0, u._D)()
    }
}, N = async e => {
    await r.Bo.post({
        url: _.Rsh.CREATE_REVERSE_TRIAL,
        body: {
            ends_at: e
        },
        rejectWithError: !0
    })
};

function I(e) {
    let {
        offer: t,
        offerOptions: n,
        forceRefetch: s
    } = e, [o, m] = i.useState(!1), [h, f] = i.useState(!1), [v, A] = i.useState(!1), [C, y] = i.useState(!1);
    i.useEffect(() => {
        v && y(!0);
        let e = setTimeout(() => {
            y(!1)
        }, 500);
        return () => {
            clearTimeout(e)
        }
    }, [v]);
    let {
        id: E,
        expires_at: T,
        redeemed_at: N,
        trial_id: I,
        subscription_trial: k,
        referrer: O
    } = t, R = n.find(e => {
        let {
            value: t
        } = e;
        return t === I
    })?.label ?? "Unknown";
    null != O && (R = `${R} from @${O.username}`);
    let w = null != T,
        D = null != T && new Date(T).getTime() < Date.now(),
        M = k?.sku_id === b.pe.TIER_0,
        P = async () => {
            A(!0), w ? await L({
                expiresAt: null
            }) : await (0, u.u1)(t), s(), A(!1)
        }, L = async e => {
            A(!0);
            try {
                await r.Bo.patch({
                    url: _.Rsh.UPDATE_USER_OFFER(E, "trial"),
                    body: {
                        ..."expiresAt" in e && {
                            expires_at: e.expiresAt
                        },
                        ..."referrerId" in e && {
                            referrer_id: e.referrerId
                        }
                    },
                    rejectWithError: !0
                })
            } finally {
                s(), A(!1)
            }
        };
    i.useEffect(() => {
        if (o) {
            let e = setTimeout(() => {
                m(!1)
            }, 3e3);
            return () => {
                clearTimeout(e)
            }
        }
        if (h) {
            let e = setTimeout(() => {
                f(!1)
            }, 3e3);
            return () => {
                clearTimeout(e)
            }
        }
    }, [o, h]);
    let U = "Active";
    return w && (U = "Acked"), D && (U = "Expired"), (0, a.jsxs)("div", {
        className: l()(j.Nr, M ? j.Qf : j.C1),
        children: [(0, a.jsx)("div", {
            className: l()(j.nM, j.S7),
            children: (0, a.jsx)(d.Heading, {
                variant: "heading-lg/semibold",
                color: "always-white",
                children: R
            })
        }), (0, a.jsxs)(d.DUT, {
            className: l()(j.nM, j.QB),
            onClick: () => {
                (0, x.C)(E, () => m(!0))
            },
            children: [(0, a.jsxs)(d.Text, {
                variant: "eyebrow",
                color: "always-white",
                children: ["Offer: ", E]
            }), o ? (0, a.jsx)(d.A9s, {
                size: "md",
                color: "currentColor",
                className: j.Kk
            }) : (0, a.jsx)(d.TdU, {
                size: "xs",
                color: "currentColor",
                className: j.Kk
            })]
        }), (0, a.jsxs)(d.DUT, {
            className: l()(j.nM, j.QB),
            onClick: () => {
                (0, x.C)(I, () => f(!0))
            },
            children: [(0, a.jsxs)(d.Text, {
                variant: "eyebrow",
                color: "always-white",
                children: ["Trial: ", I]
            }), h ? (0, a.jsx)(d.A9s, {
                size: "md",
                color: "currentColor",
                className: j.Kk
            }) : (0, a.jsx)(d.TdU, {
                size: "xs",
                color: "currentColor",
                className: j.Kk
            })]
        }), (0, a.jsx)("div", {
            className: j.nM,
            children: (0, a.jsxs)(d.Text, {
                variant: "eyebrow",
                color: "always-white",
                children: ["Trial Length:", " ", (0, g.re)({
                    intervalType: k?.interval ?? b.WT.MONTH,
                    intervalCount: k?.interval_count ?? 1,
                    capitalize: !1
                })]
            })
        }), (0, a.jsxs)("div", {
            className: j.nM,
            children: [(0, a.jsxs)(d.Text, {
                variant: "eyebrow",
                color: "always-white",
                children: ["Expires (", (0, c.A)(), "):"]
            }), (0, a.jsx)("input", {
                type: "datetime-local",
                value: (0, p.Xm)(T),
                onChange: e => {
                    L({
                        expiresAt: "" !== e.target.value ? new Date(e.target.value).toISOString() : null
                    })
                }
            })]
        }), (0, a.jsxs)("div", {
            className: j.nM,
            children: [(0, a.jsx)(d.Text, {
                variant: "eyebrow",
                color: "always-white",
                children: "Referrer ID:"
            }), (0, a.jsx)("input", {
                type: "text",
                value: O?.id ?? "",
                onChange: e => L({
                    referrerId: e.target.value
                })
            })]
        }), (0, a.jsxs)("div", {
            className: j.fC,
            children: [(0, a.jsx)(d.DUT, {
                onClick: P,
                className: l()(j.qS, j.vk, {
                    [j.R1]: w,
                    [j._7]: D
                }),
                children: (0, a.jsx)(d.Text, {
                    variant: "eyebrow",
                    color: "Acked" === U ? void 0 : "always-white",
                    children: U
                })
            }), null != N && (0, a.jsx)("div", {
                className: l()(j.qS, j.k3),
                children: (0, a.jsx)(d.Text, {
                    variant: "eyebrow",
                    color: "always-white",
                    children: "Redeemed"
                })
            })]
        }), (0, a.jsx)(d.DUT, {
            onClick: async () => {
                A(!0), await S(E, "trial"), s(), A(!1)
            },
            children: (0, a.jsx)(d.ucK, {
                size: "md",
                color: "currentColor",
                className: l()(j.Kk, j.IT)
            })
        }), (0, a.jsx)("div", {
            className: l()(j.g4, {
                [j.VP]: v || C
            }),
            children: (0, a.jsx)(d.y$y, {})
        })]
    })
}

function k(e) {
    let {
        offer: t,
        offerOptions: n,
        forceRefetch: s
    } = e, [o, m] = i.useState(!1), [h, g] = i.useState(!1), [f, v] = i.useState(!1), [b, A] = i.useState(!1);
    i.useEffect(() => {
        f && A(!0);
        let e = setTimeout(() => {
            A(!1)
        }, 500);
        return () => {
            clearTimeout(e)
        }
    }, [f]);
    let {
        id: C,
        expires_at: y,
        applied_at: E,
        discount_id: T,
        discount: N
    } = t, I = n.find(e => {
        let {
            value: t
        } = e;
        return t === T
    })?.label ?? "Unknown", k = null != y, O = null != y && new Date(y).getTime() < Date.now(), R = async () => {
        v(!0), k ? await w({
            expiresAt: null
        }) : await (0, u.u1)(void 0, t), s(), v(!1)
    }, w = async e => {
        let {
            expiresAt: t
        } = e;
        v(!0);
        try {
            await r.Bo.patch({
                url: _.Rsh.UPDATE_USER_OFFER(C, "discount"),
                body: {
                    expires_at: t
                },
                rejectWithError: !0
            })
        } finally {
            s(), v(!1)
        }
    };
    i.useEffect(() => {
        if (o) {
            let e = setTimeout(() => {
                m(!1)
            }, 3e3);
            return () => {
                clearTimeout(e)
            }
        }
        if (h) {
            let e = setTimeout(() => {
                g(!1)
            }, 3e3);
            return () => {
                clearTimeout(e)
            }
        }
    }, [o, h]);
    let D = "Active";
    return O && (D = "Expired"), k && (D = "Acked"), (0, a.jsxs)("div", {
        className: l()(j.Nr, j.id),
        children: [(0, a.jsx)("div", {
            className: l()(j.nM, j.S7),
            children: (0, a.jsx)(d.Heading, {
                variant: "heading-lg/semibold",
                color: "text-default",
                children: I
            })
        }), (0, a.jsxs)(d.DUT, {
            className: l()(j.nM, j.QB),
            onClick: () => {
                (0, x.C)(C, () => m(!0))
            },
            children: [(0, a.jsxs)(d.Text, {
                variant: "eyebrow",
                color: "text-default",
                children: ["Offer: ", C]
            }), o ? (0, a.jsx)(d.A9s, {
                size: "md",
                color: "currentColor",
                className: l()(j.Kk, j.mK)
            }) : (0, a.jsx)(d.TdU, {
                size: "xs",
                color: "currentColor",
                className: j.Kk
            })]
        }), (0, a.jsxs)(d.DUT, {
            className: l()(j.nM, j.QB),
            onClick: () => {
                (0, x.C)(T, () => g(!0))
            },
            children: [(0, a.jsxs)(d.Text, {
                variant: "eyebrow",
                color: "text-default",
                children: ["Discount: ", T]
            }), h ? (0, a.jsx)(d.A9s, {
                size: "md",
                color: "currentColor",
                className: l()(j.Kk, j.mK)
            }) : (0, a.jsx)(d.TdU, {
                size: "xs",
                color: "currentColor",
                className: j.Kk
            })]
        }), N?.amount != null && (0, a.jsx)("div", {
            children: (0, a.jsxs)(d.Text, {
                variant: "eyebrow",
                color: "text-default",
                children: [N.amount, "% off"]
            })
        }), (0, a.jsxs)("div", {
            className: j.nM,
            children: [(0, a.jsxs)(d.Text, {
                variant: "eyebrow",
                color: "always-white",
                children: ["Expires (", (0, c.A)(), "):"]
            }), (0, a.jsx)("input", {
                type: "datetime-local",
                value: (0, p.Xm)(y),
                onChange: e => w({
                    expiresAt: "" !== e.target.value ? new Date(e.target.value).toISOString() : null
                })
            })]
        }), (0, a.jsxs)("div", {
            className: j.fC,
            children: [(0, a.jsx)(d.DUT, {
                onClick: R,
                className: l()(j.qS, j.vk, {
                    [j.R1]: k,
                    [j._7]: O
                }),
                children: (0, a.jsx)(d.Text, {
                    variant: "eyebrow",
                    color: "Acked" === D ? void 0 : "always-white",
                    children: D
                })
            }), null != E && (0, a.jsx)("div", {
                className: l()(j.qS, j.k3),
                children: (0, a.jsx)(d.Text, {
                    variant: "eyebrow",
                    color: "always-white",
                    children: "Applied"
                })
            })]
        }), (0, a.jsx)(d.DUT, {
            className: j.aR,
            onClick: async () => {
                v(!0), await S(C, "discount"), s(), v(!1)
            },
            children: (0, a.jsx)(d.ucK, {
                size: "md",
                color: "currentColor",
                className: l()(j.Kk, j.fy)
            })
        }), (0, a.jsx)("div", {
            className: l()(j.g4, {
                [j.VP]: f || b
            }),
            children: (0, a.jsx)(d.y$y, {})
        })]
    })
}

function O() {
    let [e, t] = i.useState([]), [n, s] = i.useState([]), [l, r] = i.useState(), [c, x] = i.useState(), [p, g] = i.useState([]), [b, S] = i.useState([]), [O, R] = i.useState(!0), [w, D] = i.useState(10080), [M, P] = i.useState([]), {
        entitlements: L,
        deleteFractionalPremium: U,
        refreshEntitlementList: B
    } = (0, v.o)();
    i.useEffect(() => {
        B()
    }, [B]), i.useEffect(() => {
        P(L.filter(e => e.sourceType === _.GD.REVERSE_TRIAL && null != e.endsAt && e.endsAt > new Date))
    }, [L]), i.useEffect(() => {
        (0 === e.length || 0 === n.length || O) && C().then(e => {
            let n = Object.keys(e.trial).map(t => ({
                    label: t,
                    value: e.trial[t]
                })),
                a = Object.keys(e.discount).map(t => ({
                    label: t,
                    value: e.discount[t]
                }));
            t(n), s(a), null == l && r(n[0].value), null == c && x(a[0].value)
        })
    }, [e, n, l, c, O]), i.useEffect(() => {
        O && (R(!1), h.A.forceReset(), (0, u._D)(), E().then(e => {
            g(e.trial.sort((e, t) => e.id.localeCompare(t.id))), S(e.discount.sort((e, t) => e.id.localeCompare(t.id)))
        }))
    }, [O]);
    let G = async () => {
        null != l && (await y(l, "trial"), R(!0))
    }, F = async () => {
        null != c && (await y(c, "discount"), R(!0))
    }, V = async () => {
        await T(), R(!0)
    }, W = async () => {
        let e = new Date(Date.now() + 60 * w * 1e3).toISOString();
        await N(e), B()
    };
    return (0, a.jsx)(d.IpV, {
        className: A.nd,
        children: (0, a.jsxs)("div", {
            className: j.l$,
            children: [(0, a.jsxs)("section", {
                className: j.uW,
                children: [(0, a.jsx)(d.Heading, {
                    variant: "heading-md/semibold",
                    children: "Utils"
                }), (0, a.jsxs)("div", {
                    className: j.Uo,
                    children: [(0, a.jsx)(d.Button, {
                        variant: "primary",
                        size: "sm",
                        text: "Clear all User Offers",
                        onClick: V
                    }), (0, a.jsx)(d.Button, {
                        variant: "primary",
                        size: "sm",
                        text: "Clear Mobile Trials DismissibleContent",
                        onClick: () => (0, m.xB)(o.M.PREMIUM_MOBILE_TRIAL_USER_SETTINGS_AVATAR_BADGE)
                    }), (0, a.jsx)(d.Button, {
                        variant: "primary",
                        size: "sm",
                        text: "Clear Offer Nagbar DismissibleContent",
                        onClick: () => (0, m._N)(o.M.NAGBAR_NOTICE_OFFER_EXPIRING)
                    }), (0, a.jsx)(d.Button, {
                        variant: "primary",
                        size: "sm",
                        text: "Refresh DevTools",
                        onClick: () => R(!0)
                    })]
                })]
            }), (0, a.jsx)("section", {
                className: j.uW,
                children: (0, a.jsxs)("div", {
                    className: j.bd,
                    children: [(0, a.jsx)(d.l6P, {
                        label: "Create a Trial Offer",
                        options: e,
                        formatOption: e => {
                            let {
                                label: t,
                                value: n
                            } = e;
                            return {
                                label: t,
                                value: n,
                                id: n
                            }
                        },
                        value: l,
                        placeholder: "Trial Type",
                        onSelectionChange: r,
                        selectionMode: "single",
                        fullWidth: !0
                    }), (0, a.jsx)(d.Button, {
                        variant: "primary",
                        text: "Create",
                        onClick: G
                    })]
                })
            }), (0, a.jsx)("section", {
                className: j.uW,
                children: (0, a.jsxs)("div", {
                    className: j.bd,
                    children: [(0, a.jsx)(d.l6P, {
                        label: "Create a Discount Offer",
                        options: n,
                        formatOption: e => {
                            let {
                                label: t,
                                value: n
                            } = e;
                            return {
                                label: t,
                                value: n,
                                id: n
                            }
                        },
                        value: c,
                        placeholder: "Discount Type",
                        onSelectionChange: x,
                        selectionMode: "single",
                        fullWidth: !0
                    }), (0, a.jsx)(d.Button, {
                        variant: "primary",
                        text: "Create",
                        onClick: F
                    })]
                })
            }), p.length > 0 && (0, a.jsxs)("section", {
                className: j.uW,
                children: [(0, a.jsx)(d.Heading, {
                    variant: "heading-md/semibold",
                    children: "Existing Trial Offers"
                }), p.map(t => (0, a.jsx)(I, {
                    offer: t,
                    offerOptions: e,
                    forceRefetch: () => R(!0)
                }, t.id))]
            }), b.length > 0 && (0, a.jsxs)("section", {
                className: j.uW,
                children: [(0, a.jsx)(d.Heading, {
                    variant: "heading-md/semibold",
                    children: "Existing Discount Offers"
                }), b.map(e => (0, a.jsx)(k, {
                    offer: e,
                    offerOptions: n,
                    forceRefetch: () => R(!0)
                }, e.id))]
            }), (0, a.jsx)("section", {
                className: j.uW,
                children: (0, a.jsxs)("div", {
                    className: j.bd,
                    children: [(0, a.jsx)(d.l6P, {
                        label: "Create a Reverse Trial Entitlement",
                        options: [{
                            id: "5min",
                            label: "5 minutes",
                            value: 5
                        }, {
                            id: "1hour",
                            label: "1 hour",
                            value: 60
                        }, {
                            id: "1day",
                            label: "1 day",
                            value: 1440
                        }, {
                            id: "1week",
                            label: "1 week",
                            value: 10080
                        }],
                        value: w,
                        placeholder: "Reverse Trial Length",
                        onSelectionChange: D,
                        selectionMode: "single",
                        fullWidth: !0
                    }), (0, a.jsx)(d.Button, {
                        variant: "primary",
                        text: "Create",
                        onClick: W
                    })]
                })
            }), M.length > 0 && (0, a.jsxs)("div", {
                children: [(0, a.jsx)(d.Text, {
                    style: {
                        marginTop: "15px"
                    },
                    variant: "text-md/bold",
                    children: "Active reverse trial"
                }), (0, a.jsx)("div", {
                    children: M.map(e => (0, a.jsx)(f.I, {
                        entitlement: e,
                        active: !0,
                        onDelete: () => U(e.id)
                    }, e.id))
                })]
            })]
        })
    })
}