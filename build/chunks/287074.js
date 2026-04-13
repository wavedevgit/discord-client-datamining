/** chunk id: 287074 params = (module,exports,require) **/
n.d(t, {
    A: () => m
});
var i = n(627968),
    l = n(64700),
    s = n(311907),
    a = n(397927),
    r = n(945830),
    o = n(323073),
    d = n(267102),
    c = n(222823),
    u = n(203982),
    h = n(58736),
    A = n(652215),
    _ = n(985018);
let m = function(e) {
    let {
        channel: t
    } = e, n = (0, o.ni)(t), [m, p] = l.useState(!1), g = (0, s.bG)([c.Ay], () => c.Ay.hasUnreadPins(t.id), [t]), f = (0, d.aL)(), E = l.useRef(null), x = l.useCallback(() => {
        n || p(e => !e)
    }, [n]);

    function I(e) {
        e?.shiftKey || f.dispatch(A.jej.POPOUT_CLOSE)
    }
    return l.useEffect(() => (u._.subscribe(A.jej.TOGGLE_CHANNEL_PINS, x), () => {
        u._.unsubscribe(A.jej.TOGGLE_CHANNEL_PINS, x)
    }), [x]), (0, i.jsx)(a.YNO, {
        targetElementRef: E,
        shouldShow: m,
        animation: a.YNO.Animation.NONE,
        position: "bottom",
        align: "right",
        autoInvert: !1,
        ignoreModalClicks: !0,
        onRequestClose: () => p(!1),
        renderPopout: function(e) {
            return (0, i.jsx)(r.A, {
                ...e,
                onJump: I,
                channel: t
            })
        },
        clickTrap: !0,
        children: (e, t) => {
            let {
                isShown: l
            } = t;
            return (0, i.jsx)(h.In, {
                ...e,
                ref: E,
                onClick: x,
                tooltip: l ? null : _.intl.string(_.t["mp1N/2"]),
                icon: a.tsw,
                iconSize: 20,
                "aria-label": _.intl.string(_.t["mp1N/2"]),
                disabled: n,
                showBadge: g,
                selected: l
            })
        }
    })
}