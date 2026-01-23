/** Chunk was on 14691 **/
/** chunk id: 842319, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => P
}), n(638769);
var r = n(627968),
    l = n(64700),
    i = n(503698),
    s = n.n(i),
    a = n(311907),
    d = n(843282),
    o = n(435371),
    c = n(397927),
    u = n(801264),
    m = n(975571),
    x = n(307600),
    g = n(665171),
    f = n(397400),
    j = n(588591),
    p = n(695667),
    v = n(27023),
    b = n(548392),
    h = n(298009),
    _ = n(638529),
    N = n(928873),
    S = n(12663),
    E = n(285286),
    O = n(800007),
    y = n(652215),
    C = n(294726),
    A = n(985018),
    T = n(513246);

function w(e) {
    let {
        plan: t,
        selected: n,
        className: l
    } = e;
    return null == t ? null : (0, r.jsxs)(r.Fragment, {
        children: [(0, r.jsxs)("div", {
            className: s()(T.NV, l),
            children: [(0, r.jsx)("span", {
                children: t.name
            }), (0, r.jsxs)("div", {
                className: T._A,
                children: [(0, r.jsx)(c._Jp, {
                    size: "xs",
                    color: c.LU0.unsafe_rawColors.GUILD_BOOSTING_PINK
                }), (0, r.jsx)(c.Text, {
                    variant: "text-xs/medium",
                    children: A.intl.format(C.default.kOMlHs, {
                        boostCount: t.cost
                    })
                })]
            })]
        }), !n && (0, r.jsx)("div", {
            className: T.S6
        })]
    })
}

function I(e) {
    let {
        region: t,
        selected: n,
        disabled: l,
        className: i
    } = e, {
        pingText: a,
        pingCircleStyle: d
    } = (0, _.b)(t.pingUrl);
    return null == t ? null : (0, r.jsxs)(r.Fragment, {
        children: [(0, r.jsxs)("div", {
            className: s()(T.NV, {
                [T.r9]: l
            }, i),
            children: [(0, r.jsx)("span", {
                children: t.name
            }), (0, r.jsx)("div", {
                className: T._A,
                children: l ? (0, r.jsx)("span", {
                    children: A.intl.string(C.default.aCyHe2)
                }) : "" !== t.pingUrl ? (0, r.jsxs)(r.Fragment, {
                    children: [(0, r.jsx)("div", {
                        className: s()(T.Jg, d)
                    }), (0, r.jsx)(c.Text, {
                        variant: "text-xs/medium",
                        children: a
                    })]
                }) : null
            })]
        }), !n && (0, r.jsx)("div", {
            className: T.S6
        })]
    })
}

function P() {
    let {
        guildId: e,
        currentGame: t,
        regionId: n,
        gameServerInstance: i,
        setRegionId: s,
        name: _,
        setName: P,
        planId: G,
        setPlanId: R,
        planCost: k,
        stepLoading: M,
        error: U,
        gameProvider: V
    } = (0, v.bv)();
    (0, f.SX)(e, null == i ? void 0 : i.id, null == i ? "create" : "edit"), l.useEffect(() => {
        (0, g.Jr)(e)
    }, [e]);
    let L = (0, a.bG)([j.A], () => j.A.getRegions()),
        K = (0, a.bG)([j.A], () => j.A.getRegionState()),
        D = l.useMemo(() => {
            var e;
            return null != (e = L.sort((e, t) => (0, S.A)(e, t, K)).map(e => ({
                value: e,
                label: e.name,
                disabled: !0 !== e.enabled
            }))) ? e : []
        }, [K, L]),
        H = l.useMemo(() => L.some(e => "" !== e.pingUrl), [L]),
        F = l.useMemo(() => {
            var e;
            return null != (e = null == t ? void 0 : t.plans.map(e => ({
                value: e,
                label: e.name
            }))) ? e : []
        }, [t]),
        W = (0, h.A)(),
        {
            isValid: z,
            errors: B
        } = (0, h.u)(_),
        Q = null != i,
        Y = (0, N.A)(i),
        Z = (0, E.A)(V),
        q = null != V && null != O.eh[V] ? O.eh[V] : "";
    return null == t ? (0, r.jsx)("div", {
        className: T.dc,
        children: (0, r.jsx)(c.y$y, {
            type: c.tVU.SPINNING_CIRCLE
        })
    }) : (0, r.jsxs)("div", {
        className: T.kL,
        children: [(0, r.jsxs)("div", {
            className: T.hQ,
            children: [(0, r.jsxs)("div", {
                className: T.V1,
                children: [(0, r.jsxs)("div", {
                    className: T.hd,
                    children: [(0, r.jsxs)("div", {
                        className: T.bV,
                        children: [(0, r.jsx)(c.Heading, {
                            className: T.TK,
                            variant: "heading-sm/semibold",
                            color: "text-subtle",
                            children: A.intl.string(C.default.rOMEZd)
                        }), (0, r.jsx)(o.m_, {
                            position: "top",
                            text: A.intl.string(C.default.THJY1n),
                            children: (0, r.jsx)(c.cBN, {
                                className: T.GI,
                                size: "xs"
                            })
                        })]
                    }), (0, r.jsx)(c.ksK, {
                        value: _,
                        onChange: P,
                        placeholder: A.intl.string(C.default.ElVYr3),
                        maxLength: O.XF,
                        disabled: M || !Y,
                        error: B.name
                    })]
                }), (0, r.jsxs)("div", {
                    className: T.hd,
                    children: [(0, r.jsxs)("div", {
                        className: T.bV,
                        children: [(0, r.jsx)(c.Heading, {
                            className: T.TK,
                            variant: "heading-sm/semibold",
                            color: "text-subtle",
                            children: A.intl.string(C.default.nB5OZ4)
                        }), (0, r.jsx)(o.m_, {
                            position: "top",
                            text: A.intl.string(null != i ? C.default["7mX0gE"] : C.default["61N+P6"]),
                            children: (0, r.jsx)(c.cBN, {
                                className: T.GI,
                                size: "xs"
                            })
                        }), !Q && H && (0, r.jsx)("div", {
                            className: T.Ow,
                            children: (0, r.jsx)(o.m_, {
                                asContainer: !0,
                                position: "top",
                                text: A.intl.string(C.default.kGkE7a),
                                children: (0, r.jsx)(c.DUT, {
                                    className: T.GI,
                                    onClick: () => (0, g.KH)(),
                                    children: (0, r.jsx)(c.fNY, {
                                        size: "xs"
                                    })
                                })
                            })
                        })]
                    }), Q ? (0, r.jsx)(c.ksK, {
                        value: null == i ? void 0 : i.regionName,
                        disabled: !0,
                        placeholder: A.intl.string(C.default["k+RTIm"])
                    }) : (0, r.jsx)(d.Pw, {
                        serialize: e => e.id,
                        isSelected: e => e.id === n,
                        isDisabled: M || Q || !Y,
                        options: D,
                        optionClassName: T.uK,
                        select: e => s(e.id),
                        placeholder: A.intl.string(C.default["k+RTIm"]),
                        renderOptionLabel: e => {
                            var t;
                            return (0, r.jsx)(I, {
                                region: e.value,
                                selected: e.value.id === n,
                                disabled: null != (t = e.disabled) && t
                            })
                        },
                        renderOptionValue: e => {
                            var t;
                            return null == e[0] ? null : (0, r.jsx)(I, {
                                region: e[0].value,
                                selected: e[0].value.id === n,
                                disabled: null != (t = e[0].disabled) && t,
                                className: T.Uq
                            })
                        },
                        "data-migration-pending": !0
                    })]
                }), (0, r.jsxs)("div", {
                    className: T.hd,
                    children: [(0, r.jsxs)("div", {
                        className: T.bV,
                        children: [(0, r.jsx)(c.Heading, {
                            className: T.TK,
                            variant: "heading-sm/semibold",
                            color: "text-subtle",
                            children: A.intl.string(C.default["K+zMYp"])
                        }), (0, r.jsx)(o.m_, {
                            position: "top",
                            text: A.intl.string(C.default["/wD5IM"]),
                            children: (0, r.jsx)(c.cBN, {
                                className: T.GI,
                                size: "xs"
                            })
                        })]
                    }), (0, r.jsx)(d.Pw, {
                        serialize: e => e.id,
                        isSelected: e => e.id === G,
                        isDisabled: M || !Y,
                        options: F,
                        optionClassName: T.uK,
                        select: e => R(e.id),
                        placeholder: A.intl.string(C.default.JdMW0i),
                        renderOptionValue: e => {
                            var t, n, l;
                            return (0, r.jsx)(w, {
                                plan: null == (t = e[0]) ? void 0 : t.value,
                                selected: (null == (l = e[0]) || null == (n = l.value) ? void 0 : n.id) === G,
                                className: T.Uq
                            })
                        },
                        renderOptionLabel: e => (0, r.jsx)(w, {
                            plan: e.value,
                            selected: e.value.id === G
                        }),
                        "data-migration-pending": !0
                    })]
                })]
            }), (0, r.jsx)("div", {
                className: T.sA,
                children: (0, r.jsx)(p.A, {})
            })]
        }), null != i && 0 !== k && (0, r.jsx)(u.A, {
            className: T.et,
            children: (0, r.jsx)(c.Text, {
                variant: "text-xs/medium",
                children: k < 0 ? A.intl.format(C.default.SorKas, {
                    boostCount: Math.abs(k)
                }) : A.intl.format(C.default.n2wpym, {
                    boostCount: k
                })
            })
        }), !Y && (0, r.jsx)(u.A, {
            className: T.et,
            look: u.k.WARNING,
            children: (0, r.jsx)(c.Text, {
                variant: "text-xs/medium",
                children: A.intl.string(C.default["/JNPWb"])
            })
        }), (null == t ? void 0 : t.early_access) === !0 && !Q && (0, r.jsx)(u.A, {
            className: T.et,
            look: u.k.INFO,
            children: (0, r.jsx)(c.Text, {
                variant: "text-xs/medium",
                children: A.intl.format(C.default.TnoBGX, {
                    gameName: t.name
                })
            })
        }), (0, r.jsx)(c.Text, {
            variant: "text-xs/medium",
            color: "text-muted",
            children: null != V && A.intl.format(Q ? C.default.num0a6 : C.default.p5KZDr, {
                provider: Z,
                termsOfServiceUrl: () => (0, x.h)({
                    href: q
                }),
                helpCenterUrl: m.A.getArticleURL(y.MVz.GAME_SERVER_HOSTING)
            })
        }), null != U && (0, r.jsx)(c.Text, {
            variant: "text-xs/medium",
            color: "text-feedback-critical",
            children: U
        }), (0, r.jsxs)(b.N4, {
            step: O.HS.SERVER_SETTINGS,
            className: T.xQ,
            children: [(0, r.jsx)(b.AI, {}), (0, r.jsx)(b.cp, {
                disabled: !W || !z
            })]
        })]
    })
}