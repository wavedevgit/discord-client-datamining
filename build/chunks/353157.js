/** chunk id: 353157, original params: e,t,i (module,exports,require) **/
i.d(t, {
    A: () => c
});
var r = i(627968);
i(64700);
var l = i(575593),
    s = i(397927),
    n = i(929283),
    u = i(550111),
    a = i(331402),
    d = i(798048),
    o = i(975462);

function c(e) {
    let {
        item: t,
        profileOwner: i,
        isHighlighted: c,
        cardSize: I = d.Y.MEDIUM
    } = e, h = t.collectiblesItem;
    switch (h.type) {
        case l.R.PROFILE_EFFECT:
            return (0, r.jsx)("div", {
                className: o.xC,
                children: (0, r.jsx)(a.A, {
                    skuId: h.skuId,
                    isHighlighted: c,
                    removeSetHeight: !0,
                    hideBackground: !0
                })
            });
        case l.R.AVATAR_DECORATION:
            return (0, r.jsx)("div", {
                className: o._P,
                children: (0, r.jsx)(n.i, {
                    item: h,
                    user: i,
                    isHighlighted: c,
                    avatarSize: I === d.Y.MEDIUM_SQUARE ? s._3J.SIZE_96 : s._3J.SIZE_80
                })
            });
        case l.R.NAMEPLATE:
            return (0, r.jsxs)("div", {
                className: o.M4,
                children: [(0, r.jsx)("div", {
                    className: o.Qt,
                    children: (0, r.jsx)(u.A, {
                        user: i,
                        nameplate: h,
                        isHighlighted: c,
                        showPlaceholderUser: !0,
                        showStatus: !0,
                        nameplatePreviewSize: I === d.Y.MEDIUM_SQUARE ? "small" : "default",
                        width: I === d.Y.MEDIUM_SQUARE ? 171 : I === d.Y.SMALL || I === d.Y.SMALL_SQUARE ? 136 : 200
                    })
                }), (0, r.jsx)("div", {
                    className: o.BM,
                    "aria-hidden": !0,
                    children: (0, r.jsx)(u.A, {
                        user: i,
                        nameplate: h,
                        isHighlighted: c,
                        showPlaceholderUser: !0,
                        showStatus: !0,
                        nameplatePreviewSize: I === d.Y.MEDIUM_SQUARE ? "small" : "default",
                        width: I === d.Y.MEDIUM_SQUARE ? 171 : I === d.Y.SMALL || I === d.Y.SMALL_SQUARE ? 136 : 200
                    })
                })]
            });
        default:
            return null
    }
}