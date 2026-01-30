/** chunk id: 285732, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => h
}), n(896048);
var r = n(627968),
    i = n(64700),
    l = n(503698),
    s = n.n(l),
    a = n(990078),
    o = n(397927),
    c = n(966327),
    d = n(304072),
    u = n(427262),
    g = n(631576),
    m = n(148355),
    p = n(985018),
    f = n(102982);
let h = e => {
    let {
        className: t,
        isDisabled: l,
        sticker: h,
        canManageSticker: b
    } = e, [x, j] = i.useState(!1), [_, O] = (0, d.A)(null, 4e3), v = async () => {
        O(null), j(!0);
        try {
            await (0, g.sl)(h)
        } catch (e) {
            O(e.body.message), j(!1)
        }
    }, y = u.Ay.useUserTag(h.user);
    return (0, r.jsx)(a.m, {
        forceOpen: null != _,
        text: _,
        asContainer: !0,
        children: (0, r.jsxs)("div", {
            className: s()(f.iE, t, {
                [f.Ce]: l
            }),
            children: [(0, r.jsxs)("div", {
                className: s()(f.Qs, {
                    [f.d4]: x
                }),
                children: [(0, r.jsx)(m.A, {
                    className: f.yI,
                    size: 72,
                    sticker: h
                }), (0, r.jsxs)("div", {
                    children: [(0, r.jsx)(o.Text, {
                        color: "text-strong",
                        variant: "text-xs/semibold",
                        className: f.Zl,
                        children: h.name
                    }), null != h.user && (0, r.jsxs)("div", {
                        className: f.kQ,
                        children: [(0, r.jsx)(c.A, {
                            className: f.dj,
                            size: o._3J.SIZE_16,
                            user: h.user
                        }), (0, r.jsx)(o.Text, {
                            color: "text-default",
                            variant: "text-xs/normal",
                            children: y
                        })]
                    })]
                }), b ? (0, r.jsxs)("div", {
                    className: f.o1,
                    children: [(0, r.jsx)(o.DUT, {
                        className: f.XI,
                        onClick: () => {
                            (0, o.mMO)(async () => {
                                let {
                                    default: e
                                } = await Promise.all([n.e("29143"), n.e("27382")]).then(n.bind(n, 445002));
                                return t => (0, r.jsx)(e, function(e) {
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
                                }({
                                    sticker: h,
                                    guildId: h.guild_id
                                }, t))
                            })
                        },
                        "aria-label": p.intl.string(p.t.bt75uw),
                        children: (0, r.jsx)(o.R2l, {
                            size: "xs",
                            color: "currentColor",
                            className: f.Kk
                        })
                    }), (0, r.jsx)(o.DUT, {
                        className: s()(f.XI, f.v_),
                        onClick: v,
                        "aria-label": p.intl.string(p.t.N86XcP),
                        children: (0, r.jsx)(o.PGe, {
                            size: "md",
                            color: "currentColor",
                            className: f.Kk
                        })
                    })]
                }) : null]
            }), x && (0, r.jsx)(o.y$y, {
                className: f.u1
            })]
        })
    })
}