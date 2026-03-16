/** chunk id: 507133 params = (module,exports,require) **/
n.d(t, {
    A: () => u
});
var i = n(627968),
    r = n(64700),
    l = n(397927),
    a = n(442433),
    s = n(297413),
    o = n(235986),
    d = n(144637);
class c extends r.PureComponent {
    handleContextMenu(e, t) {
        (0, a.L3)(e, async () => {
            let {
                default: e
            } = await Promise.all([n.e("97262"), n.e("32418"), n.e("47969")]).then(n.bind(n, 668569));
            return n => (0, i.jsx)(e, {
                ...n,
                user: t
            })
        })
    }
    renderUser(e) {
        return null == e ? null : (0, i.jsxs)(o.A, {
            className: d.kQ,
            align: o.A.Align.CENTER,
            onContextMenu: t => {
                null != e && this.handleContextMenu(t, e)
            },
            children: [(0, i.jsx)(l.euF, {
                src: e.getAvatarURL(void 0, 24),
                "aria-label": e.username,
                size: l._3J.SIZE_24,
                className: d.my
            }), (0, i.jsx)(s.A, {
                user: e,
                className: d.Tc,
                usernameClass: d.Xh,
                discriminatorClass: d.D2
            })]
        }, e.id)
    }
    render() {
        let {
            party: e,
            header: t
        } = this.props, n = e.map(e => this.renderUser(e));
        return (0, i.jsxs)("div", {
            className: d.Gh,
            children: [(0, i.jsx)("div", {
                className: d.wx,
                children: t
            }), (0, i.jsx)(l.IpV, {
                className: d.Qs,
                fade: !0,
                children: n
            })]
        })
    }
}
let u = c