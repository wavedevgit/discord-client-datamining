/** Chunk was on 41727 **/
/** chunk id: 510560, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => h
});
var r = n(627968),
    l = n(64700),
    i = n(435371),
    s = n(397927),
    a = n(461678),
    o = n(914703),
    c = n(652215),
    u = n(985018);

function d(e) {
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

function p(e, t) {
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

function h(e) {
    let {
        channel: t
    } = e, n = l.useRef(null);
    return (0, r.jsx)(s.YNO, {
        targetElementRef: n,
        align: "right",
        animation: s.YNO.Animation.NONE,
        position: "bottom",
        renderPopout: e => t.isThread() ? (0, r.jsx)(o.A, p(d({}, e), {
            channel: t,
            navId: "recents-thread-notifications",
            label: u.intl.string(u.t.ljs3Oe)
        })) : (0, r.jsx)(a.A, p(d({}, e), {
            channel: t,
            navId: "recents-notifications",
            label: u.intl.string(u.t.ljs3Oe),
            location: {
                section: c.JJy.INBOX
            },
            includeGuildMute: !0
        })),
        children: e => {
            let {
                onClick: t
            } = e;
            return (0, r.jsx)(i.m_, {
                text: u.intl.string(u.t.h850Ss),
                targetElementRef: n,
                children: (0, r.jsx)(s.K0, {
                    "aria-label": u.intl.string(u.t.h850Ss),
                    icon: s.XFE,
                    variant: "secondary",
                    size: "sm",
                    onClick: t
                })
            })
        }
    })
}