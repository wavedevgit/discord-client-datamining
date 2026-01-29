/** Chunk was on 1113 **/
/** chunk id: 706847, original params: e,t,n (module,exports,require) **/
n.d(t, {
    p: () => b,
    z: () => A
});
var r = n(627968),
    l = n(64700),
    i = n(503698),
    s = n.n(i),
    a = n(397927),
    o = n(58149),
    c = n(954571),
    u = n(867455),
    d = n(406704),
    h = n(652215),
    p = n(985018),
    g = n(783971);

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
        channel: t,
        narrow: n
    } = e, i = (0, d.lK)(t);
    return l.useEffect(() => {
        c.default.track(h.HAw.CHANNEL_BANNER_VIEWED, m(f({}, (0, o.H$)(t.getGuildId()), (0, o.dI)(t)), {
            banner_type: "thread"
        }))
    }, [t]), (0, r.jsxs)("div", {
        className: s()(g.JD, {
            [g.sc]: n
        }),
        children: [(0, r.jsx)(a.Text, {
            className: g.E5,
            variant: "text-sm/normal",
            color: "text-default",
            children: t.isForumPost() ? p.intl.string(p.t["833FDn"]) : p.intl.string(p.t.rEeodK)
        }), i ? (0, r.jsx)(a.Button, {
            variant: "secondary",
            text: p.intl.string(p.t["0dvvEi"]),
            onClick: () => {
                c.default.track(h.HAw.CHANNEL_BANNER_CTA_CLICKED, m(f({}, (0, o.H$)(t.getGuildId()), (0, o.dI)(t)), {
                    banner_type: "thread",
                    cta_type: "unarchive"
                })), u.A.unarchiveThread(t, !1)
            },
            size: "sm"
        }) : null]
    })
}

function A(e) {
    let {
        channel: t,
        narrow: n
    } = e, i = (0, d.H_)(t);
    return l.useEffect(() => {
        c.default.track(h.HAw.CHANNEL_BANNER_VIEWED, m(f({}, (0, o.H$)(t.getGuildId()), (0, o.dI)(t)), {
            banner_type: "thread"
        }))
    }, [t]), (0, r.jsxs)("div", {
        className: s()(g.JD, {
            [g.sc]: n
        }),
        children: [(0, r.jsx)(a.Text, {
            className: g.E5,
            variant: "text-sm/normal",
            color: "text-default",
            children: t.isForumPost() ? p.intl.string(p.t.E7oO8u) : p.intl.string(p.t["V/JF2N"])
        }), i ? (0, r.jsx)(a.Button, {
            variant: "secondary",
            text: p.intl.string(p.t.zA9d1J),
            onClick: () => {
                c.default.track(h.HAw.CHANNEL_BANNER_CTA_CLICKED, m(f({}, (0, o.H$)(t.getGuildId()), (0, o.dI)(t)), {
                    banner_type: "thread",
                    cta_type: "unlock"
                })), u.A.unlockThread(t)
            },
            size: "sm"
        }) : null]
    })
}