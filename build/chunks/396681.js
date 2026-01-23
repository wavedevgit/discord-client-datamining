/** Chunk was on 34078 **/
/** chunk id: 396681, original params: e,t,r (module,exports,require) **/
r.d(t, {
    A: () => s
}), r(747238);
var n = r(492462);

function s(e) {
    let t = null != e.hash && "" !== e.hash ? (0, n.parse)(e.hash) : null;
    if ((null == t ? void 0 : t.token) != null) return t.token;
    let r = null != e.search && "" !== e.search ? (0, n.parse)(e.search) : null;
    return (null == r ? void 0 : r.token) != null ? r.token : null
}