/** Chunk was on 67851 **/
/** chunk id: 848752, original params: e,t,n (module,exports,require) **/
n.d(t, {
    Ay: () => h,
    Oj: () => p,
    Q8: () => b
}), n(896048);
var r, l = n(627968),
    a = n(64700),
    o = n(503698),
    i = n.n(o),
    s = n(397927),
    c = n(532197),
    d = n(331026);

function u(e, t, n) {
    return t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = n, e
}
let _ = {
    CENTER: d.Hu,
    LEFT: d.Vl
};
class m extends(r = a.PureComponent) {
    componentDidUpdate(e) {
        let {
            selectedIndex: t
        } = this.props;
        e.selectedIndex !== t && this.handleSelectedIndexChange(t)
    }
    render() {
        let {
            renderItem: e,
            items: t,
            vertical: n,
            paginationContainerClass: r,
            align: o
        } = this.props, c = n ? d.XA : d.BU;
        return (0, l.jsx)(s.GtU, {
            orientation: n ? "vertical" : "horizontal",
            className: i()(c, r, o),
            ref: this.handleSetScrollerRef,
            children: t.map((t, n) => a.cloneElement(e(t, n), {
                onClick: () => this.handlePageClick(n),
                key: n,
                ref: e => {
                    this._paginationItemRefs[n] = e
                }
            }))
        })
    }
    constructor(...e) {
        super(...e), u(this, "_scrollerRef", null), u(this, "_paginationItemRefs", []), u(this, "handleSetScrollerRef", e => {
            this._scrollerRef = e
        }), u(this, "handleSelectedIndexChange", e => {
            let t = this._scrollerRef;
            if (null == t) return;
            let n = this._paginationItemRefs[e];
            null != n && t.scrollIntoViewNode({
                node: n,
                animate: !0,
                padding: this.props.scrollToPadding
            })
        }), u(this, "handlePageClick", e => {
            let {
                onSetItem: t
            } = this.props;
            t(e)
        })
    }
}
u(m, "Align", _), u(m, "defaultProps", {
    scrollToPadding: {
        top: 0,
        left: 0,
        bottom: 0,
        right: 0
    },
    align: _.CENTER
});
class b extends a.PureComponent {
    render() {
        let {
            className: e
        } = this.props;
        return (0, l.jsx)(s.DUT, {
            className: i()(d.t1, e),
            onClick: this.handlePrevClick,
            children: (0, l.jsx)(c.A, {
                className: d.UE,
                direction: c.A.Directions.LEFT
            })
        })
    }
    constructor(...e) {
        super(...e), u(this, "handlePrevClick", e => {
            e.stopPropagation(), e.preventDefault();
            let {
                onClick: t
            } = this.props;
            null == t || t(e)
        })
    }
}
class p extends a.PureComponent {
    render() {
        let {
            className: e
        } = this.props;
        return (0, l.jsx)(s.DUT, {
            className: i()(d.XS, e),
            onClick: this.handleNextClick,
            children: (0, l.jsx)(c.A, {
                className: d.UE,
                direction: c.A.Directions.RIGHT
            })
        })
    }
    constructor(...e) {
        super(...e), u(this, "handleNextClick", e => {
            e.stopPropagation(), e.preventDefault();
            let {
                onClick: t
            } = this.props;
            null == t || t(e)
        })
    }
}
let h = m