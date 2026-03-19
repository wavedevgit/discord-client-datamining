/** chunk id: 827936 params = (module,exports,require) **/
i.d(n, {
    A: () => m
});
var t = i(627968);
i(64700);
var r = i(158954),
    l = i(311907),
    s = i(827734),
    d = i(397927),
    a = i(308528),
    o = i(297413),
    c = i(966327),
    u = i(287809),
    h = i(985018),
    A = i(425573);

function x(e) {
    let {
        color: n,
        className: i
    } = e;
    return (0, t.jsx)("svg", {
        className: i,
        height: "16",
        width: "80",
        viewBox: "0 0 80 16",
        xmlns: "http://www.w3.org/2000/svg",
        children: (0, t.jsxs)("g", {
            fill: "none",
            fillRule: "evenodd",
            opacity: ".6",
            children: [(0, t.jsx)("path", {
                d: "m0 0h80v16h-80z"
            }), (0, t.jsxs)("g", {
                stroke: n,
                strokeLinecap: "round",
                strokeLinejoin: "round",
                strokeWidth: "2",
                children: [(0, t.jsx)("path", {
                    d: "m71 1h4v4.16"
                }), (0, t.jsx)("path", {
                    d: "m2 1h4v4.16",
                    transform: "matrix(-1 0 0 1 8 0)"
                }), (0, t.jsx)("path", {
                    d: "m51 1h4m6 0h4m-24 0h4m-14 0h4m-14 0h4m-23 11v-2m9-9h4"
                }), (0, t.jsx)("path", {
                    d: "m72.13 10.474 2.869 3.12 2.631-3.12"
                })]
            })]
        })
    })
}

function m(e, n) {
    let i = (0, l.bG)([u.default], () => u.default.getCurrentUser());
    return null == i || n.ownerId !== i.id || e.id === i.id ? null : (0, t.jsx)(d.Drp, {
        id: "make-dm-owner",
        color: "danger",
        label: h.intl.string(h.t["6t3CyN"]),
        action: () => {
            (0, d.qfG)(l => (0, t.jsx)(r.ConfirmModal, {
                title: h.intl.string(h.t.WZoUsm),
                confirmText: h.intl.string(h.t["cY+Oob"]),
                cancelText: h.intl.string(h.t["ETE/oC"]),
                onConfirm: () => a.A.setDMOwner(n.id, e.id),
                ...l,
                children: (0, t.jsxs)("div", {
                    className: A.Uh,
                    children: [(0, t.jsx)(x, {
                        color: s.A.unsafe_rawColors.PRIMARY_300.css
                    }), (0, t.jsxs)("div", {
                        className: A.nS,
                        children: [(0, t.jsx)("div", {
                            className: A.HT,
                            children: (0, t.jsx)(c.A, {
                                user: i,
                                size: d._3J.SIZE_80
                            })
                        }), (0, t.jsx)("div", {
                            className: A.to,
                            children: (0, t.jsx)(c.A, {
                                user: e,
                                size: d._3J.SIZE_80
                            })
                        })]
                    }), (0, t.jsx)(d.Text, {
                        variant: "text-md/normal",
                        children: h.intl.format(h.t.gsBb3F, {
                            usernameHook: (n, i) => (0, t.jsx)(o.A, {
                                usernameIcon: (0, t.jsx)(d.euF, {
                                    className: A.jj,
                                    src: e.getAvatarURL(void 0, 16),
                                    size: d._3J.SIZE_16,
                                    "aria-hidden": !0
                                }),
                                className: A.xK,
                                usernameClass: A.Xh,
                                discriminatorClass: A.D2,
                                user: e
                            }, i)
                        })
                    })]
                })
            }))
        }
    })
}