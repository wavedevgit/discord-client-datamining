/** Chunk was on web.js **/
/** chunk id: 483706, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    p: () => S
});
var r = n(627968),
    i = n(64700),
    a = n(158954),
    s = n(397927),
    o = n(308528),
    l = n(922529),
    c = n(840387),
    u = n(780964),
    d = n(12901),
    f = n(840065),
    p = n(899847),
    _ = n(809697),
    h = n(153739),
    m = n(834981),
    g = n(191627),
    E = n(652215),
    y = n(842130),
    b = n(985018),
    O = n(191248);
let v = e => {
        let {
            title: t,
            buttonText: n,
            onButtonPress: i
        } = e;
        return (0, r.jsxs)(a.BJc, {
            padding: {
                top: 12,
                bottom: 12
            },
            justify: "space-between",
            direction: "horizontal",
            align: "center",
            gap: 32,
            children: [(0, r.jsx)(a.EYj, {
                variant: "text-md/medium",
                children: t
            }), (0, r.jsx)(s.Button, {
                text: n,
                onClick: i,
                variant: "secondary",
                size: "sm"
            })]
        })
    },
    A = () => {
        let e = (0, m.vx)(),
            t = () => {
                (0, d.default)(), o.A.openPrivateChannel({
                    recipientIds: e
                })
            },
            n = () => {
                (0, f.openUserSettings)(u.X.CONTENT_AND_SOCIAL_PANEL, {
                    section: E.nc_.CONTENT_AND_SOCIAL
                })
            };
        return (0, r.jsxs)(a.BJc, {
            justify: "space-between",
            direction: "horizontal",
            align: "center",
            gap: 32,
            children: [(0, r.jsxs)(a.BJc, {
                direction: "vertical",
                gap: 4,
                children: [(0, r.jsx)(a.EYj, {
                    variant: "text-sm/semibold",
                    children: b.intl.string(y.default.ahKIJO)
                }), (0, r.jsx)(a.EYj, {
                    variant: "text-md/medium",
                    color: "text-muted",
                    children: b.intl.format(y.default.X9rW0j, {
                        openSettingsHook: (e, t) => (0, r.jsx)(s.MzZ, {
                            onClick: n,
                            children: e
                        }, t)
                    })
                })]
            }), (0, r.jsx)(s.Button, {
                text: b.intl.formatToPlainString(y.default.ggcjPR, {
                    count: e.length
                }),
                onClick: t,
                variant: "secondary",
                size: "sm"
            })]
        })
    },
    I = () => {
        let e = (0, h.y3)(),
            t = (0, h.tl)(),
            {
                handleTabChange: n
            } = (0, _.A)();
        i.useEffect(() => {
            (null == e ? void 0 : e.id) != null && t && p.Ay.fetchTeenSettingsAndConsents(null == e ? void 0 : e.id)
        }, [null == e ? void 0 : e.id, t]);
        let s = e => {
            n(e)
        };
        return (0, r.jsxs)(r.Fragment, {
            children: [(0, r.jsxs)(a.BJc, {
                direction: "vertical",
                gap: 4,
                children: [(0, r.jsx)(a.EYj, {
                    variant: "text-sm/semibold",
                    children: b.intl.string(y.default.ahKIJO)
                }), (0, r.jsx)(a.EYj, {
                    variant: "text-md/medium",
                    color: "text-muted",
                    children: b.intl.string(y.default.Sv236e)
                })]
            }), (0, r.jsx)(v, {
                title: b.intl.string(b.t["+o1pDZ"]),
                buttonText: b.intl.string(b.t.bt75uw),
                onButtonPress: () => s(g.u9.CONTENT_AND_SOCIAL)
            }), (0, r.jsx)(l.A, {
                className: O.yF
            }), (0, r.jsx)(v, {
                title: b.intl.string(b.t.OAuOHD),
                buttonText: b.intl.string(b.t.bt75uw),
                onButtonPress: () => s(g.u9.DATA_AND_PRIVACY)
            })]
        })
    },
    S = () => {
        let e = (0, c.Z)();
        return 0 === (0, m.vx)().length ? null : (0, r.jsx)("div", {
            className: O.kL,
            children: e ? (0, r.jsx)(A, {}) : (0, r.jsx)(I, {})
        })
    }