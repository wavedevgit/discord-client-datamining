/** chunk id: 428899, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => A
}), n(321073), n(896048);
var r = n(627968),
    i = n(64700),
    l = n(311907),
    a = n(397927),
    s = n(830382),
    o = n(707606),
    c = n(587895),
    u = n(742589),
    d = n(976860),
    p = n(67480),
    h = n(652215),
    f = n(190323);

function g(e, t, n) {
    return t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = n, e
}
class m extends i.PureComponent {
    componentDidMount() {
        let {
            sku: e,
            primarySkuId: t,
            isFetchingPrimarySku: n
        } = this.props;
        null == t || n || null == e || (0, s.EX)(e.applicationId, t)
    }
    render() {
        let {
            sku: e,
            primarySku: t
        } = this.props, n = [], i = null;
        if (null != e) {
            let r = h.BVt.APPLICATION_STORE_LISTING_SKU(e.id, e.slug);
            i = r, null != t && n.push({
                id: h.BVt.APPLICATION_STORE_LISTING_SKU(t.id, t.slug),
                label: t.name
            }), n.push({
                id: r,
                label: e.name
            })
        }
        return (0, r.jsx)(a.BIu, {
            renderCustomBreadcrumb: this.renderCustomBreadcrumb,
            onBreadcrumbClick: this.handleClick,
            breadcrumbs: n,
            activeId: i
        })
    }
    constructor(...e) {
        super(...e), g(this, "handleClick", e => {
            let {
                sku: t
            } = this.props;
            (0, d.pX)(e.id, {
                state: {
                    analyticsSource: {
                        object: h.ZSU.NAVIGATION_LINK,
                        section: h.JJy.NAVIGATION,
                        page: null == t ? h.liQ.STORE_DIRECTORY_BROWSE : h.liQ.STORE_LISTING
                    }
                }
            })
        }), g(this, "renderCustomBreadcrumb", (e, t) => (0, r.jsx)(u.A.Title, {
            className: t ? null : f.Q,
            muted: !t,
            children: e.label
        }))
    }
}
let A = (0, o.A)(l.Ay.connectStores([c.A, p.A], e => {
    let {
        sku: t
    } = e, n = null != t ? c.A.getApplication(t.applicationId) : null, r = null != n && null != n.primarySkuId && n.primarySkuId !== t.id ? n.primarySkuId : null;
    return {
        primarySkuId: r,
        isFetchingPrimarySku: null != r && p.A.isFetching(r),
        primarySku: null != r ? p.A.get(r) : null
    }
})(m))