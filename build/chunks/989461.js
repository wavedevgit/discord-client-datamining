/** Chunk was on web.js **/
/** chunk id: 989461, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => u
});
var r = n(627968),
    i = n(64700),
    a = n(594832),
    o = n(996353),
    s = n(968975),
    l = n(524380),
    c = n(518477);

function u(e) {
    let {
        user: t,
        onOpenProfile: n
    } = e, u = i.useCallback(() => {
        null == n || n({
            tabSection: c.RP.WISHLIST
        })
    }, [n]), {
        displayedWishlistItems: d,
        defaultWishlistId: f,
        title: p
    } = (0, o.aO)({
        user: t,
        numItems: o.h,
        source: a.mQ.POPOUT,
        location: "User Profile Popout"
    });
    return null == d || 0 === d.length ? null : (0, r.jsx)(s.A, {
        profileOwner: t,
        wishlistItems: d,
        wishlistId: f,
        onClick: u,
        cardSize: l.Y.SMALL,
        title: p
    })
}