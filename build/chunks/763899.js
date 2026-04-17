/** chunk id: 763899 params = (module,exports,require) **/
n.d(t, {
    A: () => u
});
var i = n(627968),
    a = n(351405),
    l = n(793574),
    r = n(688810),
    s = n(627363),
    o = n(611010),
    d = n(443795),
    c = n(272984);
let u = e => {
    let {
        channel: t,
        message: n,
        hideParty: u
    } = e, {
        analyticsLocations: _
    } = (0, r.Ay)(l.A.INVITE_EMBED), m = null != n.application ? o.Ay.createFromServer(n.application) : null != n.activity && null != n.activity.party_id && (0, c.pH)(n.activity.party_id) ? d.HT : void 0, {
        data: h
    } = (0, s.YY)(n.application?.id), p = h ?? m;
    return null == p ? null : (0, i.jsx)(a.P, {
        app: p,
        channel: t,
        message: n,
        hideParty: u,
        analyticsLocations: _
    })
}