/** chunk id: 79275 params = (module,exports,require) **/
n.d(t, {
    A: () => f
}), n(321073);
var r = n(627968),
    i = n(64700),
    l = n(512750),
    s = n(311907),
    o = n(554146),
    a = n(192308),
    u = n(342494),
    d = n(932001),
    c = n(186111),
    p = n(89305),
    _ = n(49999),
    m = n(333354),
    A = n(985018);

function f(e) {
    let {
        powerup: t,
        targetRef: n,
        isCardVisible: f
    } = e, g = (0, s.bG)([c.A], () => c.A.hasLayers()), x = (0, a.useHasAnyModalOpen)(), v = t.skuId === l.FB ? {
        title: A.intl.string(m.default.YWo6VL),
        body: A.intl.string(m.default.gXVvKc),
        dismissibleContentType: o.M.VANITY_URL_POWERUP_EDUCATIONAL_POPOVER
    } : null, h = [];
    null == v || g || !f || x || h.push(v.dismissibleContentType);
    let [E, I] = (0, d.kn)(h), j = i.useCallback(() => {
        I(_.i.INDIRECT_ACTION)
    }, [I]);
    return ((0, p.A)({
        targetRef: n,
        onShouldClose: j,
        enabled: null != E
    }), null == v || null == E) ? null : (0, r.jsx)(u.AM, {
        targetElementRef: n,
        shouldShow: !0,
        position: "right",
        align: "top",
        size: "sm",
        caretConfig: {
            align: "start"
        },
        title: v.title,
        body: v.body,
        onRequestClose: () => {
            I(_.i.USER_DISMISS)
        }
    })
}