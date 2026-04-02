/** chunk id: 456540 params = (module,exports,require) **/
n.d(t, {
    A: () => A
});
var i = n(627968);
n(64700);
var a = n(397927),
    l = n(790284),
    r = n(780964),
    s = n(858897),
    o = n(322092),
    d = n(652215),
    c = n(355097),
    u = n(985018);

function A(e) {
    let {
        subscription: t
    } = e;
    return null == t ? null : t.status === d.Dmq.PAST_DUE ? (0, i.jsxs)(i.Fragment, {
        children: [(0, i.jsx)(a.hKd, {
            size: 16
        }), (0, i.jsx)(o.A, {
            message: u.intl.string(u.t.eSuJE2),
            ctaMessage: u.intl.string(u.t.RXsxqb),
            onClick: () => {
                l.A.setState({
                    subsection: c.nR
                }), (0, s.openUserSettings)(r.X.SUBSCRIPTIONS_PANEL)
            }
        })]
    }) : null
}