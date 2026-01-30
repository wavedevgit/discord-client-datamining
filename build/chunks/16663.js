/** chunk id: 16663, original params: t,e,n (module,exports,require) **/
n.d(e, {
    A: () => b
});
var l = n(627968);
n(64700);
var r = n(397927),
    i = n(182592),
    a = n(950191),
    o = n(718019),
    s = n(31432),
    u = n(915614),
    c = n(946356),
    d = n(810396),
    m = n(159218),
    f = n(562153),
    p = n(996988),
    g = n(985018),
    h = n(98167);

function b(t) {
    var e;
    let {
        user: n,
        previewText: b,
        previewEmoji: A,
        previewStatus: T,
        placeHolderText: y,
        transitionState: O
    } = t, S = (0, a.Ay)(n.id), j = null != b && "" !== b || null != A ? g.intl.formatToPlainString(g.t.UpF5Qa, {
        emoji: null != (e = null == A ? void 0 : A.name) ? e : "",
        status: b
    }) : "".concat(g.intl.string(g.t.EVV6uZ), ": ").concat(y);
    return (0, l.jsx)("div", {
        role: "img",
        "aria-label": j,
        children: (0, l.jsxs)(c.A, {
            user: n,
            displayProfile: S,
            themeType: p.d.POPOUT,
            className: h.ti,
            "aria-hidden": "true",
            children: [(0, l.jsxs)("header", {
                children: [(0, l.jsx)(u.A, {
                    user: n,
                    displayProfile: S,
                    themeType: p.d.POPOUT
                }), (0, l.jsx)("div", {
                    inert: !0,
                    children: (0, l.jsx)(o.A, {
                        user: n,
                        displayProfile: S,
                        themeType: p.d.POPOUT,
                        previewStatus: T,
                        className: h.my
                    })
                }), (0, l.jsx)(m.A, {
                    user: n,
                    themeType: p.d.POPOUT,
                    previewText: b,
                    previewEmoji: A,
                    placeholderText: y,
                    hasEntered: O === r.ip4.ENTERED
                })]
            }), (null == S ? void 0 : S.profileEffect) != null && (0, l.jsx)(i.A, {
                skuId: S.profileEffect.skuId
            }), (0, l.jsx)("div", {
                className: h.QV,
                inert: !0,
                children: (0, l.jsx)(d.A, {
                    user: n,
                    nickname: f.Ay.getName(null, null, n),
                    pronouns: null == S ? void 0 : S.pronouns,
                    tags: (0, l.jsx)(s.A, {
                        displayProfile: S,
                        themeType: p.d.POPOUT
                    })
                })
            })]
        })
    })
}