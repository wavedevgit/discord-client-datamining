/** chunk id: 856103, original params: t,n,e (module,exports,require) **/
e.d(n, {
    default: () => h
});
var i = e(627968),
    l = e(64700),
    a = e(158954),
    o = e(311907),
    r = e(397927),
    s = e(696451),
    u = e(71393),
    d = e(287809),
    c = e(624458),
    g = e(202384),
    p = e(212455),
    m = e(739985),
    v = e(985018),
    _ = e(400783);
let h = function(t) {
    let {
        guildId: n,
        transitionState: e,
        onClose: h
    } = t, b = (0, o.bG)([p.A], () => p.A.getRequest(n), [n]), f = (0, o.bG)([u.A], () => u.A.getGuild(n), [n]), x = (0, o.bG)([d.default], () => {
        var t;
        return null == (t = d.default.getCurrentUser()) ? void 0 : t.id
    }), A = (0, o.bG)([s.Ay], () => null != x ? s.Ay.getMember(n, x) : null, [x, n]), j = l.useCallback(() => {
        h(), null == A && (0, m.A)()
    }, [A, h]), k = l.useCallback(async () => {
        if (null == A ? void 0 : A.isPending) {
            try {
                await c.A.removeGuildJoinRequest(n)
            } catch (t) {
                throw t
            }
            h(), (0, g.Ze)(n)
        } else c.A.resetGuildJoinRequest(n)
    }, [n, null == A ? void 0 : A.isPending, h]), C = l.useMemo(() => [{
        text: v.intl.string(v.t.I1LYVk),
        variant: "secondary",
        onClick: k
    }, {
        text: v.intl.string(v.t.BddRzS),
        variant: "critical-primary",
        onClick: j
    }], [k, j]);
    return (0, i.jsx)(a.Modal, {
        transitionState: e,
        onClose: h,
        title: (null == f ? void 0 : f.name) != null ? v.intl.formatToPlainString(v.t["P+/gzA"], {
            guildName: f.name
        }) : v.intl.string(v.t.gBPcuP),
        actions: C,
        children: (null == b ? void 0 : b.rejectionReason) != null && (null == b ? void 0 : b.rejectionReason) !== "" ? (0, i.jsxs)(r.Text, {
            variant: "text-md/medium",
            color: "text-default",
            children: [(0, i.jsx)("span", {
                className: _.Wj,
                children: v.intl.string(v.t.cf1psW)
            }), (0, i.jsx)("span", {
                children: null == b ? void 0 : b.rejectionReason
            })]
        }) : null
    })
}