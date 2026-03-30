/** chunk id: 763899 params = (module,exports,require) **/
n.d(t, {
    A: () => u
});
var i = n(627968),
    r = n(351405),
    a = n(793574),
    l = n(688810),
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
    } = (0, l.Ay)(a.A.INVITE_EMBED), m = null != n.application ? o.Ay.createFromServer(n.application) : null != n.activity && null != n.activity.party_id && (0, c.pH)(n.activity.party_id) ? d.HT : void 0, {
        data: h
    } = (0, s.YY)(n.application?.id), p = h ?? m;
    return null == p ? null : (0, i.jsx)(r.P, {
        app: p,
        channel: t,
        message: n,
        hideParty: u,
        analyticsLocations: _
    })
}