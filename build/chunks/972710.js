/** chunk id: 972710 params = (module,exports,require) **/
n.d(t, {
    C: () => O
});
var i = n(627968),
    s = n(64700),
    l = n(503698),
    a = n.n(l),
    r = n(284009),
    o = n.n(r),
    d = n(607399),
    c = n(158954),
    u = n(311907),
    m = n(397927),
    g = n(793574),
    _ = n(688810),
    x = n(701273),
    A = n(323082),
    h = n(780964),
    p = n(858897),
    T = n(287809),
    f = n(954571),
    S = n(927578),
    b = n(866312),
    E = n(327479),
    C = n(652215),
    N = n(601107),
    v = n(985018),
    I = n(155565);
let j = [C.Dmq.PAST_DUE, C.Dmq.ACCOUNT_HOLD, C.Dmq.BILLING_RETRY],
    y = e => {
        let {
            transitionState: t,
            onClose: n,
            subscription: l,
            analyticsLocations: a,
            analyticsLocation: r
        } = e, [o, d] = s.useState(!1), [u, g] = s.useState(!1);
        s.useEffect(() => {
            f.default.track(C.HAw.GUILD_BOOST_PAST_DUE_CANCEL_MODAL_VIEWED, {
                subscription_id: l.id,
                location_stack: a
            })
        }, []);
        let _ = async () => {
            d(!0), g(!1);
            try {
                await (0, A.M2)(l.id, a, r), f.default.track(C.HAw.GUILD_BOOST_PAST_DUE_CANCELLATION_FLOW_COMPLETED, {
                    subscription_id: l.id,
                    location_stack: a
                }), (0, A.hP)(), n()
            } catch (e) {
                g(!0), d(!1)
            }
        }, x = [{
            text: v.intl.string(v.t.oEAioF),
            onClick: () => n(),
            variant: "secondary"
        }, {
            text: v.intl.string(v.t["cY+Oob"]),
            onClick: () => _(),
            disabled: o,
            variant: "critical-primary",
            loading: o
        }];
        return (0, i.jsx)(c.Modal, {
            size: "md",
            transitionState: t,
            title: v.intl.string(v.t.LZunzZ),
            subtitle: v.intl.string(v.t.FClXh9),
            actions: x,
            onClose: async () => n(),
            children: u ? (0, i.jsx)(m.wx6, {
                type: "critical",
                children: v.intl.string(v.t["5mlOCW"])
            }) : null
        })
    };

function O(e) {
    let t, {
            subscription: n,
            renewalInvoicePreview: s,
            fractionalPremiumInfo: l,
            fromStandaloneBillingPage: r = !0,
            analyticsLocation: A
        } = e,
        f = (0, u.bG)([T.default], () => {
            let e = T.default.getCurrentUser();
            return o()(null != e, "GuildBoostingHeader: currentUser cannot be undefined"), e
        }),
        {
            analyticsLocations: O
        } = (0, _.Ay)(g.A.GUILD_BOOSTING_SUBSCRIPTION_HEADER),
        R = (0, b.A)({
            location: "GuildBoostingHeader"
        });
    if (0 === (0, S.bx)(n.additionalPlans)) return null;
    let {
        status: L
    } = n, P = (0, S.$k)(n), D = R && !P && n.isBoostOnly && j.includes(n.status);
    if (P) t = I.v2;
    else switch (L) {
        case C.Dmq.PAST_DUE:
        case C.Dmq.ACCOUNT_HOLD:
        case C.Dmq.BILLING_RETRY:
            t = I.P7;
            break;
        case C.Dmq.PAUSE_PENDING:
        case C.Dmq.PAUSED:
            t = n.pauseReason !== N.qf.FRACTIONAL_PREMIUM ? I.C7 : I.wG;
            break;
        default:
            t = I.wG
    }
    return (0, i.jsxs)(i.Fragment, {
        children: [(0, i.jsxs)("div", {
            className: a()(t, I.Qn),
            children: [(0, i.jsx)("div", {
                className: I.Kq
            }), (0, i.jsx)("div", {
                className: I.OL
            }), (0, i.jsxs)("div", {
                className: I.eC,
                children: [(0, i.jsx)("div", {
                    className: a()(I.Ab, {
                        [I.aD]: P
                    })
                }), (0, i.jsx)("div", {
                    children: (0, S.Uf)({
                        subscription: n,
                        renewalInvoicePreview: s,
                        user: f,
                        fractionalPremiumInfo: l
                    })
                })]
            }), r && (0, i.jsxs)("div", {
                className: I.BQ,
                children: [D && (0, i.jsx)("div", {
                    className: I.x7,
                    children: (0, i.jsx)(c.QWc, {
                        variant: "always-white",
                        onClick: () => {
                            j.includes(n.status) && (0, m.mMO)(async () => e => (0, i.jsx)(y, {
                                ...e,
                                subscription: n,
                                analyticsLocations: O,
                                analyticsLocation: A
                            }))
                        },
                        size: "sm",
                        text: v.intl.string(v.t["ETE/oC"])
                    })
                }), (0, i.jsx)(E.A, {
                    onClick: () => (0, p.openUserSettings)(h.X.PREMIUM_GUILD_SUBSCRIPTIONS_PANEL),
                    text: v.intl.string(v.t["NQ5g/U"])
                })]
            })]
        }), !r && (0, i.jsx)(m.Text, {
            className: I.yW,
            variant: "text-sm/normal",
            children: v.intl.format(d.Fr ? v.t.uxYBEa : v.t.k6haR9, {
                openAppHook: () => (0, x.A)("app")
            })
        })]
    })
}