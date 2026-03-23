/** chunk id: 483706 params = (module,exports,require) **/
n.d(t, {
    p: () => I
});
var i = n(627968),
    s = n(64700),
    l = n(158954),
    a = n(397927),
    r = n(308528),
    o = n(922529),
    d = n(780964),
    c = n(12901),
    u = n(840065),
    m = n(899847),
    _ = n(936926),
    g = n(809697),
    A = n(153739),
    x = n(534654),
    p = n(834981),
    h = n(191627),
    T = n(842130),
    E = n(985018),
    f = n(191248);
let S = e => {
        let {
            title: t,
            buttonText: n,
            onButtonPress: s
        } = e;
        return (0, i.jsxs)(l.BJc, {
            padding: {
                top: 12,
                bottom: 12
            },
            justify: "space-between",
            direction: "horizontal",
            align: "center",
            gap: 32,
            children: [(0, i.jsx)(l.EYj, {
                variant: "text-md/medium",
                children: t
            }), (0, i.jsx)(a.Button, {
                text: n,
                onClick: s,
                variant: "secondary",
                size: "sm"
            })]
        })
    },
    C = () => {
        let e = (0, p.vx)(),
            t = () => {
                (0, u.openUserSettings)(d.X.CONTENT_AND_SOCIAL_PANEL)
            };
        return (0, i.jsxs)(l.BJc, {
            justify: "space-between",
            direction: "horizontal",
            align: "center",
            gap: 32,
            children: [(0, i.jsxs)(l.BJc, {
                direction: "vertical",
                gap: 4,
                children: [(0, i.jsx)(l.EYj, {
                    variant: "text-sm/semibold",
                    children: E.intl.string(T.default.ahKIJO)
                }), (0, i.jsx)(l.EYj, {
                    variant: "text-md/medium",
                    color: "text-muted",
                    children: E.intl.format(T.default.X9rW0j, {
                        openSettingsHook: (e, n) => (0, i.jsx)(a.MzZ, {
                            onClick: t,
                            children: e
                        }, n)
                    })
                })]
            }), (0, i.jsx)(a.Button, {
                text: E.intl.formatToPlainString(T.default.ggcjPR, {
                    count: e.length
                }),
                onClick: () => {
                    (0, c.default)(), r.A.openPrivateChannel({
                        recipientIds: e
                    })
                },
                variant: "secondary",
                size: "sm"
            })]
        })
    },
    b = e => {
        let {
            teenId: t
        } = e, s = (0, A.y3)(), r = s?.restrictedSchedule?.rules.length ?? 0;
        return (0, i.jsxs)(l.BJc, {
            padding: {
                top: 12,
                bottom: 12
            },
            justify: "space-between",
            direction: "horizontal",
            align: "center",
            gap: 32,
            children: [(0, i.jsxs)(l.BJc, {
                direction: "vertical",
                gap: 4,
                children: [(0, i.jsx)(l.EYj, {
                    variant: "text-md/medium",
                    children: E.intl.string(T.default["1Op+NP"])
                }), (0, i.jsx)(l.EYj, {
                    variant: "text-sm/normal",
                    color: "text-muted",
                    children: 0 === r ? E.intl.string(T.default.fOBIZH) : E.intl.formatToPlainString(T.default.XfwcpX, {
                        count: r
                    })
                })]
            }), (0, i.jsx)(a.Button, {
                text: E.intl.string(T.default.OwFF4o),
                onClick: () => {
                    (0, a.mMO)(async () => {
                        let {
                            default: e
                        } = await n.e("38842").then(n.bind(n, 6241));
                        return n => (0, i.jsx)(e, {
                            ...n,
                            teenId: t
                        })
                    })
                },
                variant: "secondary",
                size: "sm"
            })]
        })
    },
    N = () => {
        let e = (0, A.y3)(),
            t = (0, A.tl)(),
            {
                handleTabChange: n
            } = (0, g.A)(),
            a = (0, _.Vh)({
                location: "TimeControlsRow"
            });
        s.useEffect(() => {
            e?.id != null && t && m.Ay.fetchTeenSettingsAndConsents(e?.id)
        }, [e?.id, t]);
        let r = e => {
            n(e)
        };
        return (0, i.jsxs)(i.Fragment, {
            children: [(0, i.jsxs)(l.BJc, {
                direction: "vertical",
                gap: 4,
                children: [(0, i.jsx)(l.EYj, {
                    variant: "text-sm/semibold",
                    children: E.intl.string(T.default.ahKIJO)
                }), (0, i.jsx)(l.EYj, {
                    variant: "text-md/medium",
                    color: "text-muted",
                    children: E.intl.string(T.default.Sv236e)
                })]
            }), (0, i.jsx)(S, {
                title: E.intl.string(E.t["+o1pDZ"]),
                buttonText: E.intl.string(E.t.bt75uw),
                onButtonPress: () => r(h.u9.CONTENT_AND_SOCIAL)
            }), (0, i.jsx)(o.A, {
                className: f.yF
            }), (0, i.jsx)(S, {
                title: E.intl.string(E.t.OAuOHD),
                buttonText: E.intl.string(E.t.bt75uw),
                onButtonPress: () => r(h.u9.DATA_AND_PRIVACY)
            }), a && e?.id != null && (0, i.jsxs)(i.Fragment, {
                children: [(0, i.jsx)(o.A, {
                    className: f.yF
                }), (0, i.jsx)(b, {
                    teenId: e.id
                })]
            })]
        })
    },
    I = () => {
        let e = (0, x.A)();
        return 0 === (0, p.vx)().length ? null : (0, i.jsx)("div", {
            className: f.kL,
            children: e ? (0, i.jsx)(C, {}) : (0, i.jsx)(N, {})
        })
    }