/** chunk id: 939899 params = (module,exports,require) **/
n.d(t, {
    A: () => j,
    R: () => C
});
var i = n(627968),
    l = n(64700),
    a = n(503698),
    s = n.n(a),
    r = n(485584),
    o = n(598748),
    c = n(158954),
    d = n(311907),
    u = n(793574),
    m = n(688810),
    g = n(362490),
    f = n(369374),
    x = n(531913),
    p = n(429913),
    _ = n(287809),
    I = n(183555),
    h = n(622543),
    A = n(985018),
    E = n(413525);

function T(e) {
    let {
        applicationId: t,
        size: n = "default"
    } = e, l = (0, d.bG)([h.A], () => h.A.getApplicationWidgetConfig(t));
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
            children: l?.miniPreviewImage != null ? (0, i.jsx)("img", {
                src: l.miniPreviewImage,
                alt: "",
                className: E.oz
            }) : (0, i.jsx)("div", {
                className: E.FQ
            })
        })]
    })
}

function v(e) {
    let {
        applicationId: t,
        size: n = "default",
        userId: l
    } = e, a = (0, x.A)(l, t), c = a.surfaceConfigs[o.m.ADD_WIDGET_PREVIEW];
    return null == c ? null : (0, i.jsx)("div", {
        className: s()(E.iW, {
            [E.PG]: "small" === n
        }),
        children: (0, i.jsx)(r.kH, {
            ...a,
            surface: o.m.ADD_WIDGET_PREVIEW,
            surfaceConfig: c,
            layoutProps: {
                small: "small" === n
            }
        })
    })
}

function j(e) {
    let t = (0, d.bG)([_.default], () => _.default.getCurrentUser()),
        {
            enabled: n
        } = f.A.useConfig({
            location: "PlaceholderApplicationWidget"
        });
    return n ? null == t ? null : (0, i.jsx)(v, {
        ...e,
        userId: t.id
    }) : (0, i.jsx)(T, {
        ...e
    })
}

function C(e) {
    let {
        applicationId: t,
        size: n = "default"
    } = e, {
        trackUserProfileAction: a
    } = (0, I.NJ)(), s = (0, p.h)(t), {
        hasAlreadyLinked: r,
        canStartAuthorization: o,
        startAuthorization: d,
        fetched: f
    } = (0, g.RD)(s), {
        analyticsLocations: x
    } = (0, m.Ay)(u.A.USER_PROFILE_APPLICATION_WIDGET), _ = l.useCallback(() => {
        o && (a({
            action: "PRESS_APPLICATION_WIDGET_PLACEHOLDER_CONNECT",
            applicationId: t
        }), d({
            analyticsLocations: x
        }))
    }, [o, a, t, d, x]);
    return "default" !== n || null == s ? null : (0, i.jsxs)("div", {
        className: E.qr,
        children: [(0, i.jsx)(c.A5T, {
            size: "xs"
        }), (0, i.jsx)(c.EYj, {
            variant: "text-sm/medium",
            color: "text-subtle",
            children: f ? r ? A.intl.format(A.t.wiyuG9, {
                applicationName: s.name
            }) : o ? A.intl.format(A.t.RNWFOQ, {
                onConnect: _
            }) : A.intl.string(A.t["9TX4UT"]) : (0, i.jsx)("div", {
                className: E.bg
            })
        })]
    })
}