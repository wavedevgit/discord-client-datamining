/** chunk id: 447253 params = (module,exports,require) **/
n.d(t, {
    A: () => p
});
var i = n(627968),
    l = n(64700),
    s = n(503698),
    a = n.n(s),
    r = n(311907),
    o = n(397927),
    d = n(263063),
    c = n(71393),
    u = n(65611),
    h = n(985018),
    A = n(273923);

function _(e) {
    let {
        guildId: t,
        animate: n
    } = e, l = (0, r.bG)([c.A], () => c.A.getGuild(t), [t]), s = (0, o.rdh)(o.LU0.modules.guildbar.AVATAR_SIZE);
    return null == l ? (0, i.jsx)("div", {
        className: a()(A.VL, A.zU),
        children: (0, i.jsx)(o.EpV, {
            color: "currentColor"
        })
    }) : (0, i.jsx)(d.Ay, {
        guild: l,
        animate: n,
        size: d.Ay.Sizes.MINI,
        iconSize: s,
        lossless: !0,
        className: A.VL,
        tabIndex: -1
    })
}

function m(e) {
    let {
        folderNode: t,
        hovered: n,
        sorting: l
    } = e, {
        children: s
    } = t, r = n && l, d = (0, i.jsx)("div", {
        className: A.hJ,
        children: (0, i.jsx)("div", {
            className: A.Eh,
            children: (0, i.jsx)(o.sjq, {
                size: "sm",
                color: "currentColor"
            })
        })
    }), c = (0, i.jsx)("div", {
        className: A.qJ,
        children: (0, i.jsx)("div", {
            className: A.jg,
            children: s.slice(0, 4).map(e => (0, i.jsx)(_, {
                guildId: e.id,
                animate: n
            }, e.id))
        })
    });
    return (0, i.jsxs)("div", {
        "aria-hidden": !0,
        className: a()({
            [A.NG]: r,
            [A.yd]: !r
        }),
        children: [!r && d, c]
    })
}

function p(e) {
    let {
        folderNode: t,
        expanded: n,
        sorting: s,
        mediaState: a,
        mentionCount: r = 0,
        isMentionLowImportance: d,
        tooltipName: c,
        folderGroupId: _,
        folderButtonContent: p,
        onClick: g,
        onContextMenu: f,
        onHoverChange: E,
        onKeyDown: x,
        treeItemProps: {
            onFocus: I,
            ...C
        },
        "aria-setsize": N,
        "aria-posinset": T
    } = e, [S, b] = l.useState(!1), y = l.useCallback(() => {
        s || b(!0), E?.(!0)
    }, [s, E]), v = l.useCallback(() => {
        s || b(!1), E?.(!1)
    }, [s, E]), R = n || null == a ? null : (0, u.oi)(a), j = !n && r > 0 ? (0, u.wN)(r, d ? o.LU0.colors.BACKGROUND_MOD_STRONG.css : o.LU0.colors.BACKGROUND_FEEDBACK_NOTIFICATION.css) : null;
    return (0, i.jsx)(o.vN3, {
        children: (0, i.jsxs)(o.DUT, {
            className: A.H3,
            onClick: g,
            onContextMenu: f,
            onMouseEnter: y,
            onMouseLeave: v,
            onKeyDown: x,
            onFocus: I,
            focusProps: {
                enabled: !1
            },
            ...C,
            role: "treeitem",
            "aria-setsize": N,
            "aria-posinset": T,
            "aria-expanded": n,
            "aria-owns": _,
            children: [(0, i.jsx)(o.AC4, {
                children: h.intl.formatToPlainString(h.t["90/DwM"], {
                    folderName: c,
                    mentions: r
                })
            }), (0, i.jsx)(o.Qk9, {
                "aria-hidden": !0,
                isFolder: !0,
                upperBadge: R,
                lowerBadge: j,
                lowerBadgeSize: {
                    width: (0, o.o6S)(r)
                },
                children: (0, i.jsx)("div", {
                    className: A.vA,
                    children: null != p ? (0, i.jsx)("div", {
                        className: A.hJ,
                        children: p
                    }) : (0, i.jsx)(m, {
                        folderNode: t,
                        hovered: S,
                        sorting: s
                    })
                })
            })]
        })
    })
}