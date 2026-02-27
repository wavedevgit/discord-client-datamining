/** chunk id: 119762, original params: e,t,n (module,exports,require) **/
n.d(t, {
    Af: () => N,
    Ay: () => b,
    Ob: () => I,
    jH: () => S
});
var i = n(627968),
    s = n(64700),
    a = n(503698),
    l = n.n(a),
    r = n(311907),
    o = n(397927),
    c = n(793574),
    d = n(200921),
    u = n(754333),
    _ = n(287809),
    m = n(791606),
    A = n(403362),
    g = n(780964),
    h = n(358776),
    x = n(740625),
    p = n(840065),
    E = n(652215),
    C = n(985018),
    T = n(928344);

function S() {
    return (0, i.jsx)(o.Text, {
        variant: "text-sm/normal",
        className: T.h_,
        children: C.intl.string(C.t.zZp618)
    })
}

function I() {
    let {
        currentSession: e
    } = (0, u.r)();
    return null == e ? (0, i.jsx)("div", {
        className: T.Lq,
        children: (0, i.jsx)(o.y$y, {})
    }) : (0, i.jsx)(o.nVY, {
        label: C.intl.string(C.t.LLS19o),
        children: (0, i.jsx)(j, {
            session: e,
            current: !0
        })
    })
}

function f(e) {
    let {
        checked: t,
        otherSessions: n
    } = e;
    return (0, i.jsx)(o.D0$, {
        label: t.size > 0 ? C.intl.string(C.t.mMEmRO) : C.intl.string(C.t.Vij32M),
        description: C.intl.string(C.t.OTXyaf),
        children: (0, i.jsx)("div", {
            "data-button-hoisted-classname-wrapper": !0,
            className: T.Cn,
            children: (0, i.jsx)(o.Button, {
                variant: "critical-secondary",
                size: "sm",
                text: t.size > 0 ? C.intl.formatToPlainString(C.t["83CPLj"], {
                    count: t.size
                }) : C.intl.string(C.t.cLmmeY),
                onClick: () => {
                    t.size > 0 ? (0, d.U0)(Array.from(t)) : (0, d.U0)(n.map(e => e.id_hash))
                }
            })
        })
    })
}

function N() {
    let e = (0, h.dk)("OtherSessionsSetting"),
        {
            currentSession: t,
            otherSessions: n
        } = (0, u.r)(),
        a = (0, r.bG)([_.default], () => _.default.getCurrentUser()),
        [l, c] = s.useState(new Set);
    return null == t && 0 === n.length || 0 === n.length && a?.mfaEnabled ? null : n.length > 0 || !a?.mfaEnabled ? (0, i.jsxs)(i.Fragment, {
        children: [(0, i.jsxs)(o.nVY, {
            label: C.intl.string(C.t.xx1MWc),
            children: [n.map(e => (0, i.jsx)(j, {
                session: e,
                useChecks: l.size > 0,
                checked: l.has(e.id_hash),
                setChecked: t => {
                    let n = new Set(l);
                    t ? n.add(e.id_hash) : n.delete(e.id_hash), c(n)
                }
            }, e.id_hash)), a?.mfaEnabled ? null : (0, i.jsx)(v, {})]
        }), n.length > 0 && (e ? (0, i.jsx)("div", {
            className: T.hI,
            children: (0, i.jsx)(f, {
                checked: l,
                otherSessions: n
            })
        }) : (0, i.jsx)(f, {
            checked: l,
            otherSessions: n
        }))]
    }) : null
}

function b() {
    return s.useEffect(() => ((0, d.GY)(), () => {
        (0, d.ZQ)()
    }), []), (0, i.jsxs)(x.R, {
        header: C.intl.string(C.t["+1h0k/"]),
        children: [(0, i.jsx)(S, {}), (0, i.jsxs)(o.BJc, {
            gap: 24,
            className: T.Mf,
            children: [(0, i.jsx)(I, {}), (0, i.jsx)(N, {})]
        })]
    })
}

