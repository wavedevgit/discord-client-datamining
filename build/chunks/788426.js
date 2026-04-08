/** chunk id: 788426 params = (module,exports,require) **/
n.d(t, {
    A: () => E
});
var r = n(627968),
    i = n(64700),
    s = n(503698),
    l = n.n(s),
    a = n(397927),
    c = n(927578),
    o = n(203632),
    d = n(181774),
    u = n(483968),
    m = n(496867),
    f = n(369742),
    p = n(985018),
    x = n(661170),
    g = n(423393);
let A = () => 80,
    h = e => {
        let {
            children: t,
            className: n,
            isSelected: i,
            ...s
        } = e;
        return (0, r.jsx)(a.DUT, {
            "aria-pressed": i,
            className: l()(x.BP, n, {
                [x.wH]: i
            }),
            ...s,
            onClick: s.onSelect,
            children: t
        })
    },
    _ = e => {
        let {
            profileEffect: t,
            innerRef: n,
            section: s,
            isSelected: l,
            canUsePremiumCollectibles: a,
            ...c
        } = e, o = (0, m.V)(t.skuId), p = i.useRef(null), {
            accessibilityLabel: A,
            thumbnailPreviewSrc: _,
            title: E
        } = o?.config ?? {}, C = i.useMemo(() => (0, d.Rc)(_), [_]);
        return (0, r.jsxs)(h, {
            innerRef: n ?? p,
            isSelected: l,
            ...c,
            children: [(0, r.jsx)("img", {
                src: g.A,
                alt: A,
                className: x.rQ
            }), (0, r.jsx)("img", {
                className: x.Wv,
                src: C,
                alt: E
            }), (0, r.jsx)(u.A, {
                skuId: t.skuId,
                canUsePremiumCollectibles: a,
                isPurchaseSection: s === f.wn.PURCHASE,
                isPremiumSection: s === f.wn.PREMIUM_PURCHASE
            })]
        })
    },
    E = e => {
        let {
            user: t,
            guild: n,
            pendingProfileEffect: i,
            selectedProfileEffectRef: s,
            onSelect: l,
            onOpenShop: d
        } = e, u = (0, f.Ay)(), m = null != i, g = c.Ay.canUseCollectibles(t);
        return (0, r.jsx)("section", {
            className: x.uW,
            children: (0, r.jsx)(a.a0_, {
                fade: !0,
                itemGutter: 12,
                sectionGutter: 16,
                paddingVertical: 0,
                paddingHorizontal: 12,
                className: x.p_,
                columns: 3,
                sections: u.map(e => {
                    let {
                        items: t
                    } = e;
                    return t.length
                }),
                renderItem: (e, t, c, A) => {
                    let {
                        section: E,
                        items: C
                    } = u[e], j = C[t];
                    if (j === f.dP) return (0, r.jsxs)(h, {
                        style: {
                            ...c
                        },
                        isSelected: !m,
                        onSelect: () => l(null),
                        children: [(0, r.jsx)(a.KTN, {
                            size: "md",
                            color: "currentColor",
                            className: x.vo
                        }), (0, r.jsx)(a.Text, {
                            variant: "text-xs/normal",
                            color: "text-strong",
                            children: null != n ? p.intl.string(p.t.CHf9iJ) : p.intl.string(p.t.PoWNfe)
                        })]
                    }, A);
                    if (j === f.ZK) return (0, r.jsxs)(h, {
                        style: c,
                        onSelect: d,
                        children: [(0, r.jsx)(a.U1X, {
                            size: "custom",
                            width: 23,
                            height: 23,
                            color: "currentColor",
                            className: x.sV
                        }), (0, r.jsx)(a.Text, {
                            variant: "text-xs/normal",
                            color: "text-strong",
                            children: p.intl.string(p.t.pWG4ze)
                        })]
                    }, A);
                    if ((0, o.C)(j)) {
                        let e = i?.skuId === j.skuId;
                        return (0, r.jsx)(_, {
                            style: {
                                ...c
                            },
                            section: E,
                            profileEffect: j,
                            innerRef: e ? s : void 0,
                            isSelected: e,
                            onSelect: () => l(j),
                            canUsePremiumCollectibles: g
                        }, A)
                    }
                    return null
                },
                renderSection: (e, t) => {
                    let {
                        header: n
                    } = u[e];
                    return (0, r.jsx)("div", {
                        style: {
                            ...t,
                            height: "16px",
                            position: "absolute"
                        },
                        children: (0, r.jsx)(a.Heading, {
                            variant: "heading-md/medium",
                            children: n
                        })
                    })
                },
                getSectionHeight: () => 16,
                getItemKey: (e, t) => u[e].items[t].skuId,
                getItemHeight: A,
                removeEdgeItemGutters: !0
            })
        })
    }