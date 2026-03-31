/** chunk id: 888363 params = (module,exports,require) **/
n.d(e, {
    default: () => m
});
var l = n(627968),
    r = n(64700),
    a = n(397927),
    i = n(830215),
    s = n(631670),
    o = n(235986),
    _ = n(894778),
    c = n(954571),
    u = n(53505),
    d = n(652215),
    E = n(315290),
    S = n(985018),
    p = n(578789);

function T(t) {
    let {
        email: e,
        setEmail: n,
        claimRequired: c,
        onSuccess: u,
        onClose: d
    } = t, [T, h] = r.useState(), [m, A] = r.useState(""), [N, I] = r.useState(""), [f, C] = r.useState(!1);
    r.useEffect(() => _.A.flowStep(E.do.ANY, E.hc.CLAIM_ACCOUNT), []);
    let R = async t => {
        t.preventDefault(), C(!0), h(""), I("");
        try {
            await (0, s.KD)({
                email: e,
                password: m
            }), C(!1), u()
        } catch (t) {
            t?.body?.email && h(t.body.email), t?.body?.password && I(t.body.password), C(!1)
        }
    };
    return (0, l.jsxs)("div", {
        children: [(0, l.jsxs)(a.rQ0, {
            className: p._5,
            direction: o.A.Direction.VERTICAL,
            separator: !1,
            children: [(0, l.jsx)("div", {
                className: p.gD
            }), (0, l.jsx)(a.Heading, {
                className: p.Hc,
                variant: "heading-xl/semibold",
                children: S.intl.string(S.t["uQShv/"])
            }), (0, l.jsx)(a.Text, {
                className: p.bQ,
                variant: "text-md/normal",
                color: "text-default",
                children: c ? S.intl.string(S.t.sW28gZ) : S.intl.string(S.t["gP/vPe"])
            }), (0, l.jsx)(a.s_y, {
                className: p.b,
                onClick: d
            })]
        }), (0, l.jsx)(a.$mQ, {
            children: (0, l.jsx)("form", {
                className: p.oB,
                onSubmit: R,
                children: (0, l.jsxs)(a.BJc, {
                    gap: 16,
                    children: [(0, l.jsx)(a.ksK, {
                        label: S.intl.string(S.t.dI4d4S),
                        value: e,
                        error: T,
                        onChange: t => n(t),
                        autoFocus: !0
                    }), (0, l.jsx)(a.ksK, {
                        label: S.intl.string(S.t["CIGa+7"]),
                        type: "password",
                        value: m,
                        error: N,
                        onChange: t => A(t)
                    }), (0, l.jsx)(a.Button, {
                        text: S.intl.string(S.t.fiNVin),
                        variant: "primary",
                        fullWidth: !0,
                        type: "submit",
                        loading: f,
                        disabled: 0 === e.length || 0 === m.length
                    }), c && (0, l.jsx)("div", {
                        className: p.pV,
                        children: (0, l.jsx)(a.QWc, {
                            text: S.intl.string(S.t["2jxGer"]),
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

function h(t) {
    let {
        email: e,
        claimRequired: n,
        onClose: i
    } = t, s = n ? S.t.D7trIB : S.t.JNWX7G;
    return r.useEffect(() => _.A.flowStep(E.do.ANY, E.hc.CLAIM_ACCOUNT_SUCCESS), []), (0, l.jsxs)("div", {
        children: [(0, l.jsxs)(a.$mQ, {
            className: p.Zc,
            children: [!n && (0, l.jsx)(a.s_y, {
                className: p.b,
                onClick: i
            }), (0, l.jsx)("div", {
                className: p.hW
            }), (0, l.jsx)(a.Text, {
                className: p.QK,
                variant: "text-lg/semibold",
                children: S.intl.format(s, {
                    email: e
                })
            }), (0, l.jsx)(a.Text, {
                className: p.pQ,
                variant: "text-md/normal",
                children: S.intl.string(S.t.eXqM2d)
            })]
        }), n ? (0, l.jsx)(a.jlY, {
            direction: o.A.Direction.VERTICAL,
            children: (0, l.jsx)(a.Button, {
                text: S.intl.string(S.t.BddRzS),
                variant: "primary",
                fullWidth: !0,
                onClick: i
            })
        }) : (0, l.jsx)(a.jlY, {
            direction: o.A.Direction.VERTICAL,
            children: (0, l.jsx)(a.Button, {
                text: S.intl.string(S.t.ygArIV),
                variant: "primary",
                fullWidth: !0,
                onClick: function() {
                    window.open((0, u.SU)(), "_blank"), c.default.track(d.HAw.DOWNLOAD_APP, {
                        platform: (0, u.Vf)(),
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

function m(t) {
    let {
        onClose: e,
        transitionState: n,
        claimRequired: i = !1
    } = t, [s, o] = r.useState(""), [_, c] = r.useState(!1);
    return _ ? (0, l.jsx)(a.EOs, {
        transitionState: n,
        parentComponent: "ClaimAccountModal",
        children: (0, l.jsx)(h, {
            email: s,
            claimRequired: i,
            onClose: e
        })
    }) : (0, l.jsx)(a.EOs, {
        transitionState: n,
        parentComponent: "ClaimAccountModal",
        children: (0, l.jsx)(T, {
            email: s,
            setEmail: o,
            claimRequired: i,
            onSuccess: () => c(!0),
            onClose: e
        })
    })
}