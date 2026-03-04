/** chunk id: 353157, original params: e,t,l (module,exports,require) **/
l.d(t, {
    A: () => c
});
var n = l(627968);
l(64700);
var r = l(575593),
    a = l(397927),
    i = l(929283),
    s = l(550111),
    u = l(331402),
    o = l(798048),
    d = l(752276);

function c(e) {
    let {
        item: t,
        profileOwner: l,
        isHighlighted: c,
        cardSize: h = o.Y.MEDIUM
    } = e, A = t.collectiblesItem;
    switch (A.type) {
        case r.R.PROFILE_EFFECT:
            return (0, n.jsx)("div", {
                className: d.xC,
                children: (0, n.jsx)(u.A, {
                    skuId: A.skuId,
                    isHighlighted: c,
                    removeSetHeight: !0,
                    hideBackground: !0
                })
            });
        case r.R.AVATAR_DECORATION:
            return (0, n.jsx)("div", {
                className: d._P,
                children: (0, n.jsx)(i.i, {
                    item: A,
                    user: l,
                    isHighlighted: c,
                    avatarSize: h === o.Y.MEDIUM_SQUARE ? a._3J.SIZE_96 : a._3J.SIZE_80
                })
            });
        case r.R.NAMEPLATE:
            return (0, n.jsxs)("div", {
                className: d.M4,
                children: [(0, n.jsx)("div", {
                    className: d.Qt,
                    children: (0, n.jsx)(s.A, {
                        user: l,
                        nameplate: A,
                        isHighlighted: c,
                        showPlaceholderUser: !0,
                        showStatus: !0,
                        nameplatePreviewSize: h === o.Y.MEDIUM_SQUARE ? "small" : "default",
                        width: h === o.Y.MEDIUM_SQUARE ? 171 : h === o.Y.SMALL || h === o.Y.SMALL_SQUARE ? 136 : 200
                    })
                }), (0, n.jsx)("div", {
                    className: d.BM,
                    "aria-hidden": !0,
                    children: (0, n.jsx)(s.A, {
                        user: l,
                        nameplate: A,
                        isHighlighted: c,
                        showPlaceholderUser: !0,
                        showStatus: !0,
                        nameplatePreviewSize: h === o.Y.MEDIUM_SQUARE ? "small" : "default",
                        width: h === o.Y.MEDIUM_SQUARE ? 171 : h === o.Y.SMALL || h === o.Y.SMALL_SQUARE ? 136 : 200
                    })
                })]
            });
        default:
            return null
    }
}