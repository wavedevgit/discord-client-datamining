/** chunk id: 546136 params = (module,exports,require) **/
n.d(l, {
    Ay: () => h,
    _T: () => g,
    oA: () => A
});
var t = n(627968);
n(64700);
var i = n(503698),
    s = n.n(i),
    a = n(397927),
    r = n(487233),
    o = n(230635),
    d = n(473219),
    c = n(642737),
    u = n(985018),
    m = n(475276);
let p = "profile-modal-editing-panel",
    x = "profile-modal-editing-panel-heading";

function A(e) {
    let {
        onClick: l,
        className: n,
        innerRef: i
    } = e;
    return (0, t.jsx)(a.DUT, {
        innerRef: i,
        "aria-label": u.intl.string(u.t.N8XQDE),
        "aria-expanded": !1,
        "aria-controls": p,
        className: s()(m.eg, n),
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

function g(e) {
    let {
        onClick: l,
        className: n,
        buttonRef: i
    } = e;
    return (0, t.jsx)("div", {
        className: n,
        children: (0, t.jsx)(a.K0, {
            buttonRef: i,
            "aria-label": u.intl.string(u.t.N8XQDE),
            "aria-expanded": !1,
            "aria-controls": p,
            icon: a.NDp,
            onClick: l,
            variant: "secondary",
            size: "sm"
        })
    })
}

function f(e) {
    let {
        onClick: l,
        innerRef: n
    } = e;
    return (0, t.jsxs)(a.DUT, {
        innerRef: n,
        className: m.cS,
        "aria-label": u.intl.string(u.t.X6NklS),
        onClick: l,
        "aria-controls": p,
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

function h(e) {
    let {
        selectedGuildId: l,
        onSelectGuildId: n,
        onClose: i,
        className: A,
        collapseButtonRef: g
    } = e;
    return (0, t.jsxs)("aside", {
        id: p,
        "aria-labelledby": x,
        className: s()(m.nd, A),
        children: [(0, t.jsx)(a.AC4, {
            children: (0, t.jsx)(a.H, {
                id: x,
                children: u.intl.string(u.t["L+ch00"])
            })
        }), (0, t.jsxs)("div", {
            className: m.wx,
            children: [(0, t.jsx)(f, {
                innerRef: g,
                onClick: i
            }), (0, t.jsx)(c.A, {
                selectedGuildId: l ?? null,
                onChange: n
            })]
        }), (0, t.jsx)(a.Fmo, {
            children: (0, t.jsxs)(a.HOs, {
                className: m.XG,
                fade: !0,
                children: [(0, t.jsxs)("div", {
                    className: m.Os,
                    children: [(0, t.jsx)(a.Heading, {
                        variant: "text-sm/medium",
                        className: m.AM,
                        children: u.intl.string(u.t.x5CoXR)
                    }), (0, t.jsx)(d.W, {
                        guildId: l
                    })]
                }), (0, t.jsxs)("div", {
                    className: m.Os,
                    children: [(0, t.jsx)(a.Heading, {
                        variant: "text-sm/medium",
                        className: m.AM,
                        children: u.intl.string(u.t.lqaIxI)
                    }), (0, t.jsx)(r.m, {
                        guildId: l
                    }), (0, t.jsx)(o.W, {
                        guildId: l
                    })]
                })]
            })
        })]
    })
}