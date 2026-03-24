/** chunk id: 814698 params = (module,exports,require) **/
n.d(t, {
    A: () => _
});
var a = n(627968),
    l = n(64700),
    i = n(397927),
    r = n(155718),
    s = n(975807),
    o = n(602859),
    c = n(194362),
    d = n(95035),
    u = n(409626),
    m = n(652215),
    x = n(985018);

function _(e) {
    let {
        application: t,
        trackAction: n
    } = e, _ = (0, o.s)("GameProfile"), f = l.useCallback(async () => {
        n(u.Ws.ClaimGame);
        let e = await (0, c.a)(m.dSh.DEVELOPER_PORTAL_APPLICATIONS_GAME_IDENTITY);
        (0, s.A)(e)
    }, [n]), g = l.useCallback(e => (0, a.jsx)(d.A, {
        onClick: f,
        children: e
    }), [f]);
    return !_ || t.linkedGames?.some(e => e.type === r.Mh.OFFICIAL) ? null : (0, a.jsx)(i.Text, {
        variant: "text-xs/normal",
        color: "text-muted",
        children: x.intl.format(x.t.KAjfKl, {
            claimLink: g
        })
    })
}