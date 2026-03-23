/** chunk id: 102255 params = (module,exports,require) **/
n.d(t, {
    AF: () => S,
    Im: () => E,
    jH: () => T
});
var i = n(627968),
    s = n(64700),
    l = n(503698),
    a = n.n(l),
    r = n(311907),
    o = n(397927),
    d = n(793574),
    c = n(200921),
    u = n(754333),
    m = n(287809),
    _ = n(791606),
    g = n(403362),
    A = n(780964),
    x = n(840065),
    p = n(985018),
    h = n(123547);

function T() {
    return (0, i.jsx)(o.Text, {
        variant: "text-sm/normal",
        className: h.h_,
        children: p.intl.string(p.t.zZp618)
    })
}

function E() {
    let {
        currentSession: e
    } = (0, u.r)();
    return null == e ? (0, i.jsx)("div", {
        className: h.Lq,
        children: (0, i.jsx)(o.y$y, {})
    }) : (0, i.jsx)(o.nVY, {
        label: p.intl.string(p.t.LLS19o),
        children: (0, i.jsx)(C, {
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
        label: t.size > 0 ? p.intl.string(p.t.mMEmRO) : p.intl.string(p.t.Vij32M),
        description: p.intl.string(p.t.OTXyaf),
        children: (0, i.jsx)("div", {
            "data-button-hoisted-classname-wrapper": !0,
            className: h.Cn,
            children: (0, i.jsx)(o.Button, {
                variant: "critical-secondary",
                size: "sm",
                text: t.size > 0 ? p.intl.formatToPlainString(p.t["83CPLj"], {
                    count: t.size
                }) : p.intl.string(p.t.cLmmeY),
                onClick: () => {
                    t.size > 0 ? (0, c.U0)(Array.from(t)) : (0, c.U0)(n.map(e => e.id_hash))
                }
            })
        })
    })
}

function S() {
    let {
        currentSession: e,
        otherSessions: t
    } = (0, u.r)(), n = (0, r.bG)([m.default], () => m.default.getCurrentUser()), [l, a] = s.useState(new Set);
    return null == e && 0 === t.length || 0 === t.length && n?.mfaEnabled ? null : t.length > 0 || !n?.mfaEnabled ? (0, i.jsxs)(i.Fragment, {
        children: [(0, i.jsxs)(o.nVY, {
            label: p.intl.string(p.t.xx1MWc),
            children: [t.map(e => (0, i.jsx)(C, {
                session: e,
                useChecks: l.size > 0,
                checked: l.has(e.id_hash),
                setChecked: t => {
                    let n = new Set(l);
                    t ? n.add(e.id_hash) : n.delete(e.id_hash), a(n)
                }
            }, e.id_hash)), n?.mfaEnabled ? null : (0, i.jsx)(b, {})]
        }), t.length > 0 && (0, i.jsx)("div", {
            className: h.wq,
            children: (0, i.jsx)(f, {
                checked: l,
                otherSessions: t
            })
        })]
    }) : null
}

function C(e) {
    let {
        session: t,
        current: n,
        setChecked: s,
        checked: l,
        useChecks: r
    } = e, d = t.client_info?.location ?? t.client_info?.ip, m = t.client_info?.platform, {
        text: _,
        icon: A
    } = function(e) {
        switch (e?.toLowerCase().trim()) {
            case null:
            case void 0:
            case "":
                return {
                    text: p.intl.string(p.t.cDHCNY), icon: o.kN9
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
    }(t.client_info?.os), x = n ? null : (0, u.Y)(t.approx_last_used_time), T = [_, m].filter(g.Vq), E = [d, x].filter(g.Vq);
    return (0, i.jsxs)("div", {
        className: a()(h.dZ, {
            [h.gg]: n
        }),
        children: [(0, i.jsxs)("div", {
            className: h.OC,
            children: [(0, i.jsx)("div", {
                className: h.km,
                children: (0, i.jsx)(A, {
                    size: "md",
                    color: "currentColor"
                })
            }), (0, i.jsxs)("div", {
                className: h.F3,
                children: [(0, i.jsxs)(o.Text, {
                    variant: "eyebrow",
                    className: h.nT,
                    children: [(0, i.jsx)("span", {
                        children: T[0]
                    }), T.length > 1 && (0, i.jsxs)(i.Fragment, {
                        children: [(0, i.jsx)("span", {
                            children: "\xb7"
                        }), (0, i.jsx)("span", {
                            children: T[1]
                        })]
                    })]
                }), (0, i.jsxs)(o.Text, {
                    variant: "text-sm/medium",
                    className: h.nT,
                    children: [(0, i.jsx)("span", {
                        children: E[0]
                    }), E.length > 1 && (0, i.jsxs)(i.Fragment, {
                        children: [(0, i.jsx)("span", {
                            children: "\xb7"
                        }), (0, i.jsx)("span", {
                            children: E[1]
                        })]
                    })]
                })]
            }), n ? null : r ? (0, i.jsx)("div", {
                className: h.GR,
                children: (0, i.jsx)(o.JuY, {
                    onChange: e => {
                        s?.(e)
                    },
                    checked: l
                })
            }) : (0, i.jsx)(o.DUT, {
                className: h.ux,
                onClick: e => {
                    e.shiftKey ? s?.(!0) : (0, c.U0)(t.id_hash)
                },
                "aria-label": p.intl.string(p.t.E4MJNt),
                children: (0, i.jsx)(o.PGe, {
                    size: "md",
                    color: "currentColor"
                })
            })]
        }), !n && (0, i.jsx)(o.cGx, {
            className: h.O9
        })]
    }, t.id_hash)
}

function b() {
    return (0, i.jsxs)("div", {
        className: a()(h.dZ, h.EC),
        children: [(0, i.jsxs)("div", {
            className: h.OC,
            children: [(0, i.jsx)("div", {
                className: h.km,
                children: (0, i.jsx)(_.A, {
                    width: "32",
                    height: "32"
                })
            }), (0, i.jsxs)("div", {
                className: h.F3,
                children: [(0, i.jsx)(o.Text, {
                    variant: "eyebrow",
                    className: h.nT,
                    color: "text-muted",
                    children: (0, i.jsx)("span", {
                        children: p.intl.string(p.t.iUa0sn)
                    })
                }), (0, i.jsx)(o.Text, {
                    variant: "text-sm/medium",
                    className: h.nT,
                    color: "text-muted",
                    children: (0, i.jsx)("span", {
                        children: p.intl.format(p.t["044+8i"], {
                            onClick: () => (0, x.openUserSettings)(A.X.ACCOUNT_PANEL, {
                                analyticsLocations: [d.A.USER_SETTINGS_SESSIONS]
                            })
                        })
                    })
                })]
            })]
        }), (0, i.jsx)("div", {
            className: h.O9
        })]
    })
}