/** chunk id: 119762, original params: e,t,n (module,exports,require) **/
n.d(t, {
    Af: () => E,
    Ay: () => C,
    Ob: () => _,
    jH: () => x
}), n(228524), n(896048), n(733351);
var r = n(627968),
    l = n(64700),
    i = n(503698),
    s = n.n(i),
    a = n(311907),
    o = n(397927),
    c = n(793574),
    u = n(200921),
    d = n(754333),
    p = n(287809),
    h = n(791606),
    g = n(403362),
    f = n(780964),
    m = n(358776),
    b = n(740625),
    A = n(840065),
    y = n(652215),
    O = n(985018),
    j = n(928344);

function x() {
    return (0, r.jsx)(o.Text, {
        variant: "text-sm/normal",
        className: j.h_,
        children: O.intl.string(O.t.zZp618)
    })
}

function _() {
    let {
        currentSession: e
    } = (0, d.r)();
    return null == e ? (0, r.jsx)("div", {
        className: j.Lq,
        children: (0, r.jsx)(o.y$y, {})
    }) : (0, r.jsx)(o.nVY, {
        label: O.intl.string(O.t.LLS19o),
        children: (0, r.jsx)(S, {
            session: e,
            current: !0
        })
    })
}

function v(e) {
    let {
        checked: t,
        otherSessions: n
    } = e;
    return (0, r.jsx)(o.D0$, {
        label: t.size > 0 ? O.intl.string(O.t.mMEmRO) : O.intl.string(O.t.Vij32M),
        description: O.intl.string(O.t.OTXyaf),
        children: (0, r.jsx)("div", {
            "data-button-hoisted-classname-wrapper": !0,
            className: j.Cn,
            children: (0, r.jsx)(o.Button, {
                variant: "critical-secondary",
                size: "sm",
                text: t.size > 0 ? O.intl.formatToPlainString(O.t["83CPLj"], {
                    count: t.size
                }) : O.intl.string(O.t.cLmmeY),
                onClick: () => {
                    t.size > 0 ? (0, u.U0)(Array.from(t)) : (0, u.U0)(n.map(e => e.id_hash))
                }
            })
        })
    })
}

function E() {
    let e = (0, m.dk)("OtherSessionsSetting"),
        {
            currentSession: t,
            otherSessions: n
        } = (0, d.r)(),
        i = (0, a.bG)([p.default], () => p.default.getCurrentUser()),
        [s, c] = l.useState(new Set);
    return null == t && 0 === n.length || 0 === n.length && (null == i ? void 0 : i.mfaEnabled) || !(n.length > 0) && (null == i ? void 0 : i.mfaEnabled) ? null : (0, r.jsxs)(r.Fragment, {
        children: [(0, r.jsxs)(o.nVY, {
            label: O.intl.string(O.t.xx1MWc),
            children: [n.map(e => (0, r.jsx)(S, {
                session: e,
                useChecks: s.size > 0,
                checked: s.has(e.id_hash),
                setChecked: t => {
                    let n = new Set(s);
                    t ? n.add(e.id_hash) : n.delete(e.id_hash), c(n)
                }
            }, e.id_hash)), (null == i ? void 0 : i.mfaEnabled) ? null : (0, r.jsx)(I, {})]
        }), n.length > 0 && (e ? (0, r.jsx)("div", {
            className: j.hI,
            children: (0, r.jsx)(v, {
                checked: s,
                otherSessions: n
            })
        }) : (0, r.jsx)(v, {
            checked: s,
            otherSessions: n
        }))]
    })
}

function C() {
    return l.useEffect(() => ((0, u.GY)(), () => {
        (0, u.ZQ)()
    }), []), (0, r.jsxs)(b.R, {
        header: O.intl.string(O.t["+1h0k/"]),
        children: [(0, r.jsx)(x, {}), (0, r.jsxs)(o.BJc, {
            gap: 24,
            className: j.Mf,
            children: [(0, r.jsx)(_, {}), (0, r.jsx)(E, {})]
        })]
    })
}

