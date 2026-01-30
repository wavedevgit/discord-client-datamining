/** chunk id: 807067, original params: e,t,n (module,exports,require) **/
n.d(t, {
    f: () => R
}), n(938796), n(228524);
var r = n(627968),
    l = n(64700),
    i = n(835245),
    s = n(724002),
    a = n(287174),
    o = n(487899),
    c = n(311907),
    u = n(397927),
    d = n(793574),
    h = n(688810),
    p = n(735991),
    g = n(786115),
    f = n(975412),
    m = n(392054),
    b = n(354138),
    A = n(111042),
    y = n(767599),
    O = n(267102),
    _ = n(246356),
    j = n(111162),
    x = n(954571),
    v = n(795816),
    E = n(887700),
    C = n(855446),
    S = n(652215),
    I = n(985018),
    N = n(176187);
let T = a.K.APP_LAUNCHER_IN_VOICE_BANNER,
    P = "vc-activities-".concat((0, i.A)());

function w(e) {
    var t;
    let n, i, {
            channel: a,
            openInPopout: h,
            onClick: m
        } = e,
        {
            fetchState: O,
            voiceBannerCollection: _
        } = (n = (0, c.bG)([j.default], () => j.default.onlyShowPreviewAppCollections) ? s.W.PREVIEW : s.W.ACTIVE, l.useEffect(() => {
            (0, b.An)({
                surface: T,
                activeState: n
            })
        }, [n]), {
            fetchState: (0, c.bG)([A.A], () => A.A.getFetchState({
                surface: T,
                activeState: n
            })),
            voiceBannerCollection: (0, c.bG)([A.A], () => A.A.getCollections({
                surface: T,
                activeState: n
            }))[0]
        }),
        x = O === A.e.FETCHING,
        v = l.useMemo(() => {
            let e = null == _ ? void 0 : _.application_directory_collection_items[0];
            return null == e ? null : e.type === o.L.APPLICATION_BANNER ? e : null
        }, [null == _ ? void 0 : _.application_directory_collection_items]),
        {
            trackItemImpressionRef: E
        } = (0, g.A)({
            applicationId: null != (t = null == v ? void 0 : v.application.id) ? t : "",
            applicationFlags: null == v ? void 0 : v.application.flags,
            sectionName: "app_launcher_in_voice_banner",
            sectionPosition: null == v ? void 0 : v.position,
            sectionOverallPosition: 0,
            promotionalLabel: null != v ? (0, p.Ii)(v.application) : void 0
        });
    return null == v || null == _ || x ? null : (null != v.id && null != v.image_hash && (i = (0, y.DH)({
        itemId: v.id,
        hash: v.image_hash,
        containerWidth: 584
    })), (0, r.jsxs)(u.DUT, {
        className: N.V8,
        innerRef: E,
        onClick: () => {
            m(), (0, f.A)({
                context: {
                    type: "channel",
                    channel: a
                },
                openInPopout: h,
                analyticsLocation: d.A.APP_LAUNCHER_IN_VOICE_BANNER,
                initialState: {
                    applicationId: v.application.id
                }
            })
        },
        children: [(0, r.jsx)("img", {
            alt: v.description,
            src: i,
            className: N.W_
        }), (0, r.jsx)("div", {
            className: N.LV
        })]
    }))
}
let R = l.forwardRef(function(e, t) {
    var n;
    let {
        channel: i,
        isHovered: s,
        closePopout: a,
        onMouseEnter: o,
        onMouseLeave: c,
        onClick: p,
        className: g
    } = e, {
        id: b,
        guild_id: A
    } = i;
    l.useEffect(() => {
        x.default.track(S.HAw.ACTIVITIES_CENTER_CONTROL_TRAY_BUTTON_HOVERED, {
            channel_id: b,
            guild_id: A
        })
    }, [b, A]), l.useEffect(() => {
        s || a()
    }, [a, s]);
    let y = (0, O.Us)(),
        {
            analyticsLocations: j,
            newestAnalyticsLocation: T
        } = (0, h.Ay)(d.A.ACTIVITIES_MINI_SHELF),
        R = y === S.BRT.POPOUT,
        D = (n = i.getGuildId(), (0, E.A)({
            guildId: n
        }).slice(0, 5));
    l.useEffect(() => {
        let e = setTimeout(() => v.LK(), 1e3);
        return () => clearTimeout(e)
    }, []);
    let L = l.useCallback(() => {
            (0, f.A)({
                context: null != i ? {
                    type: "channel",
                    channel: i
                } : {
                    type: "contextless"
                },
                openInPopout: R,
                analyticsLocation: T
            }), c(), p()
        }, [i, T, p, c, R]),
        M = l.useCallback(e => {
            o(), x.default.track(S.HAw.ACTIVITIES_MINI_SHELF_HOVERED, {
                channel_id: i.id,
                guild_id: i.getGuildId()
            })
        }, [o, i]);
    return (0, r.jsx)(h.f5, {
        value: j,
        children: (0, r.jsx)(_.A, {
            children: (0, r.jsxs)(u.lGe, {
                ref: t,
                "aria-labelledby": P,
                className: g,
                children: [(0, r.jsx)(u.Fmo, {
                    forceLevel: 2,
                    children: (0, r.jsx)(u.AC4, {
                        children: (0, r.jsx)(u.H, {
                            id: P,
                            children: I.intl.string(I.t["2lnYtB"])
                        })
                    })
                }), (0, r.jsxs)("div", {
                    className: N.kL,
                    onMouseEnter: M,
                    onMouseLeave: c,
                    children: [(0, r.jsxs)("div", {
                        className: N.gn,
                        children: [(0, r.jsxs)("div", {
                            className: N.gH,
                            children: [(0, r.jsx)(u.k9F, {
                                size: "md",
                                className: N.ch,
                                color: "var(--interactive-text-active)"
                            }), (0, r.jsx)(u.Text, {
                                variant: "eyebrow",
                                children: I.intl.string(I.t.f3Cz25)
                            })]
                        }), (0, r.jsxs)(u.DUT, {
                            className: N.hc,
                            onClick: L,
                            children: [(0, r.jsx)(u.Text, {
                                variant: "eyebrow",
                                children: I.intl.string(I.t["K8+z4S"])
                            }), (0, r.jsx)(u._BQ, {
                                size: "custom",
                                width: 12,
                                height: 12,
                                color: "var(--interactive-text-active)",
                                className: N.O6
                            })]
                        })]
                    }), (0, r.jsx)(w, {
                        openInPopout: R,
                        channel: i,
                        onClick: () => {
                            p(), a()
                        }
                    }), (0, r.jsx)("div", {
                        className: N.ht,
                        children: D.map(e => (0, r.jsx)(C.C, {
                            context: {
                                channel: i,
                                type: "channel"
                            },
                            activityItem: e,
                            onClick: () => {
                                a(), p()
                            },
                            aspectRatio: C.C.AspectRatio.THIRTEEN_BY_ELEVEN,
                            animatedDivClass: N.KU,
                            commandOrigin: m.iw.MINI_SHELF
                        }, e.application.id))
                    })]
                })]
            })
        })
    })
})