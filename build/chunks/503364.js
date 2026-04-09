/** chunk id: 503364 params = (module,exports,require) **/
n.d(t, {
    A: () => m,
    N: () => x
});
var a = n(627968),
    i = n(64700),
    l = n(990078),
    r = n(397927),
    s = n(442433),
    o = n(50268),
    c = n(67518),
    d = n(651864),
    u = n(985018);

function m(e) {
    let {
        applicationId: t,
        className: n,
        trackAction: d
    } = e, m = i.useRef(null), x = (0, o.A)({
        id: t,
        label: u.intl.string(u.t["FfCL+6"])
    }), g = (0, c.n)(t, d);
    return null == x && null == g ? null : (0, a.jsx)(r.YNO, {
        targetElementRef: m,
        align: "top",
        position: "right",
        disablePointerEvents: !1,
        renderPopout: e => {
            let {
                closePopout: t
            } = e;
            return (0, a.jsx)(r.W1t, {
                "data-menu-migrated-auto": !0,
                navId: "game-profile-context",
                onClose: () => {
                    (0, s.Z_)(), t()
                },
                "aria-label": u.intl.string(u.t.PNeFgW),
                onSelect: () => {},
                children: (0, a.jsxs)(a.Fragment, {
                    children: [(0, a.jsx)(r.rXV, {
                        children: x
                    }), (0, a.jsx)(r.rXV, {
                        children: g
                    })]
                })
            })
        },
        children: e => (0, a.jsx)(l.m, {
            text: u.intl.string(u.t["UKOtz+"]),
            children: (0, a.jsx)(r.DUT, {
                innerRef: m,
                className: n,
                ...e,
                children: (0, a.jsx)(r.jNK, {
                    size: "xs",
                    color: r.LU0.colors.WHITE
                })
            })
        })
    })
}

function x(e) {
    let {
        game: t,
        onClose: n,
        className: m,
        trackAction: x
    } = e, g = i.useRef(null), h = i.useRef(null), f = (0, o.A)({
        id: t.id,
        label: u.intl.string(u.t["FfCL+6"])
    }), _ = (0, c.n)(t.id, x), p = (0, d.A)(t);
    return (0, a.jsxs)("div", {
        className: m,
        children: [null != p && (0, a.jsx)(r.YNO, {
            targetElementRef: h,
            align: "top",
            position: "right",
            disablePointerEvents: !1,
            renderPopout: e => {
                let {
                    closePopout: t
                } = e;
                return (0, a.jsx)(r.W1t, {
                    navId: "game-profile-add-to-profile",
                    onClose: () => {
                        (0, s.Z_)(), t()
                    },
                    "aria-label": u.intl.string(u.t.sidPSo),
                    onSelect: () => {},
                    children: (0, a.jsx)(r.rXV, {
                        children: p
                    })
                })
            },
            children: e => (0, a.jsx)("div", {
                ...e,
                ref: h,
                children: (0, a.jsx)(r.Button, {
                    icon: r.pa$,
                    variant: "overlay-secondary",
                    size: "sm",
                    text: u.intl.string(u.t.sidPSo)
                })
            })
        }), (null != f || null != _) && (0, a.jsx)(r.YNO, {
            targetElementRef: g,
            align: "top",
            position: "right",
            disablePointerEvents: !1,
            renderPopout: e => {
                let {
                    closePopout: t
                } = e;
                return (0, a.jsx)(r.W1t, {
                    navId: "game-profile-context",
                    onClose: () => {
                        (0, s.Z_)(), t()
                    },
                    "aria-label": u.intl.string(u.t.PNeFgW),
                    onSelect: () => {},
                    children: (0, a.jsxs)(a.Fragment, {
                        children: [(0, a.jsx)(r.rXV, {
                            children: _
                        }), (0, a.jsx)(r.rXV, {
                            children: f
                        })]
                    })
                })
            },
            children: e => (0, a.jsx)(l.m, {
                text: u.intl.string(u.t["UKOtz+"]),
                children: (0, a.jsx)("div", {
                    ...e,
                    ref: g,
                    children: (0, a.jsx)(r.K0, {
                        icon: r.jNK,
                        variant: "overlay-secondary",
                        size: "sm",
                        "aria-label": u.intl.string(u.t["UKOtz+"])
                    })
                })
            })
        }), (0, a.jsx)(r.K0, {
            icon: r.PGe,
            variant: "overlay-secondary",
            size: "sm",
            onClick: n,
            "aria-label": u.intl.string(u.t.cpT0Cq)
        })]
    })
}