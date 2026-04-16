/** chunk id: 452282 params = (module,exports,require) **/
n.d(t, {
    Ay: () => p,
    U3: () => c
});
var i = n(627968),
    r = n(64700),
    a = n(503698),
    l = n.n(a),
    o = n(615300),
    s = n(456412),
    d = n(831077);
let u = {
        tension: 7,
        friction: 5,
        overshootClamping: !0
    },
    h = "center";

function c(e, t) {
    return (e % t + t) % t
}
class m extends r.Component {
    static defaultProps = {
        animate: !0,
        edgeItems: 2,
        align: h,
        gutter: 0,
        hideOverflow: !0
    };
    animatedIndex = new o.A.Value(this.props.currentIndex);
    animatedAlignmentOffset = new o.A.Value(this.getAlignmentOffset(this.props.align));
    animatedOpacity = new o.A.Value(1);
    componentDidMount() {
        this.animatedIndex.setValue(this.props.currentIndex)
    }
    componentDidUpdate(e) {
        let {
            align: t,
            animate: n,
            currentIndex: i,
            items: r,
            width: a
        } = this.props, l = c(i, r.length), s = c(e.currentIndex, r.length);
        (l !== s || r.length !== e.items.length) && this.updateAnimatedIndex(l, s), a !== e.width ? this.animatedAlignmentOffset.setValue(this.getAlignmentOffset(t)) : n && (t !== e.align || l !== s) && o.A.spring(this.animatedAlignmentOffset, {
            ...u,
            toValue: this.getAlignmentOffset(t)
        }).start()
    }
    getAlignmentOffset(e) {
        let {
            width: t,
            itemSize: n,
            currentIndex: i,
            gutter: r,
            items: a
        } = this.props, l = r * c(i, a.length) * 2;
        return e === h ? (t - n.width) / 2 + l : "right" === e ? t - n.width - r + l : r + l
    }
    getCarouselTranslate() {
        let {
            itemSize: e,
            edgeItems: t
        } = this.props;
        return t * (e.width + e.margin)
    }
    getItemStyle = () => {
        let {
            itemSize: {
                width: e,
                margin: t,
                height: n
            }
        } = this.props;
        return {
            flexBasis: e,
            marginRight: t,
            height: n,
            width: e,
            maxWidth: e
        }
    };
    interpolateValueForItem = e => this.animatedIndex.interpolate({
        inputRange: [e - 1, e, e + 1],
        outputRange: [0, 1, 0],
        extrapolate: "clamp"
    });
    animateToIndex(e, t) {
        let {
            animatedIndex: n
        } = this, {
            items: i,
            edgeItems: r
        } = this.props;
        r > 0 && (0 === e && t === i.length - 1 ? n.setValue(-1) : 0 === t && e === i.length - 1 && i.length > 2 && n.setValue(i.length)), o.A.spring(n, {
            ...u,
            toValue: e
        }).start()
    }
    updateAnimatedIndex(e, t) {
        let {
            animatedIndex: n,
            animatedOpacity: i
        } = this, {
            animate: r
        } = this.props;
        r ? this.animateToIndex(e, t) : o.A.timing(i, {
            fromValue: 1,
            toValue: 0,
            duration: 100
        }).start(() => {
            n.setValue(e), o.A.timing(i, {
                fromValue: 0,
                toValue: 1,
                duration: 100
            }).start()
        })
    }
    renderSingleItem() {
        let {
            renderItem: e,
            items: t,
            itemSize: n,
            className: r
        } = this.props;
        return (0, i.jsx)("div", {
            className: l()(d.T7, d.R9, r),
            children: (0, i.jsx)("div", {
                className: d.SF,
                style: {
                    width: n.width,
                    height: n.height
                },
                children: e(t[0], 0)
            })
        })
    }
    renderCarouselItems() {
        let {
            animatedIndex: e,
            animatedAlignmentOffset: t,
            animatedOpacity: n
        } = this, {
            renderItem: r,
            items: a,
            itemSize: l,
            edgeItems: s,
            gutter: u
        } = this.props, {
            margin: h,
            width: c
        } = l, m = this.getCarouselTranslate(), p = this.getItemStyle(), g = (s > 0 ? [...a.slice(-s), ...a, ...a.slice(0, s)] : a).map((e, t) => (0, i.jsx)("div", {
            style: p,
            className: d.AS,
            children: r(e, t - s, this.interpolateValueForItem(t - s))
        }, t));
        return (0, i.jsx)(o.A.div, {
            className: d.Dk,
            style: {
                opacity: n,
                left: o.A.add(e.interpolate({
                    inputRange: [0, 1],
                    outputRange: [-m, -h - c - m - u * (a.length - 1)]
                }), t)
            },
            children: g
        })
    }
    render() {
        let {
            items: e,
            className: t,
            hideOverflow: n
        } = this.props;
        if (e.length <= 0) throw Error("Carousel has no items");
        return 1 === e.length ? this.renderSingleItem() : (0, i.jsx)("div", {
            className: l()({
                [d.R9]: n
            }, t),
            children: this.renderCarouselItems()
        })
    }
}
let p = (0, s.A)(m)