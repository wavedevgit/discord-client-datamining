/** chunk id: 159707, original params: e,t,r (module,exports,require) **/
r.d(t, {
    default: () => L
}), r(896048);
var n = r(627968),
    i = r(64700),
    a = r(284009),
    o = r.n(a),
    l = r(158954),
    s = r(311907),
    c = r(732955),
    u = r(964486),
    d = r(975807),
    f = r(775602),
    p = r(607470),
    m = r(550111),
    b = r(639289),
    _ = r(976860),
    O = r(287809),
    P = r(954571),
    S = r(676279),
    g = r(677185),
    I = r(88001),
    y = r(652215),
    x = r(519412),
    h = r(985018),
    N = r(329491),
    j = r(42085),
    E = r(49402),
    w = r(27753),
    C = r(136300);

function T(e) {
    for (var t = 1; t < arguments.length; t++) {
        var r = null != arguments[t] ? arguments[t] : {},
            n = Object.keys(r);
        "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter(function(e) {
            return Object.getOwnPropertyDescriptor(r, e).enumerable
        }))), n.forEach(function(t) {
            var n;
            n = r[t], t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n
        })
    }
    return e
}

function U(e, t) {
    return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
            var n = Object.getOwnPropertySymbols(e);
            r.push.apply(r, n)
        }
        return r
    })(Object(t)).forEach(function(r) {
        Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r))
    }), e
}

function v(e, t) {
    if (null == e) return {};
    var r, n, i, a = {};
    if ("u" > typeof Reflect && Reflect.ownKeys) {
        for (i = 0, r = Reflect.ownKeys(e); i < r.length; i++) n = r[i], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (a[n] = e[n]);
        return a
    }
    if (a = function(e, t) {
            if (null == e) return {};
            var r, n, i = {},
                a = Object.getOwnPropertyNames(e);
            for (n = 0; n < a.length; n++) r = a[n], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (i[r] = e[r]);
            return i
        }(e, t), Object.getOwnPropertySymbols)
        for (i = 0, r = Object.getOwnPropertySymbols(e); i < r.length; i++) n = r[i], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (a[n] = e[n]);
    return a
}
let R = {
    [I.Hy.BILLING_SUBSCRIPTION_GROUP_USER_ON_COOLDOWN]: 1,
    [I.Hy.BILLING_SUBSCRIPTION_GROUP_USER_ACTIVE_BOOSTS]: 2,
    [I.Hy.BILLING_SUBSCRIPTION_GROUP_USER_BOOST_ONLY]: 2,
    [I.Hy.BILLING_SUBSCRIPTION_GROUP_USER_HAS_FRACTIONAL_NITRO]: 5,
    [I.Hy.UNKNOWN_USER]: 3,
    [I.Hy.BILLING_SUBSCRIPTION_GROUP_USER_ON_GIFT_SUBSCRIPTION]: 6,
    [I.Hy.BILLING_SUBSCRIPTION_GROUP_USER_INVALID_SUBSCRIPTION]: 7
};

