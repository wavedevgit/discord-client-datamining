/** Chunk was on 77870 **/
/** chunk id: 325326, original params: e,t,n (module,exports,require) **/
n.d(t, {
    LF: () => p
}), n(896048);
var r = n(64700),
    l = n(311907),
    i = n(334738),
    s = n(964459),
    a = n(187508),
    o = n(245205),
    c = n(252431),
    u = n(810153),
    d = n(790782);
let p = () => {
    let {
        initialized: e,
        loading: t,
        items: n,
        hasMore: p,
        loadMore: h
    } = (e => {
        let {
            isFocused: t,
            navigatedAway: n,
            isDesktop: p,
            withMentions: h = !1,
            initialPageSize: f
        } = e, g = (0, l.bG)([u.A], () => u.A.shouldReload()), m = r.useRef(!1), [b, A] = r.useState(!1), {
            initialized: y,
            loading: _,
            items: O,
            hasMore: j,
            cursor: v,
            errored: x
        } = (0, l.cf)([c.A], () => ({
            initialized: c.A.initialized,
            loading: c.A.loading,
            items: c.A.items,
            hasMore: c.A.hasMore,
            cursor: c.A.cursor,
            errored: c.A.errored
        })), {
            roleFilter: E,
            everyoneFilter: C
        } = (0, l.cf)([a.Ay], () => ({
            everyoneFilter: a.Ay.everyoneFilter,
            roleFilter: a.Ay.roleFilter
        }));
        r.useEffect(() => ((0, o.BZ)(!0), () => (0, o.BZ)(!1)), []), r.useEffect(() => {
            y && t && (0, i.d_)(d.P.NOTIFICATION_CENTER)
        }, [t, y]);
        let S = (0, s.A)();
        r.useEffect(() => () => {
            p ? !S() && (x || O.length > 100) && (0, o.S3)() : n && O.length > 100 && (0, o.S3)()
        }, [n, O, p, S, x]), r.useEffect(() => {
            let e = g && t;
            (!y || e) && (0, o.ni)({
                limit: null != f ? f : h ? 8 : 20,
                with_mentions: h,
                roles_filter: E,
                everyone_filter: C
            })
        }, [y, g, t, h, E, C, f]);
        let I = r.useCallback(async e => {
            !m.current && y && j && null != v && (e || !x) && (m.current = !0, A(!0), await (0, o.ni)({
                after: v,
                with_mentions: h,
                roles_filter: E,
                everyone_filter: C,
                limit: h ? 8 : 20
            }, () => {
                m.current = !1
            }), A(!1))
        }, [y, j, v, x, h, E, C]);
        return {
            initialized: y,
            loading: _,
            items: O,
            hasMore: j,
            loadMore: I,
            loadingMore: b,
            setReadNotifItemToAcked: e => {
                e.acked || (e.acked = !0)
            },
            errored: x
        }
    })({
        isFocused: !0,
        isDesktop: !0
    });
    return {
        initialized: e,
        loading: t,
        items: n.filter(e => "notification-center-item" === e.kind),
        hasMore: p,
        loadMore: h
    }
}