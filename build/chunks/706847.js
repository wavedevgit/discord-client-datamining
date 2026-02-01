/** chunk id: 706847, original params: e,t,n (module,exports,require) **/
n.d(t, {
    p: () => A,
    z: () => b
});
var l = n(627968),
    r = n(64700),
    i = n(503698),
    a = n.n(i),
    s = n(397927),
    o = n(58149),
    c = n(954571),
    u = n(867455),
    d = n(406704),
    h = n(652215),
    p = n(985018),
    f = n(783971);

function m(e) {
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

function g(e, t) {
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

function A(e) {
    let {
        channel: t,
        narrow: n
    } = e, i = (0, d.lK)(t);
    return r.useEffect(() => {
        c.default.track(h.HAw.CHANNEL_BANNER_VIEWED, g(m({}, (0, o.H$)(t.getGuildId()), (0, o.dI)(t)), {
            banner_type: "thread"
        }))
    }, [t]), (0, l.jsxs)("div", {
        className: a()(f.JD, {
            [f.sc]: n
        }),
        children: [(0, l.jsx)(s.Text, {
            className: f.E5,
            variant: "text-sm/normal",
            color: "text-default",
            children: t.isForumPost() ? p.intl.string(p.t["833FDn"]) : p.intl.string(p.t.rEeodK)
        }), i ? (0, l.jsx)(s.Button, {
            variant: "secondary",
            text: p.intl.string(p.t["0dvvEi"]),
            onClick: () => {
                c.default.track(h.HAw.CHANNEL_BANNER_CTA_CLICKED, g(m({}, (0, o.H$)(t.getGuildId()), (0, o.dI)(t)), {
                    banner_type: "thread",
                    cta_type: "unarchive"
                })), u.A.unarchiveThread(t, !1)
            },
            size: "sm"
        }) : null]
    })
}

function b(e) {
    let {
        channel: t,
        narrow: n
    } = e, i = (0, d.H_)(t);
    return r.useEffect(() => {
        c.default.track(h.HAw.CHANNEL_BANNER_VIEWED, g(m({}, (0, o.H$)(t.getGuildId()), (0, o.dI)(t)), {
            banner_type: "thread"
        }))
    }, [t]), (0, l.jsxs)("div", {
        className: a()(f.JD, {
            [f.sc]: n
        }),
        children: [(0, l.jsx)(s.Text, {
            className: f.E5,
            variant: "text-sm/normal",
            color: "text-default",
            children: t.isForumPost() ? p.intl.string(p.t.E7oO8u) : p.intl.string(p.t["V/JF2N"])
        }), i ? (0, l.jsx)(s.Button, {
            variant: "secondary",
            text: p.intl.string(p.t.zA9d1J),
            onClick: () => {
                c.default.track(h.HAw.CHANNEL_BANNER_CTA_CLICKED, g(m({}, (0, o.H$)(t.getGuildId()), (0, o.dI)(t)), {
                    banner_type: "thread",
                    cta_type: "unlock"
                })), u.A.unlockThread(t)
            },
            size: "sm"
        }) : null]
    })
}