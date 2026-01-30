/** chunk id: 603392, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    r: () => o
});
var r = n(64700),
    i = n(844222),
    a = n(460890);

function o(e, t) {
    var n;
    let {
        theme: o,
        saturation: s,
        experiments: l
    } = (0, a.G9)(), {
        highContrastModeEnabled: c
    } = r.useContext(i.C), u = "compact", d = null != (n = null == l ? void 0 : l.enabledExperiments) ? n : [];
    return e.resolve({
        theme: null != t ? t : o,
        saturation: s,
        enabledExperiments: d,
        density: u,
        highContrastModeEnabled: c
    })
}