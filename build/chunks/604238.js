/** Chunk was on web.js **/
/** chunk id: 604238, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    E: () => d,
    e: () => f
}), n(896048);
var r = n(64700),
    i = n(735438),
    a = n(408238),
    o = n(528226),
    s = n(889634),
    l = n(219561),
    c = n(825638),
    u = n(244190);
let d = {
        ContainedHero: o.A,
        BasicHero: e => {
            let {
                bannerSrc: t
            } = e;
            return null
        },
        PromotionalHero: () => null,
        InteractiveHScroll: a.A,
        Grid: s.A,
        Section: c.A,
        ShopProductCard: u.A,
        Stack: l.Kp,
        Text: l.t,
        Heading: l.Oo
    },
    f = e => {
        let {
            overrides: t
        } = e;
        return r.useMemo(() => {
            let e = (0, i.cloneDeep)(d);
            if (null != t)
                for (let [n, r] of Object.entries(t)) null != r && (e[n] = r);
            return e
        }, [t])
    }