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
    A = i(877315),
    h = i(607407),
    g = i(652215),
    f = i(985018),
    S = i(249047),
    T = i(467935);

function E(t) {
    let {
        stream: e,
        activeStream: i,
        streamActivity: l,
        streamApplication: c,
        user: E,
        currentUserId: C,
        canWatch: v,
        unavailableReason: y,
        onWatchStream: _,
        onAction: I,
        showHeader: N = !1,
        hideTip: x = !1,
        className: j
    } = t, P = (0, s.bG)([u.A], () => {
        if (null != c) {
            if (null != c.id) return u.A.getApplication(c.id);
            else if (null != c.name) return u.A.getApplicationByName(c.name)
        }
        return null
    }, [c]), L = null != l && null != l.name ? f.intl.formatToPlainString(f.t["4CQq9Q"], {
        name: l.name
    }) : f.intl.string(f.t["Jpkr/q"]), O = (0, n.jsxs)(n.Fragment, {
        children: [N && (0, n.jsxs)("div", {
            className: S.WG,
            children: [null != P && (0, n.jsx)(m.A, {
                game: P,
                className: S.lK
            }), (0, n.jsx)(a.Text, {
                variant: "text-xs/bold",
                color: "currentColor",
                children: L
            })]
        }), null != _ ? (0, n.jsxs)(a.DUT, {
            onClick: _,
            className: S.i1,
            children: [(0, n.jsx)(h.A, {
                className: S.oz,
                stream: e
            }), v ? (0, n.jsx)("div", {
                className: S.xD,
                children: (0, n.jsx)(a.Text, {
                    variant: "text-sm/normal",
                    color: "none",
                    className: S.ON,
                    children: (0, A.A)(e, i, C, y)
                })
            }) : null]
        }) : (0, n.jsxs)("div", {
            className: S.i1,
            children: [(0, n.jsx)(h.A, {
                className: S.oz,
                stream: e
            }), v ? (0, n.jsx)("div", {
                className: S.xD,
                children: (0, n.jsx)(a.Text, {
                    variant: "text-sm/normal",
                    color: "none",
                    className: S.ON,
                    children: (0, A.A)(e, i, C, y)
                })
            }) : null]
        }), (0, n.jsxs)("div", {
            className: S.rf,
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
                onAction: I
            }) : (0, n.jsx)(d.A, {
                type: o.M.STREAM_PREVIEW,
                applicationStream: e,
                user: E,
                guildId: e.guildId,
                channelId: e.channelId,
                className: S.lx,
                onAction: I
            }), !x && (0, n.jsx)(p.A, {
                type: p.A.Types.INLINE,
                className: S.PP,
                children: __OVERLAY__ ? f.intl.string(f.t.YRdw70) : f.intl.string(f.t.CCTgbF)
            })]
        })]
    });
    return (0, n.jsx)("div", {
        className: S.yt,
        children: (0, n.jsx)("div", {
            className: r()(T.popover, S.Rh, j),
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
        onWatchStream: T,
        onAction: E,
        showHeader: C = !1,
        wrapperClassName: v
    } = t;
    return (0, n.jsxs)("div", {
        className: r()(S.yt, v),
        children: [C && (0, n.jsxs)("div", {
            className: S.mg,
            children: [(0, n.jsx)(a.Text, {
                variant: "text-xs/medium",
                color: "text-muted",
                children: f.intl.string(f.t["HV97U/"])
            }), (0, n.jsx)(c.Ay, {
                size: c.ed.SMALL
            })]
        }), null != T ? (0, n.jsxs)(a.DUT, {
            onClick: T,
            className: S.GE,
            children: [(0, n.jsx)(h.A, {
                className: S.oz,
                stream: e
            }), p ? (0, n.jsx)("div", {
                className: S.xD,
                children: (0, n.jsx)(a.Text, {
                    variant: "text-sm/normal",
                    color: "none",
                    className: S.ON,
                    children: (0, A.A)(e, l, u, m)
                })
            }) : null]
        }) : (0, n.jsxs)("div", {
            className: S.GE,
            children: [(0, n.jsx)(h.A, {
                className: S.oz,
                stream: e
            }), p ? (0, n.jsx)("div", {
                className: S.xD,
                children: (0, n.jsx)(a.Text, {
                    variant: "text-sm/normal",
                    color: "none",
                    className: S.ON,
                    children: (0, A.A)(e, l, u, m)
                })
            }) : null]
        }), (0, n.jsx)("div", {
            className: S.JN,
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
                className: S.lx,
                onAction: E
            })
        })]
    })
}