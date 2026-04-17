/** chunk id: 585541 params = (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => f
});
var i = n(627968),
    s = n(64700),
    r = n(503698),
    l = n.n(r),
    a = n(110259),
    o = n(397927),
    c = n(181658),
    d = n(854378),
    u = n(203982),
    _ = n(499785),
    h = n(524832),
    g = n(652215),
    p = n(985018),
    m = n(22079),
    A = n(818050);

function f(e) {
    let {
        setOriginalEmail: t,
        setSlide: r,
        ready: f,
        token: E
    } = e, [x, I] = s.useState(!1), [N, v] = s.useState(null), [T, j] = s.useState(null), [C, S] = s.useState(""), y = s.useRef(null);
    return s.useEffect(() => {
        f && y.current?.focus()
    }, [f]), (0, i.jsxs)("div", {
        children: [(0, i.jsx)(d._V, {
            src: null == T ? n(79418) : n(579656),
            className: l()(A.SX, A.Ot)
        }), (0, i.jsx)(d.hE, {
            children: p.intl.string(p.t.IfBQ56)
        }), null != T && "" !== T ? (0, i.jsx)(o.Text, {
            variant: "text-sm/normal",
            color: "text-feedback-critical",
            children: T
        }) : null, (0, i.jsxs)(d.eB, {
            className: l()(A.SX, A.QX),
            children: [(0, i.jsx)(d.pd, {
                name: "password",
                type: "password",
                label: p.intl.string(p.t["8dM4FO"]),
                setRef: y,
                className: A.SX,
                value: C,
                onChange: S,
                error: N,
                autoComplete: "new-password",
                maxLength: 72,
                placeholder: p.intl.string(p.t["yY/PXY"])
            }), (0, i.jsx)("div", {
                className: A.Ot,
                children: (0, i.jsx)(o.Button, {
                    text: p.intl.string(p.t.ezv91b),
                    fullWidth: !0,
                    onClick: () => {
                        if (!x) {
                            if (0 === C.length) {
                                v(p.intl.string(p.t.R98xD5)), u._.dispatch(g.jej.WAVE_EMPHASIZE);
                                return
                            }
                            return null != T && j(null), null != N && v(null), t(""), I(!0), _.A.post({
                                url: g.Rsh.ACCOUNT_REVERT,
                                body: {
                                    token: E,
                                    password: C
                                },
                                trackedActionData: {
                                    event: a.NetworkActionNames.ACCOUNT_REVERT
                                },
                                rejectWithError: !1
                            }).then(e => {
                                let {
                                    body: {
                                        email: n
                                    }
                                } = e;
                                S(""), t(n), r(h.k.SUCCESS)
                            }).catch(e => {
                                if (e instanceof Error) j(p.intl.formatToPlainString(p.t.aTVNes, {
                                    statusPageURL: g.qF7.STATUS
                                }));
                                else {
                                    let t = new c.A(e);
                                    t.hasFieldErrors() ? v(t.getAnyErrorMessage()) : j((function(e) {
                                        switch (e) {
                                            case g.t02.ACCOUNT_REVERT_INVALID_TOKEN:
                                                return p.intl.string(p.t["11zzGR"]);
                                            case g.t02.ACCOUNT_REVERT_EMAIL_ALREADY_TAKEN:
                                                return p.intl.string(p.t["6qmgaI"]);
                                            case g.t02.ACCOUNT_REVERT_ACCOUNT_NOT_FOUND:
                                                return p.intl.string(p.t.bChnKs);
                                            default:
                                                return p.intl.format(p.t.aTVNes, {
                                                    statusPageURL: g.qF7.STATUS
                                                })
                                        }
                                    })(t.code).toString())
                                }
                                u._.dispatch(g.jej.WAVE_EMPHASIZE)
                            }).finally(() => {
                                I(!1)
                            })
                        }
                    },
                    loading: x,
                    disabled: x
                })
            })]
        }), (0, i.jsx)("div", {
            className: m.UD,
            children: (0, i.jsx)(o.Button, {
                text: p.intl.string(p.t.rzxnQ8),
                variant: "secondary",
                fullWidth: !0,
                onClick: () => {
                    S(""), r(h.k.START)
                }
            })
        })]
    })
}