function j(e) {
    let {
        session: t,
        current: n,
        setChecked: s,
        checked: a,
        useChecks: r
    } = e, c = t.client_info?.location ?? t.client_info?.ip, _ = t.client_info?.platform, {
        text: m,
        icon: g
    } = function(e) {
        switch (e?.toLowerCase().trim()) {
            case null:
            case void 0:
            case "":
                return {
                    text: C.intl.string(C.t.cDHCNY), icon: o.kN9
                };
            case "ios":
            case "android":
                return {
                    text: e, icon: o.u6o
                };
            case "horizon os":
                return {
                    text: e, icon: o.G47
                };
            default:
                return {
                    text: e, icon: o.kN9
                }
        }
    }(t.client_info?.os), h = n ? null : (0, u.Y)(t.approx_last_used_time), x = [m, _].filter(A.Vq), p = [c, h].filter(A.Vq);
    return (0, i.jsxs)("div", {
        className: l()(T.dZ, {
            [T.gg]: n
        }),
        children: [(0, i.jsxs)("div", {
            className: T.OC,
            children: [(0, i.jsx)("div", {
                className: T.km,
                children: (0, i.jsx)(g, {
                    size: "md",
                    color: "currentColor"
                })
            }), (0, i.jsxs)("div", {
                className: T.F3,
                children: [(0, i.jsxs)(o.Text, {
                    variant: "eyebrow",
                    className: T.nT,
                    children: [(0, i.jsx)("span", {
                        children: x[0]
                    }), x.length > 1 && (0, i.jsxs)(i.Fragment, {
                        children: [(0, i.jsx)("span", {
                            children: "\xb7"
                        }), (0, i.jsx)("span", {
                            children: x[1]
                        })]
                    })]
                }), (0, i.jsxs)(o.Text, {
                    variant: "text-sm/medium",
                    className: T.nT,
                    children: [(0, i.jsx)("span", {
                        children: p[0]
                    }), p.length > 1 && (0, i.jsxs)(i.Fragment, {
                        children: [(0, i.jsx)("span", {
                            children: "\xb7"
                        }), (0, i.jsx)("span", {
                            children: p[1]
                        })]
                    })]
                })]
            }), n ? null : r ? (0, i.jsx)("div", {
                className: T.GR,
                children: (0, i.jsx)(o.JuY, {
                    onChange: e => {
                        s?.(e)
                    },
                    checked: a
                })
            }) : (0, i.jsx)(o.DUT, {
                className: T.ux,
                onClick: e => {
                    e.shiftKey ? s?.(!0) : (0, d.U0)(t.id_hash)
                },
                "aria-label": C.intl.string(C.t.E4MJNt),
                children: (0, i.jsx)(o.PGe, {
                    size: "md",
                    color: "currentColor"
                })
            })]
        }), !n && (0, i.jsx)(o.cGx, {
            className: T.O9
        })]
    }, t.id_hash)
}

function v() {
    return (0, i.jsxs)("div", {
        className: l()(T.dZ, T.EC),
        children: [(0, i.jsxs)("div", {
            className: T.OC,
            children: [(0, i.jsx)("div", {
                className: T.km,
                children: (0, i.jsx)(m.A, {
                    width: "32",
                    height: "32"
                })
            }), (0, i.jsxs)("div", {
                className: T.F3,
                children: [(0, i.jsx)(o.Text, {
                    variant: "eyebrow",
                    className: T.nT,
                    color: "text-muted",
                    children: (0, i.jsx)("span", {
                        children: C.intl.string(C.t.iUa0sn)
                    })
                }), (0, i.jsx)(o.Text, {
                    variant: "text-sm/medium",
                    className: T.nT,
                    color: "text-muted",
                    children: (0, i.jsx)("span", {
                        children: C.intl.format(C.t["044+8i"], {
                            onClick: () => (0, p.openUserSettings)(g.X.ACCOUNT_PANEL, {
                                section: E.nc_.ACCOUNT,
                                analyticsLocations: [c.A.USER_SETTINGS_SESSIONS]
                            })
                        })
                    })
                })]
            })]
        }), (0, i.jsx)("div", {
            className: T.O9
        })]
    })
}