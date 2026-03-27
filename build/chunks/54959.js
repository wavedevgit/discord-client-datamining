/** chunk id: 54959 params = (module,exports,require) **/
i.d(t, {
    A: () => j
});
var l = i(627968),
    n = i(64700),
    a = i(311907),
    s = i(397927),
    r = i(966327),
    o = i(972387),
    d = i(539895),
    c = i(233761),
    u = i(960736),
    m = i(398884),
    x = i(287809),
    g = i(954571),
    h = i(939903),
    _ = i(652215),
    p = i(985018),
    A = i(639325);

function j(e) {
    let {
        invite: t,
        guild: i,
        className: j
    } = e, E = (0, a.bG)([x.default], () => x.default.getCurrentUser()), {
        submitting: v,
        error: I
    } = (0, a.cf)([d.A], () => d.A.getProps()), f = n.useCallback(() => {
        o.A.acceptInvite(t)
    }, [t]), T = (0, u.uE)(), C = "" !== T ? p.intl.format(p.t["9sWQNT"], {
        usernameHook: (e, t) => (0, l.jsx)("span", {
            children: T
        }, t)
    }) : p.intl.string(p.t["e/6Ogt"]), N = n.useRef(null), [y, D] = n.useState(!1), S = n.useCallback(() => {
        y || g.default.track(_.HAw.INVITE_ACCEPT_JOIN_SETTINGS_EXPANDED, {
            guild_id: i.id,
            invite_code: t.code,
            location: "accept_invite_modal_redesign"
        }), D(!y)
    }, [i.id, t.code, y]), L = (0, m.Sn)();
    return (0, l.jsxs)("div", {
        className: j,
        children: [null != I ? (0, l.jsx)("div", {
            className: A.Un,
            children: (0, l.jsx)(s.wx6, {
                type: "critical",
                children: I
            })
        }) : null, L ? (0, l.jsx)(c.A, {
            className: A.sX
        }) : null, (0, l.jsxs)(s.ButtonGroup, {
            fullWidthContainer: !0,
            fullWidth: !0,
            direction: "horizontal",
            children: [(0, l.jsx)(s.Button, {
                onClick: f,
                loading: v,
                variant: "primary",
                disabled: L,
                text: L ? p.intl.string(p.t.ZNCziL) : C,
                icon: L || null == E ? void 0 : () => (0, l.jsx)(r.A, {
                    "aria-hidden": !0,
                    size: s._3J.SIZE_16,
                    user: E
                })
            }), L ? null : (0, l.jsx)(s.YNO, {
                targetElementRef: N,
                animation: s.YNO.Animation.NONE,
                position: "top",
                align: "right",
                shouldShow: y,
                autoInvert: !1,
                onRequestClose: () => D(!1),
                renderPopout: e => (0, l.jsx)(h.A, {
                    invite: t,
                    ...e
                }),
                children: e => (0, l.jsx)("div", {
                    ref: N,
                    children: (0, l.jsx)(s.K0, {
                        ...e,
                        icon: s.Zes,
                        "aria-label": p.intl.string(p.t["3D5yo/"]),
                        variant: "secondary",
                        onClick: S
                    })
                })
            })]
        })]
    })
}