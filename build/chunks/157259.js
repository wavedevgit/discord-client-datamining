/** chunk id: 157259, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => g
});
var l = n(627968),
    r = n(64700),
    i = n(503698),
    a = n.n(i),
    s = n(397927),
    o = n(58149),
    c = n(954571),
    u = n(816662),
    d = n(652215),
    h = n(985018),
    p = n(930399);

function f(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            l = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols && (l = l.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
            return Object.getOwnPropertyDescriptor(n, e).enumerable
        }))), l.forEach(function(t) {
            var l;
            l = n[t], t in e ? Object.defineProperty(e, t, {
                value: l,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = l
        })
    }
    return e
}

function m(e, t) {
    return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
            var l = Object.getOwnPropertySymbols(e);
            n.push.apply(n, l)
        }
        return n
    })(Object(t)).forEach(function(n) {
        Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
    }), e
}

function g(e) {
    let {
        channel: t,
        narrow: n
    } = e;
    return r.useEffect(() => {
        c.default.track(d.HAw.CHANNEL_BANNER_VIEWED, m(f({}, (0, o.H$)(t.getGuildId()), (0, o.dI)(t)), {
            banner_type: "channel_opt_in"
        }))
    }, [t]), (0, l.jsxs)("div", {
        className: a()(p.JD, {
            [p.sc]: n
        }),
        children: [(0, l.jsx)(s.Text, {
            className: p.E5,
            variant: "text-sm/normal",
            color: "text-default",
            children: h.intl.string(h.t.iOWmmB)
        }), (0, l.jsx)(s.Button, {
            size: "sm",
            variant: "primary",
            onClick: () => {
                c.default.track(d.HAw.CHANNEL_BANNER_CTA_CLICKED, m(f({}, (0, o.H$)(t.getGuildId()), (0, o.dI)(t)), {
                    banner_type: "channel_opt_in",
                    cta_type: "add channel"
                })), (0, u.AC)(t.guild_id, t.id, !0, {
                    section: d.JJy.CHANNEL
                })
            },
            text: h.intl.string(h.t.ZtIlQo),
            icon: s.j96
        })]
    })
}