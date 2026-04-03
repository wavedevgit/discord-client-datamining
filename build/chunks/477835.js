/** chunk id: 477835 params = (module,exports,require) **/
n.d(t, {
    A: () => O
});
var i = n(627968),
    a = n(64700),
    r = n(503698),
    l = n.n(r),
    s = n(417597),
    o = n(554146),
    d = n(621956),
    c = n(990078),
    u = n(421380),
    A = n(397927),
    h = n(442433),
    _ = n(793574),
    m = n(688810),
    p = n(384059),
    g = n(480890),
    E = n(160761),
    I = n(173660),
    f = n(430452),
    C = n(234320),
    T = n(536432),
    N = n(674168),
    S = n(989799),
    x = n(652215),
    v = n(49999),
    b = n(985018),
    y = n(470534);

function O(e) {
    let {
        channel: t,
        ...r
    } = e, O = a.useRef(null), {
        mute: L,
        suppress: R
    } = (0, I.A)(t), P = (0, s.bG)([f.Ay], () => f.Ay.isDeaf()), D = L || R || P, [M, j] = a.useState(!1), w = t.getGuildId(), U = (0, T.VE)({
        isSoundboardButtonDisabled: D
    }), [G, k] = (0, E.DP)(U), {
        analyticsLocations: V,
        parentAnalyticsLocation: B
    } = (0, m.Ay)(_.A.SOUNDBOARD_BUTTON);

    function H(e) {
        null != w && (0, h.L3)(e, async () => {
            let {
                default: e
            } = await n.e("51111").then(n.bind(n, 323002));
            return t => (0, i.jsx)(e, {
                guildId: w,
                sourceAnalyticsLocations: V,
                ...t,
                onInteraction: (0, g.s)("SoundboardContextMenu", _.A.RTC_PANEL)
            })
        })
    }
    let {
        Component: F,
        play: Y,
        events: {
            onMouseEnter: W,
            onMouseLeave: K
        }
    } = (0, d.E)(), q = a.useCallback(() => {
        D || j(!M)
    }, [D, M]);
    return (0, C.Vo)({
        event: x.jej.TOGGLE_SOUNDBOARD,
        handler: q
    }), (0, i.jsx)(m.f5, {
        value: V,
        children: (0, i.jsx)(c.m, {
            targetElementRef: O,
            text: L ? b.intl.string(b.t["Ox4/zU"]) : R ? b.intl.string(b.t["+YBKYI"]) : P ? b.intl.string(b.t.X1lQli) : b.intl.string(b.t["6EJvHt"]),
            asContainer: !0,
            shouldShow: !M,
            children: (0, i.jsx)(A.YNO, {
                targetElementRef: O,
                animation: A.YNO.Animation.FADE,
                shouldShow: M,
                position: "top",
                onRequestClose: () => j(!1),
                renderPopout: e => {
                    let {
                        closePopout: n
                    } = e;
                    return (0, i.jsx)(S.A, {
                        guildId: w,
                        channel: t,
                        onClose: n,
                        gridNotice: G === o.M.CUSTOM_CALL_SOUNDS_PICKER_UPSELL && (0, i.jsx)(N.m, {
                            onClose: n,
                            markAsDismissed: k
                        }),
                        analyticsSource: "rtc panel"
                    })
                },
                children: e => (0, i.jsx)("div", {
                    ref: O,
                    children: (0, i.jsx)(u.$n, {
                        "data-migration-pending": !0,
                        ...e,
                        className: l()(y.x6, y.Sq, {
                            [y.W4]: M,
                            [y.r9]: D
                        }),
                        wrapperClassName: y.x6,
                        innerClassName: y.bk,
                        disabled: D,
                        onClick: () => {
                            null != G && G !== o.M.CUSTOM_CALL_SOUNDS_PICKER_UPSELL && k(v.i.UNKNOWN), j(!M), Y(), (0, p.X)(B, p.O.SOUNDBOARD)
                        },
                        onMouseEnter: e => {
                            r.onMouseEnter?.(e), W()
                        },
                        onMouseLeave: e => {
                            r.onMouseLeave?.(e), K()
                        },
                        onContextMenu: H,
                        fullWidth: !0,
                        size: u.$n.Sizes.MEDIUM,
                        ...r,
                        children: (0, i.jsx)(F, {
                            className: y.iA,
                            size: "sm",
                            color: "currentColor"
                        })
                    })
                })
            })
        })
    })
}