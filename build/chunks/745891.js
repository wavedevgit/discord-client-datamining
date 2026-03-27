/** chunk id: 745891 params = (module,exports,require) **/
"use strict";
i.d(t, {
    A: () => A
});
var n = i(627968),
    s = i(64700),
    a = i(311907),
    l = i(397927),
    r = i(684013),
    o = i(915089),
    d = i(256415),
    c = i(448296),
    u = i(672396),
    h = i(652215),
    _ = i(985018),
    p = i(556141);
let f = Object.values(u.Li).map(e => 100 * e),
    m = (0, o.Ld)();
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
        return (0, n.jsx)("div", {
            className: p.kL,
            children: (0, n.jsx)("div", {
                className: p.xJ,
                children: (0, n.jsx)(l.Apm, {
                    label: _.intl.string(_.t.OVovCb),
                    mini: !0,
                    initialValue: this.initialValue,
                    defaultValue: this.initialValue,
                    minValue: f[0],
                    maxValue: f[f.length - 1],
                    handleSize: 10,
                    onValueChange: this.handleUpdateBackgroundOpacity,
                    asValueChanges: this.handlePreviewBackgroundOpacity,
                    markers: f,
                    onMarkerRender: h.tEg,
                    equidistant: !0,
                    stickToMarkers: !0,
                    "aria-labelledby": m
                })
            })
        })
    }
}
let A = a.Ay.connectStores([d.default], () => ({
    opacity: d.default.getTextWidgetOpacity()
}))(g)