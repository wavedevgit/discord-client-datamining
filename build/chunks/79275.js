/** chunk id: 79275 params = (module,exports,require) **/
n.d(t, {
    A: () => A
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
    f = n(985018);

function A(e) {
    let {
        powerup: t,
        targetRef: n,
        isCardVisible: A
    } = e, g = (0, s.bG)([c.A], () => c.A.hasLayers()), x = (0, a.useHasAnyModalOpen)(), v = t.skuId === l.FB ? {
        title: f.intl.string(m.default.YWo6VL),
        body: f.intl.string(m.default.gXVvKc),
        dismissibleContentType: o.M.VANITY_URL_POWERUP_EDUCATIONAL_POPOVER
    } : null, h = [];
    null == v || g || !A || x || h.push(v.dismissibleContentType);
    let [E, I] = (0, d.kn)(h), b = i.useCallback(() => {
        I(_.i.INDIRECT_ACTION)
    }, [I]);
    return ((0, p.A)({
        targetRef: n,
        onShouldClose: b,
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