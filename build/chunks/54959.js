/** chunk id: 54959 params = (module,exports,require) **/
t.d(i, {
    A: () => E
});
var l = t(627968),
    s = t(64700),
    n = t(311907),
    a = t(397927),
    r = t(966327),
    o = t(972387),
    d = t(539895),
    c = t(233761),
    u = t(960736),
    m = t(398884),
    _ = t(287809),
    h = t(954571),
    x = t(162284),
    g = t(652215),
    p = t(985018),
    A = t(963120);

function E(e) {
    let {
        invite: i,
        guild: t,
        className: E
    } = e, j = (0, n.bG)([_.default], () => _.default.getCurrentUser()), {
        submitting: v,
        error: I,
        invite_instance_id: f
    } = (0, n.cf)([d.A], () => d.A.getProps()), C = s.useCallback(() => {
        o.A.acceptInvite(i, f)
    }, [i, f]), T = (0, u.uE)(), y = "" !== T ? p.intl.format(p.t["9sWQNT"], {
        usernameHook: (e, i) => (0, l.jsx)("span", {
            children: T
        }, i)
    }) : p.intl.string(p.t["e/6Ogt"]), D = s.useRef(null), [N, b] = s.useState(!1), L = s.useCallback(() => {
        N || h.default.track(g.HAw.INVITE_ACCEPT_JOIN_SETTINGS_EXPANDED, {
            guild_id: t.id,
            invite_code: i.code,
            location: "accept_invite_modal_redesign"
        }), b(!N)
    }, [t.id, i.code, N]), S = (0, m.Sn)();
    return (0, l.jsxs)("div", {
        className: E,
        children: [null != I ? (0, l.jsx)("div", {
            className: A.Un,
            children: (0, l.jsx)(a.wx6, {
                type: "critical",
                children: I
            })
        }) : null, S ? (0, l.jsx)(c.A, {
            className: A.sX
        }) : null, (0, l.jsxs)(a.ButtonGroup, {
            fullWidthContainer: !0,
            fullWidth: !0,
            direction: "horizontal",
            children: [(0, l.jsx)(a.Button, {
                onClick: C,
                loading: v,
                variant: "primary",
                disabled: S,
                text: S ? p.intl.string(p.t.ZNCziL) : y,
                icon: S || null == j ? void 0 : () => (0, l.jsx)(r.A, {
                    "aria-hidden": !0,
                    size: a._3J.SIZE_16,
                    user: j
                })
            }), S ? null : (0, l.jsx)(a.YNO, {
                targetElementRef: D,
                animation: a.YNO.Animation.NONE,
                position: "top",
                align: "right",
                shouldShow: N,
                autoInvert: !1,
                onRequestClose: () => b(!1),
                renderPopout: e => (0, l.jsx)(x.A, {
                    invite: i,
                    ...e
                }),
                children: e => (0, l.jsx)("div", {
                    ref: D,
                    children: (0, l.jsx)(a.K0, {
                        ...e,
                        icon: a.Zes,
                        "aria-label": p.intl.string(p.t["3D5yo/"]),
                        variant: "secondary",
                        onClick: L
                    })
                })
            })]
        })]
    })
}