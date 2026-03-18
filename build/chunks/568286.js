/** chunk id: 568286 params = (module,exports,require) **/
n.d(t, {
    q: () => p
});
var i = n(627968),
    s = n(64700),
    l = n(989349),
    a = n.n(l),
    r = n(158954),
    o = n(397927),
    d = n(384904),
    c = n(793574),
    u = n(688810),
    _ = n(915089),
    m = n(250253),
    g = n(2242),
    A = n(985018),
    x = n(289324);
let h = e => {
        let {
            transitionState: t,
            groupListing: n,
            listing: l,
            subscription: h,
            onClose: p
        } = e, T = (0, _.GV)(), {
            analyticsLocations: E
        } = (0, u.Ay)(c.A.GUILD_ROLE_SUBSCRIPTION_CANCELLATION_MODAL), {
            cancelSubscription: S,
            error: f,
            submitting: C
        } = (e => {
            let [t, n] = s.useState(!1), [i, l] = s.useState(null);
            return {
                cancelSubscription: async t => {
                    try {
                        return n(!0), await d.M2(t, e), !0
                    } catch (e) {
                        l(e)
                    } finally {
                        n(!1)
                    }
                },
                error: i,
                submitting: t
            }
        })(E), b = async () => {
            await S(h.id) && p()
        }, N = l.role_benefits.benefits.filter(e => e.ref_type === g.bN.CHANNEL), I = l.role_benefits.benefits.filter(e => e.ref_type === g.bN.INTANGIBLE), v = a()(h.currentPeriodEnd).format("MMMM Do, YYYY"), j = A.intl.formatToPlainString(A.t.KsMRP5, {
            numChannels: N.length,
            numAdditionalBenefits: I.length,
            subscriptionEndDate: v
        });
        return (0, i.jsx)(r.Modal, {
            transitionState: t,
            "aria-labelledby": T,
            actions: [{
                text: A.intl.string(A.t.EP6EPb),
                variant: "secondary",
                onClick: p
            }, {
                variant: "critical-primary",
                text: A.intl.string(A.t.F6lUDF),
                onClick: b,
                loading: C
            }],
            title: A.intl.string(A.t.O6l5tM),
            subtitle: j,
            onClose: p,
            children: (0, i.jsxs)(o.BJc, {
                gap: 8,
                children: [null != f ? (0, i.jsx)(o.wx6, {
                    type: "critical",
                    children: f.message
                }) : null, (0, i.jsx)(m.x, {
                    listingId: l.id,
                    guildId: n.guild_id,
                    className: x.P
                })]
            })
        })
    },
    p = e => {
        (0, o.qfG)(t => (0, i.jsx)(h, {
            ...t,
            ...e
        }))
    }