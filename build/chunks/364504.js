/** chunk id: 364504 params = (module,exports,require) **/
n.d(t, {
    A: () => x
});
var a = n(627968),
    i = n(158954),
    l = n(793574),
    s = n(688810),
    r = n(687173),
    o = n(770983),
    d = n(871123),
    c = n(44724),
    u = n(985018),
    m = n(642892);

function h() {
    (0, c.default)({
        guildId: (0, d.zf)()
    })
}

function x(e) {
    let {
        profileUserId: t,
        handleOpenUserProfileModal: n,
        markAsDismissed: d
    } = e, {
        analyticsLocations: c
    } = (0, s.Ay)([l.A.WISHLIST_ACCOUNT_POPOUT_UPSSELL]);
    return null == t ? null : (0, a.jsxs)(r.A, {
        heading: u.intl.string(u.t["vy/61K"]),
        subheading: u.intl.string(u.t.tEee9t),
        markAsDismissed: d,
        className: m.Zj,
        contentClassName: m.hQ,
        height: 560,
        children: [(0, a.jsx)(o.A, {
            userId: t,
            analyticsLocations: c,
            handleOpenUserProfileModal: n,
            numWishlistItemsToRecommend: 9,
            className: m.KN
        }), (0, a.jsx)("div", {
            className: m.UD,
            children: (0, a.jsx)(i.$nd, {
                variant: "primary",
                fullWidth: !0,
                text: u.intl.string(u.t.rg9FQp),
                onClick: h
            })
        })]
    })
}