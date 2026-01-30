/** chunk id: 12663, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => r
});

function r(e, t, n) {
    let r = n[e.pingUrl],
        l = n[t.pingUrl];
    return (null == r ? void 0 : r.rtt) != null && (null == l ? void 0 : l.rtt) != null ? r.rtt - l.rtt : (null == r ? void 0 : r.rtt) != null && (null == l ? void 0 : l.rtt) == null ? -1 : (null == r ? void 0 : r.rtt) == null && (null == l ? void 0 : l.rtt) != null ? 1 : (null == r ? void 0 : r.loading) && !(null == l ? void 0 : l.loading) ? -1 : !(null == r ? void 0 : r.loading) && (null == l ? void 0 : l.loading) || (null == r ? void 0 : r.error) && !(null == l ? void 0 : l.error) ? 1 : !(null == r ? void 0 : r.error) && (null == l ? void 0 : l.error) ? -1 : 0
}