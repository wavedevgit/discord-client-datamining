/** Chunk was on 5606 **/
/** chunk id: 815332, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => _
}), n(896048);
var r = n(627968),
    i = n(64700),
    l = n(989349),
    s = n.n(l),
    a = n(384904),
    o = n(793574),
    c = n(688810),
    d = n(599941),
    u = n(322092),
    p = n(985018);

function _(e) {
    let {
        groupListingId: t,
        subscription: n,
        className: l
    } = e, {
        analyticsLocations: _
    } = (0, c.Ay)(o.A.PENDING_PLAN_CHANGE_NOTICE), {
        resetRenewalMutation: m,
        submitting: g,
        error: f
    } = (e => {
        let [t, n] = i.useState(!1), [r, l] = i.useState(null);
        return {
            resetRenewalMutation: async t => {
                n(!0), l(null);
                try {
                    await (0, a.ZK)(t, e)
                } catch (e) {
                    l(e)
                } finally {
                    n(!1)
                }
            },
            submitting: t,
            error: r
        }
    })(_), b = (0, d.cY)(t, {
        includeSoftDeleted: !0
    }), {
        currentListing: h,
        nextListing: A
    } = i.useMemo(() => {
        if ((null == n ? void 0 : n.renewalMutations) == null) return {
            currentListing: void 0,
            nextListing: void 0
        };
        let e = n.items[0].planId,
            t = n.renewalMutations.items[0].planId;
        return {
            currentListing: b.find(t => t.subscription_plans[0].id === e),
            nextListing: b.find(e => e.subscription_plans[0].id === t)
        }
    }, [n, b]);
    if (null == n || null == h || null == A) return null;
    let E = s()(n.currentPeriodEnd).format("MMM DD, YYYY");
    return (0, r.jsx)(u.A, {
        message: p.intl.format(p.t.chw89X, {
            currentListing: h.name,
            nextListing: A.name,
            changeDate: E
        }),
        error: null == f ? void 0 : f.message,
        onClick: () => m(n),
        submitting: g,
        ctaMessage: p.intl.string(p.t.De4wI8),
        className: l
    })
}