/** Chunk was on 92818 **/
/** chunk id: 307560, original params: e,t,r (module,exports,require) **/
r.d(t, {
    A: () => v
});
var n = r(627968),
    l = r(64700),
    i = r(503698),
    s = r.n(i),
    o = r(397927),
    c = r(203632),
    a = r(181774),
    u = r(483968),
    d = r(927578),
    p = r(262737),
    f = r(176448),
    m = r(985018),
    g = r(55886),
    y = r(191761);

function b(e) {
    for (var t = 1; t < arguments.length; t++) {
        var r = null != arguments[t] ? arguments[t] : {},
            n = Object.keys(r);
        "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter(function(e) {
            return Object.getOwnPropertyDescriptor(r, e).enumerable
        }))), n.forEach(function(t) {
            var n;
            n = r[t], t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n
        })
    }
    return e
}

function O(e, t) {
    return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
            var n = Object.getOwnPropertySymbols(e);
            r.push.apply(r, n)
        }
        return r
    })(Object(t)).forEach(function(r) {
        Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r))
    }), e
}

function h(e, t) {
    if (null == e) return {};
    var r, n, l, i = {};
    if ("u" > typeof Reflect && Reflect.ownKeys) {
        for (l = 0, r = Reflect.ownKeys(e); l < r.length; l++) n = r[l], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
        return i
    }
    if (i = function(e, t) {
            if (null == e) return {};
            var r, n, l = {},
                i = Object.getOwnPropertyNames(e);
            for (n = 0; n < i.length; n++) r = i[n], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (l[r] = e[r]);
            return l
        }(e, t), Object.getOwnPropertySymbols)
        for (l = 0, r = Object.getOwnPropertySymbols(e); l < r.length; l++) n = r[l], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    return i
}
let x = () => 80,
    j = e => {
        let {
            children: t,
            className: r,
            isSelected: l = !1
        } = e, i = h(e, ["children", "className", "isSelected"]);
        return (0, n.jsx)(o.DUT, O(b({
            className: s()(g.BP, r, {
                [g.wH]: l
            })
        }, i), {
            onClick: i.onSelect,
            children: t
        }))
    },
    A = e => {
        var t;
        let {
            profileEffect: r,
            innerRef: i,
            section: s,
            isSelected: o,
            canUsePremiumCollectibles: c
        } = e, d = h(e, ["profileEffect", "innerRef", "section", "isSelected", "canUsePremiumCollectibles"]), m = (0, p.V)(r.skuId), x = l.useRef(null), {
            accessibilityLabel: A,
            thumbnailPreviewSrc: v,
            title: P
        } = null != (t = null == m ? void 0 : m.config) ? t : {}, _ = l.useMemo(() => (0, a.Rc)(v), [v]);
        return (0, n.jsxs)(j, O(b({
            innerRef: null != i ? i : x,
            isSelected: o
        }, d), {
            children: [(0, n.jsx)("img", {
                src: y,
                alt: A,
                className: g.rQ
            }), (0, n.jsx)("img", {
                className: g.Wv,
                src: _,
                alt: P
            }), (0, n.jsx)(u.A, {
                skuId: r.skuId,
                canUsePremiumCollectibles: c,
                isPurchaseSection: s === f.wn.PURCHASE,
                isPremiumSection: s === f.wn.PREMIUM_PURCHASE
            })]
        }))
    },
    v = e => {
        let {
            user: t,
            guild: r,
            pendingProfileEffect: l,
            selectedProfileEffectRef: i,
            onSelect: s,
            onOpenShop: a
        } = e, u = (0, f.Ay)(), p = null != l, y = d.Ay.canUseCollectibles(t);
        return (0, n.jsx)("section", {
            className: g.uW,
            children: (0, n.jsx)(o.a0_, {
                fade: !0,
                itemGutter: 12,
                sectionGutter: 16,
                paddingVertical: 0,
                paddingHorizontal: 12,
                className: g.p_,
                columns: 3,
                sections: u.map(e => {
                    let {
                        items: t
                    } = e;
                    return t.length
                }),
                renderItem: (e, t, d, O) => {
                    let {
                        section: h,
                        items: x
                    } = u[e], v = x[t];
                    if (v === f.dP) return (0, n.jsxs)(j, {
                        style: b({}, d),
                        isSelected: !p,
                        onSelect: () => s(null),
                        children: [(0, n.jsx)(o.KTN, {
                            size: "md",
                            color: "currentColor",
                            className: g.vo
                        }), (0, n.jsx)(o.Text, {
                            variant: "text-xs/normal",
                            color: "text-strong",
                            children: null != r ? m.intl.string(m.t.CHf9iJ) : m.intl.string(m.t.PoWNfe)
                        })]
                    }, O);
                    if (v === f.ZK) return (0, n.jsxs)(j, {
                        style: d,
                        onSelect: a,
                        children: [(0, n.jsx)(o.U1X, {
                            size: "custom",
                            width: 23,
                            height: 23,
                            color: "currentColor",
                            className: g.sV
                        }), (0, n.jsx)(o.Text, {
                            variant: "text-xs/normal",
                            color: "text-strong",
                            children: m.intl.string(m.t.pWG4ze)
                        })]
                    }, O);
                    if ((0, c.C)(v)) {
                        let e = (null == l ? void 0 : l.skuId) === v.skuId;
                        return (0, n.jsx)(A, {
                            style: b({}, d),
                            section: h,
                            profileEffect: v,
                            innerRef: e ? i : void 0,
                            isSelected: e,
                            onSelect: () => s(v),
                            canUsePremiumCollectibles: y
                        }, O)
                    }
                    return null
                },
                renderSection: (e, t) => {
                    let {
                        header: r
                    } = u[e];
                    return (0, n.jsx)("div", {
                        style: O(b({}, t), {
                            height: "".concat(16, "px"),
                            position: "absolute"
                        }),
                        children: (0, n.jsx)(o.Heading, {
                            variant: "heading-md/medium",
                            children: r
                        })
                    })
                },
                getSectionHeight: () => 16,
                getItemKey: (e, t) => u[e].items[t].skuId,
                getItemHeight: x,
                removeEdgeItemGutters: !0
            })
        })
    }