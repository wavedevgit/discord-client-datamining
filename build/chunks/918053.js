/** Chunk was on 4670 **/
/** chunk id: 918053, original params: e,t,i (module,exports,require) **/
i.d(t, {
    $: () => A
});
var n = i(391973),
    l = i(395011),
    s = i(897720),
    r = i(419954),
    a = i(555528),
    u = i(780964),
    o = i(790076),
    d = i(652215);
i(392164);
var T = i(985018);

function c() {
    let e = l.A.getWidgetByType(d.uss.VOICE_V3);
    if (null == e) return null;
    let t = a.A.getWidget(e.id);
    return null != t && (0, s.ZO)(t) ? t : null
}
let A = (0, r.sN)(u.X.OVERLAY_VOICE_WIDGET_MAX_USERS, {
    fieldLayout: "horizontal",
    useTitle: () => T.intl.string(T.t["X/Uyzc"]),
    minValue: o.G6 - 1,
    maxValue: o.PP,
    markers: o.DA,
    onMarkerRender: e => e < o.G6 ? T.intl.string(T.t.nrUzFL) : e,
    getInitialValue: () => {
        var e;
        let t = c();
        return null != (e = null == t ? void 0 : t.meta.voiceStatesMaxShown) ? e : 8
    },
    onValueRender: function(e) {
        return e < o.G6 ? T.intl.string(T.t.nrUzFL) : "".concat(Math.floor(e))
    },
    setValue: e => {
        let t = c();
        null != t && (e < o.G6 ? (0, n.cC)(t.id, {
            voiceStatesMaxShown: -1
        }) : (0, n.cC)(t.id, {
            voiceStatesMaxShown: Math.floor(e)
        }))
    }
})