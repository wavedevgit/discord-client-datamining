/** chunk id: 546136 params = (module,exports,require) **/
i.d(l, {
    Ay: () => h,
    _T: () => g,
    oA: () => p
});
var t = i(627968);
i(64700);
var n = i(503698),
    s = i.n(n),
    a = i(397927),
    r = i(487233),
    o = i(230635),
    d = i(473219),
    c = i(642737),
    u = i(985018),
    m = i(266603);
let x = "profile-modal-editing-panel",
    A = "profile-modal-editing-panel-heading";

function p(e) {
    let {
        onClick: l,
        className: i
    } = e;
    return (0, t.jsx)(a.DUT, {
        "aria-label": u.intl.string(u.t.N8XQDE),
        "aria-expanded": !1,
        "aria-controls": x,
        className: s()(m.eg, i),
        onClick: l,
        children: (0, t.jsx)(a.NDp, {
            size: "sm",
            color: a.LU0.colors.ICON_STRONG
        })
    })
}

function g(e) {
    let {
        onClick: l,
        className: i
    } = e;
    return (0, t.jsx)("div", {
        className: i,
        children: (0, t.jsx)(a.K0, {
            "aria-label": u.intl.string(u.t.N8XQDE),
            "aria-expanded": !1,
            "aria-controls": x,
            icon: a.NDp,
            onClick: l,
            variant: "secondary",
            size: "sm"
        })
    })
}

function f(e) {
    let {
        onClick: l
    } = e;
    return (0, t.jsxs)(a.DUT, {
        className: m.cS,
        "aria-label": u.intl.string(u.t.X6NklS),
        onClick: l,
        "aria-controls": x,
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
        onSelectGuildId: i,
        onClose: n,
        className: p
    } = e;
    return (0, t.jsxs)("aside", {
        id: x,
        "aria-labelledby": A,
        className: s()(m.nd, p),
        children: [(0, t.jsx)(a.AC4, {
            children: (0, t.jsx)(a.H, {
                id: A,
                children: u.intl.string(u.t["L+ch00"])
            })
        }), (0, t.jsxs)("div", {
            className: m.wx,
            children: [(0, t.jsx)(c.A, {
                selectedGuildId: l ?? null,
                onChange: i
            }), (0, t.jsx)(f, {
                onClick: n
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