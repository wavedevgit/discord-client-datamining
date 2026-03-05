/** chunk id: 972710, original params: e,t,n (module,exports,require) **/
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
    g = n(384904),
    m = n(793574),
    A = n(688810),
    h = n(701273),
    p = n(780964),
    x = n(840065),
    E = n(287809),
    T = n(927578),
    S = n(866312),
    C = n(327479),
    f = n(652215),
    I = n(601107),
    b = n(985018),
    N = n(141384);
let v = [f.Dmq.PAST_DUE, f.Dmq.ACCOUNT_HOLD, f.Dmq.BILLING_RETRY],
    j = e => {
        let {
            transitionState: t,
            onClose: n,
            subscription: l,
            analyticsLocations: a,
            analyticsLocation: r
        } = e, [o, d] = s.useState(!1), [u, m] = s.useState(!1), A = async () => {
            d(!0), m(!1);
            try {
                await (0, g.M2)(l.id, a, r), (0, g.hP)(), n()
            } catch (e) {
                m(!0), d(!1)
            }
        }, h = [{
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
            actions: h,
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
            analyticsLocation: g
        } = e,
        O = (0, u.bG)([E.default], () => {
            let e = E.default.getCurrentUser();
            return o()(null != e, "GuildBoostingHeader: currentUser cannot be undefined"), e
        }),
        {
            analyticsLocations: R
        } = (0, A.Ay)(m.A.GUILD_BOOSTING_SUBSCRIPTION_HEADER),
        y = (0, S.A)({
            location: "GuildBoostingHeader"
        });
    if (0 === (0, T.bx)(n.additionalPlans)) return null;
    let {
        status: P
    } = n, L = (0, T.$k)(n), D = y && !L && n.isBoostOnly && v.includes(n.status);
    if (L) t = N.v2;
    else switch (P) {
        case f.Dmq.PAST_DUE:
        case f.Dmq.ACCOUNT_HOLD:
        case f.Dmq.BILLING_RETRY:
            t = N.P7;
            break;
        case f.Dmq.PAUSE_PENDING:
        case f.Dmq.PAUSED:
            t = n.pauseReason !== I.qf.FRACTIONAL_PREMIUM ? N.C7 : N.wG;
            break;
        default:
            t = N.wG
    }
    return (0, i.jsxs)(i.Fragment, {
        children: [(0, i.jsxs)("div", {
            className: a()(t, N.Qn),
            children: [(0, i.jsx)("div", {
                className: N.Kq
            }), (0, i.jsx)("div", {
                className: N.OL
            }), (0, i.jsxs)("div", {
                className: N.eC,
                children: [(0, i.jsx)("div", {
                    className: a()(N.Ab, {
                        [N.aD]: L
                    })
                }), (0, i.jsx)("div", {
                    children: (0, T.Uf)({
                        subscription: n,
                        renewalInvoicePreview: s,
                        user: O,
                        fractionalPremiumInfo: l
                    })
                })]
            }), r && (0, i.jsxs)("div", {
                className: N.BQ,
                children: [D && (0, i.jsx)("div", {
                    className: N.x7,
                    children: (0, i.jsx)(c.QWc, {
                        variant: "always-white",
                        onClick: () => {
                            v.includes(n.status) && (0, _.mMO)(async () => e => (0, i.jsx)(j, {
                                ...e,
                                subscription: n,
                                analyticsLocations: R,
                                analyticsLocation: g
                            }))
                        },
                        size: "sm",
                        text: b.intl.string(b.t["ETE/oC"])
                    })
                }), (0, i.jsx)(C.A, {
                    onClick: () => (0, x.openUserSettings)(p.X.PREMIUM_GUILD_SUBSCRIPTIONS_PANEL, {
                        section: f.nc_.GUILD_BOOSTING
                    }),
                    text: b.intl.string(b.t["NQ5g/U"])
                })]
            })]
        }), !r && (0, i.jsx)(_.Text, {
            className: N.yW,
            variant: "text-sm/normal",
            children: b.intl.format(d.Fr ? b.t.uxYBEa : b.t.k6haR9, {
                openAppHook: () => (0, h.A)("app")
            })
        })]
    })
}