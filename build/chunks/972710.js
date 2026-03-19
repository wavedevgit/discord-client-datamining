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
    _ = n(397927),
    m = n(384904),
    g = n(793574),
    A = n(688810),
    x = n(701273),
    h = n(780964),
    p = n(840065),
    T = n(287809),
    E = n(954571),
    S = n(927578),
    C = n(866312),
    f = n(327479),
    N = n(652215),
    I = n(601107),
    b = n(985018),
    v = n(141384);
let j = [N.Dmq.PAST_DUE, N.Dmq.ACCOUNT_HOLD, N.Dmq.BILLING_RETRY],
    y = e => {
        let {
            transitionState: t,
            onClose: n,
            subscription: l,
            analyticsLocations: a,
            analyticsLocation: r
        } = e, [o, d] = s.useState(!1), [u, g] = s.useState(!1);
        s.useEffect(() => {
            E.default.track(N.HAw.GUILD_BOOST_PAST_DUE_CANCEL_MODAL_VIEWED, {
                subscription_id: l.id,
                location_stack: a
            })
        }, []);
        let A = async () => {
            d(!0), g(!1);
            try {
                await (0, m.M2)(l.id, a, r), E.default.track(N.HAw.GUILD_BOOST_PAST_DUE_CANCELLATION_FLOW_COMPLETED, {
                    subscription_id: l.id,
                    location_stack: a
                }), (0, m.hP)(), n()
            } catch (e) {
                g(!0), d(!1)
            }
        }, x = [{
            text: b.intl.string(b.t.oEAioF),
            onClick: () => n(),
            variant: "secondary"
        }, {
            text: b.intl.string(b.t["cY+Oob"]),
            onClick: () => A(),
            disabled: o,
            variant: "critical-primary",
            loading: o
        }];
        return (0, i.jsx)(c.Modal, {
            size: "md",
            transitionState: t,
            title: b.intl.string(b.t.LZunzZ),
            subtitle: b.intl.string(b.t.FClXh9),
            actions: x,
            onClose: async () => n(),
            children: u ? (0, i.jsx)(_.wx6, {
                type: "critical",
                children: b.intl.string(b.t["5mlOCW"])
            }) : null
        })
    };

function O(e) {
    let t, {
            subscription: n,
            renewalInvoicePreview: s,
            fractionalPremiumInfo: l,
            fromStandaloneBillingPage: r = !0,
            analyticsLocation: m
        } = e,
        E = (0, u.bG)([T.default], () => {
            let e = T.default.getCurrentUser();
            return o()(null != e, "GuildBoostingHeader: currentUser cannot be undefined"), e
        }),
        {
            analyticsLocations: O
        } = (0, A.Ay)(g.A.GUILD_BOOSTING_SUBSCRIPTION_HEADER),
        R = (0, C.A)({
            location: "GuildBoostingHeader"
        });
    if (0 === (0, S.bx)(n.additionalPlans)) return null;
    let {
        status: L
    } = n, D = (0, S.$k)(n), P = R && !D && n.isBoostOnly && j.includes(n.status);
    if (D) t = v.v2;
    else switch (L) {
        case N.Dmq.PAST_DUE:
        case N.Dmq.ACCOUNT_HOLD:
        case N.Dmq.BILLING_RETRY:
            t = v.P7;
            break;
        case N.Dmq.PAUSE_PENDING:
        case N.Dmq.PAUSED:
            t = n.pauseReason !== I.qf.FRACTIONAL_PREMIUM ? v.C7 : v.wG;
            break;
        default:
            t = v.wG
    }
    return (0, i.jsxs)(i.Fragment, {
        children: [(0, i.jsxs)("div", {
            className: a()(t, v.Qn),
            children: [(0, i.jsx)("div", {
                className: v.Kq
            }), (0, i.jsx)("div", {
                className: v.OL
            }), (0, i.jsxs)("div", {
                className: v.eC,
                children: [(0, i.jsx)("div", {
                    className: a()(v.Ab, {
                        [v.aD]: D
                    })
                }), (0, i.jsx)("div", {
                    children: (0, S.Uf)({
                        subscription: n,
                        renewalInvoicePreview: s,
                        user: E,
                        fractionalPremiumInfo: l
                    })
                })]
            }), r && (0, i.jsxs)("div", {
                className: v.BQ,
                children: [P && (0, i.jsx)("div", {
                    className: v.x7,
                    children: (0, i.jsx)(c.QWc, {
                        variant: "always-white",
                        onClick: () => {
                            j.includes(n.status) && (0, _.mMO)(async () => e => (0, i.jsx)(y, {
                                ...e,
                                subscription: n,
                                analyticsLocations: O,
                                analyticsLocation: m
                            }))
                        },
                        size: "sm",
                        text: b.intl.string(b.t["ETE/oC"])
                    })
                }), (0, i.jsx)(f.A, {
                    onClick: () => (0, p.openUserSettings)(h.X.PREMIUM_GUILD_SUBSCRIPTIONS_PANEL),
                    text: b.intl.string(b.t["NQ5g/U"])
                })]
            })]
        }), !r && (0, i.jsx)(_.Text, {
            className: v.yW,
            variant: "text-sm/normal",
            children: b.intl.format(d.Fr ? b.t.uxYBEa : b.t.k6haR9, {
                openAppHook: () => (0, x.A)("app")
            })
        })]
    })
}