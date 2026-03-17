/** chunk id: 702755 params = (module,exports,require) **/
l.d(t, {
    A: () => c
});
var r = l(627968),
    n = l(64700),
    i = l(575593),
    o = l(674658),
    a = l(751304),
    s = l(561769),
    d = l(970488);
let c = e => {
    let {
        skuId: t,
        auto: l,
        columns: c,
        rows: u
    } = e, {
        product: h
    } = (0, o.q)(t, !0), m = n.useContext(s.v3);
    if (null == h) return null;
    let {
        flattenProductVariants: p,
        ..._
    } = m;
    if (h.type === i.R.BUNDLE) {
        let e = l ? 2 : c,
            n = l ? 1 : u,
            i = `${e}/${n}`;
        return (0, r.jsx)(s.v3.Provider, {
            value: {
                flattenProductVariants: p ?? !0,
                ..._
            },
            children: (0, r.jsx)(d.A, {
                columns: e,
                rows: n,
                children: (0, r.jsx)(a.A, {
                    skuId: t,
                    aspectRatio: i
                })
            })
        })
    }
    if (h.type === i.R.PROFILE_EFFECT) {
        let e = l ? 1 : c,
            n = l ? 2 : u,
            i = `${e}/${n}`;
        return (0, r.jsx)(s.v3.Provider, {
            value: {
                flattenProductVariants: p ?? !0,
                ..._
            },
            children: (0, r.jsx)(d.A, {
                columns: e,
                rows: n,
                children: (0, r.jsx)(a.A, {
                    skuId: t,
                    aspectRatio: i
                })
            })
        })
    }
    return l ? (0, r.jsx)(s.v3.Provider, {
        value: {
            flattenProductVariants: p ?? !0,
            ..._
        },
        children: (0, r.jsx)(a.A, {
            skuId: t,
            aspectRatio: "1/1"
        })
    }) : (0, r.jsx)(s.v3.Provider, {
        value: {
            flattenProductVariants: p ?? !0,
            ..._
        },
        children: (0, r.jsx)(d.A, {
            columns: c,
            rows: u,
            children: (0, r.jsx)(a.A, {
                skuId: t,
                aspectRatio: `${c}/${u}`
            })
        })
    })
}