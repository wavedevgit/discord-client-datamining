/** chunk id: 219980 params = (module,exports,require) **/
l.d(t, {
    J: () => s
});
var a = l(627968);
l(64700);
var n = l(311907),
    r = l(397927);
l(964486), l(786953);
var i = l(505274),
    o = l(448362);

function s(e) {
    let {
        pillRef: t,
        ...l
    } = e, {
        balancePillOverlay: s
    } = (0, n.cf)([i.A], () => ({
        balancePillOverlay: i.A.balancePillOverlay
    })), c = (0, a.jsx)(o.Gy, {
        ref: t,
        ...l
    }), u = (0, a.jsx)(o.Gy, {
        ...l,
        isInModalOverlay: !0,
        disabled: !0
    }), d = null != t.current ? t.current.offsetHeight : 36;
    return (0, a.jsx)(r.YNO, {
        fixed: !0,
        autoInvert: !1,
        renderPopout: () => u,
        position: "bottom",
        align: "right",
        shouldShow: s,
        spacing: -d,
        animation: r.YNO.Animation.NONE,
        targetElementRef: t,
        positionKey: `${l.balance}-${s}`,
        children: () => c
    })
}