function S(e) {
    var t, n, l, i, a;
    let {
        session: c,
        current: p,
        setChecked: h,
        checked: f,
        useChecks: m
    } = e, b = null != (t = null == (n = c.client_info) ? void 0 : n.location) ? t : null == (l = c.client_info) ? void 0 : l.ip, A = null == (i = c.client_info) ? void 0 : i.platform, {
        text: y,
        icon: x
    } = function(e) {
        switch (null == e ? void 0 : e.toLowerCase().trim()) {
            case null:
            case void 0:
            case "":
                return {
                    text: O.intl.string(O.t.cDHCNY), icon: o.kN9
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
    }(null == (a = c.client_info) ? void 0 : a.os), _ = p ? null : (0, d.Y)(c.approx_last_used_time), v = [y, A].filter(g.Vq), E = [b, _].filter(g.Vq);
    return (0, r.jsxs)("div", {
        className: s()(j.dZ, {
            [j.gg]: p
        }),
        children: [(0, r.jsxs)("div", {
            className: j.OC,
            children: [(0, r.jsx)("div", {
                className: j.km,
                children: (0, r.jsx)(x, {
                    size: "md",
                    color: "currentColor"
                })
            }), (0, r.jsxs)("div", {
                className: j.F3,
                children: [(0, r.jsxs)(o.Text, {
                    variant: "eyebrow",
                    className: j.nT,
                    children: [(0, r.jsx)("span", {
                        children: v[0]
                    }), v.length > 1 && (0, r.jsxs)(r.Fragment, {
                        children: [(0, r.jsx)("span", {
                            children: "\xb7"
                        }), (0, r.jsx)("span", {
                            children: v[1]
                        })]
                    })]
                }), (0, r.jsxs)(o.Text, {
                    variant: "text-sm/medium",
                    className: j.nT,
                    children: [(0, r.jsx)("span", {
                        children: E[0]
                    }), E.length > 1 && (0, r.jsxs)(r.Fragment, {
                        children: [(0, r.jsx)("span", {
                            children: "\xb7"
                        }), (0, r.jsx)("span", {
                            children: E[1]
                        })]
                    })]
                })]
            }), p ? null : m ? (0, r.jsx)("div", {
                className: j.GR,
                children: (0, r.jsx)(o.JuY, {
                    onChange: e => {
                        null == h || h(e)
                    },
                    checked: f
                })
            }) : (0, r.jsx)(o.DUT, {
                className: j.ux,
                onClick: e => {
                    e.shiftKey ? null == h || h(!0) : (0, u.U0)(c.id_hash)
                },
                "aria-label": O.intl.string(O.t.E4MJNt),
                children: (0, r.jsx)(o.PGe, {
                    size: "md",
                    color: "currentColor"
                })
            })]
        }), !p && (0, r.jsx)(o.cGx, {
            className: j.O9
        })]
    }, c.id_hash)
}

function I() {
    return (0, r.jsxs)("div", {
        className: s()(j.dZ, j.EC),
        children: [(0, r.jsxs)("div", {
            className: j.OC,
            children: [(0, r.jsx)("div", {
                className: j.km,
                children: (0, r.jsx)(h.A, {
                    width: "32",
                    height: "32"
                })
            }), (0, r.jsxs)("div", {
                className: j.F3,
                children: [(0, r.jsx)(o.Text, {
                    variant: "eyebrow",
                    className: j.nT,
                    color: "text-muted",
                    children: (0, r.jsx)("span", {
                        children: O.intl.string(O.t.iUa0sn)
                    })
                }), (0, r.jsx)(o.Text, {
                    variant: "text-sm/medium",
                    className: j.nT,
                    color: "text-muted",
                    children: (0, r.jsx)("span", {
                        children: O.intl.format(O.t["044+8i"], {
                            onClick: () => (0, A.openUserSettings)(f.X.ACCOUNT_PANEL, {
                                section: y.nc_.ACCOUNT,
                                analyticsLocations: [c.A.USER_SETTINGS_SESSIONS]
                            })
                        })
                    })
                })]
            })]
        }), (0, r.jsx)("div", {
            className: j.O9
        })]
    })
}