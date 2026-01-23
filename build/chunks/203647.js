/** Chunk was on 38663 **/
/** chunk id: 203647, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => _
});
var r = n(627968),
    l = n(64700),
    i = n(688807),
    a = n(311907),
    o = n(459192),
    s = n(990078),
    c = n(808247),
    u = n(107563),
    d = n(840411),
    f = n(594832),
    p = n(46537),
    g = n(287809),
    m = n(622543),
    b = n(451395),
    y = n(823016),
    O = n(18983),
    j = n(985018),
    x = n(935915);

function h(e) {
    let {
        item: t,
        index: n,
        wishlistId: l,
        onReorder: i,
        children: a
    } = e, {
        manageFocusOnReorder: o
    } = (0, y.r)();
    return (0, r.jsx)(b.mG, {
        index: n,
        itemId: String(t.skuId),
        listType: String(l),
        itemType: "WISHLIST_ITEM",
        itemPreviewProps: {
            item: t
        },
        "aria-label": j.intl.formatToPlainString(j.t["7SnyMA"], {
            positionNumber: n + 1
        }),
        onReorder: i,
        onEnd: () => o(String(t.skuId)),
        className: x.C,
        dropBeforeClassName: x.A,
        dropAfterClassName: x.Ze,
        draggingClassName: x.Id,
        children: (0, r.jsx)("div", {
            className: x.An,
            children: a
        })
    })
}
let v = l.memo(function(e) {
    let {
        item: t,
        index: n,
        profileOwner: l,
        isOwner: i,
        wishlistId: a,
        tooltipConfig: c,
        isDragging: u,
        onReorder: d
    } = e, {
        registerDragHandleRef: p
    } = (0, y.r)(), g = i ? (0, r.jsx)(b.jV, {
        buttonRef: p(String(t.skuId)),
        className: x.BU,
        onFocus: e => e.stopPropagation()
    }) : void 0, m = (0, r.jsx)(O.A, {
        item: t,
        profileOwner: l,
        wishlistId: a,
        isOwner: i,
        isDragging: u,
        dragHandle: g
    }), j = m;
    if (c.shouldShow && !u)
        if (null != c.title && null == c.body && null == c.renderIcon) j = (0, r.jsx)(s.m, {
            text: c.title,
            position: "top",
            asContainer: !0,
            delay: f.Zh,
            children: m
        });
        else {
            var v, _;
            j = (0, r.jsx)(o.u, {
                title: c.title,
                body: null != (v = c.body) ? v : "",
                asset: null == (_ = c.renderIcon) ? void 0 : _.call(c, t),
                assetSize: f.Q8,
                position: "top",
                asContainer: !0,
                delay: f.Zh,
                children: m
            })
        } return i ? (0, r.jsx)("li", {
        children: (0, r.jsx)(h, {
            item: t,
            index: n,
            wishlistId: a,
            onReorder: d,
            children: j
        })
    }) : (0, r.jsx)("li", {
        children: j
    })
});

function _(e) {
    let {
        items: t,
        profileOwner: n,
        isOwner: o
    } = e, s = g.default.getCurrentUser(), {
        defaultWishlistId: f
    } = (0, a.cf)([m.A], () => ({
        defaultWishlistId: m.A.getFirstWishlistId(n.id)
    })), b = (0, p.u)(t, o), {
        isDragging: O
    } = (0, i.V)(e => ({
        isDragging: e.isDragging()
    })), j = l.useCallback((e, n) => {
        if (e === n || null == f || 0 === t.length || e < 0 || e >= t.length || n < 0 || n >= t.length) return;
        let r = u.A.getWishlist(f);
        if (null == r) return;
        let l = t[e],
            {
                newWishlistData: i,
                previousSkuId: a,
                nextSkuId: o
            } = (0, d.A)(r, t, e, n);
        c.A.reorderWishlistItem(f, l.skuId, {
            previousSkuId: a,
            nextSkuId: o,
            newWishlistData: i
        })
    }, [f, t]);
    if (null == s || null == f) return null;
    let h = (0, r.jsx)("ul", {
        className: x.Vg,
        children: t.map((e, t) => (0, r.jsx)(v, {
            item: e,
            index: t,
            profileOwner: n,
            isOwner: o,
            wishlistId: f,
            tooltipConfig: b[t],
            isDragging: O,
            onReorder: j
        }, e.skuId))
    });
    return o ? (0, r.jsx)(y.B, {
        emptyListFallbackRef: null,
        children: h
    }) : h
}