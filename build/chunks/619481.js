/** Chunk was on 15682 **/
/** chunk id: 619481, original params: e,t,l (module,exports,require) **/
l.d(t, {
    default: () => w
}), l(896048);
var n = l(627968),
    r = l(64700),
    s = l(110259),
    a = l(508425),
    o = l(559949),
    i = l(311907),
    c = l(52133),
    d = l(397927),
    u = l(793574),
    m = l(688810),
    p = l(139286),
    f = l(919395),
    g = l(71393),
    _ = l(287809),
    x = l(954571),
    b = l(871162),
    h = l(945096),
    j = l(898985),
    v = l(415299),
    N = l(897661),
    A = l(18396),
    S = l(242853),
    C = l(32246),
    y = l(879164),
    O = l(30925),
    E = l(652215),
    T = l(927961),
    P = l(985018),
    D = l(753565);

function w(e) {
    var t, l, w;
    let {
        transitionState: I,
        analyticsLocations: L,
        guildId: k,
        onClose: R
    } = e, G = (0, i.bG)([_.default], () => _.default.getCurrentUser()), z = (0, N.b)(G, k), M = (0, i.bG)([g.A], () => g.A.getGuild(k)), {
        userDisplayNameStyles: H,
        guildDisplayNameStyles: U,
        pendingDisplayNameStyles: Y
    } = (0, f.B0)(G, k), B = void 0 !== Y ? Y : null != U ? U : H, [J, F] = r.useState(null != (t = null == B ? void 0 : B.fontId) ? t : o.x.DEFAULT), [V, K] = r.useState(null != (l = null == B ? void 0 : B.effectId) ? l : a.z.SOLID), q = (0, j._)(V), X = (0, j._)(a.z.GRADIENT), Q = null != (w = null == B ? void 0 : B.colors) ? w : [], [Z, W] = r.useState(Q.length > 0 && V !== a.z.GRADIENT ? Q[0] : q.defaultColors[0]), [$, ee] = r.useState(Q.length > 0 && V === a.z.GRADIENT ? Q : X.defaultColors);
    (0, p.A)({
        type: s.ImpressionTypes.POPOUT,
        name: s.ImpressionNames.DISPLAY_NAME_STYLES_MODAL
    }, {
        trackOnInitialLoad: !0
    });
    let {
        analyticsLocations: et
    } = (0, m.Ay)(L, u.A.EDIT_DISPLAY_NAME_STYLES_MODAL), el = r.useMemo(() => V === a.z.GRADIENT ? $ : [Z], [V, $, Z]), en = r.useMemo(() => {
        var e;
        return J !== (null == B ? void 0 : B.fontId) || V !== (null == B ? void 0 : B.effectId) || !(0, c.v)(el, null != (e = null == B ? void 0 : B.colors) ? e : [])
    }, [B, J, V, el]), er = (0, v.v)({
        hasChanges: en,
        selectedFontId: J,
        selectedEffectId: V,
        selectedColors: el,
        defaultColor: q.defaultColors[0],
        guildId: k,
        onClose: R
    }), es = r.useCallback(() => {
        let {
            fontId: e,
            effectId: t,
            colors: l
        } = (0, h.gN)();
        F(e), K(t), t === a.z.GRADIENT ? ee(l) : W(l[0]), x.default.track(E.HAw.DISPLAY_NAME_STYLES_SURPRISE_ME)
    }, [ee, W]), ea = r.useCallback(e => {
        K(e)
    }, [K]), eo = r.useCallback(e => {
        V === a.z.GRADIENT ? ee(e) : W(e[0])
    }, [V, ee, W]);
    return null == G ? null : (0, n.jsx)(m.f5, {
        value: et,
        children: (0, n.jsx)(b.l.Provider, {
            value: {
                overrideSettings: !0
            },
            children: (0, n.jsxs)(d.EOs, {
                "data-migration-pending": !0,
                transitionState: I,
                size: d.rIJ.LARGE,
                parentComponent: "DisplayNameStylesModal",
                className: D.CR,
                children: [(0, n.jsxs)(d.$mQ, {
                    "data-migration-pending": !0,
                    className: D.jE,
                    style: {
                        overflow: "hidden auto"
                    },
                    children: [(0, n.jsxs)("div", {
                        className: D.w1,
                        children: [(0, n.jsx)(d.rQ0, {
                            "data-migration-pending": !0,
                            separator: !1,
                            className: D.bV,
                            children: (0, n.jsx)(d.Heading, {
                                variant: "heading-lg/semibold",
                                children: P.intl.string(T.default.ZPMAlX)
                            })
                        }), (0, n.jsx)(C.A, {
                            selectedFontId: J,
                            setSelectedFontId: F,
                            displayName: z,
                            className: D._
                        }), (0, n.jsx)(S.A, {
                            selectedEffectId: V,
                            setSelectedEffectId: ea,
                            className: D._
                        }), (0, n.jsx)(A.A, {
                            selectedColors: el,
                            setSelectedColors: eo,
                            selectedEffectId: V,
                            className: D._,
                            defaultColor: q.defaultColors[0]
                        })]
                    }), (0, n.jsx)(O.A, {
                        user: G,
                        guild: M,
                        displayName: z,
                        selectedFontId: J,
                        selectedEffectId: V,
                        selectedColors: V === a.z.SOLID && (0, c.v)(el, q.defaultColors) ? [] : el,
                        onClose: R
                    })]
                }), (0, n.jsx)(y._, {
                    onApply: er,
                    onSurpriseMe: es,
                    onClose: R,
                    canApply: en,
                    analyticsLocations: et
                })]
            })
        })
    })
}