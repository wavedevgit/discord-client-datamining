/** Chunk was on 21425 **/
/** chunk id: 727353, original params: e,t,n (module,exports,require) **/
n.d(t, {
    Z: () => b
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
    y = n(985018),
    _ = n(573073);

function b(e) {
    let {
        stream: t,
        activeStream: n,
        streamActivity: i,
        streamApplication: b,
        user: A,
        currentUserId: h,
        canWatch: v,
        unavailableReason: O,
        onWatchStream: j,
        onAction: S,
        showHeader: I = !1,
        hideTip: x = !1,
        className: E,
        wrapperClassName: P,
        skipContainer: T = !1
    } = e, N = (0, a.bG)([u.A], () => {
        if (null != b) {
            if (null != b.id) return u.A.getApplication(b.id);
            else if (null != b.name) return u.A.getApplicationByName(b.name)
        }
        return null
    }, [b]), w = null != i && null != i.name ? y.intl.formatToPlainString(y.t["4CQq9Q"], {
        name: i.name
    }) : y.intl.string(y.t["Jpkr/q"]), C = (0, r.jsxs)(r.Fragment, {
        children: [I && (0, r.jsxs)("div", {
            className: _.WG,
            children: [null != N && (0, r.jsx)(p.A, {
                game: N,
                className: _.lK
            }), (0, r.jsx)(s.Text, {
                variant: "text-xs/bold",
                children: w
            })]
        }), null != j ? (0, r.jsxs)(s.DUT, {
            onClick: j,
            className: _.i1,
            children: [(0, r.jsx)(m.A, {
                className: _.oz,
                stream: t
            }), v ? (0, r.jsx)("div", {
                className: _.xD,
                children: (0, r.jsx)(s.Text, {
                    variant: "text-sm/normal",
                    color: "none",
                    className: _.ON,
                    children: (0, f.A)(t, n, h, O)
                })
            }) : null]
        }) : (0, r.jsxs)("div", {
            className: _.i1,
            children: [(0, r.jsx)(m.A, {
                className: _.oz,
                stream: t
            }), v ? (0, r.jsx)("div", {
                className: _.xD,
                children: (0, r.jsx)(s.Text, {
                    variant: "text-sm/normal",
                    color: "none",
                    className: _.ON,
                    children: (0, f.A)(t, n, h, O)
                })
            }) : null]
        }), (0, r.jsxs)("div", {
            className: _.rf,
            children: [null != i ? (0, r.jsx)(o.A, {
                hideHeader: !0,
                type: o.M.STREAM_PREVIEW,
                activity: i,
                user: A,
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
                user: A,
                guildId: t.guildId,
                channelId: t.channelId,
                className: _.lx,
                onAction: S
            }), !x && (0, r.jsx)(d.A, {
                type: d.A.Types.INLINE,
                className: _.PP,
                children: __OVERLAY__ ? y.intl.string(y.t.YRdw70) : y.intl.string(y.t.CCTgbF)
            })]
        })]
    });
    return T ? (0, r.jsx)("div", {
        className: l()(_.yt, _.Tb, P),
        children: C
    }) : (0, r.jsx)("div", {
        className: l()(_.yt, P),
        children: (0, r.jsx)("div", {
            className: l()(_.Rh, E),
            children: C
        })
    })
}