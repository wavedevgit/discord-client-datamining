/** chunk id: 779457, original params: e,t,n (module,exports,require) **/
n.d(t, {
    default: () => S
}), n(896048);
var r = n(627968),
    l = n(64700),
    i = n(503698),
    a = n.n(i),
    s = n(284009),
    c = n.n(s),
    o = n(158954),
    d = n(311907),
    u = n(862482),
    x = n(732955),
    m = n(397927),
    f = n(303612),
    h = n(282125),
    j = n(317525),
    g = n(71393),
    v = n(580630),
    b = n(912702),
    p = n(871109),
    y = n(571654),
    O = n(59375),
    _ = n(391442),
    N = n(411342),
    z = n(179499),
    A = n(985018),
    K = n(560381);

function P(e) {
    let {
        guildProductListing: t,
        guildId: n,
        skuPricePreview: l
    } = e, i = (0, y.z)(t), a = (0, v.$g)(l.amount, l.currency), s = (0, d.bG)([g.A], () => g.A.getGuild(n));
    return c()(null != s, "guild cannot be null"), (0, r.jsxs)("div", {
        className: K.Tp,
        children: [(0, r.jsx)(f.A, {
            alt: "",
            className: K.$E,
            listing: t,
            imageSize: 100
        }), (0, r.jsxs)("div", {
            className: K.Vr,
            children: [(0, r.jsx)(m.Text, {
                variant: "text-md/medium",
                color: "text-strong",
                children: t.name
            }), (0, r.jsx)(m.hKd, {
                size: 4
            }), (0, r.jsxs)("div", {
                children: [(0, r.jsx)(m.Text, {
                    variant: "text-xs/normal",
                    color: "text-muted",
                    lineClamp: 1,
                    children: i
                }), (0, r.jsx)(m.Text, {
                    variant: "text-xs/normal",
                    color: "text-muted",
                    lineClamp: 1,
                    children: s.name
                })]
            })]
        }), (0, r.jsxs)("div", {
            className: K.$8,
            children: [(0, r.jsx)(m.Text, {
                variant: "text-md/medium",
                color: "text-strong",
                children: a
            }), (0, r.jsx)(m.hKd, {
                size: 4
            }), (0, r.jsx)(m.Text, {
                variant: "text-xs/normal",
                color: "text-muted",
                children: A.intl.string(A.t["5dWOZX"])
            })]
        })]
    })
}

function w(e) {
    var t;
    let {
        guildProductListing: n,
        guildId: l
    } = e, i = null != (t = n.attachments) ? t : [], s = i.length > 1, c = (0, z.A)({
        guildId: l,
        productId: n.id
    });
    return 0 === i.length ? null : (0, r.jsx)(_.A, {
        label: A.intl.string(A.t.HOkHPB),
        children: (0, r.jsxs)("div", {
            className: a()(K.KK, {
                [K.Oy]: s
            }),
            children: [(0, r.jsx)("div", {
                className: K.yO,
                children: i.map(e => (0, r.jsx)(O.A, {
                    attachment: e
                }, e.id))
            }), (0, r.jsx)("div", {
                children: (0, r.jsx)(x.$nd, function(e) {
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
                }({}, c))
            })]
        })
    })
}

function T(e) {
    let {
        role: t
    } = e;
    return null == t ? null : (0, r.jsx)(_.A, {
        label: A.intl.string(A.t.gWBNet),
        children: (0, r.jsx)(N.A, {
            role: t
        })
    })
}

function C(e) {
    return (0, r.jsx)(m.Text, {
        tag: "span",
        variant: "text-md/semibold",
        color: "text-default",
        children: e
    })
}

function S(e) {
    var t;
    let {
        onClose: n,
        transitionState: i,
        guildProductListingId: a,
        guildId: s,
        skuPricePreview: x
    } = e, f = (0, d.bG)([p.A], () => p.A.getGuildProduct(a));
    c()(null != f, "guildProductListing cannot be null");
    let [g, v] = l.useState(!1);
    l.useEffect(() => {
        !async function() {
            try {
                v(!0), await (0, b.py)(s, a), v(!1)
            } catch (e) {
                n(), (0, h.A)({
                    body: A.intl.string(A.t.VQ0lXY),
                    confirmText: A.intl.string(A.t["NX+WJN"]),
                    header: A.intl.string(A.t.OCwKlu),
                    confirmButtonColor: u.$n.Colors.BRAND
                })
            }
        }()
    }, [s, a, n]);
    let y = (null != (t = f.attachments) ? t : []).length > 0,
        O = f.role_id,
        _ = (0, d.bG)([j.A], () => null != O ? j.A.getRole(s, O) : void 0);
    return (0, r.jsx)(o.Modal, {
        title: A.intl.string(A.t.dhAgv3),
        subtitle: A.intl.format(A.t.X6yvvo, {
            productName: f.name,
            emphasisHook: C
        }),
        onClose: n,
        transitionState: i,
        size: "md",
        actions: [],
        children: g ? (0, r.jsx)(m.y$y, {}) : (0, r.jsxs)(r.Fragment, {
            children: [(0, r.jsxs)(m.Text, {
                variant: "text-md/normal",
                color: "text-default",
                children: [y ? A.intl.string(A.t["A/RnkK"]) + " " : "", null != _ ? A.intl.format(A.t.IeJDKs, {
                    roleName: _.name,
                    emphasisHook: C
                }) : ""]
            }), (0, r.jsx)(m.hKd, {
                size: 12
            }), (0, r.jsx)(m.Text, {
                variant: "text-md/normal",
                color: "text-default",
                children: A.intl.string(A.t["9S3QHF"])
            }), (0, r.jsx)(m.hKd, {
                size: 24
            }), (0, r.jsx)(P, {
                guildProductListing: f,
                guildId: s,
                skuPricePreview: x
            }), (0, r.jsx)(m.hKd, {
                size: 32
            }), (0, r.jsx)("div", {
                className: K.yF
            }), (0, r.jsx)(m.hKd, {
                size: 32
            }), (0, r.jsxs)("ul", {
                className: K.iq,
                children: [(0, r.jsx)(w, {
                    guildProductListing: f,
                    guildId: s
                }), (0, r.jsx)(T, {
                    role: _
                })]
            })]
        })
    })
}