/** chunk id: 30925 params = (module,exports,require) **/
a.d(t, {
    A: () => L
});
var n = a(627968),
    s = a(64700),
    l = a(503698),
    r = a.n(l),
    i = a(311907),
    o = a(397927),
    c = a(736653),
    d = a(780898),
    u = a(512213),
    m = a(141468),
    _ = a(963852),
    p = a(763754),
    h = a(20851),
    x = a(919395),
    g = a(287070),
    f = a(101058),
    C = a(836602),
    v = a(950191),
    N = a(686189),
    A = a(946356),
    j = a(954571),
    T = a(975571),
    S = a(652215),
    b = a(996988),
    E = a(864386),
    y = a(985018),
    I = a(471260);

function L(e) {
    let {
        user: t,
        guild: a,
        displayName: l,
        selectedFontId: L,
        selectedEffectId: k,
        selectedColors: D,
        onClose: R
    } = e, P = (0, c.Ay)(), M = (0, o.Mwr)(P), [O, z] = (0, s.useState)(M), G = (0, v.Ay)(t.id, null), {
        bannerSrc: H
    } = (0, N.A)({
        displayProfile: G,
        size: 413,
        canAnimate: !1
    }), U = (0, i.cf)([C.A], () => C.A.getPendingChanges(a?.id)), F = (0, f.V7)({
        userId: t.id,
        image: U.pendingAvatar
    }), {
        userNameplate: B,
        guildNameplate: J,
        pendingNameplate: Y
    } = (0, x.rv)(t, a?.id), W = (0, d.WK)(J);
    O && !M ? P = S.NJ8.DARK : !O && M && (P = S.NJ8.LIGHT);
    let V = (0, s.useCallback)(() => {
            j.default.track(S.HAw.DISPLAY_NAME_STYLES_CLOSED), R()
        }, [R]),
        X = (0, s.useCallback)(e => {
            z(e === S.NJ8.DARK), j.default.track(S.HAw.DISPLAY_NAME_STYLES_THEME_TOGGLE, {
                dark: e === S.NJ8.DARK
            })
        }, []),
        K = (0, s.useMemo)(() => ({
            ...(0, p.FT)(t, null),
            nick: l,
            displayNameStyles: {
                fontId: L,
                effectId: k,
                colors: D
            }
        }), [t, L, k, D, l]);
    return (0, n.jsxs)("div", {
        className: I._l,
        children: [(0, n.jsx)(o.rQ0, {
            "data-migration-pending": !0,
            separator: !1,
            className: I.bV,
            children: (0, n.jsx)(o.s_y, {
                "data-migration-pending": !0,
                onClick: V,
                innerClassName: I.b
            })
        }), null != H && (0, n.jsx)(A.A, {
            user: t,
            displayProfile: G,
            themeType: b.d.MODAL_V2,
            className: I.LX,
            forceUserTheme: !0,
            children: (0, n.jsx)("div", {
                className: I.b8,
                style: {
                    backgroundImage: `url(${H})`
                }
            })
        }), (0, n.jsx)(o.NPJ, {
            theme: P,
            children: e => (0, n.jsxs)("div", {
                className: r()(I.cq, e),
                inert: !0,
                children: [(0, n.jsx)(g.A, {
                    user: t,
                    guild: a,
                    ...U,
                    pendingAvatar: F,
                    pendingGlobalName: l,
                    pendingDisplayNameStyles: K.displayNameStyles,
                    canUsePremiumCustomization: !0,
                    disabledInputs: !0,
                    hideCustomStatus: !0,
                    hideBioSection: !0,
                    containerClassName: I.ME,
                    interactive: !1,
                    hideExampleButton: !0
                }), (0, n.jsx)(h.A, {
                    author: K,
                    message: (0, m.rh)({
                        ...(0, _.Ay)({
                            channelId: "1337",
                            content: y.intl.string(E.default.h5Cuej)
                        }),
                        state: S.cmJ.SENT,
                        id: "0"
                    }),
                    isGroupStart: !0,
                    hideSimpleEmbedContent: !0,
                    hideGuildTag: !0,
                    className: I.OT,
                    previewGuildId: a?.id
                }), (0, n.jsx)(u.A, {
                    user: t,
                    guildId: a?.id,
                    nameplate: Y,
                    nameplateData: null == Y ? W ?? B : void 0,
                    pendingGlobalName: l,
                    pendingDisplayNameStyles: K.displayNameStyles,
                    isHighlighted: !0,
                    className: I.qF
                })]
            })
        }), (0, n.jsxs)("div", {
            className: I.dI,
            children: [(0, n.jsx)(o.Text, {
                variant: "text-xs/normal",
                color: "text-muted",
                children: y.intl.format(E.default.prQba8, {
                    helpArticleLink: T.A.getArticleURL(S.MVz.DISPLAY_NAME_STYLES)
                })
            }), (0, n.jsx)(w, {
                darkPreview: O,
                onToggleTheme: X
            })]
        })]
    })
}

function w(e) {
    let {
        darkPreview: t,
        onToggleTheme: a
    } = e, s = t ? S.NJ8.DARK : S.NJ8.LIGHT;
    return (0, n.jsx)(o.IzF, {
        className: I.xr,
        optionClassName: I.$C,
        options: [{
            name: "",
            tooltip: y.intl.string(y.t.b8Cei3),
            value: S.NJ8.DARK,
            icon: o.Zve,
            className: s === S.NJ8.DARK ? I.iB : void 0
        }, {
            name: "",
            tooltip: y.intl.string(y.t.K2sFfo),
            value: S.NJ8.LIGHT,
            icon: o.FVN,
            className: s === S.NJ8.LIGHT ? I.iB : void 0
        }],
        value: s,
        onChange: e => {
            let {
                value: t
            } = e;
            return a(t)
        },
        look: "pill"
    })
}