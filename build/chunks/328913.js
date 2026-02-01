/** chunk id: 328913, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => v
}), n(896048);
var i, r = n(627968),
    s = n(64700),
    l = n(503698),
    o = n.n(l),
    a = n(311907),
    c = n(685603),
    d = n(467627),
    u = n(967198),
    h = n(855790),
    p = n(335022),
    f = n(714977),
    g = n(266244),
    y = n(439817),
    A = n(985018),
    m = n(90901);

function b(e, t, n) {
    return t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = n, e
}

function O(e) {
    let {
        closePopout: t
    } = e;
    return (0, r.jsx)(f.A, {
        onClose: t
    })
}
class _ extends(i = s.PureComponent) {
    render() {
        let {
            selectedGuildId: e,
            locked: t,
            contained: n,
            className: i
        } = this.props, s = null != e ? (0, r.jsx)(p.A, {
            guildId: e,
            onDragStart: this.onDragStart
        }, e) : (0, r.jsx)(y.A, {
            title: A.intl.string(A.t.YUU0RF),
            renderSettings: O,
            onDragStart: this.onDragStart,
            children: (0, r.jsx)(g.A, {})
        }), l = n ? "div" : h.Ay;
        return (0, r.jsxs)(l, {
            className: o()(m.E, {
                [m.H]: !n
            }, i),
            children: [(0, r.jsx)(d.A, {
                isOverlay: !0,
                disableAppDownload: !0,
                isVisible: !t
            }), s]
        })
    }
    constructor(...e) {
        super(...e), b(this, "onDragStart", e => {
            let {
                dragStart: t
            } = this.props;
            t(c.P.MOVE, e.clientX, e.clientY)
        })
    }
}
b(_, "defaultProps", {
    contained: !1
});
let v = a.Ay.connectStores([u.A], () => ({
    selectedGuildId: u.A.getGuildId()
}))(_)