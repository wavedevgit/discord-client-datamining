/** Chunk was on 67096 **/
/** chunk id: 319543, original params: e,A,t (module,exports,require) **/
t.d(A, {
    Ay: () => q,
    Jn: () => f,
    id: () => v
});
var r = t(627968);
t(64700);
var n = t(284009),
    l = t.n(n),
    a = t(317097),
    i = t(417597),
    o = t(732955),
    s = t(397927),
    d = t(317525),
    u = t(137766),
    c = t(652215),
    g = t(985018),
    p = t(463091);

function f() {
    return {
        name: "",
        color: c.TGz
    }
}

function m(e) {
    let A, {
        onRemove: t,
        role: n
    } = e;
    return null != n ? (0, r.jsx)(s.CR_, {
        items: [{
            id: n.id,
            label: n.name,
            icon: {
                type: "role",
                color: (0, a.Hl)(n.color)
            }
        }],
        onRemove: t
    }) : (A = (0, r.jsx)(s.y$y, {
        type: s.y$y.Type.PULSING_ELLIPSIS
    }), (0, r.jsx)("div", {
        className: p.qo,
        children: A
    }))
}

function v() {
    return (0, r.jsx)(s.EpV, {
        size: "xs",
        color: "currentColor",
        className: p.QW
    })
}

function h(e) {
    let {
        roleName: A
    } = e;
    return (0, r.jsxs)(r.Fragment, {
        children: [(0, r.jsx)(s.Text, {
            variant: "text-md/normal",
            color: "text-muted",
            children: g.intl.format(g.t.i2x5aY, {
                roleName: A,
                emphasisHook: e => (0, r.jsx)(s.Text, {
                    tag: "span",
                    variant: "text-md/semibold",
                    color: "text-default",
                    children: e
                })
            })
        }), (0, r.jsxs)(s.Heading, {
            className: p.wV,
            variant: "text-md/medium",
            color: "text-default",
            children: [(0, r.jsx)(s.Nxw, {
                size: "sm",
                color: "currentColor"
            }), (0, r.jsx)(s.hKd, {
                horizontal: !0,
                size: 8
            }), g.intl.string(g.t.KWx4HY)]
        }), (0, r.jsx)(s.Text, {
            variant: "text-md/normal",
            color: "text-muted",
            children: g.intl.string(g.t.hNHNph)
        }), (0, r.jsxs)(s.Heading, {
            className: p.wV,
            variant: "text-md/medium",
            color: "text-default",
            children: [(0, r.jsx)(s.ucK, {
                size: "sm",
                color: "currentColor"
            }), (0, r.jsx)(s.hKd, {
                horizontal: !0,
                size: 8
            }), g.intl.string(g.t.WIPKAb)]
        }), (0, r.jsx)(s.Text, {
            variant: "text-md/normal",
            color: "text-muted",
            children: g.intl.string(g.t["40shJX"])
        })]
    })
}

function q(e) {
    let {
        newRoleParams: A,
        setNewRoleParams: n,
        guildId: a,
        productId: c,
        listingRoleId: p,
        error: f
    } = e, v = (0, i.bG)([d.A], () => null != p ? d.A.getRole(a, p) : void 0);
    return null === A ? (0, r.jsx)(s.D0$, {
        label: g.intl.string(g.t.ovXIrP),
        description: g.intl.string(g.t["H7coX+"]),
        children: (0, r.jsxs)(s.M_l, {
            children: [(0, r.jsx)(m, {
                role: v,
                onRemove: void 0
            }), (0, r.jsx)(o.$nd, {
                text: g.intl.string(g.t.KkRpFi),
                icon: s.ejX,
                iconPosition: "end",
                variant: "secondary",
                onClick: () => {
                    n(void 0)
                }
            })]
        })
    }) : null != p ? (0, r.jsx)(s.D0$, {
        label: g.intl.string(g.t.zIg9tw),
        description: g.intl.string(g.t.OfuEkP),
        errorMessage: f,
        children: (0, r.jsx)(m, {
            role: v,
            onRemove: () => {
                l()(null != c, "productId cannot be null"), l()(null != v, "no role attached"),
                    function(e) {
                        let {
                            onConfirm: A,
                            roleName: n
                        } = e;
                        (0, s.mMO)(async () => {
                            let {
                                default: e
                            } = await t.e("44252").then(t.bind(t, 790743));
                            return t => (0, r.jsx)(e, function(e) {
                                for (var A = 1; A < arguments.length; A++) {
                                    var t = null != arguments[A] ? arguments[A] : {},
                                        r = Object.keys(t);
                                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(t).filter(function(e) {
                                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                                    }))), r.forEach(function(A) {
                                        var r;
                                        r = t[A], A in e ? Object.defineProperty(e, A, {
                                            value: r,
                                            enumerable: !0,
                                            configurable: !0,
                                            writable: !0
                                        }) : e[A] = r
                                    })
                                }
                                return e
                            }({
                                title: g.intl.string(g.t.Y3Hi3R),
                                body: (0, r.jsx)(h, {
                                    roleName: n
                                }),
                                cta: g.intl.string(g.t.VawZVx),
                                closeLabel: g.intl.string(g.t["6y+3Bw"]),
                                onConfirm: A
                            }, t))
                        })
                    }({
                        roleName: v.name,
                        onConfirm: () => n(null)
                    })
            }
        })
    }) : (l()(null != A, "newRoleParams cannot be null at this point"), (0, r.jsx)(s.D0$, {
        required: !0,
        label: g.intl.string(g.t.xZvFpA),
        errorMessage: f,
        children: (0, r.jsx)(u.A, {
            newRoleParams: A,
            setNewRoleParams: n
        })
    }))
}