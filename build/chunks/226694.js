/** Chunk was on 1113 **/
/** chunk id: 226694, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => P,
    s: () => N
}), n(896048), n(228524);
var r = n(627968),
    l = n(64700),
    i = n(503698),
    s = n.n(i),
    a = n(311907),
    o = n(990078),
    c = n(397927),
    u = n(442433),
    d = n(686956),
    h = n(573435),
    p = n(101555),
    g = n(263063),
    f = n(714991),
    m = n(776231),
    b = n(345942),
    A = n(71393),
    y = n(486020),
    O = n(860689),
    _ = n(352123),
    x = n(682557),
    j = n(652215),
    v = n(985018),
    E = n(856528),
    C = n(166382);

function S(e) {
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

function I(e, t) {
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
let N = l.memo(function(e) {
    let {
        onClick: t
    } = e;
    return (0, r.jsxs)(c.DUT, {
        onClick: t,
        className: E.Eo,
        children: [(0, r.jsx)("img", {
            alt: "",
            src: C
        }), (0, r.jsx)(c.Text, {
            variant: "text-sm/semibold",
            color: "text-strong",
            className: E.Kk,
            children: v.intl.string(v.t.H9jxS1)
        })]
    })
});

function T(e) {
    let {
        entry: t
    } = e, [i, a] = l.useState(!1), u = l.useRef(null), {
        canEdit: d
    } = (0, _.A)(t);
    return (0, r.jsx)("div", {
        className: s()(E.fc, {
            [E.QX]: i
        }),
        children: (0, r.jsxs)(p.Ay, {
            children: [d ? (0, r.jsx)(o.m, {
                text: v.intl.string(v.t.XnuOvN),
                children: (0, r.jsx)(p.$n, {
                    onClick: () => {
                        (0, c.mMO)(async () => {
                            let {
                                default: e
                            } = await n.e("88869").then(n.bind(n, 201700));
                            return n => (0, r.jsx)(e, I(S({}, n), {
                                entry: t
                            }))
                        })
                    },
                    "aria-label": v.intl.string(v.t.XnuOvN),
                    children: (0, r.jsx)(c.R2l, {
                        size: "xs",
                        color: "currentColor",
                        className: E.IQ
                    })
                })
            }) : null, (0, r.jsx)(x.A, {
                targetElementRef: u,
                onRequestOpen: () => a(!0),
                onRequestClose: () => a(!1),
                entry: t,
                hideEditButton: !0,
                children: e => {
                    let {
                        onClick: t
                    } = e, n = function(e, t) {
                        if (null == e) return {};
                        var n, r, l, i = {};
                        if ("u" > typeof Reflect && Reflect.ownKeys) {
                            for (l = 0, n = Reflect.ownKeys(e); l < n.length; l++) r = n[l], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (i[r] = e[r]);
                            return i
                        }
                        if (i = function(e, t) {
                                if (null == e) return {};
                                var n, r, l = {},
                                    i = Object.getOwnPropertyNames(e);
                                for (r = 0; r < i.length; r++) n = i[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (l[n] = e[n]);
                                return l
                            }(e, t), Object.getOwnPropertySymbols)
                            for (l = 0, n = Object.getOwnPropertySymbols(e); l < n.length; l++) r = n[l], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (i[r] = e[r]);
                        return i
                    }(e, ["onClick"]);
                    return (0, r.jsx)(o.m, {
                        text: v.intl.string(v.t["UKOtz+"]),
                        children: (0, r.jsx)(p.$n, I(S({}, n), {
                            onClick: e => {
                                t(e)
                            },
                            ref: u,
                            "aria-label": v.intl.string(v.t["UKOtz+"]),
                            children: (0, r.jsx)(c.jNK, {
                                size: "md",
                                color: "currentColor",
                                className: E.IQ
                            })
                        }))
                    })
                }
            })]
        })
    })
}
let P = l.memo(function(e) {
    var t;
    let {
        entry: i
    } = e, [s, o] = l.useState(!1), p = null != (0, a.bG)([A.A], () => A.A.getGuild(i.guildId)), _ = async () => {
        o(!0);
        try {
            p ? (0, b.u)(i.guildId) : await d.A.joinGuild(i.guildId, {
                source: j.Q4z.DIRECTORY_ENTRY
            })
        } finally {
            o(!1)
        }
    }, x = y.Ay.getGuildSplashURL({
        id: i.guildId,
        splash: i.splash,
        size: 300 * (0, m.mZ)()
    }), C = null != (t = y.Ay.getGuildIconURL({
        id: i.guildId,
        icon: i.icon,
        size: 40
    })) ? t : void 0, N = v.intl.string(v.t.VJlc0S);
    return p && (N = v.intl.string(v.t.cqWE2Z)), (0, r.jsxs)("div", {
        className: E.Nr,
        onContextMenu: e => {
            (0, u.L3)(e, async () => {
                let {
                    default: e
                } = await Promise.resolve().then(n.bind(n, 283354));
                return t => (0, r.jsx)(e, I(S({}, t), {
                    entry: i
                }))
            })
        },
        children: [(0, r.jsxs)("div", {
            className: E.MY,
            children: [(0, r.jsx)("div", {
                className: E.Yi,
                children: null != x && (0, r.jsx)("img", {
                    src: x,
                    alt: "",
                    className: E.j0
                })
            }), (0, r.jsx)("div", {
                className: E.$f,
                children: (0, r.jsx)(h.Ay, {
                    mask: h.Ay.Masks.SQUIRCLE,
                    width: 48,
                    height: 48,
                    children: (0, r.jsx)("div", {
                        className: E.SA,
                        children: (0, r.jsx)(g.A, {
                            className: E.rZ,
                            iconSrc: C,
                            guild: (0, O.xi)(i),
                            size: g.A.Sizes.MEDIUM,
                            active: !0
                        })
                    })
                })
            })]
        }), (0, r.jsxs)("div", {
            className: E.OA,
            children: [(0, r.jsxs)("div", {
                className: E.DD,
                children: [(0, r.jsx)(f.A, {
                    className: E.n2,
                    guild: i
                }), (0, r.jsx)(c.Text, {
                    className: E.J5,
                    variant: "heading-md/semibold",
                    color: "text-strong",
                    children: i.name
                })]
            }), (0, r.jsx)(c.Text, {
                className: E.h_,
                variant: "text-sm/normal",
                color: "text-default",
                children: i.description
            }), (0, r.jsxs)("div", {
                className: E.Fj,
                children: [null != i.approximatePresenceCount && (0, r.jsxs)("div", {
                    className: E.Kl,
                    children: [(0, r.jsx)("div", {
                        className: E.JX
                    }), (0, r.jsx)(c.Text, {
                        variant: "text-xs/normal",
                        color: "text-default",
                        children: v.intl.format(v.t["LC+S+m"], {
                            membersOnline: i.approximatePresenceCount
                        })
                    })]
                }), null != i.approximateMemberCount && (0, r.jsxs)("div", {
                    className: E.Kl,
                    children: [(0, r.jsx)("div", {
                        className: E.Li
                    }), (0, r.jsx)(c.Text, {
                        variant: "text-xs/normal",
                        color: "text-default",
                        children: v.intl.format(v.t.zRl6XR, {
                            count: i.approximateMemberCount
                        })
                    })]
                })]
            }), (0, r.jsx)("div", {
                className: E.PD,
                children: (0, r.jsx)(c.Button, {
                    loading: s,
                    variant: p ? "secondary" : "active",
                    onClick: _,
                    text: N,
                    fullWidth: !0
                })
            })]
        }), (0, r.jsx)(T, {
            entry: i
        })]
    })
})