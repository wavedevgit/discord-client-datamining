/** chunk id: 888363, original params: t,e,n (module,exports,require) **/
n.d(e, {
    default: () => b
}), n(896048);
var r = n(627968),
    l = n(64700),
    o = n(397927),
    i = n(830215),
    a = n(631670),
    c = n(235986),
    s = n(894778),
    u = n(954571),
    p = n(53505),
    d = n(652215),
    m = n(315290),
    f = n(985018),
    _ = n(978147);

function g(t) {
    let {
        email: e,
        setEmail: n,
        claimRequired: u,
        onSuccess: p,
        onClose: d
    } = t, [g, y] = l.useState(), [b, S] = l.useState(""), [w, O] = l.useState(""), [j, N] = l.useState(!1);
    l.useEffect(() => s.A.flowStep(m.do.ANY, m.hc.CLAIM_ACCOUNT), []);
    let v = async t => {
        t.preventDefault(), N(!0), y(""), O("");
        try {
            await (0, a.gt)({
                email: e,
                password: b
            }), N(!1), p()
        } catch (t) {
            var n, r;
            (null == t || null == (n = t.body) ? void 0 : n.email) && y(t.body.email), (null == t || null == (r = t.body) ? void 0 : r.password) && O(t.body.password), N(!1)
        }
    };
    return (0, r.jsxs)("div", {
        children: [(0, r.jsxs)(o.rQ0, {
            className: _._5,
            direction: c.A.Direction.VERTICAL,
            separator: !1,
            children: [(0, r.jsx)("div", {
                className: _.gD
            }), (0, r.jsx)(o.Heading, {
                className: _.Hc,
                variant: "heading-xl/semibold",
                children: f.intl.string(f.t["uQShv/"])
            }), (0, r.jsx)(o.Text, {
                className: _.bQ,
                variant: "text-md/normal",
                color: "text-default",
                children: u ? f.intl.string(f.t.sW28gZ) : f.intl.string(f.t["gP/vPe"])
            }), (0, r.jsx)(o.s_y, {
                className: _.b,
                onClick: d
            })]
        }), (0, r.jsx)(o.$mQ, {
            children: (0, r.jsx)("form", {
                className: _.oB,
                onSubmit: v,
                children: (0, r.jsxs)(o.BJc, {
                    gap: 16,
                    children: [(0, r.jsx)(o.ksK, {
                        label: f.intl.string(f.t.dI4d4S),
                        value: e,
                        error: g,
                        onChange: t => n(t),
                        autoFocus: !0
                    }), (0, r.jsx)(o.ksK, {
                        label: f.intl.string(f.t["CIGa+7"]),
                        type: "password",
                        value: b,
                        error: w,
                        onChange: t => S(t)
                    }), (0, r.jsx)(o.Button, {
                        text: f.intl.string(f.t.fiNVin),
                        variant: "primary",
                        fullWidth: !0,
                        type: "submit",
                        loading: j,
                        disabled: 0 === e.length || 0 === b.length
                    }), u && (0, r.jsx)("div", {
                        className: _.pV,
                        children: (0, r.jsx)(o.QWc, {
                            text: f.intl.string(f.t["2jxGer"]),
                            onClick: () => {
                                i.A.logout("claim_account_modal"), d()
                            }
                        })
                    })]
                })
            })
        })]
    })
}

function y(t) {
    let {
        email: e,
        claimRequired: n,
        onClose: i
    } = t, a = n ? f.t.D7trIB : f.t.JNWX7G;
    return l.useEffect(() => s.A.flowStep(m.do.ANY, m.hc.CLAIM_ACCOUNT_SUCCESS), []), (0, r.jsxs)("div", {
        children: [(0, r.jsxs)(o.$mQ, {
            className: _.Zc,
            children: [!n && (0, r.jsx)(o.s_y, {
                className: _.b,
                onClick: i
            }), (0, r.jsx)("div", {
                className: _.hW
            }), (0, r.jsx)(o.Text, {
                className: _.QK,
                variant: "text-lg/semibold",
                children: f.intl.format(a, {
                    email: e
                })
            }), (0, r.jsx)(o.Text, {
                className: _.pQ,
                variant: "text-md/normal",
                children: f.intl.string(f.t.eXqM2d)
            })]
        }), n ? (0, r.jsx)(o.jlY, {
            direction: c.A.Direction.VERTICAL,
            children: (0, r.jsx)(o.Button, {
                text: f.intl.string(f.t.BddRzS),
                variant: "primary",
                fullWidth: !0,
                onClick: i
            })
        }) : (0, r.jsx)(o.jlY, {
            direction: c.A.Direction.VERTICAL,
            children: (0, r.jsx)(o.Button, {
                text: f.intl.string(f.t.ygArIV),
                variant: "primary",
                fullWidth: !0,
                onClick: function() {
                    window.open((0, p.SU)(), "_blank"), u.default.track(d.HAw.DOWNLOAD_APP, {
                        platform: (0, p.Vf)(),
                        ptb: !1,
                        released: !0,
                        has_e_mail: !0,
                        referring_location: "Claim Modal",
                        qr_code: !1
                    })
                }
            })
        })]
    })
}

function b(t) {
    let {
        onClose: e,
        transitionState: n,
        claimRequired: i = !1
    } = t, [a, c] = l.useState(""), [s, u] = l.useState(!1);
    return s ? (0, r.jsx)(o.EOs, {
        transitionState: n,
        parentComponent: "ClaimAccountModal",
        children: (0, r.jsx)(y, {
            email: a,
            claimRequired: i,
            onClose: e
        })
    }) : (0, r.jsx)(o.EOs, {
        transitionState: n,
        parentComponent: "ClaimAccountModal",
        children: (0, r.jsx)(g, {
            email: a,
            setEmail: c,
            claimRequired: i,
            onSuccess: () => u(!0),
            onClose: e
        })
    })
}