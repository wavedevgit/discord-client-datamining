/** chunk id: 497302 params = (module,exports,require) **/
n.d(t, {
    A: () => E
});
var i = n(627968),
    a = n(64700),
    l = n(311907),
    r = n(397927),
    s = n(713654),
    o = n(698441),
    d = n(435328),
    c = n(563312),
    u = n(826383),
    A = n(9448),
    h = n(974930),
    _ = n(734057),
    m = n(71393),
    g = n(985018),
    p = n(659088);

function E(e) {
    let {
        eventId: t
    } = e, n = (0, l.bG)([o.Ay], () => o.Ay.getGuildScheduledEvent(t), [t]), E = (0, l.bG)([m.A], () => m.A.getGuild(n?.guild_id), [n]), I = (0, l.bG)([_.A], () => _.A.getChannel(n?.channel_id), [n]), f = (0, c.nh)(t, null), C = null != n && (0, o.Fd)(n), T = null != n ? (0, h.G3)(n) : null, N = (0, u.A)(n?.guild_id, n?.id, T), S = f?.startTime.toISOString(), {
        startDateTimeString: x
    } = a.useMemo(() => C ? {
        startDateTimeString: g.intl.string(g.t.TxqPQR)
    } : (0, h.CC)(S ?? new Date().toISOString()), [S, C]), v = null != n ? (0, A.oF)(n) : void 0, b = I?.name ?? v, y = null != I ? (0, s.gU)(I) : null;
    if (null == n || null == E) return null;
    let O = null != n.description && n.description.length > 0;
    return (0, i.jsxs)("div", {
        className: p.Qo,
        children: [(0, i.jsx)("div", {
            className: p.At,
            children: (0, i.jsx)(r.Text, {
                variant: "text-sm/semibold",
                color: C ? "status-positive" : "text-brand",
                children: x
            })
        }), (0, i.jsx)(r.Text, {
            variant: "text-lg/semibold",
            className: O ? p.X_ : void 0,
            children: n.name
        }), O && (0, i.jsx)(r.Text, {
            variant: "text-md/normal",
            color: "text-subtle",
            className: p.tj,
            children: (0, d.l)(n.description ?? "", !0, {
                guildId: E.id
            })
        }), (0, i.jsx)("hr", {
            className: p.Yl
        }), (0, i.jsxs)("div", {
            className: p.oo,
            children: [(0, i.jsxs)("div", {
                className: p.ik,
                children: [(0, i.jsx)(r.nFg, {
                    size: "xs",
                    color: "currentColor"
                }), (0, i.jsx)(r.Text, {
                    variant: "text-xs/normal",
                    color: "text-muted",
                    children: g.intl.format(g.t["+DLsD8"], {
                        count: N
                    })
                })]
            }), (0, i.jsxs)("div", {
                className: p.ik,
                children: [null != y ? (0, i.jsx)(y, {
                    size: "xs",
                    color: "currentColor"
                }) : null, (0, i.jsx)(r.Text, {
                    variant: "text-xs/normal",
                    color: "text-muted",
                    className: p.HA,
                    children: null != b ? (0, d.l)(b, !0) : null
                })]
            })]
        })]
    })
}