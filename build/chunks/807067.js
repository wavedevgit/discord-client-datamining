/** chunk id: 807067 params = (module,exports,require) **/
"use strict";
n.d(t, {
    f: () => M
}), n(938796);
var i = n(627968),
    s = n(64700),
    l = n(835245),
    a = n(724002),
    r = n(287174),
    o = n(487899),
    c = n(311907),
    d = n(397927),
    u = n(793574),
    h = n(688810),
    A = n(735991),
    m = n(786115),
    _ = n(975412),
    g = n(392054),
    p = n(354138),
    f = n(111042),
    x = n(767599),
    E = n(267102),
    C = n(246356),
    I = n(111162),
    N = n(954571),
    b = n(795816),
    S = n(887700),
    T = n(855446),
    v = n(652215),
    y = n(985018),
    j = n(690076);
let R = r.K.APP_LAUNCHER_IN_VOICE_BANNER,
    O = `vc-activities-${(0,l.A)()}`;

function L(e) {
    let t, n, {
            channel: l,
            openInPopout: r,
            onClick: h
        } = e,
        {
            fetchState: g,
            voiceBannerCollection: E
        } = (t = (0, c.bG)([I.default], () => I.default.onlyShowPreviewAppCollections) ? a.W.PREVIEW : a.W.ACTIVE, s.useEffect(() => {
            (0, p.An)({
                surface: R,
                activeState: t
            })
        }, [t]), {
            fetchState: (0, c.bG)([f.A], () => f.A.getFetchState({
                surface: R,
                activeState: t
            })),
            voiceBannerCollection: (0, c.bG)([f.A], () => f.A.getCollections({
                surface: R,
                activeState: t
            }))[0]
        }),
        C = g === f.e.FETCHING,
        N = s.useMemo(() => {
            let e = E?.application_directory_collection_items[0];
            return null == e ? null : e.type === o.L.APPLICATION_BANNER ? e : null
        }, [E?.application_directory_collection_items]),
        {
            trackItemImpressionRef: b
        } = (0, m.A)({
            applicationId: N?.application.id ?? "",
            applicationFlags: N?.application.flags,
            sectionName: "app_launcher_in_voice_banner",
            sectionPosition: N?.position,
            sectionOverallPosition: 0,
            promotionalLabel: null != N ? (0, A.Ii)(N.application) : void 0
        });
    return null == N || null == E || C ? null : (null != N.id && null != N.image_hash && (n = (0, x.DH)({
        itemId: N.id,
        hash: N.image_hash,
        containerWidth: 584
    })), (0, i.jsxs)(d.DUT, {
        className: j.V8,
        innerRef: b,
        onClick: () => {
            h(), (0, _.A)({
                context: {
                    type: "channel",
                    channel: l
                },
                openInPopout: r,
                analyticsLocation: u.A.APP_LAUNCHER_IN_VOICE_BANNER,
                initialState: {
                    applicationId: N.application.id
                }
            })
        },
        children: [(0, i.jsx)("img", {
            alt: N.description,
            src: n,
            className: j.W_
        }), (0, i.jsx)("div", {
            className: j.LV
        })]
    }))
}
let M = s.forwardRef(function(e, t) {
    var n;
    let {
        channel: l,
        isHovered: a,
        closePopout: r,
        onMouseEnter: o,
        onMouseLeave: c,
        onClick: A,
        className: m
    } = e, {
        id: p,
        guild_id: f
    } = l;
    s.useEffect(() => {
        N.default.track(v.HAw.ACTIVITIES_CENTER_CONTROL_TRAY_BUTTON_HOVERED, {
            channel_id: p,
            guild_id: f
        })
    }, [p, f]), s.useEffect(() => {
        a || r()
    }, [r, a]);
    let x = (0, E.Us)(),
        {
            analyticsLocations: I,
            newestAnalyticsLocation: R
        } = (0, h.Ay)(u.A.ACTIVITIES_MINI_SHELF),
        M = x === v.BRT.POPOUT,
        D = (n = l.getGuildId(), (0, S.A)({
            guildId: n
        }).slice(0, 5));
    s.useEffect(() => {
        let e = setTimeout(() => b.LK(), 1e3);
        return () => clearTimeout(e)
    }, []);
    let G = s.useCallback(() => {
            (0, _.A)({
                context: null != l ? {
                    type: "channel",
                    channel: l
                } : {
                    type: "contextless"
                },
                openInPopout: M,
                analyticsLocation: R
            }), c(), A()
        }, [l, R, A, c, M]),
        U = s.useCallback(e => {
            o(), N.default.track(v.HAw.ACTIVITIES_MINI_SHELF_HOVERED, {
                channel_id: l.id,
                guild_id: l.getGuildId()
            })
        }, [o, l]);
    return (0, i.jsx)(h.f5, {
        value: I,
        children: (0, i.jsx)(C.A, {
            children: (0, i.jsxs)(d.lGe, {
                ref: t,
                "aria-labelledby": O,
                className: m,
                children: [(0, i.jsx)(d.Fmo, {
                    forceLevel: 2,
                    children: (0, i.jsx)(d.AC4, {
                        children: (0, i.jsx)(d.H, {
                            id: O,
                            children: y.intl.string(y.t["2lnYtB"])
                        })
                    })
                }), (0, i.jsxs)("div", {
                    className: j.kL,
                    onMouseEnter: U,
                    onMouseLeave: c,
                    children: [(0, i.jsxs)("div", {
                        className: j.gn,
                        children: [(0, i.jsxs)("div", {
                            className: j.gH,
                            children: [(0, i.jsx)(d.k9F, {
                                size: "md",
                                className: j.ch,
                                color: "var(--interactive-text-active)"
                            }), (0, i.jsx)(d.Text, {
                                variant: "eyebrow",
                                children: y.intl.string(y.t.f3Cz25)
                            })]
                        }), (0, i.jsxs)(d.DUT, {
                            className: j.hc,
                            onClick: G,
                            children: [(0, i.jsx)(d.Text, {
                                variant: "eyebrow",
                                children: y.intl.string(y.t["K8+z4S"])
                            }), (0, i.jsx)(d._BQ, {
                                size: "custom",
                                width: 12,
                                height: 12,
                                color: "var(--interactive-text-active)",
                                className: j.O6
                            })]
                        })]
                    }), (0, i.jsx)(L, {
                        openInPopout: M,
                        channel: l,
                        onClick: () => {
                            A(), r()
                        }
                    }), (0, i.jsx)("div", {
                        className: j.ht,
                        children: D.map(e => (0, i.jsx)(T.C, {
                            context: {
                                channel: l,
                                type: "channel"
                            },
                            activityItem: e,
                            onClick: () => {
                                r(), A()
                            },
                            aspectRatio: T.C.AspectRatio.THIRTEEN_BY_ELEVEN,
                            animatedDivClass: j.KU,
                            commandOrigin: g.iw.MINI_SHELF
                        }, e.application.id))
                    })]
                })]
            })
        })
    })
})