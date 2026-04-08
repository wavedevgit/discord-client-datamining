/** chunk id: 325326 params = (module,exports,require) **/
n.d(t, {
    LF: () => h
});
var i = n(64700),
    l = n(311907),
    s = n(334738),
    a = n(964459),
    r = n(187508),
    o = n(245205),
    d = n(252431),
    c = n(810153),
    u = n(790782);
let h = () => {
    let {
        initialized: e,
        loading: t,
        items: n,
        hasMore: h,
        loadMore: A
    } = (e => {
        let {
            isFocused: t,
            navigatedAway: n,
            isDesktop: h,
            withMentions: A = !1,
            initialPageSize: _
        } = e, m = (0, l.bG)([c.A], () => c.A.shouldReload()), p = i.useRef(!1), [g, f] = i.useState(!1), {
            initialized: x,
            loading: E,
            items: I,
            hasMore: C,
            cursor: N,
            errored: T
        } = (0, l.cf)([d.A], () => ({
            initialized: d.A.initialized,
            loading: d.A.loading,
            items: d.A.items,
            hasMore: d.A.hasMore,
            cursor: d.A.cursor,
            errored: d.A.errored
        })), {
            roleFilter: S,
            everyoneFilter: b
        } = (0, l.cf)([r.Ay], () => ({
            everyoneFilter: r.Ay.everyoneFilter,
            roleFilter: r.Ay.roleFilter
        }));
        i.useEffect(() => ((0, o.BZ)(!0), () => (0, o.BZ)(!1)), []), i.useEffect(() => {
            x && t && (0, s.d_)(u.P.NOTIFICATION_CENTER)
        }, [t, x]);
        let v = (0, a.A)();
        i.useEffect(() => () => {
            h ? !v() && (T || I.length > 100) && (0, o.S3)() : n && I.length > 100 && (0, o.S3)()
        }, [n, I, h, v, T]), i.useEffect(() => {
            let e = m && t;
            (!x || e) && (0, o.ni)({
                limit: _ ?? (A ? 8 : 20),
                with_mentions: A,
                roles_filter: S,
                everyone_filter: b
            })
        }, [x, m, t, A, S, b, _]);
        let y = i.useCallback(async e => {
            !p.current && x && C && null != N && (e || !T) && (p.current = !0, f(!0), await (0, o.ni)({
                after: N,
                with_mentions: A,
                roles_filter: S,
                everyone_filter: b,
                limit: A ? 8 : 20
            }, () => {
                p.current = !1
            }), f(!1))
        }, [x, C, N, T, A, S, b]);
        return {
            initialized: x,
            loading: E,
            items: I,
            hasMore: C,
            loadMore: y,
            loadingMore: g,
            setReadNotifItemToAcked: e => {
                e.acked || (e.acked = !0)
            },
            errored: T
        }
    })({
        isFocused: !0,
        isDesktop: !0
    });
    return {
        initialized: e,
        loading: t,
        items: n.filter(e => "notification-center-item" === e.kind),
        hasMore: h,
        loadMore: A
    }
}