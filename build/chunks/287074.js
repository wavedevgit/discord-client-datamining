/** Chunk was on 1113 **/
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
    h = n(58736),
    p = n(652215),
    g = n(985018);

function f(e) {
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
    } = e, n = (0, o.vL)(t), [b, A] = l.useState(!1), y = (0, i.bG)([u.Ay], () => u.Ay.hasUnreadPins(t.id), [t]), O = (0, c.aL)(), _ = l.useRef(null), x = l.useCallback(() => {
        n || A(e => !e)
    }, [n]);

    function j(e) {
        (null == e ? void 0 : e.shiftKey) || O.dispatch(p.jej.POPOUT_CLOSE)
    }
    return l.useEffect(() => (d._.subscribe(p.jej.TOGGLE_CHANNEL_PINS, x), () => {
        d._.unsubscribe(p.jej.TOGGLE_CHANNEL_PINS, x)
    }), [x]), (0, r.jsx)(s.YNO, {
        targetElementRef: _,
        shouldShow: b,
        animation: s.YNO.Animation.NONE,
        position: "bottom",
        align: "right",
        autoInvert: !1,
        ignoreModalClicks: !0,
        onRequestClose: () => A(!1),
        renderPopout: function(e) {
            return (0, r.jsx)(a.A, m(f({}, e), {
                onJump: j,
                channel: t
            }))
        },
        clickTrap: !0,
        children: (e, t) => {
            let {
                isShown: l
            } = t;
            return (0, r.jsx)(h.In, m(f({}, e), {
                ref: _,
                onClick: x,
                tooltip: l ? null : g.intl.string(g.t["mp1N/2"]),
                icon: s.tsw,
                iconSize: 20,
                "aria-label": g.intl.string(g.t["mp1N/2"]),
                disabled: n,
                showBadge: y,
                selected: l
            }))
        }
    })
}