/** chunk id: 702755 params = (module,exports,require) **/
r.d(t, {
    A: () => o
});
var l = r(627968),
    n = r(64700),
    a = r(575593),
    s = r(674658),
    c = r(751304),
    i = r(561769),
    d = r(970488);
let o = e => {
    let {
        skuId: t,
        auto: r,
        columns: o,
        rows: u
    } = e, {
        product: m
    } = (0, s.q)(t, !0), h = n.useContext(i.v3);
    if (null == m) return null;
    let {
        flattenProductVariants: p,
        ...A
    } = h;
    if (m.type === a.R.BUNDLE) {
        let e = r ? 2 : o,
            n = r ? 1 : u,
            a = `${e}/${n}`;
        return (0, l.jsx)(i.v3.Provider, {
            value: {
                flattenProductVariants: p ?? !0,
                ...A
            },
            children: (0, l.jsx)(d.A, {
                columns: e,
                rows: n,
                children: (0, l.jsx)(c.A, {
                    skuId: t,
                    aspectRatio: a
                })
            })
        })
    }
    if (m.type === a.R.PROFILE_EFFECT) {
        let e = r ? 1 : o,
            n = r ? 2 : u,
            a = `${e}/${n}`;
        return (0, l.jsx)(i.v3.Provider, {
            value: {
                flattenProductVariants: p ?? !0,
                ...A
            },
            children: (0, l.jsx)(d.A, {
                columns: e,
                rows: n,
                children: (0, l.jsx)(c.A, {
                    skuId: t,
                    aspectRatio: a
                })
            })
        })
    }
    return r ? (0, l.jsx)(i.v3.Provider, {
        value: {
            flattenProductVariants: p ?? !0,
            ...A
        },
        children: (0, l.jsx)(c.A, {
            skuId: t,
            aspectRatio: "1/1"
        })
    }) : (0, l.jsx)(i.v3.Provider, {
        value: {
            flattenProductVariants: p ?? !0,
            ...A
        },
        children: (0, l.jsx)(d.A, {
            columns: o,
            rows: u,
            children: (0, l.jsx)(c.A, {
                skuId: t,
                aspectRatio: `${o}/${u}`
            })
        })
    })
}