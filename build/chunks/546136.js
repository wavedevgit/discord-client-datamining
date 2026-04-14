/** chunk id: 546136 params = (module,exports,require) **/
n.d(l, {
    Ay: () => N,
    _T: () => v,
    oA: () => j
});
var t = n(627968);
n(64700);
var i = n(503698),
    s = n.n(i),
    a = n(397927),
    r = n(927578),
    o = n(487233),
    d = n(230635),
    c = n(473219),
    u = n(542454),
    m = n(338003),
    p = n(642737),
    x = n(23722),
    A = n(985018),
    g = n(266603);
let f = "profile-modal-editing-panel",
    h = "profile-modal-editing-panel-heading";

function j(e) {
    let {
        onClick: l,
        className: n,
        innerRef: i
    } = e;
    return (0, t.jsx)(a.DUT, {
        innerRef: i,
        "aria-label": A.intl.string(A.t.N8XQDE),
        "aria-expanded": !1,
        "aria-controls": f,
        className: s()(g.eg, n),
        onClick: l,
        focusProps: {
            offset: {
                right: 6
            }
        },
        children: (0, t.jsx)(a.NDp, {
            size: "sm",
            color: a.LU0.colors.ICON_STRONG
        })
    })
}

function v(e) {
    let {
        onClick: l,
        className: n,
        buttonRef: i
    } = e;
    return (0, t.jsx)("div", {
        className: n,
        children: (0, t.jsx)(a.K0, {
            buttonRef: i,
            "aria-label": A.intl.string(A.t.N8XQDE),
            "aria-expanded": !1,
            "aria-controls": f,
            icon: a.NDp,
            onClick: l,
            variant: "secondary",
            size: "sm"
        })
    })
}

function I(e) {
    let {
        onClick: l,
        innerRef: n
    } = e;
    return (0, t.jsxs)(a.DUT, {
        innerRef: n,
        className: g.cS,
        "aria-label": A.intl.string(A.t.X6NklS),
        onClick: l,
        "aria-controls": f,
        "aria-expanded": !0,
        children: [(0, t.jsx)(a._BQ, {
            size: "md",
            color: "currentColor"
        }), (0, t.jsx)(a._BQ, {
            size: "md",
            color: "currentColor"
        })]
    })
}

function N(e) {
    let {
        user: l,
        selectedGuildId: n,
        onSelectGuildId: i,
        isLoading: j = !1,
        onClose: v,
        className: N,
        collapseButtonRef: y
    } = e, C = (0, x.A)(i), E = null != n, T = r.Ay.canUsePremiumProfileCustomization(l);
    return (0, t.jsxs)("aside", {
        id: f,
        "aria-labelledby": h,
        className: s()(g.nd, N),
        "aria-busy": j,
        children: [(0, t.jsx)(a.AC4, {
            children: (0, t.jsx)(a.H, {
                id: h,
                children: A.intl.string(A.t["L+ch00"])
            })
        }), (0, t.jsxs)("div", {
            className: g.wx,
            children: [(0, t.jsx)(I, {
                innerRef: y,
                onClick: v
            }), (0, t.jsx)(p.A, {
                selectedGuildId: n ?? null,
                onChange: C,
                loading: j
            })]
        }), (0, t.jsx)(a.Fmo, {
            children: (0, t.jsxs)(a.HOs, {
                className: g.XG,
                fade: !0,
                children: [(0, t.jsxs)("div", {
                    className: g.Os,
                    children: [(0, t.jsx)(a.Heading, {
                        variant: "text-sm/medium",
                        className: g.AM,
                        children: A.intl.string(A.t.x5CoXR)
                    }), (0, t.jsx)(c.A, {
                        user: l,
                        guildId: n,
                        disabled: j || E && !T
                    })]
                }), (0, t.jsxs)("div", {
                    className: g.Os,
                    children: [(0, t.jsx)(a.Heading, {
                        variant: "text-sm/medium",
                        className: g.AM,
                        children: A.intl.string(A.t["50Nwpc"])
                    }), (0, t.jsx)(o.A, {
                        user: l,
                        guildId: n,
                        disabled: j || E && !T
                    }), (0, t.jsx)(d.A, {
                        user: l,
                        guildId: n,
                        disabled: j || E && !T
                    })]
                }), T && (0, t.jsxs)("div", {
                    className: g.Os,
                    children: [(0, t.jsx)(a.Heading, {
                        variant: "text-sm/medium",
                        className: g.AM,
                        children: A.intl.string(A.t.Zenogr)
                    }), (0, t.jsx)(u.A, {
                        user: l,
                        guildId: n,
                        disabled: j
                    })]
                })]
            })
        }), !T && (0, t.jsx)(m.O, {})]
    })
}