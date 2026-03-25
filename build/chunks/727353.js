/** chunk id: 727353 params = (module,exports,require) **/
i.d(t, {
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
    A = i(12351),
    h = i(769015),
    m = i(877315),
    p = i(607407),
    g = i(652215),
    f = i(985018),
    T = i(573073),
    S = i(248789);

function E(e) {
    let {
        stream: t,
        activeStream: i,
        streamActivity: l,
        streamApplication: c,
        user: E,
        currentUserId: C,
        canWatch: v,
        unavailableReason: _,
        onWatchStream: y,
        onAction: x,
        showHeader: I = !1,
        hideTip: N = !1,
        className: j
    } = e, D = (0, s.bG)([u.A], () => {
        if (null != c) {
            if (null != c.id) return u.A.getApplication(c.id);
            else if (null != c.name) return u.A.getApplicationByName(c.name)
        }
        return null
    }, [c]), O = null != l && null != l.name ? f.intl.formatToPlainString(f.t["4CQq9Q"], {
        name: l.name
    }) : f.intl.string(f.t["Jpkr/q"]), P = (0, n.jsxs)(n.Fragment, {
        children: [I && (0, n.jsxs)("div", {
            className: T.WG,
            children: [null != D && (0, n.jsx)(h.A, {
                game: D,
                className: T.lK
            }), (0, n.jsx)(a.Text, {
                variant: "text-xs/bold",
                color: "currentColor",
                children: O
            })]
        }), null != y ? (0, n.jsxs)(a.DUT, {
            onClick: y,
            className: T.i1,
            children: [(0, n.jsx)(p.A, {
                className: T.oz,
                stream: t
            }), v ? (0, n.jsx)("div", {
                className: T.xD,
                children: (0, n.jsx)(a.Text, {
                    variant: "text-sm/normal",
                    color: "none",
                    className: T.ON,
                    children: (0, m.A)(t, i, C, _)
                })
            }) : null]
        }) : (0, n.jsxs)("div", {
            className: T.i1,
            children: [(0, n.jsx)(p.A, {
                className: T.oz,
                stream: t
            }), v ? (0, n.jsx)("div", {
                className: T.xD,
                children: (0, n.jsx)(a.Text, {
                    variant: "text-sm/normal",
                    color: "none",
                    className: T.ON,
                    children: (0, m.A)(t, i, C, _)
                })
            }) : null]
        }), (0, n.jsxs)("div", {
            className: T.rf,
            children: [null != l ? (0, n.jsx)(o.A, {
                hideHeader: !0,
                type: o.M.STREAM_PREVIEW,
                activity: l,
                user: E,
                guildId: t.guildId,
                channelId: t.channelId,
                analyticsParams: {
                    location: {
                        page: g.liQ.GO_LIVE_MODAL,
                        section: g.JJy.STREAM_VIEWER_POPOUT
                    }
                },
                onAction: x
            }) : (0, n.jsx)(d.A, {
                type: o.M.STREAM_PREVIEW,
                applicationStream: t,
                user: E,
                guildId: t.guildId,
                channelId: t.channelId,
                className: T.lx,
                onAction: x
            }), !N && (0, n.jsx)(A.A, {
                type: A.A.Types.INLINE,
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

function C(e) {
    let {
        stream: t,
        streamActivity: i,
        activeStream: l,
        user: s,
        currentUserId: u,
        canWatch: A,
        unavailableReason: h,
        onWatchStream: S,
        onAction: E,
        showHeader: C = !1,
        wrapperClassName: v
    } = e;
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
            children: [(0, n.jsx)(p.A, {
                className: T.oz,
                stream: t
            }), A ? (0, n.jsx)("div", {
                className: T.xD,
                children: (0, n.jsx)(a.Text, {
                    variant: "text-sm/normal",
                    color: "none",
                    className: T.ON,
                    children: (0, m.A)(t, l, u, h)
                })
            }) : null]
        }) : (0, n.jsxs)("div", {
            className: T.GE,
            children: [(0, n.jsx)(p.A, {
                className: T.oz,
                stream: t
            }), A ? (0, n.jsx)("div", {
                className: T.xD,
                children: (0, n.jsx)(a.Text, {
                    variant: "text-sm/normal",
                    color: "none",
                    className: T.ON,
                    children: (0, m.A)(t, l, u, h)
                })
            }) : null]
        }), (0, n.jsx)("div", {
            className: T.JN,
            children: null != i ? (0, n.jsx)(o.A, {
                hideHeader: !0,
                type: o.M.STREAM_PREVIEW,
                activity: i,
                user: s,
                guildId: t.guildId,
                channelId: t.channelId,
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
                applicationStream: t,
                user: s,
                guildId: t.guildId,
                channelId: t.channelId,
                className: T.lx,
                onAction: E
            })
        })]
    })
}