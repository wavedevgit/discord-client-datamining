/** chunk id: 935453, original params: e,t,n (module,exports,require) **/
n.d(t, {
    N: () => c
});
var i = n(627968);
n(64700);
var l = n(835245),
    r = n(397927),
    a = n(391048),
    s = n(636099),
    o = n(954571),
    d = n(652215);

function c(e) {
    let {
        guildProductListing: t,
        guildId: c,
        sourceAnalyticsLocations: u
    } = e, _ = !1, m = (0, l.A)(), h = t.id, p = () => {
        _ = !0
    };
    (0, r.mMO)(async () => {
        let {
            default: e
        } = await n.e("41469").then(n.bind(n, 35052));
        return n => (0, i.jsx)(e, {
            ...n,
            applicationId: t.application_id,
            skuId: h,
            sourceAnalyticsLocations: u,
            guildProductContext: {
                guildProductListingId: t.id,
                guildId: c
            },
            loadId: m,
            onComplete: p
        })
    }, {
        onCloseCallback: () => {
            _ || o.default.track(d.HAw.PAYMENT_FLOW_CANCELED, {
                load_id: m,
                payment_type: d.frM[d.VVm.ONE_TIME],
                is_gift: !1,
                sku_id: h,
                location_stack: Array.isArray(u) ? u : [u]
            }), (0, a.ET)(), (0, s.z)()
        },
        onCloseRequest: d.tEg
    })
}