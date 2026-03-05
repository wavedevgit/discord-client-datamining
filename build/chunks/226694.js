/** chunk id: 226694, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => j,
    s: () => v
});
var i = n(627968),
    s = n(64700),
    l = n(503698),
    r = n.n(l),
    a = n(311907),
    o = n(990078),
    c = n(397927),
    d = n(442433),
    u = n(686956),
    h = n(573435),
    A = n(101555),
    m = n(263063),
    p = n(714991),
    g = n(776231),
    _ = n(345942),
    f = n(71393),
    x = n(486020),
    C = n(860689),
    E = n(352123),
    I = n(682557),
    N = n(652215),
    S = n(985018),
    b = n(856528),
    T = n(166382);
let v = s.memo(function(e) {
    let {
        onClick: t
    } = e;
    return (0, i.jsxs)(c.DUT, {
        onClick: t,
        className: b.Eo,
        children: [(0, i.jsx)("img", {
            alt: "",
            src: T
        }), (0, i.jsx)(c.Text, {
            variant: "text-sm/semibold",
            color: "text-strong",
            className: b.Kk,
            children: S.intl.string(S.t.H9jxS1)
        })]
    })
});

function y(e) {
    let {
        entry: t
    } = e, [l, a] = s.useState(!1), d = s.useRef(null), {
        canEdit: u
    } = (0, E.A)(t);
    return (0, i.jsx)("div", {
        className: r()(b.fc, {
            [b.QX]: l
        }),
        children: (0, i.jsxs)(A.Ay, {
            children: [u ? (0, i.jsx)(o.m, {
                text: S.intl.string(S.t.XnuOvN),
                children: (0, i.jsx)(A.$n, {
                    onClick: () => {
                        (0, c.mMO)(async () => {
                            let {
                                default: e
                            } = await n.e("88869").then(n.bind(n, 201700));
                            return n => (0, i.jsx)(e, {
                                ...n,
                                entry: t
                            })
                        })
                    },
                    "aria-label": S.intl.string(S.t.XnuOvN),
                    children: (0, i.jsx)(c.R2l, {
                        size: "xs",
                        color: "currentColor",
                        className: b.IQ
                    })
                })
            }) : null, (0, i.jsx)(I.A, {
                targetElementRef: d,
                onRequestOpen: () => a(!0),
                onRequestClose: () => a(!1),
                entry: t,
                hideEditButton: !0,
                children: e => {
                    let {
                        onClick: t,
                        ...n
                    } = e;
                    return (0, i.jsx)(o.m, {
                        text: S.intl.string(S.t["UKOtz+"]),
                        children: (0, i.jsx)(A.$n, {
                            ...n,
                            onClick: e => {
                                t(e)
                            },
                            ref: d,
                            "aria-label": S.intl.string(S.t["UKOtz+"]),
                            children: (0, i.jsx)(c.jNK, {
                                size: "md",
                                color: "currentColor",
                                className: b.IQ
                            })
                        })
                    })
                }
            })]
        })
    })
}
let j = s.memo(function(e) {
    let {
        entry: t
    } = e, [l, r] = s.useState(!1), o = null != (0, a.bG)([f.A], () => f.A.getGuild(t.guildId)), A = async () => {
        r(!0);
        try {
            o ? (0, _.u)(t.guildId) : await u.A.joinGuild(t.guildId, {
                source: N.Q4z.DIRECTORY_ENTRY
            })
        } finally {
            r(!1)
        }
    }, E = x.Ay.getGuildSplashURL({
        id: t.guildId,
        splash: t.splash,
        size: 300 * (0, g.mZ)()
    }), I = x.Ay.getGuildIconURL({
        id: t.guildId,
        icon: t.icon,
        size: 40
    }) ?? void 0, T = S.intl.string(S.t.VJlc0S);
    return o && (T = S.intl.string(S.t.cqWE2Z)), (0, i.jsxs)("div", {
        className: b.Nr,
        onContextMenu: e => {
            (0, d.L3)(e, async () => {
                let {
                    default: e
                } = await Promise.resolve().then(n.bind(n, 283354));
                return n => (0, i.jsx)(e, {
                    ...n,
                    entry: t
                })
            })
        },
        children: [(0, i.jsxs)("div", {
            className: b.MY,
            children: [(0, i.jsx)("div", {
                className: b.Yi,
                children: null != E && (0, i.jsx)("img", {
                    src: E,
                    alt: "",
                    className: b.j0
                })
            }), (0, i.jsx)("div", {
                className: b.$f,
                children: (0, i.jsx)(h.Ay, {
                    mask: h.Ay.Masks.SQUIRCLE,
                    width: 48,
                    height: 48,
                    children: (0, i.jsx)("div", {
                        className: b.SA,
                        children: (0, i.jsx)(m.Ay, {
                            className: b.rZ,
                            iconSrc: I,
                            guild: (0, C.xi)(t),
                            size: m.Ay.Sizes.MEDIUM,
                            active: !0
                        })
                    })
                })
            })]
        }), (0, i.jsxs)("div", {
            className: b.OA,
            children: [(0, i.jsxs)("div", {
                className: b.DD,
                children: [(0, i.jsx)(p.A, {
                    className: b.n2,
                    guild: t
                }), (0, i.jsx)(c.Text, {
                    className: b.J5,
                    variant: "heading-md/semibold",
                    color: "text-strong",
                    children: t.name
                })]
            }), (0, i.jsx)(c.Text, {
                className: b.h_,
                variant: "text-sm/normal",
                color: "text-default",
                children: t.description
            }), (0, i.jsxs)("div", {
                className: b.Fj,
                children: [null != t.approximatePresenceCount && (0, i.jsxs)("div", {
                    className: b.Kl,
                    children: [(0, i.jsx)("div", {
                        className: b.JX
                    }), (0, i.jsx)(c.Text, {
                        variant: "text-xs/normal",
                        color: "text-default",
                        children: S.intl.format(S.t["LC+S+m"], {
                            membersOnline: t.approximatePresenceCount
                        })
                    })]
                }), null != t.approximateMemberCount && (0, i.jsxs)("div", {
                    className: b.Kl,
                    children: [(0, i.jsx)("div", {
                        className: b.Li
                    }), (0, i.jsx)(c.Text, {
                        variant: "text-xs/normal",
                        color: "text-default",
                        children: S.intl.format(S.t.zRl6XR, {
                            count: t.approximateMemberCount
                        })
                    })]
                })]
            }), (0, i.jsx)("div", {
                className: b.PD,
                children: (0, i.jsx)(c.Button, {
                    loading: l,
                    variant: o ? "secondary" : "active",
                    onClick: A,
                    text: T,
                    fullWidth: !0
                })
            })]
        }), (0, i.jsx)(y, {
            entry: t
        })]
    })
})