/** chunk id: 79275, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => f
}), n(321073);
var r = n(627968),
    l = n(64700),
    i = n(512750),
    s = n(311907),
    o = n(554146),
    a = n(192308),
    u = n(342494),
    d = n(932001),
    c = n(186111),
    p = n(89305),
    m = n(49999),
    A = n(333354),
    _ = n(985018);

function f(e) {
    let {
        powerup: t,
        targetRef: n,
        isCardVisible: f
    } = e, g = (0, s.bG)([c.A], () => c.A.hasLayers()), x = (0, a.useHasAnyModalOpen)(), v = t.skuId === i.FB ? {
        title: _.intl.string(A.default.YWo6VL),
        body: _.intl.string(A.default.gXVvKc),
        dismissibleContentType: o.M.VANITY_URL_POWERUP_EDUCATIONAL_POPOVER
    } : null, h = [];
    null == v || g || !f || x || h.push(v.dismissibleContentType);
    let [b, j] = (0, d.kn)(h), E = l.useCallback(() => {
        j(m.i.INDIRECT_ACTION)
    }, [j]);
    return ((0, p.A)({
        targetRef: n,
        onShouldClose: E,
        enabled: null != b
    }), null == v || null == b) ? null : (0, r.jsx)(u.AM, {
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