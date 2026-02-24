/** chunk id: 648230, original params: e,t,r (module,exports,require) **/
r.d(t, {
    default: () => Q
});
var s = r(627968),
    i = r(64700),
    n = r(503698),
    l = r.n(n),
    a = r(299855),
    o = r.n(a),
    c = r(110259),
    d = r(141931),
    u = r(311907),
    f = r(732955),
    h = r(397927),
    x = r(157559),
    p = r(444927),
    m = r(77729),
    _ = r(90804),
    g = r(793574),
    j = r(688810),
    v = r(15285),
    A = r(253932),
    S = r(430452),
    y = r(383501),
    C = r(287809),
    b = r(157257),
    w = r(723702),
    I = r(927578),
    E = r(997630),
    N = r(571044),
    O = r(905552),
    T = r(72432),
    R = r(264540),
    M = r(255481),
    U = r(688465),
    G = r(864057),
    L = r(354062),
    D = r(715587),
    P = r(280481),
    F = r(517753),
    k = r(598032),
    H = r(997248),
    B = r(652681),
    W = r(502075),
    Z = r(191850),
    V = r(985018),
    z = r(580340);

function Q(e) {
    let {
        onClose: t,
        transitionState: r,
        sourcePID: n,
        analyticsLocations: a = [],
        selectSource: Q = !0
    } = e, q = (0, u.bG)([v.Ay], () => null != n ? v.Ay.getGameForPID(n) ?? void 0 : void 0), K = i.useRef(performance.now()), Y = (0, u.bG)([S.Ay], () => (S.Ay.getUseSystemScreensharePicker() || S.Ay.getUseGamescopeCapture()) && ((0, w.isLinux)() || (0, w.isMac)() && o().satisfies(m.A?.os.release, W.WZ))), {
        analyticsLocations: $
    } = (0, j.Ay)(a, g.A.GO_LIVE_MODAL_V2), X = (0, u.bG)([C.default], () => C.default.getCurrentUser()), J = (0, H.A)(), {
        state: ee,
        dispatch: et
    } = (0, U.yB)(q, X, J), er = (0, p.A)((0, w.isWindows)() && null != q && Q ? "confirm" : "source_select");
    (0, B.A)(Y, et, "confirm" === er);
    let es = !I.Ay.canStreamQuality(I.Ay.StreamQuality.HIGH, X),
        ei = !(0, w.isLinux)(),
        en = "confirm" === er,
        el = !Q && null != q && !en,
        ea = en || ee.sourceType === d.fS.CAMERA,
        eo = Y && ee.sourceType !== d.fS.CAMERA,
        ec = i.useMemo(() => {
            let e = [{
                name: V.intl.string(V.t.tHoi7u),
                value: d.fS.WINDOW,
                icon: h.WxK
            }, {
                name: V.intl.string(V.t.MhJ43A),
                value: d.fS.CAMERA,
                icon: h.npA
            }];
            return Y || e.splice(1, 0, {
                name: V.intl.string(V.t.slM8rG),
                value: d.fS.SCREEN,
                icon: h.kN9
            }), e
        }, [Y]),
        {
            sourceType: ed
        } = ee,
        eu = i.useCallback(async e => {
            A.wv.updateSetting(ee.notifyFriends), A.uh.updateSetting(ee.hidePreview);
            let [r, s] = await (0, T.A)(e.hasOwnProperty("pid") ? e.pid : e, {
                preset: ee.preset,
                fps: ee.fps,
                resolution: ee.resolution,
                soundshareEnabled: !ee.muteStreamAudio,
                previewDisabled: ee.hidePreview,
                goLiveModalDurationMs: performance.now() - K.current,
                audioSourceId: ee.audioSourceId,
                analyticsLocations: $
            });
            if (r) return t();
            "no permission" === s && x.A.show({
                title: V.intl.string(V.t["X+mXeq"]),
                body: V.intl.string(V.t.MIJCzr)
            }), t()
        }, [t, ee, $]);
    async function ef(e) {
        await (0, _.A)({
            channelId: e
        }) && null != q && eu(q)
    }
    let eh = i.useCallback(() => {
        eu({
            id: ("gamescope" === ee.nativeSourceType ? "screen:" : "prepicked:") + ee.nativeSourceType,
            name: N.Ay.getLastPickedContentTitle() ?? V.intl.string(V.t.KKcy95),
            url: ""
        })
    }, [eu, ee.nativeSourceType]);
    return (0, s.jsx)(U.KL, {
        state: ee,
        dispatch: et,
        children: (0, s.jsx)(h.dWK, {
            transitionState: r,
            onClose: t,
            size: "xl",
            trackingProps: {
                impression: {
                    impressionName: c.ImpressionNames.GO_LIVE_MODAL,
                    impressionProperties: {
                        location_stack: $,
                        application_id: (0, w.isWindows)() ? (0, O.A)(v.Ay, b.A)?.id : void 0,
                        parent_media_session_id: y.A.getMediaSessionId()
                    }
                }
            },
            children: (0, s.jsxs)("div", {
                className: l()(z.zr, {
                    [z._g]: Y && null == q,
                    [z.Tb]: el,
                    [z.Fe]: en
                }),
                children: [el ? (0, s.jsx)(R.A, {
                    className: l()(z.or, z.Ym),
                    onSelectChannel: ef
                }) : en ? (0, s.jsx)(M.A, {}) : (0, s.jsxs)(s.Fragment, {
                    children: [(0, s.jsx)("div", {
                        className: z.wx,
                        children: (0, s.jsx)(h.IzF, {
                            className: z.q0,
                            value: ed,
                            look: "pill",
                            optionClassName: z.LD,
                            onChange: e => {
                                let {
                                    value: t
                                } = e;
                                return et({
                                    type: "set_source_type",
                                    sourceType: t
                                })
                            },
                            options: ec
                        })
                    }), (0, s.jsx)(f.ArX, {
                        className: z.Qs,
                        children: Y && ed !== d.fS.CAMERA ? (0, s.jsx)(G.A, {
                            onSourceSelect: eh
                        }) : (0, s.jsx)(L.A, {
                            onClick: function(e) {
                                e.id?.startsWith(d.fS.CAMERA) ? et({
                                    type: "set_selected_source",
                                    source: e
                                }) : eu(e)
                            }
                        })
                    })]
                }), (0, s.jsxs)("div", {
                    className: z.qr,
                    children: [(0, s.jsxs)("div", {
                        className: z.z8,
                        children: [(0, s.jsx)(k.A, {}), (0, s.jsxs)("div", {
                            className: z.gt,
                            children: [es && (0, s.jsx)(P.A, {
                                onClose: t
                            }), (eo || ea) && (0, s.jsx)(h.Button, {
                                variant: "primary",
                                size: "md",
                                text: V.intl.string(eo && "gamescope" !== ee.nativeSourceType ? V.t.FiBjwU : Z.default["5AyH/p"]),
                                onClick: () => {
                                    eo ? "gamescope" === ee.nativeSourceType ? eh() : ((0, E.E)(), (0, E.a)(ee.nativeSourceType)) : null != ee.selectedChannel ? ef(ee.selectedChannel) : null != ee.selectedSource && eu(ee.selectedSource)
                                },
                                disabled: eo && !ei && "" === ee.nativeSourceType || ea && null == ee.selectedSource
                            }), (0, s.jsx)(D.A, {
                                align: "right"
                            })]
                        })]
                    }), es && (0, s.jsx)("div", {
                        className: z.rO,
                        children: (0, s.jsx)(F.A, {
                            onClose: t
                        })
                    })]
                })]
            })
        })
    })
}