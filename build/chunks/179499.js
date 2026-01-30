/** chunk id: 179499, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => p
});
var r = n(64700),
    i = n(284009),
    l = n.n(i),
    a = n(417597),
    s = n(397927),
    o = n(871109),
    c = n(666171),
    u = n(960427),
    d = n(985018);

function p(e) {
    var t, n;
    let {
        guildId: i,
        productId: p
    } = e, m = (0, a.bG)([o.A], () => o.A.getGuildProduct(p)), {
        isLoading: f,
        downloadAttachment: g
    } = (0, c.A)(i, p), _ = r.useCallback(() => {
        var e, t;
        let n = null == m || null == (t = m.attachments) || null == (e = t[0]) ? void 0 : e.id;
        l()(null != n, "No attachment"), g(n)
    }, [g, null == m ? void 0 : m.attachments]), h = r.useCallback(() => u.A.open({
        guildId: i,
        productId: p
    }), [i, p]);
    return (null != (t = null == m || null == (n = m.attachments) ? void 0 : n.length) ? t : 0) > 1 ? {
        variant: "primary",
        text: d.intl.string(d.t.UyuiUE),
        icon: s.KS6,
        iconPosition: "end",
        onClick: h
    } : {
        variant: "primary",
        text: d.intl.string(d.t.t9bE9b),
        icon: s.s3U,
        iconPosition: "end",
        loading: f,
        onClick: _
    }
}