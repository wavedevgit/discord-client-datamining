/** Chunk was on web.js **/
/** chunk id: 43136, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => w,
    C: () => N
}), n(896048), n(228524), n(733351);
var r = n(627968),
    i = n(64700),
    a = n(284009),
    s = n.n(a),
    o = n(311907),
    l = n(397927),
    c = n(241524),
    u = n(289397),
    d = n(607470),
    f = n(263063),
    p = n(258335),
    _ = n(253932),
    h = n(696451),
    m = n(287809),
    g = n(792831),
    E = n(427262),
    y = n(218394),
    b = n(386952),
    O = n(381969),
    v = n(920814),
    A = n(235665),
    I = n(985018),
    S = n(425666);

function T(e) {
    let {
        onClick: t
    } = e;
    return (0, r.jsxs)(l.DUT, {
        onClick: t,
        className: S.dO,
        children: [(0, r.jsx)(l.Text, {
            variant: "text-sm/medium",
            color: "text-strong",
            children: I.intl.string(I.t.J4cw1q)
        }), (0, r.jsx)(l.hKd, {
            size: 4,
            horizontal: !0
        }), (0, r.jsx)(g.A, {
            direction: g.A.Directions.RIGHT,
            className: S.wY
        })]
    })
}

function C(e) {
    return (0, o.cf)([h.Ay, m.default], () => {
        var t, n;
        let r = m.default.getCurrentUser();
        s()(null != r, "user cannot be null");
        let i = h.Ay.getMember(e, r.id);
        return {
            nickname: null != (t = null == i ? void 0 : i.nick) ? t : E.Ay.getName(r),
            nickcolor: null != (n = null == i ? void 0 : i.colorString) ? n : void 0
        }
    }, [e])
}

function N(e) {
    let {
        coverImageAsset: t,
        isPreview: n = !1
    } = e, i = _.kt.useSetting(), a = (0, y.j)() && i, [s, o] = (0, p.A)(t, a), l = a ? (0, r.jsx)(d.A, {
        autoPlay: !0,
        loop: !0,
        className: S.N4,
        width: 655,
        poster: (0, u.n)("server_products/storefront/default-header.png"),
        src: (0, u.n)("server_products/storefront/default-header.mov")
    }) : (0, r.jsx)("img", {
        src: (0, u.n)("server_products/storefront/default-header.png"),
        alt: "",
        className: S.N4
    });
    return (0, r.jsx)("div", {
        ref: s,
        className: S.El,
        children: null == o || n ? l : (0, r.jsx)("img", {
            src: o,
            alt: "",
            className: S.N4
        })
    })
}

function w(e) {
    var t, n;
    let {
        guild: a,
        subscriptionsSettings: s
    } = e, o = a.id, {
        nickname: d,
        nickcolor: p
    } = C(o), {
        isTruncated: _,
        ExpandableTextContainer: h
    } = (0, b.e)(), m = () => (0, A.A)({
        guildId: o
    }), g = (null != (t = null == s || null == (n = s.description) ? void 0 : n.trim().length) ? t : 0) > 0, [E, y] = i.useState(1), w = (0, c.A)("(max-width: 1439px)"), {
        selectedTab: R,
        isPhantomPreview: P
    } = (0, O.k)(), D = R === v.B.GUILD_PRODUCTS_PREVIEW ? I.intl.string(I.t["LvXy/H"]) : I.intl.string(I.t.XyqKh8), x = e => {
        null != e && e.clientHeight > 30 && y(2)
    };

    function L(e, t) {
        return (0, r.jsx)("span", {
            style: {
                color: p
            },
            children: e
        }, t)
    }
    let j = g ? (0, r.jsxs)(r.Fragment, {
        children: [(0, r.jsx)(h, {
            lineClamp: w || 2 === E ? 2 : 3,
            children: (0, r.jsx)(l.Text, {
                variant: "text-sm/normal",
                color: "text-default",
                children: null == s ? void 0 : s.description
            })
        }), _ && (0, r.jsxs)(r.Fragment, {
            children: [(0, r.jsx)(l.hKd, {
                size: 4
            }), (0, r.jsx)(T, {
                onClick: m
            })]
        })]
    }) : (0, r.jsx)(l.Text, {
        variant: "text-sm/normal",
        color: "text-default",
        children: P ? D : I.intl.string(I.t["NY/FIW"])
    });
    return (0, r.jsxs)("div", {
        className: S.kL,
        children: [(0, r.jsxs)("div", {
            className: S.op,
            children: [(0, r.jsx)("div", {
                children: (0, r.jsx)(f.A, {
                    guild: a,
                    size: f.A.Sizes.LARGER,
                    iconSrc: null == a.icon || P ? (0, u.n)("server_products/storefront/default-guild-icon.jpg") : void 0
                })
            }), (0, r.jsx)(l.hKd, {
                size: 16,
                horizontal: !0
            }), (0, r.jsxs)("div", {
                children: [(0, r.jsx)("div", {
                    ref: x,
                    children: (0, r.jsx)(l.Heading, {
                        variant: "heading-xl/semibold",
                        color: "text-strong",
                        lineClamp: 2,
                        children: P ? I.intl.string(I.t.rtgp7q) : I.intl.formatToPlainString(I.t.NZeik9, {
                            guildName: a.name
                        })
                    })
                }), (0, r.jsx)(l.hKd, {
                    size: 8
                }), (0, r.jsx)(l.Text, {
                    variant: "text-md/normal",
                    color: "text-default",
                    children: I.intl.format(I.t["7JwrlH"], {
                        username: d,
                        usernameHook: L
                    })
                }), (0, r.jsx)(l.hKd, {
                    size: 9
                }), j]
            })]
        }), (0, r.jsx)(N, {
            coverImageAsset: null == s ? void 0 : s.cover_image_asset,
            isPreview: P
        })]
    })
}