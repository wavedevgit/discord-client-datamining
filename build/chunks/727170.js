/** chunk id: 727170, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => f
});
var r = n(64700),
    i = n(575593),
    a = n(417597),
    o = n(954571),
    s = n(590180),
    l = n(993408),
    c = n(652215),
    u = n(788868);
let d = {
        [i.R.AVATAR_DECORATION]: u.Ae.AVATAR_DECORATION,
        [i.R.PROFILE_EFFECT]: u.Ae.PROFILE_EFFECT,
        [i.R.NAMEPLATE]: void 0,
        [i.R.NONE]: void 0,
        [i.R.BUNDLE]: void 0,
        [i.R.VARIANTS_GROUP]: void 0,
        [i.R.EXTERNAL_SKU]: void 0
    },
    f = e => {
        let t = (0, a.bG)([s.A], () => s.A.products);
        return (0, r.useCallback)(n => {
            let {
                type: r,
                skuId: i
            } = n, a = t.get(i);
            o.default.track(c.HAw.PREMIUM_FEATURE_TRY_OUT, {
                feature_name: d[r],
                feature_tier: (0, l.G0)(a) ? u.tz.FREE : u.tz.PREMIUM_STANDARD,
                feature_selection: null == a ? void 0 : a.name,
                location_stack: e
            })
        }, [t, e])
    }