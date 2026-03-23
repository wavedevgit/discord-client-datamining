/** chunk id: 483706 params = (module,exports,require) **/
n.d(t, {
    p: () => v
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
    f = n(842130),
    T = n(985018),
    E = n(191248);
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
    b = () => {
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
                    children: T.intl.string(f.default.ahKIJO)
                }), (0, i.jsx)(l.EYj, {
                    variant: "text-md/medium",
                    color: "text-muted",
                    children: T.intl.format(f.default.X9rW0j, {
                        openSettingsHook: (e, n) => (0, i.jsx)(a.MzZ, {
                            onClick: t,
                            children: e
                        }, n)
                    })
                })]
            }), (0, i.jsx)(a.Button, {
                text: T.intl.formatToPlainString(f.default.ggcjPR, {
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
    C = e => {
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
                    children: T.intl.string(f.default["1Op+NP"])
                }), (0, i.jsx)(l.EYj, {
                    variant: "text-sm/normal",
                    color: "text-muted",
                    children: 0 === r ? T.intl.string(f.default.fOBIZH) : T.intl.formatToPlainString(f.default.XfwcpX, {
                        count: r
                    })
                })]
            }), (0, i.jsx)(a.Button, {
                text: T.intl.string(f.default.OwFF4o),
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
                    children: T.intl.string(f.default.ahKIJO)
                }), (0, i.jsx)(l.EYj, {
                    variant: "text-md/medium",
                    color: "text-muted",
                    children: T.intl.string(f.default.Sv236e)
                })]
            }), (0, i.jsx)(S, {
                title: T.intl.string(T.t["+o1pDZ"]),
                buttonText: T.intl.string(T.t.bt75uw),
                onButtonPress: () => r(h.u9.CONTENT_AND_SOCIAL)
            }), (0, i.jsx)(o.A, {
                className: E.yF
            }), (0, i.jsx)(S, {
                title: T.intl.string(T.t.OAuOHD),
                buttonText: T.intl.string(T.t.bt75uw),
                onButtonPress: () => r(h.u9.DATA_AND_PRIVACY)
            }), a && e?.id != null && (0, i.jsxs)(i.Fragment, {
                children: [(0, i.jsx)(o.A, {
                    className: E.yF
                }), (0, i.jsx)(C, {
                    teenId: e.id
                })]
            })]
        })
    },
    v = () => {
        let e = (0, x.A)();
        return 0 === (0, p.vx)().length ? null : (0, i.jsx)("div", {
            className: E.kL,
            children: e ? (0, i.jsx)(b, {}) : (0, i.jsx)(N, {})
        })
    }