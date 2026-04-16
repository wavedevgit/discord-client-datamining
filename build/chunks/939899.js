/** chunk id: 939899 params = (module,exports,require) **/
n.d(t, {
    A: () => T,
    R: () => N
});
var i = n(627968),
    a = n(64700),
    l = n(503698),
    s = n.n(l),
    r = n(485584),
    o = n(598748),
    c = n(158954),
    d = n(311907),
    u = n(793574),
    g = n(688810),
    _ = n(362490),
    m = n(369374),
    f = n(531913),
    x = n(429913),
    p = n(287809),
    I = n(183555),
    A = n(622543),
    h = n(985018),
    E = n(923608);

function v(e) {
    let {
        applicationId: t,
        size: n = "default"
    } = e, a = (0, d.bG)([A.A], () => A.A.getApplicationWidgetConfig(t));
    return (0, i.jsxs)("div", {
        className: s()(E.kL, {
            [E.PG]: "small" === n
        }),
        children: [(0, i.jsxs)("div", {
            className: E.Qs,
            children: [(0, i.jsx)("div", {
                className: E.wx
            }), (0, i.jsx)("div", {
                className: E.yF
            }), (0, i.jsxs)("div", {
                className: E.M1,
                children: [(0, i.jsx)("div", {
                    className: E.dJ
                }), (0, i.jsx)("div", {
                    className: E.dJ
                }), (0, i.jsx)("div", {
                    className: E.dJ
                }), (0, i.jsx)("div", {
                    className: E.dJ
                }), (0, i.jsx)("div", {
                    className: E.dJ
                }), (0, i.jsx)("div", {
                    className: E.dJ
                })]
            })]
        }), (0, i.jsx)("div", {
            className: E.ZS,
            children: a?.miniPreviewImage != null ? (0, i.jsx)("img", {
                src: a.miniPreviewImage,
                alt: "",
                className: E.oz
            }) : (0, i.jsx)("div", {
                className: E.FQ
            })
        })]
    })
}

function j(e) {
    let {
        applicationId: t,
        size: n = "default",
        userId: a
    } = e, l = (0, f.A)(a, t), c = l.surfaceConfigs[o.m.ADD_WIDGET_PREVIEW];
    return null == c ? null : (0, i.jsx)("div", {
        className: s()(E.iW, {
            [E.PG]: "small" === n
        }),
        children: (0, i.jsx)(r.kH, {
            ...l,
            surface: o.m.ADD_WIDGET_PREVIEW,
            surfaceConfig: c,
            layoutProps: {
                small: "small" === n
            }
        })
    })
}

function T(e) {
    let t = (0, d.bG)([p.default], () => p.default.getCurrentUser()),
        {
            enabled: n
        } = m.A.useConfig({
            location: "PlaceholderApplicationWidget"
        });
    return n ? null == t ? null : (0, i.jsx)(j, {
        ...e,
        userId: t.id
    }) : (0, i.jsx)(v, {
        ...e
    })
}

function N(e) {
    let {
        applicationId: t,
        size: n = "default"
    } = e, {
        trackUserProfileAction: l
    } = (0, I.NJ)(), s = (0, x.h)(t), {
        hasAlreadyLinked: r,
        canStartAuthorization: o,
        startAuthorization: d,
        fetched: m
    } = (0, _.RD)(s), {
        analyticsLocations: f
    } = (0, g.Ay)(u.A.USER_PROFILE_APPLICATION_WIDGET), p = a.useCallback(() => {
        o && (l({
            action: "PRESS_APPLICATION_WIDGET_PLACEHOLDER_CONNECT",
            applicationId: t
        }), d({
            analyticsLocations: f
        }))
    }, [o, l, t, d, f]);
    return "default" !== n || null == s ? null : (0, i.jsxs)("div", {
        className: E.qr,
        children: [(0, i.jsx)(c.A5T, {
            size: "xs"
        }), (0, i.jsx)(c.EYj, {
            variant: "text-sm/medium",
            color: "text-subtle",
            children: m ? r ? h.intl.format(h.t.wiyuG9, {
                applicationName: s.name
            }) : o ? h.intl.format(h.t.RNWFOQ, {
                onConnect: p
            }) : h.intl.string(h.t["9TX4UT"]) : (0, i.jsx)("div", {
                className: E.bg
            })
        })]
    })
}