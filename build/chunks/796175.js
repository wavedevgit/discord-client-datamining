/** chunk id: 796175, original params: e,n,t (module,exports,require) **/
t.d(n, {
    default: () => F
});
var l = t(627968);
t(64700);
var i = t(311907),
    r = t(397927),
    a = t(827343),
    s = t(442433),
    o = t(956793),
    d = t(401843),
    c = t(820284),
    u = t(793574),
    A = t(688810),
    g = t(810845),
    h = t(854182),
    p = t(666328),
    f = t(74329),
    I = t(304006),
    m = t(479335),
    x = t(845885),
    b = t(274372),
    C = t(915618),
    j = t(572164),
    v = t(399925),
    S = t(643501),
    y = t(670470),
    E = t(972432),
    V = t(471993),
    G = t(616356),
    T = t(961350),
    w = t(734057),
    _ = t(430452),
    M = t(287809),
    k = t(652896),
    U = t(652215),
    X = t(731854),
    P = t(985018);

function z(e) {
    return (0, i.bG)([G.A], () => {
        let n = G.A.getActiveStreamForApplicationStream(e);
        return null != n && (0, k._z)(n) === (0, k._z)(e)
    })
}

function F(e) {
    let n, t, G, F, L, R, D, O, N, B, J, H, {
            stream: Q,
            analyticsContext: W,
            appContext: Y,
            exitFullscreen: Z,
            onSelect: q,
            onInteraction: K,
            minimal: $ = !1
        } = e,
        ee = (0, i.cf)([M.default], () => Q?.ownerId === M.default.getCurrentUser()?.id),
        en = function(e) {
            let n = z(e),
                t = (0, C.A)(_.Ay),
                a = (0, j.Et)(),
                s = e.ownerId === T.default.getId(),
                {
                    enableViewerClipping: o,
                    ignoreSenderPreference: d
                } = y.A.useExperiment({
                    location: "StreamContextMenu"
                }, {
                    autoTrackExposure: !1
                }),
                c = (0, i.bG)([b.A], () => b.A.getIsAtMaxSaveClipOperations()),
                u = (0, i.bG)([b.A], () => b.A.isViewerClippingAllowedForUser(e.ownerId)) || d;
            return t && o && n ? (0, l.jsx)(r.Drp, {
                id: "clip-stream",
                disabled: !a || !(s || u) || c,
                label: P.intl.string(P.t.U4URzP),
                action: () => s ? (0, v.l0)() : (0, v.yd)((0, k._z)(e))
            }) : null
        }(Q),
        et = z(Q),
        el = (n = z(Q), t = (0, E.A)(Q.ownerId, X.x.STREAM), n ? t : null),
        ei = (F = (0, i.bG)([S.default], () => null != S.default.getRemoteSessionId()), L = (0, i.bG)([w.A], () => w.A.getChannel(Q.channelId), [Q.channelId]), R = z(Q), (G = (O = null != (D = M.default.getCurrentUser()) && Q.ownerId === D.id) ? P.intl.string(P.t.S5anIc) : R ? P.intl.string(P.t.q3O3J8) : P.intl.string(P.t["7Xq/nV"]), F || !O && R && L?.isGuildStageVoice()) ? null : (0, l.jsx)(r.Drp, {
            id: "watch",
            label: G,
            action: R ? function() {
                (0, d.vN)((0, k._z)(Q))
            } : function() {
                o.default.selectVoiceChannel(Q.channelId), (0, d.A9)(Q)
            },
            icon: $ && R && r.GT3,
            leadingAccessory: $ && R ? {
                type: "icon",
                icon: r.GT3
            } : void 0
        })),
        er = (N = z(Q), B = (0, i.bG)([_.Ay], () => _.Ay.isLocalMute(Q.ownerId, X.x.STREAM)), H = null != (J = M.default.getCurrentUser()) && Q.ownerId === J.id, !N || H ? null : (0, l.jsx)(r.sLh, {
            id: "mute",
            label: P.intl.string(P.t.sWmtI6),
            action: function() {
                a.A.toggleLocalMute(Q.ownerId, X.x.STREAM)
            },
            checked: B
        })),
        ea = function(e) {
            let n = z(e),
                t = e.ownerId === T.default.getId(),
                s = _.Ay.supports(X.O5.SIDECHAIN_COMPRESSION),
                o = (0, i.bG)([_.Ay], () => _.Ay.getSidechainCompression()),
                d = (0, i.bG)([_.Ay], () => _.Ay.getSidechainCompressionStrength()),
                {
                    analyticsLocations: c
                } = (0, A.Ay)();
            return !t && n && s ? (0, l.jsxs)(r.rXV, {
                children: [(0, l.jsx)(r.sLh, {
                    id: "sidechain-compression",
                    label: P.intl.string(P.t["/jwMtn"]),
                    subtext: P.intl.string(P.t.zlA23F),
                    action: () => a.A.setSidechainCompression(!o, {
                        analyticsLocations: c
                    }),
                    checked: o
                }), (0, l.jsx)(r.aK1, {
                    id: "sidechain-parameters",
                    label: P.intl.string(P.t.fhEzfj),
                    control: (e, n) => (0, l.jsx)(r.i42, {
                        ...e,
                        ref: n,
                        value: d,
                        maxValue: 100,
                        onChange: e => a.A.setSidechainCompressionStrength(e, {
                            analyticsLocations: c
                        }),
                        "aria-label": P.intl.string(P.t.fhEzfj)
                    })
                })]
            }) : null
        }(Q),
        es = (0, f.A)(Q, Y, Z),
        eo = (0, p.A)(Q.channelId, Q.ownerId),
        ed = (0, h.A)(Q.channelId),
        ec = (0, g.A)(Q.channelId, (0, k._z)(Q)),
        eu = (0, i.bG)([w.A], () => w.A.getChannel(Q.channelId), [Q.channelId]),
        eA = (0, I.h)({
            stream: Q,
            channelId: Q.channelId
        }),
        eg = (0, m.u)({
            userId: Q.ownerId,
            channelId: Q.channelId,
            guildId: Q.guildId,
            minimal: $
        }),
        {
            analyticsLocations: eh
        } = (0, A.Ay)(u.A.STREAM_CONTEXT_MENU),
        ep = (0, x.E)({
            stream: Q,
            handleGoLive: () => (0, V.A)(Q.guildId, Q.channelId, eh),
            minimal: $,
            appContext: Y
        });
    return $ ? (0, l.jsx)(A.f5, {
        value: eh,
        children: (0, l.jsxs)(r.W1t, {
            "data-menu-migrated-auto": !0,
            navId: "stream-context",
            onClose: s.Z_,
            "aria-label": P.intl.string(P.t.Gl3Q30),
            variant: "fixed",
            onSelect: q,
            onInteraction: K,
            children: [(0, l.jsx)(r.rXV, {
                children: ee ? ep : ei
            }), (0, l.jsxs)(r.rXV, {
                children: [er, el]
            }), (0, l.jsx)(r.rXV, {
                children: ec
            }), ea, et ? (0, l.jsxs)(l.Fragment, {
                children: [(0, l.jsx)(r.bXX, {}), (0, l.jsxs)(r.Drp, {
                    id: "more-options",
                    label: P.intl.string(P.t.PdRCRg),
                    children: [eo, eA, eg, es]
                })]
            }) : null]
        })
    }) : (0, l.jsx)(c.A, {
        context: W,
        object: U.ZSU.CONTEXT_MENU,
        children: (0, l.jsxs)(r.W1t, {
            "data-menu-migrated-auto": !0,
            navId: "stream-context",
            onClose: s.Z_,
            "aria-label": P.intl.string(P.t.Gl3Q30),
            variant: "flexible",
            onSelect: q,
            onInteraction: K,
            children: [(0, l.jsx)(r.rXV, {
                children: (0, l.jsxs)(l.Fragment, {
                    children: [ei, en, er, eA, eg]
                })
            }), (0, l.jsx)(r.rXV, {
                children: el
            }), (0, l.jsx)(r.rXV, {
                children: ec
            }), ea, (0, l.jsxs)(r.rXV, {
                children: [eu?.isGuildStageVoice() ? null : ed, eo, et && es]
            })]
        })
    })
}