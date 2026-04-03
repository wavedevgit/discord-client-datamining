/** chunk id: 941023 params = (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => E
});
var i = n(64700),
    s = n(735438),
    a = n.n(s),
    l = n(621466),
    r = n(52133),
    o = n(451988),
    d = n(684013),
    c = n(242286),
    u = n(899699),
    h = n(456797),
    p = n(723702);
let f = {
        x: 0,
        y: 0
    },
    A = !1;

function _(e) {
    let {
        clientX: t,
        clientY: n
    } = e;
    A = !0, f.x = t, f.y = n
}
let g = new Map;

function m(e, t) {
    if (null == t) g.delete(e), 0 === g.size && (window.removeEventListener("mousemove", _), A = !1);
    else {
        let n = g.get(e);
        if (null != n && (0, r.A)(n.zone, t.zone)) return;
        0 === g.size && window.addEventListener("mousemove", _), g.set(e, t)
    }
    if (p.isPlatformEmbedded)
        if (c.default.isCurrentPidOutOfProcess()) {
            let e = Array.from(g.values()).map(e => {
                let {
                    zone: t
                } = e;
                return {
                    name: t.name,
                    left: t.left / window.innerWidth,
                    top: t.top / window.innerHeight,
                    right: t.right / window.innerWidth,
                    bottom: t.bottom / window.innerHeight * 1.5
                }
            });
            d.A.setClickZones(e)
        } else {
            var n;
            let e = (0, u.m)();
            if (null == e) return;
            e.broadcastCommand({
                message: "set_click_zones",
                zones: Array.from(g.values()).map(e => {
                    let {
                        zone: t
                    } = e;
                    return t
                })
            }), n = e, x || (n.setClickZoneCallback((e, t, n) => {
                let i = g.get(e);
                null != i && (A || (f.x = t, f.y = n), i.instance.click())
            }), x = !0)
        }
}
let x = !1;
class E extends i.PureComponent {
    static defaultProps = {
        observe: !0,
        observeInterval: 1e3
    };
    zone = a().uniqueId("ClickArea");
    interval = new o.IX;
    componentDidMount() {
        this.props.observe ? this.observeZone() : this.updateZone()
    }
    componentWillUnmount() {
        this.interval.stop(), m(this.zone, null)
    }
    componentDidUpdate(e) {
        let {
            observe: t
        } = this.props;
        t !== e.observe && (t ? this.observeZone() : this.interval.stop())
    }
    render() {
        return i.Children.only(this.props.children)
    }
    observeZone() {
        this.updateZone(), this.interval.start(this.props.observeInterval, this.updateZone)
    }
    updateZone = () => {
        let e = this.props.contentDomRef.current;
        if ((0, l.vq)(e)) {
            let {
                left: t,
                top: n,
                right: i,
                bottom: s
            } = e.getBoundingClientRect();
            m(this.zone, {
                instance: this,
                zone: {
                    name: this.zone,
                    left: Math.floor(t),
                    top: Math.floor(n),
                    right: Math.ceil(i),
                    bottom: Math.ceil(s)
                }
            })
        }
    };
    click() {
        let e = (0, h._)("click", f.x, f.y);
        (0, h.K)(e, f.x, f.y)
    }
}