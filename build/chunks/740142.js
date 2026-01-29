/** Chunk was on 87557 **/
/** chunk id: 740142, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => u
}), n(321073);
var a = n(627968),
    l = n(64700),
    r = n(554146),
    i = n(379848),
    s = n(948011),
    o = n(364504),
    c = n(735321),
    d = n(162942);

function u(e) {
    let {
        displayProfile: t,
        handleOpenUserProfileModal: n,
        height: u
    } = e, m = (0, c.yy)(t), p = (0, s.A)({
        location: "AccountProfilePopoutUpsell"
    }), h = l.useMemo(() => {
        let e = [];
        return m || e.push(r.M.GAME_WIDGETS_USER_PROFILE_ACCOUNT_POPOUT_UPSELL), p && e.push(r.M.WISHLIST_USER_PROFILE_ACCOUNT_POPOUT_UPSELL), e
    }, [m, p]);
    return (0, a.jsx)(i.Ay, {
        contentTypes: h,
        bypassAutoDismiss: !0,
        children: e => {
            let {
                visibleContent: t,
                markAsDismissed: l
            } = e;
            if (null == u) return null;
            switch (t) {
                case r.M.GAME_WIDGETS_USER_PROFILE_ACCOUNT_POPOUT_UPSELL:
                    return (0, a.jsx)(d.A, {
                        handleOpenUserProfileModal: n,
                        markAsDismissed: l,
                        height: u
                    });
                case r.M.WISHLIST_USER_PROFILE_ACCOUNT_POPOUT_UPSELL:
                    return (0, a.jsx)(o.A, {
                        handleOpenUserProfileModal: n,
                        markAsDismissed: l
                    });
                default:
                    return null
            }
        }
    })
}