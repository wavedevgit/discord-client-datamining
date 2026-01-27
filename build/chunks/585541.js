/** Chunk was on 86142 **/
/** chunk id: 585541, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => A
}), n(896048), n(65821), n(492834);
var r = n(627968),
    i = n(64700),
    s = n(503698),
    l = n.n(s),
    a = n(110259),
    o = n(397927),
    c = n(181658),
    d = n(854378),
    u = n(203982),
    h = n(499785),
    p = n(524832),
    g = n(652215),
    _ = n(985018),
    f = n(497039),
    m = n(473169);

function A(e) {
    let {
        setOriginalEmail: t,
        setSlide: s,
        ready: A,
        token: x
    } = e, [E, v] = i.useState(!1), [b, y] = i.useState(null), [j, I] = i.useState(null), [O, S] = i.useState(""), N = i.useRef(null);
    return i.useEffect(() => {
        if (A) {
            var e;
            null == (e = N.current) || e.focus()
        }
    }, [A]), (0, r.jsxs)("div", {
        children: [(0, r.jsx)(d._V, {
            src: null == j ? n(79418) : n(579656),
            className: l()(m.SX, m.Ot)
        }), (0, r.jsx)(d.hE, {
            children: _.intl.string(_.t.IfBQ56)
        }), null != j && "" !== j ? (0, r.jsx)(o.Text, {
            variant: "text-sm/normal",
            color: "text-feedback-critical",
            children: j
        }) : null, (0, r.jsxs)(d.eB, {
            className: l()(m.SX, m.QX),
            children: [(0, r.jsx)(d.pd, {
                name: "password",
                type: "password",
                label: _.intl.string(_.t["8dM4FO"]),
                setRef: N,
                className: m.SX,
                value: O,
                onChange: S,
                error: b,
                autoComplete: "new-password",
                maxLength: 72,
                placeholder: _.intl.string(_.t["yY/PXY"])
            }), (0, r.jsx)("div", {
                className: m.Ot,
                children: (0, r.jsx)(o.Button, {
                    text: _.intl.string(_.t.ezv91b),
                    fullWidth: !0,
                    onClick: () => {
                        if (!E) {
                            if (0 === O.length) {
                                y(_.intl.string(_.t.R98xD5)), u._.dispatch(g.jej.WAVE_EMPHASIZE);
                                return
                            }
                            return null != j && I(null), null != b && y(null), t(""), v(!0), h.A.post({
                                url: g.Rsh.ACCOUNT_REVERT,
                                body: {
                                    token: x,
                                    password: O
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
                                S(""), t(n), s(p.k.SUCCESS)
                            }).catch(e => {
                                if (e instanceof Error) I(_.intl.formatToPlainString(_.t.aTVNes, {
                                    statusPageURL: g.qF7.STATUS
                                }));
                                else {
                                    let t = new c.A(e);
                                    t.hasFieldErrors() ? y(t.getAnyErrorMessage()) : I((function(e) {
                                        switch (e) {
                                            case g.t02.ACCOUNT_REVERT_INVALID_TOKEN:
                                                return _.intl.string(_.t["11zzGR"]);
                                            case g.t02.ACCOUNT_REVERT_EMAIL_ALREADY_TAKEN:
                                                return _.intl.string(_.t["6qmgaI"]);
                                            case g.t02.ACCOUNT_REVERT_ACCOUNT_NOT_FOUND:
                                                return _.intl.string(_.t.bChnKs);
                                            default:
                                                return _.intl.format(_.t.aTVNes, {
                                                    statusPageURL: g.qF7.STATUS
                                                })
                                        }
                                    })(t.code).toString())
                                }
                                u._.dispatch(g.jej.WAVE_EMPHASIZE)
                            }).finally(() => {
                                v(!1)
                            })
                        }
                    },
                    loading: E,
                    disabled: E
                })
            })]
        }), (0, r.jsx)("div", {
            className: f.UD,
            children: (0, r.jsx)(o.Button, {
                text: _.intl.string(_.t.rzxnQ8),
                variant: "secondary",
                fullWidth: !0,
                onClick: () => {
                    S(""), s(p.k.START)
                }
            })
        })]
    })
}