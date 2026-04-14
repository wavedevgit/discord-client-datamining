/** chunk id: 918085 params = (module,exports,require) **/
n.d(t, {
    A: () => C
});
var i = n(627968),
    l = n(64700),
    s = n(503698),
    r = n.n(s),
    a = n(714384),
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
class f extends l.PureComponent {
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
            isMouseOver: l,
            showBuyInline: s
        } = this.props, r = (s || !t.requiresPayment) && !e;
        return null != n ? n() : (0, i.jsxs)("div", {
            className: x.ED,
            children: [(0, i.jsx)(o.A, {
                type: o.A.Types.DIRECTORY_TILE,
                sku: t,
                inLibrary: e,
                className: r && l ? x.ae : x.Ek
            }), (0, i.jsx)(a.E, {
                systems: [A.uje.WINDOWS],
                className: x.iD
            }), r ? (0, i.jsx)("div", {
                children: "deprecated!"
            }) : null]
        })
    };
    renderMedia = () => {
        let {
            playing: e,
            muted: t,
            showMediaPlaceholder: n,
            onToggleMute: s,
            sku: a,
            isHorizontal: o,
            storeListing: p
        } = this.props;
        return (0, _.bF)(a) ? (0, i.jsx)(m.e, {
            sku: a,
            shape: "custom",
            containerClassName: x.A$,
            backgroundImageClassName: x.iZ,
            foregroundImageClassName: x.O7
        }) : (0, i.jsxs)(l.Fragment, {
            children: [(0, i.jsx)(u.A, {
                className: r()(x.H1, {
                    [x.ZC]: o
                }),
                video: null != p.previewVideo ? (0, h.YE)(a.applicationId, p.previewVideo) : void 0,
                image: null != p.thumbnail ? (0, h.YE)(a.applicationId, p.thumbnail, 600) : void 0,
                title: a.name,
                playing: e,
                muted: t,
                placeholder: n,
                onToggleMute: s,
                splashClassName: x.ZI,
                splashPlaceholderClassName: x.NB
            }), a.exclusive ? (0, i.jsx)(c.A, {
                className: r()(x.LJ, {
                    [x.V9]: e
                })
            }) : a.isTheGameAwardsWinner ? (0, i.jsx)(d.A, {
                className: r()(x.LJ, {
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
            className: l,
            renderCustomTagline: s,
            renderCustomTitle: r,
            renderCustomMedia: a,
            isEmbed: o
        } = this.props, d = o ? p.ug : g.A;
        return (0, i.jsx)(d, {
            className: l,
            renderMedia: null != a ? a : this.renderMedia,
            renderTitle: null != r ? r : () => e.name,
            renderTagline: null != s ? s : () => t.tagline,
            renderActions: this.renderActions,
            isHorizontal: n
        })
    }
}
let C = f