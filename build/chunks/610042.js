/** chunk id: 610042 params = (module,exports,require) **/
s.d(t, {
    y: () => k
});
var n = s(627968),
    a = s(64700),
    r = s(503698),
    l = s.n(r),
    i = s(934551),
    o = s(990078),
    c = s(421380),
    d = s(397927),
    u = s(477947),
    _ = s(81461),
    m = s(342490),
    x = s(743981),
    g = s(814364),
    b = s(985018),
    f = s(157442),
    h = s(288650);

function p(e) {
    let {
        badge: t,
        isSelected: s,
        onClick: a
    } = e, r = (0, c.Gx)({
        isSelected: s,
        label: (0, u.A)(t.kind)
    });
    return (0, n.jsx)(j, {
        badge: t,
        selected: s,
        onClick: a,
        radioProps: r
    })
}

function j(e) {
    let {
        badge: t,
        locked: s = !1,
        preview: a = !1,
        selected: r = !1,
        onClick: c,
        radioProps: u
    } = e, m = l()(h.Uh, {
        [h.fT]: r,
        [f.av]: s,
        [f.WZ]: a
    }), p = (0, n.jsxs)(n.Fragment, {
        children: [(0, n.jsx)(_.J, {
            badge: t.kind,
            width: x.Sl.SIZE_32,
            height: x.Sl.SIZE_32,
            className: f.n2
        }), s && !a && (0, n.jsx)("div", {
            className: f.py,
            children: (0, n.jsx)(i.LockIcon, {
                size: "md"
            })
        })]
    });
    if (a) return (0, n.jsx)("div", {
        className: m,
        children: p
    });
    if (s && null != t.packName && "" !== t.packName) {
        let e = b.intl.formatToPlainString(g.default.ECl8SQ, {
            packName: t.packName
        });
        return (0, n.jsx)(o.m, {
            delay: 100,
            text: e,
            "aria-label": e,
            children: (0, n.jsx)(d.DUT, {
                className: m,
                onClick: () => {
                    c?.()
                },
                children: p
            })
        })
    }
    return (0, n.jsx)(d.DUT, {
        ...u,
        className: m,
        onClick: c,
        children: p
    })
}

function k(e) {
    let {
        badgeCollection: t,
        handleBoostUpsellClick: s,
        selectedBadge: r,
        onBadgeClicked: o,
        headingId: u
    } = e, [_, x] = a.useState(!1), k = a.useId(), C = (0, c._u)({
        orientation: "horizontal",
        isDisabled: !1,
        labelledBy: u
    }), v = !_ && t.lockedBadges.length > 0;
    return (0, n.jsxs)("div", {
        className: f.zr,
        children: [(0, n.jsx)(d.AC4, {
            id: k,
            children: b.intl.string(b.t["5AQGuZ"])
        }), (0, n.jsx)("div", {
            ...C,
            "aria-describedby": k,
            className: h.p3,
            children: t.unlockedBadges.map(e => (0, n.jsx)(p, {
                badge: e,
                isSelected: e.kind === r,
                onClick: () => o(e.kind)
            }, e.kind))
        }), _ && (0, n.jsx)("ul", {
            className: l()(h.p3, f.wA),
            children: t.lockedBadges.map(e => (0, n.jsx)("li", {
                children: (0, n.jsx)(j, {
                    locked: !0,
                    badge: e,
                    onClick: () => s?.()
                })
            }, e.kind))
        }), v && (0, n.jsxs)("div", {
            className: f.WC,
            children: [(0, n.jsx)("div", {
                className: h.p3,
                children: t.lockedBadges.slice(0, 5).map(e => (0, n.jsx)(j, {
                    locked: !0,
                    preview: !0,
                    badge: e
                }, e.kind))
            }), (0, n.jsxs)(d.DUT, {
                className: l()(f.ZN, f.n7),
                onClick: () => x(!0),
                children: [(0, n.jsx)(d.Text, {
                    variant: "text-sm/semibold",
                    color: "text-subtle",
                    children: b.intl.string(g.default["2tkPDy"])
                }), (0, n.jsx)(i.ChevronSmallDownIcon, {
                    size: "sm"
                })]
            })]
        }), _ && (0, n.jsxs)(n.Fragment, {
            children: [null != s && (0, n.jsxs)("div", {
                className: f.B7,
                children: [(0, n.jsx)(d.Text, {
                    variant: "text-sm/normal",
                    color: "text-default",
                    className: f.XY,
                    children: b.intl.string(g.default.G3qiHu)
                }), (0, n.jsx)("div", {
                    className: f.WM,
                    children: (0, n.jsx)(m.u, {
                        onClick: s,
                        size: "sm"
                    })
                })]
            }), (0, n.jsxs)(d.DUT, {
                className: f.eO,
                onClick: () => x(!1),
                children: [(0, n.jsx)(d.Text, {
                    variant: "text-sm/semibold",
                    color: "text-subtle",
                    children: b.intl.string(g.default.idxnf7)
                }), (0, n.jsx)(i.ChevronSmallUpIcon, {
                    size: "sm"
                })]
            })]
        })]
    })
}