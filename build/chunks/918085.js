/** chunk id: 918085 params = (module,exports,require) **/
n.d(t, {
    A: () => C
});
var i = n(627968),
    r = n(64700),
    a = n(503698),
    l = n.n(a),
    s = n(740916),
    o = n(678480),
    d = n(191931),
    c = n(886352),
    u = n(132696),
    _ = n(871123),
    m = n(366523),
    h = n(371794),
    p = n(863574),
    g = n(622413),
    A = n(652215),
    x = n(206331);
class f extends r.PureComponent {
    static defaultProps = {
        showMediaPlaceholder: !1,
        isMouseOver: !1,
        showBuyInline: !1,
        isHorizontal: !1,
        isEmbed: !1
    };
    renderActions = () => {
        let {
            inLibrary: e,
            sku: t,
            renderCustomActions: n,
            isMouseOver: r,
            showBuyInline: a
        } = this.props, l = (a || !t.requiresPayment) && !e;
        return null != n ? n() : (0, i.jsxs)("div", {
            className: x.ED,
            children: [(0, i.jsx)(s.A, {
                type: s.A.Types.DIRECTORY_TILE,
                sku: t,
                inLibrary: e,
                className: l && r ? x.ae : x.Ek
            }), (0, i.jsx)(o.E, {
                systems: [A.uje.WINDOWS],
                className: x.iD
            }), l ? (0, i.jsx)("div", {
                children: "deprecated!"
            }) : null]
        })
    };
    renderMedia = () => {
        let {
            playing: e,
            muted: t,
            showMediaPlaceholder: n,
            onToggleMute: a,
            sku: s,
            isHorizontal: o,
            storeListing: p
        } = this.props;
        return (0, _.bF)(s) ? (0, i.jsx)(m.e, {
            sku: s,
            shape: "custom",
            containerClassName: x.A$,
            backgroundImageClassName: x.iZ,
            foregroundImageClassName: x.O7
        }) : (0, i.jsxs)(r.Fragment, {
            children: [(0, i.jsx)(u.A, {
                className: l()(x.H1, {
                    [x.ZC]: o
                }),
                video: null != p.previewVideo ? (0, h.YE)(s.applicationId, p.previewVideo) : void 0,
                image: null != p.thumbnail ? (0, h.YE)(s.applicationId, p.thumbnail, 600) : void 0,
                title: s.name,
                playing: e,
                muted: t,
                placeholder: n,
                onToggleMute: a,
                splashClassName: x.ZI,
                splashPlaceholderClassName: x.NB
            }), s.exclusive ? (0, i.jsx)(c.A, {
                className: l()(x.LJ, {
                    [x.V9]: e
                })
            }) : s.isTheGameAwardsWinner ? (0, i.jsx)(d.A, {
                className: l()(x.LJ, {
                    [x.V9]: e
                })
            }) : null]
        })
    };
    render() {
        let {
            sku: e,
            storeListing: t,
            isHorizontal: n,
            className: r,
            renderCustomTagline: a,
            renderCustomTitle: l,
            renderCustomMedia: s,
            isEmbed: o
        } = this.props, d = o ? p.ug : g.A;
        return (0, i.jsx)(d, {
            className: r,
            renderMedia: null != s ? s : this.renderMedia,
            renderTitle: null != l ? l : () => e.name,
            renderTagline: null != a ? a : () => t.tagline,
            renderActions: this.renderActions,
            isHorizontal: n
        })
    }
}
let C = f