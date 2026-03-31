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
    d = n(181658),
    c = n(854378),
    u = n(203982),
    h = n(499785),
    _ = n(524832),
    p = n(652215),
    g = n(985018),
    m = n(610489),
    A = n(153335);

function f(e) {
    let {
        setOriginalEmail: t,
        setSlide: r,
        ready: f,
        token: E
    } = e, [x, I] = s.useState(!1), [N, v] = s.useState(null), [j, S] = s.useState(null), [T, C] = s.useState(""), y = s.useRef(null);
    return s.useEffect(() => {
        f && y.current?.focus()
    }, [f]), (0, i.jsxs)("div", {
        children: [(0, i.jsx)(c._V, {
            src: null == j ? n(79418) : n(579656),
            className: l()(A.SX, A.Ot)
        }), (0, i.jsx)(c.hE, {
            children: g.intl.string(g.t.IfBQ56)
        }), null != j && "" !== j ? (0, i.jsx)(o.Text, {
            variant: "text-sm/normal",
            color: "text-feedback-critical",
            children: j
        }) : null, (0, i.jsxs)(c.eB, {
            className: l()(A.SX, A.QX),
            children: [(0, i.jsx)(c.pd, {
                name: "password",
                type: "password",
                label: g.intl.string(g.t["8dM4FO"]),
                setRef: y,
                className: A.SX,
                value: T,
                onChange: C,
                error: N,
                autoComplete: "new-password",
                maxLength: 72,
                placeholder: g.intl.string(g.t["yY/PXY"])
            }), (0, i.jsx)("div", {
                className: A.Ot,
                children: (0, i.jsx)(o.Button, {
                    text: g.intl.string(g.t.ezv91b),
                    fullWidth: !0,
                    onClick: () => {
                        if (!x) {
                            if (0 === T.length) {
                                v(g.intl.string(g.t.R98xD5)), u._.dispatch(p.jej.WAVE_EMPHASIZE);
                                return
                            }
                            return null != j && S(null), null != N && v(null), t(""), I(!0), h.A.post({
                                url: p.Rsh.ACCOUNT_REVERT,
                                body: {
                                    token: E,
                                    password: T
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
                                C(""), t(n), r(_.k.SUCCESS)
                            }).catch(e => {
                                if (e instanceof Error) S(g.intl.formatToPlainString(g.t.aTVNes, {
                                    statusPageURL: p.qF7.STATUS
                                }));
                                else {
                                    let t = new d.A(e);
                                    t.hasFieldErrors() ? v(t.getAnyErrorMessage()) : S((function(e) {
                                        switch (e) {
                                            case p.t02.ACCOUNT_REVERT_INVALID_TOKEN:
                                                return g.intl.string(g.t["11zzGR"]);
                                            case p.t02.ACCOUNT_REVERT_EMAIL_ALREADY_TAKEN:
                                                return g.intl.string(g.t["6qmgaI"]);
                                            case p.t02.ACCOUNT_REVERT_ACCOUNT_NOT_FOUND:
                                                return g.intl.string(g.t.bChnKs);
                                            default:
                                                return g.intl.format(g.t.aTVNes, {
                                                    statusPageURL: p.qF7.STATUS
                                                })
                                        }
                                    })(t.code).toString())
                                }
                                u._.dispatch(p.jej.WAVE_EMPHASIZE)
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
                text: g.intl.string(g.t.rzxnQ8),
                variant: "secondary",
                fullWidth: !0,
                onClick: () => {
                    C(""), r(_.k.START)
                }
            })
        })]
    })
}