/** Chunk was on 20601 **/
/** chunk id: 29697, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => D
}), n(896048), n(492834);
var r = n(627968),
    l = n(64700),
    i = n(311907),
    s = n(990078),
    a = n(397927),
    o = n(830215),
    c = n(631670),
    u = n(775602),
    d = n(654107),
    m = n(90084),
    f = n(42780),
    h = n(764548),
    x = n(961350),
    g = n(498642),
    v = n(696451),
    p = n(287809),
    j = n(954571),
    b = n(486020),
    _ = n(60175),
    E = n(513461),
    C = n(709977),
    N = n(338724),
    O = n(18366),
    y = n(624094),
    P = n(260197),
    I = n(652215),
    A = n(985018),
    R = n(70645),
    F = n(596831),
    S = n(764293);
let T = e => {
        let {
            headerId: t,
            email: n,
            password: l,
            setEmail: i,
            setPassword: s,
            emailError: o,
            passwordError: c,
            hasManualFormFields: u,
            isMember: d
        } = e;
        return (0, r.jsxs)("div", {
            className: R.Qs,
            children: [(0, r.jsx)("div", {
                className: R.DS,
                children: (0, r.jsx)("img", {
                    alt: A.intl.string(A.t.ewGfjv),
                    src: F,
                    className: R.In
                })
            }), (0, r.jsx)(a.Heading, {
                id: t,
                variant: "heading-xl/semibold",
                className: R.wx,
                children: u && !d ? A.intl.string(A.t.qQYF6z) : A.intl.string(A.t.MhcDLz)
            }), (0, r.jsx)(a.Text, {
                variant: "text-sm/normal",
                color: "text-default",
                children: A.intl.string(A.t["SPlaR/"])
            }), (0, r.jsx)("hr", {
                className: R.yF
            }), (0, r.jsx)("div", {
                className: R.kz,
                children: (0, r.jsx)(a.ksK, {
                    label: A.intl.string(A.t.dI4d4S),
                    value: n,
                    error: o,
                    onChange: i,
                    autoFocus: !0
                })
            }), (0, r.jsx)("div", {
                className: R.kz,
                children: (0, r.jsx)(a.ksK, {
                    label: A.intl.string(A.t["CIGa+7"]),
                    type: "password",
                    value: l,
                    error: c,
                    onChange: s
                })
            })]
        })
    },
    M = e => {
        let {
            headerId: t,
            email: n
        } = e;
        return (0, r.jsxs)("div", {
            className: R.Qs,
            children: [(0, r.jsx)("img", {
                alt: A.intl.string(A.t.wNAblz),
                src: S,
                className: R.In
            }), (0, r.jsx)(a.Heading, {
                id: t,
                variant: "heading-xl/semibold",
                className: R.wx,
                children: A.intl.format(A.t.v01XgL, {
                    email: n
                })
            }), (0, r.jsx)(a.Text, {
                variant: "text-sm/normal",
                color: "text-default",
                children: A.intl.string(A.t["/Hw5ad"])
            }), (0, r.jsx)("div", {
                className: R.rb,
                children: (0, r.jsx)(a.QWc, {
                    onClick: () => o.A.verifyResend(),
                    text: A.intl.string(A.t["MLk/mK"])
                })
            })]
        })
    },
    w = e => {
        var t;
        let {
            guildId: n,
            formState: l,
            updateFormState: s,
            isPreview: a = !1,
            disableVerification: o = !1
        } = e, c = (0, i.bG)([_.A], () => _.A.get(n));
        if (null == c) return null;
        let u = null != (t = null != l ? l : null == c ? void 0 : c.formFields) ? t : [],
            d = a ? y.E : y.k;
        return (0, r.jsx)(d, {
            guildId: n,
            formFields: u,
            updateFormFields: s,
            disableVerification: o
        })
    },
    k = e => {
        let {
            guildId: t,
            headerId: n,
            formState: l,
            updateFormState: i,
            guildName: s,
            hasManualFormFields: o,
            disableVerification: c,
            isPreview: u = !1
        } = e;
        return (0, r.jsxs)("div", {
            className: R.Qs,
            children: [(0, r.jsx)(a.Heading, {
                id: n,
                variant: "heading-xxl/normal",
                className: R.wx,
                children: o ? A.intl.format(A.t.cgX47Z, {
                    guildName: s
                }) : A.intl.string(A.t.DrEEC8)
            }), (0, r.jsx)(a.Text, {
                variant: "text-sm/normal",
                color: "text-default",
                children: o ? A.intl.string(A.t["3smSPP"]) : A.intl.string(A.t["7D3C5p"])
            }), (0, r.jsx)(w, {
                guildId: t,
                formState: l,
                updateFormState: i,
                isPreview: u,
                disableVerification: c
            })]
        })
    },
    D = e => {
        var t, n, o, y, F;
        let S, {
                verificationForm: w,
                headerId: D,
                guildId: L,
                onClose: G,
                onComplete: H,
                isPreview: U = !1
            } = e,
            B = (0, N.x$)(L, null == w ? void 0 : w.guild, U),
            {
                guildProfile: V,
                fetchGuildProfile: Y
            } = (0, m.u)(L),
            z = (0, i.bG)([v.Ay, x.default], () => v.Ay.isMember(L, x.default.getId())),
            [Q, W] = l.useState(!1);
        l.useEffect(() => {
            z && !Q && null == V && Y().finally(() => W(!0))
        }, [Y, V, Q, z]);
        let q = null == w ? void 0 : w.formFields.some(e => e.field_type !== E.rX.TERMS),
            [X, K] = l.useState(null != (t = null == w ? void 0 : w.formFields) ? t : []),
            [$, J] = l.useState(!1),
            [Z, ee] = l.useState(null),
            [et, en] = l.useState(""),
            [er, el] = l.useState(""),
            [ei, es] = l.useState(null),
            [ea, eo] = l.useState(null),
            {
                storeMemberCount: ec,
                storeOnlineCount: eu
            } = (0, i.cf)([g.A], () => ({
                storeMemberCount: g.A.getMemberCount(L),
                storeOnlineCount: g.A.getOnlineCount(L)
            })),
            ed = null != eu ? eu : null == w || null == (o = w.guild) ? void 0 : o.approximate_presence_count,
            em = null != ec ? ec : null == w || null == (y = w.guild) ? void 0 : y.approximate_member_count,
            ef = null != q && q;
        l.useEffect(() => {
            null != w && K(w.formFields)
        }, [w]), l.useEffect(() => {
            null != L && j.default.track(I.HAw.OPEN_MODAL, {
                type: P.mk,
                guild_id: L
            })
        }, [L]);
        let eh = (0, i.bG)([p.default], () => p.default.getCurrentUser()),
            {
                currentStep: ex,
                setCurrentStep: eg
            } = (0, N.dy)(eh);
        (0, N.he)(X);
        let ev = null == eh ? void 0 : eh.verified,
            ep = null == eh ? void 0 : eh.isPhoneVerified(),
            {
                invalidFormFields: ej,
                hasInvalidTermsFormField: eb
            } = l.useMemo(() => ({
                invalidFormFields: X.some(e => !(0, C.Ge)(e)),
                hasInvalidTermsFormField: X.some(e => e.field_type === E.rX.TERMS && !(0, C.Ge)(e))
            }), [X]),
            e_ = l.useMemo(() => {
                if (null == H || ej) return !0;
                if (ef || (null == eh ? void 0 : eh.isStaff())) return !1;
                switch (null == B ? void 0 : B.verificationLevel) {
                    case I.PvD.VERY_HIGH:
                        return !ep;
                    case I.PvD.LOW:
                    case I.PvD.MEDIUM:
                    case I.PvD.HIGH:
                        return !ev && !ep;
                    case I.PvD.NONE:
                    default:
                        return !1
                }
            }, [H, ej, ef, eh, null == B ? void 0 : B.verificationLevel, ep, ev]),
            eE = (0, i.bG)([u.A], () => u.A.useReducedMotion),
            eC = l.useRef(null),
            eN = function(e) {
                let t = null != e ? b.Ay.getGuildIconURL({
                        id: null == e ? void 0 : e.id,
                        icon: null == e ? void 0 : e.icon,
                        size: 40
                    }) : void 0,
                    n = (0, a.rdh)(a.LU0.colors.BACKGROUND_BASE_LOWER).hex(),
                    r = (0, a.rdh)(a.LU0.colors.BACKGROUND_BASE_LOWEST).hex(),
                    [l, i, s] = (0, d.rh)(t, n, !1);
                return "linear-gradient(-45deg, ".concat(l, ", ").concat(null != s ? s : r, ")")
            }(B),
            eO = (F = null != (n = null == V ? void 0 : V.brandColorPrimary) ? n : "", S = (0, a.rdh)(a.LU0.colors.BORDER_SUBTLE).hex(), "linear-gradient(-45deg, ".concat(S, ", ").concat(F, ")"));
        if (null == B) return (0, r.jsx)(a.y$y, {});
        let ey = async () => {
            J(!0), es(null), eo(null);
            try {
                await (0, c.gt)({
                    email: et,
                    password: er
                }), J(!1), eg(N.Qg.EMAIL_CONFIRMATION)
            } catch (n) {
                var e, t;
                es(null == n || null == (e = n.body) ? void 0 : e.email), eo(null == n || null == (t = n.body) ? void 0 : t.password)
            } finally {
                J(!1)
            }
        }, eP = async () => {
            var e, t, n, r;
            J(!0), ee(null);
            let l = null != eh ? v.Ay.getMember(L, eh.id) : null;
            if (null != l && !l.isPending) {
                null == G || G(!0);
                return
            }
            try {
                await (null == H ? void 0 : H((e = function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = null != arguments[t] ? arguments[t] : {},
                            r = Object.keys(n);
                        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                            return Object.getOwnPropertyDescriptor(n, e).enumerable
                        }))), r.forEach(function(t) {
                            var r;
                            r = n[t], t in e ? Object.defineProperty(e, t, {
                                value: r,
                                enumerable: !0,
                                configurable: !0,
                                writable: !0
                            }) : e[t] = r
                        })
                    }
                    return e
                }({}, null != w ? w : _.U), t = {
                    formFields: X
                }, t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
                    var n = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var r = Object.getOwnPropertySymbols(e);
                        n.push.apply(n, r)
                    }
                    return n
                })(Object(t)).forEach(function(n) {
                    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
                }), e))), null == G || G(!0)
            } catch (t) {
                let e = null == t ? void 0 : t.body;
                (null == e || null == (n = e.errors) ? void 0 : n.version) != null || (null == e || null == (r = e.errors) ? void 0 : r.form_fields) != null ? ee(A.intl.string(A.t.PD09Sl)) : ee(null == e ? void 0 : e.message)
            } finally {
                J(!1)
            }
        }, eI = null != V;
        return (0, r.jsxs)(r.Fragment, {
            children: [(0, r.jsxs)("div", {
                className: R.uC,
                children: [(0, r.jsx)("div", {
                    style: {
                        background: eI ? eO : eN
                    },
                    className: R.nL
                }), eI ? (0, r.jsx)(f.Ay, {
                    profile: V,
                    className: R.P5,
                    disableCTA: !0,
                    disableGuildNameClick: !0
                }) : (0, r.jsx)(h.A, {
                    className: R.P5,
                    guild: B,
                    presenceCount: ed,
                    memberCount: em
                })]
            }), (0, r.jsx)("div", {
                className: R.yl,
                children: (0, r.jsxs)("div", {
                    className: R.Ok,
                    ref: eC,
                    children: [(0, r.jsx)(O.A, {
                        className: R.jE,
                        containerRef: eC,
                        faderSize: 180,
                        faderEdgeThreshold: 48,
                        children: (0, r.jsx)(a.YC2, {
                            className: R.C9,
                            steps: [N.Qg.CLAIM_ACCOUNT, N.Qg.EMAIL_CONFIRMATION, N.Qg.VERIFICATION_FORM],
                            step: ex,
                            children: (() => {
                                switch (ex) {
                                    case N.Qg.CLAIM_ACCOUNT:
                                        return (0, r.jsx)(T, {
                                            headerId: D,
                                            email: et,
                                            password: er,
                                            setEmail: en,
                                            setPassword: el,
                                            emailError: ei,
                                            passwordError: ea,
                                            hasManualFormFields: q,
                                            isMember: z
                                        });
                                    case N.Qg.EMAIL_CONFIRMATION:
                                        return (0, r.jsx)(M, {
                                            headerId: D,
                                            email: et
                                        });
                                    case N.Qg.VERIFICATION_FORM:
                                        return (0, r.jsx)(k, {
                                            headerId: D,
                                            guildId: L,
                                            guildName: B.name,
                                            formState: X,
                                            updateFormState: K,
                                            isPreview: U,
                                            useReducedMotion: eE,
                                            hasManualFormFields: q,
                                            disableVerification: ef
                                        })
                                }
                            })()
                        })
                    }), (() => {
                        switch (ex) {
                            case N.Qg.CLAIM_ACCOUNT:
                                return (0, r.jsxs)("div", {
                                    className: R.qr,
                                    children: [(0, r.jsx)("div", {
                                        "data-button-hoisted-classname-wrapper": !0,
                                        className: R.RC,
                                        children: (0, r.jsx)(a.Button, {
                                            variant: "primary",
                                            text: A.intl.string(A.t.PDTjLN),
                                            type: "submit",
                                            loading: $,
                                            onClick: ey,
                                            disabled: 0 === et.length || 0 === er.length
                                        })
                                    }), (0, r.jsx)(a.Text, {
                                        variant: "text-xs/normal",
                                        color: "text-default",
                                        children: A.intl.string(A.t["9GPiR6"])
                                    })]
                                });
                            case N.Qg.EMAIL_CONFIRMATION:
                                return null;
                            case N.Qg.VERIFICATION_FORM:
                                return (0, r.jsxs)("div", {
                                    className: R.qr,
                                    children: [(0, r.jsx)(s.m, {
                                        asContainer: !0,
                                        shouldShow: e_ && ej && q,
                                        text: eb ? A.intl.string(A.t.PLNbh3) : A.intl.string(A.t.brWmV2),
                                        children: (0, r.jsx)("div", {
                                            "data-button-hoisted-classname-wrapper": !0,
                                            className: R.RC,
                                            children: (0, r.jsx)(a.Button, {
                                                variant: "active",
                                                text: A.intl.string(A.t.geKm7t),
                                                type: "submit",
                                                loading: $,
                                                onClick: eP,
                                                disabled: e_
                                            })
                                        })
                                    }), null != Z && (0, r.jsx)(a.Text, {
                                        variant: "text-xs/normal",
                                        color: "text-feedback-critical",
                                        children: Z
                                    }), null == Z && q && (0, r.jsxs)("div", {
                                        className: R.BU,
                                        children: [(0, r.jsx)(a.Text, {
                                            color: "text-default",
                                            variant: "text-xs/normal",
                                            children: A.intl.string(A.t["+fPCTZ"])
                                        }), (0, r.jsx)(a.Text, {
                                            color: "text-default",
                                            variant: "text-xs/normal",
                                            children: A.intl.string(A.t.VjgH0c)
                                        })]
                                    })]
                                })
                        }
                    })()]
                })
            })]
        })
    }