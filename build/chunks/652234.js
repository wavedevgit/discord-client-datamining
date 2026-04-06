/** chunk id: 652234 params = (module,exports,require) **/
n.d(t, {
    A: () => I
});
var i = n(627968),
    a = n(64700),
    r = n(735438),
    l = n.n(r),
    s = n(311907),
    o = n(442433),
    d = n(504337),
    c = n(655116),
    u = n(629016),
    A = n(994500),
    h = n(287809),
    _ = n(403362),
    m = n(901133),
    p = n(507133),
    g = n(985018);
class E extends a.PureComponent {
    hasParty(e) {
        return e.length > 1
    }
    handleStopListening() {
        (0, d.A)()
    }
    handleUserContextMenu = (e, t) => {
        (0, o.L3)(e, async () => {
            let {
                default: e
            } = await Promise.all([n.e("97262"), n.e("32418"), n.e("54631")]).then(n.bind(n, 668569));
            return n => (0, i.jsx)(e, {
                ...n,
                user: t
            })
        })
    };
    renderOverflowPopout = () => {
        let {
            party: e
        } = this.props;
        return (0, i.jsx)(p.A, {
            party: e,
            header: g.intl.formatToPlainString(g.t.I9et1z, {
                count: e.length
            })
        })
    };
    render() {
        let {
            currentUser: e,
            host: t,
            party: n
        } = this.props;
        return this.hasParty(n) && null != e ? (0, i.jsx)(m.A, {
            currentUser: e,
            host: t,
            party: n,
            renderOverflowPopout: this.renderOverflowPopout,
            onStopListening: this.handleStopListening,
            onUserContextMenu: this.handleUserContextMenu
        }) : null
    }
}
let I = s.Ay.connectStores([c.A, h.default, A.A, u.A], () => {
    let e, t, n = c.A.getSyncingWith(),
        i = c.A.getActivity(),
        a = h.default.getCurrentUser(),
        r = [];
    return null != n ? (e = h.default.getUser(n.userId), t = n.partyId) : null != i && null != i.party && null != i.party.id && (e = a, t = i.party.id), null != t && (r = l()(Array.from(u.A.getParty(t) ?? [])).map(e => h.default.getUser(e)).filter(_.Vq).orderBy([t => null == e || e.id === t.id, e => A.A.isFriend(e.id)], ["desc", "desc"]).value()), {
        currentUser: a,
        host: e,
        party: r
    }
})(E)