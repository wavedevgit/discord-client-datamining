/** chunk id: 568286 params = (module,exports,require) **/
n.d(t, {
    q: () => x
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
    g = n(250253),
    A = n(2242),
    m = n(985018),
    h = n(289324);
let p = e => {
        let {
            transitionState: t,
            groupListing: n,
            listing: l,
            subscription: p,
            onClose: x
        } = e, E = (0, _.GV)(), {
            analyticsLocations: T
        } = (0, u.Ay)(c.A.GUILD_ROLE_SUBSCRIPTION_CANCELLATION_MODAL), {
            cancelSubscription: S,
            error: C,
            submitting: I
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
        })(T), f = async () => {
            await S(p.id) && x()
        }, N = l.role_benefits.benefits.filter(e => e.ref_type === A.bN.CHANNEL), b = l.role_benefits.benefits.filter(e => e.ref_type === A.bN.INTANGIBLE), v = a()(p.currentPeriodEnd).format("MMMM Do, YYYY"), O = m.intl.formatToPlainString(m.t.KsMRP5, {
            numChannels: N.length,
            numAdditionalBenefits: b.length,
            subscriptionEndDate: v
        });
        return (0, i.jsx)(r.Modal, {
            transitionState: t,
            "aria-labelledby": E,
            actions: [{
                text: m.intl.string(m.t.EP6EPb),
                variant: "secondary",
                onClick: x
            }, {
                variant: "critical-primary",
                text: m.intl.string(m.t.F6lUDF),
                onClick: f,
                loading: I
            }],
            title: m.intl.string(m.t.O6l5tM),
            subtitle: O,
            onClose: x,
            children: (0, i.jsxs)(o.BJc, {
                gap: 8,
                children: [null != C ? (0, i.jsx)(o.wx6, {
                    type: "critical",
                    children: C.message
                }) : null, (0, i.jsx)(g.x, {
                    listingId: l.id,
                    guildId: n.guild_id,
                    className: h.P
                })]
            })
        })
    },
    x = e => {
        (0, o.qfG)(t => (0, i.jsx)(p, {
            ...t,
            ...e
        }))
    }