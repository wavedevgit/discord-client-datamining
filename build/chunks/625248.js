/** chunk id: 625248, original params: e,t,n (module,exports,require) **/
n.d(t, {
    l: () => d
}), n(938796);
var i = n(665260),
    l = n(134861),
    r = n(528767),
    a = n(723702),
    s = n(182892),
    o = n(652215);

function d(e) {
    if (null == e) return null;
    let t = e.application_id;
    if (null == t || !(0, i.Lt)(e.flags ?? 0, o.jUm.SUPPORTS_GATEWAY_ACTIVITY_ACTION_JOIN)) return null;
    let n = r.A.getRemoteApplicationActivity(t);
    return null == n || function(e) {
        let {
            platform: t
        } = e;
        return !!(0, s.e)(e) || ((0, a.isAndroid)() ? t === o.yTV.ANDROID : (0, a.isIOS)() ? t === o.yTV.IOS : (0, a.isWeb)() ? t === o.yTV.DESKTOP : !!(0, a.isDesktop)() && null != e.application_id && l.A.isConnected(e.application_id) && t === o.yTV.DESKTOP)
    }(n) ? null : (0, i.Lt)(n.flags ?? 0, o.jUm.SUPPORTS_GATEWAY_ACTIVITY_ACTION_JOIN) ? n.platform ?? null : null
}