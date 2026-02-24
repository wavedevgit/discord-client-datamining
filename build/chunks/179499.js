/** chunk id: 179499, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => _
});
var i = n(64700),
    l = n(284009),
    r = n.n(l),
    a = n(417597),
    s = n(397927),
    o = n(871109),
    d = n(666171),
    c = n(960427),
    u = n(985018);

function _(e) {
    let {
        guildId: t,
        productId: n
    } = e, l = (0, a.bG)([o.A], () => o.A.getGuildProduct(n)), {
        isLoading: _,
        downloadAttachment: m
    } = (0, d.A)(t, n), h = i.useCallback(() => {
        let e = l?.attachments?.[0]?.id;
        r()(null != e, "No attachment"), m(e)
    }, [m, l?.attachments]), p = i.useCallback(() => c.A.open({
        guildId: t,
        productId: n
    }), [t, n]);
    return (l?.attachments?.length ?? 0) > 1 ? {
        variant: "primary",
        text: u.intl.string(u.t.UyuiUE),
        icon: s.KS6,
        iconPosition: "end",
        onClick: p
    } : {
        variant: "primary",
        text: u.intl.string(u.t.t9bE9b),
        icon: s.s3U,
        iconPosition: "end",
        loading: _,
        onClick: h
    }
}