/** Chunk was on 4670 **/
/** chunk id: 345007, original params: e,t,i (module,exports,require) **/
i.d(t, {
    o: () => T
});
var n = i(955572),
    l = i(775602),
    s = i(419954),
    r = i(253932),
    a = i(780964),
    u = i(381941),
    o = i(985018);
let d = e => "".concat(e.toFixed(0), "px"),
    T = (0, s.sN)(a.X.APPEARANCE_MESSAGE_GROUP_SPACING, {
        useTitle: () => o.intl.string(o.t.Q6lKkg),
        useSubtitle: () => o.intl.string(o.t.p7eUrb),
        markers: u.qh,
        stickToMarkers: !0,
        minValue: u.qh["0"],
        maxValue: u.qh[u.qh.length - 1],
        useDefaultValue: () => r.hH.useSetting() ? u.y5 : u.ES,
        getInitialValue: () => {
            let e = l.A.messageGroupSpacing,
                t = r.hH.getSetting();
            return null != e ? e : t ? u.y5 : u.ES
        },
        onValueRender: d,
        onMarkerRender: d,
        setValue: e => {
            switch (e) {
                case 0:
                case 4:
                case 8:
                case 16:
                case 24:
                    (0, n.AC)(e)
            }
        }
    })