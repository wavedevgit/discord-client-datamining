/** Chunk was on 49559 **/
/** chunk id: 544101, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => f
});
var r = n(627968),
    l = n(64700),
    a = n(397927),
    i = n(713654),
    o = n(734057),
    s = n(71393),
    c = n(207963),
    u = n(289770),
    d = n(247818),
    p = n(652215),
    m = n(794998);

function f(e) {
    let {
        channelTypes: t
    } = e, n = (0, c.jc)(), f = null == n ? void 0 : n.channelId, O = o.A.getChannel(f), b = s.A.getGuild(null == O ? void 0 : O.getGuildId()), y = l.useMemo(() => (0, u.iA)(e.defaultValues, null == b ? void 0 : b.id, t), [e.defaultValues, b, t]);
    return (0, r.jsx)(d.Ay, {
        selectActionComponent: e,
        queryOptions: e => (0, u.z0)(e, f, t),
        renderIcon: (e, t) => {
            let n = o.A.getChannel(null == e ? void 0 : e.value);
            if (null == n) return null;
            let l = n.type === p.rbe.GUILD_CATEGORY ? a.sjq : (0, i.gU)(n);
            return null != l ? (0, r.jsx)(l, {
                size: "custom",
                color: "currentColor",
                width: t,
                height: t
            }) : null
        },
        renderOptionLabel: e => (0, r.jsx)("span", {
            className: m.Pf,
            children: e.label
        }),
        defaultValues: y
    })
}