/** chunk id: 684610 params = (module,exports,require) **/
n.d(t, {
    A: () => v
});
var a = n(627968),
    s = n(64700),
    i = n(397927),
    l = n(442433),
    r = n(793574),
    d = n(307600),
    c = n(363487),
    o = n(365003),
    u = n(843095),
    m = n(800007),
    _ = n(294726),
    x = n(985018),
    f = n(396936);
let g = {
    steps: {
        [m.HS.SERVER_SETTINGS]: {
            onBack: {
                type: "close"
            },
            onNext: {
                type: "save"
            }
        }
    }
};

function v(e) {
    let {
        guildId: t,
        instance: n
    } = e, m = s.useRef(null), v = (0, o.A)(n.providerType, n.gameServerPanelUrl);
    return (0, c.A)(t) ? (0, a.jsx)(i.YNO, {
        targetElementRef: m,
        align: "top",
        position: "right",
        animationPosition: "bottom",
        disablePointerEvents: !1,
        renderPopout: e => {
            let {
                closePopout: s
            } = e;
            return (0, a.jsx)(i.W1t, {
                "data-menu-migrated": !0,
                navId: "game_server-popout-context-menu",
                onClose: () => {
                    (0, l.Z_)(), s()
                },
                "aria-label": x.intl.string(_.default["yb+ork"]),
                onSelect: void 0,
                children: (0, a.jsxs)(i.rXV, {
                    children: [null != v && (0, a.jsx)(i.Drp, {
                        id: "get-support",
                        icon: i.oyn,
                        leadingAccessory: {
                            type: "icon",
                            icon: i.oyn
                        },
                        label: x.intl.string(_.default.bBkeMs),
                        action: () => {
                            (0, d.h)({
                                href: v
                            })
                        }
                    }), (0, a.jsx)(i.Drp, {
                        id: "settings",
                        icon: i.Zes,
                        leadingAccessory: {
                            type: "icon",
                            icon: i.Zes
                        },
                        label: x.intl.string(_.default["feUiM/"]),
                        action: () => {
                            (0, u.A)({
                                guildId: t,
                                stepConfig: g,
                                initialGameServerInstance: n,
                                analyticsLocation: r.A.GAME_SERVER_PAGE
                            })
                        }
                    })]
                })
            })
        },
        children: e => (0, a.jsx)(i.DUT, {
            "aria-label": x.intl.string(x.t["UKOtz+"]),
            className: f.v,
            ...e,
            innerRef: m,
            children: (0, a.jsx)(i.jNK, {
                color: "currentColor",
                size: "sm"
            })
        })
    }) : null
}