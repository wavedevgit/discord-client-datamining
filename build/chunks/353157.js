/** chunk id: 353157, original params: e,t,r (module,exports,require) **/
r.d(t, {
    A: () => d
});
var n = r(627968);
r(64700);
var i = r(575593),
    l = r(397927),
    s = r(929283),
    o = r(550111),
    a = r(331402),
    u = r(242640),
    c = r(752276);

function d(e) {
    let {
        item: t,
        profileOwner: r,
        isHighlighted: d,
        cardSize: f = u.Y.MEDIUM
    } = e, m = t.collectiblesItem;
    switch (m.type) {
        case i.R.PROFILE_EFFECT:
            return (0, n.jsx)("div", {
                className: c.xC,
                children: (0, n.jsx)(a.A, {
                    skuId: m.skuId,
                    isHighlighted: d,
                    removeSetHeight: !0
                })
            });
        case i.R.AVATAR_DECORATION:
            return (0, n.jsx)("div", {
                className: c._P,
                children: (0, n.jsx)(s.i, {
                    item: m,
                    user: r,
                    isHighlighted: d,
                    avatarSize: l._3J.SIZE_80
                })
            });
        case i.R.NAMEPLATE:
            return (0, n.jsxs)("div", {
                className: c.M4,
                children: [(0, n.jsx)("div", {
                    className: c.Qt,
                    children: (0, n.jsx)(o.A, {
                        user: r,
                        nameplate: m,
                        isHighlighted: d,
                        showPlaceholderUser: !0,
                        showStatus: !0,
                        nameplatePreviewSize: "default",
                        width: f === u.Y.SMALL ? 136 : 200
                    })
                }), (0, n.jsx)("div", {
                    className: c.BM,
                    "aria-hidden": !0,
                    children: (0, n.jsx)(o.A, {
                        user: r,
                        nameplate: m,
                        isHighlighted: d,
                        showPlaceholderUser: !0,
                        showStatus: !0,
                        nameplatePreviewSize: "default",
                        width: f === u.Y.SMALL ? 136 : 200
                    })
                })]
            });
        default:
            return null
    }
}