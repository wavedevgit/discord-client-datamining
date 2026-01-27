/** Chunk was on 23321 **/
/** chunk id: 272104, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => h
});
var l = n(627968),
    r = n(64700),
    i = n(503698),
    s = n.n(i),
    a = n(397927),
    o = n(837015),
    c = n(483968),
    u = n(713517),
    d = n(927578),
    p = n(659503),
    m = n(550111),
    x = n(985018),
    g = n(390734);
let A = e => {
        var t;
        let {
            currentUser: n,
            nameplate: i,
            section: o,
            canUsePremiumCollectibles: d,
            isSelected: A,
            onClick: h
        } = e, _ = (0, r.useRef)(null), {
            isHoveringOrFocusing: y
        } = (0, u.A)(_);
        return (0, l.jsxs)(a.DUT, {
            innerRef: _,
            "aria-label": null != (t = i.label) ? t : x.intl.string(x.t.x5CoXR),
            className: g.Hj,
            onClick: h,
            children: [(0, l.jsx)(m.A, {
                nameplate: i,
                user: n,
                showPlaceholderUser: !0,
                isHighlighted: y
            }), (0, l.jsx)("div", {
                className: s()(g.t1, {
                    [g.wH]: A
                })
            }), (0, l.jsx)(c.A, {
                isPurchaseSection: o === p.wn.PURCHASE,
                isPremiumSection: o === p.wn.PREMIUM_PURCHASE,
                canUsePremiumCollectibles: d,
                skuId: i.skuId
            })]
        })
    },
    h = e => {
        let {
            currentUser: t,
            selectedNameplate: n,
            guildId: r,
            onSelect: i,
            onOpenShop: c
        } = e, u = d.Ay.canUseCollectibles(t), m = (0, p.Ay)();
        return (0, l.jsx)(a.d_W, {
            className: g.pf,
            children: m.map(e => (0, l.jsxs)(a.BJc, {
                gap: 4,
                children: [(0, l.jsx)(a.Text, {
                    variant: "text-md/medium",
                    children: e.header
                }), e.section === p.wn.PURCHASE && (0, l.jsxs)("div", {
                    className: g.VQ,
                    children: [(0, l.jsxs)(a.DUT, {
                        className: s()(g.H5, {
                            [g.wH]: null == n
                        }),
                        onClick: () => i(null),
                        children: [(0, l.jsx)(a.KTN, {
                            size: "md",
                            color: "currentColor"
                        }), (0, l.jsx)(a.Text, {
                            variant: "text-xs/normal",
                            children: null != r ? x.intl.string(x.t.CHf9iJ) : x.intl.string(x.t.PoWNfe)
                        })]
                    }), (0, l.jsxs)(a.DUT, {
                        className: g.H5,
                        onClick: c,
                        children: [(0, l.jsx)(a.U1X, {
                            size: "md",
                            color: "currentColor"
                        }), (0, l.jsx)(a.Text, {
                            variant: "text-xs/normal",
                            children: x.intl.string(x.t.pWG4ze)
                        })]
                    })]
                }), (0, l.jsx)("div", {
                    className: g.p_,
                    children: e.items.filter(o.F).map(r => (0, l.jsx)(A, {
                        currentUser: t,
                        nameplate: r,
                        section: e.section,
                        canUsePremiumCollectibles: u,
                        isSelected: (null == n ? void 0 : n.skuId) === r.skuId,
                        onClick: () => i(r)
                    }, r.skuId))
                })]
            }, e.section))
        })
    }