/** Chunk was on web.js **/
/** chunk id: 244912, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => l
});
var r = n(64700),
    i = n(500345),
    a = n(2242),
    o = n(788868),
    s = n(985018);

function l(e) {
    return r.useMemo(() => {
        var t;
        let n = a.p$.map(e => ({
                value: e,
                label: e.interval === o.WT.DAY && 7 === e.interval_count ? s.intl.formatToPlainString(s.t.XfSsr1, {
                    defaultLimit: (0, i.Gg)(e)
                }) : (0, i.Gg)(e),
                isDefault: e.interval === o.WT.DAY && 7 === e.interval_count
            })),
            r = null != e ? null == (t = n.find(t => null != t.value && t.value.interval === e.interval && t.value.interval_count === e.interval_count)) ? void 0 : t.value : e;
        return {
            options: n,
            selectedOption: r
        }
    }, [e])
}