/** chunk id: 727353 params = (module,exports,require) **/
n.d(e, {
    P: () => y,
    Z: () => _
});
var i = n(627968);
n(64700);
var l = n(503698),
    r = n.n(l),
    s = n(311907),
    a = n(397927),
    o = n(302959),
    u = n(592182),
    d = n(587895),
    c = n(402216),
    h = n(12351),
    A = n(769015),
    m = n(329554),
    p = n(734057),
    g = n(877315),
    f = n(607407),
    E = n(652215),
    T = n(985018),
    C = n(249047),
    S = n(467935);

function _(t) {
    let {
        stream: e,
        activeStream: n,
        streamActivity: l,
        streamApplication: c,
        user: m,
        currentUserId: p,
        canWatch: _,
        unavailableReason: y,
        onWatchStream: N,
        onAction: v,
        showHeader: I = !1,
        hideTip: x = !1,
        className: j
    } = t, L = (0, s.bG)([d.A], () => {
        if (null != c) {
            if (null != c.id) return d.A.getApplication(c.id);
            else if (null != c.name) return d.A.getApplicationByName(c.name)
        }
        return null
    }, [c]), P = null != l && null != l.name ? T.intl.formatToPlainString(T.t["4CQq9Q"], {
        name: l.name
    }) : T.intl.string(T.t["Jpkr/q"]), O = (0, i.jsxs)(i.Fragment, {
        children: [I && (0, i.jsxs)("div", {
            className: C.WG,
            children: [null != L && (0, i.jsx)(A.A, {
                game: L,
                className: C.lK
            }), (0, i.jsx)(a.Text, {
                variant: "text-xs/bold",
                color: "currentColor",
                children: P
            })]
        }), null != N ? (0, i.jsxs)(a.DUT, {
            onClick: N,
            className: C.i1,
            children: [(0, i.jsx)(f.A, {
                className: C.oz,
                stream: e
            }), _ ? (0, i.jsx)("div", {
                className: C.xD,
                children: (0, i.jsx)(a.Text, {
                    variant: "text-sm/normal",
                    color: "none",
                    className: C.ON,
                    children: (0, g.A)(e, n, p, y)
                })
            }) : null]
        }) : (0, i.jsxs)("div", {
            className: C.i1,
            children: [(0, i.jsx)(f.A, {
                className: C.oz,
                stream: e
            }), _ ? (0, i.jsx)("div", {
                className: C.xD,
                children: (0, i.jsx)(a.Text, {
                    variant: "text-sm/normal",
                    color: "none",
                    className: C.ON,
                    children: (0, g.A)(e, n, p, y)
                })
            }) : null]
        }), (0, i.jsxs)("div", {
            className: C.rf,
            children: [null != l ? (0, i.jsx)(o.A, {
                hideHeader: !0,
                type: o.M.STREAM_PREVIEW,
                activity: l,
                user: m,
                guildId: e.guildId,
                channelId: e.channelId,
                analyticsParams: {
                    location: {
                        page: E.liQ.GO_LIVE_MODAL,
                        section: E.JJy.STREAM_VIEWER_POPOUT
                    }
                },
                onAction: v
            }) : (0, i.jsx)(u.A, {
                type: o.M.STREAM_PREVIEW,
                applicationStream: e,
                user: m,
                guildId: e.guildId,
                channelId: e.channelId,
                className: C.lx,
                onAction: v
            }), !x && (0, i.jsx)(h.A, {
                type: h.A.Types.INLINE,
                className: C.PP,
                children: __OVERLAY__ ? T.intl.string(T.t.YRdw70) : T.intl.string(T.t.CCTgbF)
            })]
        })]
    });
    return (0, i.jsx)("div", {
        className: C.yt,
        children: (0, i.jsx)("div", {
            className: r()(S.popover, C.Rh, j),
            children: O
        })
    })
}

function y(t) {
    let {
        stream: e,
        streamActivity: n,
        activeStream: l,
        user: d,
        currentUserId: h,
        canWatch: A,
        unavailableReason: E,
        onWatchStream: S,
        onAction: _,
        showHeader: y = !1,
        wrapperClassName: N
    } = t, v = (0, s.bG)([p.A], () => p.A.getChannel(e.channelId));
    return null == v ? null : (0, i.jsxs)("div", {
        className: r()(C.yt, N),
        children: [y && (0, i.jsxs)("div", {
            className: C.mg,
            children: [(0, i.jsx)(a.Text, {
                variant: "text-xs/medium",
                color: "text-muted",
                children: T.intl.string(T.t["HV97U/"])
            }), (0, i.jsx)(c.Ay, {
                size: c.ed.SMALL
            })]
        }), null != S ? (0, i.jsxs)(a.DUT, {
            onClick: S,
            className: C.GE,
            children: [(0, i.jsx)(f.A, {
                className: C.oz,
                stream: e
            }), A ? (0, i.jsx)("div", {
                className: C.xD,
                children: (0, i.jsx)(a.Text, {
                    variant: "text-sm/normal",
                    color: "none",
                    className: C.ON,
                    children: (0, g.A)(e, l, h, E)
                })
            }) : null]
        }) : (0, i.jsxs)("div", {
            className: C.GE,
            children: [(0, i.jsx)(f.A, {
                className: C.oz,
                stream: e
            }), A ? (0, i.jsx)("div", {
                className: C.xD,
                children: (0, i.jsx)(a.Text, {
                    variant: "text-sm/normal",
                    color: "none",
                    className: C.ON,
                    children: (0, g.A)(e, l, h, E)
                })
            }) : null]
        }), (0, i.jsx)("div", {
            className: C.JN,
            children: null != n ? (0, i.jsx)(m.A, {
                showHeader: !1,
                presenceActivity: n,
                userId: d.id,
                channel: v,
                applicationStream: e,
                onAction: _
            }) : (0, i.jsx)(u.A, {
                type: o.M.STREAM_PREVIEW,
                applicationStream: e,
                user: d,
                guildId: e.guildId,
                channelId: e.channelId,
                className: C.lx,
                onAction: _
            })
        })]
    })
}