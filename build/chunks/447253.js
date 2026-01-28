/** Chunk was on 78528 **/
/** chunk id: 447253, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => m
}), n(896048);
var r = n(627968),
    l = n(64700),
    i = n(503698),
    s = n.n(i),
    a = n(311907),
    o = n(397927),
    c = n(263063),
    u = n(71393),
    d = n(65611),
    p = n(985018),
    h = n(211170);

function f(e) {
    let {
        guildId: t,
        animate: n
    } = e, l = (0, a.bG)([u.A], () => u.A.getGuild(t), [t]), i = (0, o.rdh)(o.LU0.modules.guildbar.AVATAR_SIZE);
    return null == l ? (0, r.jsx)("div", {
        className: s()(h.VL, h.zU),
        children: (0, r.jsx)(o.EpV, {
            color: "currentColor"
        })
    }) : (0, r.jsx)(c.A, {
        guild: l,
        animate: n,
        size: c.A.Sizes.MINI,
        iconSize: i,
        lossless: !0,
        className: h.VL,
        tabIndex: -1
    })
}

function g(e) {
    let {
        folderNode: t,
        hovered: n,
        sorting: l
    } = e, {
        children: i
    } = t, a = n && l, c = (0, r.jsx)("div", {
        className: h.hJ,
        children: (0, r.jsx)("div", {
            className: h.Eh,
            children: (0, r.jsx)(o.sjq, {
                size: "sm",
                color: "currentColor"
            })
        })
    }), u = (0, r.jsx)("div", {
        className: h.qJ,
        children: (0, r.jsx)("div", {
            className: h.jg,
            children: i.slice(0, 4).map(e => (0, r.jsx)(f, {
                guildId: e.id,
                animate: n
            }, e.id))
        })
    });
    return (0, r.jsxs)("div", {
        "aria-hidden": !0,
        className: s()({
            [h.NG]: a,
            [h.yd]: !a
        }),
        children: [!a && c, u]
    })
}

function m(e) {
    var t, n;
    let {
        folderNode: i,
        expanded: s,
        sorting: a,
        mediaState: c,
        mentionCount: u = 0,
        isMentionLowImportance: f,
        tooltipName: m,
        folderGroupId: b,
        folderButtonContent: A,
        onClick: y,
        onContextMenu: _,
        onHoverChange: O,
        onKeyDown: j,
        treeItemProps: v
    } = e, {
        onFocus: x
    } = v, E = function(e, t) {
        if (null == e) return {};
        var n, r, l, i = {};
        if ("u" > typeof Reflect && Reflect.ownKeys) {
            for (l = 0, n = Reflect.ownKeys(e); l < n.length; l++) r = n[l], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (i[r] = e[r]);
            return i
        }
        if (i = function(e, t) {
                if (null == e) return {};
                var n, r, l = {},
                    i = Object.getOwnPropertyNames(e);
                for (r = 0; r < i.length; r++) n = i[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (l[n] = e[n]);
                return l
            }(e, t), Object.getOwnPropertySymbols)
            for (l = 0, n = Object.getOwnPropertySymbols(e); l < n.length; l++) r = n[l], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (i[r] = e[r]);
        return i
    }(v, ["onFocus"]), {
        "aria-setsize": C,
        "aria-posinset": S
    } = e, [I, N] = l.useState(!1), T = l.useCallback(() => {
        a || N(!0), null == O || O(!0)
    }, [a, O]), P = l.useCallback(() => {
        a || N(!1), null == O || O(!1)
    }, [a, O]), w = s || null == c ? null : (0, d.oi)(c), R = !s && u > 0 ? (0, d.wN)(u, f ? o.LU0.colors.BACKGROUND_MOD_STRONG.css : o.LU0.colors.BACKGROUND_FEEDBACK_NOTIFICATION.css) : null;
    return (0, r.jsx)(o.vN3, {
        children: (0, r.jsxs)(o.DUT, (t = function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {},
                    r = Object.keys(n);
                "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable
                }))), r.forEach(function(t) {
                    var r;
                    r = n[t], t in e ? Object.defineProperty(e, t, {
                        value: r,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }) : e[t] = r
                })
            }
            return e
        }({
            className: h.H3,
            onClick: y,
            onContextMenu: _,
            onMouseEnter: T,
            onMouseLeave: P,
            onKeyDown: j,
            onFocus: x,
            focusProps: {
                enabled: !1
            }
        }, E), n = n = {
            role: "treeitem",
            "aria-setsize": C,
            "aria-posinset": S,
            "aria-expanded": s,
            "aria-owns": b,
            children: [(0, r.jsx)(o.AC4, {
                children: p.intl.formatToPlainString(p.t["90/DwM"], {
                    folderName: m,
                    mentions: u
                })
            }), (0, r.jsx)(o.Qk9, {
                "aria-hidden": !0,
                isFolder: !0,
                upperBadge: w,
                lowerBadge: R,
                lowerBadgeSize: {
                    width: (0, o.o6S)(u)
                },
                children: (0, r.jsx)("div", {
                    className: h.vA,
                    children: null != A ? (0, r.jsx)("div", {
                        className: h.hJ,
                        children: A
                    }) : (0, r.jsx)(g, {
                        folderNode: i,
                        hovered: I,
                        sorting: a
                    })
                })
            })]
        }, Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : (function(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                n.push.apply(n, r)
            }
            return n
        })(Object(n)).forEach(function(e) {
            Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
        }), t))
    })
}