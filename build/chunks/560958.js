/** Chunk was on 41031 **/
/** chunk id: 560958, original params: e,t,a (module,exports,require) **/
a.d(t, {
    A: () => o
}), a(896048);
var r = a(627968),
    s = a(64700),
    l = a(134402);

function n(e, t, a) {
    return t in e ? Object.defineProperty(e, t, {
        value: a,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = a, e
}
class i extends s.Component {
    componentDidUpdate(e) {
        let {
            props: {
                location: t,
                shouldScrollToTop: a
            },
            scrollRef: {
                current: r
            }
        } = this;
        null != r && t !== e.location && (null != a ? a(this.props) && (r.scrollTop = 0) : r.scrollTop = 0)
    }
    render() {
        let {
            className: e,
            render: t
        } = this.props;
        return (0, r.jsx)("div", {
            ref: this.scrollRef,
            className: e,
            children: t(this.scrollTo, this.getScrollTop)
        })
    }
    constructor(...e) {
        super(...e), n(this, "scrollRef", s.createRef()), n(this, "scrollTo", e => {
            null != this.scrollRef.current && (this.scrollRef.current.scrollTop = e)
        }), n(this, "getScrollTop", () => null == this.scrollRef.current ? 0 : this.scrollRef.current.scrollTop)
    }
}
let o = (0, l.y)(i)