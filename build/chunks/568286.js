/** Chunk was on 5606 **/
/** chunk id: 568286, original params: e,t,n (module,exports,require) **/
n.d(t, {
    q: () => h
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
    p = n(915089),
    _ = n(250253),
    m = n(2242),
    g = n(985018),
    f = n(289324);
let b = e => {
        let {
            transitionState: t,
            groupListing: n,
            listing: l,
            subscription: b,
            onClose: h
        } = e, A = (0, p.GV)(), {
            analyticsLocations: E
        } = (0, u.Ay)(d.A.GUILD_ROLE_SUBSCRIPTION_CANCELLATION_MODAL), {
            cancelSubscription: x,
            error: O,
            submitting: C
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
        })(E), y = async () => {
            await x(b.id) && h()
        }, j = l.role_benefits.benefits.filter(e => e.ref_type === m.bN.CHANNEL), T = l.role_benefits.benefits.filter(e => e.ref_type === m.bN.INTANGIBLE), v = s()(b.currentPeriodEnd).format("MMMM Do, YYYY"), S = g.intl.formatToPlainString(g.t.KsMRP5, {
            numChannels: j.length,
            numAdditionalBenefits: T.length,
            subscriptionEndDate: v
        });
        return (0, r.jsx)(a.Modal, {
            transitionState: t,
            "aria-labelledby": A,
            actions: [{
                text: g.intl.string(g.t.EP6EPb),
                variant: "secondary",
                onClick: h
            }, {
                variant: "critical-primary",
                text: g.intl.string(g.t.F6lUDF),
                onClick: y,
                loading: C
            }],
            title: g.intl.string(g.t.O6l5tM),
            subtitle: S,
            onClose: h,
            children: (0, r.jsxs)(o.BJc, {
                gap: 8,
                children: [null != O ? (0, r.jsx)(o.wx6, {
                    type: "critical",
                    children: O.message
                }) : null, (0, r.jsx)(_.x, {
                    listingId: l.id,
                    guildId: n.guild_id,
                    className: f.P
                })]
            })
        })
    },
    h = e => {
        (0, o.qfG)(t => (0, r.jsx)(b, function(e) {
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