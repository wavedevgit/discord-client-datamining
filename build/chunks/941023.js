/** chunk id: 941023 params = (module,exports,require) **/
"use strict";
i.d(t, {
    A: () => v
});
var n = i(64700),
    s = i(735438),
    a = i.n(s),
    l = i(621466),
    r = i(52133),
    o = i(451988),
    d = i(684013),
    c = i(242286),
    u = i(899699),
    h = i(456797),
    _ = i(723702);
let p = {
        x: 0,
        y: 0
    },
    f = !1;

function m(e) {
    let {
        clientX: t,
        clientY: i
    } = e;
    f = !0, p.x = t, p.y = i
}
let g = new Map;

function A(e, t) {
    if (null == t) g.delete(e), 0 === g.size && (window.removeEventListener("mousemove", m), f = !1);
    else {
        let i = g.get(e);
        if (null != i && (0, r.A)(i.zone, t.zone)) return;
        0 === g.size && window.addEventListener("mousemove", m), g.set(e, t)
    }
    if (_.isPlatformEmbedded)
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
            var i;
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
            }), i = e, x || (i.setClickZoneCallback((e, t, i) => {
                let n = g.get(e);
                null != n && (f || (p.x = t, p.y = i), n.instance.click())
            }), x = !0)
        }
}
let x = !1;
class v extends n.PureComponent {
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
        this.interval.stop(), A(this.zone, null)
    }
    componentDidUpdate(e) {
        let {
            observe: t
        } = this.props;
        t !== e.observe && (t ? this.observeZone() : this.interval.stop())
    }
    render() {
        return n.Children.only(this.props.children)
    }
    observeZone() {
        this.updateZone(), this.interval.start(this.props.observeInterval, this.updateZone)
    }
    updateZone = () => {
        let e = this.props.contentDomRef.current;
        if ((0, l.vq)(e)) {
            let {
                left: t,
                top: i,
                right: n,
                bottom: s
            } = e.getBoundingClientRect();
            A(this.zone, {
                instance: this,
                zone: {
                    name: this.zone,
                    left: Math.floor(t),
                    top: Math.floor(i),
                    right: Math.ceil(n),
                    bottom: Math.ceil(s)
                }
            })
        }
    };
    click() {
        let e = (0, h._)("click", p.x, p.y);
        (0, h.K)(e, p.x, p.y)
    }
}