/** chunk id: 503364 params = (module,exports,require) **/
n.d(t, {
    A: () => m,
    N: () => f
});
var l = n(627968),
    a = n(64700),
    i = n(990078),
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
    } = e, m = a.useRef(null), f = (0, o.A)({
        id: t,
        label: u.intl.string(u.t["FfCL+6"])
    }), h = (0, c.n)(t, d);
    return null == f && null == h ? null : (0, l.jsx)(r.YNO, {
        targetElementRef: m,
        align: "top",
        position: "right",
        disablePointerEvents: !1,
        renderPopout: e => {
            let {
                closePopout: t
            } = e;
            return (0, l.jsx)(r.W1t, {
                "data-menu-migrated-auto": !0,
                navId: "game-profile-context",
                onClose: () => {
                    (0, s.Z_)(), t()
                },
                "aria-label": u.intl.string(u.t.PNeFgW),
                onSelect: () => {},
                children: (0, l.jsxs)(l.Fragment, {
                    children: [(0, l.jsx)(r.rXV, {
                        children: f
                    }), (0, l.jsx)(r.rXV, {
                        children: h
                    })]
                })
            })
        },
        children: e => (0, l.jsx)(i.m, {
            text: u.intl.string(u.t["UKOtz+"]),
            children: (0, l.jsx)(r.DUT, {
                innerRef: m,
                className: n,
                ...e,
                children: (0, l.jsx)(r.jNK, {
                    size: "xs",
                    color: r.LU0.colors.WHITE
                })
            })
        })
    })
}

function f(e) {
    let {
        game: t,
        onClose: n,
        className: m,
        trackAction: f
    } = e, h = a.useRef(null), x = a.useRef(null), g = (0, o.A)({
        id: t.id,
        label: u.intl.string(u.t["FfCL+6"])
    }), p = (0, c.n)(t.id, f), _ = (0, d.A)(t);
    return (0, l.jsxs)("div", {
        className: m,
        children: [null != _ && (0, l.jsx)(r.YNO, {
            targetElementRef: x,
            align: "top",
            position: "right",
            disablePointerEvents: !1,
            renderPopout: e => {
                let {
                    closePopout: t
                } = e;
                return (0, l.jsx)(r.W1t, {
                    navId: "game-profile-add-to-profile",
                    onClose: () => {
                        (0, s.Z_)(), t()
                    },
                    "aria-label": u.intl.string(u.t.sidPSo),
                    onSelect: () => {},
                    children: (0, l.jsx)(r.rXV, {
                        children: _
                    })
                })
            },
            children: e => (0, l.jsx)("div", {
                ...e,
                ref: x,
                children: (0, l.jsx)(r.Button, {
                    icon: r.pa$,
                    variant: "overlay-secondary",
                    size: "sm",
                    text: u.intl.string(u.t.sidPSo)
                })
            })
        }), (null != g || null != p) && (0, l.jsx)(r.YNO, {
            targetElementRef: h,
            align: "top",
            position: "right",
            disablePointerEvents: !1,
            renderPopout: e => {
                let {
                    closePopout: t
                } = e;
                return (0, l.jsx)(r.W1t, {
                    navId: "game-profile-context",
                    onClose: () => {
                        (0, s.Z_)(), t()
                    },
                    "aria-label": u.intl.string(u.t.PNeFgW),
                    onSelect: () => {},
                    children: (0, l.jsxs)(l.Fragment, {
                        children: [(0, l.jsx)(r.rXV, {
                            children: p
                        }), (0, l.jsx)(r.rXV, {
                            children: g
                        })]
                    })
                })
            },
            children: e => (0, l.jsx)(i.m, {
                text: u.intl.string(u.t["UKOtz+"]),
                children: (0, l.jsx)("div", {
                    ...e,
                    ref: h,
                    children: (0, l.jsx)(r.K0, {
                        icon: r.jNK,
                        variant: "overlay-secondary",
                        size: "sm",
                        "aria-label": u.intl.string(u.t["UKOtz+"])
                    })
                })
            })
        }), (0, l.jsx)(r.K0, {
            icon: r.PGe,
            variant: "overlay-secondary",
            size: "sm",
            onClick: n,
            "aria-label": u.intl.string(u.t.cpT0Cq)
        })]
    })
}