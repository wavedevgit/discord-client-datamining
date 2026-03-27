/** chunk id: 814698 params = (module,exports,require) **/
n.d(t, {
    A: () => h
});
var a = n(627968),
    i = n(64700),
    l = n(397927),
    r = n(155718),
    s = n(975807),
    c = n(602859),
    o = n(194362),
    d = n(95035),
    u = n(409626),
    m = n(652215),
    x = n(985018);

function h(e) {
    let {
        application: t,
        trackAction: n
    } = e, h = (0, c.s)("GameProfile"), f = i.useCallback(async () => {
        n(u.Ws.ClaimGame);
        let e = await (0, o.a)(m.dSh.DEVELOPER_PORTAL_APPLICATIONS_GAME_IDENTITY);
        (0, s.A)(e)
    }, [n]), g = i.useCallback(e => (0, a.jsx)(d.A, {
        onClick: f,
        children: e
    }), [f]);
    return !h || t.linkedGames?.some(e => e.type === r.Mh.OFFICIAL) ? null : (0, a.jsx)(l.Text, {
        variant: "text-xs/normal",
        color: "text-muted",
        children: x.intl.format(x.t.KAjfKl, {
            claimLink: g
        })
    })
}