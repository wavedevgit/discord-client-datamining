/** Chunk was on 65298 **/
/** chunk id: 465895, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => I
}), n(896048), n(638769);
var a = n(627968),
    l = n(64700),
    r = n(503698),
    i = n.n(r),
    s = n(562465),
    o = n(554146),
    c = n(397927),
    d = n(472229),
    u = n(694080),
    m = n(594061),
    p = n(816733),
    h = n(957565),
    x = n(405269),
    g = n(927578),
    f = n(2915),
    b = n(367744),
    v = n(652215),
    j = n(788868),
    _ = n(815907),
    y = n(661251);
let A = async () => {
    try {
        let {
            body: e
        } = await s.Bo.get({
            url: v.Rsh.USER_OFFER_IDS,
            rejectWithError: !0
        });
        return e
    } catch (e) {
        return []
    }
}, C = async (e, t) => {
    try {
        await s.Bo.post({
            url: v.Rsh.CREATE_USER_OFFER(e, t),
            rejectWithError: !0
        })
    } catch (e) {} finally {
        await (0, u._D)()
    }
}, S = async (e, t) => {
    try {
        await s.Bo.del({
            url: v.Rsh.UPDATE_USER_OFFER(e, t),
            rejectWithError: !0
        })
    } catch (e) {} finally {
        await (0, u._D)()
    }
}, O = async () => {
    try {
        let {
            body: e
        } = await s.Bo.get({
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
}, T = async () => {
    try {
        await s.Bo.del({
            url: v.Rsh.USER_OFFERS,
            rejectWithError: !0
        })
    } catch (e) {} finally {
        await p.A.forceReset(), await (0, u._D)()
    }
}, E = async e => {
    await s.Bo.post({
        url: v.Rsh.CREATE_REVERSE_TRIAL,
        body: {
            ends_at: e
        },
        rejectWithError: !0
    })
};

function N(e) {
    var t, n, r, o, m;
    let {
        offer: p,
        offerOptions: f,
        forceRefetch: b
    } = e, [y, A] = l.useState(!1), [C, O] = l.useState(!1), [T, E] = l.useState(!1), [N, w] = l.useState(!1);
    l.useEffect(() => {
        T && w(!0);
        let e = setTimeout(() => {
            w(!1)
        }, 500);
        return () => {
            clearTimeout(e)
        }
    }, [T]);
    let {
        id: I,
        expires_at: P,
        redeemed_at: k,
        trial_id: R,
        subscription_trial: D,
        referrer: M
    } = p, L = null != (t = null == (m = f.find(e => {
        let {
            value: t
        } = e;
        return t === R
    })) ? void 0 : m.label) ? t : "Unknown";
    null != M && (L = "".concat(L, " from @").concat(M.username));
    let U = null != P,
        B = null != P && new Date(P).getTime() < Date.now(),
        G = (null == D ? void 0 : D.sku_id) === j.pe.TIER_0,
        F = async () => {
            E(!0), U ? await V({
                expiresAt: null
            }) : await (0, u.u1)(p), b(), E(!1)
        }, V = async e => {
            E(!0);
            try {
                await s.Bo.patch({
                    url: v.Rsh.UPDATE_USER_OFFER(I, "trial"),
                    body: function(e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var n = null != arguments[t] ? arguments[t] : {},
                                a = Object.keys(n);
                            "function" == typeof Object.getOwnPropertySymbols && (a = a.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                                return Object.getOwnPropertyDescriptor(n, e).enumerable
                            }))), a.forEach(function(t) {
                                var a;
                                a = n[t], t in e ? Object.defineProperty(e, t, {
                                    value: a,
                                    enumerable: !0,
                                    configurable: !0,
                                    writable: !0
                                }) : e[t] = a
                            })
                        }
                        return e
                    }({}, "expiresAt" in e && {
                        expires_at: e.expiresAt
                    }, "referrerId" in e && {
                        referrer_id: e.referrerId
                    }),
                    rejectWithError: !0
                })
            } finally {
                b(), E(!1)
            }
        };
    l.useEffect(() => {
        if (y) {
            let e = setTimeout(() => {
                A(!1)
            }, 3e3);
            return () => {
                clearTimeout(e)
            }
        }
        if (C) {
            let e = setTimeout(() => {
                O(!1)
            }, 3e3);
            return () => {
                clearTimeout(e)
            }
        }
    }, [y, C]);
    let W = "Active";
    return U && (W = "Acked"), B && (W = "Expired"), (0, a.jsxs)("div", {
        className: i()(_.Nr, G ? _.Qf : _.C1),
        children: [(0, a.jsx)("div", {
            className: i()(_.nM, _.S7),
            children: (0, a.jsx)(c.Heading, {
                variant: "heading-lg/semibold",
                color: "always-white",
                children: L
            })
        }), (0, a.jsxs)(c.DUT, {
            className: i()(_.nM, _.QB),
            onClick: () => {
                (0, h.C)(I, () => A(!0))
            },
            children: [(0, a.jsxs)(c.Text, {
                variant: "eyebrow",
                color: "always-white",
                children: ["Offer: ", I]
            }), y ? (0, a.jsx)(c.A9s, {
                size: "md",
                color: "currentColor",
                className: _.Kk
            }) : (0, a.jsx)(c.TdU, {
                size: "xs",
                color: "currentColor",
                className: _.Kk
            })]
        }), (0, a.jsxs)(c.DUT, {
            className: i()(_.nM, _.QB),
            onClick: () => {
                (0, h.C)(R, () => O(!0))
            },
            children: [(0, a.jsxs)(c.Text, {
                variant: "eyebrow",
                color: "always-white",
                children: ["Trial: ", R]
            }), C ? (0, a.jsx)(c.A9s, {
                size: "md",
                color: "currentColor",
                className: _.Kk
            }) : (0, a.jsx)(c.TdU, {
                size: "xs",
                color: "currentColor",
                className: _.Kk
            })]
        }), (0, a.jsx)("div", {
            className: _.nM,
            children: (0, a.jsxs)(c.Text, {
                variant: "eyebrow",
                color: "always-white",
                children: ["Trial Length:", " ", (0, g.re)({
                    intervalType: null != (n = null == D ? void 0 : D.interval) ? n : j.WT.MONTH,
                    intervalCount: null != (r = null == D ? void 0 : D.interval_count) ? r : 1,
                    capitalize: !1
                })]
            })
        }), (0, a.jsxs)("div", {
            className: _.nM,
            children: [(0, a.jsxs)(c.Text, {
                variant: "eyebrow",
                color: "always-white",
                children: ["Expires (", (0, d.A)(), "):"]
            }), (0, a.jsx)("input", {
                type: "datetime-local",
                value: (0, x.Xm)(P),
                onChange: e => {
                    V({
                        expiresAt: "" !== e.target.value ? new Date(e.target.value).toISOString() : null
                    })
                }
            })]
        }), (0, a.jsxs)("div", {
            className: _.nM,
            children: [(0, a.jsx)(c.Text, {
                variant: "eyebrow",
                color: "always-white",
                children: "Referrer ID:"
            }), (0, a.jsx)("input", {
                type: "text",
                value: null != (o = null == M ? void 0 : M.id) ? o : "",
                onChange: e => V({
                    referrerId: e.target.value
                })
            })]
        }), (0, a.jsxs)("div", {
            className: _.fC,
            children: [(0, a.jsx)(c.DUT, {
                onClick: F,
                className: i()(_.qS, _.vk, {
                    [_.R1]: U,
                    [_._7]: B
                }),
                children: (0, a.jsx)(c.Text, {
                    variant: "eyebrow",
                    color: "Acked" === W ? void 0 : "always-white",
                    children: W
                })
            }), null != k && (0, a.jsx)("div", {
                className: i()(_.qS, _.k3),
                children: (0, a.jsx)(c.Text, {
                    variant: "eyebrow",
                    color: "always-white",
                    children: "Redeemed"
                })
            })]
        }), (0, a.jsx)(c.DUT, {
            onClick: async () => {
                E(!0), await S(I, "trial"), b(), E(!1)
            },
            children: (0, a.jsx)(c.ucK, {
                size: "md",
                color: "currentColor",
                className: i()(_.Kk, _.IT)
            })
        }), (0, a.jsx)("div", {
            className: i()(_.g4, {
                [_.VP]: T || N
            }),
            children: (0, a.jsx)(c.y$y, {})
        })]
    })
}

function w(e) {
    var t, n;
    let {
        offer: r,
        offerOptions: o,
        forceRefetch: m
    } = e, [p, g] = l.useState(!1), [f, b] = l.useState(!1), [j, y] = l.useState(!1), [A, C] = l.useState(!1);
    l.useEffect(() => {
        j && C(!0);
        let e = setTimeout(() => {
            C(!1)
        }, 500);
        return () => {
            clearTimeout(e)
        }
    }, [j]);
    let {
        id: O,
        expires_at: T,
        applied_at: E,
        discount_id: N,
        discount: w
    } = r, I = null != (t = null == (n = o.find(e => {
        let {
            value: t
        } = e;
        return t === N
    })) ? void 0 : n.label) ? t : "Unknown", P = null != T, k = null != T && new Date(T).getTime() < Date.now(), R = async () => {
        y(!0), P ? await D({
            expiresAt: null
        }) : await (0, u.u1)(void 0, r), m(), y(!1)
    }, D = async e => {
        let {
            expiresAt: t
        } = e;
        y(!0);
        try {
            await s.Bo.patch({
                url: v.Rsh.UPDATE_USER_OFFER(O, "discount"),
                body: {
                    expires_at: t
                },
                rejectWithError: !0
            })
        } finally {
            m(), y(!1)
        }
    };
    l.useEffect(() => {
        if (p) {
            let e = setTimeout(() => {
                g(!1)
            }, 3e3);
            return () => {
                clearTimeout(e)
            }
        }
        if (f) {
            let e = setTimeout(() => {
                b(!1)
            }, 3e3);
            return () => {
                clearTimeout(e)
            }
        }
    }, [p, f]);
    let M = "Active";
    return k && (M = "Expired"), P && (M = "Acked"), (0, a.jsxs)("div", {
        className: i()(_.Nr, _.id),
        children: [(0, a.jsx)("div", {
            className: i()(_.nM, _.S7),
            children: (0, a.jsx)(c.Heading, {
                variant: "heading-lg/semibold",
                color: "text-default",
                children: I
            })
        }), (0, a.jsxs)(c.DUT, {
            className: i()(_.nM, _.QB),
            onClick: () => {
                (0, h.C)(O, () => g(!0))
            },
            children: [(0, a.jsxs)(c.Text, {
                variant: "eyebrow",
                color: "text-default",
                children: ["Offer: ", O]
            }), p ? (0, a.jsx)(c.A9s, {
                size: "md",
                color: "currentColor",
                className: i()(_.Kk, _.mK)
            }) : (0, a.jsx)(c.TdU, {
                size: "xs",
                color: "currentColor",
                className: _.Kk
            })]
        }), (0, a.jsxs)(c.DUT, {
            className: i()(_.nM, _.QB),
            onClick: () => {
                (0, h.C)(N, () => b(!0))
            },
            children: [(0, a.jsxs)(c.Text, {
                variant: "eyebrow",
                color: "text-default",
                children: ["Discount: ", N]
            }), f ? (0, a.jsx)(c.A9s, {
                size: "md",
                color: "currentColor",
                className: i()(_.Kk, _.mK)
            }) : (0, a.jsx)(c.TdU, {
                size: "xs",
                color: "currentColor",
                className: _.Kk
            })]
        }), (null == w ? void 0 : w.amount) != null && (0, a.jsx)("div", {
            children: (0, a.jsxs)(c.Text, {
                variant: "eyebrow",
                color: "text-default",
                children: [w.amount, "% off"]
            })
        }), (0, a.jsxs)("div", {
            className: _.nM,
            children: [(0, a.jsxs)(c.Text, {
                variant: "eyebrow",
                color: "always-white",
                children: ["Expires (", (0, d.A)(), "):"]
            }), (0, a.jsx)("input", {
                type: "datetime-local",
                value: (0, x.Xm)(T),
                onChange: e => D({
                    expiresAt: "" !== e.target.value ? new Date(e.target.value).toISOString() : null
                })
            })]
        }), (0, a.jsxs)("div", {
            className: _.fC,
            children: [(0, a.jsx)(c.DUT, {
                onClick: R,
                className: i()(_.qS, _.vk, {
                    [_.R1]: P,
                    [_._7]: k
                }),
                children: (0, a.jsx)(c.Text, {
                    variant: "eyebrow",
                    color: "Acked" === M ? void 0 : "always-white",
                    children: M
                })
            }), null != E && (0, a.jsx)("div", {
                className: i()(_.qS, _.k3),
                children: (0, a.jsx)(c.Text, {
                    variant: "eyebrow",
                    color: "always-white",
                    children: "Applied"
                })
            })]
        }), (0, a.jsx)(c.DUT, {
            className: _.aR,
            onClick: async () => {
                y(!0), await S(O, "discount"), m(), y(!1)
            },
            children: (0, a.jsx)(c.ucK, {
                size: "md",
                color: "currentColor",
                className: i()(_.Kk, _.fy)
            })
        }), (0, a.jsx)("div", {
            className: i()(_.g4, {
                [_.VP]: j || A
            }),
            children: (0, a.jsx)(c.y$y, {})
        })]
    })
}

function I() {
    let [e, t] = l.useState([]), [n, r] = l.useState([]), [i, s] = l.useState(), [d, h] = l.useState(), [x, g] = l.useState([]), [j, S] = l.useState([]), [I, P] = l.useState(!0), [k, R] = l.useState(10080), [D, M] = l.useState([]), {
        entitlements: L,
        deleteFractionalPremium: U,
        refreshEntitlementList: B
    } = (0, b.o)();
    l.useEffect(() => {
        B()
    }, [B]), l.useEffect(() => {
        M(L.filter(e => e.sourceType === v.GD.REVERSE_TRIAL && null != e.endsAt && e.endsAt > new Date))
    }, [L]), l.useEffect(() => {
        (0 === e.length || 0 === n.length || I) && A().then(e => {
            let n = Object.keys(e.trial).map(t => ({
                    label: t,
                    value: e.trial[t]
                })),
                a = Object.keys(e.discount).map(t => ({
                    label: t,
                    value: e.discount[t]
                }));
            t(n), r(a), null == i && s(n[0].value), null == d && h(a[0].value)
        })
    }, [e, n, i, d, I]), l.useEffect(() => {
        I && (P(!1), p.A.forceReset(), (0, u._D)(), O().then(e => {
            g(e.trial.sort((e, t) => e.id.localeCompare(t.id))), S(e.discount.sort((e, t) => e.id.localeCompare(t.id)))
        }))
    }, [I]);
    let G = async () => {
        null != i && (await C(i, "trial"), P(!0))
    }, F = async () => {
        null != d && (await C(d, "discount"), P(!0))
    }, V = async () => {
        await T(), P(!0)
    }, W = async () => {
        let e = new Date(Date.now() + 60 * k * 1e3).toISOString();
        await E(e), B()
    };
    return (0, a.jsx)(c.IpV, {
        className: y.nd,
        children: (0, a.jsxs)("div", {
            className: _.l$,
            children: [(0, a.jsxs)("section", {
                className: _.uW,
                children: [(0, a.jsx)(c.Heading, {
                    variant: "heading-md/semibold",
                    children: "Utils"
                }), (0, a.jsxs)("div", {
                    className: _.Uo,
                    children: [(0, a.jsx)(c.Button, {
                        variant: "primary",
                        size: "sm",
                        text: "Clear all User Offers",
                        onClick: V
                    }), (0, a.jsx)(c.Button, {
                        variant: "primary",
                        size: "sm",
                        text: "Clear Mobile Trials DismissibleContent",
                        onClick: () => (0, m.xB)(o.M.PREMIUM_MOBILE_TRIAL_USER_SETTINGS_AVATAR_BADGE)
                    }), (0, a.jsx)(c.Button, {
                        variant: "primary",
                        size: "sm",
                        text: "Clear Offer Nagbar DismissibleContent",
                        onClick: () => (0, m._N)(o.M.NAGBAR_NOTICE_OFFER_EXPIRING)
                    }), (0, a.jsx)(c.Button, {
                        variant: "primary",
                        size: "sm",
                        text: "Refresh DevTools",
                        onClick: () => P(!0)
                    })]
                })]
            }), (0, a.jsx)("section", {
                className: _.uW,
                children: (0, a.jsxs)("div", {
                    className: _.bd,
                    children: [(0, a.jsx)(c.l6P, {
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
                        value: i,
                        placeholder: "Trial Type",
                        onSelectionChange: s,
                        selectionMode: "single",
                        fullWidth: !0
                    }), (0, a.jsx)(c.Button, {
                        variant: "primary",
                        text: "Create",
                        onClick: G
                    })]
                })
            }), (0, a.jsx)("section", {
                className: _.uW,
                children: (0, a.jsxs)("div", {
                    className: _.bd,
                    children: [(0, a.jsx)(c.l6P, {
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
                        value: d,
                        placeholder: "Discount Type",
                        onSelectionChange: h,
                        selectionMode: "single",
                        fullWidth: !0
                    }), (0, a.jsx)(c.Button, {
                        variant: "primary",
                        text: "Create",
                        onClick: F
                    })]
                })
            }), x.length > 0 && (0, a.jsxs)("section", {
                className: _.uW,
                children: [(0, a.jsx)(c.Heading, {
                    variant: "heading-md/semibold",
                    children: "Existing Trial Offers"
                }), x.map(t => (0, a.jsx)(N, {
                    offer: t,
                    offerOptions: e,
                    forceRefetch: () => P(!0)
                }, t.id))]
            }), j.length > 0 && (0, a.jsxs)("section", {
                className: _.uW,
                children: [(0, a.jsx)(c.Heading, {
                    variant: "heading-md/semibold",
                    children: "Existing Discount Offers"
                }), j.map(e => (0, a.jsx)(w, {
                    offer: e,
                    offerOptions: n,
                    forceRefetch: () => P(!0)
                }, e.id))]
            }), (0, a.jsx)("section", {
                className: _.uW,
                children: (0, a.jsxs)("div", {
                    className: _.bd,
                    children: [(0, a.jsx)(c.l6P, {
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
                        value: k,
                        placeholder: "Reverse Trial Length",
                        onSelectionChange: R,
                        selectionMode: "single",
                        fullWidth: !0
                    }), (0, a.jsx)(c.Button, {
                        variant: "primary",
                        text: "Create",
                        onClick: W
                    })]
                })
            }), D.length > 0 && (0, a.jsxs)("div", {
                children: [(0, a.jsx)(c.Text, {
                    style: {
                        marginTop: "15px"
                    },
                    variant: "text-md/bold",
                    children: "Active reverse trial"
                }), (0, a.jsx)("div", {
                    children: D.map(e => (0, a.jsx)(f.I, {
                        entitlement: e,
                        active: !0,
                        onDelete: () => U(e.id)
                    }, e.id))
                })]
            })]
        })
    })
}