function A(e) {
    let {
        onClose: t,
        isExistingSub: r,
        premiumGroupPrimaryName: i,
        currentUser: a
    } = e, o = v(e, ["onClose", "isExistingSub", "premiumGroupPrimaryName", "currentUser"]), u = (0, s.bG)([f.A], () => f.A.useReducedMotion), d = (0, S.TM)() ? j.A : E.A;
    return (0, n.jsx)(l.dWK, U(T({}, o), {
        onClose: t,
        children: (0, n.jsx)(l.cwr, {
            children: (0, n.jsxs)("div", {
                className: N.hQ,
                children: [(0, n.jsx)("div", {
                    className: N.ZB
                }), (0, n.jsx)(l.DZT, {
                    className: N.wx,
                    variant: "display-md",
                    color: "text-strong",
                    children: h.intl.string(h.t.QWljxE)
                }), (0, n.jsxs)("div", {
                    className: N.Dz,
                    children: [u ? (0, n.jsx)("img", {
                        src: w.A,
                        alt: "",
                        className: N.d9
                    }) : (0, n.jsx)(p.A, {
                        playsInline: !0,
                        muted: !0,
                        autoPlay: !0,
                        loop: !0,
                        className: N.d9,
                        children: (0, n.jsx)("source", {
                            src: d
                        })
                    }), (0, n.jsx)(m.A, {
                        user: a,
                        isHighlighted: !0,
                        nameplate: null,
                        nameplateData: a.nameplate,
                        className: N.M4,
                        nameplatePreviewSize: "large"
                    })]
                }), (0, n.jsx)("div", {
                    className: N.FS,
                    children: (0, n.jsx)(l.EYj, {
                        variant: "text-md/medium",
                        color: "text-muted",
                        children: h.intl.format(r ? x.default.axh0pl : x.default["+KAArL"], {
                            premiumGroupProductName: (0, I.DP)(),
                            primaryName: i
                        })
                    })
                }), (0, n.jsx)("div", {
                    className: N.qr,
                    children: (0, n.jsx)(c.$nd, {
                        variant: "primary",
                        fullWidth: !0,
                        text: h.intl.string(x.default.EL9m2H),
                        onClick: () => {
                            t(), (0, _.pX)(y.BVt.APPLICATION_STORE)
                        }
                    })
                })]
            })
        })
    }))
}

function G(e) {
    let {
        setModalState: t,
        onClose: r,
        premiumGroupSubscriptionId: a,
        premiumGroupInviteId: o,
        isExistingSub: s,
        premiumGroupPrimaryName: c,
        currentUser: f,
        setError: p
    } = e, m = v(e, ["setModalState", "onClose", "premiumGroupSubscriptionId", "premiumGroupInviteId", "isExistingSub", "premiumGroupPrimaryName", "currentUser", "setError"]), b = (0, I.DP)(), [_, O] = (0, i.useState)(!1);
    (0, u.Ay)(() => {
        P.default.track(y.HAw.PREMIUM_GROUP_ACCEPT_INVITE_MODAL_VIEWED, {
            invite_id: o,
            subscription_id: a,
            is_existing_sub: s
        })
    });
    let S = async () => {
        P.default.track(y.HAw.PREMIUM_GROUP_ACCEPT_INVITE_CTA_CLICKED, {
            invite_id: o,
            subscription_id: a,
            is_existing_sub: s
        }), O(!0);
        let e = await (0, g.wc)(a, f.id, o);
        if (O(!1), e.ok) t(1);
        else {
            var r, n, i;
            let l = null == (n = null == (r = e.body) ? void 0 : r.code) ? 0 : null != (i = R[n]) ? i : 0;
            P.default.track(y.HAw.PREMIUM_GROUP_ACCEPT_INVITE_ERROR, {
                invite_id: o,
                subscription_id: a,
                error_type: function(e) {
                    switch (e) {
                        case 1:
                            return "cooldown_not_over";
                        case 2:
                            return "has_server_boosts";
                        case 3:
                            return "invite_canceled";
                        case 4:
                            return "country_restriction";
                        case 5:
                            return "has_nitro_credits";
                        case 6:
                            return "has_gift_subscription";
                        case 7:
                            return "invalid_subscription";
                        default:
                            return "unknown"
                    }
                }(l)
            }), p(l), t(2)
        }
    };
    return (0, n.jsx)(l.ExpressiveModal, U(T({}, m), {
        onClose: r,
        gradientColor: "nitro-pink",
        badge: {
            type: "beta",
            variant: "expressive"
        },
        graphic: {
            src: C.A,
            type: "image"
        },
        title: h.intl.formatToPlainString(s ? x.default["0Yxz12"] : x.default.UjA5k8, {
            premiumGroupProductName: b
        }),
        subtitle: h.intl.format(s ? x.default.YjSsdH : x.default.qkFeBP, {
            premiumGroupProductName: b,
            cooldownMonths: I.wl,
            primaryName: c
        }),
        actions: [{
            text: h.intl.string(x.default["IO+nlU"]),
            onClick: () => {
                (0, d.A)(I.TE)
            },
            variant: "secondary"
        }, {
            text: h.intl.string(x.default.odQeh3),
            onClick: S,
            variant: "expressive",
            icon: l.tvc,
            loading: _
        }]
    }))
}

