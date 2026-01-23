/** Chunk was on 84018 **/
/** chunk id: 941023, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => v
}), n(896048);
var i, r = n(64700),
    s = n(735438),
    l = n.n(s),
    o = n(621466),
    a = n(52133),
    c = n(451988),
    d = n(684013),
    u = n(242286),
    h = n(899699),
    p = n(456797),
    f = n(723702);

function g(e, t, n) {
    return t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = n, e
}
let y = {
        x: 0,
        y: 0
    },
    A = !1;

function m(e) {
    let {
        clientX: t,
        clientY: n
    } = e;
    A = !0, y.x = t, y.y = n
}
let b = new Map;

function O(e, t) {
    if (null == t) b.delete(e), 0 === b.size && (window.removeEventListener("mousemove", m), A = !1);
    else {
        let n = b.get(e);
        if (null != n && (0, a.A)(n.zone, t.zone)) return;
        0 === b.size && window.addEventListener("mousemove", m), b.set(e, t)
    }
    if (f.isPlatformEmbedded)
        if (u.default.isCurrentPidOutOfProcess()) {
            let e = Array.from(b.values()).map(e => {
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
            let e = (0, h.m)();
            if (null == e) return;
            e.broadcastCommand({
                message: "set_click_zones",
                zones: Array.from(b.values()).map(e => {
                    let {
                        zone: t
                    } = e;
                    return t
                })
            }), n = e, _ || (n.setClickZoneCallback((e, t, n) => {
                let i = b.get(e);
                null != i && (A || (y.x = t, y.y = n), i.instance.click())
            }), _ = !0)
        }
}
let _ = !1;
class v extends(i = r.PureComponent) {
    componentDidMount() {
        this.props.observe ? this.observeZone() : this.updateZone()
    }
    componentWillUnmount() {
        this.interval.stop(), O(this.zone, null)
    }
    componentDidUpdate(e) {
        let {
            observe: t
        } = this.props;
        t !== e.observe && (t ? this.observeZone() : this.interval.stop())
    }
    render() {
        return r.Children.only(this.props.children)
    }
    observeZone() {
        this.updateZone(), this.interval.start(this.props.observeInterval, this.updateZone)
    }
    click() {
        let e = (0, p._)("click", y.x, y.y);
        (0, p.K)(e, y.x, y.y)
    }
    constructor(...e) {
        super(...e), g(this, "zone", l().uniqueId("ClickArea")), g(this, "interval", new c.IX), g(this, "updateZone", () => {
            let e = this.props.contentDomRef.current;
            if ((0, o.vq)(e)) {
                let {
                    left: t,
                    top: n,
                    right: i,
                    bottom: r
                } = e.getBoundingClientRect();
                O(this.zone, {
                    instance: this,
                    zone: {
                        name: this.zone,
                        left: Math.floor(t),
                        top: Math.floor(n),
                        right: Math.ceil(i),
                        bottom: Math.ceil(r)
                    }
                })
            }
        })
    }
}
g(v, "defaultProps", {
    observe: !0,
    observeInterval: 1e3
})