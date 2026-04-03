/** chunk id: 727353 params = (module,exports,require) **/
i.d(e, {
    P: () => C,
    Z: () => T
});
var n = i(627968);
i(64700);
var l = i(503698),
    r = i.n(l),
    s = i(311907),
    a = i(397927),
    o = i(302959),
    d = i(592182),
    u = i(587895),
    c = i(402216),
    p = i(12351),
    m = i(769015),
    A = i(877315),
    h = i(607407),
    g = i(652215),
    f = i(985018),
    E = i(215820),
    S = i(442078);

function T(t) {
    let {
        stream: e,
        activeStream: i,
        streamActivity: l,
        streamApplication: c,
        user: T,
        currentUserId: C,
        canWatch: v,
        unavailableReason: _,
        onWatchStream: y,
        onAction: I,
        showHeader: N = !1,
        hideTip: x = !1,
        className: j
    } = t, L = (0, s.bG)([u.A], () => {
        if (null != c) {
            if (null != c.id) return u.A.getApplication(c.id);
            else if (null != c.name) return u.A.getApplicationByName(c.name)
        }
        return null
    }, [c]), P = null != l && null != l.name ? f.intl.formatToPlainString(f.t["4CQq9Q"], {
        name: l.name
    }) : f.intl.string(f.t["Jpkr/q"]), O = (0, n.jsxs)(n.Fragment, {
        children: [N && (0, n.jsxs)("div", {
            className: E.WG,
            children: [null != L && (0, n.jsx)(m.A, {
                game: L,
                className: E.lK
            }), (0, n.jsx)(a.Text, {
                variant: "text-xs/bold",
                color: "currentColor",
                children: P
            })]
        }), null != y ? (0, n.jsxs)(a.DUT, {
            onClick: y,
            className: E.i1,
            children: [(0, n.jsx)(h.A, {
                className: E.oz,
                stream: e
            }), v ? (0, n.jsx)("div", {
                className: E.xD,
                children: (0, n.jsx)(a.Text, {
                    variant: "text-sm/normal",
                    color: "none",
                    className: E.ON,
                    children: (0, A.A)(e, i, C, _)
                })
            }) : null]
        }) : (0, n.jsxs)("div", {
            className: E.i1,
            children: [(0, n.jsx)(h.A, {
                className: E.oz,
                stream: e
            }), v ? (0, n.jsx)("div", {
                className: E.xD,
                children: (0, n.jsx)(a.Text, {
                    variant: "text-sm/normal",
                    color: "none",
                    className: E.ON,
                    children: (0, A.A)(e, i, C, _)
                })
            }) : null]
        }), (0, n.jsxs)("div", {
            className: E.rf,
            children: [null != l ? (0, n.jsx)(o.A, {
                hideHeader: !0,
                type: o.M.STREAM_PREVIEW,
                activity: l,
                user: T,
                guildId: e.guildId,
                channelId: e.channelId,
                analyticsParams: {
                    location: {
                        page: g.liQ.GO_LIVE_MODAL,
                        section: g.JJy.STREAM_VIEWER_POPOUT
                    }
                },
                onAction: I
            }) : (0, n.jsx)(d.A, {
                type: o.M.STREAM_PREVIEW,
                applicationStream: e,
                user: T,
                guildId: e.guildId,
                channelId: e.channelId,
                className: E.lx,
                onAction: I
            }), !x && (0, n.jsx)(p.A, {
                type: p.A.Types.INLINE,
                className: E.PP,
                children: __OVERLAY__ ? f.intl.string(f.t.YRdw70) : f.intl.string(f.t.CCTgbF)
            })]
        })]
    });
    return (0, n.jsx)("div", {
        className: E.yt,
        children: (0, n.jsx)("div", {
            className: r()(S.popover, E.Rh, j),
            children: O
        })
    })
}

function C(t) {
    let {
        stream: e,
        streamActivity: i,
        activeStream: l,
        user: s,
        currentUserId: u,
        canWatch: p,
        unavailableReason: m,
        onWatchStream: S,
        onAction: T,
        showHeader: C = !1,
        wrapperClassName: v
    } = t;
    return (0, n.jsxs)("div", {
        className: r()(E.yt, v),
        children: [C && (0, n.jsxs)("div", {
            className: E.mg,
            children: [(0, n.jsx)(a.Text, {
                variant: "text-xs/medium",
                color: "text-muted",
                children: f.intl.string(f.t["HV97U/"])
            }), (0, n.jsx)(c.Ay, {
                size: c.ed.SMALL
            })]
        }), null != S ? (0, n.jsxs)(a.DUT, {
            onClick: S,
            className: E.GE,
            children: [(0, n.jsx)(h.A, {
                className: E.oz,
                stream: e
            }), p ? (0, n.jsx)("div", {
                className: E.xD,
                children: (0, n.jsx)(a.Text, {
                    variant: "text-sm/normal",
                    color: "none",
                    className: E.ON,
                    children: (0, A.A)(e, l, u, m)
                })
            }) : null]
        }) : (0, n.jsxs)("div", {
            className: E.GE,
            children: [(0, n.jsx)(h.A, {
                className: E.oz,
                stream: e
            }), p ? (0, n.jsx)("div", {
                className: E.xD,
                children: (0, n.jsx)(a.Text, {
                    variant: "text-sm/normal",
                    color: "none",
                    className: E.ON,
                    children: (0, A.A)(e, l, u, m)
                })
            }) : null]
        }), (0, n.jsx)("div", {
            className: E.JN,
            children: null != i ? (0, n.jsx)(o.A, {
                hideHeader: !0,
                type: o.M.STREAM_PREVIEW,
                activity: i,
                user: s,
                guildId: e.guildId,
                channelId: e.channelId,
                enableUserHoverActivities: !0,
                analyticsParams: {
                    location: {
                        page: g.liQ.GO_LIVE_MODAL,
                        section: g.JJy.STREAM_VIEWER_POPOUT
                    }
                },
                onAction: T
            }) : (0, n.jsx)(d.A, {
                type: o.M.STREAM_PREVIEW,
                applicationStream: e,
                user: s,
                guildId: e.guildId,
                channelId: e.channelId,
                className: E.lx,
                onAction: T
            })
        })]
    })
}