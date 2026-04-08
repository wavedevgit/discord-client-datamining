/** chunk id: 832696 params = (module,exports,require) **/
n.d(l, {
    A: () => p
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

function p(e) {
    let {
        user: l,
        onClose: n
    } = e, {
        analyticsLocations: p
    } = (0, a.Ay)(), x = (0, o.j)("UserProfileGiftButton"), {
        openGiftModal: A
    } = (0, r.$)({
        giftRecipient: l,
        analyticsLocations: p,
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
    return x ? (0, t.jsx)(d.q3, {
        action: c.pt.GIFT,
        icon: s.okO,
        tooltipText: m.intl.string(m.t.PEjaCx),
        onClick: g
    }) : null
}