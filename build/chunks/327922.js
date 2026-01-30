/** chunk id: 327922, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => s
});
var r = n(29583),
    i = n(618027),
    a = n(998280),
    o = n(98430);

function s(e, t) {
    (0, i.A)(1, arguments);
    var n, s, l, c, u, d, f, p, _ = (0, o.q)(),
        h = (0, a.A)(null != (n = null != (s = null != (l = null != (c = null == t ? void 0 : t.weekStartsOn) ? c : null == t || null == (u = t.locale) || null == (d = u.options) ? void 0 : d.weekStartsOn) ? l : _.weekStartsOn) ? s : null == (f = _.locale) || null == (p = f.options) ? void 0 : p.weekStartsOn) ? n : 0);
    if (!(h >= 0 && h <= 6)) throw RangeError("weekStartsOn must be between 0 and 6 inclusively");
    var m = (0, r.default)(e),
        g = m.getUTCDay(),
        E = 7 * (g < h) + g - h;
    return m.setUTCDate(m.getUTCDate() - E), m.setUTCHours(0, 0, 0, 0), m
}