/** chunk id: 727353 params = (module,exports,require) **/
i.d(t, {
    P: () => I,
    Z: () => S
});
var n = i(627968);
i(64700);
var a = i(503698),
    l = i.n(a),
    s = i(311907),
    r = i(397927),
    o = i(302959),
    c = i(592182),
    d = i(587895),
    u = i(402216),
    m = i(12351),
    _ = i(769015),
    p = i(877315),
    h = i(607407),
    A = i(652215),
    g = i(985018),
    f = i(215820),
    v = i(442078);

function S(e) {
    let {
        stream: t,
        activeStream: i,
        streamActivity: a,
        streamApplication: u,
        user: S,
        currentUserId: I,
        canWatch: T,
        unavailableReason: C,
        onWatchStream: E,
        onAction: y,
        showHeader: x = !1,
        hideTip: N = !1,
        className: b
    } = e, L = (0, s.bG)([d.A], () => {
        if (null != u) {
            if (null != u.id) return d.A.getApplication(u.id);
            else if (null != u.name) return d.A.getApplicationByName(u.name)
        }
        return null
    }, [u]), P = null != a && null != a.name ? g.intl.formatToPlainString(g.t["4CQq9Q"], {
        name: a.name
    }) : g.intl.string(g.t["Jpkr/q"]), j = (0, n.jsxs)(n.Fragment, {
        children: [x && (0, n.jsxs)("div", {
            className: f.WG,
            children: [null != L && (0, n.jsx)(_.A, {
                game: L,
                className: f.lK
            }), (0, n.jsx)(r.Text, {
                variant: "text-xs/bold",
                color: "currentColor",
                children: P
            })]
        }), null != E ? (0, n.jsxs)(r.DUT, {
            onClick: E,
            className: f.i1,
            children: [(0, n.jsx)(h.A, {
                className: f.oz,
                stream: t
            }), T ? (0, n.jsx)("div", {
                className: f.xD,
                children: (0, n.jsx)(r.Text, {
                    variant: "text-sm/normal",
                    color: "none",
                    className: f.ON,
                    children: (0, p.A)(t, i, I, C)
                })
            }) : null]
        }) : (0, n.jsxs)("div", {
            className: f.i1,
            children: [(0, n.jsx)(h.A, {
                className: f.oz,
                stream: t
            }), T ? (0, n.jsx)("div", {
                className: f.xD,
                children: (0, n.jsx)(r.Text, {
                    variant: "text-sm/normal",
                    color: "none",
                    className: f.ON,
                    children: (0, p.A)(t, i, I, C)
                })
            }) : null]
        }), (0, n.jsxs)("div", {
            className: f.rf,
            children: [null != a ? (0, n.jsx)(o.A, {
                hideHeader: !0,
                type: o.M.STREAM_PREVIEW,
                activity: a,
                user: S,
                guildId: t.guildId,
                channelId: t.channelId,
                analyticsParams: {
                    location: {
                        page: A.liQ.GO_LIVE_MODAL,
                        section: A.JJy.STREAM_VIEWER_POPOUT
                    }
                },
                onAction: y
            }) : (0, n.jsx)(c.A, {
                type: o.M.STREAM_PREVIEW,
                applicationStream: t,
                user: S,
                guildId: t.guildId,
                channelId: t.channelId,
                className: f.lx,
                onAction: y
            }), !N && (0, n.jsx)(m.A, {
                type: m.A.Types.INLINE,
                className: f.PP,
                children: __OVERLAY__ ? g.intl.string(g.t.YRdw70) : g.intl.string(g.t.CCTgbF)
            })]
        })]
    });
    return (0, n.jsx)("div", {
        className: f.yt,
        children: (0, n.jsx)("div", {
            className: l()(v.popover, f.Rh, b),
            children: j
        })
    })
}

function I(e) {
    let {
        stream: t,
        streamActivity: i,
        activeStream: a,
        user: s,
        currentUserId: d,
        canWatch: m,
        unavailableReason: _,
        onWatchStream: v,
        onAction: S,
        showHeader: I = !1,
        wrapperClassName: T
    } = e;
    return (0, n.jsxs)("div", {
        className: l()(f.yt, T),
        children: [I && (0, n.jsxs)("div", {
            className: f.mg,
            children: [(0, n.jsx)(r.Text, {
                variant: "text-xs/medium",
                color: "text-muted",
                children: g.intl.string(g.t["HV97U/"])
            }), (0, n.jsx)(u.Ay, {
                size: u.ed.SMALL
            })]
        }), null != v ? (0, n.jsxs)(r.DUT, {
            onClick: v,
            className: f.GE,
            children: [(0, n.jsx)(h.A, {
                className: f.oz,
                stream: t
            }), m ? (0, n.jsx)("div", {
                className: f.xD,
                children: (0, n.jsx)(r.Text, {
                    variant: "text-sm/normal",
                    color: "none",
                    className: f.ON,
                    children: (0, p.A)(t, a, d, _)
                })
            }) : null]
        }) : (0, n.jsxs)("div", {
            className: f.GE,
            children: [(0, n.jsx)(h.A, {
                className: f.oz,
                stream: t
            }), m ? (0, n.jsx)("div", {
                className: f.xD,
                children: (0, n.jsx)(r.Text, {
                    variant: "text-sm/normal",
                    color: "none",
                    className: f.ON,
                    children: (0, p.A)(t, a, d, _)
                })
            }) : null]
        }), (0, n.jsx)("div", {
            className: f.JN,
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
                        page: A.liQ.GO_LIVE_MODAL,
                        section: A.JJy.STREAM_VIEWER_POPOUT
                    }
                },
                onAction: S
            }) : (0, n.jsx)(c.A, {
                type: o.M.STREAM_PREVIEW,
                applicationStream: t,
                user: s,
                guildId: t.guildId,
                channelId: t.channelId,
                className: f.lx,
                onAction: S
            })
        })]
    })
}