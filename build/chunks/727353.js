/** chunk id: 727353 params = (module,exports,require) **/
n.d(t, {
    P: () => I,
    Z: () => S
});
var i = n(627968);
n(64700);
var l = n(503698),
    s = n.n(l),
    a = n(311907),
    r = n(397927),
    o = n(302959),
    c = n(592182),
    d = n(587895),
    u = n(402216),
    h = n(12351),
    m = n(769015),
    A = n(329554),
    g = n(734057),
    _ = n(877315),
    p = n(607407),
    f = n(652215),
    E = n(985018),
    C = n(380668),
    x = n(824078);

function S(e) {
    let {
        stream: t,
        activeStream: n,
        streamActivity: l,
        streamApplication: u,
        user: A,
        currentUserId: g,
        canWatch: S,
        unavailableReason: I,
        onWatchStream: T,
        onAction: v,
        showHeader: N = !1,
        hideTip: y = !1,
        className: b
    } = e, j = (0, a.bG)([d.A], () => {
        if (null != u) {
            if (null != u.id) return d.A.getApplication(u.id);
            else if (null != u.name) return d.A.getApplicationByName(u.name)
        }
        return null
    }, [u]), R = null != l && null != l.name ? E.intl.formatToPlainString(E.t["4CQq9Q"], {
        name: l.name
    }) : E.intl.string(E.t["Jpkr/q"]), M = (0, i.jsxs)(i.Fragment, {
        children: [N && (0, i.jsxs)("div", {
            className: C.WG,
            children: [null != j && (0, i.jsx)(m.A, {
                game: j,
                className: C.lK
            }), (0, i.jsx)(r.Text, {
                variant: "text-xs/bold",
                color: "currentColor",
                children: R
            })]
        }), null != T ? (0, i.jsxs)(r.DUT, {
            onClick: T,
            className: C.i1,
            children: [(0, i.jsx)(p.A, {
                className: C.oz,
                stream: t
            }), S ? (0, i.jsx)("div", {
                className: C.xD,
                children: (0, i.jsx)(r.Text, {
                    variant: "text-sm/normal",
                    color: "none",
                    className: C.ON,
                    children: (0, _.A)(t, n, g, I)
                })
            }) : null]
        }) : (0, i.jsxs)("div", {
            className: C.i1,
            children: [(0, i.jsx)(p.A, {
                className: C.oz,
                stream: t
            }), S ? (0, i.jsx)("div", {
                className: C.xD,
                children: (0, i.jsx)(r.Text, {
                    variant: "text-sm/normal",
                    color: "none",
                    className: C.ON,
                    children: (0, _.A)(t, n, g, I)
                })
            }) : null]
        }), (0, i.jsxs)("div", {
            className: C.rf,
            children: [null != l ? (0, i.jsx)(o.A, {
                hideHeader: !0,
                type: o.M.STREAM_PREVIEW,
                activity: l,
                user: A,
                guildId: t.guildId,
                channelId: t.channelId,
                analyticsParams: {
                    location: {
                        page: f.liQ.GO_LIVE_MODAL,
                        section: f.JJy.STREAM_VIEWER_POPOUT
                    }
                },
                onAction: v
            }) : (0, i.jsx)(c.A, {
                type: o.M.STREAM_PREVIEW,
                applicationStream: t,
                user: A,
                guildId: t.guildId,
                channelId: t.channelId,
                className: C.lx,
                onAction: v
            }), !y && (0, i.jsx)(h.A, {
                type: h.A.Types.INLINE,
                className: C.PP,
                children: __OVERLAY__ ? E.intl.string(E.t.YRdw70) : E.intl.string(E.t.CCTgbF)
            })]
        })]
    });
    return (0, i.jsx)("div", {
        className: C.yt,
        children: (0, i.jsx)("div", {
            className: s()(x.popover, C.Rh, b),
            children: M
        })
    })
}

function I(e) {
    let {
        stream: t,
        streamActivity: n,
        activeStream: l,
        user: d,
        currentUserId: h,
        canWatch: m,
        unavailableReason: f,
        onWatchStream: x,
        onAction: S,
        showHeader: I = !1,
        wrapperClassName: T
    } = e, v = (0, a.bG)([g.A], () => g.A.getChannel(t.channelId));
    return null == v ? null : (0, i.jsxs)("div", {
        className: s()(C.yt, T),
        children: [I && (0, i.jsxs)("div", {
            className: C.mg,
            children: [(0, i.jsx)(r.Text, {
                variant: "text-xs/medium",
                color: "text-muted",
                children: E.intl.string(E.t["HV97U/"])
            }), (0, i.jsx)(u.Ay, {
                size: u.ed.SMALL
            })]
        }), null != x ? (0, i.jsxs)(r.DUT, {
            onClick: x,
            className: C.GE,
            children: [(0, i.jsx)(p.A, {
                className: C.oz,
                stream: t
            }), m ? (0, i.jsx)("div", {
                className: C.xD,
                children: (0, i.jsx)(r.Text, {
                    variant: "text-sm/normal",
                    color: "none",
                    className: C.ON,
                    children: (0, _.A)(t, l, h, f)
                })
            }) : null]
        }) : (0, i.jsxs)("div", {
            className: C.GE,
            children: [(0, i.jsx)(p.A, {
                className: C.oz,
                stream: t
            }), m ? (0, i.jsx)("div", {
                className: C.xD,
                children: (0, i.jsx)(r.Text, {
                    variant: "text-sm/normal",
                    color: "none",
                    className: C.ON,
                    children: (0, _.A)(t, l, h, f)
                })
            }) : null]
        }), (0, i.jsx)("div", {
            className: C.JN,
            children: null != n ? (0, i.jsx)(A.A, {
                showHeader: !1,
                presenceActivity: n,
                userId: d.id,
                channel: v,
                applicationStream: t,
                onAction: S
            }) : (0, i.jsx)(c.A, {
                type: o.M.STREAM_PREVIEW,
                applicationStream: t,
                user: d,
                guildId: t.guildId,
                channelId: t.channelId,
                className: C.lx,
                onAction: S
            })
        })]
    })
}