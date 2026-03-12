/** chunk id: 568286 params = (module,exports,require) **/
n.d(t, {
    q: () => p
});
var i = n(627968),
    s = n(64700),
    l = n(989349),
    r = n.n(l),
    a = n(158954),
    o = n(397927),
    d = n(384904),
    c = n(793574),
    u = n(688810),
    _ = n(915089),
    m = n(250253),
    g = n(2242),
    A = n(985018),
    h = n(823470);
let x = e => {
        let {
            transitionState: t,
            groupListing: n,
            listing: l,
            subscription: x,
            onClose: p
        } = e, T = (0, _.GV)(), {
            analyticsLocations: E
        } = (0, u.Ay)(c.A.GUILD_ROLE_SUBSCRIPTION_CANCELLATION_MODAL), {
            cancelSubscription: C,
            error: S,
            submitting: f
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
        })(E), N = async () => {
            await C(x.id) && p()
        }, b = l.role_benefits.benefits.filter(e => e.ref_type === g.bN.CHANNEL), I = l.role_benefits.benefits.filter(e => e.ref_type === g.bN.INTANGIBLE), v = r()(x.currentPeriodEnd).format("MMMM Do, YYYY"), j = A.intl.formatToPlainString(A.t.KsMRP5, {
            numChannels: b.length,
            numAdditionalBenefits: I.length,
            subscriptionEndDate: v
        });
        return (0, i.jsx)(a.Modal, {
            transitionState: t,
            "aria-labelledby": T,
            actions: [{
                text: A.intl.string(A.t.EP6EPb),
                variant: "secondary",
                onClick: p
            }, {
                variant: "critical-primary",
                text: A.intl.string(A.t.F6lUDF),
                onClick: N,
                loading: f
            }],
            title: A.intl.string(A.t.O6l5tM),
            subtitle: j,
            onClose: p,
            children: (0, i.jsxs)(o.BJc, {
                gap: 8,
                children: [null != S ? (0, i.jsx)(o.wx6, {
                    type: "critical",
                    children: S.message
                }) : null, (0, i.jsx)(m.x, {
                    listingId: l.id,
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