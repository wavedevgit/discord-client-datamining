/** chunk id: 848752 params = (module,exports,require) **/
"use strict";
n.d(t, {
    Ay: () => h,
    Oj: () => m,
    Q8: () => _
});
var a = n(627968),
    l = n(64700),
    s = n(503698),
    r = n.n(s),
    i = n(397927),
    o = n(532197),
    c = n(627988);
let d = {
    CENTER: c.Hu,
    LEFT: c.Vl
};
class u extends l.PureComponent {
    static Align = d;
    static defaultProps = {
        scrollToPadding: {
            top: 0,
            left: 0,
            bottom: 0,
            right: 0
        },
        align: d.CENTER
    };
    _scrollerRef = null;
    _paginationItemRefs = [];
    componentDidUpdate(e) {
        let {
            selectedIndex: t
        } = this.props;
        e.selectedIndex !== t && this.handleSelectedIndexChange(t)
    }
    handleSetScrollerRef = e => {
        this._scrollerRef = e
    };
    handleSelectedIndexChange = e => {
        let t = this._scrollerRef;
        if (null == t) return;
        let n = this._paginationItemRefs[e];
        null != n && t.scrollIntoViewNode({
            node: n,
            animate: !0,
            padding: this.props.scrollToPadding
        })
    };
    handlePageClick = e => {
        let {
            onSetItem: t
        } = this.props;
        t(e)
    };
    render() {
        let {
            renderItem: e,
            items: t,
            vertical: n,
            paginationContainerClass: s,
            align: o
        } = this.props, d = n ? c.XA : c.BU;
        return (0, a.jsx)(i.GtU, {
            orientation: n ? "vertical" : "horizontal",
            className: r()(d, s, o),
            ref: this.handleSetScrollerRef,
            children: t.map((t, n) => l.cloneElement(e(t, n), {
                onClick: () => this.handlePageClick(n),
                key: n,
                ref: e => {
                    this._paginationItemRefs[n] = e
                }
            }))
        })
    }
}
class _ extends l.PureComponent {
    handlePrevClick = e => {
        e.stopPropagation(), e.preventDefault();
        let {
            onClick: t
        } = this.props;
        t?.(e)
    };
    render() {
        let {
            className: e
        } = this.props;
        return (0, a.jsx)(i.DUT, {
            className: r()(c.t1, e),
            onClick: this.handlePrevClick,
            children: (0, a.jsx)(o.A, {
                className: c.UE,
                direction: o.A.Directions.LEFT
            })
        })
    }
}
class m extends l.PureComponent {
    handleNextClick = e => {
        e.stopPropagation(), e.preventDefault();
        let {
            onClick: t
        } = this.props;
        t?.(e)
    };
    render() {
        let {
            className: e
        } = this.props;
        return (0, a.jsx)(i.DUT, {
            className: r()(c.XS, e),
            onClick: this.handleNextClick,
            children: (0, a.jsx)(o.A, {
                className: c.UE,
                direction: o.A.Directions.RIGHT
            })
        })
    }
}
let h = u