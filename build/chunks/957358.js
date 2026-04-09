/** chunk id: 957358 params = (module,exports,require) **/
n.d(t, {
    A: () => c
});
var i = n(627968),
    a = n(64700),
    r = n(735438),
    l = n.n(r),
    s = n(998304),
    o = n(571470);
class d extends a.PureComponent {
    dataChangedAt;
    fillColor;
    maxValue;
    canvas = a.createRef();
    animationFrameRequestId;
    static defaultProps = {
        animate: !0
    };
    onDataUpdate(e, t) {
        let {
            maxValue: n,
            data: i,
            animate: a
        } = this.props, r = null == e || e.data !== t.data && !l().isEqual(e.data, t.data);
        if (r && (this.dataChangedAt = performance.now(), this.maxValue = null != n ? n : Math.max(...i)), r || null == e || !e.animate && a || e.color !== this.props.color) {
            let e = s.E2(this.props.color);
            this.fillColor = `rgba(${e.r}, ${e.g}, ${e.b}, 0.5)`, window.cancelAnimationFrame(this.animationFrameRequestId), this.animationFrameRequestId = window.requestAnimationFrame(this.updateAnimation)
        }
    }
    componentDidMount() {
        this.animationFrameRequestId = 0, this.onDataUpdate(null, this.props)
    }
    componentDidUpdate(e) {
        this.onDataUpdate(e, this.props)
    }
    componentWillUnmount() {
        window.cancelAnimationFrame(this.animationFrameRequestId), this.animationFrameRequestId = 0
    }
    updateAnimation = e => {
        let t, n, i = this.canvas.current;
        if (null == i) return;
        let {
            data: a,
            updateInterval: r,
            color: l,
            numUpdatesToShow: o,
            lineWidth: d,
            animate: c,
            gradientStopColor: u
        } = this.props;
        if (a.length < 2) return;
        let A = Math.max(Math.min((e - this.dataChangedAt) / r, 1), 0),
            _ = i.getContext("2d"),
            h = this.maxValue;
        _.strokeStyle = l, _.lineWidth = d;
        let m = i.height - _.lineWidth,
            g = _.createLinearGradient(0, 0, 0, m);
        if (null != u) g.addColorStop(0, u);
        else {
            let {
                r: e,
                g: t,
                b: n
            } = s.E2(l);
            g.addColorStop(0, `rgba(${e}, ${t}, ${n}, 0)`)
        }
        g.addColorStop(1, this.fillColor), _.fillStyle = g;
        let p = a.length >= o ? o : a.length;
        _.setTransform(1, 0, 0, -1, 0, i.height), _.clearRect(0, 0, i.width, i.height), _.translate(0, .5 * _.lineWidth);
        let E = Math.floor(i.width / (p - 3)),
            I = .5 * E;
        _.translate(E - E * A, 0), _.beginPath();
        let f = -E;
        a.forEach((e, i) => {
            t = {
                x: f,
                y: m * e / h
            }, 0 === i ? _.moveTo(t.x, t.y) : _.bezierCurveTo(n.x + I, n.y, t.x - I, t.y, t.x, t.y), n = t, f += E
        }), _.stroke(), _.lineTo(f - E, 0), _.lineTo(0, 0), _.fill(), c && A < 1 && (this.animationFrameRequestId = window.requestAnimationFrame(this.updateAnimation))
    };
    render() {
        let {
            className: e,
            pixelWidth: t,
            pixelHeight: n
        } = this.props;
        return (0, i.jsx)("div", {
            className: e,
            children: (0, i.jsx)("canvas", {
                ref: this.canvas,
                className: o.J,
                width: t,
                height: n
            })
        })
    }
}
let c = d