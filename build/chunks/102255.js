/** chunk id: 102255 params = (module,exports,require) **/
n.d(t, {
    AF: () => E,
    Im: () => f,
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
    g = n(791606),
    _ = n(403362),
    x = n(780964),
    A = n(840065),
    h = n(985018),
    p = n(754273);

function T() {
    return (0, i.jsx)(o.Text, {
        variant: "text-sm/normal",
        className: p.h_,
        children: h.intl.string(h.t.zZp618)
    })
}

function f() {
    let {
        currentSession: e
    } = (0, u.r)();
    return null == e ? (0, i.jsx)("div", {
        className: p.Lq,
        children: (0, i.jsx)(o.y$y, {})
    }) : (0, i.jsx)(o.nVY, {
        label: h.intl.string(h.t.LLS19o),
        children: (0, i.jsx)(b, {
            session: e,
            current: !0
        })
    })
}

function S(e) {
    let {
        checked: t,
        otherSessions: n
    } = e;
    return (0, i.jsx)(o.D0$, {
        label: t.size > 0 ? h.intl.string(h.t.mMEmRO) : h.intl.string(h.t.Vij32M),
        description: h.intl.string(h.t.OTXyaf),
        children: (0, i.jsx)("div", {
            "data-button-hoisted-classname-wrapper": !0,
            className: p.Cn,
            children: (0, i.jsx)(o.Button, {
                variant: "critical-secondary",
                size: "sm",
                text: t.size > 0 ? h.intl.formatToPlainString(h.t["83CPLj"], {
                    count: t.size
                }) : h.intl.string(h.t.cLmmeY),
                onClick: () => {
                    t.size > 0 ? (0, c.U0)(Array.from(t)) : (0, c.U0)(n.map(e => e.id_hash))
                }
            })
        })
    })
}

function E() {
    let {
        currentSession: e,
        otherSessions: t
    } = (0, u.r)(), n = (0, r.bG)([m.default], () => m.default.getCurrentUser()), [l, a] = s.useState(new Set);
    return null == e && 0 === t.length || 0 === t.length && n?.mfaEnabled ? null : t.length > 0 || !n?.mfaEnabled ? (0, i.jsxs)(i.Fragment, {
        children: [(0, i.jsxs)(o.nVY, {
            label: h.intl.string(h.t.xx1MWc),
            children: [t.map(e => (0, i.jsx)(b, {
                session: e,
                useChecks: l.size > 0,
                checked: l.has(e.id_hash),
                setChecked: t => {
                    let n = new Set(l);
                    t ? n.add(e.id_hash) : n.delete(e.id_hash), a(n)
                }
            }, e.id_hash)), n?.mfaEnabled ? null : (0, i.jsx)(C, {})]
        }), t.length > 0 && (0, i.jsx)("div", {
            className: p.wq,
            children: (0, i.jsx)(S, {
                checked: l,
                otherSessions: t
            })
        })]
    }) : null
}

function b(e) {
    let {
        session: t,
        current: n,
        setChecked: s,
        checked: l,
        useChecks: r
    } = e, d = t.client_info?.location ?? t.client_info?.ip, m = t.client_info?.platform, {
        text: g,
        icon: x
    } = function(e) {
        switch (e?.toLowerCase().trim()) {
            case null:
            case void 0:
            case "":
                return {
                    text: h.intl.string(h.t.cDHCNY), icon: o.kN9
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
    }(t.client_info?.os), A = n ? null : (0, u.Y)(t.approx_last_used_time), T = [g, m].filter(_.Vq), f = [d, A].filter(_.Vq);
    return (0, i.jsxs)("div", {
        className: a()(p.dZ, {
            [p.gg]: n
        }),
        children: [(0, i.jsxs)("div", {
            className: p.OC,
            children: [(0, i.jsx)("div", {
                className: p.km,
                children: (0, i.jsx)(x, {
                    size: "md",
                    color: "currentColor"
                })
            }), (0, i.jsxs)("div", {
                className: p.F3,
                children: [(0, i.jsxs)(o.Text, {
                    variant: "eyebrow",
                    className: p.nT,
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
                    className: p.nT,
                    children: [(0, i.jsx)("span", {
                        children: f[0]
                    }), f.length > 1 && (0, i.jsxs)(i.Fragment, {
                        children: [(0, i.jsx)("span", {
                            children: "\xb7"
                        }), (0, i.jsx)("span", {
                            children: f[1]
                        })]
                    })]
                })]
            }), n ? null : r ? (0, i.jsx)("div", {
                className: p.GR,
                children: (0, i.jsx)(o.JuY, {
                    onChange: e => {
                        s?.(e)
                    },
                    checked: l
                })
            }) : (0, i.jsx)(o.DUT, {
                className: p.ux,
                onClick: e => {
                    e.shiftKey ? s?.(!0) : (0, c.U0)(t.id_hash)
                },
                "aria-label": h.intl.string(h.t.E4MJNt),
                children: (0, i.jsx)(o.PGe, {
                    size: "md",
                    color: "currentColor"
                })
            })]
        }), !n && (0, i.jsx)(o.cGx, {
            className: p.O9
        })]
    }, t.id_hash)
}

function C() {
    return (0, i.jsxs)("div", {
        className: a()(p.dZ, p.EC),
        children: [(0, i.jsxs)("div", {
            className: p.OC,
            children: [(0, i.jsx)("div", {
                className: p.km,
                children: (0, i.jsx)(g.A, {
                    width: "32",
                    height: "32"
                })
            }), (0, i.jsxs)("div", {
                className: p.F3,
                children: [(0, i.jsx)(o.Text, {
                    variant: "eyebrow",
                    className: p.nT,
                    color: "text-muted",
                    children: (0, i.jsx)("span", {
                        children: h.intl.string(h.t.iUa0sn)
                    })
                }), (0, i.jsx)(o.Text, {
                    variant: "text-sm/medium",
                    className: p.nT,
                    color: "text-muted",
                    children: (0, i.jsx)("span", {
                        children: h.intl.format(h.t["044+8i"], {
                            onClick: () => (0, A.openUserSettings)(x.X.ACCOUNT_PANEL, {
                                analyticsLocations: [d.A.USER_SETTINGS_SESSIONS]
                            })
                        })
                    })
                })]
            })]
        }), (0, i.jsx)("div", {
            className: p.O9
        })]
    })
}