/** Chunk was on 20545 **/
/** chunk id: 939899, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => A,
    R: () => g
});
var i = n(627968),
    l = n(64700),
    r = n(503698),
    s = n.n(r),
    a = n(158954),
    d = n(311907),
    u = n(793574),
    o = n(688810),
    c = n(362490),
    m = n(429913),
    v = n(183555),
    f = n(622543),
    h = n(985018),
    x = n(413611);

function A(e) {
    let {
        applicationId: t,
        size: n = "default"
    } = e, l = (0, d.bG)([f.A], () => f.A.getApplicationWidgetConfig(t));
    return (0, i.jsxs)("div", {
        className: s()(x.kL, {
            [x.PG]: "small" === n
        }),
        children: [(0, i.jsxs)("div", {
            className: x.Qs,
            children: [(0, i.jsx)("div", {
                className: x.wx
            }), (0, i.jsx)("div", {
                className: x.yF
            }), (0, i.jsxs)("div", {
                className: x.M1,
                children: [(0, i.jsx)("div", {
                    className: x.dJ
                }), (0, i.jsx)("div", {
                    className: x.dJ
                }), (0, i.jsx)("div", {
                    className: x.dJ
                }), (0, i.jsx)("div", {
                    className: x.dJ
                }), (0, i.jsx)("div", {
                    className: x.dJ
                }), (0, i.jsx)("div", {
                    className: x.dJ
                })]
            })]
        }), (0, i.jsx)("div", {
            className: x.ZS,
            children: (null == l ? void 0 : l.miniPreviewImage) != null ? (0, i.jsx)("img", {
                src: l.miniPreviewImage,
                alt: "",
                className: x.oz
            }) : (0, i.jsx)("div", {
                className: x.FQ
            })
        })]
    })
}

function g(e) {
    let {
        applicationId: t,
        size: n = "default"
    } = e, {
        trackUserProfileAction: r
    } = (0, v.NJ)(), s = (0, m.h)(t), {
        hasAlreadyLinked: d,
        canStartAuthorization: f,
        startAuthorization: A,
        fetched: g
    } = (0, c.RD)(s), {
        analyticsLocations: p
    } = (0, o.Ay)(u.A.USER_PROFILE_APPLICATION_WIDGET), L = l.useCallback(() => {
        f && (r({
            action: "PRESS_APPLICATION_WIDGET_PLACEHOLDER_CONNECT",
            applicationId: t
        }), A({
            analyticsLocations: p
        }))
    }, [f, r, t, A, p]);
    return "default" !== n || null == s ? null : (0, i.jsxs)("div", {
        className: x.qr,
        children: [(0, i.jsx)(a.A5T, {
            size: "xs"
        }), (0, i.jsx)(a.EYj, {
            variant: "text-sm/medium",
            color: "text-subtle",
            children: g ? d ? h.intl.format(h.t.wiyuG9, {
                applicationName: s.name
            }) : f ? h.intl.format(h.t.RNWFOQ, {
                onConnect: L
            }) : h.intl.string(h.t["9TX4UT"]) : (0, i.jsx)("div", {
                className: x.bg
            })
        })]
    })
}