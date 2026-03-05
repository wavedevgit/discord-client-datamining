/** chunk id: 79275, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => A
}), n(321073);
var r = n(627968),
    i = n(64700),
    l = n(512750),
    s = n(311907),
    a = n(554146),
    o = n(192308),
    d = n(342494),
    u = n(932001),
    c = n(186111),
    m = n(89305),
    p = n(49999),
    _ = n(136708),
    x = n(985018);

function A(e) {
    let {
        powerup: t,
        targetRef: n,
        isCardVisible: A
    } = e, f = (0, s.bG)([c.A], () => c.A.hasLayers()), g = (0, o.useHasAnyModalOpen)(), v = t.skuId === l.FB ? {
        title: x.intl.string(_.default.YWo6VL),
        body: x.intl.string(_.default.gXVvKc),
        dismissibleContentType: a.M.VANITY_URL_POWERUP_EDUCATIONAL_POPOVER
    } : null, h = [];
    null == v || f || !A || g || h.push(v.dismissibleContentType);
    let [b, j] = (0, u.kn)(h), E = i.useCallback(() => {
        j(p.i.INDIRECT_ACTION)
    }, [j]);
    return ((0, m.A)({
        targetRef: n,
        onShouldClose: E,
        enabled: null != b
    }), null == v || null == b) ? null : (0, r.jsx)(d.AM, {
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