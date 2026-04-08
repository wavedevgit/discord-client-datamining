/** chunk id: 939899 params = (module,exports,require) **/
n.d(t, {
    A: () => T,
    R: () => b
});
var i = n(627968),
    a = n(64700),
    l = n(503698),
    s = n.n(l),
    r = n(485584),
    o = n(598748),
    d = n(158954),
    c = n(311907),
    u = n(793574),
    g = n(688810),
    m = n(362490),
    x = n(369374),
    f = n(531913),
    p = n(429913),
    h = n(287809),
    _ = n(183555),
    A = n(622543),
    I = n(985018),
    j = n(413525);

function v(e) {
    let {
        applicationId: t,
        size: n = "default"
    } = e, a = (0, c.bG)([A.A], () => A.A.getApplicationWidgetConfig(t));
    return (0, i.jsxs)("div", {
        className: s()(j.kL, {
            [j.PG]: "small" === n
        }),
        children: [(0, i.jsxs)("div", {
            className: j.Qs,
            children: [(0, i.jsx)("div", {
                className: j.wx
            }), (0, i.jsx)("div", {
                className: j.yF
            }), (0, i.jsxs)("div", {
                className: j.M1,
                children: [(0, i.jsx)("div", {
                    className: j.dJ
                }), (0, i.jsx)("div", {
                    className: j.dJ
                }), (0, i.jsx)("div", {
                    className: j.dJ
                }), (0, i.jsx)("div", {
                    className: j.dJ
                }), (0, i.jsx)("div", {
                    className: j.dJ
                }), (0, i.jsx)("div", {
                    className: j.dJ
                })]
            })]
        }), (0, i.jsx)("div", {
            className: j.ZS,
            children: a?.miniPreviewImage != null ? (0, i.jsx)("img", {
                src: a.miniPreviewImage,
                alt: "",
                className: j.oz
            }) : (0, i.jsx)("div", {
                className: j.FQ
            })
        })]
    })
}

function E(e) {
    let {
        applicationId: t,
        size: n = "default",
        userId: a
    } = e, l = (0, f.A)(a, t), d = l.surfaceConfigs[o.m.ADD_WIDGET_PREVIEW];
    return null == d ? null : (0, i.jsx)("div", {
        className: s()(j.iW, {
            [j.PG]: "small" === n
        }),
        children: (0, i.jsx)(r.kH, {
            ...l,
            surface: o.m.ADD_WIDGET_PREVIEW,
            surfaceConfig: d,
            layoutProps: {
                small: "small" === n
            }
        })
    })
}

function T(e) {
    let t = (0, c.bG)([h.default], () => h.default.getCurrentUser()),
        {
            enabled: n
        } = x.A.useConfig({
            location: "PlaceholderApplicationWidget"
        });
    return n ? null == t ? null : (0, i.jsx)(E, {
        ...e,
        userId: t.id
    }) : (0, i.jsx)(v, {
        ...e
    })
}

function b(e) {
    let {
        applicationId: t,
        size: n = "default"
    } = e, {
        trackUserProfileAction: l
    } = (0, _.NJ)(), s = (0, p.h)(t), {
        hasAlreadyLinked: r,
        canStartAuthorization: o,
        startAuthorization: c,
        fetched: x
    } = (0, m.RD)(s), {
        analyticsLocations: f
    } = (0, g.Ay)(u.A.USER_PROFILE_APPLICATION_WIDGET), h = a.useCallback(() => {
        o && (l({
            action: "PRESS_APPLICATION_WIDGET_PLACEHOLDER_CONNECT",
            applicationId: t
        }), c({
            analyticsLocations: f
        }))
    }, [o, l, t, c, f]);
    return "default" !== n || null == s ? null : (0, i.jsxs)("div", {
        className: j.qr,
        children: [(0, i.jsx)(d.A5T, {
            size: "xs"
        }), (0, i.jsx)(d.EYj, {
            variant: "text-sm/medium",
            color: "text-subtle",
            children: x ? r ? I.intl.format(I.t.wiyuG9, {
                applicationName: s.name
            }) : o ? I.intl.format(I.t.RNWFOQ, {
                onConnect: h
            }) : I.intl.string(I.t["9TX4UT"]) : (0, i.jsx)("div", {
                className: j.bg
            })
        })]
    })
}