/** chunk id: 684610, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => v
});
var a = n(627968),
    i = n(64700),
    s = n(397927),
    r = n(442433),
    l = n(793574),
    d = n(307600),
    o = n(363487),
    c = n(365003),
    u = n(843095),
    _ = n(800007),
    m = n(738072),
    x = n(985018),
    g = n(653898);
let f = {
    steps: {
        [_.HS.SERVER_SETTINGS]: {
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
    } = e, _ = i.useRef(null), v = (0, c.A)(n.providerType, n.gameServerPanelUrl);
    return (0, o.A)(t) ? (0, a.jsx)(s.YNO, {
        targetElementRef: _,
        align: "top",
        position: "right",
        animationPosition: "bottom",
        disablePointerEvents: !1,
        renderPopout: e => {
            let {
                closePopout: i
            } = e;
            return (0, a.jsx)(s.W1t, {
                "data-menu-migrated": !0,
                navId: "game_server-popout-context-menu",
                onClose: () => {
                    (0, r.Z_)(), i()
                },
                "aria-label": x.intl.string(m.default["yb+ork"]),
                onSelect: void 0,
                children: (0, a.jsxs)(s.rXV, {
                    children: [null != v && (0, a.jsx)(s.Drp, {
                        id: "get-support",
                        icon: s.oyn,
                        leadingAccessory: {
                            type: "icon",
                            icon: s.oyn
                        },
                        label: x.intl.string(m.default.bBkeMs),
                        action: () => {
                            (0, d.h)({
                                href: v
                            })
                        }
                    }), (0, a.jsx)(s.Drp, {
                        id: "settings",
                        icon: s.Zes,
                        leadingAccessory: {
                            type: "icon",
                            icon: s.Zes
                        },
                        label: x.intl.string(m.default["feUiM/"]),
                        action: () => {
                            (0, u.A)({
                                guildId: t,
                                stepConfig: f,
                                initialGameServerInstance: n,
                                analyticsLocation: l.A.GAME_SERVER_PAGE
                            })
                        }
                    })]
                })
            })
        },
        children: e => (0, a.jsx)(s.DUT, {
            "aria-label": x.intl.string(x.t["UKOtz+"]),
            className: g.v,
            ...e,
            innerRef: _,
            children: (0, a.jsx)(s.jNK, {
                color: "currentColor",
                size: "sm"
            })
        })
    }) : null
}