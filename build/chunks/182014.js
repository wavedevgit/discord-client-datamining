/** Chunk was on web.js **/
/** chunk id: 182014, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => o
});
var r = n(734057),
    i = n(652215);

function a(e) {
    if (null == e.parent_id)
        if (e.type === i.rbe.GUILD_CATEGORY) return (e.position + 1) * 1e3;
        else return e.position;
    {
        var t, n;
        let i = ((null != (t = null == (n = r.A.getChannel(e.parent_id)) ? void 0 : n.position) ? t : 0) + 1) * 1e3;
        return e.isGuildVocal() ? i + e.position + 500 : i + e.position
    }
}

function o(e, t) {
    var n, r, i, o, s, l;
    if (e.score !== t.score) return t.score - e.score;
    let c = a(e.record),
        u = a(t.record);
    if (c !== u) return c - u;
    let d = null != (n = null != (r = e.sortable) ? r : null == (s = e.comparator) ? void 0 : s.toLocaleLowerCase()) ? n : "",
        f = null != (i = null != (o = e.sortable) ? o : null == (l = t.comparator) ? void 0 : l.toLocaleLowerCase()) ? i : "";
    return d < f ? -1 : +(d > f)
}