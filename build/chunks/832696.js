/** chunk id: 832696 params = (module,exports,require) **/
i.d(l, {
    A: () => x
});
var t = i(627968),
    n = i(64700),
    s = i(397927),
    a = i(688810),
    r = i(233971),
    o = i(746174),
    d = i(993401),
    c = i(518477),
    u = i(652215),
    m = i(985018);

function x(e) {
    let {
        user: l,
        onClose: i
    } = e, {
        analyticsLocations: x
    } = (0, a.Ay)(), A = (0, o.j)("UserProfileGiftButton"), {
        openGiftModal: p
    } = (0, r.$)({
        giftRecipient: l,
        analyticsLocations: x,
        analyticsObject: {
            page: u.liQ.USER_PROFILE,
            section: u.JJy.USER_PROFILE,
            object: u.ZSU.BUTTON_ICON,
            objectType: u.AnalyticsObjectTypes.GIFT
        },
        location: "user-profile-gift-button"
    }), g = n.useCallback(() => {
        p(), i?.()
    }, [p, i]);
    return A ? (0, t.jsx)(d.q3, {
        action: c.pt.GIFT,
        icon: s.okO,
        tooltipText: m.intl.string(m.t.PEjaCx),
        onClick: g
    }) : null
}