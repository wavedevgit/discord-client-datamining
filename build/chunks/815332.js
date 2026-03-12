/** chunk id: 815332 params = (module,exports,require) **/
n.d(t, {
    A: () => g
});
var i = n(627968),
    s = n(64700),
    l = n(989349),
    a = n.n(l),
    r = n(384904),
    o = n(793574),
    d = n(688810),
    c = n(599941),
    u = n(322092),
    _ = n(985018);

function g(e) {
    let {
        groupListingId: t,
        subscription: n,
        className: l
    } = e, {
        analyticsLocations: g
    } = (0, d.Ay)(o.A.PENDING_PLAN_CHANGE_NOTICE), {
        resetRenewalMutation: m,
        submitting: A,
        error: h
    } = (e => {
        let [t, n] = s.useState(!1), [i, l] = s.useState(null);
        return {
            resetRenewalMutation: async t => {
                n(!0), l(null);
                try {
                    await (0, r.ZK)(t, e)
                } catch (e) {
                    l(e)
                } finally {
                    n(!1)
                }
            },
            submitting: t,
            error: i
        }
    })(g), p = (0, c.cY)(t, {
        includeSoftDeleted: !0
    }), {
        currentListing: x,
        nextListing: E
    } = s.useMemo(() => {
        if (n?.renewalMutations == null) return {
            currentListing: void 0,
            nextListing: void 0
        };
        let e = n.items[0].planId,
            t = n.renewalMutations.items[0].planId;
        return {
            currentListing: p.find(t => t.subscription_plans[0].id === e),
            nextListing: p.find(e => e.subscription_plans[0].id === t)
        }
    }, [n, p]);
    if (null == n || null == x || null == E) return null;
    let T = a()(n.currentPeriodEnd).format("MMM DD, YYYY");
    return (0, i.jsx)(u.A, {
        message: _.intl.format(_.t.chw89X, {
            currentListing: x.name,
            nextListing: E.name,
            changeDate: T
        }),
        error: h?.message,
        onClick: () => m(n),
        submitting: A,
        ctaMessage: _.intl.string(_.t.De4wI8),
        className: l
    })
}