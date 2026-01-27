/** Chunk was on 78870 **/
/** chunk id: 422373, original params: e,t,r (module,exports,require) **/
r.d(t, {
    A: () => j
});
var n = r(627968);
r(64700);
var i = r(300233),
    o = r(599941),
    l = r(922975),
    s = r(700206),
    c = r(815332),
    a = r(456540),
    d = r(136179),
    u = r(250253),
    p = r(652215),
    f = r(235201);

function C(e) {
    var t;
    let {
        guildId: r
    } = e, i = (0, o.uk)(r)[0], {
        editStateIds: C
    } = l.d0(null != (t = null == i ? void 0 : i.id) ? t : null, r), {
        activeSubscription: j
    } = (0, s.A)(null == i ? void 0 : i.id);
    return (0, n.jsxs)("div", {
        className: f.k,
        children: [null != i ? (0, n.jsx)(c.A, {
            groupListingId: i.id,
            subscription: j
        }) : null, (0, n.jsx)(a.A, {
            subscription: j
        }), (0, n.jsx)(d.A, {
            guildId: r,
            children: C.map(e => {
                var t;
                return (0, n.jsx)(u.A, {
                    guildId: r,
                    groupListingId: null != (t = null == i ? void 0 : i.id) ? t : "",
                    listingId: e,
                    analyticsLocation: p.ThZ.ROLE_SUBSCRIPTIONS_TAB
                }, e)
            })
        })]
    })
}

function j(e) {
    let {
        guildId: t
    } = e;
    return (0, n.jsx)(i.H, {
        guildId: t,
        refetchOnMount: !0,
        children: (0, n.jsx)(C, {
            guildId: t
        })
    })
}