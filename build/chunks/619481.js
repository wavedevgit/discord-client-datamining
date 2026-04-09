/** chunk id: 619481 params = (module,exports,require) **/
a.d(t, {
    default: () => k
});
var n = a(627968),
    s = a(64700),
    l = a(110259),
    r = a(508425),
    i = a(559949),
    o = a(311907),
    c = a(52133),
    d = a(397927),
    u = a(793574),
    m = a(688810),
    _ = a(139286),
    p = a(919395),
    h = a(71393),
    x = a(287809),
    g = a(954571),
    f = a(871162),
    C = a(945096),
    v = a(898985),
    N = a(415299),
    A = a(897661),
    j = a(18396),
    T = a(242853),
    S = a(32246),
    b = a(879164),
    E = a(30925),
    y = a(652215),
    I = a(927961),
    L = a(985018),
    w = a(579586);

function k(e) {
    let {
        transitionState: t,
        analyticsLocations: a,
        guildId: k,
        onClose: D
    } = e, R = (0, o.bG)([x.default], () => x.default.getCurrentUser()), P = (0, A.b)(R, k), M = (0, o.bG)([h.A], () => h.A.getGuild(k)), {
        userDisplayNameStyles: O,
        guildDisplayNameStyles: z,
        pendingDisplayNameStyles: G
    } = (0, p.B0)(R, k), H = void 0 !== G ? G : z ?? O, [U, F] = s.useState(H?.fontId ?? i.x.DEFAULT), [B, J] = s.useState(H?.effectId ?? r.z.SOLID), Y = (0, v._)(B), W = (0, v._)(r.z.GRADIENT), V = H?.colors ?? [], [X, K] = s.useState(V.length > 0 && B !== r.z.GRADIENT ? V[0] : Y.defaultColors[0]), [Q, q] = s.useState(V.length > 0 && B === r.z.GRADIENT ? V : W.defaultColors);
    (0, _.A)({
        type: l.ImpressionTypes.POPOUT,
        name: l.ImpressionNames.DISPLAY_NAME_STYLES_MODAL
    }, {
        trackOnInitialLoad: !0
    });
    let {
        analyticsLocations: Z
    } = (0, m.Ay)(a, u.A.EDIT_DISPLAY_NAME_STYLES_MODAL), $ = s.useMemo(() => B === r.z.GRADIENT ? Q : [X], [B, Q, X]), ee = s.useMemo(() => U !== H?.fontId || B !== H?.effectId || !(0, c.v)($, H?.colors ?? []), [H, U, B, $]), et = (0, N.v)({
        hasChanges: ee,
        selectedFontId: U,
        selectedEffectId: B,
        selectedColors: $,
        defaultColor: Y.defaultColors[0],
        guildId: k,
        onClose: D
    }), ea = s.useCallback(() => {
        let {
            fontId: e,
            effectId: t,
            colors: a
        } = (0, C.gN)();
        F(e), J(t), t === r.z.GRADIENT ? q(a) : K(a[0]), g.default.track(y.HAw.DISPLAY_NAME_STYLES_SURPRISE_ME)
    }, [q, K]), en = s.useCallback(e => {
        J(e)
    }, [J]), es = s.useCallback(e => {
        B === r.z.GRADIENT ? q(e) : K(e[0])
    }, [B, q, K]);
    return null == R ? null : (0, n.jsx)(m.f5, {
        value: Z,
        children: (0, n.jsx)(f.l.Provider, {
            value: {
                overrideSettings: !0
            },
            children: (0, n.jsxs)(d.EOs, {
                "data-migration-pending": !0,
                transitionState: t,
                size: d.rIJ.LARGE,
                parentComponent: "DisplayNameStylesModal",
                className: w.CR,
                children: [(0, n.jsxs)(d.$mQ, {
                    "data-migration-pending": !0,
                    className: w.jE,
                    style: {
                        overflow: "hidden auto"
                    },
                    children: [(0, n.jsxs)("div", {
                        className: w.w1,
                        children: [(0, n.jsx)(d.rQ0, {
                            "data-migration-pending": !0,
                            separator: !1,
                            className: w.bV,
                            children: (0, n.jsx)(d.Heading, {
                                variant: "heading-lg/semibold",
                                children: L.intl.string(I.default.ZPMAlX)
                            })
                        }), (0, n.jsx)(S.A, {
                            selectedFontId: U,
                            setSelectedFontId: F,
                            displayName: P,
                            className: w._
                        }), (0, n.jsx)(T.A, {
                            selectedEffectId: B,
                            setSelectedEffectId: en,
                            className: w._
                        }), (0, n.jsx)(j.A, {
                            selectedColors: $,
                            setSelectedColors: es,
                            selectedEffectId: B,
                            className: w._,
                            defaultColor: Y.defaultColors[0]
                        })]
                    }), (0, n.jsx)(E.A, {
                        user: R,
                        guild: M,
                        displayName: P,
                        selectedFontId: U,
                        selectedEffectId: B,
                        selectedColors: B === r.z.SOLID && (0, c.v)($, Y.defaultColors) ? [] : $,
                        onClose: D
                    })]
                }), (0, n.jsx)(b._, {
                    onApply: et,
                    onSurpriseMe: ea,
                    onClose: D,
                    canApply: ee,
                    analyticsLocations: Z
                })]
            })
        })
    })
}