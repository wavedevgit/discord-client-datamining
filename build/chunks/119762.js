/** Chunk was on web.js **/
/** chunk id: 119762, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    Af: () => S,
    Ay: () => T,
    Ob: () => A,
    jH: () => v
}), n(228524), n(896048), n(733351);
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(311907),
    l = n(397927),
    c = n(793574),
    u = n(200921),
    d = n(754333),
    f = n(287809),
    p = n(791606),
    _ = n(403362),
    h = n(780964),
    m = n(358776),
    g = n(740625),
    E = n(840065),
    y = n(652215),
    b = n(985018),
    O = n(928344);

function v() {
    return (0, r.jsx)(l.Text, {
        variant: "text-sm/normal",
        className: O.h_,
        children: b.intl.string(b.t.zZp618)
    })
}

function A() {
    let {
        currentSession: e
    } = (0, d.r)();
    return null == e ? (0, r.jsx)("div", {
        className: O.Lq,
        children: (0, r.jsx)(l.y$y, {})
    }) : (0, r.jsx)(l.nVY, {
        label: b.intl.string(b.t.LLS19o),
        children: (0, r.jsx)(C, {
            session: e,
            current: !0
        })
    })
}

function I(e) {
    let {
        checked: t,
        otherSessions: n
    } = e;
    return (0, r.jsx)(l.D0$, {
        label: t.size > 0 ? b.intl.string(b.t.mMEmRO) : b.intl.string(b.t.Vij32M),
        description: b.intl.string(b.t.OTXyaf),
        children: (0, r.jsx)("div", {
            "data-button-hoisted-classname-wrapper": !0,
            className: O.Cn,
            children: (0, r.jsx)(l.Button, {
                variant: "critical-secondary",
                size: "sm",
                text: t.size > 0 ? b.intl.formatToPlainString(b.t["83CPLj"], {
                    count: t.size
                }) : b.intl.string(b.t.cLmmeY),
                onClick: () => {
                    t.size > 0 ? (0, u.U0)(Array.from(t)) : (0, u.U0)(n.map(e => e.id_hash))
                }
            })
        })
    })
}

function S() {
    let e = (0, m.dk)("OtherSessionsSetting"),
        {
            currentSession: t,
            otherSessions: n
        } = (0, d.r)(),
        a = (0, o.bG)([f.default], () => f.default.getCurrentUser()),
        [s, c] = i.useState(new Set);
    return null == t && 0 === n.length || 0 === n.length && (null == a ? void 0 : a.mfaEnabled) || !(n.length > 0) && (null == a ? void 0 : a.mfaEnabled) ? null : (0, r.jsxs)(r.Fragment, {
        children: [(0, r.jsxs)(l.nVY, {
            label: b.intl.string(b.t.xx1MWc),
            children: [n.map(e => (0, r.jsx)(C, {
                session: e,
                useChecks: s.size > 0,
                checked: s.has(e.id_hash),
                setChecked: t => {
                    let n = new Set(s);
                    t ? n.add(e.id_hash) : n.delete(e.id_hash), c(n)
                }
            }, e.id_hash)), (null == a ? void 0 : a.mfaEnabled) ? null : (0, r.jsx)(N, {})]
        }), n.length > 0 && (e ? (0, r.jsx)("div", {
            className: O.hI,
            children: (0, r.jsx)(I, {
                checked: s,
                otherSessions: n
            })
        }) : (0, r.jsx)(I, {
            checked: s,
            otherSessions: n
        }))]
    })
}

function T() {
    return i.useEffect(() => ((0, u.GY)(), () => {
        (0, u.ZQ)()
    }), []), (0, r.jsxs)(g.R, {
        header: b.intl.string(b.t["+1h0k/"]),
        children: [(0, r.jsx)(v, {}), (0, r.jsxs)(l.BJc, {
            gap: 24,
            className: O.Mf,
            children: [(0, r.jsx)(A, {}), (0, r.jsx)(S, {})]
        })]
    })
}

function C(e) {
    var t, n, i, a, o;
    let {
        session: c,
        current: f,
        setChecked: p,
        checked: h,
        useChecks: m
    } = e, g = null != (t = null == (n = c.client_info) ? void 0 : n.location) ? t : null == (i = c.client_info) ? void 0 : i.ip, E = null == (a = c.client_info) ? void 0 : a.platform, {
        text: y,
        icon: v
    } = w(null == (o = c.client_info) ? void 0 : o.os), A = f ? null : (0, d.Y)(c.approx_last_used_time), I = [y, E].filter(_.Vq), S = [g, A].filter(_.Vq);
    return (0, r.jsxs)("div", {
        className: s()(O.dZ, {
            [O.gg]: f
        }),
        children: [(0, r.jsxs)("div", {
            className: O.OC,
            children: [(0, r.jsx)("div", {
                className: O.km,
                children: (0, r.jsx)(v, {
                    size: "md",
                    color: "currentColor"
                })
            }), (0, r.jsxs)("div", {
                className: O.F3,
                children: [(0, r.jsxs)(l.Text, {
                    variant: "eyebrow",
                    className: O.nT,
                    children: [(0, r.jsx)("span", {
                        children: I[0]
                    }), I.length > 1 && (0, r.jsxs)(r.Fragment, {
                        children: [(0, r.jsx)("span", {
                            children: "\xb7"
                        }), (0, r.jsx)("span", {
                            children: I[1]
                        })]
                    })]
                }), (0, r.jsxs)(l.Text, {
                    variant: "text-sm/medium",
                    className: O.nT,
                    children: [(0, r.jsx)("span", {
                        children: S[0]
                    }), S.length > 1 && (0, r.jsxs)(r.Fragment, {
                        children: [(0, r.jsx)("span", {
                            children: "\xb7"
                        }), (0, r.jsx)("span", {
                            children: S[1]
                        })]
                    })]
                })]
            }), f ? null : m ? (0, r.jsx)("div", {
                className: O.GR,
                children: (0, r.jsx)(l.JuY, {
                    onChange: e => {
                        null == p || p(e)
                    },
                    checked: h
                })
            }) : (0, r.jsx)(l.DUT, {
                className: O.ux,
                onClick: e => {
                    e.shiftKey ? null == p || p(!0) : (0, u.U0)(c.id_hash)
                },
                "aria-label": b.intl.string(b.t.E4MJNt),
                children: (0, r.jsx)(l.PGe, {
                    size: "md",
                    color: "currentColor"
                })
            })]
        }), !f && (0, r.jsx)(l.cGx, {
            className: O.O9
        })]
    }, c.id_hash)
}

function N() {
    return (0, r.jsxs)("div", {
        className: s()(O.dZ, O.EC),
        children: [(0, r.jsxs)("div", {
            className: O.OC,
            children: [(0, r.jsx)("div", {
                className: O.km,
                children: (0, r.jsx)(p.A, {
                    width: "32",
                    height: "32"
                })
            }), (0, r.jsxs)("div", {
                className: O.F3,
                children: [(0, r.jsx)(l.Text, {
                    variant: "eyebrow",
                    className: O.nT,
                    color: "text-muted",
                    children: (0, r.jsx)("span", {
                        children: b.intl.string(b.t.iUa0sn)
                    })
                }), (0, r.jsx)(l.Text, {
                    variant: "text-sm/medium",
                    className: O.nT,
                    color: "text-muted",
                    children: (0, r.jsx)("span", {
                        children: b.intl.format(b.t["044+8i"], {
                            onClick: () => (0, E.openUserSettings)(h.X.ACCOUNT_PANEL, {
                                section: y.nc_.ACCOUNT,
                                analyticsLocations: [c.A.USER_SETTINGS_SESSIONS]
                            })
                        })
                    })
                })]
            })]
        }), (0, r.jsx)("div", {
            className: O.O9
        })]
    })
}

function w(e) {
    switch (null == e ? void 0 : e.toLowerCase().trim()) {
        case null:
        case void 0:
        case "":
            return {
                text: b.intl.string(b.t.cDHCNY), icon: l.kN9
            };
        case "ios":
        case "android":
            return {
                text: e, icon: l.u6o
            };
        case "horizon os":
            return {
                text: e, icon: l.G47
            };
        default:
            return {
                text: e, icon: l.kN9
            }
    }
}