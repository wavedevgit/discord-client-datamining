/** Chunk was on web.js **/
/** chunk id: 693879, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => m,
    z: () => h
});
var r = n(627968),
    i = n(64700),
    a = n(503698),
    o = n.n(a),
    s = n(311907),
    l = n(397927),
    c = n(773669),
    u = n(574520),
    d = n(583846),
    f = n(977788),
    p = n(809854),
    _ = n(181691);
let h = e => {
        let {
            entry: t,
            inline: n = !1,
            textColor: a,
            textTabularNumbers: s = !0,
            textFontCode: c = !0,
            hovered: u = !1,
            bold: h = !1,
            scaleFontToUserSetting: m = !1
        } = e, {
            now: g
        } = (0, p.e)(u), {
            enabled: E
        } = f.e.useConfig({
            location: "active_timestamp"
        }), y = i.useMemo(() => (0, d.W6)(t, g), [t, g]), b = i.useRef(y), O = i.useRef(y);
        return i.useEffect(() => {
            O.current = y
        }), i.useEffect(() => {
            b.current = O.current
        }, [t]), (0, r.jsx)(l.Text, {
            className: o()({
                [_.$N]: !!E || c,
                [_.Cr]: !E && h,
                [_.E1]: n
            }),
            variant: E ? "text-xs/normal" : "text-xs/medium",
            tabularNumbers: s,
            color: a,
            scaleFontToUserSetting: m,
            "aria-label": b.current,
            children: y
        })
    },
    m = e => {
        var t, n;
        let {
            entry: i,
            textColor: a,
            hovered: o = !1,
            bold: f = !1,
            scaleFontToUserSetting: p = !1
        } = e, _ = (0, d.Hd)(i), m = (0, s.bG)([c.default], () => c.default.locale), g = (0, s.bG)([u.A], () => u.A.getMatchingActivity(i)), E = null != (t = null == g || null == (n = g.timestamps) ? void 0 : n.start) ? t : null == g ? void 0 : g.created_at;
        return null != E ? (0, r.jsx)(h, {
            entry: {
                start: E
            },
            textColor: a,
            hovered: o,
            bold: f,
            scaleFontToUserSetting: p
        }) : _ ? (0, r.jsx)(h, {
            entry: i,
            textColor: a,
            hovered: o,
            bold: f,
            scaleFontToUserSetting: p
        }) : (0, r.jsx)(l.Text, {
            variant: "text-xs/normal",
            color: a,
            lineClamp: 1,
            scaleFontToUserSetting: p,
            children: (0, d.aJ)(i, m)
        })
    }