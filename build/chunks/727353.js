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
    m = i(12351),
    A = i(769015),
    p = i(877315),
    h = i(607407),
    g = i(652215),
    f = i(985018),
    T = i(573073),
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
        unavailableReason: _,
        onWatchStream: x,
        onAction: y,
        showHeader: N = !1,
        hideTip: I = !1,
        className: j
    } = t, D = (0, s.bG)([u.A], () => {
        if (null != c) {
            if (null != c.id) return u.A.getApplication(c.id);
            else if (null != c.name) return u.A.getApplicationByName(c.name)
        }
        return null
    }, [c]), O = null != l && null != l.name ? f.intl.formatToPlainString(f.t["4CQq9Q"], {
        name: l.name
    }) : f.intl.string(f.t["Jpkr/q"]), P = (0, n.jsxs)(n.Fragment, {
        children: [N && (0, n.jsxs)("div", {
            className: T.WG,
            children: [null != D && (0, n.jsx)(A.A, {
                game: D,
                className: T.lK
            }), (0, n.jsx)(a.Text, {
                variant: "text-xs/bold",
                color: "currentColor",
                children: O
            })]
        }), null != x ? (0, n.jsxs)(a.DUT, {
            onClick: x,
            className: T.i1,
            children: [(0, n.jsx)(h.A, {
                className: T.oz,
                stream: e
            }), v ? (0, n.jsx)("div", {
                className: T.xD,
                children: (0, n.jsx)(a.Text, {
                    variant: "text-sm/normal",
                    color: "none",
                    className: T.ON,
                    children: (0, p.A)(e, i, C, _)
                })
            }) : null]
        }) : (0, n.jsxs)("div", {
            className: T.i1,
            children: [(0, n.jsx)(h.A, {
                className: T.oz,
                stream: e
            }), v ? (0, n.jsx)("div", {
                className: T.xD,
                children: (0, n.jsx)(a.Text, {
                    variant: "text-sm/normal",
                    color: "none",
                    className: T.ON,
                    children: (0, p.A)(e, i, C, _)
                })
            }) : null]
        }), (0, n.jsxs)("div", {
            className: T.rf,
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
                onAction: y
            }) : (0, n.jsx)(d.A, {
                type: o.M.STREAM_PREVIEW,
                applicationStream: e,
                user: E,
                guildId: e.guildId,
                channelId: e.channelId,
                className: T.lx,
                onAction: y
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
            className: r()(S.popover, T.Rh, j),
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
        canWatch: m,
        unavailableReason: A,
        onWatchStream: S,
        onAction: E,
        showHeader: C = !1,
        wrapperClassName: v
    } = t;
    return (0, n.jsxs)("div", {
        className: r()(T.yt, v),
        children: [C && (0, n.jsxs)("div", {
            className: T.mg,
            children: [(0, n.jsx)(a.Text, {
                variant: "text-xs/medium",
                color: "text-muted",
                children: f.intl.string(f.t["HV97U/"])
            }), (0, n.jsx)(c.Ay, {
                size: c.ed.SMALL
            })]
        }), null != S ? (0, n.jsxs)(a.DUT, {
            onClick: S,
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
                    children: (0, p.A)(e, l, u, A)
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
                    children: (0, p.A)(e, l, u, A)
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
                onAction: E
            }) : (0, n.jsx)(d.A, {
                type: o.M.STREAM_PREVIEW,
                applicationStream: e,
                user: s,
                guildId: e.guildId,
                channelId: e.channelId,
                className: T.lx,
                onAction: E
            })
        })]
    })
}