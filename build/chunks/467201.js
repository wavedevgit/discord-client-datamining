/** chunk id: 467201, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => O
});
var r = n(627968),
    i = n(64700),
    l = n(503698),
    a = n.n(l),
    s = n(311907),
    o = n(804052),
    c = n(783592),
    u = n(351906),
    d = n(287809),
    p = n(609276),
    h = n(67480),
    f = n(328968),
    g = n(371794),
    m = n(681613),
    A = n(110434),
    _ = n(985018),
    b = n(589757);
class E extends i.Component {
    renderReasons(e, t, n) {
        return 0 === e.length && 0 === t.length ? null : (0, r.jsx)("div", {
            className: b.uW,
            children: (0, r.jsxs)("div", {
                className: b.f5,
                children: [e.map(e => (0, r.jsx)("div", {
                    className: b.zA,
                    children: (0, r.jsx)(m.A, {
                        reason: e,
                        hidePersonalInformation: n
                    })
                }, e.type)), t.map(e => (0, r.jsx)("div", {
                    className: b.zA,
                    children: (0, r.jsx)(o.A, {
                        reason: e
                    })
                }, e.type))]
            })
        })
    }
    getReviewToRender() {
        let {
            storeListing: e
        } = this.props;
        return null != e.staffNotes ? {
            type: A.A.Types.STAFF_NOTES,
            staffNotes: e.staffNotes
        } : null
    }
    render() {
        let {
            socialReasons: e,
            nonSocialReasons: t,
            storeListing: n,
            hidePersonalInformation: i,
            className: l
        } = this.props;
        if (0 === e.length && 0 === t.length && null == n.staffNotes) return null;
        let s = this.getReviewToRender();
        return (0, r.jsxs)("div", {
            className: a()(b.zr, l),
            children: [(0, r.jsx)("div", {
                className: b.wx,
                children: _.intl.string(_.t.qABFpX)
            }), this.renderReasons(e, t, i), null != s ? (0, r.jsx)(A.A, {
                data: s,
                className: b.NQ
            }) : null]
        })
    }
}
let O = s.Ay.connectStores([h.A, d.default, f.A, c.A, p.A, u.A], e => {
    let {
        sku: t
    } = e;
    return {
        socialReasons: (0, g.my)(t.id, h.A, d.default, c.A, p.A),
        nonSocialReasons: (0, g.ZH)(t.id, h.A, f.A),
        hidePersonalInformation: u.A.hidePersonalInformation
    }
})(E)