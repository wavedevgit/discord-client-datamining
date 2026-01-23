/** Chunk was on web.js **/
/** chunk id: 314695, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => b
});
var r = n(627968),
    i = n(64700),
    a = n(311907),
    s = n(554146),
    o = n(688810),
    l = n(826673),
    c = n(740625),
    u = n(524738),
    d = n(628965),
    f = n(734066),
    p = n(572066),
    _ = n(332921),
    h = n(957498),
    m = n(652215),
    g = n(355097),
    E = n(531525),
    y = n(985018);

function b() {
    let {
        analyticsLocations: e
    } = (0, o.Ay)(), t = (0, f.sw)(), n = (0, a.bG)([d.A], () => d.A.getSubsection()), {
        enableAdvancedSignals: b
    } = f.L_.useExperiment({
        location: "clips_settings"
    }, {
        autoTrackExposure: !1
    });
    i.useEffect(() => {
        (0, l.Dr)(s.M.CLIPS_SETTINGS_BETA_TAG)
    });
    let O = [{
            title: y.intl.string(y.t.iIwmV5),
            component: h.A,
            setting: E.H.CLIPS_RECORDING_TAB,
            subsection: g.Oi,
            predicate: () => t
        }, {
            title: y.intl.string(y.t.sA0WKL),
            component: p.A,
            setting: E.H.CLIPS_AUTOMATIC_TAB,
            subsection: g.Yn,
            predicate: () => t && b
        }, {
            title: y.intl.string(y.t.GcIeET),
            component: _.A,
            setting: E.H.CLIPS_PRIVACY_TAB,
            subsection: g.nB
        }],
        v = O.findIndex(e => null != e.subsection && e.subsection === n);
    return (0, r.jsx)(o.f5, {
        value: e,
        children: (0, r.jsx)(c.R, {
            header: y.intl.string(y.t.z2jK6X),
            children: (0, r.jsx)(u.A, {
                parentSetting: E.H.CLIPS,
                settingsSection: m.nc_.CLIPS,
                tabs: O,
                defaultTabIndex: v > -1 ? v : void 0
            })
        })
    })
}