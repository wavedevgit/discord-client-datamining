/** chunk id: 568286, original params: e,t,n (module,exports,require) **/
n.d(t, {
    q: () => b
}), n(896048);
var r = n(627968),
    i = n(64700),
    l = n(989349),
    s = n.n(l),
    a = n(158954),
    o = n(397927),
    c = n(384904),
    d = n(793574),
    u = n(688810),
    _ = n(915089),
    p = n(250253),
    m = n(2242),
    g = n(985018),
    A = n(289324);
let f = e => {
        let {
            transitionState: t,
            groupListing: n,
            listing: l,
            subscription: f,
            onClose: b
        } = e, h = (0, _.GV)(), {
            analyticsLocations: E
        } = (0, u.Ay)(d.A.GUILD_ROLE_SUBSCRIPTION_CANCELLATION_MODAL), {
            cancelSubscription: O,
            error: C,
            submitting: x
        } = (e => {
            let [t, n] = i.useState(!1), [r, l] = i.useState(null);
            return {
                cancelSubscription: async t => {
                    try {
                        return n(!0), await c.M2(t, e), !0
                    } catch (e) {
                        l(e)
                    } finally {
                        n(!1)
                    }
                },
                error: r,
                submitting: t
            }
        })(E), S = async () => {
            await O(f.id) && b()
        }, T = l.role_benefits.benefits.filter(e => e.ref_type === m.bN.CHANNEL), I = l.role_benefits.benefits.filter(e => e.ref_type === m.bN.INTANGIBLE), y = s()(f.currentPeriodEnd).format("MMMM Do, YYYY"), N = g.intl.formatToPlainString(g.t.KsMRP5, {
            numChannels: T.length,
            numAdditionalBenefits: I.length,
            subscriptionEndDate: y
        });
        return (0, r.jsx)(a.Modal, {
            transitionState: t,
            "aria-labelledby": h,
            actions: [{
                text: g.intl.string(g.t.EP6EPb),
                variant: "secondary",
                onClick: b
            }, {
                variant: "critical-primary",
                text: g.intl.string(g.t.F6lUDF),
                onClick: S,
                loading: x
            }],
            title: g.intl.string(g.t.O6l5tM),
            subtitle: N,
            onClose: b,
            children: (0, r.jsxs)(o.BJc, {
                gap: 8,
                children: [null != C ? (0, r.jsx)(o.wx6, {
                    type: "critical",
                    children: C.message
                }) : null, (0, r.jsx)(p.x, {
                    listingId: l.id,
                    guildId: n.guild_id,
                    className: A.P
                })]
            })
        })
    },
    b = e => {
        (0, o.qfG)(t => (0, r.jsx)(f, function(e) {
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
        }({}, t, e)))
    }