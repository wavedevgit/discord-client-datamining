/** Chunk was on 84018 **/
/** chunk id: 745891, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => m
}), n(896048);
var i = n(627968),
    r = n(64700),
    s = n(311907),
    l = n(397927),
    o = n(684013),
    a = n(915089),
    c = n(256415),
    d = n(448296),
    u = n(672396),
    h = n(652215),
    p = n(985018),
    f = n(877911);
let g = Object.values(u.Li).map(e => 100 * e),
    y = (0, a.Ld)();
class A extends r.PureComponent {
    handleUpdateBackgroundOpacity(e) {
        o.A.setTextWidgetOpacity((0, d.A)(e / 100)), o.A.track(h.HAw.OVERLAY_SETTINGS_UPDATED, {
            text_opacity_slider: e
        })
    }
    handlePreviewBackgroundOpacity(e) {
        o.A.setTextWidgetOpacity((0, d.A)(e / 100))
    }
    render() {
        return (0, i.jsx)("div", {
            className: f.kL,
            children: (0, i.jsx)("div", {
                className: f.xJ,
                children: (0, i.jsx)(l.Apm, {
                    label: p.intl.string(p.t.OVovCb),
                    mini: !0,
                    initialValue: this.initialValue,
                    defaultValue: this.initialValue,
                    minValue: g[0],
                    maxValue: g[g.length - 1],
                    handleSize: 10,
                    onValueChange: this.handleUpdateBackgroundOpacity,
                    asValueChanges: this.handlePreviewBackgroundOpacity,
                    markers: g,
                    onMarkerRender: h.tEg,
                    equidistant: !0,
                    stickToMarkers: !0,
                    "aria-labelledby": y
                })
            })
        })
    }
    constructor(...e) {
        super(...e),
            function(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n
            }(this, "initialValue", 100 * this.props.opacity)
    }
}
let m = s.Ay.connectStores([c.default], () => ({
    opacity: c.default.getTextWidgetOpacity()
}))(A)