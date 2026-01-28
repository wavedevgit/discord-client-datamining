/** Chunk was on 78528 **/
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
    p = n(688810),
    h = n(735991),
    f = n(786115),
    g = n(975412),
    m = n(392054),
    b = n(354138),
    A = n(111042),
    y = n(767599),
    _ = n(267102),
    O = n(246356),
    j = n(111162),
    v = n(954571),
    x = n(795816),
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
            openInPopout: p,
            onClick: m
        } = e,
        {
            fetchState: _,
            voiceBannerCollection: O
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
        v = _ === A.e.FETCHING,
        x = l.useMemo(() => {
            let e = null == O ? void 0 : O.application_directory_collection_items[0];
            return null == e ? null : e.type === o.L.APPLICATION_BANNER ? e : null
        }, [null == O ? void 0 : O.application_directory_collection_items]),
        {
            trackItemImpressionRef: E
        } = (0, f.A)({
            applicationId: null != (t = null == x ? void 0 : x.application.id) ? t : "",
            applicationFlags: null == x ? void 0 : x.application.flags,
            sectionName: "app_launcher_in_voice_banner",
            sectionPosition: null == x ? void 0 : x.position,
            sectionOverallPosition: 0,
            promotionalLabel: null != x ? (0, h.Ii)(x.application) : void 0
        });
    return null == x || null == O || v ? null : (null != x.id && null != x.image_hash && (i = (0, y.DH)({
        itemId: x.id,
        hash: x.image_hash,
        containerWidth: 584
    })), (0, r.jsxs)(u.DUT, {
        className: N.V8,
        innerRef: E,
        onClick: () => {
            m(), (0, g.A)({
                context: {
                    type: "channel",
                    channel: a
                },
                openInPopout: p,
                analyticsLocation: d.A.APP_LAUNCHER_IN_VOICE_BANNER,
                initialState: {
                    applicationId: x.application.id
                }
            })
        },
        children: [(0, r.jsx)("img", {
            alt: x.description,
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
        onClick: h,
        className: f
    } = e, {
        id: b,
        guild_id: A
    } = i;
    l.useEffect(() => {
        v.default.track(S.HAw.ACTIVITIES_CENTER_CONTROL_TRAY_BUTTON_HOVERED, {
            channel_id: b,
            guild_id: A
        })
    }, [b, A]), l.useEffect(() => {
        s || a()
    }, [a, s]);
    let y = (0, _.Us)(),
        {
            analyticsLocations: j,
            newestAnalyticsLocation: T
        } = (0, p.Ay)(d.A.ACTIVITIES_MINI_SHELF),
        R = y === S.BRT.POPOUT,
        D = (n = i.getGuildId(), (0, E.A)({
            guildId: n
        }).slice(0, 5));
    l.useEffect(() => {
        let e = setTimeout(() => x.LK(), 1e3);
        return () => clearTimeout(e)
    }, []);
    let M = l.useCallback(() => {
            (0, g.A)({
                context: null != i ? {
                    type: "channel",
                    channel: i
                } : {
                    type: "contextless"
                },
                openInPopout: R,
                analyticsLocation: T
            }), c(), h()
        }, [i, T, h, c, R]),
        L = l.useCallback(e => {
            o(), v.default.track(S.HAw.ACTIVITIES_MINI_SHELF_HOVERED, {
                channel_id: i.id,
                guild_id: i.getGuildId()
            })
        }, [o, i]);
    return (0, r.jsx)(p.f5, {
        value: j,
        children: (0, r.jsx)(O.A, {
            children: (0, r.jsxs)(u.lGe, {
                ref: t,
                "aria-labelledby": P,
                className: f,
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
                    onMouseEnter: L,
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
                            onClick: M,
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
                            h(), a()
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
                                a(), h()
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