function k(e) {
    let t, r, {
            error: i,
            onClose: a
        } = e,
        o = v(e, ["error", "onClose"]),
        s = (0, I.DP)();
    switch (i) {
        case 1:
            t = h.intl.formatToPlainString(x.default["wMo6/n"], {
                premiumGroupProductName: s
            }), r = h.intl.formatToPlainString(x.default.C08r8L, {
                premiumGroupProductName: s,
                cooldownMonths: I.wl
            });
            break;
        case 2:
            t = h.intl.formatToPlainString(x.default["Um4ml+"], {
                premiumGroupProductName: s
            }), r = h.intl.string(x.default.Fm8iss);
            break;
        case 3:
            t = h.intl.string(x.default.yGTLxP), r = h.intl.formatToPlainString(x.default["7/qtoL"], {
                premiumGroupProductName: s
            });
            break;
        case 4:
            t = h.intl.formatToPlainString(x.default["S+UfpQ"], {
                premiumGroupProductName: s
            }), r = h.intl.formatToPlainString(x.default.AKYhx6, {
                premiumGroupProductName: s,
                countryName: (0, I.mU)()
            });
            break;
        case 5:
            t = h.intl.formatToPlainString(x.default.anKEqI, {
                premiumGroupProductName: s
            }), r = h.intl.formatToPlainString(x.default["67BbUf"], {
                premiumGroupProductName: s
            });
            break;
        case 6:
            t = h.intl.formatToPlainString(x.default.VH7zHG, {
                premiumGroupProductName: s
            }), r = h.intl.string(x.default.s47Jqb);
            break;
        case 7:
            t = h.intl.formatToPlainString(x.default.agSoQJ, {
                premiumGroupProductName: s
            }), r = h.intl.formatToPlainString(x.default.YhJsq4, {
                premiumGroupProductName: s
            });
            break;
        default:
            t = h.intl.formatToPlainString(x.default["Kpg/uU"], {
                premiumGroupProductName: s
            }), r = h.intl.formatToPlainString(x.default.GrEzlX, {
                premiumGroupProductName: s
            })
    }
    return (0, n.jsx)(l.Modal, T({
        size: "md",
        title: t,
        subtitle: r,
        onClose: a,
        actions: [{
            text: h.intl.string(x.default["IO+nlU"]),
            variant: "secondary",
            onClick: () => {
                (0, d.A)(I.TE)
            }
        }]
    }, o))
}

function L(e) {
    let {
        premiumGroupSubscriptionId: t,
        premiumGroupInviteId: r,
        isExistingSub: a,
        premiumGroupPrimaryName: l
    } = e, c = v(e, ["premiumGroupSubscriptionId", "premiumGroupInviteId", "isExistingSub", "premiumGroupPrimaryName"]), [u, d] = (0, i.useState)(0), [f, p] = (0, i.useState)(null), m = (0, s.bG)([O.default], () => O.default.getCurrentUser());
    o()(null != m, "UserSettingsProfileCustomization: user cannot be undefined");
    let _ = null;
    switch (u) {
        case 0:
            _ = (0, n.jsx)(G, T({
                setModalState: d,
                premiumGroupSubscriptionId: t,
                premiumGroupInviteId: r,
                isExistingSub: a,
                premiumGroupPrimaryName: l,
                currentUser: m,
                setError: p
            }, c));
            break;
        case 1:
            _ = (0, n.jsx)(A, U(T({}, c), {
                isExistingSub: a,
                premiumGroupPrimaryName: l,
                currentUser: m
            }));
            break;
        case 2:
            _ = (0, n.jsx)(k, T({
                error: f
            }, c))
    }
    return (0, n.jsx)(b.A, {
        isConfirmationStep: 1 === u,
        isEligibleForWowMoment: !0,
        shouldPrefetchWowMoment: !0,
        children: _
    })
}