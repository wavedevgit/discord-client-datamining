/** Chunk was on 42944 **/
/** chunk id: 939899, original params: e,a,n (module,exports,require) **/
n.d(a, {
    A: () => g,
    R: () => A
});
var t = n(627968),
    l = n(64700),
    i = n(503698),
    r = n.n(i),
    s = n(158954),
    o = n(311907),
    c = n(793574),
    d = n(688810),
    u = n(362490),
    m = n(429913),
    p = n(183555),
    f = n(622543),
    v = n(985018),
    x = n(413611);

function g(e) {
    let {
        applicationId: a,
        size: n = "default"
    } = e, l = (0, o.bG)([f.A], () => f.A.getApplicationWidgetConfig(a));
    return (0, t.jsxs)("div", {
        className: r()(x.kL, {
            [x.PG]: "small" === n
        }),
        children: [(0, t.jsxs)("div", {
            className: x.Qs,
            children: [(0, t.jsx)("div", {
                className: x.wx
            }), (0, t.jsx)("div", {
                className: x.yF
            }), (0, t.jsxs)("div", {
                className: x.M1,
                children: [(0, t.jsx)("div", {
                    className: x.dJ
                }), (0, t.jsx)("div", {
                    className: x.dJ
                }), (0, t.jsx)("div", {
                    className: x.dJ
                }), (0, t.jsx)("div", {
                    className: x.dJ
                }), (0, t.jsx)("div", {
                    className: x.dJ
                }), (0, t.jsx)("div", {
                    className: x.dJ
                })]
            })]
        }), (0, t.jsx)("div", {
            className: x.ZS,
            children: (null == l ? void 0 : l.miniPreviewImage) != null ? (0, t.jsx)("img", {
                src: l.miniPreviewImage,
                alt: "",
                className: x.oz
            }) : (0, t.jsx)("div", {
                className: x.FQ
            })
        })]
    })
}

function A(e) {
    let {
        applicationId: a,
        size: n = "default"
    } = e, {
        trackUserProfileAction: i
    } = (0, p.NJ)(), r = (0, m.h)(a), {
        hasAlreadyLinked: o,
        canStartAuthorization: f,
        startAuthorization: g,
        fetched: A
    } = (0, u.RD)(r), {
        analyticsLocations: j
    } = (0, d.Ay)(c.A.USER_PROFILE_APPLICATION_WIDGET), h = l.useCallback(() => {
        f && (i({
            action: "PRESS_APPLICATION_WIDGET_PLACEHOLDER_CONNECT",
            applicationId: a
        }), g({
            analyticsLocations: j
        }))
    }, [f, i, a, g, j]);
    return "default" !== n || null == r ? null : (0, t.jsxs)("div", {
        className: x.qr,
        children: [(0, t.jsx)(s.A5T, {
            size: "xs"
        }), (0, t.jsx)(s.EYj, {
            variant: "text-sm/medium",
            color: "text-subtle",
            children: A ? o ? v.intl.format(v.t.wiyuG9, {
                applicationName: r.name
            }) : f ? v.intl.format(v.t.RNWFOQ, {
                onConnect: h
            }) : v.intl.string(v.t["9TX4UT"]) : (0, t.jsx)("div", {
                className: x.bg
            })
        })]
    })
}