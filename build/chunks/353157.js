/** chunk id: 353157, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => d
});
var r = n(627968);
n(64700);
var l = n(575593),
    i = n(397927),
    s = n(929283),
    a = n(550111),
    o = n(331402),
    c = n(242640),
    u = n(752276);

function d(e) {
    let {
        item: t,
        profileOwner: n,
        isHighlighted: d,
        cardSize: h = c.Y.MEDIUM
    } = e, p = t.collectiblesItem;
    switch (p.type) {
        case l.R.PROFILE_EFFECT:
            return (0, r.jsx)("div", {
                className: u.xC,
                children: (0, r.jsx)(o.A, {
                    skuId: p.skuId,
                    isHighlighted: d,
                    removeSetHeight: !0
                })
            });
        case l.R.AVATAR_DECORATION:
            return (0, r.jsx)("div", {
                className: u._P,
                children: (0, r.jsx)(s.i, {
                    item: p,
                    user: n,
                    isHighlighted: d,
                    avatarSize: i._3J.SIZE_80
                })
            });
        case l.R.NAMEPLATE:
            return (0, r.jsxs)("div", {
                className: u.M4,
                children: [(0, r.jsx)("div", {
                    className: u.Qt,
                    children: (0, r.jsx)(a.A, {
                        user: n,
                        nameplate: p,
                        isHighlighted: d,
                        showPlaceholderUser: !0,
                        showStatus: !0,
                        nameplatePreviewSize: "default",
                        width: h === c.Y.SMALL ? 136 : 200
                    })
                }), (0, r.jsx)("div", {
                    className: u.BM,
                    "aria-hidden": !0,
                    children: (0, r.jsx)(a.A, {
                        user: n,
                        nameplate: p,
                        isHighlighted: d,
                        showPlaceholderUser: !0,
                        showStatus: !0,
                        nameplatePreviewSize: "default",
                        width: h === c.Y.SMALL ? 136 : 200
                    })
                })]
            });
        default:
            return null
    }
}