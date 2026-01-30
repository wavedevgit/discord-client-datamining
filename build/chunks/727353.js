/** chunk id: 727353, original params: e,t,n (module,exports,require) **/
n.d(t, {
    Z: () => _
});
var r = n(627968);
n(64700);
var l = n(503698),
    i = n.n(l),
    a = n(311907),
    s = n(397927),
    o = n(302959),
    c = n(592182),
    u = n(587895),
    d = n(12351),
    p = n(769015),
    f = n(877315),
    m = n(607407),
    g = n(652215),
    y = n(985018),
    b = n(573073);

function _(e) {
    let {
        stream: t,
        activeStream: n,
        streamActivity: l,
        streamApplication: _,
        user: A,
        currentUserId: h,
        canWatch: v,
        unavailableReason: O,
        onWatchStream: S,
        onAction: j,
        showHeader: x = !1,
        hideTip: I = !1,
        className: P,
        wrapperClassName: E,
        skipContainer: T = !1
    } = e, N = (0, a.bG)([u.A], () => {
        if (null != _) {
            if (null != _.id) return u.A.getApplication(_.id);
            else if (null != _.name) return u.A.getApplicationByName(_.name)
        }
        return null
    }, [_]), w = null != l && null != l.name ? y.intl.formatToPlainString(y.t["4CQq9Q"], {
        name: l.name
    }) : y.intl.string(y.t["Jpkr/q"]), C = (0, r.jsxs)(r.Fragment, {
        children: [x && (0, r.jsxs)("div", {
            className: b.WG,
            children: [null != N && (0, r.jsx)(p.A, {
                game: N,
                className: b.lK
            }), (0, r.jsx)(s.Text, {
                variant: "text-xs/bold",
                children: w
            })]
        }), null != S ? (0, r.jsxs)(s.DUT, {
            onClick: S,
            className: b.i1,
            children: [(0, r.jsx)(m.A, {
                className: b.oz,
                stream: t
            }), v ? (0, r.jsx)("div", {
                className: b.xD,
                children: (0, r.jsx)(s.Text, {
                    variant: "text-sm/normal",
                    color: "none",
                    className: b.ON,
                    children: (0, f.A)(t, n, h, O)
                })
            }) : null]
        }) : (0, r.jsxs)("div", {
            className: b.i1,
            children: [(0, r.jsx)(m.A, {
                className: b.oz,
                stream: t
            }), v ? (0, r.jsx)("div", {
                className: b.xD,
                children: (0, r.jsx)(s.Text, {
                    variant: "text-sm/normal",
                    color: "none",
                    className: b.ON,
                    children: (0, f.A)(t, n, h, O)
                })
            }) : null]
        }), (0, r.jsxs)("div", {
            className: b.rf,
            children: [null != l ? (0, r.jsx)(o.A, {
                hideHeader: !0,
                type: o.M.STREAM_PREVIEW,
                activity: l,
                user: A,
                guildId: t.guildId,
                channelId: t.channelId,
                analyticsParams: {
                    location: {
                        page: g.liQ.GO_LIVE_MODAL,
                        section: g.JJy.STREAM_VIEWER_POPOUT
                    }
                },
                onAction: j
            }) : (0, r.jsx)(c.A, {
                type: o.M.STREAM_PREVIEW,
                applicationStream: t,
                user: A,
                guildId: t.guildId,
                channelId: t.channelId,
                className: b.lx,
                onAction: j
            }), !I && (0, r.jsx)(d.A, {
                type: d.A.Types.INLINE,
                className: b.PP,
                children: __OVERLAY__ ? y.intl.string(y.t.YRdw70) : y.intl.string(y.t.CCTgbF)
            })]
        })]
    });
    return T ? (0, r.jsx)("div", {
        className: i()(b.yt, b.Tb, E),
        children: C
    }) : (0, r.jsx)("div", {
        className: i()(b.yt, E),
        children: (0, r.jsx)("div", {
            className: i()(b.Rh, P),
            children: C
        })
    })
}