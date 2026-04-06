/** chunk id: 832696 params = (module,exports,require) **/
t.d(l, {
    A: () => p
});
var n = t(627968),
    i = t(64700),
    s = t(397927),
    a = t(688810),
    r = t(233971),
    o = t(746174),
    d = t(993401),
    c = t(518477),
    u = t(652215),
    m = t(985018);

function p(e) {
    let {
        user: l,
        onClose: t
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
        A(), t?.()
    }, [A, t]);
    return x ? (0, n.jsx)(d.q3, {
        action: c.pt.GIFT,
        icon: s.okO,
        tooltipText: m.intl.string(m.t.PEjaCx),
        onClick: g
    }) : null
}