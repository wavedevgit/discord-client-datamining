/** chunk id: 483706 params = (module,exports,require) **/
n.d(t, {
    p: () => v
});
var i = n(627968),
    s = n(64700),
    l = n(158954),
    r = n(397927),
    a = n(308528),
    o = n(922529),
    d = n(780964),
    c = n(12901),
    u = n(840065),
    _ = n(899847),
    m = n(936926),
    g = n(809697),
    A = n(153739),
    h = n(534654),
    x = n(834981),
    p = n(191627),
    T = n(652215),
    E = n(870236),
    C = n(985018),
    S = n(324034);
let f = e => {
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
            }), (0, i.jsx)(r.Button, {
                text: n,
                onClick: s,
                variant: "secondary",
                size: "sm"
            })]
        })
    },
    N = () => {
        let e = (0, x.vx)(),
            t = () => {
                (0, u.openUserSettings)(d.X.CONTENT_AND_SOCIAL_PANEL, {
                    section: T.nc_.CONTENT_AND_SOCIAL
                })
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
                    children: C.intl.string(E.default.ahKIJO)
                }), (0, i.jsx)(l.EYj, {
                    variant: "text-md/medium",
                    color: "text-muted",
                    children: C.intl.format(E.default.X9rW0j, {
                        openSettingsHook: (e, n) => (0, i.jsx)(r.MzZ, {
                            onClick: t,
                            children: e
                        }, n)
                    })
                })]
            }), (0, i.jsx)(r.Button, {
                text: C.intl.formatToPlainString(E.default.ggcjPR, {
                    count: e.length
                }),
                onClick: () => {
                    (0, c.default)(), a.A.openPrivateChannel({
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
        } = e, s = (0, A.y3)(), a = s?.restrictedSchedule?.rules.length ?? 0;
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
                    children: C.intl.string(E.default["1Op+NP"])
                }), (0, i.jsx)(l.EYj, {
                    variant: "text-sm/normal",
                    color: "text-muted",
                    children: 0 === a ? C.intl.string(E.default.fOBIZH) : C.intl.formatToPlainString(E.default.XfwcpX, {
                        count: a
                    })
                })]
            }), (0, i.jsx)(r.Button, {
                text: C.intl.string(E.default.OwFF4o),
                onClick: () => {
                    (0, r.mMO)(async () => {
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
    I = () => {
        let e = (0, A.y3)(),
            t = (0, A.tl)(),
            {
                handleTabChange: n
            } = (0, g.A)(),
            r = (0, m.Vh)({
                location: "TimeControlsRow"
            });
        s.useEffect(() => {
            e?.id != null && t && _.Ay.fetchTeenSettingsAndConsents(e?.id)
        }, [e?.id, t]);
        let a = e => {
            n(e)
        };
        return (0, i.jsxs)(i.Fragment, {
            children: [(0, i.jsxs)(l.BJc, {
                direction: "vertical",
                gap: 4,
                children: [(0, i.jsx)(l.EYj, {
                    variant: "text-sm/semibold",
                    children: C.intl.string(E.default.ahKIJO)
                }), (0, i.jsx)(l.EYj, {
                    variant: "text-md/medium",
                    color: "text-muted",
                    children: C.intl.string(E.default.Sv236e)
                })]
            }), (0, i.jsx)(f, {
                title: C.intl.string(C.t["+o1pDZ"]),
                buttonText: C.intl.string(C.t.bt75uw),
                onButtonPress: () => a(p.u9.CONTENT_AND_SOCIAL)
            }), (0, i.jsx)(o.A, {
                className: S.yF
            }), (0, i.jsx)(f, {
                title: C.intl.string(C.t.OAuOHD),
                buttonText: C.intl.string(C.t.bt75uw),
                onButtonPress: () => a(p.u9.DATA_AND_PRIVACY)
            }), r && e?.id != null && (0, i.jsxs)(i.Fragment, {
                children: [(0, i.jsx)(o.A, {
                    className: S.yF
                }), (0, i.jsx)(b, {
                    teenId: e.id
                })]
            })]
        })
    },
    v = () => {
        let e = (0, h.A)();
        return 0 === (0, x.vx)().length ? null : (0, i.jsx)("div", {
            className: S.kL,
            children: e ? (0, i.jsx)(N, {}) : (0, i.jsx)(I, {})
        })
    }