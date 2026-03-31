/** chunk id: 745891 params = (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => m
});
var i = n(627968),
    s = n(64700),
    a = n(311907),
    l = n(397927),
    r = n(684013),
    o = n(915089),
    d = n(256415),
    c = n(448296),
    u = n(672396),
    h = n(652215),
    p = n(985018),
    f = n(189046);
let _ = Object.values(u.Li).map(e => 100 * e),
    A = (0, o.Ld)();
class g extends s.PureComponent {
    initialValue = 100 * this.props.opacity;
    handleUpdateBackgroundOpacity(e) {
        r.A.setTextWidgetOpacity((0, c.A)(e / 100)), r.A.track(h.HAw.OVERLAY_SETTINGS_UPDATED, {
            text_opacity_slider: e
        })
    }
    handlePreviewBackgroundOpacity(e) {
        r.A.setTextWidgetOpacity((0, c.A)(e / 100))
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
                    minValue: _[0],
                    maxValue: _[_.length - 1],
                    handleSize: 10,
                    onValueChange: this.handleUpdateBackgroundOpacity,
                    asValueChanges: this.handlePreviewBackgroundOpacity,
                    markers: _,
                    onMarkerRender: h.tEg,
                    equidistant: !0,
                    stickToMarkers: !0,
                    "aria-labelledby": A
                })
            })
        })
    }
}
let m = a.Ay.connectStores([d.default], () => ({
    opacity: d.default.getTextWidgetOpacity()
}))(g)