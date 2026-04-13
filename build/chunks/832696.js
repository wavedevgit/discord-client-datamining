/** chunk id: 832696 params = (module,exports,require) **/
l.d(t, {
    A: () => p
});
var n = l(627968),
    i = l(64700),
    s = l(397927),
    a = l(688810),
    r = l(233971),
    o = l(746174),
    d = l(993401),
    c = l(518477),
    u = l(652215),
    m = l(985018);

function p(e) {
    let {
        user: t,
        onClose: l
    } = e, {
        analyticsLocations: p
    } = (0, a.Ay)(), x = (0, o.j)("UserProfileGiftButton"), {
        openGiftModal: A
    } = (0, r.$)({
        giftRecipient: t,
        analyticsLocations: p,
        analyticsObject: {
            page: u.liQ.USER_PROFILE,
            section: u.JJy.USER_PROFILE,
            object: u.ZSU.BUTTON_ICON,
            objectType: u.AnalyticsObjectTypes.GIFT
        },
        location: "user-profile-gift-button"
    }), g = i.useCallback(() => {
        A(), l?.()
    }, [A, l]);
    return x ? (0, n.jsx)(d.q3, {
        action: c.pt.GIFT,
        icon: s.okO,
        tooltipText: m.intl.string(m.t.PEjaCx),
        onClick: g
    }) : null
}