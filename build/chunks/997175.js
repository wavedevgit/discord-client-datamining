/** chunk id: 997175 params = (module,exports,require) **/
l.d(t, {
    A: () => c
});
var r = l(627968),
    n = l(64700),
    i = l(575593),
    o = l(751304),
    a = l(561769),
    s = l(684910),
    d = l(970488);
let c = e => {
    let {
        productId: t,
        auto: l,
        columns: c,
        rows: u
    } = e, {
        product: h
    } = (0, s.A)({
        productId: t,
        includePricing: !0
    }), m = n.useMemo(() => h?.toCollectiblesProduct(), [h]);
    if (null == m) return null;
    if (m.type === i.R.BUNDLE) {
        let e = l ? 2 : c,
            t = l ? 1 : u,
            n = `${e}/${t}`;
        return (0, r.jsx)(a.v3.Provider, {
            value: {
                productOverride: m
            },
            children: (0, r.jsx)(d.A, {
                columns: e,
                rows: t,
                children: (0, r.jsx)(o.A, {
                    skuId: m.skuId,
                    aspectRatio: n
                })
            })
        })
    }
    if (m.type === i.R.PROFILE_EFFECT) {
        let e = l ? 1 : c,
            t = l ? 2 : u,
            n = `${e}/${t}`;
        return (0, r.jsx)(a.v3.Provider, {
            value: {
                productOverride: m
            },
            children: (0, r.jsx)(d.A, {
                columns: e,
                rows: t,
                children: (0, r.jsx)(o.A, {
                    skuId: m.skuId,
                    aspectRatio: n
                })
            })
        })
    }
    return l ? (0, r.jsx)(a.v3.Provider, {
        value: {
            productOverride: m
        },
        children: (0, r.jsx)(o.A, {
            skuId: m.skuId,
            aspectRatio: "1/1"
        })
    }) : (0, r.jsx)(a.v3.Provider, {
        value: {
            productOverride: m
        },
        children: (0, r.jsx)(d.A, {
            columns: c,
            rows: u,
            children: (0, r.jsx)(o.A, {
                skuId: m.skuId,
                aspectRatio: `${c}/${u}`
            })
        })
    })
}