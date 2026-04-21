/** chunk id: 832696 params = (module,exports,require) **/
l.d(n, {
    A: () => A
});
var t = l(627968),
    i = l(64700),
    s = l(397927),
    a = l(688810),
    r = l(233971),
    o = l(746174),
    d = l(993401),
    c = l(518477),
    u = l(652215),
    m = l(985018);

function A(e) {
    let {
        user: n,
        onClose: l
    } = e, {
        analyticsLocations: A
    } = (0, a.Ay)(), p = (0, o.j)("UserProfileGiftButton"), {
        openGiftModal: x
    } = (0, r.$)({
        giftRecipient: n,
        analyticsLocations: A,
        analyticsObject: {
            page: u.liQ.USER_PROFILE,
            section: u.JJy.USER_PROFILE,
            object: u.ZSU.BUTTON_ICON,
            objectType: u.AnalyticsObjectTypes.GIFT
        },
        location: "user-profile-gift-button"
    }), g = i.useCallback(() => {
        x(), l?.()
    }, [x, l]);
    return p ? (0, t.jsx)(d.q3, {
        action: c.pt.GIFT,
        icon: s.okO,
        tooltipText: m.intl.string(m.t.PEjaCx),
        onClick: g
    }) : null
}