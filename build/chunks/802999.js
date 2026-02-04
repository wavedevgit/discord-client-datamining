/** chunk id: 802999, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => y
}), n(896048);
var r = n(627968),
    i = n(64700),
    l = n(503698),
    a = n.n(l),
    s = n(397927),
    o = n(73153),
    c = n(944791),
    u = n(781763),
    d = n(661439),
    p = n(820284),
    h = n(970672),
    f = n(468691),
    g = n(765258),
    m = n(767852),
    A = n(906320),
    _ = n(652215),
    b = n(613057),
    E = n(384435);

function O(e, t, n) {
    return t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = n, e
}
class y extends i.PureComponent {
    componentDidMount() {
        c.I(_.BVt.APPLICATION_LIBRARY), (0, h.h)(b.XK.LIBRARY), o.h.wait(() => (0, u.r)()), (0, d.X)(), null != this._scrollToOnMount && null != this._scrollerRef.current && this.scrollToRow(this._scrollToOnMount, this._scrollToPadding)
    }
    renderToolbar() {
        return (0, r.jsx)(f.A, {})
    }
    render() {
        let {
            includeUpdatesInScroller: e
        } = this.state, t = (0, r.jsx)("div", {
            children: (0, r.jsx)(p.A, {
                section: _.JJy.LIBRARY_INSTALL_MODULE,
                children: (0, r.jsx)(A.A, {
                    onHeightTallerThanHalfViewportChange: this.handleHeightTallerThanHalfViewportChange
                })
            })
        });
        return (0, r.jsxs)(i.Fragment, {
            children: [(0, r.jsx)(g.A, {
                currentRoute: _.BVt.APPLICATION_LIBRARY,
                renderToolbar: this.renderToolbar
            }), e ? null : t, (0, r.jsxs)(s.GtU, {
                className: a()(E.k, E.X),
                ref: this._scrollerRef,
                children: [e ? t : null, (0, r.jsx)(p.A, {
                    section: _.JJy.LIBRARY_APPLICATION_LIST,
                    children: (0, r.jsx)(m.A, {
                        stickyHeader: !e,
                        scrollToRow: this.scrollToRow
                    })
                })]
            })]
        })
    }
    constructor(...e) {
        super(...e), O(this, "_scrollerRef", i.createRef()), O(this, "_scrollToOnMount", void 0), O(this, "_scrollToPadding", 0), O(this, "state", {
            includeUpdatesInScroller: !1
        }), O(this, "handleHeightTallerThanHalfViewportChange", e => {
            this.setState({
                includeUpdatesInScroller: e
            })
        }), O(this, "scrollToRow", (e, t) => {
            let n = this._scrollerRef.current;
            null != n ? (e.focus(), n.scrollIntoViewRect({
                start: t,
                end: t
            }), this._scrollToOnMount = null) : (this._scrollToOnMount = e, this._scrollToPadding = t)
        })
    }
}