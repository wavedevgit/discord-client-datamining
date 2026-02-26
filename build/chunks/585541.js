/** chunk id: 585541, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => A
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
    m = n(672169),
    f = n(522759);

function A(e) {
    let {
        setOriginalEmail: t,
        setSlide: r,
        ready: A,
        token: E
    } = e, [x, I] = s.useState(!1), [N, v] = s.useState(null), [j, S] = s.useState(null), [C, y] = s.useState(""), T = s.useRef(null);
    return s.useEffect(() => {
        A && T.current?.focus()
    }, [A]), (0, i.jsxs)("div", {
        children: [(0, i.jsx)(c._V, {
            src: null == j ? n(79418) : n(579656),
            className: l()(f.SX, f.Ot)
        }), (0, i.jsx)(c.hE, {
            children: g.intl.string(g.t.IfBQ56)
        }), null != j && "" !== j ? (0, i.jsx)(o.Text, {
            variant: "text-sm/normal",
            color: "text-feedback-critical",
            children: j
        }) : null, (0, i.jsxs)(c.eB, {
            className: l()(f.SX, f.QX),
            children: [(0, i.jsx)(c.pd, {
                name: "password",
                type: "password",
                label: g.intl.string(g.t["8dM4FO"]),
                setRef: T,
                className: f.SX,
                value: C,
                onChange: y,
                error: N,
                autoComplete: "new-password",
                maxLength: 72,
                placeholder: g.intl.string(g.t["yY/PXY"])
            }), (0, i.jsx)("div", {
                className: f.Ot,
                children: (0, i.jsx)(o.Button, {
                    text: g.intl.string(g.t.ezv91b),
                    fullWidth: !0,
                    onClick: () => {
                        if (!x) {
                            if (0 === C.length) {
                                v(g.intl.string(g.t.R98xD5)), u._.dispatch(p.jej.WAVE_EMPHASIZE);
                                return
                            }
                            return null != j && S(null), null != N && v(null), t(""), I(!0), h.A.post({
                                url: p.Rsh.ACCOUNT_REVERT,
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
                                y(""), t(n), r(_.k.SUCCESS)
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
                    y(""), r(_.k.START)
                }
            })
        })]
    })
}