/** chunk id: 832696 params = (module,exports,require) **/
n.d(l, {
    A: () => x
});
var t = n(627968),
    i = n(64700),
    s = n(397927),
    a = n(688810),
    r = n(233971),
    o = n(746174),
    d = n(993401),
    c = n(518477),
    u = n(652215),
    m = n(985018);

function x(e) {
    let {
        user: l,
        onClose: n
    } = e, {
        analyticsLocations: x
    } = (0, a.Ay)(), p = (0, o.j)("UserProfileGiftButton"), {
        openGiftModal: A
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
    }), g = i.useCallback(() => {
        A(), n?.()
    }, [A, n]);
    return p ? (0, t.jsx)(d.q3, {
        action: c.pt.GIFT,
        icon: s.okO,
        tooltipText: m.intl.string(m.t.PEjaCx),
        onClick: g
    }) : null
}