/** Chunk was on 21738 **/
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
    f = n(985018),
    m = n(413611);

function A(e) {
    let {
        applicationId: t,
        size: n = "default"
    } = e, i = (0, o.bG)([g.A], () => g.A.getApplicationWidgetConfig(t));
    return (0, r.jsxs)("div", {
        className: a()(m.kL, {
            [m.PG]: "small" === n
        }),
        children: [(0, r.jsxs)("div", {
            className: m.Qs,
            children: [(0, r.jsx)("div", {
                className: m.wx
            }), (0, r.jsx)("div", {
                className: m.yF
            }), (0, r.jsxs)("div", {
                className: m.M1,
                children: [(0, r.jsx)("div", {
                    className: m.dJ
                }), (0, r.jsx)("div", {
                    className: m.dJ
                }), (0, r.jsx)("div", {
                    className: m.dJ
                }), (0, r.jsx)("div", {
                    className: m.dJ
                }), (0, r.jsx)("div", {
                    className: m.dJ
                }), (0, r.jsx)("div", {
                    className: m.dJ
                })]
            })]
        }), (0, r.jsx)("div", {
            className: m.ZS,
            children: (null == i ? void 0 : i.miniPreviewImage) != null ? (0, r.jsx)("img", {
                src: i.miniPreviewImage,
                alt: "",
                className: m.oz
            }) : (0, r.jsx)("div", {
                className: m.FQ
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
        className: m.qr,
        children: [(0, r.jsx)(s.A5T, {
            size: "xs"
        }), (0, r.jsx)(s.EYj, {
            variant: "text-sm/medium",
            color: "text-subtle",
            children: _ ? o ? f.intl.format(f.t.wiyuG9, {
                applicationName: a.name
            }) : g ? f.intl.format(f.t.RNWFOQ, {
                onConnect: E
            }) : f.intl.string(f.t["9TX4UT"]) : (0, r.jsx)("div", {
                className: m.bg
            })
        })]
    })
}