/** chunk id: 546136 params = (module,exports,require) **/
l.d(n, {
    Ay: () => y,
    _T: () => I,
    oA: () => j
});
var t = l(627968);
l(64700);
var i = l(503698),
    s = l.n(i),
    a = l(397927),
    r = l(927578),
    o = l(487233),
    d = l(230635),
    c = l(336289),
    u = l(473219),
    m = l(542454),
    p = l(338003),
    A = l(642737),
    x = l(23722),
    g = l(985018),
    f = l(266603);
let h = "profile-modal-editing-panel",
    v = "profile-modal-editing-panel-heading";

function j(e) {
    let {
        onClick: n,
        className: l,
        innerRef: i
    } = e;
    return (0, t.jsx)(a.DUT, {
        innerRef: i,
        "aria-label": g.intl.string(g.t.N8XQDE),
        "aria-expanded": !1,
        "aria-controls": h,
        className: s()(f.eg, l),
        onClick: n,
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

function I(e) {
    let {
        onClick: n,
        className: l,
        buttonRef: i
    } = e;
    return (0, t.jsx)("div", {
        className: l,
        children: (0, t.jsx)(a.K0, {
            buttonRef: i,
            "aria-label": g.intl.string(g.t.N8XQDE),
            "aria-expanded": !1,
            "aria-controls": h,
            icon: a.NDp,
            onClick: n,
            variant: "secondary",
            size: "sm"
        })
    })
}

function N(e) {
    let {
        onClick: n,
        innerRef: l
    } = e;
    return (0, t.jsxs)(a.DUT, {
        innerRef: l,
        className: f.cS,
        "aria-label": g.intl.string(g.t.X6NklS),
        onClick: n,
        "aria-controls": h,
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

function y(e) {
    let {
        user: n,
        selectedGuildId: l,
        onSelectGuildId: i,
        isLoading: j = !1,
        onClose: I,
        className: y,
        collapseButtonRef: C
    } = e, b = (0, x.A)(i), E = null != l, T = r.Ay.canUsePremiumProfileCustomization(n);
    return (0, t.jsxs)("aside", {
        id: h,
        "aria-labelledby": v,
        className: s()(f.nd, y),
        "aria-busy": j,
        children: [(0, t.jsx)(a.AC4, {
            children: (0, t.jsx)(a.H, {
                id: v,
                children: g.intl.string(g.t["L+ch00"])
            })
        }), (0, t.jsxs)("div", {
            className: f.wx,
            children: [(0, t.jsx)(N, {
                innerRef: C,
                onClick: I
            }), (0, t.jsx)(A.A, {
                selectedGuildId: l ?? null,
                onChange: b,
                loading: j
            })]
        }), (0, t.jsx)(a.Fmo, {
            children: (0, t.jsxs)(a.HOs, {
                className: f.XG,
                fade: !0,
                children: [(0, t.jsxs)("div", {
                    className: f.Os,
                    children: [(0, t.jsx)(a.Heading, {
                        variant: "text-sm/medium",
                        className: f.AM,
                        children: g.intl.string(g.t.x5CoXR)
                    }), (0, t.jsx)(u.A, {
                        user: n,
                        guildId: l,
                        disabled: j || E && !T
                    })]
                }), (0, t.jsxs)("div", {
                    className: f.Os,
                    children: [(0, t.jsx)(a.Heading, {
                        variant: "text-sm/medium",
                        className: f.AM,
                        children: g.intl.string(g.t["50Nwpc"])
                    }), (0, t.jsx)(o.A, {
                        user: n,
                        guildId: l,
                        disabled: j || E && !T
                    }), (0, t.jsx)(d.A, {
                        user: n,
                        guildId: l,
                        disabled: j || E && !T
                    })]
                }), T && (0, t.jsxs)("div", {
                    className: f.Os,
                    children: [(0, t.jsx)(a.Heading, {
                        variant: "text-sm/medium",
                        className: f.AM,
                        children: g.intl.string(g.t.Zenogr)
                    }), (0, t.jsx)(m.A, {
                        user: n,
                        guildId: l,
                        disabled: j
                    }), (0, t.jsx)(c.A, {
                        userId: n.id,
                        guildId: l,
                        disabled: j
                    })]
                })]
            })
        }), !T && (0, t.jsx)(p.O, {})]
    })
}