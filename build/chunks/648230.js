/** Chunk was on 96811 **/
/** chunk id: 648230, original params: e,t,r (module,exports,require) **/
r.d(t, {
    default: () => Q
}), r(896048);
var n = r(627968),
    i = r(64700),
    l = r(503698),
    s = r.n(l),
    a = r(299855),
    o = r.n(a),
    c = r(110259),
    d = r(141931),
    u = r(311907),
    f = r(732955),
    h = r(397927),
    p = r(157559),
    x = r(444927),
    m = r(77729),
    j = r(90804),
    g = r(793574),
    _ = r(688810),
    v = r(15285),
    b = r(253932),
    y = r(430452),
    S = r(383501),
    A = r(287809),
    O = r(157257),
    w = r(723702),
    C = r(927578),
    E = r(997630),
    I = r(571044),
    N = r(905552),
    T = r(72432),
    R = r(264540),
    P = r(255481),
    M = r(688465),
    D = r(864057),
    U = r(354062),
    G = r(715587),
    L = r(280481),
    k = r(517753),
    F = r(598032),
    H = r(997248),
    B = r(652681),
    W = r(502075),
    Z = r(191850),
    V = r(985018),
    z = r(580340);

function Q(e) {
    var t;
    let {
        onClose: r,
        transitionState: l,
        sourcePID: a,
        analyticsLocations: Q = [],
        selectSource: q = !0
    } = e, K = (0, u.bG)([v.Ay], () => {
        var e;
        return null != a && null != (e = v.Ay.getGameForPID(a)) ? e : void 0
    }), Y = i.useRef(performance.now()), X = (0, u.bG)([y.A], () => (y.A.getUseSystemScreensharePicker() || y.A.getUseGamescopeCapture()) && ((0, w.isLinux)() || (0, w.isMac)() && o().satisfies(null === m.A || void 0 === m.A ? void 0 : m.A.os.release, W.WZ))), {
        analyticsLocations: J
    } = (0, _.Ay)(Q, g.A.GO_LIVE_MODAL_V2), $ = (0, u.bG)([A.default], () => A.default.getCurrentUser()), ee = (0, H.A)(), {
        state: et,
        dispatch: er
    } = (0, M.yB)(K, $, ee), en = (0, x.A)((0, w.isWindows)() && null != K && q ? "confirm" : "source_select");
    (0, B.A)(X, er, "confirm" === en);
    let ei = !C.Ay.canStreamQuality(C.Ay.StreamQuality.HIGH, $),
        el = !(0, w.isLinux)(),
        es = "confirm" === en,
        ea = !q && null != K && !es,
        eo = es || et.sourceType === d.fS.CAMERA,
        ec = X && et.sourceType !== d.fS.CAMERA,
        ed = i.useMemo(() => {
            let e = [{
                name: V.intl.string(V.t.tHoi7u),
                value: d.fS.WINDOW,
                icon: h.WxK
            }, {
                name: V.intl.string(V.t.MhJ43A),
                value: d.fS.CAMERA,
                icon: h.npA
            }];
            return X || e.splice(1, 0, {
                name: V.intl.string(V.t.slM8rG),
                value: d.fS.SCREEN,
                icon: h.kN9
            }), e
        }, [X]),
        {
            sourceType: eu
        } = et,
        ef = i.useCallback(async e => {
            b.wv.updateSetting(et.notifyFriends), b.uh.updateSetting(et.hidePreview);
            let [t, n] = await (0, T.A)(e.hasOwnProperty("pid") ? e.pid : e, {
                preset: et.preset,
                fps: et.fps,
                resolution: et.resolution,
                soundshareEnabled: !et.muteStreamAudio,
                previewDisabled: et.hidePreview,
                goLiveModalDurationMs: performance.now() - Y.current,
                audioSourceId: et.audioSourceId,
                analyticsLocations: J
            });
            if (t) return r();
            "no permission" === n && p.A.show({
                title: V.intl.string(V.t["X+mXeq"]),
                body: V.intl.string(V.t.MIJCzr)
            }), r()
        }, [r, et, J]);
    async function eh(e) {
        await (0, j.A)({
            channelId: e
        }) && null != K && ef(K)
    }
    let ep = i.useCallback(() => {
        var e;
        ef({
            id: ("gamescope" === et.nativeSourceType ? "screen:" : "prepicked:") + et.nativeSourceType,
            name: null != (e = I.Ay.getLastPickedContentTitle()) ? e : V.intl.string(V.t.KKcy95),
            url: ""
        })
    }, [ef, et.nativeSourceType]);
    return (0, n.jsx)(M.KL, {
        state: et,
        dispatch: er,
        children: (0, n.jsx)(h.dWK, {
            transitionState: l,
            onClose: r,
            size: "xl",
            trackingProps: {
                impression: {
                    impressionName: c.ImpressionNames.GO_LIVE_MODAL,
                    impressionProperties: {
                        location_stack: J,
                        application_id: (0, w.isWindows)() ? null == (t = (0, N.A)(v.Ay, O.A)) ? void 0 : t.id : void 0,
                        parent_media_session_id: S.A.getMediaSessionId()
                    }
                }
            },
            children: (0, n.jsxs)("div", {
                className: s()(z.zr, {
                    [z._g]: X && null == K,
                    [z.Tb]: ea,
                    [z.Fe]: es
                }),
                children: [ea ? (0, n.jsx)(R.A, {
                    className: s()(z.or, z.Ym),
                    onSelectChannel: eh
                }) : es ? (0, n.jsx)(P.A, {}) : (0, n.jsxs)(n.Fragment, {
                    children: [(0, n.jsx)("div", {
                        className: z.wx,
                        children: (0, n.jsx)(h.IzF, {
                            className: z.q0,
                            value: eu,
                            look: "pill",
                            optionClassName: z.LD,
                            onChange: e => {
                                let {
                                    value: t
                                } = e;
                                return er({
                                    type: "set_source_type",
                                    sourceType: t
                                })
                            },
                            options: ed
                        })
                    }), (0, n.jsx)(f.ArX, {
                        className: z.Qs,
                        children: X && eu !== d.fS.CAMERA ? (0, n.jsx)(D.A, {
                            onSourceSelect: ep
                        }) : (0, n.jsx)(U.A, {
                            onClick: function(e) {
                                var t;
                                (null == (t = e.id) ? void 0 : t.startsWith(d.fS.CAMERA)) ? er({
                                    type: "set_selected_source",
                                    source: e
                                }): ef(e)
                            }
                        })
                    })]
                }), (0, n.jsxs)("div", {
                    className: z.qr,
                    children: [(0, n.jsxs)("div", {
                        className: z.z8,
                        children: [(0, n.jsx)(F.A, {}), (0, n.jsxs)("div", {
                            className: z.gt,
                            children: [ei && (0, n.jsx)(L.A, {
                                onClose: r
                            }), (ec || eo) && (0, n.jsx)(h.Button, {
                                variant: "primary",
                                size: "md",
                                text: V.intl.string(ec && "gamescope" !== et.nativeSourceType ? V.t.FiBjwU : Z.default["5AyH/p"]),
                                onClick: () => {
                                    ec ? "gamescope" === et.nativeSourceType ? ep() : ((0, E.E)(), (0, E.a)(et.nativeSourceType)) : null != et.selectedChannel ? eh(et.selectedChannel) : null != et.selectedSource && ef(et.selectedSource)
                                },
                                disabled: ec && !el && "" === et.nativeSourceType || eo && null == et.selectedSource
                            }), (0, n.jsx)(G.A, {
                                align: "right"
                            })]
                        })]
                    }), ei && (0, n.jsx)("div", {
                        className: z.rO,
                        children: (0, n.jsx)(k.A, {
                            onClose: r
                        })
                    })]
                })]
            })
        })
    })
}