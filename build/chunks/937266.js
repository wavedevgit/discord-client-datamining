/** chunk id: 937266 params = (module,exports,require) **/
n.d(t, {
    A: () => S,
    k: () => j
});
var i = n(627968),
    l = n(64700),
    s = n(936504),
    r = n(158954),
    a = n(311907),
    o = n(800342),
    d = n(820284),
    c = n(73861),
    u = n(740916),
    _ = n(918085),
    m = n(863574),
    h = n(707606),
    p = n(456412),
    g = n(587895),
    A = n(976860),
    x = n(189081),
    f = n(67480),
    C = n(328968),
    E = n(652215),
    I = n(985018),
    v = n(657881);
class b extends l.Component {
    static defaultProps = {
        renderFallback: E.tEg
    };
    state = {
        playing: !1,
        muted: !0
    };
    get analyticsLocation() {
        let {
            analyticsContext: {
                location: e
            },
            analyticsSection: t
        } = this.props;
        return {
            ...e,
            section: null != t ? t : E.JJy.APPLICATION_EMBED,
            object: E.ZSU.CARD
        }
    }
    componentDidMount() {
        let {
            sku: e,
            skuId: t,
            storeListing: n
        } = this.props;
        (null == e || null == n) && (0, o.QB)(t)
    }
    handleToggleMute = () => {
        this.setState({
            muted: !this.state.muted
        })
    };
    handleMouseEnter = () => {
        this.setState({
            playing: !0
        })
    };
    handleMouseLeave = () => {
        this.setState({
            playing: !1
        })
    };
    handleActionButtonClick = e => e.preventDefault();
    handleBuyButtonClick = e => e.preventDefault();
    handleLinkClick = e => {
        let {
            onEmbedClick: t
        } = this.props;
        null != t && t(e)
    };
    renderViewInStoreButton() {
        return (0, i.jsx)("div", {
            className: v.h,
            children: (0, i.jsx)(r.$nd, {
                role: "link",
                variant: "active",
                size: "sm",
                text: I.intl.string(I.t["W+NB90"]),
                onClick: () => {
                    (0, A.pX)(E.BVt.APPLICATION_STORE)
                }
            })
        })
    }
    renderApplicationTile = (e, t) => {
        let {
            inLibrary: n,
            width: l,
            renderCustomTitle: s,
            renderCustomTagline: r,
            renderCustomMedia: a
        } = this.props, {
            playing: o,
            muted: d
        } = this.state, c = l > m.Tm;
        return (0, i.jsx)(_.A, {
            sku: e,
            storeListing: t,
            playing: o,
            muted: d,
            inLibrary: n,
            onToggleMute: this.handleToggleMute,
            renderCustomActions: () => this.renderActions(e),
            renderCustomTitle: s,
            renderCustomTagline: r,
            renderCustomMedia: a,
            isHorizontal: c,
            isEmbed: !0
        })
    };
    renderActions = e => {
        let {
            inLibrary: t,
            application: n,
            skuId: l,
            libraryApplication: s,
            renderCustomActions: r
        } = this.props;
        if (null != r) return (0, i.jsx)("div", {
            className: v.i,
            children: r()
        });
        if (null == n) return null;
        let a = null != n && n.primarySkuId === l,
            o = null != s && s.hasFlag(E.hM6.HIDDEN);
        return (0, i.jsxs)("div", {
            className: v.i,
            children: [!a || o ? this.renderViewInStoreButton() : (0, i.jsx)(c.A, {
                application: n,
                disabledVariant: "primary",
                size: "sm",
                className: v.h,
                source: E.ThZ.MESSAGE_EMBED,
                onClick: this.handleActionButtonClick
            }), t && !o || e.premium ? null : (0, i.jsx)(u.A, {
                type: u.A.Types.EMBED,
                sku: e,
                inLibrary: !1
            })]
        })
    };
    render() {
        let {
            sku: e,
            storeListing: t,
            width: n,
            fetchFailed: l,
            renderFallback: r
        } = this.props, a = n > m.Tm;
        return null == e || null == t ? l ? r() : (0, i.jsx)(m.Wb, {
            isHorizontal: a
        }) : e.productLine === E.EZt.COLLECTIBLES ? (0, i.jsx)(d.A, {
            section: E.JJy.APPLICATION_EMBED,
            children: this.renderApplicationTile(e, t)
        }) : (0, i.jsx)(d.A, {
            section: E.JJy.APPLICATION_EMBED,
            children: (0, i.jsx)(s.N_, {
                onClick: this.handleLinkClick,
                to: E.BVt.APPLICATION_STORE,
                onMouseEnter: this.handleMouseEnter,
                onMouseLeave: this.handleMouseLeave,
                children: this.renderApplicationTile(e, t)
            })
        })
    }
}
let T = [f.A, x.A, C.A];

function N(e) {
    let {
        skuId: t
    } = e, n = f.A.get(t), i = null != n ? g.A.getApplication(n.applicationId) : null;
    return {
        sku: n,
        application: i,
        fetchFailed: f.A.didFetchingSkuFail(t),
        inLibrary: null != n && x.A.hasApplication(n.applicationId, n.applicationId, !0),
        storeListing: null != n ? C.A.getForSKU(n.id) : null,
        libraryApplication: null != n ? x.A.getLibraryApplication(n.applicationId, n.applicationId, !0) : null
    }
}
let y = (0, p.A)((0, h.A)(b)),
    S = a.Ay.connectStores(T, N)(y),
    j = (0, h.A)(a.Ay.connectStores(T, N)(b))