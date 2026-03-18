/** chunk id: 503364 params = (module,exports,require) **/
n.d(t, {
    A: () => u,
    N: () => m
});
var l = n(627968),
    a = n(64700),
    i = n(990078),
    r = n(397927),
    s = n(442433),
    c = n(50268),
    o = n(67518),
    d = n(985018);

function u(e) {
    let {
        applicationId: t,
        className: n
    } = e, u = a.useRef(null), m = (0, c.A)({
        id: t,
        label: d.intl.string(d.t["FfCL+6"])
    }), x = (0, o.n)(t);
    return null == m && null == x ? null : (0, l.jsx)(r.YNO, {
        targetElementRef: u,
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
                "aria-label": d.intl.string(d.t.PNeFgW),
                onSelect: () => {},
                children: (0, l.jsxs)(l.Fragment, {
                    children: [(0, l.jsx)(r.rXV, {
                        children: m
                    }), (0, l.jsx)(r.rXV, {
                        children: x
                    })]
                })
            })
        },
        children: e => (0, l.jsx)(i.m, {
            text: d.intl.string(d.t["UKOtz+"]),
            children: (0, l.jsx)(r.DUT, {
                innerRef: u,
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

function m(e) {
    let {
        applicationId: t,
        onClose: n,
        className: u
    } = e, m = a.useRef(null), x = (0, c.A)({
        id: t,
        label: d.intl.string(d.t["FfCL+6"])
    }), h = (0, o.n)(t);
    return (0, l.jsxs)("div", {
        className: u,
        children: [(null != x || null != h) && (0, l.jsx)(r.YNO, {
            targetElementRef: m,
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
                    "aria-label": d.intl.string(d.t.PNeFgW),
                    onSelect: () => {},
                    children: (0, l.jsxs)(l.Fragment, {
                        children: [(0, l.jsx)(r.rXV, {
                            children: h
                        }), (0, l.jsx)(r.rXV, {
                            children: x
                        })]
                    })
                })
            },
            children: e => (0, l.jsx)(i.m, {
                text: d.intl.string(d.t["UKOtz+"]),
                children: (0, l.jsx)("div", {
                    ...e,
                    ref: m,
                    children: (0, l.jsx)(r.K0, {
                        icon: r.jNK,
                        variant: "overlay-secondary",
                        color: "currentColor",
                        "aria-label": d.intl.string(d.t["UKOtz+"])
                    })
                })
            })
        }), (0, l.jsx)(r.K0, {
            icon: r.d$L,
            variant: "overlay-secondary",
            color: "currentColor",
            onClick: n,
            "aria-label": d.intl.string(d.t.cpT0Cq)
        })]
    })
}