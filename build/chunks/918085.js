/** chunk id: 918085, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => O
}), n(896048);
var r, i = n(627968),
    l = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(740916),
    c = n(678480),
    u = n(191931),
    d = n(886352),
    p = n(132696),
    m = n(871123),
    f = n(366523),
    g = n(371794),
    _ = n(863574),
    h = n(622413),
    b = n(652215),
    y = n(430317);

function A(e, t, n) {
    return t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = n, e
}
class v extends(r = l.PureComponent) {
    render() {
        let {
            sku: e,
            storeListing: t,
            isHorizontal: n,
            className: r,
            renderCustomTagline: l,
            renderCustomTitle: a,
            renderCustomMedia: s,
            isEmbed: o
        } = this.props, c = o ? _.ug : h.A;
        return (0, i.jsx)(c, {
            className: r,
            renderMedia: null != s ? s : this.renderMedia,
            renderTitle: null != a ? a : () => e.name,
            renderTagline: null != l ? l : () => t.tagline,
            renderActions: this.renderActions,
            isHorizontal: n
        })
    }
    constructor(...e) {
        super(...e), A(this, "renderActions", () => {
            let {
                inLibrary: e,
                sku: t,
                renderCustomActions: n,
                isMouseOver: r,
                showBuyInline: l
            } = this.props, a = (l || !t.requiresPayment) && !e;
            return null != n ? n() : (0, i.jsxs)("div", {
                className: y.ED,
                children: [(0, i.jsx)(o.A, {
                    type: o.A.Types.DIRECTORY_TILE,
                    sku: t,
                    inLibrary: e,
                    className: a && r ? y.ae : y.Ek
                }), (0, i.jsx)(c.E, {
                    systems: [b.uje.WINDOWS],
                    className: y.iD
                }), a ? (0, i.jsx)("div", {
                    children: "deprecated!"
                }) : null]
            })
        }), A(this, "renderMedia", () => {
            let {
                playing: e,
                muted: t,
                showMediaPlaceholder: n,
                onToggleMute: r,
                sku: a,
                isHorizontal: o,
                storeListing: c
            } = this.props;
            return (0, m.bF)(a) ? (0, i.jsx)(f.e, {
                sku: a,
                shape: "custom",
                containerClassName: y.A$,
                backgroundImageClassName: y.iZ,
                foregroundImageClassName: y.O7
            }) : (0, i.jsxs)(l.Fragment, {
                children: [(0, i.jsx)(p.A, {
                    className: s()(y.H1, {
                        [y.ZC]: o
                    }),
                    video: null != c.previewVideo ? (0, g.YE)(a.applicationId, c.previewVideo) : void 0,
                    image: null != c.thumbnail ? (0, g.YE)(a.applicationId, c.thumbnail, 600) : void 0,
                    title: a.name,
                    playing: e,
                    muted: t,
                    placeholder: n,
                    onToggleMute: r,
                    splashClassName: y.ZI,
                    splashPlaceholderClassName: y.NB
                }), a.exclusive ? (0, i.jsx)(d.A, {
                    className: s()(y.LJ, {
                        [y.V9]: e
                    })
                }) : a.isTheGameAwardsWinner ? (0, i.jsx)(u.A, {
                    className: s()(y.LJ, {
                        [y.V9]: e
                    })
                }) : null]
            })
        })
    }
}
A(v, "defaultProps", {
    showMediaPlaceholder: !1,
    isMouseOver: !1,
    showBuyInline: !1,
    isHorizontal: !1,
    isEmbed: !1
});
let O = v