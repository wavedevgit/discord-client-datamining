/** chunk id: 814698 params = (module,exports,require) **/
n.d(t, {
    A: () => f
});
var l = n(627968),
    a = n(64700),
    i = n(397927),
    r = n(155718),
    s = n(975807),
    o = n(602859),
    c = n(194362),
    d = n(409626),
    u = n(652215),
    m = n(985018);

function f(e) {
    let {
        application: t,
        trackAction: n
    } = e, f = (0, o.s)("GameProfile"), h = a.useCallback(async () => {
        n(d.Ws.ClaimGame);
        let e = await (0, c.a)(u.dSh.DEVELOPER_PORTAL_APPLICATIONS_GAME_IDENTITY);
        (0, s.A)(e)
    }, [n]), x = a.useCallback(e => (0, l.jsx)(i.MzZ, {
        onClick: h,
        children: e
    }), [h]);
    return !f || t.linkedGames?.some(e => e.type === r.Mh.OFFICIAL) ? null : (0, l.jsx)(i.Text, {
        variant: "text-xs/normal",
        color: "text-muted",
        children: m.intl.format(m.t.KAjfKl, {
            claimLink: x
        })
    })
}