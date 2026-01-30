/** chunk id: 79275, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => g
}), n(321073), n(896048);
var r = n(627968),
    l = n(64700),
    i = n(512750),
    o = n(311907),
    s = n(554146),
    a = n(192308),
    u = n(342494),
    d = n(379848),
    c = n(186111),
    p = n(89305),
    m = n(49999),
    f = n(333354),
    v = n(985018);

function g(e) {
    let {
        powerup: t,
        targetRef: n,
        isCardVisible: g
    } = e, A = (0, o.bG)([c.A], () => c.A.hasLayers()), _ = (0, a.useHasAnyModalOpen)(), x = t.skuId === i.FB ? {
        title: v.intl.string(f.default.YWo6VL),
        body: v.intl.string(f.default.gXVvKc),
        dismissibleContentType: s.M.VANITY_URL_POWERUP_EDUCATIONAL_POPOVER
    } : null, h = [];
    null == x || A || !g || _ || h.push(x.dismissibleContentType);
    let [b, j] = (0, d.kn)(h), E = l.useCallback(() => {
        j(m.i.INDIRECT_ACTION)
    }, [j]);
    return ((0, p.A)({
        targetRef: n,
        onShouldClose: E,
        enabled: null != b
    }), null == x || null == b) ? null : (0, r.jsx)(u.AM, {
        targetElementRef: n,
        shouldShow: !0,
        position: "right",
        align: "top",
        size: "sm",
        caretConfig: {
            align: "start"
        },
        title: x.title,
        body: x.body,
        onRequestClose: () => {
            j(m.i.USER_DISMISS)
        }
    })
}