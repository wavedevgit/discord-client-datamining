/** Chunk was on 77986 **/
/** chunk id: 834991, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => P
});
var l = n(627968),
    r = n(64700),
    i = n(503698),
    s = n.n(i),
    c = n(311907),
    o = n(397927),
    u = n(442433),
    a = n(297413),
    d = n(489673),
    _ = n(342296),
    g = n(961350),
    f = n(290863),
    h = n(461213),
    v = n(287809),
    j = n(826383),
    x = n(988794),
    p = n(985018),
    m = n(939947);

function y(e) {
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

function b(e, t) {
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
        children: t
    } = e;
    return (0, l.jsxs)("div", {
        className: m.do,
        children: [(0, l.jsx)(d.A, {
            children: (0, l.jsx)("div", {
                className: m.n1,
                children: (0, l.jsx)(o.nFg, {
                    size: "custom",
                    color: "currentColor",
                    height: 40,
                    width: 40,
                    className: m.Kk
                })
            })
        }), t]
    })
}

function O() {
    return (0, l.jsx)(A, {
        children: (0, l.jsx)(o.Heading, {
            color: "text-strong",
            variant: "heading-xl/semibold",
            className: m.DD,
            children: p.intl.string(p.t.hW0mBR)
        })
    })
}

function N() {
    return (0, l.jsx)(A, {
        children: (0, l.jsx)(o.Heading, {
            color: "text-default",
            variant: "heading-md/semibold",
            className: m.JU,
            children: p.intl.string(p.t.obChXk)
        })
    })
}

function C(e) {
    let {
        count: t
    } = e;
    return (0, l.jsxs)("div", {
        className: m.f0,
        children: [(0, l.jsx)("div", {
            className: s()(m.Pc, m.uY),
            children: (0, l.jsx)(o.nFg, {
                size: "custom",
                color: "currentColor",
                height: 14,
                width: 14,
                className: m.Kk
            })
        }), (0, l.jsx)(o.Text, {
            color: "text-default",
            variant: "text-md/normal",
            children: p.intl.format(p.t.BdQTfR, {
                userRemainCount: t
            })
        })]
    })
}

function E(e) {
    let {
        eventUser: t,
        guildId: n,
        onContextMenu: i
    } = e, u = r.useRef(null), d = (0, c.bG)([v.default], () => v.default.getUser(t.user_id)), j = (0, c.bG)([h.A, f.A, g.default], () => t.user_id === g.default.getId() ? h.A.getStatus() : f.A.getStatus(t.user_id, n), [t.user_id, n]);
    return null == d ? null : (0, l.jsx)(_.A, {
        targetElementRef: u,
        userId: t.user_id,
        guildId: n,
        position: "left",
        spacing: 16,
        children: (e, r) => {
            var c;
            let {
                isShown: _
            } = r;
            return (0, l.jsxs)(o.DUT, b(y({
                innerRef: u,
                className: s()(m.f0, m.fv, {
                    [m.wH]: _
                }),
                onContextMenu: e => i(e, d)
            }, e), {
                children: [(0, l.jsx)(o.euF, {
                    src: d.getAvatarURL(n, 24),
                    "aria-label": d.username,
                    size: o._3J.SIZE_24,
                    className: m.uY,
                    status: j
                }), (0, l.jsx)(a.A, {
                    user: d,
                    className: m.sY,
                    discriminatorClass: m.XU,
                    nick: null == (c = t.member) ? void 0 : c.nick
                })]
            }))
        }
    })
}

function k(e) {
    let {
        eventUsers: t,
        guildId: n,
        usersNotShownCount: r = 0,
        onContextMenu: i
    } = e;
    return (0, l.jsxs)(o.IpV, {
        className: m.DK,
        children: [t.map(e => (0, l.jsx)(E, {
            guildId: n,
            eventUser: e,
            onContextMenu: i
        }, e.user_id)), r > 0 && (0, l.jsx)(C, {
            count: r
        })]
    })
}

function I(e) {
    let {
        children: t,
        style: n
    } = e;
    return (0, l.jsx)("div", {
        className: m.kL,
        style: null != n ? n : {},
        children: t
    })
}

function S(e) {
    let {
        children: t,
        height: n
    } = e;
    return (0, l.jsx)(I, {
        style: {
            height: n
        },
        children: t
    })
}

function P(e) {
    let {
        guildEvent: t,
        recurrenceId: r,
        eventUsers: i,
        loading: s,
        error: c,
        containerHeight: a
    } = e, d = (0, j.A)(t.guild_id, t.id, r);
    if (s && 0 === i.length) return (0, l.jsx)(S, {
        height: a,
        children: (0, l.jsx)(o.y$y, {
            type: o.y$y.Type.SPINNING_CIRCLE,
            className: m.u1
        })
    });
    if (null != c && 0 === i.length) return (0, l.jsx)(S, {
        height: a,
        children: (0, l.jsx)(N, {})
    });
    let _ = 0;
    return i.length >= x.C1 && d > x.C1 && (_ = Math.max(d - i.length, 0)), 0 === i.length ? (0, l.jsx)(S, {
        height: a,
        children: (0, l.jsx)(O, {})
    }) : (0, l.jsx)(I, {
        children: (0, l.jsx)(k, {
            eventUsers: i,
            guildId: t.guild_id,
            onContextMenu: function(e, t) {
                (0, u.L3)(e, async () => {
                    let {
                        default: e
                    } = await Promise.all([n.e("97262"), n.e("32418"), n.e("8893")]).then(n.bind(n, 668569));
                    return n => (0, l.jsx)(e, b(y({}, n), {
                        user: t
                    }))
                })
            },
            usersNotShownCount: _
        })
    })
}