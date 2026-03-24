/** chunk id: 79275 params = (module,exports,require) **/
n.d(t, {
    A: () => g
}), n(321073);
var r = n(627968),
    i = n(64700),
    s = n(512750),
    l = n(311907),
    o = n(554146),
    a = n(192308),
    u = n(342494),
    d = n(932001),
    c = n(186111),
    p = n(89305),
    m = n(49999),
    _ = n(333354),
    f = n(985018);

function g(e) {
    let {
        powerup: t,
        targetRef: n,
        isCardVisible: g
    } = e, x = (0, l.bG)([c.A], () => c.A.hasLayers()), A = (0, a.useHasAnyModalOpen)(), v = t.skuId === s.FB ? {
        title: f.intl.string(_.default.YWo6VL),
        body: f.intl.string(_.default.gXVvKc),
        dismissibleContentType: o.M.VANITY_URL_POWERUP_EDUCATIONAL_POPOVER
    } : null, h = [];
    null == v || x || !g || A || h.push(v.dismissibleContentType);
    let [E, j] = (0, d.kn)(h), b = i.useCallback(() => {
        j(m.i.INDIRECT_ACTION)
    }, [j]);
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
            j(m.i.USER_DISMISS)
        }
    })
}