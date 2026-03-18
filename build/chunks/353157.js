/** chunk id: 353157 params = (module,exports,require) **/
i.d(t, {
    A: () => c
});
var r = i(627968);
i(64700);
var l = i(575593),
    n = i(397927),
    s = i(929283),
    u = i(550111),
    a = i(331402),
    o = i(798048),
    d = i(752276);

function c(e) {
    let {
        item: t,
        profileOwner: i,
        isHighlighted: c,
        cardSize: h = o.Y.MEDIUM
    } = e, I = t.collectiblesItem;
    switch (I.type) {
        case l.R.PROFILE_EFFECT:
            return (0, r.jsx)("div", {
                className: d.xC,
                children: (0, r.jsx)(a.A, {
                    skuId: I.skuId,
                    isHighlighted: c,
                    removeSetHeight: !0,
                    hideBackground: !0
                })
            });
        case l.R.AVATAR_DECORATION:
            return (0, r.jsx)("div", {
                className: d._P,
                children: (0, r.jsx)(s.i, {
                    item: I,
                    user: i,
                    isHighlighted: c,
                    avatarSize: h === o.Y.MEDIUM_SQUARE ? n._3J.SIZE_96 : n._3J.SIZE_80
                })
            });
        case l.R.NAMEPLATE:
            return (0, r.jsxs)("div", {
                className: d.M4,
                children: [(0, r.jsx)("div", {
                    className: d.Qt,
                    children: (0, r.jsx)(u.A, {
                        user: i,
                        nameplate: I,
                        isHighlighted: c,
                        showPlaceholderUser: !0,
                        showStatus: !0,
                        nameplatePreviewSize: h === o.Y.MEDIUM_SQUARE ? "small" : "default",
                        width: h === o.Y.MEDIUM_SQUARE ? 171 : h === o.Y.SMALL || h === o.Y.SMALL_SQUARE ? 136 : 200
                    })
                }), (0, r.jsx)("div", {
                    className: d.BM,
                    "aria-hidden": !0,
                    children: (0, r.jsx)(u.A, {
                        user: i,
                        nameplate: I,
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