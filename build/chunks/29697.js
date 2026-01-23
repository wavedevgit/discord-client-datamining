/** Chunk was on 20601 **/
/** chunk id: 29697, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => D
}), n(896048), n(492834);
var l = n(627968),
    r = n(64700),
    i = n(311907),
    s = n(990078),
    a = n(397927),
    o = n(830215),
    c = n(631670),
    u = n(775602),
    d = n(654107),
    m = n(90084),
    f = n(42780),
    x = n(764548),
    h = n(961350),
    g = n(498642),
    v = n(696451),
    j = n(287809),
    b = n(954571),
    p = n(486020),
    _ = n(60175),
    C = n(513461),
    y = n(709977),
    O = n(338724),
    N = n(18366),
    I = n(624094),
    A = n(260197),
    F = n(652215),
    P = n(985018),
    E = n(70645),
    S = n(596831),
    R = n(764293);
let T = e => {
        let {
            headerId: t,
            email: n,
            password: r,
            setEmail: i,
            setPassword: s,
            emailError: o,
            passwordError: c,
            hasManualFormFields: u,
            isMember: d
        } = e;
        return (0, l.jsxs)("div", {
            className: E.Qs,
            children: [(0, l.jsx)("div", {
                className: E.DS,
                children: (0, l.jsx)("img", {
                    alt: P.intl.string(P.t.ewGfjv),
                    src: S,
                    className: E.In
                })
            }), (0, l.jsx)(a.Heading, {
                id: t,
                variant: "heading-xl/semibold",
                className: E.wx,
                children: u && !d ? P.intl.string(P.t.qQYF6z) : P.intl.string(P.t.MhcDLz)
            }), (0, l.jsx)(a.Text, {
                variant: "text-sm/normal",
                color: "text-default",
                children: P.intl.string(P.t["SPlaR/"])
            }), (0, l.jsx)("hr", {
                className: E.yF
            }), (0, l.jsx)("div", {
                className: E.kz,
                children: (0, l.jsx)(a.ksK, {
                    label: P.intl.string(P.t.dI4d4S),
                    value: n,
                    error: o,
                    onChange: i,
                    autoFocus: !0
                })
            }), (0, l.jsx)("div", {
                className: E.kz,
                children: (0, l.jsx)(a.ksK, {
                    label: P.intl.string(P.t["CIGa+7"]),
                    type: "password",
                    value: r,
                    error: c,
                    onChange: s
                })
            })]
        })
    },
    w = e => {
        let {
            headerId: t,
            email: n
        } = e;
        return (0, l.jsxs)("div", {
            className: E.Qs,
            children: [(0, l.jsx)("img", {
                alt: P.intl.string(P.t.wNAblz),
                src: R,
                className: E.In
            }), (0, l.jsx)(a.Heading, {
                id: t,
                variant: "heading-xl/semibold",
                className: E.wx,
                children: P.intl.format(P.t.v01XgL, {
                    email: n
                })
            }), (0, l.jsx)(a.Text, {
                variant: "text-sm/normal",
                color: "text-default",
                children: P.intl.string(P.t["/Hw5ad"])
            }), (0, l.jsx)("div", {
                className: E.rb,
                children: (0, l.jsx)(a.QWc, {
                    onClick: () => o.A.verifyResend(),
                    text: P.intl.string(P.t["MLk/mK"])
                })
            })]
        })
    },
    M = e => {
        var t;
        let {
            guildId: n,
            formState: r,
            updateFormState: s,
            isPreview: a = !1,
            disableVerification: o = !1
        } = e, c = (0, i.bG)([_.A], () => _.A.get(n));
        if (null == c) return null;
        let u = null != (t = null != r ? r : null == c ? void 0 : c.formFields) ? t : [],
            d = a ? I.E : I.k;
        return (0, l.jsx)(d, {
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
            formState: r,
            updateFormState: i,
            guildName: s,
            hasManualFormFields: o,
            disableVerification: c,
            isPreview: u = !1
        } = e;
        return (0, l.jsxs)("div", {
            className: E.Qs,
            children: [(0, l.jsx)(a.Heading, {
                id: n,
                variant: "heading-xxl/normal",
                className: E.wx,
                children: o ? P.intl.format(P.t.cgX47Z, {
                    guildName: s
                }) : P.intl.string(P.t.DrEEC8)
            }), (0, l.jsx)(a.Text, {
                variant: "text-sm/normal",
                color: "text-default",
                children: o ? P.intl.string(P.t["3smSPP"]) : P.intl.string(P.t["7D3C5p"])
            }), (0, l.jsx)(M, {
                guildId: t,
                formState: r,
                updateFormState: i,
                isPreview: u,
                disableVerification: c
            })]
        })
    },
    D = e => {
        var t, n, o, I, S;
        let R, {
                verificationForm: M,
                headerId: D,
                guildId: G,
                onClose: L,
                onComplete: H,
                isPreview: U = !1
            } = e,
            Q = (0, O.x$)(G, null == M ? void 0 : M.guild, U),
            {
                guildProfile: q,
                fetchGuildProfile: B
            } = (0, m.u)(G),
            V = (0, i.bG)([v.Ay, h.default], () => v.Ay.isMember(G, h.default.getId())),
            [z, Y] = r.useState(!1);
        r.useEffect(() => {
            V && !z && null == q && B().finally(() => Y(!0))
        }, [B, q, z, V]);
        let X = null == M ? void 0 : M.formFields.some(e => e.field_type !== C.rX.TERMS),
            [K, W] = r.useState(null != (t = null == M ? void 0 : M.formFields) ? t : []),
            [J, Z] = r.useState(!1),
            [$, ee] = r.useState(null),
            [et, en] = r.useState(""),
            [el, er] = r.useState(""),
            [ei, es] = r.useState(null),
            [ea, eo] = r.useState(null),
            {
                storeMemberCount: ec,
                storeOnlineCount: eu
            } = (0, i.cf)([g.A], () => ({
                storeMemberCount: g.A.getMemberCount(G),
                storeOnlineCount: g.A.getOnlineCount(G)
            })),
            ed = null != eu ? eu : null == M || null == (o = M.guild) ? void 0 : o.approximate_presence_count,
            em = null != ec ? ec : null == M || null == (I = M.guild) ? void 0 : I.approximate_member_count,
            ef = null != X && X;
        r.useEffect(() => {
            null != M && W(M.formFields)
        }, [M]), r.useEffect(() => {
            null != G && b.default.track(F.HAw.OPEN_MODAL, {
                type: A.mk,
                guild_id: G
            })
        }, [G]);
        let ex = (0, i.bG)([j.default], () => j.default.getCurrentUser()),
            {
                currentStep: eh,
                setCurrentStep: eg
            } = (0, O.dy)(ex);
        (0, O.he)(K);
        let ev = null == ex ? void 0 : ex.verified,
            ej = null == ex ? void 0 : ex.isPhoneVerified(),
            {
                invalidFormFields: eb,
                hasInvalidTermsFormField: ep
            } = r.useMemo(() => ({
                invalidFormFields: K.some(e => !(0, y.Ge)(e)),
                hasInvalidTermsFormField: K.some(e => e.field_type === C.rX.TERMS && !(0, y.Ge)(e))
            }), [K]),
            e_ = r.useMemo(() => {
                if (null == H || eb) return !0;
                if (ef || (null == ex ? void 0 : ex.isStaff())) return !1;
                switch (null == Q ? void 0 : Q.verificationLevel) {
                    case F.PvD.VERY_HIGH:
                        return !ej;
                    case F.PvD.LOW:
                    case F.PvD.MEDIUM:
                    case F.PvD.HIGH:
                        return !ev && !ej;
                    case F.PvD.NONE:
                    default:
                        return !1
                }
            }, [H, eb, ef, ex, null == Q ? void 0 : Q.verificationLevel, ej, ev]),
            eC = (0, i.bG)([u.A], () => u.A.useReducedMotion),
            ey = r.useRef(null),
            eO = function(e) {
                let t = null != e ? p.Ay.getGuildIconURL({
                        id: null == e ? void 0 : e.id,
                        icon: null == e ? void 0 : e.icon,
                        size: 40
                    }) : void 0,
                    n = (0, a.rdh)(a.LU0.colors.BACKGROUND_BASE_LOWER).hex(),
                    l = (0, a.rdh)(a.LU0.colors.BACKGROUND_BASE_LOWEST).hex(),
                    [r, i, s] = (0, d.rh)(t, n, !1);
                return "linear-gradient(-45deg, ".concat(r, ", ").concat(null != s ? s : l, ")")
            }(Q),
            eN = (S = null != (n = null == q ? void 0 : q.brandColorPrimary) ? n : "", R = (0, a.rdh)(a.LU0.colors.BORDER_SUBTLE).hex(), "linear-gradient(-45deg, ".concat(R, ", ").concat(S, ")"));
        if (null == Q) return (0, l.jsx)(a.y$y, {});
        let eI = async () => {
            Z(!0), es(null), eo(null);
            try {
                await (0, c.gt)({
                    email: et,
                    password: el
                }), Z(!1), eg(O.Qg.EMAIL_CONFIRMATION)
            } catch (n) {
                var e, t;
                es(null == n || null == (e = n.body) ? void 0 : e.email), eo(null == n || null == (t = n.body) ? void 0 : t.password)
            } finally {
                Z(!1)
            }
        }, eA = async () => {
            var e, t, n, l;
            Z(!0), ee(null);
            let r = null != ex ? v.Ay.getMember(G, ex.id) : null;
            if (null != r && !r.isPending) {
                null == L || L(!0);
                return
            }
            try {
                await (null == H ? void 0 : H((e = function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = null != arguments[t] ? arguments[t] : {},
                            l = Object.keys(n);
                        "function" == typeof Object.getOwnPropertySymbols && (l = l.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                            return Object.getOwnPropertyDescriptor(n, e).enumerable
                        }))), l.forEach(function(t) {
                            var l;
                            l = n[t], t in e ? Object.defineProperty(e, t, {
                                value: l,
                                enumerable: !0,
                                configurable: !0,
                                writable: !0
                            }) : e[t] = l
                        })
                    }
                    return e
                }({}, null != M ? M : _.U), t = {
                    formFields: K
                }, t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
                    var n = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var l = Object.getOwnPropertySymbols(e);
                        n.push.apply(n, l)
                    }
                    return n
                })(Object(t)).forEach(function(n) {
                    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
                }), e))), null == L || L(!0)
            } catch (t) {
                let e = null == t ? void 0 : t.body;
                (null == e || null == (n = e.errors) ? void 0 : n.version) != null || (null == e || null == (l = e.errors) ? void 0 : l.form_fields) != null ? ee(P.intl.string(P.t.PD09Sl)) : ee(null == e ? void 0 : e.message)
            } finally {
                Z(!1)
            }
        }, eF = null != q;
        return (0, l.jsxs)(l.Fragment, {
            children: [(0, l.jsxs)("div", {
                className: E.uC,
                children: [(0, l.jsx)("div", {
                    style: {
                        background: eF ? eN : eO
                    },
                    className: E.nL
                }), eF ? (0, l.jsx)(f.Ay, {
                    profile: q,
                    className: E.P5,
                    disableCTA: !0,
                    disableGuildNameClick: !0
                }) : (0, l.jsx)(x.A, {
                    className: E.P5,
                    guild: Q,
                    presenceCount: ed,
                    memberCount: em
                })]
            }), (0, l.jsx)("div", {
                className: E.yl,
                children: (0, l.jsxs)("div", {
                    className: E.Ok,
                    ref: ey,
                    children: [(0, l.jsx)(N.A, {
                        className: E.jE,
                        containerRef: ey,
                        faderSize: 180,
                        faderEdgeThreshold: 48,
                        children: (0, l.jsx)(a.YC2, {
                            className: E.C9,
                            steps: [O.Qg.CLAIM_ACCOUNT, O.Qg.EMAIL_CONFIRMATION, O.Qg.VERIFICATION_FORM],
                            step: eh,
                            children: (() => {
                                switch (eh) {
                                    case O.Qg.CLAIM_ACCOUNT:
                                        return (0, l.jsx)(T, {
                                            headerId: D,
                                            email: et,
                                            password: el,
                                            setEmail: en,
                                            setPassword: er,
                                            emailError: ei,
                                            passwordError: ea,
                                            hasManualFormFields: X,
                                            isMember: V
                                        });
                                    case O.Qg.EMAIL_CONFIRMATION:
                                        return (0, l.jsx)(w, {
                                            headerId: D,
                                            email: et
                                        });
                                    case O.Qg.VERIFICATION_FORM:
                                        return (0, l.jsx)(k, {
                                            headerId: D,
                                            guildId: G,
                                            guildName: Q.name,
                                            formState: K,
                                            updateFormState: W,
                                            isPreview: U,
                                            useReducedMotion: eC,
                                            hasManualFormFields: X,
                                            disableVerification: ef
                                        })
                                }
                            })()
                        })
                    }), (() => {
                        switch (eh) {
                            case O.Qg.CLAIM_ACCOUNT:
                                return (0, l.jsxs)("div", {
                                    className: E.qr,
                                    children: [(0, l.jsx)("div", {
                                        "data-button-hoisted-classname-wrapper": !0,
                                        className: E.RC,
                                        children: (0, l.jsx)(a.Button, {
                                            variant: "primary",
                                            text: P.intl.string(P.t.PDTjLN),
                                            type: "submit",
                                            loading: J,
                                            onClick: eI,
                                            disabled: 0 === et.length || 0 === el.length
                                        })
                                    }), (0, l.jsx)(a.Text, {
                                        variant: "text-xs/normal",
                                        color: "text-default",
                                        children: P.intl.string(P.t["9GPiR6"])
                                    })]
                                });
                            case O.Qg.EMAIL_CONFIRMATION:
                                return null;
                            case O.Qg.VERIFICATION_FORM:
                                return (0, l.jsxs)("div", {
                                    className: E.qr,
                                    children: [(0, l.jsx)(s.m, {
                                        asContainer: !0,
                                        shouldShow: e_ && eb && X,
                                        text: ep ? P.intl.string(P.t.PLNbh3) : P.intl.string(P.t.brWmV2),
                                        children: (0, l.jsx)("div", {
                                            "data-button-hoisted-classname-wrapper": !0,
                                            className: E.RC,
                                            children: (0, l.jsx)(a.Button, {
                                                variant: "active",
                                                text: P.intl.string(P.t.geKm7t),
                                                type: "submit",
                                                loading: J,
                                                onClick: eA,
                                                disabled: e_
                                            })
                                        })
                                    }), null != $ && (0, l.jsx)(a.Text, {
                                        variant: "text-xs/normal",
                                        color: "text-feedback-critical",
                                        children: $
                                    }), null == $ && X && (0, l.jsxs)("div", {
                                        className: E.BU,
                                        children: [(0, l.jsx)(a.Text, {
                                            color: "text-default",
                                            variant: "text-xs/normal",
                                            children: P.intl.string(P.t["+fPCTZ"])
                                        }), (0, l.jsx)(a.Text, {
                                            color: "text-default",
                                            variant: "text-xs/normal",
                                            children: P.intl.string(P.t.VjgH0c)
                                        })]
                                    })]
                                })
                        }
                    })()]
                })
            })]
        })
    }