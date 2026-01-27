/** Chunk was on 41727 **/
/** chunk id: 287074, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => b
}), n(896048);
var r = n(627968),
    l = n(64700),
    i = n(311907),
    s = n(397927),
    a = n(945830),
    o = n(323073),
    c = n(267102),
    u = n(222823),
    d = n(203982),
    p = n(58736),
    h = n(652215),
    f = n(985018);

function g(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
            return Object.getOwnPropertyDescriptor(n, e).enumerable
        }))), r.forEach(function(t) {
            var r;
            r = n[t], t in e ? Object.defineProperty(e, t, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = r
        })
    }
    return e
}

function m(e, t) {
    return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            n.push.apply(n, r)
        }
        return n
    })(Object(t)).forEach(function(n) {
        Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
    }), e
}
let b = function(e) {
    let {
        channel: t
    } = e, n = (0, o.vL)(t), [b, A] = l.useState(!1), y = (0, i.bG)([u.Ay], () => u.Ay.hasUnreadPins(t.id), [t]), _ = (0, c.aL)(), O = l.useRef(null), j = l.useCallback(() => {
        n || A(e => !e)
    }, [n]);

    function v(e) {
        (null == e ? void 0 : e.shiftKey) || _.dispatch(h.jej.POPOUT_CLOSE)
    }
    return l.useEffect(() => (d._.subscribe(h.jej.TOGGLE_CHANNEL_PINS, j), () => {
        d._.unsubscribe(h.jej.TOGGLE_CHANNEL_PINS, j)
    }), [j]), (0, r.jsx)(s.YNO, {
        targetElementRef: O,
        shouldShow: b,
        animation: s.YNO.Animation.NONE,
        position: "bottom",
        align: "right",
        autoInvert: !1,
        ignoreModalClicks: !0,
        onRequestClose: () => A(!1),
        renderPopout: function(e) {
            return (0, r.jsx)(a.A, m(g({}, e), {
                onJump: v,
                channel: t
            }))
        },
        clickTrap: !0,
        children: (e, t) => {
            let {
                isShown: l
            } = t;
            return (0, r.jsx)(p.In, m(g({}, e), {
                ref: O,
                onClick: j,
                tooltip: l ? null : f.intl.string(f.t["mp1N/2"]),
                icon: s.tsw,
                iconSize: 20,
                "aria-label": f.intl.string(f.t["mp1N/2"]),
                disabled: n,
                showBadge: y,
                selected: l
            }))
        }
    })
}