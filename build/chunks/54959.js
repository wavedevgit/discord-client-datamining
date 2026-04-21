/** chunk id: 54959 params = (module,exports,require) **/
t.d(i, {
    A: () => E
});
var l = t(627968),
    s = t(64700),
    a = t(311907),
    n = t(397927),
    r = t(966327),
    o = t(972387),
    d = t(539895),
    c = t(233761),
    u = t(960736),
    m = t(398884),
    _ = t(287809),
    x = t(954571),
    h = t(162284),
    g = t(652215),
    p = t(985018),
    A = t(963120);

function E(e) {
    let {
        invite: i,
        guild: t,
        className: E
    } = e, j = (0, a.bG)([_.default], () => _.default.getCurrentUser()), {
        submitting: v,
        error: I,
        invite_instance_id: f
    } = (0, a.cf)([d.A], () => d.A.getProps()), y = s.useCallback(() => {
        o.A.acceptInvite(i, f)
    }, [i, f]), C = (0, u.uE)(), T = "" !== C ? p.intl.format(p.t["9sWQNT"], {
        usernameHook: (e, i) => (0, l.jsx)("span", {
            children: C
        }, i)
    }) : p.intl.string(p.t["e/6Ogt"]), N = s.useRef(null), [D, b] = s.useState(!1), L = s.useCallback(() => {
        D || x.default.track(g.HAw.INVITE_ACCEPT_JOIN_SETTINGS_EXPANDED, {
            guild_id: t.id,
            invite_code: i.code,
            location: "accept_invite_modal_redesign"
        }), b(!D)
    }, [t.id, i.code, D]), S = (0, m.Sn)();
    return (0, l.jsxs)("div", {
        className: E,
        children: [null != I ? (0, l.jsx)("div", {
            className: A.Un,
            children: (0, l.jsx)(n.wx6, {
                type: "critical",
                children: I
            })
        }) : null, S ? (0, l.jsx)(c.A, {
            className: A.sX
        }) : null, (0, l.jsxs)(n.ButtonGroup, {
            fullWidthContainer: !0,
            fullWidth: !0,
            direction: "horizontal",
            children: [(0, l.jsx)(n.Button, {
                onClick: y,
                loading: v,
                variant: "primary",
                disabled: S,
                text: S ? p.intl.string(p.t.ZNCziL) : T,
                icon: S || null == j ? void 0 : () => (0, l.jsx)(r.A, {
                    "aria-hidden": !0,
                    size: n._3J.SIZE_16,
                    user: j
                })
            }), S ? null : (0, l.jsx)(n.YNO, {
                targetElementRef: N,
                animation: n.YNO.Animation.NONE,
                position: "top",
                align: "right",
                shouldShow: D,
                autoInvert: !1,
                onRequestClose: () => b(!1),
                renderPopout: e => (0, l.jsx)(h.A, {
                    invite: i,
                    ...e
                }),
                children: e => (0, l.jsx)("div", {
                    ref: N,
                    children: (0, l.jsx)(n.K0, {
                        ...e,
                        icon: n.Zes,
                        "aria-label": p.intl.string(p.t["3D5yo/"]),
                        variant: "secondary",
                        onClick: L
                    })
                })
            })]
        })]
    })
}