/** chunk id: 918085 params = (module,exports,require) **/
n.d(t, {
    A: () => C
});
var i = n(627968),
    a = n(64700),
    l = n(503698),
    s = n.n(l),
    r = n(714384),
    o = n(740916),
    d = n(191931),
    c = n(886352),
    u = n(132696),
    _ = n(871123),
    m = n(366523),
    h = n(371794),
    p = n(863574),
    g = n(622413),
    A = n(652215),
    x = n(297064);
class f extends a.PureComponent {
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
            isMouseOver: a,
            showBuyInline: l
        } = this.props, s = (l || !t.requiresPayment) && !e;
        return null != n ? n() : (0, i.jsxs)("div", {
            className: x.ED,
            children: [(0, i.jsx)(o.A, {
                type: o.A.Types.DIRECTORY_TILE,
                sku: t,
                inLibrary: e,
                className: s && a ? x.ae : x.Ek
            }), (0, i.jsx)(r.E, {
                systems: [A.uje.WINDOWS],
                className: x.iD
            }), s ? (0, i.jsx)("div", {
                children: "deprecated!"
            }) : null]
        })
    };
    renderMedia = () => {
        let {
            playing: e,
            muted: t,
            showMediaPlaceholder: n,
            onToggleMute: l,
            sku: r,
            isHorizontal: o,
            storeListing: p
        } = this.props;
        return (0, _.bF)(r) ? (0, i.jsx)(m.e, {
            sku: r,
            shape: "custom",
            containerClassName: x.A$,
            backgroundImageClassName: x.iZ,
            foregroundImageClassName: x.O7
        }) : (0, i.jsxs)(a.Fragment, {
            children: [(0, i.jsx)(u.A, {
                className: s()(x.H1, {
                    [x.ZC]: o
                }),
                video: null != p.previewVideo ? (0, h.YE)(r.applicationId, p.previewVideo) : void 0,
                image: null != p.thumbnail ? (0, h.YE)(r.applicationId, p.thumbnail, 600) : void 0,
                title: r.name,
                playing: e,
                muted: t,
                placeholder: n,
                onToggleMute: l,
                splashClassName: x.ZI,
                splashPlaceholderClassName: x.NB
            }), r.exclusive ? (0, i.jsx)(c.A, {
                className: s()(x.LJ, {
                    [x.V9]: e
                })
            }) : r.isTheGameAwardsWinner ? (0, i.jsx)(d.A, {
                className: s()(x.LJ, {
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
            className: a,
            renderCustomTagline: l,
            renderCustomTitle: s,
            renderCustomMedia: r,
            isEmbed: o
        } = this.props, d = o ? p.ug : g.A;
        return (0, i.jsx)(d, {
            className: a,
            renderMedia: null != r ? r : this.renderMedia,
            renderTitle: null != s ? s : () => e.name,
            renderTagline: null != l ? l : () => t.tagline,
            renderActions: this.renderActions,
            isHorizontal: n
        })
    }
}
let C = f