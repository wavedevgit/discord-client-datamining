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
    d = n(342494),
    u = n(932001),
    c = n(186111),
    m = n(89305),
    p = n(49999),
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
    let [E, j] = (0, u.kn)(h), b = i.useCallback(() => {
        j(p.i.INDIRECT_ACTION)
    }, [j]);
    return ((0, m.A)({
        targetRef: n,
        onShouldClose: b,
        enabled: null != E
    }), null == v || null == E) ? null : (0, r.jsx)(d.AM, {
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
            j(p.i.USER_DISMISS)
        }
    })
}