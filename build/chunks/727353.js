/** chunk id: 727353 params = (module,exports,require) **/
i.d(e, {
    P: () => S,
    Z: () => C
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
    m = i(12351),
    p = i(769015),
    A = i(877315),
    h = i(607407),
    g = i(652215),
    f = i(985018),
    T = i(455943),
    v = i(513679);

function C(t) {
    let {
        stream: e,
        activeStream: i,
        streamActivity: l,
        streamApplication: c,
        user: C,
        currentUserId: S,
        canWatch: E,
        unavailableReason: x,
        onWatchStream: y,
        onAction: _,
        showHeader: N = !1,
        hideTip: I = !1,
        className: j
    } = t, D = (0, s.bG)([u.A], () => {
        if (null != c) {
            if (null != c.id) return u.A.getApplication(c.id);
            else if (null != c.name) return u.A.getApplicationByName(c.name)
        }
        return null
    }, [c]), P = null != l && null != l.name ? f.intl.formatToPlainString(f.t["4CQq9Q"], {
        name: l.name
    }) : f.intl.string(f.t["Jpkr/q"]), U = (0, n.jsxs)(n.Fragment, {
        children: [N && (0, n.jsxs)("div", {
            className: T.WG,
            children: [null != D && (0, n.jsx)(p.A, {
                game: D,
                className: T.lK
            }), (0, n.jsx)(a.Text, {
                variant: "text-xs/bold",
                color: "currentColor",
                children: P
            })]
        }), null != y ? (0, n.jsxs)(a.DUT, {
            onClick: y,
            className: T.i1,
            children: [(0, n.jsx)(h.A, {
                className: T.oz,
                stream: e
            }), E ? (0, n.jsx)("div", {
                className: T.xD,
                children: (0, n.jsx)(a.Text, {
                    variant: "text-sm/normal",
                    color: "none",
                    className: T.ON,
                    children: (0, A.A)(e, i, S, x)
                })
            }) : null]
        }) : (0, n.jsxs)("div", {
            className: T.i1,
            children: [(0, n.jsx)(h.A, {
                className: T.oz,
                stream: e
            }), E ? (0, n.jsx)("div", {
                className: T.xD,
                children: (0, n.jsx)(a.Text, {
                    variant: "text-sm/normal",
                    color: "none",
                    className: T.ON,
                    children: (0, A.A)(e, i, S, x)
                })
            }) : null]
        }), (0, n.jsxs)("div", {
            className: T.rf,
            children: [null != l ? (0, n.jsx)(o.A, {
                hideHeader: !0,
                type: o.M.STREAM_PREVIEW,
                activity: l,
                user: C,
                guildId: e.guildId,
                channelId: e.channelId,
                analyticsParams: {
                    location: {
                        page: g.liQ.GO_LIVE_MODAL,
                        section: g.JJy.STREAM_VIEWER_POPOUT
                    }
                },
                onAction: _
            }) : (0, n.jsx)(d.A, {
                type: o.M.STREAM_PREVIEW,
                applicationStream: e,
                user: C,
                guildId: e.guildId,
                channelId: e.channelId,
                className: T.lx,
                onAction: _
            }), !I && (0, n.jsx)(m.A, {
                type: m.A.Types.INLINE,
                className: T.PP,
                children: __OVERLAY__ ? f.intl.string(f.t.YRdw70) : f.intl.string(f.t.CCTgbF)
            })]
        })]
    });
    return (0, n.jsx)("div", {
        className: T.yt,
        children: (0, n.jsx)("div", {
            className: r()(v.popover, T.Rh, j),
            children: U
        })
    })
}

function S(t) {
    let {
        stream: e,
        streamActivity: i,
        activeStream: l,
        user: s,
        currentUserId: u,
        canWatch: m,
        unavailableReason: p,
        onWatchStream: v,
        onAction: C,
        showHeader: S = !1,
        wrapperClassName: E
    } = t;
    return (0, n.jsxs)("div", {
        className: r()(T.yt, E),
        children: [S && (0, n.jsxs)("div", {
            className: T.mg,
            children: [(0, n.jsx)(a.Text, {
                variant: "text-xs/medium",
                color: "text-muted",
                children: f.intl.string(f.t["HV97U/"])
            }), (0, n.jsx)(c.Ay, {
                size: c.ed.SMALL
            })]
        }), null != v ? (0, n.jsxs)(a.DUT, {
            onClick: v,
            className: T.GE,
            children: [(0, n.jsx)(h.A, {
                className: T.oz,
                stream: e
            }), m ? (0, n.jsx)("div", {
                className: T.xD,
                children: (0, n.jsx)(a.Text, {
                    variant: "text-sm/normal",
                    color: "none",
                    className: T.ON,
                    children: (0, A.A)(e, l, u, p)
                })
            }) : null]
        }) : (0, n.jsxs)("div", {
            className: T.GE,
            children: [(0, n.jsx)(h.A, {
                className: T.oz,
                stream: e
            }), m ? (0, n.jsx)("div", {
                className: T.xD,
                children: (0, n.jsx)(a.Text, {
                    variant: "text-sm/normal",
                    color: "none",
                    className: T.ON,
                    children: (0, A.A)(e, l, u, p)
                })
            }) : null]
        }), (0, n.jsx)("div", {
            className: T.JN,
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
                onAction: C
            }) : (0, n.jsx)(d.A, {
                type: o.M.STREAM_PREVIEW,
                applicationStream: e,
                user: s,
                guildId: e.guildId,
                channelId: e.channelId,
                className: T.lx,
                onAction: C
            })
        })]
    })
}