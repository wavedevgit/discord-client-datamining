/** chunk id: 727353 params = (module,exports,require) **/
i.d(e, {
    P: () => C,
    Z: () => E
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
    h = i(877315),
    A = i(607407),
    g = i(652215),
    T = i(985018),
    f = i(573073),
    S = i(248789);

function E(t) {
    let {
        stream: e,
        activeStream: i,
        streamActivity: l,
        streamApplication: c,
        user: E,
        currentUserId: C,
        canWatch: v,
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
    }, [c]), O = null != l && null != l.name ? T.intl.formatToPlainString(T.t["4CQq9Q"], {
        name: l.name
    }) : T.intl.string(T.t["Jpkr/q"]), P = (0, n.jsxs)(n.Fragment, {
        children: [N && (0, n.jsxs)("div", {
            className: f.WG,
            children: [null != D && (0, n.jsx)(m.A, {
                game: D,
                className: f.lK
            }), (0, n.jsx)(a.Text, {
                variant: "text-xs/bold",
                color: "currentColor",
                children: O
            })]
        }), null != y ? (0, n.jsxs)(a.DUT, {
            onClick: y,
            className: f.i1,
            children: [(0, n.jsx)(A.A, {
                className: f.oz,
                stream: e
            }), v ? (0, n.jsx)("div", {
                className: f.xD,
                children: (0, n.jsx)(a.Text, {
                    variant: "text-sm/normal",
                    color: "none",
                    className: f.ON,
                    children: (0, h.A)(e, i, C, x)
                })
            }) : null]
        }) : (0, n.jsxs)("div", {
            className: f.i1,
            children: [(0, n.jsx)(A.A, {
                className: f.oz,
                stream: e
            }), v ? (0, n.jsx)("div", {
                className: f.xD,
                children: (0, n.jsx)(a.Text, {
                    variant: "text-sm/normal",
                    color: "none",
                    className: f.ON,
                    children: (0, h.A)(e, i, C, x)
                })
            }) : null]
        }), (0, n.jsxs)("div", {
            className: f.rf,
            children: [null != l ? (0, n.jsx)(o.A, {
                hideHeader: !0,
                type: o.M.STREAM_PREVIEW,
                activity: l,
                user: E,
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
                user: E,
                guildId: e.guildId,
                channelId: e.channelId,
                className: f.lx,
                onAction: _
            }), !I && (0, n.jsx)(p.A, {
                type: p.A.Types.INLINE,
                className: f.PP,
                children: __OVERLAY__ ? T.intl.string(T.t.YRdw70) : T.intl.string(T.t.CCTgbF)
            })]
        })]
    });
    return (0, n.jsx)("div", {
        className: f.yt,
        children: (0, n.jsx)("div", {
            className: r()(S.popover, f.Rh, j),
            children: P
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
        onAction: E,
        showHeader: C = !1,
        wrapperClassName: v
    } = t;
    return (0, n.jsxs)("div", {
        className: r()(f.yt, v),
        children: [C && (0, n.jsxs)("div", {
            className: f.mg,
            children: [(0, n.jsx)(a.Text, {
                variant: "text-xs/medium",
                color: "text-muted",
                children: T.intl.string(T.t["HV97U/"])
            }), (0, n.jsx)(c.Ay, {
                size: c.ed.SMALL
            })]
        }), null != S ? (0, n.jsxs)(a.DUT, {
            onClick: S,
            className: f.GE,
            children: [(0, n.jsx)(A.A, {
                className: f.oz,
                stream: e
            }), p ? (0, n.jsx)("div", {
                className: f.xD,
                children: (0, n.jsx)(a.Text, {
                    variant: "text-sm/normal",
                    color: "none",
                    className: f.ON,
                    children: (0, h.A)(e, l, u, m)
                })
            }) : null]
        }) : (0, n.jsxs)("div", {
            className: f.GE,
            children: [(0, n.jsx)(A.A, {
                className: f.oz,
                stream: e
            }), p ? (0, n.jsx)("div", {
                className: f.xD,
                children: (0, n.jsx)(a.Text, {
                    variant: "text-sm/normal",
                    color: "none",
                    className: f.ON,
                    children: (0, h.A)(e, l, u, m)
                })
            }) : null]
        }), (0, n.jsx)("div", {
            className: f.JN,
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
                onAction: E
            }) : (0, n.jsx)(d.A, {
                type: o.M.STREAM_PREVIEW,
                applicationStream: e,
                user: s,
                guildId: e.guildId,
                channelId: e.channelId,
                className: f.lx,
                onAction: E
            })
        })]
    })
}