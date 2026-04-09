/** chunk id: 353157 params = (module,exports,require) **/
i.d(t, {
    A: () => c
});
var r = i(627968);
i(64700);
var l = i(575593),
    n = i(397927),
    s = i(512213),
    u = i(139136),
    o = i(929283),
    a = i(798048),
    d = i(664281);

function c(e) {
    let {
        item: t,
        profileOwner: i,
        isHighlighted: c,
        cardSize: I = a.Y.MEDIUM
    } = e, h = t.collectiblesItem;
    switch (h.type) {
        case l.R.PROFILE_EFFECT:
            return (0, r.jsx)("div", {
                className: d.xC,
                children: (0, r.jsx)(u.A, {
                    skuId: h.skuId,
                    isHighlighted: c,
                    removeSetHeight: !0,
                    hideBackground: !0
                })
            });
        case l.R.AVATAR_DECORATION:
            return (0, r.jsx)("div", {
                className: d._P,
                children: (0, r.jsx)(o.i, {
                    item: h,
                    user: i,
                    isHighlighted: c,
                    avatarSize: I === a.Y.MEDIUM_SQUARE ? n._3J.SIZE_96 : n._3J.SIZE_80
                })
            });
        case l.R.NAMEPLATE:
            return (0, r.jsxs)("div", {
                className: d.M4,
                children: [(0, r.jsx)("div", {
                    className: d.Qt,
                    children: (0, r.jsx)(s.A, {
                        user: i,
                        nameplate: h,
                        isHighlighted: c,
                        showPlaceholderUser: !0,
                        showStatus: !0,
                        nameplatePreviewSize: I === a.Y.MEDIUM_SQUARE ? "small" : "default",
                        width: I === a.Y.MEDIUM_SQUARE ? 171 : I === a.Y.SMALL || I === a.Y.SMALL_SQUARE ? 136 : 200
                    })
                }), (0, r.jsx)("div", {
                    className: d.BM,
                    "aria-hidden": !0,
                    children: (0, r.jsx)(s.A, {
                        user: i,
                        nameplate: h,
                        isHighlighted: c,
                        showPlaceholderUser: !0,
                        showStatus: !0,
                        nameplatePreviewSize: I === a.Y.MEDIUM_SQUARE ? "small" : "default",
                        width: I === a.Y.MEDIUM_SQUARE ? 171 : I === a.Y.SMALL || I === a.Y.SMALL_SQUARE ? 136 : 200
                    })
                })]
            });
        default:
            return null
    }
}