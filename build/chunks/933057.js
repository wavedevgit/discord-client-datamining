/** chunk id: 933057, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => b
}), n(896048);
var r = n(627968),
    l = n(64700),
    i = n(311907),
    s = n(397927),
    a = n(58736),
    o = n(857071),
    c = n(203982),
    u = n(607508),
    d = n(914703),
    h = n(37411),
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

function b(e) {
    let {
        channel: t
    } = e, n = (0, u.X)(t), [b, A] = l.useState(!1), y = l.useRef(null), O = (0, i.bG)([o.A], () => null != t.guild_id && o.A.isLurking(t.guild_id));
    if (l.useEffect(() => {
            let e = () => A(!0);
            return c._.subscribe(p.jej.OPEN_THREAD_NOTIFICATION_SETTINGS, e), () => {
                c._.unsubscribe(p.jej.OPEN_THREAD_NOTIFICATION_SETTINGS, e)
            }
        }, []), O) return null;
    let _ = g.intl.string(g.t.h850Ss);
    return (0, r.jsx)(s.YNO, {
        targetElementRef: y,
        shouldShow: b,
        animation: s.YNO.Animation.NONE,
        position: "bottom",
        align: "right",
        autoInvert: !1,
        onRequestClose: () => A(!1),
        renderPopout: e => (0, r.jsx)(d.A, m(f({}, e), {
            channel: t,
            navId: "thread-context",
            label: g.intl.string(g.t["1NBjqb"])
        })),
        children: (e, t) => {
            let {
                isShown: l
            } = t;
            return (0, r.jsx)(a.Ay.Icon, m(f({}, e), {
                ref: y,
                onClick: () => A(e => !e),
                tooltip: l ? null : _,
                icon: n === h.CP.NO_MESSAGES ? s.a_I : s.XFE,
                "aria-label": _,
                selected: l
            }))
        }
    })
}