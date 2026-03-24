/** chunk id: 815332 params = (module,exports,require) **/
n.d(t, {
    A: () => _
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
    m = n(985018);

function _(e) {
    let {
        groupListingId: t,
        subscription: n,
        className: l
    } = e, {
        analyticsLocations: _
    } = (0, d.Ay)(o.A.PENDING_PLAN_CHANGE_NOTICE), {
        resetRenewalMutation: g,
        submitting: x,
        error: A
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
    })(_), h = (0, c.cY)(t, {
        includeSoftDeleted: !0
    }), {
        currentListing: p,
        nextListing: f
    } = s.useMemo(() => {
        if (n?.renewalMutations == null) return {
            currentListing: void 0,
            nextListing: void 0
        };
        let e = n.items[0].planId,
            t = n.renewalMutations.items[0].planId;
        return {
            currentListing: h.find(t => t.subscription_plans[0].id === e),
            nextListing: h.find(e => e.subscription_plans[0].id === t)
        }
    }, [n, h]);
    if (null == n || null == p || null == f) return null;
    let T = a()(n.currentPeriodEnd).format("MMM DD, YYYY");
    return (0, i.jsx)(u.A, {
        message: m.intl.format(m.t.chw89X, {
            currentListing: p.name,
            nextListing: f.name,
            changeDate: T
        }),
        error: A?.message,
        onClick: () => g(n),
        submitting: x,
        ctaMessage: m.intl.string(m.t.De4wI8),
        className: l
    })
}