/** chunk id: 939899, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => A,
    R: () => _
});
var r = n(627968),
    i = n(64700),
    l = n(503698),
    a = n.n(l),
    s = n(158954),
    o = n(311907),
    c = n(793574),
    u = n(688810),
    d = n(362490),
    p = n(429913),
    h = n(183555),
    g = n(622543),
    m = n(985018),
    f = n(413611);

function A(e) {
    let {
        applicationId: t,
        size: n = "default"
    } = e, i = (0, o.bG)([g.A], () => g.A.getApplicationWidgetConfig(t));
    return (0, r.jsxs)("div", {
        className: a()(f.kL, {
            [f.PG]: "small" === n
        }),
        children: [(0, r.jsxs)("div", {
            className: f.Qs,
            children: [(0, r.jsx)("div", {
                className: f.wx
            }), (0, r.jsx)("div", {
                className: f.yF
            }), (0, r.jsxs)("div", {
                className: f.M1,
                children: [(0, r.jsx)("div", {
                    className: f.dJ
                }), (0, r.jsx)("div", {
                    className: f.dJ
                }), (0, r.jsx)("div", {
                    className: f.dJ
                }), (0, r.jsx)("div", {
                    className: f.dJ
                }), (0, r.jsx)("div", {
                    className: f.dJ
                }), (0, r.jsx)("div", {
                    className: f.dJ
                })]
            })]
        }), (0, r.jsx)("div", {
            className: f.ZS,
            children: (null == i ? void 0 : i.miniPreviewImage) != null ? (0, r.jsx)("img", {
                src: i.miniPreviewImage,
                alt: "",
                className: f.oz
            }) : (0, r.jsx)("div", {
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
    } = (0, h.NJ)(), a = (0, p.h)(t), {
        hasAlreadyLinked: o,
        canStartAuthorization: g,
        startAuthorization: A,
        fetched: _
    } = (0, d.RD)(a), {
        analyticsLocations: b
    } = (0, u.Ay)(c.A.USER_PROFILE_APPLICATION_WIDGET), E = i.useCallback(() => {
        g && (l({
            action: "PRESS_APPLICATION_WIDGET_PLACEHOLDER_CONNECT",
            applicationId: t
        }), A({
            analyticsLocations: b
        }))
    }, [g, l, t, A, b]);
    return "default" !== n || null == a ? null : (0, r.jsxs)("div", {
        className: f.qr,
        children: [(0, r.jsx)(s.A5T, {
            size: "xs"
        }), (0, r.jsx)(s.EYj, {
            variant: "text-sm/medium",
            color: "text-subtle",
            children: _ ? o ? m.intl.format(m.t.wiyuG9, {
                applicationName: a.name
            }) : g ? m.intl.format(m.t.RNWFOQ, {
                onConnect: E
            }) : m.intl.string(m.t["9TX4UT"]) : (0, r.jsx)("div", {
                className: f.bg
            })
        })]
    })
}