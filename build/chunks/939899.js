/** chunk id: 939899 params = (module,exports,require) **/
n.d(t, {
    A: () => h,
    R: () => _
});
var i = n(627968),
    a = n(64700),
    l = n(503698),
    s = n.n(l),
    r = n(158954),
    o = n(311907),
    c = n(793574),
    d = n(688810),
    u = n(362490),
    g = n(429913),
    m = n(183555),
    p = n(622543),
    x = n(985018),
    f = n(413525);

function h(e) {
    let {
        applicationId: t,
        size: n = "default"
    } = e, a = (0, o.bG)([p.A], () => p.A.getApplicationWidgetConfig(t));
    return (0, i.jsxs)("div", {
        className: s()(f.kL, {
            [f.PG]: "small" === n
        }),
        children: [(0, i.jsxs)("div", {
            className: f.Qs,
            children: [(0, i.jsx)("div", {
                className: f.wx
            }), (0, i.jsx)("div", {
                className: f.yF
            }), (0, i.jsxs)("div", {
                className: f.M1,
                children: [(0, i.jsx)("div", {
                    className: f.dJ
                }), (0, i.jsx)("div", {
                    className: f.dJ
                }), (0, i.jsx)("div", {
                    className: f.dJ
                }), (0, i.jsx)("div", {
                    className: f.dJ
                }), (0, i.jsx)("div", {
                    className: f.dJ
                }), (0, i.jsx)("div", {
                    className: f.dJ
                })]
            })]
        }), (0, i.jsx)("div", {
            className: f.ZS,
            children: a?.miniPreviewImage != null ? (0, i.jsx)("img", {
                src: a.miniPreviewImage,
                alt: "",
                className: f.oz
            }) : (0, i.jsx)("div", {
                className: f.FQ
            })
        })]
    })
}

function _(e) {
    let {
        applicationId: t,
        size: n = "default"
    } = e, {
        trackUserProfileAction: l
    } = (0, m.NJ)(), s = (0, g.h)(t), {
        hasAlreadyLinked: o,
        canStartAuthorization: p,
        startAuthorization: h,
        fetched: _
    } = (0, u.RD)(s), {
        analyticsLocations: A
    } = (0, d.Ay)(c.A.USER_PROFILE_APPLICATION_WIDGET), I = a.useCallback(() => {
        p && (l({
            action: "PRESS_APPLICATION_WIDGET_PLACEHOLDER_CONNECT",
            applicationId: t
        }), h({
            analyticsLocations: A
        }))
    }, [p, l, t, h, A]);
    return "default" !== n || null == s ? null : (0, i.jsxs)("div", {
        className: f.qr,
        children: [(0, i.jsx)(r.A5T, {
            size: "xs"
        }), (0, i.jsx)(r.EYj, {
            variant: "text-sm/medium",
            color: "text-subtle",
            children: _ ? o ? x.intl.format(x.t.wiyuG9, {
                applicationName: s.name
            }) : p ? x.intl.format(x.t.RNWFOQ, {
                onConnect: I
            }) : x.intl.string(x.t["9TX4UT"]) : (0, i.jsx)("div", {
                className: f.bg
            })
        })]
    })
}