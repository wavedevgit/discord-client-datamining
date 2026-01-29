/** Chunk was on 6500 **/
/** chunk id: 727353, original params: e,t,n (module,exports,require) **/
n.d(t, {
    Z: () => A
});
var r = n(627968);
n(64700);
var i = n(503698),
    l = n.n(i),
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
    _ = n(985018),
    y = n(573073);

function A(e) {
    let {
        stream: t,
        activeStream: n,
        streamActivity: i,
        streamApplication: A,
        user: b,
        currentUserId: h,
        canWatch: v,
        unavailableReason: O,
        onWatchStream: j,
        onAction: S,
        showHeader: I = !1,
        hideTip: x = !1,
        className: E,
        wrapperClassName: P,
        skipContainer: N = !1
    } = e, T = (0, a.bG)([u.A], () => {
        if (null != A) {
            if (null != A.id) return u.A.getApplication(A.id);
            else if (null != A.name) return u.A.getApplicationByName(A.name)
        }
        return null
    }, [A]), w = null != i && null != i.name ? _.intl.formatToPlainString(_.t["4CQq9Q"], {
        name: i.name
    }) : _.intl.string(_.t["Jpkr/q"]), C = (0, r.jsxs)(r.Fragment, {
        children: [I && (0, r.jsxs)("div", {
            className: y.WG,
            children: [null != T && (0, r.jsx)(p.A, {
                game: T,
                className: y.lK
            }), (0, r.jsx)(s.Text, {
                variant: "text-xs/bold",
                children: w
            })]
        }), null != j ? (0, r.jsxs)(s.DUT, {
            onClick: j,
            className: y.i1,
            children: [(0, r.jsx)(m.A, {
                className: y.oz,
                stream: t
            }), v ? (0, r.jsx)("div", {
                className: y.xD,
                children: (0, r.jsx)(s.Text, {
                    variant: "text-sm/normal",
                    color: "none",
                    className: y.ON,
                    children: (0, f.A)(t, n, h, O)
                })
            }) : null]
        }) : (0, r.jsxs)("div", {
            className: y.i1,
            children: [(0, r.jsx)(m.A, {
                className: y.oz,
                stream: t
            }), v ? (0, r.jsx)("div", {
                className: y.xD,
                children: (0, r.jsx)(s.Text, {
                    variant: "text-sm/normal",
                    color: "none",
                    className: y.ON,
                    children: (0, f.A)(t, n, h, O)
                })
            }) : null]
        }), (0, r.jsxs)("div", {
            className: y.rf,
            children: [null != i ? (0, r.jsx)(o.A, {
                hideHeader: !0,
                type: o.M.STREAM_PREVIEW,
                activity: i,
                user: b,
                guildId: t.guildId,
                channelId: t.channelId,
                analyticsParams: {
                    location: {
                        page: g.liQ.GO_LIVE_MODAL,
                        section: g.JJy.STREAM_VIEWER_POPOUT
                    }
                },
                onAction: S
            }) : (0, r.jsx)(c.A, {
                type: o.M.STREAM_PREVIEW,
                applicationStream: t,
                user: b,
                guildId: t.guildId,
                channelId: t.channelId,
                className: y.lx,
                onAction: S
            }), !x && (0, r.jsx)(d.A, {
                type: d.A.Types.INLINE,
                className: y.PP,
                children: __OVERLAY__ ? _.intl.string(_.t.YRdw70) : _.intl.string(_.t.CCTgbF)
            })]
        })]
    });
    return N ? (0, r.jsx)("div", {
        className: l()(y.yt, y.Tb, P),
        children: C
    }) : (0, r.jsx)("div", {
        className: l()(y.yt, P),
        children: (0, r.jsx)("div", {
            className: l()(y.Rh, E),
            children: C
        })
    })
}