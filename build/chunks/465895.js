/** chunk id: 465895 params = (module,exports,require) **/
n.d(t, {
    A: () => R
});
var a = n(627968),
    i = n(64700),
    l = n(503698),
    s = n.n(l),
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
    _ = n(2915),
    f = n(367744),
    v = n(652215),
    b = n(788868),
    j = n(872985),
    A = n(930821);
let C = async () => {
    try {
        let {
            body: e
        } = await r.Bo.get({
            url: v.Rsh.USER_OFFER_IDS,
            rejectWithError: !0
        });
        return e
    } catch (e) {
        return []
    }
}, y = async (e, t) => {
    try {
        await r.Bo.post({
            url: v.Rsh.CREATE_USER_OFFER(e, t),
            rejectWithError: !0
        })
    } catch {} finally {
        await (0, u._D)()
    }
}, T = async (e, t) => {
    try {
        await r.Bo.del({
            url: v.Rsh.UPDATE_USER_OFFER(e, t),
            rejectWithError: !0
        })
    } catch {} finally {
        await (0, u._D)()
    }
}, S = async () => {
    try {
        let {
            body: e
        } = await r.Bo.get({
            url: v.Rsh.USER_OFFERS,
            rejectWithError: !0
        });
        return e
    } catch (e) {
        return {
            trial: [],
            discount: []
        }
    }
}, E = async () => {
    try {
        await r.Bo.del({
            url: v.Rsh.USER_OFFERS,
            rejectWithError: !0
        })
    } catch {} finally {
        await h.A.forceReset(), await (0, u._D)()
    }
}, N = async e => {
    await r.Bo.post({
        url: v.Rsh.CREATE_REVERSE_TRIAL,
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
        forceRefetch: l
    } = e, [o, m] = i.useState(!1), [h, _] = i.useState(!1), [f, A] = i.useState(!1), [C, y] = i.useState(!1);
    i.useEffect(() => {
        f && y(!0);
        let e = setTimeout(() => {
            y(!1)
        }, 500);
        return () => {
            clearTimeout(e)
        }
    }, [f]);
    let {
        id: S,
        expires_at: E,
        redeemed_at: N,
        trial_id: I,
        subscription_trial: k,
        referrer: R
    } = t, O = n.find(e => {
        let {
            value: t
        } = e;
        return t === I
    })?.label ?? "Unknown";
    null != R && (O = `${O} from @${R.username}`);
    let w = null != E,
        D = null != E && new Date(E).getTime() < Date.now(),
        M = k?.sku_id === b.pe.TIER_0,
        P = async () => {
            A(!0), w ? await U({
                expiresAt: null
            }) : await (0, u.u1)(t), l(), A(!1)
        }, U = async e => {
            A(!0);
            try {
                await r.Bo.patch({
                    url: v.Rsh.UPDATE_USER_OFFER(S, "trial"),
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
                l(), A(!1)
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
                _(!1)
            }, 3e3);
            return () => {
                clearTimeout(e)
            }
        }
    }, [o, h]);
    let L = "Active";
    return w && (L = "Acked"), D && (L = "Expired"), (0, a.jsxs)("div", {
        className: s()(j.Nr, M ? j.Qf : j.C1),
        children: [(0, a.jsx)("div", {
            className: s()(j.nM, j.S7),
            children: (0, a.jsx)(d.Heading, {
                variant: "heading-lg/semibold",
                color: "always-white",
                children: O
            })
        }), (0, a.jsxs)(d.DUT, {
            className: s()(j.nM, j.QB),
            onClick: () => {
                (0, x.C)(S, () => m(!0))
            },
            children: [(0, a.jsxs)(d.Text, {
                variant: "eyebrow",
                color: "always-white",
                children: ["Offer: ", S]
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
            className: s()(j.nM, j.QB),
            onClick: () => {
                (0, x.C)(I, () => _(!0))
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
                value: (0, p.Xm)(E),
                onChange: e => {
                    U({
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
                value: R?.id ?? "",
                onChange: e => U({
                    referrerId: e.target.value
                })
            })]
        }), (0, a.jsxs)("div", {
            className: j.fC,
            children: [(0, a.jsx)(d.DUT, {
                onClick: P,
                className: s()(j.qS, j.vk, {
                    [j.R1]: w,
                    [j._7]: D
                }),
                children: (0, a.jsx)(d.Text, {
                    variant: "eyebrow",
                    color: "Acked" === L ? void 0 : "always-white",
                    children: L
                })
            }), null != N && (0, a.jsx)("div", {
                className: s()(j.qS, j.k3),
                children: (0, a.jsx)(d.Text, {
                    variant: "eyebrow",
                    color: "always-white",
                    children: "Redeemed"
                })
            })]
        }), (0, a.jsx)(d.DUT, {
            onClick: async () => {
                A(!0), await T(S, "trial"), l(), A(!1)
            },
            children: (0, a.jsx)(d.ucK, {
                size: "md",
                color: "currentColor",
                className: s()(j.Kk, j.IT)
            })
        }), (0, a.jsx)("div", {
            className: s()(j.g4, {
                [j.VP]: f || C
            }),
            children: (0, a.jsx)(d.y$y, {})
        })]
    })
}

function k(e) {
    let {
        offer: t,
        offerOptions: n,
        forceRefetch: l
    } = e, [o, m] = i.useState(!1), [h, g] = i.useState(!1), [_, f] = i.useState(!1), [b, A] = i.useState(!1);
    i.useEffect(() => {
        _ && A(!0);
        let e = setTimeout(() => {
            A(!1)
        }, 500);
        return () => {
            clearTimeout(e)
        }
    }, [_]);
    let {
        id: C,
        expires_at: y,
        applied_at: S,
        discount_id: E,
        discount: N
    } = t, I = n.find(e => {
        let {
            value: t
        } = e;
        return t === E
    })?.label ?? "Unknown", k = null != y, R = null != y && new Date(y).getTime() < Date.now(), O = async () => {
        f(!0), k ? await w({
            expiresAt: null
        }) : await (0, u.u1)(void 0, t), l(), f(!1)
    }, w = async e => {
        let {
            expiresAt: t
        } = e;
        f(!0);
        try {
            await r.Bo.patch({
                url: v.Rsh.UPDATE_USER_OFFER(C, "discount"),
                body: {
                    expires_at: t
                },
                rejectWithError: !0
            })
        } finally {
            l(), f(!1)
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
    return R && (D = "Expired"), k && (D = "Acked"), (0, a.jsxs)("div", {
        className: s()(j.Nr, j.id),
        children: [(0, a.jsx)("div", {
            className: s()(j.nM, j.S7),
            children: (0, a.jsx)(d.Heading, {
                variant: "heading-lg/semibold",
                color: "text-default",
                children: I
            })
        }), (0, a.jsxs)(d.DUT, {
            className: s()(j.nM, j.QB),
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
                className: s()(j.Kk, j.mK)
            }) : (0, a.jsx)(d.TdU, {
                size: "xs",
                color: "currentColor",
                className: j.Kk
            })]
        }), (0, a.jsxs)(d.DUT, {
            className: s()(j.nM, j.QB),
            onClick: () => {
                (0, x.C)(E, () => g(!0))
            },
            children: [(0, a.jsxs)(d.Text, {
                variant: "eyebrow",
                color: "text-default",
                children: ["Discount: ", E]
            }), h ? (0, a.jsx)(d.A9s, {
                size: "md",
                color: "currentColor",
                className: s()(j.Kk, j.mK)
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
                onClick: O,
                className: s()(j.qS, j.vk, {
                    [j.R1]: k,
                    [j._7]: R
                }),
                children: (0, a.jsx)(d.Text, {
                    variant: "eyebrow",
                    color: "Acked" === D ? void 0 : "always-white",
                    children: D
                })
            }), null != S && (0, a.jsx)("div", {
                className: s()(j.qS, j.k3),
                children: (0, a.jsx)(d.Text, {
                    variant: "eyebrow",
                    color: "always-white",
                    children: "Applied"
                })
            })]
        }), (0, a.jsx)(d.DUT, {
            className: j.aR,
            onClick: async () => {
                f(!0), await T(C, "discount"), l(), f(!1)
            },
            children: (0, a.jsx)(d.ucK, {
                size: "md",
                color: "currentColor",
                className: s()(j.Kk, j.fy)
            })
        }), (0, a.jsx)("div", {
            className: s()(j.g4, {
                [j.VP]: _ || b
            }),
            children: (0, a.jsx)(d.y$y, {})
        })]
    })
}

function R() {
    let [e, t] = i.useState([]), [n, l] = i.useState([]), [s, r] = i.useState(), [c, x] = i.useState(), [p, g] = i.useState([]), [b, T] = i.useState([]), [R, O] = i.useState(!0), [w, D] = i.useState(10080), [M, P] = i.useState([]), {
        entitlements: U,
        deleteFractionalPremium: L,
        refreshEntitlementList: B
    } = (0, f.o)();
    i.useEffect(() => {
        B()
    }, [B]), i.useEffect(() => {
        P(U.filter(e => e.sourceType === v.GD.REVERSE_TRIAL && null != e.endsAt && e.endsAt > new Date))
    }, [U]), i.useEffect(() => {
        (0 === e.length || 0 === n.length || R) && C().then(e => {
            let n = Object.keys(e.trial).map(t => ({
                    label: t,
                    value: e.trial[t]
                })),
                a = Object.keys(e.discount).map(t => ({
                    label: t,
                    value: e.discount[t]
                }));
            t(n), l(a), null == s && r(n[0].value), null == c && x(a[0].value)
        })
    }, [e, n, s, c, R]), i.useEffect(() => {
        R && (O(!1), h.A.forceReset(), (0, u._D)(), S().then(e => {
            g(e.trial.sort((e, t) => e.id.localeCompare(t.id))), T(e.discount.sort((e, t) => e.id.localeCompare(t.id)))
        }))
    }, [R]);
    let G = async () => {
        null != s && (await y(s, "trial"), O(!0))
    }, F = async () => {
        null != c && (await y(c, "discount"), O(!0))
    }, V = async () => {
        await E(), O(!0)
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
                        onClick: () => O(!0)
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
                        value: s,
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
                    forceRefetch: () => O(!0)
                }, t.id))]
            }), b.length > 0 && (0, a.jsxs)("section", {
                className: j.uW,
                children: [(0, a.jsx)(d.Heading, {
                    variant: "heading-md/semibold",
                    children: "Existing Discount Offers"
                }), b.map(e => (0, a.jsx)(k, {
                    offer: e,
                    offerOptions: n,
                    forceRefetch: () => O(!0)
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
                    children: M.map(e => (0, a.jsx)(_.I, {
                        entitlement: e,
                        active: !0,
                        onDelete: () => L(e.id)
                    }, e.id))
                })]
            })]
        })
    })
}