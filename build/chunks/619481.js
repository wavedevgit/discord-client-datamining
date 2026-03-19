/** chunk id: 619481 params = (module,exports,require) **/
s.d(t, {
    default: () => y
});
var l = s(627968),
    a = s(64700),
    n = s(110259),
    i = s(508425),
    r = s(559949),
    o = s(311907),
    d = s(52133),
    c = s(397927),
    u = s(793574),
    m = s(688810),
    _ = s(139286),
    x = s(919395),
    p = s(71393),
    h = s(287809),
    g = s(954571),
    f = s(871162),
    N = s(945096),
    C = s(898985),
    A = s(415299),
    j = s(897661),
    S = s(18396),
    T = s(242853),
    v = s(32246),
    E = s(879164),
    b = s(30925),
    L = s(652215),
    D = s(241015),
    I = s(985018),
    k = s(867335);

function y(e) {
    let {
        transitionState: t,
        analyticsLocations: s,
        guildId: y,
        onClose: P
    } = e, w = (0, o.bG)([h.default], () => h.default.getCurrentUser()), R = (0, j.b)(w, y), G = (0, o.bG)([p.A], () => p.A.getGuild(y)), {
        userDisplayNameStyles: O,
        guildDisplayNameStyles: z,
        pendingDisplayNameStyles: M
    } = (0, x.B0)(w, y), H = void 0 !== M ? M : z ?? O, [U, Y] = a.useState(H?.fontId ?? r.x.DEFAULT), [B, J] = a.useState(H?.effectId ?? i.z.SOLID), F = (0, C._)(B), V = (0, C._)(i.z.GRADIENT), q = H?.colors ?? [], [K, X] = a.useState(q.length > 0 && B !== i.z.GRADIENT ? q[0] : F.defaultColors[0]), [Q, Z] = a.useState(q.length > 0 && B === i.z.GRADIENT ? q : V.defaultColors);
    (0, _.A)({
        type: n.ImpressionTypes.POPOUT,
        name: n.ImpressionNames.DISPLAY_NAME_STYLES_MODAL
    }, {
        trackOnInitialLoad: !0
    });
    let {
        analyticsLocations: W
    } = (0, m.Ay)(s, u.A.EDIT_DISPLAY_NAME_STYLES_MODAL), $ = a.useMemo(() => B === i.z.GRADIENT ? Q : [K], [B, Q, K]), ee = a.useMemo(() => U !== H?.fontId || B !== H?.effectId || !(0, d.v)($, H?.colors ?? []), [H, U, B, $]), et = (0, A.v)({
        hasChanges: ee,
        selectedFontId: U,
        selectedEffectId: B,
        selectedColors: $,
        defaultColor: F.defaultColors[0],
        guildId: y,
        onClose: P
    }), es = a.useCallback(() => {
        let {
            fontId: e,
            effectId: t,
            colors: s
        } = (0, N.gN)();
        Y(e), J(t), t === i.z.GRADIENT ? Z(s) : X(s[0]), g.default.track(L.HAw.DISPLAY_NAME_STYLES_SURPRISE_ME)
    }, [Z, X]), el = a.useCallback(e => {
        J(e)
    }, [J]), ea = a.useCallback(e => {
        B === i.z.GRADIENT ? Z(e) : X(e[0])
    }, [B, Z, X]);
    return null == w ? null : (0, l.jsx)(m.f5, {
        value: W,
        children: (0, l.jsx)(f.l.Provider, {
            value: {
                overrideSettings: !0
            },
            children: (0, l.jsxs)(c.EOs, {
                "data-migration-pending": !0,
                transitionState: t,
                size: c.rIJ.LARGE,
                parentComponent: "DisplayNameStylesModal",
                className: k.CR,
                children: [(0, l.jsxs)(c.$mQ, {
                    "data-migration-pending": !0,
                    className: k.jE,
                    style: {
                        overflow: "hidden auto"
                    },
                    children: [(0, l.jsxs)("div", {
                        className: k.w1,
                        children: [(0, l.jsx)(c.rQ0, {
                            "data-migration-pending": !0,
                            separator: !1,
                            className: k.bV,
                            children: (0, l.jsx)(c.Heading, {
                                variant: "heading-lg/semibold",
                                children: I.intl.string(D.default.ZPMAlX)
                            })
                        }), (0, l.jsx)(v.A, {
                            selectedFontId: U,
                            setSelectedFontId: Y,
                            displayName: R,
                            className: k._
                        }), (0, l.jsx)(T.A, {
                            selectedEffectId: B,
                            setSelectedEffectId: el,
                            className: k._
                        }), (0, l.jsx)(S.A, {
                            selectedColors: $,
                            setSelectedColors: ea,
                            selectedEffectId: B,
                            className: k._,
                            defaultColor: F.defaultColors[0]
                        })]
                    }), (0, l.jsx)(b.A, {
                        user: w,
                        guild: G,
                        displayName: R,
                        selectedFontId: U,
                        selectedEffectId: B,
                        selectedColors: B === i.z.SOLID && (0, d.v)($, F.defaultColors) ? [] : $,
                        onClose: P
                    })]
                }), (0, l.jsx)(E._, {
                    onApply: et,
                    onSurpriseMe: es,
                    onClose: P,
                    canApply: ee,
                    analyticsLocations: W
                })]
            })
        })
    })
}