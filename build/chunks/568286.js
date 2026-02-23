/** chunk id: 568286, original params: e,t,n (module,exports,require) **/
n.d(t, {
    q: () => p
});
var i = n(627968),
    s = n(64700),
    a = n(989349),
    r = n.n(a),
    l = n(158954),
    o = n(397927),
    c = n(384904),
    d = n(793574),
    u = n(688810),
    _ = n(915089),
    m = n(250253),
    A = n(2242),
    g = n(985018),
    h = n(289324);
let x = e => {
        let {
            transitionState: t,
            groupListing: n,
            listing: a,
            subscription: x,
            onClose: p
        } = e, E = (0, _.GV)(), {
            analyticsLocations: C
        } = (0, u.Ay)(d.A.GUILD_ROLE_SUBSCRIPTION_CANCELLATION_MODAL), {
            cancelSubscription: T,
            error: S,
            submitting: I
        } = (e => {
            let [t, n] = s.useState(!1), [i, a] = s.useState(null);
            return {
                cancelSubscription: async t => {
                    try {
                        return n(!0), await c.M2(t, e), !0
                    } catch (e) {
                        a(e)
                    } finally {
                        n(!1)
                    }
                },
                error: i,
                submitting: t
            }
        })(C), f = async () => {
            await T(x.id) && p()
        }, N = a.role_benefits.benefits.filter(e => e.ref_type === A.bN.CHANNEL), b = a.role_benefits.benefits.filter(e => e.ref_type === A.bN.INTANGIBLE), j = r()(x.currentPeriodEnd).format("MMMM Do, YYYY"), v = g.intl.formatToPlainString(g.t.KsMRP5, {
            numChannels: N.length,
            numAdditionalBenefits: b.length,
            subscriptionEndDate: j
        });
        return (0, i.jsx)(l.Modal, {
            transitionState: t,
            "aria-labelledby": E,
            actions: [{
                text: g.intl.string(g.t.EP6EPb),
                variant: "secondary",
                onClick: p
            }, {
                variant: "critical-primary",
                text: g.intl.string(g.t.F6lUDF),
                onClick: f,
                loading: I
            }],
            title: g.intl.string(g.t.O6l5tM),
            subtitle: v,
            onClose: p,
            children: (0, i.jsxs)(o.BJc, {
                gap: 8,
                children: [null != S ? (0, i.jsx)(o.wx6, {
                    type: "critical",
                    children: S.message
                }) : null, (0, i.jsx)(m.x, {
                    listingId: a.id,
                    guildId: n.guild_id,
                    className: h.P
                })]
            })
        })
    },
    p = e => {
        (0, o.qfG)(t => (0, i.jsx)(x, {
            ...t,
            ...e
        }))
    }