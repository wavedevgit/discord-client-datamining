/** Chunk was on 60449 **/
/** chunk id: 71995, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => j
});
var i = n(627968);
n(64700);
var s = n(311907),
    l = n(793574),
    r = n(688810),
    a = n(628965),
    o = n(740625),
    c = n(524738),
    d = n(998126),
    u = n(360668),
    g = n(175539),
    h = n(942515),
    x = n(355097),
    A = n(531525),
    p = n(652215),
    m = n(985018);

function j() {
    let {
        analyticsLocations: e
    } = (0, r.Ay)([l.A.USER_SETTINGS_VOICE_AND_VIDEO]), t = (0, s.bG)([a.A], () => a.A.getSubsection()), n = [{
        title: m.intl.string(m.t.K3lovD),
        component: g.A,
        setting: A.H.VOICE_AND_VIDEO_VOICE_TAB,
        subsection: x.V5
    }, {
        title: m.intl.string(m.t.FlNoSV),
        component: u.A,
        setting: A.H.VOICE_AND_VIDEO_VIDEO_TAB,
        subsection: x.Ss
    }, {
        title: m.intl.string(m.t.ABjMWI),
        component: d.A,
        setting: A.H.VOICE_AND_VIDEO_SOUNDBOARD_TAB,
        subsection: x.MJ
    }, {
        title: m.intl.string(m.t.OFpL3c),
        component: h.A,
        setting: A.H.VOICE_AND_VIDEO_DEBUG_TAB
    }], j = n.findIndex(e => null != e.subsection && e.subsection === t);
    return (0, i.jsx)(r.f5, {
        value: e,
        children: (0, i.jsx)(o.R, {
            header: m.intl.string(m.t.B1fFpf),
            children: (0, i.jsx)(c.A, {
                parentSetting: A.H.VOICE_AND_VIDEO,
                settingsSection: p.nc_.VOICE,
                tabs: n,
                defaultTabIndex: j > -1 ? j : void 0
            })
        })
    })
}