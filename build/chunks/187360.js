/** Chunk was on 1113 **/
/** chunk id: 187360, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => b
}), n(896048);
var r = n(627968),
    l = n(64700),
    i = n(311907),
    s = n(397927),
    a = n(832712),
    o = n(543465),
    c = n(203982),
    u = n(477427),
    d = n(58736),
    h = n(461678),
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
    } = e, n = l.useRef(null), [b, A] = (0, i.yK)([o.Ay], () => [o.Ay.isChannelMuted(t.getGuildId(), t.id), o.Ay.resolvedMessageNotifications(t)], [t]), [y, O] = l.useState(!1);
    l.useEffect(() => {
        let e = () => O(!0);
        return c._.subscribe(p.jej.OPEN_THREAD_NOTIFICATION_SETTINGS, e), () => {
            c._.unsubscribe(p.jej.OPEN_THREAD_NOTIFICATION_SETTINGS, e)
        }
    }, []);
    let _ = e => {
            e.shiftKey ? a.A.updateChannelOverrideSettings(t.guild_id, t.id, {
                muted: !b
            }, u.G_.muted(!b)) : O(e => !e)
        },
        j = g.intl.string(g.t.h850Ss);
    return (0, r.jsx)(s.YNO, {
        targetElementRef: n,
        shouldShow: y,
        animation: s.YNO.Animation.NONE,
        position: "bottom",
        align: "right",
        autoInvert: !1,
        onRequestClose: () => O(!1),
        renderPopout: e => (0, r.jsx)(h.A, m(f({}, e), {
            channel: t,
            navId: "channel-context",
            label: g.intl.string(g.t.Xm41aV)
        })),
        clickTrap: !0,
        children: (e, t) => {
            let {
                isShown: l
            } = t;
            return (0, r.jsx)(d.Ay.Icon, m(f({}, e), {
                ref: n,
                onClick: _,
                tooltip: l ? null : j,
                icon: b || A !== p.orn.ALL_MESSAGES ? s.a_I : s.XFE,
                "aria-label": j,
                selected: l
            }))
        }
    })
}