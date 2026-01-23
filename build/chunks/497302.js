/** Chunk was on 21738 **/
/** chunk id: 497302, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => _
}), n(228524);
var r = n(627968),
    i = n(64700),
    l = n(311907),
    a = n(397927),
    s = n(713654),
    o = n(698441),
    c = n(435328),
    u = n(563312),
    d = n(826383),
    p = n(9448),
    h = n(974930),
    g = n(734057),
    f = n(71393),
    m = n(985018),
    A = n(659088);

function _(e) {
    var t, n;
    let {
        eventId: _
    } = e, b = (0, l.bG)([o.Ay], () => o.Ay.getGuildScheduledEvent(_), [_]), E = (0, l.bG)([f.A], () => f.A.getGuild(null == b ? void 0 : b.guild_id), [b]), O = (0, l.bG)([g.A], () => g.A.getChannel(null == b ? void 0 : b.channel_id), [b]), y = (0, u.nh)(_, null), I = null != b && (0, o.Fd)(b), v = null != b ? (0, h.G3)(b) : null, S = (0, d.A)(null == b ? void 0 : b.guild_id, null == b ? void 0 : b.id, v), C = null == y ? void 0 : y.startTime.toISOString(), {
        startDateTimeString: N
    } = i.useMemo(() => I ? {
        startDateTimeString: m.intl.string(m.t.TxqPQR)
    } : (0, h.CC)(null != C ? C : new Date().toISOString()), [C, I]), T = null != b ? (0, p.oF)(b) : void 0, j = null != (t = null == O ? void 0 : O.name) ? t : T, x = null != O ? (0, s.gU)(O) : null;
    if (null == b || null == E) return null;
    let P = null != b.description && b.description.length > 0;
    return (0, r.jsxs)("div", {
        className: A.Qo,
        children: [(0, r.jsx)("div", {
            className: A.At,
            children: (0, r.jsx)(a.Text, {
                variant: "text-sm/semibold",
                color: I ? "status-positive" : "text-brand",
                children: N
            })
        }), (0, r.jsx)(a.Text, {
            variant: "text-lg/semibold",
            className: P ? A.X_ : void 0,
            children: b.name
        }), P && (0, r.jsx)(a.Text, {
            variant: "text-md/normal",
            color: "text-subtle",
            className: A.tj,
            children: (0, c.l)(null != (n = b.description) ? n : "", !0, {
                guildId: E.id
            })
        }), (0, r.jsx)("hr", {
            className: A.Yl
        }), (0, r.jsxs)("div", {
            className: A.oo,
            children: [(0, r.jsxs)("div", {
                className: A.ik,
                children: [(0, r.jsx)(a.nFg, {
                    size: "xs",
                    color: "currentColor"
                }), (0, r.jsx)(a.Text, {
                    variant: "text-xs/normal",
                    color: "text-muted",
                    children: m.intl.format(m.t["+DLsD8"], {
                        count: S
                    })
                })]
            }), (0, r.jsxs)("div", {
                className: A.ik,
                children: [null != x ? (0, r.jsx)(x, {
                    size: "xs",
                    color: "currentColor"
                }) : null, (0, r.jsx)(a.Text, {
                    variant: "text-xs/normal",
                    color: "text-muted",
                    className: A.HA,
                    children: null != j ? (0, c.l)(j, !0) : null
                })]
            })]
        })]
    })
}